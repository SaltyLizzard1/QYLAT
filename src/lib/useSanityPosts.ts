import { useState, useEffect } from 'react';
import { sanityClient, urlFor } from './sanity';

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  postType: 'blog' | 'discussion' | 'photo-essay';
  excerpt: string;
  heroImageUrl: string | null;
  gallery: { url: string; caption?: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
  publishedAt: string;
  featured: boolean;
  tags: string[];
  category: { title: string; slug: string } | null;
}

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  postType,
  excerpt,
  heroImage,
  gallery[] {
    asset->,
    caption
  },
  body,
  publishedAt,
  featured,
  tags,
  category-> {
    title,
    "slug": slug.current
  }
}`;

export function useSanityPosts() {
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(POSTS_QUERY)
      .then((data: Record<string, unknown>[]) => {
        const mapped: SanityPost[] = data.map((post) => ({
          _id: post._id as string,
          title: post.title as string,
          slug: post.slug as string,
          postType: (post.postType as SanityPost['postType']) || 'blog',
          excerpt: (post.excerpt as string) || '',
          heroImageUrl: post.heroImage
            ? urlFor(post.heroImage).width(800).url()
            : null,
          gallery: Array.isArray(post.gallery)
            ? post.gallery.map((img: Record<string, unknown>) => ({
                url: urlFor(img).width(800).url(),
                caption: (img.caption as string) || undefined,
              }))
            : [],
          body: (post.body as SanityPost['body']) || [],
          publishedAt: post.publishedAt as string,
          featured: (post.featured as boolean) || false,
          tags: (post.tags as string[]) || [],
          category: post.category as SanityPost['category'],
        }));
        setPosts(mapped);
        setLoading(false);
      })
      .catch((err: Error) => {
        console.error('Sanity fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { posts, loading, error };
}
