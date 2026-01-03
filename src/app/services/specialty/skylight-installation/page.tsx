import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Skylight Installation Boise | Top Shelf Roofing | (208) 768-3987",
  description: "Professional skylight installation. Add natural light to your home. Leak-free installation. Call (208) 768-3987.",
};

export default function SkylightInstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services/specialty" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Specialty Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skylight Installation</h1>
          <p className="text-xl text-blue-100">Add natural light to your home with professional skylight installation.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Skylights add natural light and value to your home. We install skylights with proper flashing and waterproofing.</p>
            <h2>Skylight Services</h2>
            <ul>
              <li>New skylight installation</li>
              <li>Skylight replacement</li>
              <li>Proper flashing to prevent leaks</li>
              <li>All major skylight brands</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Skylight Installation Quote</h3>
              <p className="mb-6">Call to discuss your skylight project.</p>
              <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Call (208) 768-3987</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
