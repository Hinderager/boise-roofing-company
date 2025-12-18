import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Storm Damage Assessment Boise | Top Shelf Roofing | (208) 505-9352",
  description: "Free storm damage inspections. Insurance claims help. Call (208) 505-9352.",
};

export default function StormAssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-inspection" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Inspection
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Storm Damage Assessment</h1>
          <p className="text-xl text-blue-100">Free storm damage inspections.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>After major storms, we provide free inspections to assess damage and help with insurance.</p>
            <h2>Assessment Services</h2>
            <ul>
              <li>Free post-storm inspections</li>
              <li>Detailed damage documentation</li>
              <li>Photo reports for insurance</li>
              <li>Meet with adjusters</li>
              <li>Repair estimates</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Free Storm Inspection</h3>
              <p className="mb-6">Call for a free storm damage assessment.</p>
              <a href="tel:2085059352" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 505-9352</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
