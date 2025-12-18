import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, CheckCircle, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Installation Services in Boise | Top Shelf Roofing",
  description: "Professional roof installation in Boise. New roofs, replacements, and all roofing materials. 30+ years experience. Call (208) 505-9352 for a free estimate.",
  openGraph: {
    title: "Roof Installation Services in Boise | Top Shelf Roofing",
    description: "Expert roof installation for homes and businesses in Boise.",
    url: "https://boise-roofing-company.com/services/roof-installation",
  },
};

export default function RoofInstallation() {
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
            Roof Installation in Boise
          </h1>
          <p className="text-xl text-blue-100">
            New roofs, replacements, and expert installation. Done right the first time.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Your roof is one of the biggest investments you'll make in your home. When it's time for a new roof, you want it done right.
            </p>
            <p>
              We've installed thousands of roofs across the Treasure Valley. From simple ranch homes to complex architectural designs, we have the experience to handle any installation.
            </p>
            <p>
              At Top Shelf Roofing, we don't cut corners. We use quality materials, proper installation techniques, and crews who actually care about their work. Your roof will protect your home for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Home className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Installation Services</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <h3>New Roof Installation</h3>
            <p>Building a new home? We work with builders and homeowners to install roofing systems on new construction. We coordinate with your schedule and make sure everything's done to code.</p>

            <h3>Roof Replacement</h3>
            <p>When your existing roof is worn out, we tear it off and install a brand new system. Complete tear-off, deck inspection, and new installation from underlayment to ridge caps.</p>

            <h3>All Material Types</h3>
            <p>We install asphalt shingles, metal roofing, tile, and flat roofing systems. Whatever material you choose, we know how to install it properly.</p>

            <h3>Complex Rooflines</h3>
            <p>Got valleys, dormers, skylights, or complex intersections? That's our specialty. We handle the tricky details that make or break a quality installation.</p>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Roofing Materials</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              We install all major roofing materials:
            </p>
            <ul>
              <li><strong>Asphalt Shingles:</strong> Most popular choice. Affordable, reliable, tons of color options.</li>
              <li><strong>Metal Roofing:</strong> Long-lasting, energy-efficient, handles snow perfectly.</li>
              <li><strong>Tile Roofing:</strong> Beautiful, durable, great for certain architectural styles.</li>
              <li><strong>Flat Roofing:</strong> TPO, EPDM, modified bitumen for low-slope applications.</li>
            </ul>
            <p>
              Not sure which material is right for you? We'll explain the pros and cons of each option for your specific home and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Installation Process</h2>
          <div className="prose prose-lg max-w-none">
            <ol>
              <li><strong>Free estimate:</strong> We inspect your roof, measure everything, and provide a detailed quote.</li>
              <li><strong>Material selection:</strong> Choose your shingles, underlayment, and ventilation options.</li>
              <li><strong>Scheduling:</strong> We coordinate timing and watch weather forecasts.</li>
              <li><strong>Tear-off:</strong> Remove old roofing materials and haul them away.</li>
              <li><strong>Deck inspection:</strong> Check for rot or damage and make repairs.</li>
              <li><strong>Installation:</strong> Install underlayment, drip edge, shingles, flashing, and ventilation.</li>
              <li><strong>Cleanup:</strong> Magnetic sweep for nails, haul debris, leave your property spotless.</li>
              <li><strong>Final walkthrough:</strong> Review the work together and ensure you're satisfied.</li>
            </ol>
            <p>
              Most residential installations take 1-3 days depending on size and complexity.
            </p>
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
            <h2 className="text-3xl font-bold">Why Choose Top Shelf Roofing?</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>30+ years experience:</strong> We've installed thousands of roofs in the Boise area.</li>
              <li><strong>Quality materials:</strong> We use top-tier products from manufacturers we trust.</li>
              <li><strong>Experienced crews:</strong> Our installers know what they're doing.</li>
              <li><strong>Clean job sites:</strong> We respect your property and clean up thoroughly.</li>
              <li><strong>Warranty protection:</strong> Full manufacturer warranties plus our workmanship guarantee.</li>
              <li><strong>Local and established:</strong> We've been here 30+ years and we're not going anywhere.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Ready for a New Roof?</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>
              Getting a new roof is a big decision. We'll walk you through the process, explain your options, and provide a detailed estimate with no pressure to decide immediately.
            </p>
            <p>
              You'll know exactly what you're getting, what it'll cost, and how long it'll take.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Estimate</h2>
          <p className="text-xl text-gray-600 mb-8">
            Call us today to schedule your roof installation estimate.
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
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/services/roof-installation/new-roof" className="text-blue-600 hover:text-blue-700 font-medium">
              → New Roof Installation
            </Link>
            <Link href="/services/roof-installation/roof-replacement" className="text-blue-600 hover:text-blue-700 font-medium">
              → Roof Replacement
            </Link>
            <Link href="/services/roof-installation/shingle-roofing" className="text-blue-600 hover:text-blue-700 font-medium">
              → Shingle Roofing
            </Link>
            <Link href="/services/roof-installation/metal-roofing" className="text-blue-600 hover:text-blue-700 font-medium">
              → Metal Roofing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
