import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search, Camera, FileText, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Inspection Services in Boise | Top Shelf Roofing",
  description: "Professional roof inspections in Boise. We catch problems early before they become expensive. Free inspections available. Call (208) 505-9352.",
  openGraph: {
    title: "Roof Inspection Services in Boise | Top Shelf Roofing",
    description: "Professional roof inspections in Boise. Catch problems early before they get expensive.",
    url: "https://boise-roofing-company.com/services/roof-inspection",
  },
};

export default function RoofInspection() {
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
            Professional Roof Inspections in Boise
          </h1>
          <p className="text-xl text-blue-100">
            Catch small problems before they turn into expensive disasters.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Here's the thing about roof problems: they start small. A loose shingle here, a tiny crack in the flashing there. Nothing you'd notice from the ground.
            </p>
            <p>
              But left alone, those small issues become big ones. That loose shingle lets water in. The water soaks into your decking. Now you're looking at rot, mold, and a repair bill that makes you want to cry.
            </p>
            <p>
              The good news? A simple roof inspection can catch these problems early, when they're cheap and easy to fix.
            </p>
            <p>
              At Top Shelf Roofing, we inspect hundreds of roofs every year across Boise and the Treasure Valley. We know what to look for, and we'll give you straight answers about what you need—and what you don't.
            </p>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Search className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">What We Check During an Inspection</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              A real roof inspection means actually getting on your roof—not just looking at it from the ground with binoculars (yes, some companies do that).
            </p>
            <p>
              Here's what we examine:
            </p>
            <ul>
              <li><strong>Shingles:</strong> We check for missing, damaged, curling, or lifting shingles.</li>
              <li><strong>Flashing:</strong> We inspect the metal flashing around chimneys, vents, skylights, and valleys for cracks, rust, or poor installation.</li>
              <li><strong>Roof penetrations:</strong> Vents, pipes, and other penetrations are common leak points. We make sure they're properly sealed.</li>
              <li><strong>Gutters and downspouts:</strong> We check for proper drainage and signs of granule loss from shingles.</li>
              <li><strong>Soffits and fascia:</strong> We look for water damage, rot, or pest issues.</li>
              <li><strong>Attic and interior:</strong> If accessible, we check your attic for signs of leaks, moisture, poor ventilation, or insulation issues.</li>
              <li><strong>Structural issues:</strong> We look for sagging, uneven areas, or signs of stress on the roof deck.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* When to Inspect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">When Should You Get Your Roof Inspected?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              You don't need to inspect your roof every month. But there are times when it makes sense to have a pro take a look:
            </p>
            <ul>
              <li><strong>After a storm:</strong> Hail, high winds, or fallen branches can all cause damage that's not visible from the ground.</li>
              <li><strong>Before buying a home:</strong> Don't find out the roof is shot after you close. Get it inspected first.</li>
              <li><strong>Before selling a home:</strong> Knowing your roof's condition helps you price the house right and avoid surprises during the buyer's inspection.</li>
              <li><strong>Every 3-5 years:</strong> Regular inspections catch problems early and help your roof last longer.</li>
              <li><strong>If you notice something weird:</strong> Water stains, missing shingles, or higher energy bills? Get it checked out.</li>
              <li><strong>If your roof is over 15 years old:</strong> Older roofs need more frequent check-ups.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Types of Inspections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Types of Roof Inspections We Offer</h2>
          <div className="prose prose-lg max-w-none">
            <h3>Free Visual Inspection</h3>
            <p>
              If you're a potential customer or you just want a quick look, we'll come out for free. We'll get on your roof, check the obvious issues, and give you a verbal report.
            </p>
            <p>
              This is perfect if you're shopping around for repairs or replacement, or if you just want peace of mind.
            </p>
            <h3>Detailed Paid Inspection</h3>
            <p>
              For pre-purchase inspections, insurance claims, or situations where you need documentation, we offer a more thorough inspection with a written report.
            </p>
            <p>
              This includes detailed notes, photos, an assessment of the roof's remaining life, and recommendations for repairs or maintenance.
            </p>
            <h3>Insurance Inspection</h3>
            <p>
              If you've had storm damage, we can inspect your roof and document everything for your insurance claim. We know what adjusters look for, and we'll make sure nothing gets missed.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">What You Get After the Inspection</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              We don't just climb up, look around, and leave. Here's what happens after we inspect your roof:
            </p>
            <ul>
              <li><strong>Honest assessment:</strong> We'll tell you what we found, what needs attention, and what can wait.</li>
              <li><strong>Photos:</strong> We'll show you pictures of any issues we found so you can see what we're talking about.</li>
              <li><strong>Written report (if requested):</strong> For paid inspections, you'll get a detailed report you can share with buyers, sellers, or insurance companies.</li>
              <li><strong>Cost estimate:</strong> If repairs are needed, we'll give you a written estimate for the work.</li>
              <li><strong>Timeline recommendation:</strong> We'll tell you if something needs to be fixed now, or if it can wait a year or two.</li>
            </ul>
            <p>
              Most importantly, you'll know exactly where you stand. No pressure, no upselling—just the facts.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Camera className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Why Get Your Inspection From Top Shelf Roofing?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Look, anyone with a ladder can climb on a roof. But a good inspection takes experience. Here's what you get when you hire us:
            </p>
            <ul>
              <li><strong>We're thorough:</strong> We don't just glance at your shingles. We check everything that could cause problems.</li>
              <li><strong>We're honest:</strong> If your roof is fine, we'll tell you. We're not here to scare you into unnecessary repairs.</li>
              <li><strong>We know Idaho roofs:</strong> Years of working in Boise means we know what problems to look for in this climate.</li>
              <li><strong>We explain things clearly:</strong> No technical jargon. We'll explain what we found in plain English.</li>
              <li><strong>We're insured:</strong> If something goes wrong during the inspection, we're covered.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Don't Wait Until You Have a Leak</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              By the time you see water inside your house, the damage has already been done. Your decking is wet, your insulation is soaked, and you're looking at a repair that's 10 times more expensive than it needed to be.
            </p>
            <p>
              A simple inspection could have caught the problem when it was still cheap to fix.
            </p>
            <p>
              Let us take a look. If everything's good, you get peace of mind. If something needs attention, you'll catch it early.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule a Roof Inspection</h2>
          <p className="text-xl text-gray-600 mb-8">
            Free visual inspections for potential customers. Call today.
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
            <Link href="/services/roof-repair" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Repair
            </Link>
            <Link href="/services/roof-replacement" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Replacement
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
