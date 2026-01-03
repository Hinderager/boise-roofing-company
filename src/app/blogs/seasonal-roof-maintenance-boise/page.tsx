import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sun, Cloud, Snowflake, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Seasonal Roof Maintenance for Boise Homes | Top Shelf Roofing",
  description: "Idaho weather is hard on roofs. Here's what to do each season to keep your Boise roof in good shape and avoid expensive repairs.",
  openGraph: {
    title: "Seasonal Roof Maintenance for Boise Homes",
    description: "Idaho weather is hard on roofs. Here's what to do each season to keep your roof in good shape.",
    url: "https://boise-roofing-company.com/blogs/seasonal-roof-maintenance-boise",
  },
};

export default function SeasonalRoofMaintenanceBoise() {
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
            Seasonal Roof Maintenance for Boise Homes
          </h1>
          <p className="text-xl text-blue-100">
            Idaho weather is hard on roofs. Here's what to do each season.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Boise weather is all over the place. Hot summers, cold winters, occasional hail, and wild temperature swings. Your roof takes a beating.
            </p>
            <p>
              The good news? A little seasonal maintenance can prevent most roof problems. It doesn't take much time, and it can save you thousands in repairs.
            </p>
            <p>
              Here's exactly what to do each season to keep your roof in good shape and extend its lifespan.
            </p>
          </div>
        </div>
      </section>

      {/* Spring */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-600 text-white p-3 rounded-full">
              <Leaf className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Spring: Inspect for Winter Damage</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Winter is rough on roofs. Snow, ice, and freeze-thaw cycles can cause all kinds of damage. Spring is the time to check for it.
            </p>
            <p>
              <strong>Look for missing or damaged shingles.</strong> Walk around your house and look up. Do you see any shingles that are cracked, curled, or missing? Winter wind and ice can tear them loose.
            </p>
            <p>
              <strong>Check your gutters and downspouts.</strong> Clean out any leaves, branches, or debris that built up over the winter. Make sure water can flow freely. Clogged gutters can cause water to back up under your shingles and leak into your roof.
            </p>
            <p>
              <strong>Inspect flashing around chimneys and vents.</strong> Ice and snow can damage flashing and create gaps where water can sneak in. Look for rust, cracks, or loose sections.
            </p>
            <p>
              <strong>Go into your attic.</strong> Look for water stains, mold, or damp insulation. These are signs of an active leak that needs fixing ASAP.
            </p>
            <p>
              If you spot any issues, get them repaired before summer. Small problems turn into big ones fast.
            </p>
          </div>
        </div>
      </section>

      {/* Summer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-500 text-white p-3 rounded-full">
              <Sun className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Summer: Handle Heat and UV Damage</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Boise summers get hot. All that sun and heat can break down your shingles over time. Here's what to watch for:
            </p>
            <p>
              <strong>Check for granule loss.</strong> Asphalt shingles are coated with small granules that protect them from UV rays. As shingles age, they lose granules. Check your gutters—if they're full of grit, your shingles are wearing out.
            </p>
            <p>
              <strong>Look for curling or blistering shingles.</strong> Heat can cause shingles to curl at the edges or develop blisters. Both are signs your roof is aging and might need attention soon.
            </p>
            <p>
              <strong>Trim overhanging branches.</strong> Trees provide shade, which is great. But branches that hang over your roof can scrape shingles, drop debris, and create moisture problems. Trim them back a few feet.
            </p>
            <p>
              <strong>Make sure your attic is ventilated.</strong> Poor ventilation traps heat in your attic, which can literally cook your shingles from below and shorten their lifespan. If your attic is crazy hot, you might need better vents.
            </p>
            <p>
              Summer is also a good time to schedule a professional roof inspection if you haven't had one in a while.
            </p>
          </div>
        </div>
      </section>

      {/* Fall */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-600 text-white p-3 rounded-full">
              <Cloud className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Fall: Prep for Winter Weather</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Fall is prep season. You want your roof ready for snow, ice, and freezing temps. Here's your checklist:
            </p>
            <p>
              <strong>Clean your gutters thoroughly.</strong> This is the most important fall maintenance task. Gutters full of leaves can't drain properly. When water backs up and freezes, it can create ice dams that damage your roof and cause leaks.
            </p>
            <p>
              <strong>Inspect and repair any damage.</strong> If you've been putting off minor repairs, now's the time to handle them. You don't want to deal with a leaky roof in January.
            </p>
            <p>
              <strong>Check your attic insulation.</strong> Good insulation keeps warm air from melting snow on your roof, which reduces the risk of ice dams. If your insulation is thin or damaged, beef it up before winter.
            </p>
            <p>
              <strong>Look at your roof from the ground.</strong> Do you see any moss or algae growth? It's more common in shaded areas. Moss holds moisture against your shingles, which can cause rot. If you see it, get it cleaned off.
            </p>
            <p>
              Getting your roof winter-ready now will save you headaches later.
            </p>
          </div>
        </div>
      </section>

      {/* Winter */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-700 text-white p-3 rounded-full">
              <Snowflake className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Winter: Watch for Ice Dams and Snow Buildup</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Winter roof maintenance is mostly about monitoring for problems. Don't climb on your roof in winter—it's dangerous. But there are a few things you can do from the ground:
            </p>
            <p>
              <strong>Watch for ice dams.</strong> These form when snow melts on your roof, runs down to the cold eaves, and refreezes. The ice blocks water from draining, which can force it under your shingles and into your house. If you see icicles or ice buildup at your roof's edge, that's a sign.
            </p>
            <p>
              <strong>Remove heavy snow if needed.</strong> A few inches of snow won't hurt your roof. But if you get a big dump—especially wet, heavy snow—it might be worth carefully removing some of it with a roof rake. Just be careful not to damage your shingles.
            </p>
            <p>
              <strong>Check for leaks inside.</strong> After a snowstorm or warm spell, check your attic and ceilings for water stains or drips. Catching a leak early can prevent major damage.
            </p>
            <p>
              <strong>Keep an eye on your gutters.</strong> If they're full of ice, that's a problem. It usually means water isn't draining properly. You might need to address it before it causes damage.
            </p>
          </div>
        </div>
      </section>

      {/* Year-Round Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Year-Round Roof Maintenance Tips</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              A few things you should do all year long:
            </p>
            <p>
              <strong>Do visual inspections regularly.</strong> Once a month, walk around your house and look up at your roof. You're not looking for anything specific—just checking that everything looks normal.
            </p>
            <p>
              <strong>Keep trees trimmed.</strong> Overhanging branches are a problem in every season. Keep them trimmed back year-round.
            </p>
            <p>
              <strong>Address problems immediately.</strong> If you spot damage, don't wait. Small issues get worse fast, and they're cheaper to fix early.
            </p>
            <p>
              <strong>Schedule a professional inspection every few years.</strong> Even if your roof looks fine, it's smart to have a pro check it out every 2-3 years. They'll catch things you might miss.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">We'll Keep Your Roof in Good Shape</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Don't want to deal with roof maintenance yourself? We get it. Climbing on ladders isn't everyone's idea of a good time.
            </p>
            <p>
              We offer seasonal roof inspections and maintenance services. We'll check your roof, clean your gutters, make minor repairs, and let you know if anything needs attention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Seasonal roof inspections</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Gutter cleaning and minor repairs</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Detailed reports with photos</div>
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
              Your roof doesn't need a ton of maintenance, but it does need some. A little effort each season can prevent big problems and help your roof last its full lifespan.
            </p>
            <p>
              Clean your gutters, check for damage, fix small issues fast, and get a professional inspection every few years. That's really all it takes.
            </p>
            <p>
              Your roof protects everything you own. Take care of it, and it'll take care of you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Roof Inspection?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We'll check your roof and let you know exactly what it needs.
          </p>
          <a
            href="tel:2087683987"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call (208) 768-3987
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
