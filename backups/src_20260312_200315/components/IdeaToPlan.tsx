import { Lightbulb, FileText, Rocket } from 'lucide-react';

export default function IdeaToPlan() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Share Your Idea',
      description: 'Fill out a simple intake form about your business concept and goals',
    },
    {
      icon: FileText,
      title: 'AI-Assisted Planning',
      description: 'We use cutting-edge AI tools to build a comprehensive business plan',
    },
    {
      icon: Rocket,
      title: 'Get Your Plan',
      description: 'Receive a polished PDF plan within 72 hours, ready to execute',
    },
  ];

  return (
    <section id="idea-to-plan" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 text-center">
          Turn Your Business Idea Into a Real Plan in 72 Hours
        </h2>

        <p className="text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto leading-relaxed">
          Perfect for solopreneurs and digital nomads ready to stop daydreaming and start building.
          Get a comprehensive, actionable business plan without the overwhelm.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <step.icon className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-orange-50 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">What You'll Get:</h3>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>Market analysis and competitive landscape</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>Target audience and customer personas</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>Revenue model and pricing strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>90-day action plan with clear milestones</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>Marketing and growth strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>Professional PDF ready to share with partners or investors</span>
              </li>
            </ul>

            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-900 mb-2">$149 - $199</p>
              <p className="text-gray-600 mb-6">Based on complexity</p>
              <button className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                Get Your Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
