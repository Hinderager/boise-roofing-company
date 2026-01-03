import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Chimney Flashing Repair Boise | Top Shelf Roofing | (208) 768-3987",
  description: "Expert chimney flashing repair. Stop chimney leaks permanently. Proper installation. Call (208) 768-3987.",
};

export default function ChimneyFlashingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/specialty" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Specialty Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chimney Flashing Repair</h1>
          <p className="text-xl text-blue-100">Stop chimney leaks with expert flashing repair.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Chimney flashing is a common leak point. We install and repair chimney flashing using proper techniques.</p>
            <h2>Flashing Services</h2>
            <ul>
              <li>Step flashing installation</li>
              <li>Counter-flashing repair</li>
              <li>Cricket installation for large chimneys</li>
              <li>Permanent leak solutions</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Fix Chimney Leaks</h3>
              <p className="mb-6">Call for expert chimney flashing repair.</p>
              <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 768-3987</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
