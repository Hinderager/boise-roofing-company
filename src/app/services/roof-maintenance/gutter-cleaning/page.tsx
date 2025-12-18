import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Gutter Cleaning Boise | Top Shelf Roofing | (208) 505-9352",
  description: "Professional gutter cleaning. Prevent water damage and ice dams. Call (208) 505-9352.",
};

export default function GutterCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-maintenance" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Maintenance
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gutter Cleaning</h1>
          <p className="text-xl text-blue-100">Prevent water damage with clean gutters.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Clogged gutters cause roof leaks, ice dams, and foundation damage.</p>
            <h2>Service Includes</h2>
            <ul>
              <li>Complete gutter and downspout cleaning</li>
              <li>Check for proper slope and drainage</li>
              <li>Minor gutter repairs</li>
              <li>Debris removal and disposal</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Schedule Gutter Cleaning</h3>
              <p className="mb-6">Call to schedule professional gutter cleaning.</p>
              <a href="tel:2085059352" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 505-9352</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
