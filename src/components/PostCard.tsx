import type { Post } from '../data/posts';
import { images } from '../config/images';

type PostCardProps = {
  post: Post;
  onOpenPost: (slug: string) => void;
};

export default function PostCard({ post, onOpenPost }: PostCardProps) {
  // Special crop so the "dog" subject stays visible in desktop card view.
  const cardImageObjectPosition =
    post.slug === 'the-more-i-sort-the-more-appears'
      ? 'object-[center_30%]'
      : post.image === images.bini
        ? 'object-[55%_30%]'
        : post.image === images.baliAtm
          ? 'object-[center_22%]'
          : 'object-center';

  return (
    <div className="h-auto">
      <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-auto flex flex-col">
        {post.image && (
          <button
            type="button"
            onClick={() => post.content && onOpenPost(post.slug)}
            className="block w-full overflow-hidden text-left disabled:cursor-default"
            disabled={!post.content}
          >
            <img
              src={post.image}
              alt={post.title}
              className={`w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300 ${cardImageObjectPosition}`}
              loading="lazy"
            />
          </button>
        )}
        <div className="p-6 flex flex-col flex-1">
          <time className="text-sm text-gray-500 font-medium">{post.date}</time>
          <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 text-gray-600 line-clamp-3 flex-1">{post.excerpt}</p>
          {post.content ? (
            <button
              type="button"
              onClick={() => onOpenPost(post.slug)}
              className="mt-4 inline-block text-orange-600 hover:text-orange-800 font-medium"
            >
              Read the full leap →
            </button>
          ) : (
            <span className="mt-4 inline-block text-gray-400 font-medium">Coming soon</span>
          )}
        </div>
      </article>
    </div>
  );
}
