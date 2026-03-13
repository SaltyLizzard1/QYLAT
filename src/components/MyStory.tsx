export default function MyStory() {
  return (
    <section id="my-story" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-12 text-center">
          My Story
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              In 2018, I quit my corporate job and bought a one-way ticket to Thailand — just to test
              the waters.
            </p>

            <p>Before that, I was living on autopilot.</p>

            <p>
              Every day looked the same. Staring out the office window. Going through the motions.
              Doing everything I was supposed to do... and feeling nothing.
            </p>

            <p>The monotony wasn't just uncomfortable. It was unbearable.</p>

            <p>So I did the terrifying thing: left the comfort of a steady paycheck behind.</p>

            <p className="text-xl font-bold italic text-emerald-800">And I loved it.</p>

            <p>
              The freedom. The new rhythm. The feeling of being truly alive. It confirmed everything
              I'd suspected. Humans weren't built to spend their lives in cubicles.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              So I came back and sold everything. The house, the car, the clothes. Ready to make it
              permanent.
            </p>

            <p>Then COVID hit. The world shut down. And I got stuck.</p>

            <p>
              For five years, the dream sat on pause while fear and circumstances kept me sidelined.
            </p>

            <p className="text-xl font-bold text-emerald-900">
              Now I'm jumping again. Different job. Same massive fear. No more waiting.
            </p>

            <p className="font-semibold">
              Quit Your Life and Travel is the story of refusing to let fear write the ending.
            </p>

            <p>
              If you've been staring out your own window, waiting for the right time, waiting for
              permission...
            </p>

            <p className="text-2xl font-bold text-orange-600">This is it.</p>
          </div>
        </div>

        <div className="mt-16">
          <img
            src="/rowan-heuvel-FCQ150fAR3I-unsplash.jpg"
            alt="Misty mountain rice terraces"
            className="w-full rounded-lg shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
