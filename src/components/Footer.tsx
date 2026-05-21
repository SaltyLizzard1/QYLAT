import { Instagram, Mail } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';
import { scrollToSectionById } from '../utils/scrollToSection';

export default function Footer() {
  const scrollToSection = (id: string) => scrollToSectionById(id);

  return (
    <footer
      id="site-footer"
      className="bg-emerald-900 text-white rounded-t-[1.75rem] pt-10 pb-12 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Quit Your Life and Travel</h3>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Stop waiting for permission. Start designing a life that actually fits.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/liz_alfond/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/liz.alfond"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.tiktok.com/@quityourlifeandtravel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.83 4.83 0 01-1-.15z"/></svg>
              </a>
              <a
                href="mailto:lizalfond@gmail.com"
                className="w-10 h-10 bg-emerald-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <NewsletterSignup variant="dark" />
        </div>

        <div className="border-t border-emerald-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
              <button
                onClick={() => scrollToSection('hero')}
                className="hover:text-orange-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('work-with-me')}
                className="hover:text-orange-400 transition-colors"
              >
                Work With Me
              </button>
              <button
                onClick={() => scrollToSection('idea-to-plan')}
                className="hover:text-orange-400 transition-colors"
              >
                Idea To Plan
              </button>
              <button
                onClick={() => scrollToSection('the-leap-log')}
                className="hover:text-orange-400 transition-colors"
              >
                The Leap Log
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-orange-400 transition-colors"
              >
                About
              </button>
            </nav>

            <p className="text-emerald-200 text-sm">
              © 2026 Quit Your Life and Travel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
