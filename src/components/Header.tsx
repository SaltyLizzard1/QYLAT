import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO_SRC = '/qlt-logo.png';

const NAV = [
  { label: 'Home', id: 'hero' },
  { label: 'Work With Me', id: 'work-with-me' },
  { label: 'The Leap Log', id: 'the-leap-log' },
  { label: 'Idea To Plan', id: 'idea-to-plan' },
  { label: 'My Story', id: 'my-story' },
] as const;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const headerBg = 'bg-[#8B9578]';
  const navClass =
    'text-white hover:text-white hover:bg-white/15 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-[15px]';

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 shadow-md border-b border-black/10 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 min-h-[4.5rem] md:min-h-[5rem] py-2">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="shrink-0 text-left rounded-xl bg-[#0a0a0a] px-2.5 py-2 sm:px-3 sm:py-2.5 shadow-md ring-1 ring-black/20 hover:ring-white/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="QLT — Home"
          >
            <img
              src={LOGO_SRC}
              alt="QLT — Quit Your Life and Travel"
              className="h-[42px] sm:h-[48px] md:h-[52px] w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[260px] object-contain object-left block"
              width={260}
              height={52}
              decoding="async"
            />
          </button>

          <nav className="hidden md:flex items-center justify-end gap-1 lg:gap-2 flex-1 min-w-0">
            {NAV.map(({ label, id }) => (
              <button key={label} type="button" onClick={() => scrollToSection(id)} className={navClass}>
                {label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-white/15 transition-colors text-white shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden border-t border-black/10 animate-fade-in ${headerBg}`}>
          <nav className="flex flex-col px-4 py-4 space-y-1">
            {NAV.map(({ label, id }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(id)}
                className="text-left text-white hover:bg-white/15 py-3 px-4 rounded-lg font-medium"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
