import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/ideatoplanincome/new-meeting';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function WorkWithMe() {
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    return () => {
      try {
        document.head.removeChild(script);
      } catch {
        /* already removed */
      }
      try {
        document.head.removeChild(link);
      } catch {
        /* already removed */
      }
    };
  }, []);

  const openCalendly = () => {
    if (calendlyReady && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
      });
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
  };

  const sessionFeatures = [
    'Identify the invisible blocks keeping you stuck',
    'Clarify what you actually want (not what you think you should want)',
    'Build your first action plan',
    'Cut through the fear and noise',
  ];

  const forYouIf = [
    "You know something needs to change, but you don't know where to start",
    "You've been \"waiting for the right time\" for months (or years)",
    "You're paralyzed by fear but ready to face it",
    'You want someone to call you out and push you forward',
  ];

  return (
    <section
      id="work-with-me"
      className="pt-8 pb-14 md:pt-10 md:pb-20 bg-emerald-50 relative z-10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-3 md:mb-4 text-center leading-tight">
          Ready to Stop Waiting and Start Moving?
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mb-5 md:mb-6 text-center max-w-3xl mx-auto leading-relaxed">
          You already know something has to change. You're not burned out. You're not lazy. You're
          just done pretending...
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-8 md:mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">The Leap Session</h3>

          <p className="text-lg text-gray-700 mb-8">
            A 45-minute private coaching call designed to cut through the fog and get you moving.
            This isn't therapy. This isn't a pep talk. This is a targeted intervention to identify
            your blocks, clarify your wants, and build your first real action plan.
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">What happens in the session:</h4>
            <ul className="space-y-3">
              {sessionFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6 mb-8">
            <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
              <Check className="w-6 h-6 mr-2" />
              This is for you if...
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {forYouIf.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-emerald-900 mb-2">$97</p>
            <p className="text-gray-500 mb-6">45-minute private session</p>
            <button
              type="button"
              onClick={openCalendly}
              className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Leap Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
