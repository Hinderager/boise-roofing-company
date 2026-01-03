import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Maintenance Services in Boise | Top Shelf Roofing",
  description: "Professional roof maintenance in Boise. Preventive care, gutter cleaning, roof cleaning. Extend your roof's life. Call (208) 768-3987.",
  openGraph: {
    title: "Roof Maintenance Services in Boise | Top Shelf Roofing",
    description: "Extend your roof's life with professional maintenance.",
    url: "https://boise-roofing-company.com/services/roof-maintenance",
  },
};

export default function RoofMaintenance() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Maintenance in Boise</h1>
          <p className="text-xl text-blue-100">Regular maintenance extends your roof's life and prevents expensive repairs.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Most people don't think about their roof until something goes wrong. But regular maintenance can add years to your roof's life and save you thousands in premature replacement costs.</p>
            <p>We offer preventive maintenance programs for homeowners and property managers who want to protect their roofing investment.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Maintenance Services</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <h3>Preventive Maintenance</h3>
            <p>Annual or semi-annual inspections to catch small problems before they become expensive repairs. We check for damaged shingles, flashing issues, ventilation problems, and more.</p>

            <h3>Gutter Cleaning</h3>
            <p>Clogged gutters cause water to back up under shingles and overflow onto your foundation. We clean gutters and downspouts, check for proper drainage, and make minor repairs.</p>

            <h3>Roof Cleaning</h3>
            <p>Remove moss, algae, and debris that can shorten your roof's life. Professional cleaning that doesn't damage shingles.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Maintenance Programs</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>We offer scheduled maintenance programs for residential and commercial properties:</p>
            <ul>
              <li>Annual or semi-annual inspections</li>
              <li>Detailed condition reports with photos</li>
              <li>Minor repairs included</li>
              <li>Priority scheduling for emergency issues</li>
              <li>Track maintenance history</li>
              <li>Maintain warranty compliance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Why Regular Maintenance Matters</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Extends roof life:</strong> Catch and fix small problems before they cause major damage</li>
              <li><strong>Prevents leaks:</strong> Regular inspections find vulnerabilities before water gets in</li>
              <li><strong>Saves money:</strong> Minor repairs cost far less than emergency replacements</li>
              <li><strong>Maintains warranties:</strong> Some warranties require regular maintenance</li>
              <li><strong>Energy efficiency:</strong> Proper ventilation and sealing reduce energy costs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Protect Your Investment</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>Your roof is expensive to replace. Regular maintenance is cheap insurance that extends its life and prevents unexpected failures.</p>
            <p>Call us to set up a maintenance program tailored to your property.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Roof Maintenance</h2>
          <p className="text-xl text-gray-600 mb-8">Call us to discuss a maintenance program for your property.</p>
          <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Call (208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/services/roof-maintenance/preventive" className="text-blue-600 hover:text-blue-700 font-medium">→ Preventive Maintenance</Link>
            <Link href="/services/roof-maintenance/gutter-cleaning" className="text-blue-600 hover:text-blue-700 font-medium">→ Gutter Cleaning</Link>
            <Link href="/services/roof-maintenance/roof-cleaning" className="text-blue-600 hover:text-blue-700 font-medium">→ Roof Cleaning</Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">→ View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
