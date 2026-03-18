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

const navPillLg =
  'rounded-full px-4 py-2.5 lg:px-5 text-[13px] lg:text-sm font-semibold tracking-wide ' +
  'bg-gradient-to-b from-[#f4faf1] via-[#e8f2e3] to-[#dce8d6] text-[#145042] ' +
  'border-2 border-[#a8c99a]/90 shadow-[0_2px_10px_rgba(46,90,65,0.14)] ' +
  'hover:from-[#fffbf5] hover:via-[#fff4e6] hover:to-[#ffe8d4] hover:text-[#9a3412] ' +
  'hover:border-[#f6ad55] hover:shadow-[0_6px_20px_rgba(234,120,40,0.2)] ' +
  'hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200';

const navPillMd =
  'rounded-full px-2.5 py-2 text-[11px] font-semibold tracking-wide ' +
  'bg-gradient-to-b from-[#f4faf1] to-[#dce8d6] text-[#145042] border border-[#a8c99a] ' +
  'shadow-sm hover:from-[#fff8f0] hover:to-[#ffe4cc] hover:text-[#9a3412] hover:border-[#f6ad55] ' +
  'transition-all duration-200';

const navPillMobile =
  'text-left rounded-2xl py-3.5 px-4 font-semibold tracking-wide ' +
  'bg-gradient-to-r from-[#f4faf1] to-[#e0ebd8] text-[#145042] ' +
  'border-2 border-[#a8c99a]/80 shadow-md ' +
  'hover:from-[#fffaf3] hover:to-[#ffe8d4] hover:text-[#9a3412] hover:border-[#f6ad55] ' +
  'hover:shadow-lg transition-all duration-200';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /* Keep CSS scroll-padding in sync for hash links & keyboard focus */
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

  return (
    <header
      ref={headerRef}
      id={SITE_HEADER_ID}
      className={`sticky top-0 left-0 right-0 z-50 shadow-md border-b border-[#7a8f6c]/80 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-2 min-h-[4.75rem] sm:min-h-[5.25rem] md:min-h-24 py-1.5 md:py-2">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="shrink-0 text-left rounded-lg py-0.5 px-0.5 -ml-0.5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#92A882]"
            aria-label="QLT — Home"
          >
            <img
              src={LOGO_SRC}
              alt="QLT — Quit Your Life and Travel"
              className="h-[58px] sm:h-[68px] md:h-[84px] lg:h-[92px] w-auto max-w-[min(92vw,300px)] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] object-contain object-left block"
              width={440}
              height={92}
              decoding="async"
            />
          </button>

          <nav className="hidden lg:flex items-center justify-end gap-2 xl:gap-2.5 flex-1 min-w-0 flex-wrap">
            {NAV.map(({ label, id }) => (
              <button key={label} type="button" onClick={() => scrollToSection(id)} className={navPillLg}>
                {label}
              </button>
            ))}
          </nav>

          <nav className="hidden md:flex lg:hidden items-center justify-end gap-1.5 flex-1 min-w-0 flex-wrap">
            {NAV.map(({ label, id }) => (
              <button key={label} type="button" onClick={() => scrollToSection(id)} className={navPillMd}>
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
              <button key={label} type="button" onClick={() => scrollToSection(id)} className={navPillMobile}>
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
