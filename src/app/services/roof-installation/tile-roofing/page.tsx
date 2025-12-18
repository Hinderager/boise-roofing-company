import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Tile Roofing Installation Boise | Top Shelf Roofing | (208) 505-9352",
  description: "Expert tile roof installation. Concrete and clay tile. Beautiful, long-lasting roofing. Call (208) 505-9352.",
};

export default function TileRoofingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-installation" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Installation
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tile Roofing Installation</h1>
          <p className="text-xl text-blue-100">Beautiful, long-lasting tile roofs for Boise homes.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Tile roofing offers unmatched beauty and longevity. We install concrete and clay tile systems.</p>
            <h2>Tile Options</h2>
            <ul>
              <li>Concrete tile in multiple profiles</li>
              <li>Clay tile for authentic appearance</li>
              <li>50-100+ year lifespan</li>
              <li>Fire resistant and energy efficient</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Estimate</h3>
              <p className="mb-6">Call us for a tile roofing estimate.</p>
              <a href="tel:2085059352" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 505-9352</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
