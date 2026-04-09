import { Lightbulb, FileText, Rocket, X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useState } from 'react';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyKYlcau9zr2-WnicGANWbxfJ01X0MeDsf_UsO0XCovSI7pYfJRixMp2-koVx8RJrh7/exec';

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
  expedited24h: string;
  founderBackground: string;
  fundingAsk: string;
  useOfFunds: string;
  currentTraction: string;
  exitVision: string;
  loanAmount: string;
  loanUse: string;
  collateral: string;
  creditStanding: string;
  existingDebt: string;
  ownerAssets: string;
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
  planType: 'Starter',
  expedited24h: 'no',
  founderBackground: '',
  fundingAsk: '',
  useOfFunds: '',
  currentTraction: '',
  exitVision: '',
  loanAmount: '',
  loanUse: '',
  collateral: '',
  creditStanding: '',
  existingDebt: '',
  ownerAssets: '',
};

type PlanOption = {
  value: string;
  title: string;
  price: string;
  description: string;
  /** When true, shown in the form as non-selectable “Coming soon”. */
  comingSoon?: boolean;
};

const PLAN_OPTIONS: PlanOption[] = [
  {
    value: 'Starter',
    title: 'Starter',
    price: '$199',
    description:
      'Full business plan PDF: market fit, revenue model, 90-day actions, and marketing basics. Ideal when you need a solid roadmap without extra research layers.',
  },
  {
    value: 'Growth',
    title: 'Growth',
    price: '$349',
    description:
      'Everything in Starter plus deeper competitor and positioning analysis—who else is solving this, how you stand out, and clearer differentiation for pitches or strategy.',
  },
  {
    value: 'Visa / Immigration',
    title: 'Visa / Immigration',
    price: '$599',
    description:
      'Plan structured for visa and immigration contexts: business narrative, viability framing, and language aligned with what officers and advisors typically expect.',
    comingSoon: true,
  },
];

