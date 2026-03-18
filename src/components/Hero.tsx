import { useEffect, useState } from 'react';
import { scrollToSectionById } from '../utils/scrollToSection';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    const img = new Image();
    img.src = '/hero-mistymountains.png';
    img.onload = () => setImageLoaded(true);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => scrollToSectionById(id);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] min-h-screen overflow-x-hidden"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url(/hero-mistymountains.png)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
      </div>

      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      )}

      <div className="relative z-10 mx-auto flex min-h-[100dvh] min-h-screen w-full max-w-[100vw] flex-col items-center justify-center px-4 pt-24 pb-28 sm:px-8 sm:pt-28 sm:pb-32 md:px-10 md:pt-32 lg:px-14 lg:pt-36">
        <div className="w-full max-w-5xl text-center">
          <h1 className="text-[1.9rem] leading-[1.12] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 sm:mb-6 md:mb-8 drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]">
            Quit Your Life. Design One That Actually Fits.
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] xl:text-3xl leading-relaxed text-white/95 drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]">
            Leave the old life behind and build the next one with intention.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('my-story')}
              className="w-full rounded-xl bg-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-xl transition-transform hover:scale-[1.02] hover:bg-orange-600 hover:shadow-2xl sm:w-auto sm:min-w-[11rem] sm:px-10 sm:py-4 sm:text-lg"
            >
              Start Here
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('work-with-me')}
              className="w-full rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl transition-transform hover:scale-[1.02] hover:bg-emerald-700 hover:shadow-2xl sm:w-auto sm:min-w-[11rem] sm:px-10 sm:py-4 sm:text-lg"
            >
              Take the Leap
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 sm:bottom-7">
        <div className="animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/90 p-2 shadow-lg">
            <div className="h-3 w-1 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
