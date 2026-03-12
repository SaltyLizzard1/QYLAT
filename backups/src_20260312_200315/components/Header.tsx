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
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-xl md:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-emerald-800' : 'text-white'
            }`}
          >
            Quit Your Life
          </button>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'My Story', 'Work With Me', 'Idea To Plan'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase().replace(/ /g, '-'))
                }
                className={`transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {['Home', 'My Story', 'Work With Me', 'Idea To Plan'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase().replace(/ /g, '-'))
                }
                className="text-left text-gray-700 hover:text-orange-500 transition-colors py-2"
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
