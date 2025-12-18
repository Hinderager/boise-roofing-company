import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Wrench, Home, DollarSign, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Repair vs. Replacement: Which Do You Need? | Boise Roofing",
  description: "Should you repair your roof or replace it? Here's how to decide what makes sense for your Boise home and your budget.",
  openGraph: {
    title: "Roof Repair vs. Replacement: Which Do You Need?",
    description: "Should you repair your roof or replace it? Here's how to decide what makes sense for your home.",
    url: "https://boise-roofing-company.com/blogs/roof-repair-vs-replacement",
  },
};

export default function RoofRepairVsReplacement() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Roof Repair vs. Replacement: Which Do You Need?
          </h1>
          <p className="text-xl text-blue-100">
            Here's how to decide what makes sense for your home and your budget.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              You've got a problem with your roof. Maybe it's leaking. Maybe shingles are missing. Maybe your neighbor mentioned it looks worn out.
            </p>
            <p>
              Now you're trying to figure out: can I just repair this, or do I need a whole new roof?
            </p>
            <p>
              It's a fair question. Repairs are cheaper and faster. But sometimes they're just a band-aid on a bigger problem. Let's walk through how to decide what makes sense for your Boise home.
            </p>
          </div>
        </div>
      </section>

      {/* When Repair Makes Sense */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">When Roof Repair Makes Sense</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Roof repair is a good option when the damage is localized and your roof still has plenty of life left. Here's when it makes sense:
            </p>
            <p>
              <strong>Your roof is less than 15 years old.</strong> If your roof is relatively new and the damage is minor—a few missing shingles, a small leak, damaged flashing—a repair is usually the smart move.
            </p>
            <p>
              <strong>The damage is in one area.</strong> Maybe a tree branch fell and damaged part of your roof, or a section got hit by hail. If the rest of the roof is in good shape, there's no reason to replace the whole thing.
            </p>
            <p>
              <strong>You're planning to sell soon.</strong> If you're selling your house in the next year or two, a repair can get you through. Just make sure it's done right so you don't have issues during the inspection.
            </p>
            <p>
              <strong>Your budget is tight right now.</strong> A repair buys you time. It won't last forever, but it can keep water out while you save up for a replacement down the road.
            </p>
          </div>
        </div>
      </section>

      {/* When Replacement Makes Sense */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Home className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">When Roof Replacement Makes Sense</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Sometimes repair isn't worth it. Here's when you should think seriously about replacing the whole roof:
            </p>
            <p>
              <strong>Your roof is 20+ years old.</strong> Most asphalt shingle roofs last 20-25 years. Once yours hits that age, it's nearing the end of its lifespan. Even if it's not leaking yet, it probably will soon.
            </p>
            <p>
              <strong>The damage is widespread.</strong> If you're seeing problems all over—missing shingles in multiple spots, widespread granule loss, curling edges—that's a sign the whole roof is failing.
            </p>
            <p>
              <strong>You've already done multiple repairs.</strong> If you're calling a roofer every year to patch something new, that's a red flag. You're throwing money at a dying roof. At some point, replacement is cheaper.
            </p>
            <p>
              <strong>There's structural damage.</strong> If the roof deck is rotted, or if you're seeing sagging or soft spots, repair won't cut it. You need to replace the damaged structure and put a new roof on top.
            </p>
            <p>
              <strong>You're planning to stay in the house.</strong> If this is your long-term home, replacement makes sense. You'll get decades of protection and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <DollarSign className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Let's Talk About Cost</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Here's the deal: repair is cheaper upfront, but it might not save you money in the long run.
            </p>
            <p>
              A typical roof repair in Boise might cost anywhere from $300 to $1,500, depending on what needs fixing. That's a lot easier to swallow than a full replacement.
            </p>
            <p>
              A full roof replacement, on the other hand, can run anywhere from $8,000 to $15,000 or more, depending on the size of your house, the materials you choose, and how complex the roof is.
            </p>
            <p>
              But here's the thing: if your roof is old and failing, repairs are just delaying the inevitable. You might spend $1,000 fixing a leak this year, then another $1,500 next year when something else breaks. At some point, you've spent so much on repairs that you should've just replaced it.
            </p>
            <p>
              That's why it's important to think long-term. A new roof is a big expense, but it gives you 20-25 years of protection. Repairs buy you time, but they don't solve the underlying problem.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">How to Make the Decision</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              So how do you actually decide? Here's a simple framework:
            </p>
            <p>
              <strong>Get a professional inspection.</strong> A good roofer will look at your roof, check the damage, assess the condition of the shingles and structure, and give you an honest recommendation.
            </p>
            <p>
              <strong>Ask about the "two-thirds rule."</strong> If more than one-third of your roof needs repair, or if your roof is past two-thirds of its expected lifespan, replacement usually makes more sense.
            </p>
            <p>
              <strong>Consider how long you'll stay in the house.</strong> If you're moving in a year, a repair is fine. If you're staying for 10 years, replacement is probably the better investment.
            </p>
            <p>
              <strong>Think about what else needs work.</strong> If your gutters are shot, your siding needs replacing, or you want to add skylights, it might make sense to do it all at once when you replace the roof.
            </p>
            <p>
              And here's the most important thing: get multiple opinions. If one roofer says you need a full replacement and another says a repair will do, ask why. A good contractor will explain their reasoning and show you the evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">We'll Give You an Honest Assessment</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Look, we're not going to push you toward replacement if a repair will solve your problem. And we're not going to tell you a repair is fine if your roof is clearly at the end of its life.
            </p>
            <p>
              We'll come out, inspect your roof, and tell you what's actually going on. If repair makes sense, we'll do it. If replacement is the smarter move, we'll explain why.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Free roof inspections with photos</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Written estimates for repair and replacement</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>No pressure, no sales games</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Serving Boise and the Treasure Valley</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              There's no one-size-fits-all answer here. Sometimes repair is smart. Sometimes replacement is the only real option. It depends on your roof's age, the extent of the damage, and your long-term plans.
            </p>
            <p>
              The key is to make an informed decision. Get a professional inspection, ask the right questions, and don't let anyone pressure you into a choice you're not comfortable with.
            </p>
            <p>
              Your roof is a big investment. Take the time to get it right.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure What Your Roof Needs?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We'll inspect it for free and give you a straight answer.
          </p>
          <a
            href="tel:2085059352"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call (208) 505-9352
          </a>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">More Roofing Resources</h2>
          <Link
            href="/blogs"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to all blog posts
          </Link>
        </div>
      </section>
    </div>
  );
}
