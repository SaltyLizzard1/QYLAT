import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-black/70 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20 md:h-24">
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-emerald-800' : 'text-white'
            }`}
          >
            Quit Your Life
          </button>

          <nav className="hidden md:flex space-x-2">
            {['Home', 'My Story', 'Work With Me', 'Idea To Plan'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase().replace(/ /g, '-'))
                }
                className={`px-6 py-2 rounded-lg transition-all duration-200 font-medium ${
                  isScrolled
                    ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                    : 'text-white hover:text-orange-400 hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col px-6 py-6 space-y-2">
            {['Home', 'My Story', 'Work With Me', 'Idea To Plan'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase().replace(/ /g, '-'))
                }
                className="text-left text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all py-3 px-4 rounded-lg font-medium"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
