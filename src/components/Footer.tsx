import { Instagram, Send, Mail } from 'lucide-react';
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
                href="#"
                className="w-10 h-10 bg-emerald-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
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
