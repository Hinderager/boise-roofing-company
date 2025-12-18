import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pre-Purchase Roof Inspection Boise | Top Shelf Roofing | (208) 505-9352",
  description: "Pre-purchase roof inspections. Know what you're buying. Detailed reports. Call (208) 505-9352.",
};

export default function PrePurchasePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-inspection" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Inspection
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pre-Purchase Roof Inspection</h1>
          <p className="text-xl text-blue-100">Know what you're buying before you close.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Buying a home? Get a professional roof inspection before closing.</p>
            <h2>Inspection Includes</h2>
            <ul>
              <li>Complete roof assessment</li>
              <li>Remaining useful life estimate</li>
              <li>Photo documentation</li>
              <li>Written report</li>
              <li>Repair cost estimates if needed</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Schedule Inspection</h3>
              <p className="mb-6">Call to schedule your pre-purchase inspection.</p>
              <a href="tel:2085059352" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 505-9352</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
