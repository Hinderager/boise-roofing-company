import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Cleaning Boise | Top Shelf Roofing | (208) 768-3987",
  description: "Professional roof cleaning. Remove moss, algae, and debris. Safe cleaning methods. Call (208) 768-3987.",
};

export default function RoofCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-maintenance" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Maintenance
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Cleaning</h1>
          <p className="text-xl text-blue-100">Remove moss and algae safely.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Moss and algae shorten roof life. We safely clean roofs without damaging shingles.</p>
            <h2>Cleaning Services</h2>
            <ul>
              <li>Moss and algae removal</li>
              <li>Debris cleaning</li>
              <li>Safe cleaning methods</li>
              <li>Prevent premature roof aging</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Schedule Roof Cleaning</h3>
              <p className="mb-6">Call to schedule professional roof cleaning.</p>
              <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 768-3987</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
