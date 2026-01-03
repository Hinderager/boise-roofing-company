import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Eye, Home, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "7 Signs Your Roof Needs Repair in Boise | Top Shelf Roofing",
  description: "Ignoring roof problems doesn't make them go away. Here are the warning signs your Boise home needs roof repair before it gets worse.",
  openGraph: {
    title: "7 Signs Your Roof Needs Repair in Boise",
    description: "Ignoring roof problems doesn't make them go away. Here are the warning signs your Boise home needs roof repair.",
    url: "https://boise-roofing-company.com/blogs/signs-roof-needs-repair",
  },
};

export default function SignsRoofNeedsRepair() {
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
            7 Signs Your Roof Needs Repair in Boise
          </h1>
          <p className="text-xl text-blue-100">
            Ignoring roof problems doesn't make them go away. Here's what to watch for.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Most homeowners don't think about their roof until something goes wrong. And by then, a small problem has usually turned into an expensive one.
            </p>
            <p>
              Here's the thing: your roof sends you warning signs before it fails. Spotting them early can save you thousands of dollars and a lot of stress.
            </p>
            <p>
              So let's talk about the most common signs your roof needs repair in Boise and the Treasure Valley—and what to do about them.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 1 */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Droplets className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Water Stains on Your Ceiling or Walls</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              This one's pretty obvious, but a lot of people ignore it. If you see brown or yellow stains on your ceiling or upper walls, water is getting in somewhere.
            </p>
            <p>
              Sometimes the leak is small and slow. You might only notice it after heavy rain or when snow melts in the spring. But even small leaks cause big damage over time—rot, mold, and structural issues.
            </p>
            <p>
              Don't wait for the stain to get bigger. Find the source and fix it. The longer water sits in your roof and attic, the worse it gets.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Missing or Damaged Shingles</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Walk outside and look at your roof. Do you see shingles that are cracked, curling, or completely missing? That's a problem.
            </p>
            <p>
              Boise gets wind, hail, and temperature swings that beat up shingles over time. Once they start to fail, water can sneak underneath and damage the roof deck.
            </p>
            <p>
              If you only have a few damaged shingles, a repair might be enough. But if you're seeing problems all over the roof, it might be time to think about replacement.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 3 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Granules in Your Gutters</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Asphalt shingles are covered with small granules that protect them from UV damage. As shingles age, those granules start to fall off.
            </p>
            <p>
              Check your gutters. If you see a lot of grit and granules collecting there, your shingles are wearing out.
            </p>
            <p>
              It's normal to lose a few granules here and there, especially on a new roof. But if your gutters are full of them, or if you notice bald spots on your shingles, it's time to call a roofer.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 4 */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Sagging Roof Deck</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Step back and look at your roofline. Does any part of it look saggy or droopy? That's a serious red flag.
            </p>
            <p>
              A sagging roof usually means there's structural damage—rotted decking, damaged rafters, or too much moisture trapped in the attic.
            </p>
            <p>
              This isn't something you can put off. A sagging roof can collapse, especially under the weight of snow. If you see this, call a roofer immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 5 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Daylight Through the Roof Boards</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Go up into your attic (if it's safe to do so) and turn off the lights. Look up at the roof deck. Do you see any light coming through?
            </p>
            <p>
              If you can see daylight, that means there are gaps or holes in your roof. And if light can get in, so can water, wind, and pests.
            </p>
            <p>
              While you're up there, check for water stains, mold, or damp insulation. These are all signs of an active leak.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 6 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Damaged Flashing Around Chimneys and Vents</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Flashing is the metal trim that seals the joints around chimneys, vents, and skylights. It's one of the most common places for leaks to start.
            </p>
            <p>
              Over time, flashing can crack, rust, or pull away from the roof. When that happens, water gets in.
            </p>
            <p>
              Look closely at the areas around your chimney and roof penetrations. If the flashing looks damaged or loose, it needs to be repaired or replaced.
            </p>
          </div>
        </div>
      </section>

      {/* Sign 7 */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Home className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Your Roof Is Just Old</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Even if your roof looks fine, age matters. Most asphalt shingle roofs last 20-25 years. After that, they start to fail—even if you can't see it yet.
            </p>
            <p>
              If your roof is approaching 20 years old, it's smart to have it inspected. A roofer can tell you how much life is left and whether repairs or replacement make more sense.
            </p>
            <p>
              Don't wait until you have leaks. By then, the damage is already done.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">We'll Check Your Roof for Free</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Not sure if your roof needs repair? We'll come out, take a look, and give you an honest assessment.
            </p>
            <p>
              If it needs work, we'll tell you what's wrong and how much it'll cost to fix. If it's fine, we'll let you know that too. No pressure, no sales pitch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Free roof inspections</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Written estimates with photos</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-green-400 mt-1">✓</div>
              <div>Same-day emergency repairs available</div>
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
              Your roof doesn't fail overnight. It gives you plenty of warning signs first. The trick is knowing what to look for—and acting fast when you spot a problem.
            </p>
            <p>
              If you've noticed any of these signs, don't put it off. Small roof repairs are annoying. Big roof failures are expensive.
            </p>
            <p>
              Get it checked out now, before it turns into a bigger mess.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Worried About Your Roof?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Call us for a free inspection. We'll tell you exactly what's going on.
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
