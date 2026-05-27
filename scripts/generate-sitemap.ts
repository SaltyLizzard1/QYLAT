/**
 * Writes public/sitemap.xml from hardcoded posts in src/data/posts.tsx
 * plus any published posts fetched live from Sanity.
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { createClient } from '@sanity/client';
import type { Post } from '../src/data/posts';

const SITE_URL = 'https://quityourlifeandtravel.com';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

const sanity = createClient({
  projectId: 'zvvdrylu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

function toIsoDate(dateStr: string): string {
  const t = new Date(dateStr).getTime();
  if (Number.isNaN(t)) return new Date().toISOString().slice(0, 10);
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
  // Load hardcoded posts via Vite SSR
  const vite = await createServer({
    root,
    configFile: resolve(root, 'vite.config.ts'),
    logLevel: 'error',
    server: { middlewareMode: true },
  });

  let hardcodedPosts: Post[];
  try {
    const mod = (await vite.ssrLoadModule('/src/data/posts.tsx')) as { posts: Post[] };
    hardcodedPosts = mod.posts.filter((p) => p.content);
  } finally {
    await vite.close();
  }

  // Fetch Sanity posts
  const sanityPosts: { slug: string; publishedAt: string }[] = await sanity.fetch(
    `*[_type == "post" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc) {
      "slug": slug.current,
      publishedAt
    }`
  );

  // Merge — Sanity wins on duplicate slugs
  const sanitySlugSet = new Set(sanityPosts.map((p) => p.slug));
  const filteredHardcoded = hardcodedPosts.filter((p) => !sanitySlugSet.has(p.slug));

  // Build unified list sorted newest-first
  const allEntries: { slug: string; date: string }[] = [
    ...sanityPosts.map((p) => ({ slug: p.slug, date: p.publishedAt })),
    ...filteredHardcoded.map((p) => ({ slug: p.slug, date: p.date })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const homeLastmod = allEntries.length > 0 ? toIsoDate(allEntries[0].date) : new Date().toISOString().slice(0, 10);

  const leapEntries = allEntries.map((p) =>
    urlEntry(`${SITE_URL}/leap/${p.slug}`, toIsoDate(p.date), 'monthly', '0.8')
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntry(`${SITE_URL}/`, homeLastmod, 'weekly', '1.0')}
${leapEntries.join('\n')}
</urlset>
`;

  writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8');
  console.log(
    '[generate-sitemap] wrote public/sitemap.xml (%d hardcoded + %d Sanity = %d total URLs)',
    filteredHardcoded.length,
    sanityPosts.length,
    allEntries.length
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
