import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Annual Roof Inspection Boise | Top Shelf Roofing | (208) 505-9352",
  description: "Annual roof inspections. Catch problems early. Extend roof life. Call (208) 505-9352.",
};

export default function AnnualInspectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-inspection" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Inspection
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Annual Roof Inspection</h1>
          <p className="text-xl text-blue-100">Regular inspections extend roof life.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Regular inspections catch problems before they become expensive repairs.</p>
            <h2>What We Check</h2>
            <ul>
              <li>Shingle condition and damage</li>
              <li>Flashing and sealants</li>
              <li>Ventilation systems</li>
              <li>Gutters and drainage</li>
              <li>Early warning signs</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Schedule Inspection</h3>
              <p className="mb-6">Call to set up your annual roof inspection.</p>
              <a href="tel:2085059352" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 505-9352</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
