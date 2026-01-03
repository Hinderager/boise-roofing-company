import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Ventilation Systems Boise | Top Shelf Roofing | (208) 768-3987",
  description: "Roof ventilation installation. Extend roof life, save energy. Ridge vents, soffit vents. Call (208) 768-3987.",
};

export default function VentilationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/specialty" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Specialty Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Ventilation Systems</h1>
          <p className="text-xl text-blue-100">Proper ventilation extends roof life and saves energy.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Proper attic ventilation extends roof life and improves energy efficiency. We install complete ventilation systems.</p>
            <h2>Ventilation Options</h2>
            <ul>
              <li>Ridge vents for continuous ventilation</li>
              <li>Soffit vents for intake air</li>
              <li>Gable vents and powered fans</li>
              <li>Balanced ventilation systems</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Improve Your Ventilation</h3>
              <p className="mb-6">Call to discuss ventilation upgrades.</p>
              <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 768-3987</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
