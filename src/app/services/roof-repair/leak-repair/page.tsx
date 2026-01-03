import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Leak Repair Boise | Top Shelf Roofing | (208) 768-3987",
  description: "Fast, permanent roof leak repair in Boise. We find the source and fix it right. Call (208) 768-3987.",
};

export default function LeakRepairPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-repair" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Repair
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Leak Repair</h1>
          <p className="text-xl text-blue-100">Fast, permanent leak repairs in Boise.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Roof leaks don't fix themselves. We track down the source and repair them permanently.</p>
            <h2>Our Process</h2>
            <ul>
              <li>Thorough leak inspection</li>
              <li>Find the actual source (not just where water appears)</li>
              <li>Permanent repair using quality materials</li>
              <li>Workmanship warranty on all repairs</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Need Leak Repair?</h3>
              <p className="mb-6">Call us for fast leak repair service.</p>
              <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 768-3987</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
