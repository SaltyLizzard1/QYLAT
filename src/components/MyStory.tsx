import SectionDivider from './SectionDivider';

export default function MyStory() {
  return (
    <section id="my-story" className="bg-white">

      {/* Hero banner */}
      <div className="bg-emerald-900 py-12 md:py-16 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Story</h2>
        <p className="text-emerald-200 text-lg md:text-xl max-w-2xl mx-auto">
          Not a highlight reel. The real one.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Photo */}
          <div className="relative flex justify-center">
            <div className="relative w-64 md:w-80">
              <img
               src="/me_whitedress.png"
                alt="Elizabeth — Quit Your Life and Travel"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl px-4 py-3 text-white text-sm font-medium">
                54 years old. Florida → Thailand. No more waiting.
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p className="text-lg">
              In 2018, I quit my corporate job and bought a one-way ticket to Thailand — just to test the waters.
            </p>

            <p>Before that, I was living on autopilot.</p>

            <p>
              Every day looked the same. Staring out the office window. Going through the motions.
              Doing everything I was supposed to do... and feeling nothing.
            </p>

            <p>The monotony wasn't just uncomfortable. It was unbearable.</p>

            <p>So I did the terrifying thing: left the comfort of a steady paycheck behind.</p>

            <blockquote className="border-l-4 border-orange-500 pl-4 py-1 text-xl font-bold italic text-emerald-800">
              And I loved it.
            </blockquote>

            <p>
              The freedom. The new rhythm. The feeling of being truly alive. It confirmed everything
              I'd suspected. Humans weren't built to spend their lives in cubicles.
            </p>

            <p>
              So I came back and sold everything. The house, the car, the clothes. Ready to make it permanent.
            </p>

            <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-emerald-600">
              <p className="font-medium text-gray-800">Then COVID hit. The world shut down. And I got stuck.</p>
              <p className="mt-2 text-gray-600">For five years, the dream sat on pause while fear and circumstances kept me sidelined.</p>
            </div>

            <p className="text-xl font-bold text-emerald-900">
              Now I'm jumping again. Different job. Same massive fear. No more waiting.
            </p>

            <p className="font-semibold">
              Quit Your Life and Travel is the story of refusing to let fear write the ending.
            </p>

            <p>
              If you've been staring out your own window, waiting for the right time, waiting for permission...
            </p>

            <p className="text-3xl font-bold text-orange-600">This is it.</p>
          </div>
        </div>
      </div>

      <SectionDivider bottomFill="#ffffff" />
    </section>
  );
}