import { useEffect, useState } from 'react';

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url(/hero-mistymountains.png)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      )}

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="relative max-w-5xl mx-auto z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-[0_6px_8px_rgba(0,0,0,0.6)]">
            Quit Your Life. Design One That Actually Fits.
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
            Leave the old life behind and build the next one with intention.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={() => scrollToSection('my-story')}
              className="min-w-[180px] px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Start Here
            </button>
            <button
              onClick={() => scrollToSection('work-with-me')}
              className="min-w-[180px] px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg rounded-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Take the Leap
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
