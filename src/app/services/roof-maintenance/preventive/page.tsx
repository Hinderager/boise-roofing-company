import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Preventive Roof Maintenance Boise | Top Shelf Roofing | (208) 768-3987",
  description: "Preventive maintenance programs. Extend roof life, prevent expensive repairs. Call (208) 768-3987.",
};

export default function PreventivePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-maintenance" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Maintenance
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Preventive Roof Maintenance</h1>
          <p className="text-xl text-blue-100">Extend your roof's life with regular maintenance.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Regular maintenance prevents expensive repairs and extends roof life.</p>
            <h2>Maintenance Program</h2>
            <ul>
              <li>Annual or semi-annual inspections</li>
              <li>Minor repairs included</li>
              <li>Detailed condition reports</li>
              <li>Priority emergency response</li>
              <li>Maintain warranty compliance</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Start a Maintenance Program</h3>
              <p className="mb-6">Call to discuss a maintenance program for your property.</p>
              <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 768-3987</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
