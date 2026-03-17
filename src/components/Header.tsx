import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const headerBg = 'bg-[#8f9b7e]'; // sage green
  const logoGradient = 'bg-gradient-to-r from-[#2d4a1f] via-[#3d5c2e] to-[#5c4033] bg-clip-text text-transparent';
  const navColor = 'text-[#2d3d28] hover:text-[#5c4033] hover:bg-white/20';

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md border-b border-[#7a8669] ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20 md:h-24">
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-left font-bold ${logoGradient}`}
          >
            <span className="block text-2xl md:text-3xl tracking-tight">Quit Your Life</span>
            <span className="block text-xl md:text-2xl italic">and Travel</span>
          </button>

          <nav className="hidden md:flex space-x-2">
            {['Home', 'Work With Me', 'The Leap Log', 'Idea To Plan', 'My Story'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase().replace(/ /g, '-'))
                }
                className={`px-6 py-2 rounded-lg transition-all duration-200 font-medium ${navColor}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2d3d28]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2d3d28]" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#9caa8e] border-t border-[#7a8669] animate-fade-in">
          <nav className="flex flex-col px-6 py-6 space-y-2">
            {['Home', 'Work With Me', 'The Leap Log', 'Idea To Plan', 'My Story'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase().replace(/ /g, '-'))
                }
                className="text-left text-[#2d3d28] hover:text-[#5c4033] hover:bg-white/20 transition-all py-3 px-4 rounded-lg font-medium"
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
