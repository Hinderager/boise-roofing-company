import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Star, Wrench, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Specialty Roofing Services in Boise | Top Shelf Roofing",
  description: "Specialty roofing services in Boise. Skylights, chimney flashing, ventilation systems, and more. Expert installation. Call (208) 768-3987.",
  openGraph: {
    title: "Specialty Roofing Services in Boise | Top Shelf Roofing",
    description: "Expert specialty roofing services for unique needs.",
    url: "https://boise-roofing-company.com/services/specialty",
  },
};

export default function SpecialtyServices() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Specialty Roofing Services</h1>
          <p className="text-xl text-blue-100">Expert solutions for unique roofing needs. Skylights, ventilation, flashing, and more.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>Some roofing projects require specialized skills and experience. Whether you're adding skylights, improving ventilation, or fixing complex flashing issues—we have the expertise.</p>
            <p>These aren't your everyday roofing jobs. They require precision, the right materials, and contractors who know what they're doing.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Star className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Specialty Services</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <h3>Skylight Installation</h3>
            <p>Add natural light to your home with properly installed skylights. We handle the roofing integration, flashing, and waterproofing to ensure no leaks.</p>

            <h3>Chimney Flashing</h3>
            <p>Chimneys are common leak points. We install and repair chimney flashing using proper techniques and materials. Counter-flashing, step flashing, and cricket installation done right.</p>

            <h3>Ventilation Systems</h3>
            <p>Proper attic ventilation extends your roof's life and improves energy efficiency. We install ridge vents, soffit vents, gable vents, and powered attic fans.</p>

            <h3>Ice Dam Prevention</h3>
            <p>Idaho winters can cause ice dams. We install heat cables, improve insulation, and upgrade ventilation to prevent ice dam damage.</p>

            <h3>Solar Panel Integration</h3>
            <p>Adding solar panels? We work with solar installers to ensure proper flashing and roof penetrations that won't leak.</p>

            <h3>Complex Valley Work</h3>
            <p>Valleys are critical leak points. We install metal valleys, proper underlayment, and ensure water flows correctly.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Why Specialty Work Matters</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>Specialty roofing work is where most leaks happen. Penetrations, transitions, and complex details are challenging to get right.</p>
            <p>Done wrong, they cause leaks and expensive interior damage. Done right, they last as long as your roof.</p>
            <p>We've handled thousands of specialty installations. We know the details that matter and the shortcuts that cause problems.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Our Approach</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Detailed planning:</strong> We think through every detail before starting work</li>
              <li><strong>Quality materials:</strong> Use the right products for long-term performance</li>
              <li><strong>Proper techniques:</strong> Follow manufacturer specifications and best practices</li>
              <li><strong>Waterproof integration:</strong> Every penetration is flashed and sealed correctly</li>
              <li><strong>Warranty protection:</strong> All work is covered by our workmanship warranty</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Need Specialty Roofing Work?</h2>
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p>Whether you're adding skylights, fixing chimney leaks, or improving ventilation—we can help.</p>
            <p>We'll assess your situation, explain your options, and provide a detailed estimate.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get Expert Help</h2>
          <p className="text-xl text-gray-600 mb-8">Call us to discuss your specialty roofing project.</p>
          <a href="tel:2087683987" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Call (208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/services/specialty/skylight-installation" className="text-blue-600 hover:text-blue-700 font-medium">→ Skylight Installation</Link>
            <Link href="/services/specialty/chimney-flashing" className="text-blue-600 hover:text-blue-700 font-medium">→ Chimney Flashing</Link>
            <Link href="/services/specialty/ventilation" className="text-blue-600 hover:text-blue-700 font-medium">→ Ventilation Systems</Link>
            <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">→ View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
