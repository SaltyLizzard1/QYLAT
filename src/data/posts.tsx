import React from 'react';

export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content?: () => React.JSX.Element;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'how-i-planned-my-leap',
    title:
      'Leap Log: How I Planned My Leap – The 5-Week Schedule That Made Quitting Real',
    date: 'March 14, 2026',
    excerpt:
      "At 54, I decided to quit the autopilot life in Florida and relocate to Thailand in 30 days. Here's the exact 5-week plan that turned fear into forward motion—no fluff, just the steps that worked.",
    image: '/images/plane-ticket-schedule.jpg',
    content: () => (
      <div className="prose prose-lg max-w-none">
        <h2>The Backstory</h2>
        <p>
          Raw truth: I was stuck. Comfortable but numb. The leap felt impossible
          until I broke it into weeks. This isn't inspiration porn—it's the
          gritty schedule I actually followed.
        </p>

        <h2>Week-by-Week Breakdown</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Days 1–2:</strong> Launched QYLAT skeleton, first post,
            IG/TikTok setup, SafetyWing affiliate sign-up.
          </li>
          <li>
            <strong>Days 3–5:</strong> Built IdeaToPlan intake form + Carrd
            page, set Stripe, told my network.
          </li>
          <li>
            <strong>Week 2:</strong> Outreach in visa groups/Reddit/LinkedIn,
            landed first client.
          </li>
          <li>
            <strong>Week 3:</strong> Fiverr/Upwork listings, more blog content
            bank.
          </li>
          <li>
            <strong>Week 4:</strong> CPA consult, LLC filing, bookkeeping setup.
          </li>
          <li>
            <strong>Week 5:</strong> Board the plane, live-blog the arrival.
          </li>
        </ul>

        <h2>What Almost Broke Me (Honest Moments)</h2>
        <p>
          The fear of no safety net, the tax questions, the "what if it fails?"
          loop. But documenting it here keeps me accountable.
        </p>

        <h2>The One Non-Negotiable</h2>
        <p>
          Business first: IdeaToPlan is the engine funding this. If you're
          feeling the pull, start with a plan that fits your life—not someone
          else's dream.
        </p>

        <div className="mt-8 text-center">
          <a
            href="#idea-to-plan"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600"
          >
            Take the Leap – Build Your Plan
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    slug: 'day-0-the-decision-to-leap-2-0',
    title: 'Day 0: The Decision to Leap 2.0',
    date: 'March 14, 2026',
    excerpt:
      "Why at 54 I'm quitting the autopilot life. The moment I knew I couldn't keep staring out the window pretending everything was fine. This is where it starts — raw, unfiltered, and terrifying.",
    image: '/images/rice-fields.jpg',
  },
  {
    id: 3,
    slug: 'the-decision-to-leap-2-0',
    title: 'The Decision to Leap 2.0',
    date: 'March 15, 2026',
    excerpt:
      "I've been here before. Standing at the edge. Heart pounding. Every logical voice in my head screaming to step back. I jumped anyway. That was 2018.",
    image: '/images/rice-fields.jpg',
    content: () => (
      <div className="prose prose-lg max-w-none">
        <p className="text-xl italic text-gray-700">I've been here before.</p>

        <p>Standing at the edge. Heart pounding. Every logical voice in my head screaming to step back.</p>

        <p>I jumped anyway. That was 2018.</p>

        <p>I quit my corporate job. Bought a one-way ticket to Thailand. Just to test the waters. And everything I suspected about life beyond the cubicle turned out to be true. The freedom was real. The joy was real. The feeling of being fully, genuinely alive. <em>Real.</em></p>

        <p>So I came home, sold everything, and got ready to make it permanent.</p>

        <p className="text-xl font-bold text-emerald-900">Then the world shut down.</p>

        <p>Five years. The dream didn't die. It just went very, very quiet.</p>

        <p>COVID wasn't the only thing that grounded me. Life threw something else at me too. The kind of thing that forces you to stop, reassess, and sit with yourself whether you want to or not. The kind that has consequences. All of it mine to own.</p>

        <p>Fear settled in where momentum used to live. And somehow, six years slipped by. I kept moving. Different job, different version of the same story. But the window was still there. I was still staring out of it.</p>

        <p>That job reminded me exactly why I'd leapt in the first place.</p>

        <p>Not in a dramatic, everything-collapsed kind of way. More like a quiet confirmation. A nudge from the universe that said: <em>you already know the answer.</em></p>

        <p className="text-xl font-bold text-emerald-900">So here I am. Day 0. Same massive fear. More earned wisdom. No more waiting.</p>

        <p>This time I know what I'm leaping toward. I've tasted it. And that makes the jump both harder and easier than the first time. Harder because I know exactly what I'm risking, and less money than the first go around. Easier because I know exactly what I'm gaining.</p>

        <p className="font-semibold">Quit Your Life and Travel is the story of refusing to let fear write the ending.</p>

        <p>If you've been staring out your own window, waiting for the right time, waiting for permission, waiting for fear to go away. I want you to know something.</p>

        <p className="text-2xl font-bold text-orange-600">Fear doesn't go away. You just stop letting it drive.</p>

        <p className="text-lg italic">Welcome to the leap. I'm glad you're here.</p>

        <div className="mt-8 text-center">
          <a
            href="#idea-to-plan"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600"
          >
            Take the Leap – Build Your Plan
          </a>
        </div>
      </div>
    ),
  },
];
