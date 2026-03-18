import { useState, useRef, useLayoutEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_HEADER_ID, scrollToSectionById } from '../utils/scrollToSection';

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
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const sync = () => {
      const h = el.getBoundingClientRect().height;
      const mobile = window.innerWidth < 768;
      const buffer = mobile ? 28 : 14;
      document.documentElement.style.setProperty(
        '--header-scroll-padding',
        `${Math.ceil(h) + buffer}px`
      );
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener('resize', sync);
    const mq = window.matchMedia('(max-width: 767px)');
    mq.addEventListener('change', sync);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', sync);
      mq.removeEventListener('change', sync);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const fromMenu = isMobileMenuOpen;
    setIsMobileMenuOpen(false);
    scrollToSectionById(id, { afterMobileMenuClose: fromMenu });
  };

  const headerBg = 'bg-[#92A882]';
  const navPill =
    'rounded-full px-4 py-2.5 xl:px-5 xl:py-3 font-bold text-sm xl:text-[0.95rem] whitespace-nowrap ' +
    'bg-gradient-to-b from-[#f8faf6] to-[#e2ead8] text-[#1a4d3a] border-2 border-white/95 ' +
    'shadow-md shadow-black/10 hover:from-white hover:to-[#f0f5ec] hover:border-amber-300/90 ' +
    'hover:text-[#0d3d2e] hover:shadow-lg active:scale-[0.98] transition-all duration-200';

  const navPillMobile =
    'w-full text-center rounded-full px-5 py-3 font-bold text-base ' +
    'bg-gradient-to-b from-[#f8faf6] to-[#e2ead8] text-[#1a4d3a] border-2 border-white/95 ' +
    'shadow-md hover:from-white hover:to-[#f0f5ec] hover:border-amber-300/90 transition-all';

  return (
    <header
      ref={headerRef}
      id={SITE_HEADER_ID}
      className={`sticky top-0 left-0 right-0 z-50 shadow-md border-b border-[#7a8f6c]/80 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-2 min-h-[4.75rem] sm:min-h-[5.5rem] md:min-h-28 py-2 md:py-2.5">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 sm:gap-3 md:gap-4 min-w-0 flex-none text-left rounded-lg py-1 pr-2 -ml-0.5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#92A882] max-w-none sm:max-w-none"
            aria-label="QLT — Home"
          >
            <img
              src={LOGO_SRC}
              alt=""
              className="h-[70px] w-auto sm:h-[86px] md:h-[100px] lg:h-[116px] shrink-0 object-contain object-left"
              height={116}
              decoding="async"
            />
            <span className="min-w-0 text-left border-l-2 border-white/40 pl-2 sm:pl-3 md:pl-4">
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-snug tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                Quit Your Life
              </span>
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-emerald-50 leading-snug tracking-wide drop-shadow mt-px">
                and Travel
              </span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center justify-end gap-2 xl:gap-2.5 flex-1 min-w-0 flex-wrap">
            {NAV.map(({ label, id }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(id)}
                className={navPill}
              >
                {label}
              </button>
            ))}
          </nav>

          <nav className="hidden md:flex lg:hidden items-center justify-end gap-2 flex-1 min-w-0 flex-wrap">
            {NAV.map(({ label, id }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(id)}
                className={navPill}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden p-3 rounded-full bg-gradient-to-b from-[#f4faf1] to-[#dce8d6] border-2 border-[#a8c99a] text-[#145042] shadow-md hover:from-[#fff8f0] hover:to-[#ffe8d4] hover:border-[#f6ad55] hover:shadow-lg transition-all shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden border-t border-[#7a8f6c]/60 animate-fade-in ${headerBg} shadow-inner`}>
          <nav className="flex flex-col gap-2.5 px-4 py-4">
            {NAV.map(({ label, id }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(id)}
                className={navPillMobile}
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