import { useCallback, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { images } from '../config/images';
import PostCard from './PostCard';
import SectionDivider from './SectionDivider';
import { posts } from '../data/posts';

function leadImagePositionClass(image: string, variant: 'card' | 'modal'): string {
  if (image === images.bini) {
    return 'object-[55%_30%]';
  }
  if (image === images.baliAtm) {
    return variant === 'modal' ? 'object-[center_18%]' : 'object-[center_22%]';
  }
  return variant === 'modal' ? 'object-[center_30%]' : 'object-center';
}

export default function LeapLog() {
  const { slug: slugParam } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const modalHeaderRef = useRef<HTMLElement>(null);

  const activePost = slugParam
    ? posts.find((p) => p.slug === slugParam && p.content)
    : undefined;

  useEffect(() => {
    if (!slugParam) return;
    const ok = posts.some((p) => p.slug === slugParam && p.content);
    if (!ok) navigate('/', { replace: true });
  }, [slugParam, navigate]);

  useEffect(() => {
    if (!slugParam) return;
    const t = window.setTimeout(() => {
      document.getElementById('the-leap-log')?.scrollIntoView({ block: 'start' });
    }, 80);
    return () => window.clearTimeout(t);
  }, [slugParam]);

  const openPost = useCallback(
    (slug: string) => {
      navigate(`/leap/${slug}`);
    },
    [navigate]
  );

  const closePost = useCallback(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  useEffect(() => {
    if (!slugParam) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePost();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [slugParam, closePost]);

  useEffect(() => {
    if (!slugParam) return;
    const scrollEl = modalScrollRef.current;
    const headerEl = modalHeaderRef.current;
    if (!scrollEl || !headerEl) return;
    const alignHeader = () => {
      const top =
        headerEl.getBoundingClientRect().top -
        scrollEl.getBoundingClientRect().top +
        scrollEl.scrollTop;
      scrollEl.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
    };
    requestAnimationFrame(() => {
      requestAnimationFrame(alignHeader);
    });
  }, [slugParam]);

  return (
    <section
      id="the-leap-log"
      className="pt-2 pb-10 md:pt-3 md:pb-14 bg-gradient-to-b from-white to-gray-50/80 scroll-mt-28"
    >
      <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">The Leap Log</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Raw dispatches from the edge. Fear, breakthroughs, Thailand realities.
          Not polished postcards; real reinvention in progress.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onOpenPost={openPost} />
          ))}
        </div>
      </div>

      {/* Full post — modal (not inline below the list) */}
      {activePost?.content && (
        <div
          ref={modalScrollRef}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-20 pb-10 sm:pt-24"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leap-post-title"
          onClick={closePost}
        >
          <div
            className="relative mb-8 w-full max-w-4xl rounded-2xl border border-gray-100 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end border-b border-gray-100 p-4">
              <button
                type="button"
                onClick={closePost}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span aria-hidden className="text-lg leading-none">
                  ×
                </span>
                Close
              </button>
            </div>

            {activePost.image && (
              <div className="w-full max-h-[400px] shrink-0 overflow-hidden bg-gray-100">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className={`h-[400px] max-h-[400px] w-full object-cover ${leadImagePositionClass(activePost.image, 'modal')}`}
                  loading="eager"
                  decoding="async"
                />
              </div>
            )}

            <header
              ref={modalHeaderRef}
              className="mb-8 scroll-mt-4 px-6 pt-6 text-center sm:px-8 md:px-10"
            >
              <p className="text-sm font-medium text-gray-500">{activePost.date}</p>
              <h2
                id="leap-post-title"
                className="mt-2 text-3xl font-bold text-emerald-900 md:text-4xl"
              >
                {activePost.title}
              </h2>
            </header>

            <article className="border-t border-gray-100 px-6 py-6 sm:px-8 md:px-10 md:py-10">
              {activePost.content({ onTakeLeapClick: closePost })}
            </article>
          </div>
        </div>
      )}

      <div className="mt-8 md:mt-10 text-center px-4">
        <a
          href="#work-with-me"
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Take the Leap
        </a>
      </div>

      <SectionDivider bottomFill="#ffffff" />
    </section>
  );
}
