import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shingle Roofing Installation Boise | Top Shelf Roofing | (208) 505-9352",
  description: "Professional asphalt shingle roof installation in Boise. All major brands, expert installation. Call (208) 505-9352.",
};

export default function ShingleRoofingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-installation" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Installation
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shingle Roofing Installation</h1>
          <p className="text-xl text-blue-100">Professional asphalt shingle installation in Boise.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Asphalt shingles are the most popular roofing material. We install all major brands with proper techniques that ensure long life.</p>

            <h2>Shingle Options</h2>
            <ul>
              <li>3-tab and architectural shingles</li>
              <li>All major brands (Owens Corning, GAF, CertainTeed)</li>
              <li>Impact-resistant options for hail protection</li>
              <li>Wide variety of colors</li>
              <li>Full manufacturer warranties</li>
            </ul>

            <h2>Why Choose Shingles?</h2>
            <p>Asphalt shingles offer the best value for most homes. They're affordable, reliable, and come in hundreds of colors and styles.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Estimate</h3>
              <p className="mb-6">Call us for a shingle roofing estimate.</p>
              <a href="tel:2085059352" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                Call (208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
