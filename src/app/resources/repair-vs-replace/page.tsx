import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Repair vs Replacement: Which Do You Need? | Top Shelf Roofing',
  description: 'Not sure if you need a repair or a full replacement? We break down the signs, costs, and when each makes sense for your Boise home.',
  alternates: { canonical: 'https://boise-roofing-company.com/resources/repair-vs-replace' },
}

export default function RepairvsReplacePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Repair or Replace Your Roof?</h1>
          <p className="text-xl text-gray-200">Here's how to know which one you need.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              You've got a roof problem. Maybe a leak, maybe storm damage, maybe your shingles are looking rough. Now you're wondering: can you get away with a repair, or do you need to bite the bullet and replace the whole thing?
            </p>
            <p>
              Good question. Let's walk through how to tell the difference.
            </p>

            <h2>When a Repair Makes Sense</h2>
            <p>A repair is usually the right call if:</p>
            <ul>
              <li><strong>Your roof is relatively new</strong> (under 10-15 years old) and the damage is localized.</li>
              <li><strong>The problem is small.</strong> A few missing shingles, a small leak, or damaged flashing can usually be fixed without replacing everything.</li>
              <li><strong>The roof is otherwise in good shape.</strong> If the rest of your shingles are solid and not curling or losing granules, a repair can extend your roof's life.</li>
              <li><strong>You're on a tight budget.</strong> If money's tight and the roof just needs a patch job, a repair can buy you time.</li>
            </ul>
            <p>
              Most repairs cost a few hundred to a couple thousand dollars, depending on the issue. That's a lot cheaper than a full replacement.
            </p>

            <h2>When You Need a Replacement</h2>
            <p>Replacement is the better option if:</p>
            <ul>
              <li><strong>Your roof is old.</strong> If it's 20-25+ years old, it's lived its life. Even if you patch one problem, another one's coming soon.</li>
              <li><strong>The damage is widespread.</strong> If half your roof is shot, repairing it is like putting a band-aid on a broken arm. You're just delaying the inevitable.</li>
              <li><strong>You've got multiple leaks.</strong> One leak? Maybe a repair. Three leaks? Time to replace.</li>
              <li><strong>Your shingles are curling, buckling, or losing granules everywhere.</strong> That means they're past their prime and won't protect your home much longer.</li>
              <li><strong>You're planning to stay in your home long-term.</strong> A new roof adds value, improves energy efficiency, and gives you peace of mind for decades.</li>
            </ul>
            <p>
              Yes, replacements are expensive—usually $8,000-$15,000 for a typical home in Boise. But if your roof is at the end of its life, it's the smart investment.
            </p>

            <h2>The "50% Rule"</h2>
            <p>
              Here's a simple guideline contractors use: if the repair costs more than 50% of what a replacement would cost, just replace the roof.
            </p>
            <p>
              Why? Because you're spending a ton of money on a roof that's still old and will need replacing soon anyway. You're better off getting a new roof and being done with it.
            </p>

            <h2>Age Matters</h2>
            <p>
              The age of your roof is one of the biggest factors. Here's a rough guide:
            </p>
            <ul>
              <li><strong>0-10 years:</strong> Unless there's major storm damage, repairs are almost always the way to go.</li>
              <li><strong>10-15 years:</strong> Could go either way. Depends on the extent of damage and condition of the rest of the roof.</li>
              <li><strong>15-20 years:</strong> Leaning toward replacement, especially if you're seeing multiple issues.</li>
              <li><strong>20+ years:</strong> Time to replace. You've gotten your money's worth.</li>
            </ul>

            <h2>What About Insurance?</h2>
            <p>
              If you've got storm damage, your insurance might cover a full replacement even if you think it's just a repair. Always file a claim and let the adjuster take a look.
            </p>
            <p>
              Some policies will only pay for repairs. Others will pay for a full replacement if the damage is bad enough. It depends on your policy and the extent of the damage.
            </p>

            <h2>Get a Pro's Opinion</h2>
            <p>
              Here's the thing: most homeowners can't tell from the ground whether they need a repair or a replacement. You need someone who knows what to look for.
            </p>
            <p>
              We'll come out, inspect your roof, and give you an honest assessment. If a repair will do the job, we'll tell you. If you need a replacement, we'll explain why and give you a quote.
            </p>
            <p>
              No pressure. No upselling. Just straight answers.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's take a look. Free inspections, honest answers.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
            <Phone className="w-5 h-5" />Call (208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
