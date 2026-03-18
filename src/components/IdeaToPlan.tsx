import { Lightbulb, FileText, Rocket, X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useState } from 'react';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxloAp-LZrAhN_Q5XjNExsTE60zM94k3Gs9JWIHVGmw2pisz6exSUBFSL4SWm-Poy9t/exec';

type FormData = {
  fullName: string;
  email: string;
  businessIdea: string;
  targetAudience: string;
  problem: string;
  industry: string;
  location: string;
  revenueModel: string;
  differentiation: string;
  budget: string;
  planGoal: string;
  planType: string;
  timeline: string;
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const initialForm: FormData = {
  fullName: '',
  email: '',
  businessIdea: '',
  targetAudience: '',
  problem: '',
  industry: '',
  location: '',
  revenueModel: '',
  differentiation: '',
  budget: '',
  planGoal: '',
  planType: 'standard',
  timeline: '',
};

export default function IdeaToPlan() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setStatus('success');
      setForm(initialForm);
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      setStatus('error');
    }
  };

  const closeForm = () => {
    setShowForm(false);
    setStatus('idle');
    setErrorMsg('');
  };

  return (
    <section id="idea-to-plan" className="pt-10 pb-20 md:pt-14 md:pb-32 bg-white">
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
              {[
                'Market analysis and competitive landscape',
                'Target audience and customer personas',
                'Revenue model and pricing strategy',
                '90-day action plan with clear milestones',
                'Marketing and growth strategies',
                'Professional PDF ready to share with partners or investors',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-3">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-900 mb-2">$149 – $199</p>
              <p className="text-gray-600 mb-6">Based on complexity</p>
              <button
                onClick={() => setShowForm(true)}
                className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Share Your Idea
              </button>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeForm(); }}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-emerald-900">Tell Me About Your Idea</h3>
                <p className="text-xs text-gray-500 mt-0.5">Takes about 3 minutes. No payment now.</p>
              </div>
              <button onClick={closeForm} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-6">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-emerald-900 mb-3">You're in the queue!</h3>
                  <p className="text-gray-600 mb-2">I've received your idea and will be in touch within 24 hours to confirm details and next steps.</p>
                  <p className="text-gray-500 text-sm">Check your inbox — and spam, just in case.</p>
                  <button onClick={closeForm} className="mt-6 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors">
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {status === 'error' && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                        <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Jane Smith"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@example.com"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Describe your business idea <span className="text-red-500">*</span></label>
                      <textarea name="businessIdea" value={form.businessIdea} onChange={handleChange} required rows={3}
                        placeholder="What's the idea? Give me the overview."
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">What problem does it solve? <span className="text-red-500">*</span></label>
                      <textarea name="problem" value={form.problem} onChange={handleChange} required rows={2}
                        placeholder="What pain point are you solving?"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Industry / type of business <span className="text-red-500">*</span></label>
                        <input name="industry" value={form.industry} onChange={handleChange} required placeholder="e.g. E-commerce, Consulting, SaaS"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Where will you operate?</label>
                        <input name="location" value={form.location} onChange={handleChange} placeholder="City, State — or Online/Location-independent"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Who is your target customer? <span className="text-red-500">*</span></label>
                      <input name="targetAudience" value={form.targetAudience} onChange={handleChange} required
                        placeholder="e.g. Freelance designers aged 30–45 who want to go full-time"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">How will you make money?</label>
                        <input name="revenueModel" value={form.revenueModel} onChange={handleChange} placeholder="e.g. Subscriptions, one-time sales, services"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">What makes you different?</label>
                        <input name="differentiation" value={form.differentiation} onChange={handleChange} placeholder="Your edge over competitors"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Approximate startup budget</label>
                        <select name="budget" value={form.budget} onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition bg-white">
                          <option value="">Select range...</option>
                          <option value="under5k">Under $5,000</option>
                          <option value="5k-25k">$5,000 – $25,000</option>
                          <option value="25k-50k">$25,000 – $50,000</option>
                          <option value="50k-100k">$50,000 – $100,000</option>
                          <option value="notsure">Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Goal for this plan</label>
                        <select name="planGoal" value={form.planGoal} onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition bg-white">
                          <option value="">Select goal...</option>
                          <option value="bank-loan">Bank loan</option>
                          <option value="investor">Investor pitch</option>
                          <option value="personal-roadmap">Personal roadmap</option>
                          <option value="visa">Visa application</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">When do you need this? <span className="text-red-500">*</span></label>
                        <select name="timeline" value={form.timeline} onChange={handleChange} required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition bg-white">
                          <option value="">Select timeline...</option>
                          <option value="asap">ASAP — within days</option>
                          <option value="1week">Within a week</option>
                          <option value="2weeks">Within 2 weeks</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Plan type <span className="text-red-500">*</span></label>
                        <div className="flex gap-3">
                          {[
                            { value: 'standard', label: 'Standard', price: '$149' },
                            { value: 'visa-ready', label: 'Visa-Ready', price: '$199' },
                          ].map((opt) => (
                            <label key={opt.value}
                              className={`flex-1 flex flex-col cursor-pointer border-2 rounded-xl p-3 transition-all ${form.planType === opt.value ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-300'}`}>
                              <input type="radio" name="planType" value={opt.value} checked={form.planType === opt.value} onChange={handleChange} className="sr-only" />
                              <span className="font-bold text-gray-900 text-sm">{opt.label}</span>
                              <span className="text-emerald-700 font-semibold text-sm">{opt.price}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button type="submit" disabled={status === 'loading'}
                      className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-lg font-semibold rounded-lg transition-all shadow-md flex items-center justify-center gap-2">
                      {status === 'loading' ? (
                        <><Loader className="w-5 h-5 animate-spin" />Sending...</>
                      ) : 'Submit My Idea'}
                    </button>

                    <p className="text-center text-xs text-gray-400">No payment now. I'll confirm scope and send an invoice within 24 hours.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}