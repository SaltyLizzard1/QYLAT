import { Check, X } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    if (calendlyReady && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/ideatoplanincome/60min',
      });
    } else {
      window.open('https://calendly.com/ideatoplanincome/60min', '_blank');
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

  const notForYouIf = [
    "You're just browsing and not serious about making a change",
    'You want someone to tell you what to do',
    "You're looking for a magic pill or quick fix",
    "You're not willing to be uncomfortable",
  ];

  return (
    <section id="work-with-me" className="py-20 md:py-32 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 text-center">
          Ready to Stop Waiting and Start Moving?
        </h2>

        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          You already know something has to change. You're not burned out. You're not lazy. You're
          just done pretending...
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-emerald-800 mb-6">The Leap Session</h3>

          <p className="text-lg text-gray-700 mb-8">
            A 60-minute private coaching call designed to cut through the fog and get you moving.
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

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-emerald-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-emerald-900 mb-4 flex items-center">
                <Check className="w-6 h-6 mr-2" />
                This is for you if...
              </h4>
              <ul className="space-y-3">
                {forYouIf.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                <X className="w-6 h-6 mr-2" />
                This is not for you if...
              </h4>
              <ul className="space-y-3">
                {notForYouIf.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-emerald-900 mb-2">$97</p>
            <p className="text-gray-500 mb-6">60-minute private session</p>
            <button
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