export default function IdeaToPlan() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const steps = [
    {
      icon: Lightbulb,
      title: 'Share Your Idea',
      description: 'Tell us your idea and goals in a quick, straightforward form',
    },
    {
      icon: FileText,
      title: 'AI-Assisted Planning',
      description: 'We guide the AI to craft a tailored, actionable plan that fits your vision',
    },
    {
      icon: Rocket,
      title: 'Get Your Plan',
      description:
        "Get your polished, ready-to-use PDF plan in 72 hours—or faster if you're on a deadline",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const t = e.target;
    if (t.type === 'checkbox' && 'checked' in t) {
      setForm((prev) => ({ ...prev, [t.name]: (t as HTMLInputElement).checked ? 'yes' : 'no' }));
      return;
    }
    setForm((prev) => ({ ...prev, [t.name]: t.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    console.log('Submitting:', JSON.stringify(form));

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
    <section id="idea-to-plan" className="pt-8 pb-14 md:pt-10 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="inline-block max-w-full bg-emerald-700 text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full uppercase tracking-[0.12em] sm:tracking-[0.16em] md:tracking-[0.2em] [word-spacing:0.15em] sm:[word-spacing:0.22em] text-center shadow-md mb-4">
            Introducing IdeaToPlan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Turn Your Business Idea Into a Real Plan in 72 Hours
          </h2>
          <p className="text-base text-emerald-700 font-medium mb-4 max-w-2xl mx-auto">
            A done-for-you business planning service built for founders who are ready to move. Fast turnaround. Real plans. No fluff.
          </p>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            You already made the hard decision to leap. Now let&apos;s make sure you land right. Get your plan in 72 hours — or rush it in 24.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
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

        <div className="mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-gray-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Starter</h3>
              <p className="text-emerald-700 font-bold text-2xl mb-1">$199</p>
              <p className="text-sm text-gray-500 mb-4">For founders who want a polished business plan without overpaying.</p>
              <ul className="space-y-2 text-sm text-gray-700 flex-1">
                {[
                  'Actionable business plan built around your idea',
                  'Revenue model and pricing strategy',
                  '90-day roadmap with clear milestones',
                  'Professional PDF delivered in 72 hours',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-emerald-500 rounded-2xl p-6 bg-emerald-50 shadow-lg flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Growth</h3>
              <p className="text-emerald-700 font-bold text-2xl mb-1">$349</p>
              <p className="text-sm text-gray-500 mb-4">For entrepreneurs who want market validation and smarter positioning.</p>
              <ul className="space-y-2 text-sm text-gray-700 flex-1">
                {[
                  'Everything in Starter',
                  'Competitor research and landscape analysis',
                  'SWOT analysis',
                  'Viability verdict with go/no-go assessment',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-gray-50/80 shadow-sm flex flex-col relative opacity-95">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-900 text-xs font-bold px-4 py-1 rounded-full border border-amber-200">
                Coming soon
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Visa / Immigration</h3>
              <p className="text-gray-500 font-bold text-2xl mb-1">$599</p>
              <p className="text-sm text-gray-500 mb-4">
                For founders who need USCIS- and investor-ready structure and compliance language.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 flex-1">
                {[
                  'Everything in Growth',
                  'Visa-ready formatting and structure',
                  '5-year financial projections',
                  'Job creation and non-marginality language',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 mb-6 text-sm">Payment collected at booking. Rush orders confirmed before charge.</p>
            <button
              onClick={() => {
                setForm((prev) => ({
                  ...prev,
                  planType: prev.planType === 'Visa / Immigration' ? 'Starter' : prev.planType,
                  planGoal: prev.planGoal === 'visa' ? '' : prev.planGoal,
                }));
                setShowForm(true);
              }}
              className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Share Your Idea
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeForm(); }}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-emerald-900">Tell Us About Your Idea</h3>
                <p className="text-xs text-gray-500 mt-0.5">Takes about 3 minutes.</p>
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
                  <p className="text-gray-600 mb-2">We&apos;ve received your idea and will be in touch within 48 hours to confirm details and next steps.</p>
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
                        placeholder="What's the idea? Give us the overview."
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
                          <option value="visa" disabled>
                            Visa application
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {form.planGoal === 'bank-loan' && (
                      <div className="space-y-4 border border-emerald-200 rounded-xl p-4 bg-emerald-50">
                        <p className="text-sm font-semibold text-emerald-800">Bank Loan Details</p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                              Loan amount requested
                            </label>
                            <input
                              name="loanAmount"
                              value={form.loanAmount}
                              onChange={handleChange}
                              placeholder="e.g. $50,000 SBA loan"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                              Intended use of loan
                            </label>
                            <input
                              name="loanUse"
                              value={form.loanUse}
                              onChange={handleChange}
                              placeholder="e.g. Equipment, working capital, inventory"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                              Collateral available
                            </label>
                            <input
                              name="collateral"
                              value={form.collateral}
                              onChange={handleChange}
                              placeholder="e.g. Vehicle, equipment, property"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                              Credit &amp; financial standing
                            </label>
                            <input
                              name="creditStanding"
                              value={form.creditStanding}
                              onChange={handleChange}
                              placeholder="e.g. Good credit, no bankruptcies"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                              Existing debt or obligations
                            </label>
                            <input
                              name="existingDebt"
                              value={form.existingDebt}
                              onChange={handleChange}
                              placeholder="e.g. Car loan, no other business debt"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                              Business or personal assets
                            </label>
                            <input
                              name="ownerAssets"
                              value={form.ownerAssets}
                              onChange={handleChange}
                              placeholder="e.g. $20K savings, owned equipment"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {form.planGoal === 'investor' && (
                      <div className="space-y-4 border border-emerald-200 rounded-xl p-4 bg-emerald-50">
                        <p className="text-sm font-semibold text-emerald-800">Investor Pitch Details</p>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Your background</label>
                          <textarea
                            name="founderBackground"
                            value={form.founderBackground}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Relevant experience and why you&apos;re the right person to build this."
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Funding ask</label>
                            <input
                              name="fundingAsk"
                              value={form.fundingAsk}
                              onChange={handleChange}
                              placeholder="e.g. $500K seed round"
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Current traction</label>
                            <input
                              name="currentTraction"
                              value={form.currentTraction}
                              onChange={handleChange}
                              placeholder="Revenue, users, pilots, waitlist, etc."
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Use of funds</label>
                          <textarea
                            name="useOfFunds"
                            value={form.useOfFunds}
                            onChange={handleChange}
                            rows={2}
                            placeholder="What will the investment capital be used for?"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Exit vision</label>
                          <textarea
                            name="exitVision"
                            value={form.exitVision}
                            onChange={handleChange}
                            rows={2}
                            placeholder="Acquisition, IPO, lifestyle business? What does success look like in 5-7 years?"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Plan type <span className="text-red-500">*</span></label>
                      <p className="text-xs text-gray-500 mb-3">Payment collected at booking. Rush orders confirmed before charge.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {PLAN_OPTIONS.map((opt) =>
                          opt.comingSoon ? (
                            <div
                              key={opt.value}
                              className="flex flex-col border-2 border-dashed border-gray-300 rounded-xl p-4 text-left h-full bg-gray-50 cursor-not-allowed opacity-90"
                              aria-disabled="true"
                            >
                              <span className="self-start text-[10px] font-bold uppercase tracking-wide text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200 mb-2">
                                Coming soon
                              </span>
                              <span className="font-bold text-gray-800 text-sm leading-tight">{opt.title}</span>
                              <span className="text-gray-500 font-bold text-lg mt-1">{opt.price}</span>
                              <p className="text-xs text-gray-500 mt-2 leading-relaxed flex-1">{opt.description}</p>
                            </div>
                          ) : (
                            <label
                              key={opt.value}
                              className={`flex flex-col cursor-pointer border-2 rounded-xl p-4 text-left transition-all h-full ${form.planType === opt.value ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500/30' : 'border-gray-200 hover:border-emerald-300 bg-white'}`}
                            >
                              <input
                                type="radio"
                                name="planType"
                                value={opt.value}
                                checked={form.planType === opt.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <span className="font-bold text-gray-900 text-sm leading-tight">{opt.title}</span>
                              <span className="text-emerald-700 font-bold text-lg mt-1">{opt.price}</span>
                              <p className="text-xs text-gray-600 mt-2 leading-relaxed flex-1">{opt.description}</p>
                            </label>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Rush delivery?
                      </label>
                      <p className="text-xs text-gray-500 mb-2 leading-relaxed">
                        Rush requests are reviewed before confirmation. You&apos;ll be charged after approval.
                      </p>
                      <select
                        name="expedited24h"
                        value={form.expedited24h}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition bg-white"
                      >
                        <option value="no">No — standard turnaround (72 hours)</option>
                        <option value="yes">Yes — rush delivery (24 hours)</option>
                      </select>
                    </div>

                    <button type="submit" disabled={status === 'loading'}
                      className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-lg font-semibold rounded-lg transition-all shadow-md flex items-center justify-center gap-2">
                      {status === 'loading' ? (
                        <><Loader className="w-5 h-5 animate-spin" />Sending...</>
                      ) : 'Submit My Idea'}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      Payment collected at booking. Rush orders confirmed before charge.
                    </p>
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