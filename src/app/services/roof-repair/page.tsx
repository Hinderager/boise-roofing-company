import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Wrench, AlertTriangle, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Repair Services in Boise | Top Shelf Roofing",
  description: "Fast, reliable roof repairs in Boise and the Treasure Valley. We fix leaks, damaged shingles, flashing issues, and more. Call (208) 768-3987 for a free estimate.",
  openGraph: {
    title: "Roof Repair Services in Boise | Top Shelf Roofing",
    description: "Fast, reliable roof repairs in Boise. We fix leaks, damaged shingles, and more.",
    url: "https://boise-roofing-company.com/services/roof-repair",
  },
};

export default function RoofRepair() {
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
            Roof Repair Services in Boise
          </h1>
          <p className="text-xl text-blue-100">
            Fast repairs that actually last. No runaround, no surprises.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Nobody plans for a leaky roof. It just happens—usually at the worst possible time.
            </p>
            <p>
              Maybe you noticed a stain on the ceiling. Or water dripping into a bucket. Or shingles in your yard after that last windstorm.
            </p>
            <p>
              Here's the good news: most roof problems can be fixed without replacing the whole thing. If you catch them early, a solid repair can buy you years of protection.
            </p>
            <p>
              At Top Shelf Roofing, we handle repairs the right way. We find the real problem, fix it properly, and make sure it doesn't come back. No shortcuts, no band-aids.
            </p>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">What We Fix</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              We've repaired thousands of roofs in Boise and the Treasure Valley. Here's what we see most often:
            </p>
            <ul>
              <li><strong>Leak repairs:</strong> We track down the source (which isn't always obvious) and seal it permanently.</li>
              <li><strong>Missing or damaged shingles:</strong> Wind, hail, and age can all take their toll. We replace damaged shingles to match your existing roof.</li>
              <li><strong>Flashing issues:</strong> Flashing around chimneys, vents, and skylights is a common leak point. We re-seal or replace it as needed.</li>
              <li><strong>Storm damage:</strong> Hail dents, wind damage, fallen branches—we handle it all and work directly with your insurance if needed.</li>
              <li><strong>Ventilation problems:</strong> Poor ventilation can cause moisture buildup and shorten your roof's life. We'll fix it before it causes bigger issues.</li>
              <li><strong>Sagging or structural issues:</strong> If your roof is sagging, that's a sign of a serious problem. We'll assess the damage and recommend the best fix.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">When to Call for Repairs</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Don't wait until a small problem becomes a big one. Call us if you notice:
            </p>
            <ul>
              <li>Water stains on your ceiling or walls</li>
              <li>Shingles in your yard or gutters</li>
              <li>Visible damage to your roof (cracked, curling, or missing shingles)</li>
              <li>Daylight coming through your attic</li>
              <li>Higher energy bills (could mean poor insulation or ventilation)</li>
              <li>Sagging areas on your roof</li>
              <li>Granules from shingles washing into your gutters</li>
            </ul>
            <p>
              The longer you wait, the more expensive the fix becomes. What starts as a $500 repair can turn into a $10,000 replacement if water gets into the decking or attic.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">How Roof Repairs Work</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              We keep the process simple and straightforward:
            </p>
            <ol>
              <li><strong>Free inspection:</strong> We'll come out, get on your roof, and figure out exactly what's going on. No charge for the inspection.</li>
              <li><strong>Written estimate:</strong> We'll explain what needs to be fixed, why it needs to be fixed, and how much it'll cost. Everything in writing.</li>
              <li><strong>Schedule the work:</strong> Most repairs take a few hours to a day. We'll find a time that works for you.</li>
              <li><strong>Fix it right:</strong> Our crew shows up on time, does the work, and cleans up when they're done.</li>
              <li><strong>Follow-up:</strong> We stand behind our work. If something's not right, we'll make it right.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Why Hire Top Shelf Roofing?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Look, there are plenty of roofers in Boise. Here's why people choose us:
            </p>
            <ul>
              <li><strong>We're honest:</strong> If your roof doesn't need to be replaced, we'll tell you. We're not here to upsell you.</li>
              <li><strong>We're fast:</strong> Most repairs are done in a day or less. We know you want this fixed, not dragged out.</li>
              <li><strong>We're thorough:</strong> We don't just patch the obvious problem. We figure out what caused it and make sure it doesn't happen again.</li>
              <li><strong>We're local:</strong> We live and work here. If something goes wrong, we're easy to reach.</li>
              <li><strong>We guarantee our work:</strong> Every repair comes with a workmanship warranty. If it leaks, we fix it. No questions asked.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Don't Let a Small Problem Become a Big One</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Roof leaks don't fix themselves. They get worse. And the longer you wait, the more it's going to cost.
            </p>
            <p>
              We'll come out, take a look, and give you a straight answer. If it's a simple fix, we'll tell you. If you need a replacement, we'll tell you that too.
            </p>
            <p>
              Either way, you'll know exactly where you stand.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Roof Repair?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Call us today for a free inspection and estimate.
          </p>
          <a
            href="tel:2087683987"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call (208) 768-3987
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
            <Link href="/services/roof-inspection" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Inspection
            </Link>
            <Link href="/services/emergency-roofing" className="text-blue-600 hover:text-blue-700 font-medium">
              → Emergency Roofing
            </Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
              → View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
