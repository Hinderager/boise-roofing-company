import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Services Meridian Idaho | Roof Repair & Installation | Boise Roofing Co',
  description: 'Professional roofing services in Meridian, Idaho. Roof repair, replacement, installation, inspection & maintenance. Licensed & insured. Free estimates. Call (208) 768-3987.',
  keywords: ['roofing Meridian', 'roof repair Meridian Idaho', 'roof replacement Meridian', 'roof installation Meridian', 'roofing contractor Meridian'],
  alternates: {
    canonical: 'https://boise-roofing-company.com/cities-served/meridian',
  },
}

const neighborhoods = ['Downtown Meridian', 'The Village', 'Paramount', 'Lochsa Falls', 'Tuscany', 'Silverstone', 'Spurwing', 'Heritage Grove', 'Bridgetower', 'Reflection Ridge', 'Ten Mile', 'South Meridian']

const services = [
  { name: 'Roof Repair', href: '/services/roof-repair', description: 'Fast, reliable roof repairs' },
  { name: 'Roof Replacement', href: '/services/roof-replacement', description: 'Complete roof replacement' },
  { name: 'Roof Installation', href: '/services/roof-installation', description: 'New roof installation' },
  { name: 'Roof Inspection', href: '/services/roof-inspection', description: 'Thorough roof inspection' },
  { name: 'Shingle Roofing', href: '/services/shingle-roofing', description: 'Asphalt shingle roofing' },
  { name: 'Metal Roofing', href: '/services/metal-roofing', description: 'Metal roof installation' },
]

export default function MeridianPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/meridian-roofing.webp"
          alt="Roofing Services in Meridian, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Roofing Services in Meridian</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional roofing installation, repair, and maintenance services for Meridian homes and businesses. Licensed, insured, and committed to quality.</p>
          <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 768-3987
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Meridian Roofing Services</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Meridian is the second-largest and fastest-growing city in Idaho. With hot, dry summers and cold winters typical of the high desert climate, your roof protects your home from extreme weather year-round. When you need roofing service in Meridian, Boise Roofing Co is here to help.</p>
              <p>We've served Meridian homeowners for years, handling everything from emergency storm damage repairs to complete roof replacements. Our crews know Meridian homes and the unique roofing challenges they face in Idaho's high desert climate.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Services in Meridian</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-dark-blue group-hover:text-[#0b7fb6]">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Meridian Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-dark-blue flex-shrink-0" />
                  <span className="text-sm text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Meridian Homeowners Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Service:</strong> We're based in the Treasure Valley and know Meridian well.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Response:</strong> Same-day service available for Meridian residents.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Emergency Service:</strong> Storm damage doesn't wait—neither do we.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fair Pricing:</strong> Upfront quotes with no hidden fees.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Roofing Service in Meridian?</h3>
              <p className="text-gray-300 mb-6">Call us for a free estimate. We'll keep your home protected.</p>
              <a href="tel:2087683987" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 768-3987
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Also Serving Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Boise</Link>
            <Link href="/cities-served/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
            <Link href="/cities-served/garden-city" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Garden City</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
