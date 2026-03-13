import { Instagram, Send, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-emerald-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
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

          <div>
            <h4 className="text-xl font-bold mb-6">Join the Newsletter</h4>
            <p className="text-emerald-100 mb-4">
              Get weekly inspiration, practical tips, and the courage to take the leap.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
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
                onClick={() => scrollToSection('my-story')}
                className="hover:text-orange-400 transition-colors"
              >
                My Story
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
