import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Storm Damage Roof Repair Boise | Top Shelf Roofing | (208) 768-3987",
  description: "Storm damage repair. Hail, wind, weather damage. Insurance claims help. Call (208) 768-3987.",
};

export default function StormDamagePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-repair" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Repair
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Storm Damage Repair</h1>
          <p className="text-xl text-blue-100">We fix storm damage and work with insurance.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Idaho weather can damage roofs. We repair storm damage and work directly with insurance.</p>
            <h2>What We Handle</h2>
            <ul>
              <li>Hail damage repairs</li>
              <li>Wind damage</li>
              <li>Fallen tree damage</li>
              <li>Insurance documentation and claims assistance</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Storm Damage?</h3>
              <p className="mb-6">Call for a free storm damage inspection.</p>
              <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 768-3987</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
