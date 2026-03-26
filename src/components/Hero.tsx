import { useEffect, useState } from 'react';
import { images } from '../config/images';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = images.hero;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] min-h-screen overflow-hidden mb-8 md:mb-12 lg:mb-14"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${images.hero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
      </div>

      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      )}

      <div className="relative z-10 mx-auto flex min-h-[100dvh] min-h-screen w-full max-w-[100vw] flex-col items-center justify-center px-4 pb-12 sm:px-8 sm:pb-14 md:px-10 lg:px-14">
        <div className="w-full max-w-5xl text-center">
          <h1 className="text-[1.9rem] leading-[1.3] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 sm:mb-6 md:mb-8 drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)]">
            <span className="block mb-2.5 sm:mb-3 md:mb-4">Quit Your Life.</span>
            <span className="block">Design One That Actually Fits.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl leading-relaxed text-white/95 drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]">
            Leave the old life behind and build the next one with intention.
          </p>
          <div className="flex justify-center">
            <a
              href="#work-with-me"
              className="rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl transition-transform hover:scale-[1.02] hover:bg-emerald-700 hover:shadow-2xl sm:min-w-[11rem] sm:px-10 sm:py-4 sm:text-lg"
            >
              Take the Leap
            </a>
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