import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Zap, TrendingUp, Shield, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Metal Roofing Installation in Boise | Top Shelf Roofing",
  description: "Professional metal roof installation in Boise. Long-lasting, energy-efficient, and durable. Standing seam and metal shingles. Call (208) 505-9352 for a quote.",
  openGraph: {
    title: "Metal Roofing Installation in Boise | Top Shelf Roofing",
    description: "Professional metal roof installation in Boise. Long-lasting and energy-efficient.",
    url: "https://boise-roofing-company.com/services/metal-roofing",
  },
};

export default function MetalRoofing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Metal Roofing in Boise
          </h1>
          <p className="text-xl text-blue-100">
            The last roof you'll ever need to buy.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Metal roofs cost more upfront than asphalt shingles. But they last 2-3 times longer, require almost no maintenance, and can save you money on energy bills.
            </p>
            <p>
              If you're planning to stay in your home for the long haul, a metal roof is one of the smartest investments you can make.
            </p>
            <p>
              At Top Shelf Roofing, we install standing seam metal roofs and metal shingle systems across Boise and the Treasure Valley. We'll help you figure out if metal is the right choice for your home.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Metal */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Why Choose a Metal Roof?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Metal roofs aren't for everyone, but if you want something that lasts, here's what they offer:
            </p>
            <h3>Longevity</h3>
            <p>
              A properly installed metal roof can last 40-70 years. Asphalt shingles? 20-30 years max. Do the math—over the life of your home, you might replace a shingle roof twice or even three times. With metal, you're done.
            </p>
            <h3>Durability</h3>
            <p>
              Metal roofs handle Idaho's weather like a champ. They don't crack, curl, or lose granules. They're fire-resistant, hail-resistant (depending on the gauge), and can handle high winds without lifting.
            </p>
            <h3>Energy Efficiency</h3>
            <p>
              Metal roofs reflect heat instead of absorbing it. That means your attic stays cooler in summer, and your AC doesn't have to work as hard. Some homeowners see energy savings of 10-25%.
            </p>
            <h3>Low Maintenance</h3>
            <p>
              Once it's installed, a metal roof pretty much takes care of itself. No shingles to replace, no granules washing off. Just periodic inspections to make sure everything's still tight.
            </p>
            <h3>Eco-Friendly</h3>
            <p>
              Most metal roofing is made from recycled materials and is 100% recyclable at the end of its life. Asphalt shingles end up in landfills.
            </p>
            <h3>Curb Appeal</h3>
            <p>
              Modern metal roofs look good. You can get them in dozens of colors and styles—some even mimic the look of tile or wood shake.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Metal Roofing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Types of Metal Roofing We Install</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <h3>Standing Seam Metal Roofs</h3>
            <p>
              This is the most popular type of metal roof for residential homes. Standing seam panels run vertically from the ridge to the eave, with raised seams that interlock and keep water out.
            </p>
            <p>
              <strong>Pros:</strong> Sleek, modern look. No exposed fasteners (which means fewer leak points). Long lifespan. Great for snow shedding.
            </p>
            <p>
              <strong>Cons:</strong> Higher cost. Requires skilled installers.
            </p>
            <p>
              <strong>Best for:</strong> Homeowners who want the best performance and don't mind paying for it.
            </p>
            <h3>Metal Shingles</h3>
            <p>
              Metal shingles are designed to look like traditional shingles, slate, or wood shake—but they're made of steel or aluminum.
            </p>
            <p>
              <strong>Pros:</strong> More affordable than standing seam. Lots of style options. Still very durable.
            </p>
            <p>
              <strong>Cons:</strong> Exposed fasteners (more maintenance). Not quite as long-lasting as standing seam.
            </p>
            <p>
              <strong>Best for:</strong> Homeowners who want the benefits of metal without the premium price.
            </p>
            <h3>Corrugated Metal</h3>
            <p>
              This is the classic "barn roof" style. It's affordable and functional but less common on residential homes.
            </p>
            <p>
              <strong>Pros:</strong> Budget-friendly. Easy to install.
            </p>
            <p>
              <strong>Cons:</strong> Industrial look. Exposed fasteners.
            </p>
            <p>
              <strong>Best for:</strong> Shops, garages, and outbuildings. Occasionally used on modern farmhouse-style homes.
            </p>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Metal Roofing Materials</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Metal roofs can be made from several different materials. Here's what we offer:
            </p>
            <h3>Steel</h3>
            <p>
              The most common choice. Steel roofs are strong, affordable, and available in tons of colors. They're coated with zinc or a zinc-aluminum blend to prevent rust.
            </p>
            <p>
              <strong>Pros:</strong> Strong. Affordable. Widely available.
            </p>
            <p>
              <strong>Cons:</strong> Can rust if the coating is damaged.
            </p>
            <h3>Aluminum</h3>
            <p>
              Naturally rust-resistant, which makes it great for coastal areas (though that's not a huge concern in Boise). It's lighter than steel but not quite as strong.
            </p>
            <p>
              <strong>Pros:</strong> Won't rust. Lightweight.
            </p>
            <p>
              <strong>Cons:</strong> More expensive. Softer (more prone to denting).
            </p>
            <h3>Copper</h3>
            <p>
              The luxury option. Copper roofs develop a natural patina over time, giving them a unique aged look. They can last 100+ years.
            </p>
            <p>
              <strong>Pros:</strong> Beautiful. Extremely long-lasting. Won't rust.
            </p>
            <p>
              <strong>Cons:</strong> Very expensive. Requires specialized installation.
            </p>
            <h3>Zinc</h3>
            <p>
              Another premium option. Like copper, it develops a patina and lasts a very long time.
            </p>
            <p>
              <strong>Pros:</strong> Long lifespan. Low maintenance. Self-healing properties.
            </p>
            <p>
              <strong>Cons:</strong> Expensive. Hard to find installers.
            </p>
            <p>
              For most Boise homes, steel is the best balance of cost and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <DollarSign className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">What Does a Metal Roof Cost?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Metal roofs cost more than asphalt shingles upfront. But remember—they last 2-3 times longer, so the cost per year is actually competitive.
            </p>
            <p>
              For a typical home in Boise (1,500-2,000 sq ft), here's what you're looking at:
            </p>
            <ul>
              <li><strong>Standing seam steel:</strong> $15,000-$25,000</li>
              <li><strong>Metal shingles:</strong> $12,000-$18,000</li>
              <li><strong>Aluminum standing seam:</strong> $18,000-$30,000</li>
              <li><strong>Copper or zinc:</strong> $30,000-$50,000+</li>
            </ul>
            <p>
              Factors that affect cost:
            </p>
            <ul>
              <li>Roof size and complexity</li>
              <li>Material choice (steel vs. aluminum vs. copper)</li>
              <li>Gauge (thickness) of the metal</li>
              <li>Color and finish options</li>
              <li>Insulation or underlayment upgrades</li>
            </ul>
            <p>
              Want an accurate price for your home? Call us for a free estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Metal Roof Installation Process</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Installing a metal roof requires precision and skill. Here's how we do it:
            </p>
            <ol>
              <li><strong>Remove old roofing (if needed):</strong> We can install metal over some existing roofs, but usually we remove the old material first.</li>
              <li><strong>Inspect and repair decking:</strong> We check for damage and make any needed repairs.</li>
              <li><strong>Install underlayment:</strong> We use synthetic underlayment or a specialized product designed for metal roofs.</li>
              <li><strong>Install trim and flashing:</strong> Metal roofs require custom trim pieces at eaves, rakes, ridges, and valleys.</li>
              <li><strong>Install panels:</strong> For standing seam, we carefully measure and cut panels to fit. Each panel locks into the previous one.</li>
              <li><strong>Seal penetrations:</strong> Vents, chimneys, and skylights get custom flashing and proper sealing.</li>
              <li><strong>Install ridge cap:</strong> The final piece that covers the peak of your roof.</li>
              <li><strong>Clean-up:</strong> We haul away all debris and leave your property clean.</li>
            </ol>
            <p>
              Metal roofs typically take longer to install than shingles—usually 3-7 days depending on size and complexity. But it's worth doing right.
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Common Questions About Metal Roofs</h2>
          <div className="prose prose-lg max-w-none">
            <h3>Are metal roofs loud when it rains?</h3>
            <p>
              Not really. With proper insulation and underlayment, a metal roof is no louder than a shingle roof. You might hear a light patter during heavy rain, but it's not the loud drumming people imagine.
            </p>
            <h3>Will a metal roof attract lightning?</h3>
            <p>
              No. Metal doesn't attract lightning—it conducts it. But lightning hits the tallest object in an area, not the metal one. And if lightning does hit, a metal roof is actually safer because it disperses the energy.
            </p>
            <h3>Can you walk on a metal roof?</h3>
            <p>
              Yes, but you need to be careful. Metal roofs can be slippery, especially when wet. We recommend letting professionals handle any maintenance or repairs.
            </p>
            <h3>Do metal roofs rust?</h3>
            <p>
              Not if they're properly coated. Modern metal roofs have protective coatings that prevent rust. If the coating is damaged, rust can form—but that's rare.
            </p>
            <h3>Will my HOA allow a metal roof?</h3>
            <p>
              Depends on your HOA. Some have restrictions on roofing materials or colors. Check with your HOA before committing to metal.
            </p>
          </div>
        </div>
      </section>

      {/* Is It Right */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Is a Metal Roof Right for You?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Metal roofs aren't for everyone. Here's how to know if it's the right choice:
            </p>
            <p>
              <strong>A metal roof makes sense if:</strong>
            </p>
            <ul>
              <li>You're planning to stay in your home for 20+ years</li>
              <li>You want the last roof you'll ever need</li>
              <li>You value energy efficiency and lower cooling costs</li>
              <li>You live in an area with heavy snow or high winds</li>
              <li>You like the look of metal roofing</li>
            </ul>
            <p>
              <strong>A shingle roof might be better if:</strong>
            </p>
            <ul>
              <li>You're selling your home soon and won't see the long-term benefit</li>
              <li>Budget is your main concern (shingles cost less upfront)</li>
              <li>You prefer a traditional look</li>
              <li>Your HOA doesn't allow metal roofs</li>
            </ul>
            <p>
              Not sure? We'll walk you through the pros and cons based on your specific situation. No pressure—just honest advice.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Metal Roofing Done Right</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              A metal roof is only as good as the installation. Poor installation leads to leaks, noise, and premature failure.
            </p>
            <p>
              We've installed dozens of metal roofs across Boise and the Treasure Valley, and we know how to do it right. Proper underlayment, careful panel placement, sealed penetrations—all the details that matter.
            </p>
            <p>
              If you're investing in a metal roof, make sure you hire someone who knows what they're doing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a Metal Roof?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's talk about whether metal roofing is right for your home.
          </p>
          <a
            href="tel:2085059352"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call (208) 505-9352
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Other Roofing Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/services/roof-replacement" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Replacement
            </Link>
            <Link href="/services/shingle-roofing" className="text-blue-600 hover:text-blue-700 font-medium">
              → Shingle Roofing
            </Link>
            <Link href="/services/roof-inspection" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Inspection
            </Link>
            <Link href="/services/roof-repair" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Repair
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
