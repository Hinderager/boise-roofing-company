import { Metadata } from 'next'
import { Phone, Calendar, Shield, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Maintenance Plans | Top Shelf Roofing',
  description: 'Keep your roof in top shape with regular maintenance. Prevent problems before they start and extend your roof life.',
  alternates: { canonical: 'https://boise-roofing-company.com/resources/maintenance-plans' },
}

export default function MaintenancePlansPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Roof Maintenance Plans</h1>
          <p className="text-xl text-gray-200">Catch problems early. Extend your roof life.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Most people don't think about their roof until something goes wrong. By then, a small problem has turned into a big, expensive one.
              </p>
              <p>
                That's where regular maintenance comes in. A simple inspection and minor fixes can add years to your roof life and save you thousands in repairs.
              </p>
            </div>

            <div className="mb-12 bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Calendar className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">What's Included in a Maintenance Plan?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>Our maintenance plans include:</p>
                <ul>
                  <li><strong>Annual or bi-annual roof inspections</strong> - We check shingles, flashing, vents, and gutters</li>
                  <li><strong>Minor repairs</strong> - We fix small issues like loose shingles or cracked flashing before they become leaks</li>
                  <li><strong>Gutter cleaning</strong> - Clean gutters prevent water backup and ice dams</li>
                  <li><strong>Debris removal</strong> - We clear leaves, branches, and other debris that can trap moisture</li>
                  <li><strong>Detailed reports</strong> - Photos and notes on your roof's condition and any concerns</li>
                  <li><strong>Priority service</strong> - Members get priority scheduling for repairs and emergencies</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Why Regular Maintenance Matters</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>Think of roof maintenance like changing the oil in your car. Skip it, and you'll pay for it later.</p>
                <p>Here's what regular maintenance does:</p>
                <ul>
                  <li><strong>Extends your roof life.</strong> Catching small problems early can add 5-10 years to your roof.</li>
                  <li><strong>Prevents expensive repairs.</strong> A $200 fix today beats a $5,000 repair next year.</li>
                  <li><strong>Protects your home.</strong> Water damage from leaks can ruin insulation, drywall, and framing.</li>
                  <li><strong>Maintains your warranty.</strong> Many shingle warranties require regular maintenance.</li>
                  <li><strong>Gives you peace of mind.</strong> You'll know your roof is in good shape and won't surprise you with a crisis.</li>
                </ul>
              </div>
            </div>

            <div className="mb-12 bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">How Much Does It Cost?</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  Maintenance plans vary based on your roof size and the level of service you need. Most homeowners spend $200-$500 per year.
                </p>
                <p>
                  That might sound like a lot, but compare it to the cost of replacing a rotted roof deck ($3,000+), fixing water damage inside your home ($5,000+), or replacing your entire roof early because you didn't maintain it ($10,000+).
                </p>
                <p>
                  Maintenance isn't an expense—it's an investment that pays for itself.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Who Should Get a Maintenance Plan?</h2>
              <div className="prose prose-lg max-w-none">
                <p>Maintenance plans make sense if:</p>
                <ul>
                  <li>Your roof is 10+ years old and you want to extend its life</li>
                  <li>You have a lot of trees near your home (more debris, more issues)</li>
                  <li>You're not comfortable getting on a ladder to check your roof yourself</li>
                  <li>You want peace of mind that your roof is being looked after</li>
                  <li>You'd rather prevent problems than deal with emergencies</li>
                </ul>
                <p>
                  Even if your roof is new, regular inspections help catch installation issues or storm damage before they void your warranty.
                </p>
              </div>
            </div>

            <div className="mb-12 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold mb-4">What We Don't Do</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  We're not going to pressure you into repairs you don't need. Our job is to keep your roof in good shape, not to upsell you.
                </p>
                <p>
                  If your roof is fine, we'll tell you. If something needs attention, we'll explain what, why, and how much it'll cost. No surprises.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Interested in a Maintenance Plan?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's talk about what makes sense for your roof.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
            <Phone className="w-5 h-5" />Call (208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
