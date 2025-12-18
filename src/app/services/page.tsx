import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Services in Boise | Top Shelf Roofing',
  description: 'Complete roofing services in Boise and the Treasure Valley. Roof repair, replacement, inspections, and more. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-roofing-company.com/services' },
}

const categories = [
  { name: 'Roof Repair', slug: 'roof-repair', description: 'Fast, reliable roof repairs. We fix leaks, damaged shingles, flashing issues, and more.' },
  { name: 'Roof Replacement', slug: 'roof-replacement', description: 'Complete roof replacement with quality materials and skilled installation. Get the roof you deserve.' },
  { name: 'Roof Inspection', slug: 'roof-inspection', description: 'Professional roof inspections that catch problems early before they become expensive.' },
  { name: 'Emergency Roofing', slug: 'emergency-roofing', description: 'Fast response to storm damage, leaks, and urgent roofing problems. We will get there quickly.' },
  { name: 'Shingle Roofing', slug: 'shingle-roofing', description: 'Asphalt shingle installation and repair. The most popular choice for Idaho homes.' },
  { name: 'Metal Roofing', slug: 'metal-roofing', description: 'Long-lasting metal roof installation. The last roof you will ever need to buy.' },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Roofing Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete roofing services for homes and businesses across the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/services/${cat.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{cat.name}</h2>
                <p className="text-gray-600 mb-4">{cat.description}</p>
                <span className="inline-flex items-center text-dark-blue font-semibold">View Service <ArrowRight className="w-4 h-4 ml-2" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Roofing Service?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
