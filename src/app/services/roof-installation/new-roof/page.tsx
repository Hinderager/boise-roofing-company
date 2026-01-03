import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "New Roof Installation Boise | Top Shelf Roofing | (208) 768-3987",
  description: "Expert new roof installation in Boise. New construction and additions. Quality materials, professional crews. Call (208) 768-3987.",
};

export default function NewRoofPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-installation" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Installation
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">New Roof Installation in Boise</h1>
          <p className="text-xl text-blue-100">Professional new roof installation for new construction and additions.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Building a new home or adding onto your existing one? We install roofing systems on new construction throughout the Treasure Valley.</p>
            <p>We work with builders, contractors, and homeowners to deliver quality roofing that protects your investment for decades.</p>

            <h2>Our New Construction Services</h2>
            <ul>
              <li>Complete roofing systems for new homes</li>
              <li>Additions and garage roofing</li>
              <li>Coordination with construction schedules</li>
              <li>All material types available</li>
              <li>Code-compliant installation</li>
              <li>Manufacturer warranty registration</li>
            </ul>

            <h2>Why Builders Choose Us</h2>
            <p>We understand construction schedules and the importance of staying on track. Our crews show up when scheduled, work efficiently, and complete quality installations that pass inspections the first time.</p>

            <h2>For Homeowners</h2>
            <p>Building your own home? We'll work directly with you to select materials, coordinate timing, and ensure your new roof is installed properly from day one.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">New Construction Quote</h3>
              <p className="mb-6">Call us for a detailed estimate on your new construction roofing project.</p>
              <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                Call (208) 768-3987
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
