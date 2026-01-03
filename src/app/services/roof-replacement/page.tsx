import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, DollarSign, Calendar, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Replacement Services in Boise | Top Shelf Roofing",
  description: "Complete roof replacement services in Boise and the Treasure Valley. Quality materials, skilled crews, fair pricing. Call (208) 768-3987 for a free estimate.",
  openGraph: {
    title: "Roof Replacement Services in Boise | Top Shelf Roofing",
    description: "Complete roof replacement services in Boise. Quality materials, skilled crews, fair pricing.",
    url: "https://boise-roofing-company.com/services/roof-replacement",
  },
};

export default function RoofReplacement() {
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
            Roof Replacement in Boise
          </h1>
          <p className="text-xl text-blue-100">
            A new roof is a big decision. We'll make sure you get it done right.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Let's be real: replacing your roof isn't cheap. It's also not something you do very often—maybe once or twice in your lifetime.
            </p>
            <p>
              So when it's time to pull the trigger, you want to make sure it's done right. Quality materials, skilled crew, no surprises.
            </p>
            <p>
              At Top Shelf Roofing, we've replaced hundreds of roofs across Boise, Meridian, Nampa, and the Treasure Valley. We know what works in Idaho's climate, and we stand behind every roof we install.
            </p>
          </div>
        </div>
      </section>

      {/* When to Replace */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Home className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">When Should You Replace Your Roof?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Not every roof problem needs a full replacement. But if you're seeing multiple signs of serious wear, it might be time.
            </p>
            <p>
              Here's when replacement usually makes more sense than repairs:
            </p>
            <ul>
              <li><strong>Age:</strong> Most asphalt shingle roofs last 20-25 years. If yours is in that range, it's probably time.</li>
              <li><strong>Widespread damage:</strong> A few missing shingles? That's a repair. Half your roof looking rough? That's a replacement.</li>
              <li><strong>Multiple leaks:</strong> If you're patching leaks every few months, you're just delaying the inevitable.</li>
              <li><strong>Curling or buckling shingles:</strong> This means the shingles are past their prime and losing their ability to protect your home.</li>
              <li><strong>Granule loss:</strong> If your gutters are full of shingle granules, your roof is breaking down.</li>
              <li><strong>Sagging roof deck:</strong> This is a structural issue that needs immediate attention.</li>
            </ul>
            <p>
              Not sure if you need a replacement? We'll come out and give you an honest assessment. If repairs will do the job, we'll tell you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">How Roof Replacement Works</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              We've streamlined the process to make it as painless as possible:
            </p>
            <ol>
              <li><strong>Free inspection and estimate:</strong> We'll assess your roof, discuss material options, and give you a detailed written estimate.</li>
              <li><strong>Choose your materials:</strong> We'll walk you through shingle options, colors, and warranties. We use quality brands like Owens Corning, GAF, and CertainTeed.</li>
              <li><strong>Schedule the work:</strong> Most residential roofs take 1-3 days to replace. We'll work around your schedule and Idaho's weather.</li>
              <li><strong>Tear-off and prep:</strong> We remove your old roof, inspect the decking, and make any needed repairs before installing the new roof.</li>
              <li><strong>Install your new roof:</strong> We install underlayment, ice and water shield, new shingles, flashing, and vents—all to manufacturer specs.</li>
              <li><strong>Clean-up:</strong> We haul away all debris, run a magnet over your property to pick up loose nails, and leave your yard clean.</li>
              <li><strong>Final walkthrough:</strong> We'll show you the finished roof and answer any questions.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Roofing Materials We Install</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              We work with all major roofing materials, but most homes in Boise use asphalt shingles. Here's what we offer:
            </p>
            <h3>Asphalt Shingles</h3>
            <p>
              The most popular choice for good reason. They're affordable, durable, and come in tons of colors and styles. We install:
            </p>
            <ul>
              <li><strong>3-tab shingles:</strong> The budget option. Good performance at a lower price point.</li>
              <li><strong>Architectural (dimensional) shingles:</strong> Thicker, more durable, better-looking. Most common choice for homeowners.</li>
              <li><strong>Luxury shingles:</strong> Premium shingles that mimic the look of slate or cedar shake.</li>
            </ul>
            <p>
              Most asphalt shingles come with 25-50 year warranties depending on the product.
            </p>
            <h3>Metal Roofing</h3>
            <p>
              Metal roofs last 40-70 years and handle Idaho's weather like a champ. They're more expensive upfront but can save you money over time. We install standing seam and metal shingle systems.
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
            <h2 className="text-3xl font-bold">What Does Roof Replacement Cost?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Every roof is different, so there's no one-size-fits-all price. But here's what affects the cost:
            </p>
            <ul>
              <li><strong>Roof size:</strong> Obviously, bigger roofs cost more.</li>
              <li><strong>Roof pitch:</strong> Steeper roofs take more time and safety equipment.</li>
              <li><strong>Material choice:</strong> 3-tab shingles are cheaper than architectural. Metal is more expensive than asphalt.</li>
              <li><strong>Layers to remove:</strong> If you have multiple old roof layers, removal takes longer.</li>
              <li><strong>Decking repairs:</strong> If your decking is damaged, we'll need to replace sections.</li>
              <li><strong>Complexity:</strong> Lots of valleys, dormers, or skylights add to the cost.</li>
            </ul>
            <p>
              For a typical home in Boise, you're looking at $8,000-$15,000 for asphalt shingles. Metal roofs run $15,000-$30,000+.
            </p>
            <p>
              The best way to get an accurate price? Call us for a free estimate. We'll measure your roof, assess the condition, and give you a detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Why Choose Top Shelf Roofing?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              We're not the only roofing company in town, but here's what sets us apart:
            </p>
            <ul>
              <li><strong>Transparent pricing:</strong> Our estimates break down exactly where your money goes. No hidden fees.</li>
              <li><strong>Quality materials:</strong> We use top brands and don't cut corners on underlayment, flashing, or ventilation.</li>
              <li><strong>Experienced crews:</strong> Our teams have been installing roofs for years. They know what they're doing.</li>
              <li><strong>Workmanship warranty:</strong> We guarantee our installation. If something's wrong, we fix it.</li>
              <li><strong>Local and accountable:</strong> We're not storm chasers or out-of-state contractors. We live here, and we're easy to reach.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Your Roof Protects Everything You Own</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Don't cheap out on the one thing standing between your family and the weather.
            </p>
            <p>
              A quality roof replacement is an investment, not an expense. It protects your home, increases its value, and gives you peace of mind for decades.
            </p>
            <p>
              Let's talk about your project. We'll give you straight answers and a fair price.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a New Roof?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free estimate from a local roofing company you can trust.
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
            <Link href="/services/roof-repair" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Repair
            </Link>
            <Link href="/services/roof-inspection" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Inspection
            </Link>
            <Link href="/services/shingle-roofing" className="text-blue-600 hover:text-blue-700 font-medium">
              → Shingle Roofing
            </Link>
            <Link href="/services/metal-roofing" className="text-blue-600 hover:text-blue-700 font-medium">
              → Metal Roofing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
