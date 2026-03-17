import SectionDivider from './SectionDivider';
import { posts } from '../data/posts';

export default function LeapLog() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="the-leap-log"
      className="pt-16 md:pt-28 pb-12 md:pb-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-24"
    >
      {/* Intro */}
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900">
          The Leap Log
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
          Raw dispatches from the edge — fear, breakthroughs, Thailand realities.
          Not polished postcards; real reinvention in progress.
        </p>
        <p className="mt-6 text-base md:text-lg italic text-gray-500">
          If my leap pulls at you, let's build yours.{' '}
          <button
            onClick={() => scrollToSection('idea-to-plan')}
            className="text-orange-600 hover:underline font-medium"
          >
            Start here
          </button>
          .
        </p>
      </div>

      {/* Post grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="break-inside-avoid mb-8">
              <article
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {post.image && (
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <time className="text-sm text-gray-500 font-medium">
                    {post.date}
                  </time>
                  <h3 className="mt-2 text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <span className="mt-4 inline-block text-orange-600 hover:text-orange-800 font-medium cursor-pointer">
                    Read the full leap →
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 md:mt-16 text-center px-4">
        <button
          onClick={() => scrollToSection('idea-to-plan')}
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Take the Leap – Build Your Plan
        </button>
      </div>

      <SectionDivider bottomFill="#ffffff" />
    </section>
  );
}
