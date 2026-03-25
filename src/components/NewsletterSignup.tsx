import { useState } from 'react';

type Props = {
  /** Extra classes on the outer wrapper */
  className?: string;
  /** Light = About card; dark = emerald footer */
  variant?: 'light' | 'dark';
};

export default function NewsletterSignup({ className = '', variant = 'light' }: Props) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const isDark = variant === 'dark';

  return (
    <div className={className} id={isDark ? 'newsletter' : undefined}>
      <h4 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-emerald-900'}`}>
        Join the Newsletter
      </h4>
      <p className={`mb-4 leading-relaxed ${isDark ? 'text-emerald-100' : 'text-gray-600'}`}>
        Get weekly inspiration, practical tips, and the courage to take the leap.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={
            isDark
              ? 'flex-1 min-w-0 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500'
              : 'flex-1 min-w-0 px-4 py-3 rounded-lg text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500'
          }
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-white transition-colors shrink-0"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
