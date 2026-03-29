/**
 * Writes public/sitemap.xml from Leap Log posts in src/data/posts.tsx.
 * Uses Vite SSR load so import.meta.env and TSX resolve like the app.
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import type { Post } from '../src/data/posts';

const SITE_URL = 'https://quityourlifeandtravel.com';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

function toIsoDate(dateStr: string): string {
  const t = new Date(dateStr).getTime();
  if (Number.isNaN(t)) {
    return new Date().toISOString().slice(0, 10);
  }
  return new Date(t).toISOString().slice(0, 10);
}

function urlEntry(loc: string, lastmod: string, changefreq: string, priority: string): string {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  const vite = await createServer({
    root,
    configFile: resolve(root, 'vite.config.ts'),
    logLevel: 'error',
    server: { middlewareMode: true },
  });

  let posts: Post[];
  try {
    const mod = (await vite.ssrLoadModule('/src/data/posts.tsx')) as { posts: Post[] };
    posts = mod.posts;
  } finally {
    await vite.close();
  }

  const published = posts.filter((p) => p.content);
  const leapEntries = [...published]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((p) =>
      urlEntry(`${SITE_URL}/leap/${p.slug}`, toIsoDate(p.date), 'monthly', '0.8')
    );

  const homeLastmod =
    published.length > 0
      ? toIsoDate(
          published.reduce((best, p) => {
            return new Date(p.date) > new Date(best.date) ? p : best;
          }, published[0]).date
        )
      : new Date().toISOString().slice(0, 10);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntry(`${SITE_URL}/`, homeLastmod, 'weekly', '1.0')}
${leapEntries.join('\n')}
</urlset>
`;

  writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8');
  console.log('[generate-sitemap] wrote public/sitemap.xml (%d leap URLs)', leapEntries.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
