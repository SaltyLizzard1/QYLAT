import { useCallback, useEffect, useRef, useState } from 'react';
import SectionDivider from './SectionDivider';
import { posts, DAY_ZERO_SLUG } from '../data/posts';
import { scrollToSectionById } from '../utils/scrollToSection';

/** Panoramic lead — keep Bini (dog) in frame for card + modal crops */
const AI_BINI_LEAD = '/ai_bini.png';

/** Bali ATM post — bias crop toward top so ATM + person stay visible */
const BALI_BANK_LEAD = '/bali_bank.png';

function leadImagePositionClass(image: string, variant: 'card' | 'modal'): string {
  if (image === AI_BINI_LEAD) {
    return 'object-[55%_30%]';
  }
  if (image === BALI_BANK_LEAD) {
    return variant === 'modal' ? 'object-[center_18%]' : 'object-[center_22%]';
  }
  return variant === 'modal' ? 'object-[center_30%]' : 'object-center';
}

export default function LeapLog() {
  const scrollToSection = (id: string) => scrollToSectionById(id);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [dayZeroExpanded, setDayZeroExpanded] = useState(false);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const modalHeaderRef = useRef<HTMLElement>(null);

  const openPost = useCallback((slug: string) => {
    setOpenSlug(slug);
  }, []);

  const closePost = useCallback(() => {
    setOpenSlug(null);
  }, []);

  const activePost = openSlug ? posts.find((p) => p.slug === openSlug) : undefined;

  useEffect(() => {
    if (!openSlug) return;
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
  }, [openSlug, closePost]);

  useEffect(() => {
    if (!openSlug) return;
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
  }, [openSlug]);

  return (
    <section
      id="the-leap-log"
      className="pt-4 pb-14 md:pt-5 md:pb-20 bg-gradient-to-b from-white to-gray-50/80"
    >
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
          The Leap Log
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Raw dispatches from the edge — fear, breakthroughs, Thailand realities.
          Not polished postcards; real reinvention in progress.
        </p>
      </div>

      {/* Featured layout — Day 0 hero left, other posts stack right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Day 0 — Hero post */}
          {posts
            .filter((p) => p.slug === DAY_ZERO_SLUG)
            .map((post) => (
              <div key={post.id} className="scroll-mt-28" id="about">
                <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col min-h-full">
                  {post.image && (
                    <div className="w-full shrink-0 overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-72 object-cover object-center"
                        loading="eager"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Start Here
                      </span>
                      <time className="text-sm text-gray-500 font-medium">{post.date}</time>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{post.title}</h3>
                    {post.content && (
                      <>
                        {!dayZeroExpanded && (
                          <p className="mt-1 text-gray-600 leading-relaxed">{post.excerpt}</p>
                        )}
                        <button
                          type="button"
                          onClick={() => setDayZeroExpanded((v) => !v)}
                          aria-expanded={dayZeroExpanded}
                          aria-controls="day-zero-full-content"
                          id="day-zero-toggle"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-800 transition-colors"
                        >
                          <span>{dayZeroExpanded ? 'Show summary' : 'Read the full leap'}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${dayZeroExpanded ? 'rotate-180' : ''}`}
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {dayZeroExpanded && (
                          <div
                            id="day-zero-full-content"
                            className="border-t border-gray-100 pt-4 mt-4 text-left"
                          >
                            {post.content()}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </article>
              </div>
            ))}

          <div className="flex flex-col gap-8 self-start">
            {posts
              .filter((p) => p.slug !== DAY_ZERO_SLUG)
              .map((post) => (
                <div key={post.id} className="h-auto">
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-auto flex flex-col">
                    {post.image && (
                      <button
                        type="button"
                        onClick={() => post.content && openPost(post.slug)}
                        className="block w-full overflow-hidden text-left disabled:cursor-default"
                        disabled={!post.content}
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                          onClick={() => openPost(post.slug)}
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
              ))}
          </div>
        </div>
      </div>

      {/* Full post — modal (not inline below the list) */}
      {activePost?.content && activePost.slug !== DAY_ZERO_SLUG && (
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
              {activePost.content()}
            </article>
          </div>
        </div>
      )}

      <div className="mt-12 md:mt-16 text-center px-4">
        <button
          type="button"
          onClick={() => scrollToSection('work-with-me')}
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Take the Leap
        </button>
      </div>

      <SectionDivider bottomFill="#ffffff" />
    </section>
  );
}
