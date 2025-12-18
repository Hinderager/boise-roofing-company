import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, DollarSign, Home, TrendingUp, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Does a New Roof Cost in Boise? | Pricing Guide 2025",
  description: "Breaking down roofing costs in Boise: materials, labor, and what affects the price. Here's what you'll actually pay for a new roof.",
  openGraph: {
    title: "How Much Does a New Roof Cost in Boise?",
    description: "Breaking down roofing costs in Boise. Here's what you'll actually pay for a new roof.",
    url: "https://boise-roofing-company.com/blogs/roofing-costs-boise",
  },
};

export default function RoofingCostsBoise() {
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
            How Much Does a New Roof Cost in Boise?
          </h1>
          <p className="text-xl text-blue-100">
            Here's what you'll actually pay—and what affects the price.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Let's get straight to it: a new roof in Boise typically costs between $8,000 and $15,000 for an average-sized home. But that's a big range, and your actual cost could be higher or lower depending on several factors.
            </p>
            <p>
              If you're looking at roofing estimates and trying to figure out what's reasonable, this guide will help. We'll break down exactly what goes into roofing costs in the Treasure Valley so you know what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Size Matters */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Home className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Roof Size Is the Biggest Factor</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              This one's obvious, but it's worth saying: bigger roofs cost more. Roofing is typically priced by the square foot or by "squares" (one square = 100 square feet).
            </p>
            <p>
              Here's a rough idea of what different roof sizes cost in Boise:
            </p>
            <ul>
              <li><strong>1,000 square feet (small home):</strong> $4,000–$7,000</li>
              <li><strong>1,500 square feet (average home):</strong> $6,000–$10,000</li>
              <li><strong>2,000 square feet (larger home):</strong> $8,000–$13,000</li>
              <li><strong>2,500+ square feet (big home):</strong> $10,000–$18,000+</li>
            </ul>
            <p>
              Keep in mind that your roof's square footage isn't the same as your house's square footage. If you have a steep roof, dormers, or multiple levels, your roof is bigger than your floor plan.
            </p>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Materials Make a Big Difference</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              The type of shingles you choose has a huge impact on price. Here's what's common in Boise:
            </p>
            <p>
              <strong>3-Tab Asphalt Shingles:</strong> The cheapest option. They're flat, basic, and last about 15-20 years. Expect to pay around $3.50–$5.50 per square foot installed. Most people skip these because they don't last as long.
            </p>
            <p>
              <strong>Architectural Asphalt Shingles:</strong> This is what most homeowners choose. They're thicker, look better, and last 25-30 years. Cost is about $4.50–$7.00 per square foot installed. They're the sweet spot between cost and quality.
            </p>
            <p>
              <strong>Premium/Designer Shingles:</strong> Higher-end asphalt shingles with better warranties and curb appeal. Expect $6.00–$9.00 per square foot. They look great and last longer, but they're pricey.
            </p>
            <p>
              <strong>Metal Roofing:</strong> Way more expensive upfront—$10–$16 per square foot—but they last 40-50 years and require almost no maintenance. If you're staying in the house long-term, they can be worth it.
            </p>
            <p>
              Most Boise homeowners go with architectural shingles. They're durable, affordable, and look good.
            </p>
          </div>
        </div>
      </section>

      {/* Complexity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Roof Complexity Affects Labor Costs</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Not all roofs are created equal. Some are simple rectangles. Some are complicated nightmares with valleys, peaks, skylights, and chimneys. The more complex your roof, the more labor it takes—and labor costs money.
            </p>
            <p>
              Here's what adds to the cost:
            </p>
            <ul>
              <li><strong>Steep pitch:</strong> Steeper roofs are harder and more dangerous to work on, so they cost more.</li>
              <li><strong>Multiple levels and dormers:</strong> Every transition adds time and complexity.</li>
              <li><strong>Chimneys, skylights, and vents:</strong> Each one requires careful flashing and sealing.</li>
              <li><strong>Valleys and hips:</strong> More angles mean more cuts and more potential leak points.</li>
            </ul>
            <p>
              A simple gable roof is the cheapest to replace. A complex roof with lots of features can add 20-30% to the cost.
            </p>
          </div>
        </div>
      </section>

      {/* Tear-Off */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Tear-Off and Disposal Costs</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Before your new roof goes on, the old one has to come off. Tearing off shingles, hauling them away, and disposing of them properly costs money.
            </p>
            <p>
              Most contractors include tear-off in their estimate, but it's worth asking. Expect it to add $1–$2 per square foot to the total cost.
            </p>
            <p>
              If you have multiple layers of old shingles (some older roofs were just layered over), removal gets more expensive. Idaho code allows up to two layers, but if you're on layer three, expect to pay more for removal.
            </p>
          </div>
        </div>
      </section>

      {/* Other Costs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Other Things That Add to the Cost</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              A few other factors can bump up the price:
            </p>
            <p>
              <strong>Deck repairs:</strong> If the roof deck (the plywood under your shingles) is damaged or rotted, it needs to be replaced. That can add $500–$2,000 or more, depending on how much needs fixing.
            </p>
            <p>
              <strong>New underlayment:</strong> Good contractors will always replace the underlayment (the moisture barrier under your shingles). This is included in most estimates, but cheap contractors might skip it.
            </p>
            <p>
              <strong>Ventilation upgrades:</strong> Proper attic ventilation extends your roof's life. If your current setup is inadequate, adding ridge vents or other ventilation can add a few hundred dollars.
            </p>
            <p>
              <strong>Permits:</strong> Most roofing jobs in Boise require a permit, which costs around $100–$200. A good contractor handles this for you.
            </p>
            <p>
              <strong>Warranty upgrades:</strong> Some manufacturers offer extended warranties if you use their full system (shingles, underlayment, etc.). It costs more upfront but gives you better coverage.
            </p>
          </div>
        </div>
      </section>

      {/* What to Watch For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What to Watch For in Estimates</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              When you get roofing estimates, here's what to look at:
            </p>
            <p>
              <strong>Make sure everything's included.</strong> The estimate should list tear-off, disposal, materials, labor, underlayment, flashing, ventilation, and cleanup. If it's vague, ask for details.
            </p>
            <p>
              <strong>Compare materials, not just price.</strong> One contractor might quote architectural shingles while another quotes 3-tab. Make sure you're comparing apples to apples.
            </p>
            <p>
              <strong>Ask about warranties.</strong> What's covered? For how long? Workmanship warranties matter just as much as manufacturer warranties.
            </p>
            <p>
              <strong>Don't automatically go with the cheapest bid.</strong> If one estimate is way lower than the others, they're probably cutting corners—cheap materials, no underlayment, or inexperienced labor.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">We'll Give You a Fair, Detailed Estimate</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              We don't play pricing games. When we give you an estimate, it's detailed, transparent, and accurate.
            </p>
            <p>
              You'll know exactly what you're paying for—materials, labor, tear-off, everything. No surprises, no hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Free, no-obligation estimates</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Detailed breakdowns of all costs</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Quality materials and experienced crews</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Workmanship warranty included</div>
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
              A new roof in Boise typically costs $8,000–$15,000, but your actual price depends on your roof's size, the materials you choose, and how complex the job is.
            </p>
            <p>
              Get multiple estimates, make sure they're detailed, and don't just pick the cheapest one. You want quality work that'll last 20+ years.
            </p>
            <p>
              A new roof is a big investment, but it protects everything you own. Do it right the first time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Roofing Estimate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We'll come out, measure your roof, and give you an accurate price. No games.
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
