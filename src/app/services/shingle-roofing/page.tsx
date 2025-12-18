import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Layers, DollarSign, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Asphalt Shingle Roofing in Boise | Top Shelf Roofing",
  description: "Professional asphalt shingle roof installation and repair in Boise. 3-tab, architectural, and luxury shingles. Call (208) 505-9352 for a free estimate.",
  openGraph: {
    title: "Asphalt Shingle Roofing in Boise | Top Shelf Roofing",
    description: "Professional asphalt shingle installation and repair in Boise and the Treasure Valley.",
    url: "https://boise-roofing-company.com/services/shingle-roofing",
  },
};

export default function ShingleRoofing() {
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
            Asphalt Shingle Roofing in Boise
          </h1>
          <p className="text-xl text-blue-100">
            The most popular choice for Idaho homes—and for good reason.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Walk down any street in Boise, and you'll see mostly asphalt shingle roofs. Why? Because they work.
            </p>
            <p>
              Asphalt shingles are affordable, durable, easy to install, and they come in enough colors and styles to match just about any home. They handle Idaho's hot summers and cold winters without falling apart.
            </p>
            <p>
              At Top Shelf Roofing, we've installed thousands of shingle roofs across Boise and the Treasure Valley. We know which products hold up, which manufacturers stand behind their warranties, and how to install them so they last.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Shingles */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Types of Asphalt Shingles</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Not all shingles are the same. Here are the main types we install:
            </p>
            <h3>3-Tab Shingles</h3>
            <p>
              These are the basic option. They're flat, uniform, and get the job done without breaking the bank.
            </p>
            <p>
              <strong>Pros:</strong> Affordable. Easy to install. Available everywhere.
            </p>
            <p>
              <strong>Cons:</strong> Shorter lifespan (15-20 years). Less wind resistance. Basic look.
            </p>
            <p>
              <strong>Best for:</strong> Budget-conscious homeowners, rental properties, or homes you're planning to sell soon.
            </p>
            <h3>Architectural (Dimensional) Shingles</h3>
            <p>
              This is what most homeowners choose. Architectural shingles are thicker, heavier, and better-looking than 3-tabs. They have a layered, dimensional appearance that adds depth and texture.
            </p>
            <p>
              <strong>Pros:</strong> Better durability (25-30+ years). More wind resistance. Better curb appeal. Longer warranties.
            </p>
            <p>
              <strong>Cons:</strong> Costs more than 3-tabs (but not by a ton).
            </p>
            <p>
              <strong>Best for:</strong> Most homeowners. Best balance of cost, performance, and appearance.
            </p>
            <h3>Luxury (Premium) Shingles</h3>
            <p>
              These are the top-tier option. Luxury shingles are thick, heavy, and designed to mimic the look of slate or cedar shake. They're the best-looking and longest-lasting asphalt shingles you can buy.
            </p>
            <p>
              <strong>Pros:</strong> Longest lifespan (30-50 years). Best wind and impact resistance. High-end appearance. Strong warranties.
            </p>
            <p>
              <strong>Cons:</strong> Higher cost. Heavier (may require additional roof support).
            </p>
            <p>
              <strong>Best for:</strong> Homeowners who want the best and plan to stay in their home long-term.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Shingles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Why Choose Asphalt Shingles?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Asphalt shingles are the most popular roofing material in the U.S. for good reason. Here's why they work so well for Idaho homes:
            </p>
            <ul>
              <li><strong>Affordable:</strong> Shingles are one of the most cost-effective roofing options out there.</li>
              <li><strong>Easy to install:</strong> Most shingle roofs can be installed in 1-3 days, so you're not disrupted for long.</li>
              <li><strong>Widely available:</strong> If you need repairs down the road, finding matching shingles is easy.</li>
              <li><strong>Lots of options:</strong> Dozens of colors, styles, and brands to choose from. You'll find something that fits your home.</li>
              <li><strong>Good warranties:</strong> Most shingles come with 25-50 year warranties from the manufacturer, plus workmanship warranties from the installer.</li>
              <li><strong>Proven performance:</strong> Shingles handle sun, wind, rain, snow, and hail just fine when installed correctly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brands We Use */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Shingle Brands We Trust</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              We work with all the major shingle manufacturers, but here are the brands we recommend most often:
            </p>
            <h3>Owens Corning</h3>
            <p>
              Known for their Duration series (architectural shingles) and strong warranties. We install a lot of Owens Corning roofs, and they hold up great in Idaho.
            </p>
            <h3>GAF</h3>
            <p>
              The largest shingle manufacturer in North America. Their Timberline HDZ line is one of the most popular architectural shingles we install.
            </p>
            <h3>CertainTeed</h3>
            <p>
              Premium shingles with excellent color options and strong performance. Their Landmark series is a solid choice for most homes.
            </p>
            <h3>IKO</h3>
            <p>
              Great value for the price. IKO makes quality shingles that perform well without the premium price tag.
            </p>
            <p>
              We'll walk you through the options and help you choose the right shingle for your home and budget.
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
            <h2 className="text-3xl font-bold">How Much Do Shingle Roofs Cost?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Pricing depends on your roof size, shingle type, and complexity. But here's a rough idea for a typical Boise home (1,500-2,000 sq ft):
            </p>
            <ul>
              <li><strong>3-tab shingles:</strong> $5,000-$8,000</li>
              <li><strong>Architectural shingles:</strong> $8,000-$12,000</li>
              <li><strong>Luxury shingles:</strong> $12,000-$18,000</li>
            </ul>
            <p>
              That includes tear-off, disposal, new underlayment, ice and water shield, shingles, flashing, vents, and clean-up.
            </p>
            <p>
              Prices go up if:
            </p>
            <ul>
              <li>Your roof is steep or complex</li>
              <li>You have multiple layers to remove</li>
              <li>Your decking needs repairs</li>
              <li>You have lots of chimneys, skylights, or valleys</li>
            </ul>
            <p>
              Want a real number? Call us for a free estimate. We'll measure your roof, talk through options, and give you a detailed written quote.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Shingle Installation Process</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Here's how we install a shingle roof:
            </p>
            <ol>
              <li><strong>Remove the old roof:</strong> We tear off old shingles and dispose of all debris.</li>
              <li><strong>Inspect the decking:</strong> We check for rot, damage, or soft spots and replace any bad sections.</li>
              <li><strong>Install underlayment:</strong> We lay down felt or synthetic underlayment for extra protection.</li>
              <li><strong>Install ice and water shield:</strong> This goes in valleys, around chimneys, and at the eaves to prevent leaks.</li>
              <li><strong>Install drip edge:</strong> Metal edging protects the edges of your roof.</li>
              <li><strong>Install shingles:</strong> We start at the bottom and work our way up, following manufacturer specs.</li>
              <li><strong>Install flashing:</strong> Properly sealed flashing around chimneys, vents, and skylights prevents leaks.</li>
              <li><strong>Install ridge vent:</strong> Proper ventilation helps your roof last longer and keeps your attic cooler.</li>
              <li><strong>Clean-up:</strong> We haul away all debris and run a magnet to pick up nails.</li>
            </ol>
            <p>
              Most residential shingle roofs take 1-3 days to install, depending on size and complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">How to Make Your Shingle Roof Last</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              A well-installed shingle roof can last 20-30 years with minimal maintenance. Here's how to get the most out of yours:
            </p>
            <ul>
              <li><strong>Keep gutters clean:</strong> Clogged gutters cause water to back up under your shingles.</li>
              <li><strong>Trim overhanging branches:</strong> Branches scraping your roof wear down shingles and can cause damage in storms.</li>
              <li><strong>Check for damage after storms:</strong> Look for missing or damaged shingles and call for repairs if needed.</li>
              <li><strong>Get regular inspections:</strong> Have your roof inspected every 3-5 years to catch small problems early.</li>
              <li><strong>Address leaks immediately:</strong> Don't wait. Small leaks turn into big problems fast.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">We Install Shingle Roofs Right</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              A shingle roof is only as good as the installation. Cheap materials installed correctly will outlast expensive materials installed poorly.
            </p>
            <p>
              We follow manufacturer specs to the letter. That means your warranty stays valid, and your roof performs the way it's supposed to.
            </p>
            <p>
              No shortcuts. No cutting corners. Just quality work you can count on.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a New Shingle Roof?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free estimate and find out which shingles are right for your home.
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
            <Link href="/services/metal-roofing" className="text-blue-600 hover:text-blue-700 font-medium">
              → Metal Roofing
            </Link>
            <Link href="/services/roof-repair" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Repair
            </Link>
            <Link href="/services/roof-inspection" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Inspection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
