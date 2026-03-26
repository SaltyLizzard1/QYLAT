import React, { useEffect, useRef } from 'react';
import { images } from '../config/images';

export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content?: (options?: { onTakeLeapClick?: () => void }) => React.JSX.Element;
}

/**
 * 60-day plan post - Leap Log id **3**, slug `60-day-plan-thailand-again`.
 */
const SIXTY_DAY_PLAN_EXCERPT =
  "The second leap is harder than the first. Here's the exact 60-day plan I'm following - packing, visa, banking, and every task from first sort to final keys.";

function KitForm() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = embedRef.current;
    if (!host) return;

    host.innerHTML = '';

    const script = document.createElement('script');
    script.async = true;
    script.dataset.uid = 'afc2a0b2d2';
    script.src = 'https://quit-your-life-and-travel.kit.com/afc2a0b2d2/index.js';
    host.appendChild(script);

    return () => {
      host.innerHTML = '';
    };
  }, []);

  return <div ref={embedRef} className="min-h-[120px]" />;
}

function SixtyDayPlanDownloadSection() {
  return (
    <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-600 not-prose my-8">
      <p className="font-semibold text-emerald-900 text-lg mb-2">
        Want the exact 60-day plan I&apos;m using right now?
      </p>
      <p className="text-gray-600 mb-4">
        I built a simple spreadsheet that tracks every task from first sort to final keys - packing,
        visa, banking, logistics, all of it. I&apos;m giving it away free. Drop your email below and
        I&apos;ll send it straight to you. No spam, no fluff - just the tool I&apos;m actually
        following every day.
      </p>
      <KitForm />
    </div>
  );
}

function PostContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-none">
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function handleTakeLeapCTA(
  event: React.MouseEvent<HTMLAnchorElement>,
  onTakeLeapClick?: () => void
) {
  event.preventDefault();
  onTakeLeapClick?.();
  requestAnimationFrame(() => {
    const workWithMeSection = document.getElementById('work-with-me');
    if (workWithMeSection) {
      workWithMeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/** Slug for “Day 0: The Decision to Leap” — used for ordering / deep links */
export const DAY_ZERO_SLUG = 'day-0-the-decision-to-leap';

export const posts: Post[] = [
  {
    id: 1,
    slug: DAY_ZERO_SLUG,
    title: 'Day 0: The Decision to Leap',
    date: 'February 2, 2026',
    excerpt:
      'Not a highlight reel. The real one. From autopilot in Florida to a one-way ticket to Thailand — and what happened when the world hit pause.',
    image: import.meta.env.VITE_IMG_DAY0,
    content: ({ onTakeLeapClick } = {}) => (
      <PostContent>
        <p className="text-sm text-emerald-700 uppercase tracking-widest font-sans mb-6">
          Not a highlight reel. The real one.
        </p>

        <p>In 2018, I quit my corporate job and bought a one-way ticket to Thailand — just to test the waters.</p>
        <p>Before that, I was living on autopilot.</p>
        <p>Every day looked the same. Staring out the office window. Going through the motions. Doing everything I was supposed to do. Feeling nothing.</p>
        <p>The monotony wasn&apos;t just uncomfortable. It was unbearable.</p>
        <p>So I did the terrifying thing: left the comfort of a steady paycheck behind.</p>

        <blockquote className="border-l-4 border-orange-500 pl-5 py-1 my-8 not-prose">
          <p className="text-xl italic text-gray-800">The second leap is harder. You know exactly what you&apos;re risking. You go anyway.</p>
        </blockquote>

        <p>The freedom. The new rhythm. The feeling of being truly alive. It confirmed everything I&apos;d suspected. Humans weren&apos;t built to spend their lives in cubicles.</p>
        <p>So I came back and sold everything. Ready to make it permanent.</p>
        <p>Then the world shut down. A legal situation I had no control over kept me locked in place for five years. Less money. Less certainty. More fear.</p>
        <p>And still. Here I am. Going anyway.</p>
        <p>Now I&apos;m jumping again. Different job. Same massive fear. No more waiting.</p>
        <p>Quit Your Life and Travel is the story of refusing to let fear write the ending.</p>
        <p>If you&apos;ve been staring out your own window. Waiting for the right time. Waiting for permission. Waiting for the fear to go away.</p>
        <p>Fear doesn&apos;t go away. You just stop letting it drive.</p>
        <p>Welcome to the leap. I&apos;m glad you&apos;re here.</p>

        <div className="border-t border-gray-200 pt-6 mt-10">
          <p className="text-sm text-gray-400 font-sans mb-1">Ready to build the business that funds your leap?</p>
          <a href="#work-with-me" onClick={(event) => handleTakeLeapCTA(event, onTakeLeapClick)} className="text-sm font-sans font-medium text-orange-600 tracking-wide hover:opacity-70 transition-opacity">Take the Leap →</a>
        </div>
      </PostContent>
    ),
  },
  {
    id: 3,
    slug: '60-day-plan-thailand-again',
    title:
      "60 Days to Thailand. Here's Exactly How I'm Doing It.",
    date: 'March 15, 2026',
    excerpt: SIXTY_DAY_PLAN_EXCERPT,
    image: images.sixtyDay,
    content: ({ onTakeLeapClick } = {}) => (
      <PostContent>
        <p>
          The first time I did this, it was easier. Not because it wasn&apos;t scary. It was
          terrifying. But I hadn&apos;t lost anything yet. I just knew I was done with the life I had
          and ready for something different.
        </p>
        <p>
          So I left. Tested the waters. Bought a one-way ticket to Thailand and felt, for the first
          time in years, completely alive.
        </p>
        <p>It confirmed everything I suspected. This was the life I was supposed to be living.</p>
        <p>So I came home, sold everything, and prepared to make it permanent.</p>
        <p>Then the world had other plans.</p>
        <p>
          COVID shut everything down. A legal situation I had no control over kept me locked in place
          for years. Five years of watching the dream sit on pause. Five years of rebuilding from
          scratch. Less money. Less certainty. More fear.
        </p>
        <p>And still. Here I am. Going anyway.</p>
        <p>
          If you&apos;re reading this waiting for the perfect moment, the right amount of money, the
          right circumstances - I need you to understand something.
        </p>

        <blockquote className="border-l-4 border-orange-500 pl-5 py-1 my-8 not-prose">
          <p className="text-xl italic text-gray-800">
            There is no perfect moment. There is only the decision.
          </p>
        </blockquote>

        <p>This is mine. Again. Here&apos;s exactly how I&apos;m doing it.</p>

        <h2 className="text-lg font-semibold text-emerald-900 mt-8 mb-2">
          Phase 1: Planning and Preparation (Days 1 to 7)
        </h2>
        <p>
          Before a single box gets packed or a single item gets listed, the foundation has to be solid.
          Passport validity checked. Visa research done. A complete inventory of everything in the
          apartment.
        </p>
        <p>
          That last one sounds simple. It&apos;s not. Walking through your own space and deciding what
          matters is one of the most clarifying and gutting things you can do. Every object is a
          decision. Every decision is a small grief.
        </p>
        <p>
          I&apos;ve done this before. I know what goes. I keep the things that serve the life I&apos;m
          building. Everything else finds a new home.
        </p>

        <SixtyDayPlanDownloadSection />

        <h2 className="text-lg font-semibold text-emerald-900 mt-8 mb-2">
          Phase 2: Logistics and Operations (Days 8 to 30)
        </h2>
        <p>
          This is where the practical work happens. Listing furniture on Facebook Marketplace.
          Opening a Wise account for international transfers.
        </p>
        <p>
          The financial infrastructure piece is critical and most people get it wrong. You need a bank
          that doesn&apos;t charge foreign transaction fees, a way to receive payments internationally,
          and two-factor authentication that doesn&apos;t depend on a SIM card you&apos;re about to
          cancel.
        </p>
        <p>Book the flight. Book the first 14 nights. Apply for the visa. In that order.</p>

        <h2 className="text-lg font-semibold text-emerald-900 mt-8 mb-2">
          Phase 3: Execution and Packing (Days 12 to 45)
        </h2>
        <p>
          The physical work. Boxes. Labels. Donation runs. The slow reduction of a life into what
          fits in two bags.
        </p>
        <p>
          This phase is different the second time. Not easier. Different. Last time I let things go
          with hope. This time I let things go with hard-won knowledge. The only thing that travels
          with me that matters is the business I built before I left.
        </p>
        <p className="font-semibold text-emerald-800">That last sentence is worth reading again.</p>

        <h2 className="text-lg font-semibold text-emerald-900 mt-8 mb-2">
          Phase 4: Final Countdown (Days 50 to 60)
        </h2>
        <p>
          The last things to go are always the hardest. The everyday items you reach for without
          thinking. The coffee maker. The good knife. The pillow you&apos;ve had for years.
        </p>
        <p>
          Then the admin. Cancel the cable. Cancel the internet. Deep clean. Final repairs. Print the
          visa documents.
        </p>
        <p>Hand over the keys.</p>
        <p>Get on the plane.</p>

        <h2 className="text-lg font-semibold text-emerald-900 mt-8 mb-2">The Full 60-Day Plan</h2>
        <p>Use this as your own template. Screenshot it. Print it. Make it yours.</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-emerald-800 text-white">
                <th className="px-4 py-3 text-left font-semibold">Day</th>
                <th className="px-4 py-3 text-left font-semibold">Phase</th>
                <th className="px-4 py-3 text-left font-semibold">Task</th>
                <th className="px-4 py-3 text-left font-semibold">Priority</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1', 'Planning', 'Create master inventory of all items', 'High'],
                ['2', 'Planning', 'Verify passport validity (must be 6+ months)', 'High'],
                ['3', 'Planning', 'Research Thailand visa types (DTV, Tourist, LTR)', 'High'],
                ['5', 'Planning', 'Sort items into Keep, Sell, and Donate', 'Medium'],
                ['8', 'Logistics', 'Photograph large furniture and electronics', 'High'],
                ['10', 'Logistics', 'List items on Facebook Marketplace', 'Medium'],
                ['20', 'Logistics', 'Open travel-friendly bank account (Wise or Schwab)', 'High'],
                ['22', 'Logistics', 'Port phone number to Google Voice', 'High'],
                ['25', 'Logistics', 'Book one-way flight to Thailand', 'High'],
                ['26', 'Logistics', 'Book initial 14-day accommodation', 'Medium'],
                ['28', 'Logistics', 'Verify 2FA on all banking apps', 'High'],
                ['30', 'Logistics', 'Apply for Thailand Visa via E-Visa portal', 'High'],
                ['12', 'Execution', 'Box up books, decor, and non-essentials', 'Low'],
                ['15', 'Execution', 'Sort kitchen down to one essential set', 'Medium'],
                ['35', 'Execution', 'Pack seasonal clothing and extra linens', 'Medium'],
                ['40', 'Execution', 'Schedule dental and medical checkups', 'Medium'],
                ['45', 'Execution', 'Arrange international shipping or extra baggage', 'High'],
                ['50', 'Final', 'Pack majority of wardrobe', 'High'],
                ['53', 'Final', 'Schedule cancellation of cable, internet, electricity', 'High'],
                ['55', 'Final', 'Pack remaining kitchen and living room items', 'High'],
                ['57', 'Final', 'Deep clean and complete final repairs', 'Medium'],
                ['59', 'Final', 'Confirm airport transfer and print all documents', 'High'],
                ['60', 'Final', 'Move out, return keys, depart for Thailand', 'High'],
              ].map(([day, phase, task, priority], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-emerald-800">{day}</td>
                  <td className="px-4 py-3 text-gray-600">{phase}</td>
                  <td className="px-4 py-3 text-gray-800">{task}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        priority === 'High'
                          ? 'bg-orange-100 text-orange-700'
                          : priority === 'Medium'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold text-emerald-900 mt-8 mb-2">
          What doing it twice actually teaches you
        </h2>
        <p>
          The first leap is about courage. You don&apos;t know what you&apos;re getting into so you
          just go.
        </p>
        <p>
          The second leap is about something harder. It&apos;s about going anyway when you know
          exactly what you&apos;re risking. When you&apos;ve already paid the price once and
          you&apos;re willing to pay it again because the alternative - staying - is no longer
          acceptable.
        </p>
        <p>
          I lost five years. I lost the money. I lost the momentum. I rebuilt from zero with less
          than I started with.
        </p>
        <p>
          And I would do every single bit of it again to get back to that feeling of being truly
          alive.
        </p>
        <p>
          If you&apos;ve been waiting for permission, for the right time, for enough money, for the
          fear to go away - it won&apos;t. None of it will arrive on schedule.
        </p>
        <p className="font-semibold text-emerald-900">
          The only thing that changes is whether you decide.
        </p>

        <div className="border-t border-gray-200 pt-6 mt-10">
          <p className="text-sm text-gray-400 font-sans mb-1">
            Ready to build the business that funds your leap?
          </p>
          <a
            href="#work-with-me"
            onClick={(event) => handleTakeLeapCTA(event, onTakeLeapClick)}
            className="text-sm font-sans font-medium text-orange-600 tracking-wide hover:opacity-70 transition-opacity"
          >
            Take the Leap →
          </a>
        </div>
      </PostContent>
    ),
  },
  {
    id: 5,
    slug: 'debit-card-swallowed-by-an-atm-in-bali',
    title: 'Debit Card Swallowed by an ATM in Bali',
    date: 'March 18, 2026',
    excerpt:
      'TD Bank was perfect for Tampa. It was useless in Bali. The replacement card took a month. Here is what I set up differently this time.',
    image: images.baliAtm,
    content: ({ onTakeLeapClick } = {}) => (
      <PostContent>
        <p className="text-sm text-emerald-700 uppercase tracking-widest font-sans mb-6">
          What I learned about money the hard way and what I&apos;m doing differently this time.
        </p>

        <p>I was standing in Bali when the ATM literally swallowed my card.</p>

        <p>
          No metaphor. The machine made a greedy little clunk, sucked it in, and that was the last I
          saw of it. I waited a full minute like an idiot, staring at the screen, willing it to spit it
          back out. It didn&apos;t.
        </p>

        <p>TD Bank was perfect for Tampa. It was useless in Bali.</p>

        <p>
          The replacement card took a month. Thirty days of borrowing money, stressing, and learning an
          expensive lesson about what &quot;works worldwide&quot; actually means when you&apos;re on
          the other side of the planet.
        </p>

        <p>I will never do that again.</p>

        <p>
          So before I leave for Thailand this time, I set up two simple things in one afternoon.
          Here&apos;s exactly what I did.
        </p>

        <h2 className="text-lg font-semibold text-emerald-900 mt-8 mb-2">
          1. Schwab High Yield Investor Checking
        </h2>
        <p>This is now my main travel account.</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
          <li>Zero foreign transaction fees</li>
          <li>Unlimited ATM fee reimbursements everywhere in the world</li>
          <li>No minimums, no nonsense</li>
        </ul>
        <p>If you only take one thing from this post, make it this. Schwab is the account that actually travels with you.</p>

        <h2 className="text-lg font-semibold text-emerald-900 mt-8 mb-2">2. Wise</h2>
        <p>
          Thailand is going cashless. Starbucks, IKEA, even some KFCs and Subways in Bangkok are
          card-or-QR only. Without a Thai bank account, you can&apos;t join the local payment apps. Wise
          fixes that. Load Thai Baht onto your Wise debit card at the real exchange rate and you&apos;re
          good to go anywhere cards are accepted. Clean, cheap, and shockingly easy.
        </p>

        <blockquote className="border-l-4 border-orange-500 pl-5 py-1 my-8 not-prose">
          <p className="text-xl italic text-gray-800">
            The card in the ATM cost me a month of pain. This setup cost me an afternoon. Worth it.
          </p>
        </blockquote>

        <div className="border-t border-gray-200 pt-6 mt-10">
          <p className="text-sm text-gray-400 font-sans mb-1">
            Ready to build the business that funds your leap?
          </p>
          <a
            href="#work-with-me"
            onClick={(event) => handleTakeLeapCTA(event, onTakeLeapClick)}
            className="text-sm font-sans font-medium text-orange-600 tracking-wide hover:opacity-70 transition-opacity"
          >
            Take the Leap →
          </a>
        </div>
      </PostContent>
    ),
  },
  {
    id: 4,
    slug: 'the-more-i-sort-the-more-appears',
    title: 'The More I Sort, The More Appears',
    date: 'March 24, 2026',
    excerpt:
      'Every time I clear a surface, something appears on it. On chaos, packing light, and why the fashion blogger fantasy ends the moment you picture your suitcase open on a hostel floor.',
    image: import.meta.env.VITE_IMG_SORTING,
    content: ({ onTakeLeapClick } = {}) => (
      <PostContent>
        <p className="text-sm text-emerald-700 uppercase tracking-widest font-sans mb-6">
          Why I&apos;m not packing like a fashion blogger.
        </p>

        <p>I have sorted the same pile of clothes three times today.</p>
        <p>
          Not because I&apos;m indecisive. Because every time I clear a surface, something appears on
          it. I have lived in this apartment for years and apparently I have been quietly hoarding
          things I forgot I owned.
        </p>
        <p>
          My brain does not do well with this. I need order to think. Right now my living room looks
          like a thrift store had a breakdown, and I am somewhere in the middle of it with a garbage
          bag in one hand and absolutely no plan in the other.
        </p>
        <p>At some point this afternoon I had a thought that felt reasonable at the time.</p>
        <p>
          <em>If I&apos;m going to be traveling, I should look good doing it.</em>
        </p>
        <p>
          So I started setting things aside. The good jeans. The going-out tops. The heels I&apos;ve
          worn twice but keep because they&apos;re perfect. I was building a travel wardrobe in my head
          and it felt exciting and it felt like a solution to the chaos. It was neither.
        </p>

        <blockquote className="border-l-4 border-orange-500 pl-5 py-1 my-8 not-prose">
          <p className="text-xl italic text-gray-800">
            You don&apos;t want more options when you&apos;re living out of a bag. You want fewer
            decisions.
          </p>
        </blockquote>

        <p>
          Then I pictured it. The room I&apos;ll be staying in. The suitcase open on the floor because
          there&apos;s nowhere else to put it. Every single thing I packed spread across a 10x10 space.
        </p>
        <p>That&apos;s where the fashion blogger fantasy ends.</p>
        <p>
          The less you pack, the lighter you move. The lighter you move, the more you actually show up
          for the life you went there to live instead of managing your luggage.
        </p>
        <p>
          So the heels went into the donation bag. The good jeans made the cut. Two pairs.
          That&apos;s it.
        </p>
        <p>
          I&apos;m not packing light because I have to. I&apos;m packing light because I&apos;ve already
          learned what happens when you don&apos;t. It shouldn&apos;t feel like home. That&apos;s the
          whole point.
        </p>
        <p>
          <em>Back to the bags.</em>
        </p>
        <p>
          The mess is part of it. The chaos, the second-guessing, the moment you almost pack the heels
          anyway — that&apos;s not a sign you&apos;re doing it wrong. That&apos;s what letting go
          actually looks like. Nobody&apos;s leap is clean. Mine certainly isn&apos;t.
        </p>
        <p>
          But you sort another pile. You make another decision. And slowly, the life you&apos;re
          leaving gets lighter.
        </p>
        <p>So does everything else.</p>

        <div className="border-t border-gray-200 pt-6 mt-10">
          <p className="text-sm text-gray-400 font-sans mb-1">
            Ready to build the business that funds your leap?
          </p>
          <a
            href="#work-with-me"
            onClick={(event) => handleTakeLeapCTA(event, onTakeLeapClick)}
            className="text-sm font-sans font-medium text-orange-600 tracking-wide hover:opacity-70 transition-opacity"
          >
            Take the Leap →
          </a>
        </div>
      </PostContent>
    ),
  },
];
