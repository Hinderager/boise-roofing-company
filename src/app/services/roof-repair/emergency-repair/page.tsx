import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Roof Repair Boise | Top Shelf Roofing | (208) 505-9352",
  description: "24/7 emergency roof repair. Fast response when you can't wait. Call (208) 505-9352.",
};

export default function EmergencyRepairPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/roof-repair" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Roof Repair
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Emergency Roof Repair</h1>
          <p className="text-xl text-blue-100">Fast emergency response in Boise.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>When your roof fails, you need help fast. We provide emergency repairs to secure your home.</p>
            <h2>Emergency Services</h2>
            <ul>
              <li>Fast response to emergency calls</li>
              <li>Temporary repairs to stop leaks</li>
              <li>Tarping and board-up services</li>
              <li>Permanent repairs scheduled quickly</li>
            </ul>
            <div className="bg-red-50 p-8 rounded-lg mt-12 border-2 border-red-200">
              <h3 className="text-2xl font-bold mb-4">Roofing Emergency?</h3>
              <p className="mb-6">Call now for emergency repair service.</p>
              <a href="tel:2085059352" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 505-9352</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
