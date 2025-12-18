import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Tips & Maintenance Guide | Top Shelf Roofing',
  description: 'Helpful roofing tips and maintenance advice for Idaho homeowners. Keep your roof in great shape year-round.',
  alternates: { canonical: 'https://boise-roofing-company.com/resources/roofing-tips' },
}

export default function RoofingTipsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Roofing Tips</h1>
          <p className="text-xl text-gray-200">Simple tips to keep your roof in great shape.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Your roof takes a beating from sun, wind, rain, snow, and hail. A little maintenance goes a long way.</p>
            <h2>Inspect Twice a Year</h2>
            <p>Check your roof in spring and fall. Look for missing shingles, granules in gutters, sagging areas, and damaged flashing.</p>
            <h2>Keep Gutters Clean</h2>
            <p>Clogged gutters cause water to back up under shingles. Clean them twice a year minimum.</p>
            <h2>Trim Overhanging Branches</h2>
            <p>Branches scraping your roof wear down shingles. Keep them at least 6 feet away.</p>
            <h2>Watch for Ice Dams</h2>
            <p>Make sure your attic is properly insulated and ventilated. Clear snow from the lower edge after heavy storms.</p>
            <h2>Check Your Attic</h2>
            <p>Look for water stains, wet spots, daylight, or mold. Catch leaks before they reach your living space.</p>
            <h2>Fix Problems Fast</h2>
            <p>Small problems become expensive ones. A few hundred now beats thousands later.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
