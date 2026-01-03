import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Roofing Blog | Roof Repair & Maintenance Tips | Boise Roofing',
  description: 'Expert roofing tips, guides, and insights for Boise homeowners. Learn how to protect and maintain your roof from Top Shelf Roofing.',
  alternates: {
    canonical: 'https://boise-roofing-company.com/blogs',
  },
}

const blogPosts = [
  {
    slug: 'roofing-costs-boise',
    title: 'How Much Does a New Roof Cost in Boise?',
    excerpt: 'Breaking down roofing costs in Boise: materials, labor, and what affects the price.',
    image: '/hero-roofing.jpg',
  },
  {
    slug: 'signs-roof-needs-repair',
    title: '7 Signs Your Roof Needs Repair in Boise',
    excerpt: 'Your roof sends warning signs before it fails. Here\'s what to watch for.',
    image: '/hero-roofing.jpg',
  },
  {
    slug: 'roof-repair-vs-replacement',
    title: 'Roof Repair vs. Replacement: Which Do You Need?',
    excerpt: 'Should you repair your roof or replace it? Here\'s how to decide what makes sense.',
    image: '/hero-roofing.jpg',
  },
  {
    slug: 'choosing-roofing-contractor-boise',
    title: 'How to Choose a Roofing Contractor in Boise',
    excerpt: 'Not all roofers are created equal. Here\'s what to look for and what to avoid.',
    image: '/hero-roofing.jpg',
  },
  {
    slug: 'seasonal-roof-maintenance-boise',
    title: 'Seasonal Roof Maintenance for Boise Homes',
    excerpt: 'Idaho weather is hard on roofs. Here\'s what to do each season to keep yours in good shape.',
    image: '/hero-roofing.jpg',
  },
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tips, guides, and insights about roofing in the Treasure Valley. Real advice from real roofing professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48 bg-dark-blue">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-6xl font-bold">ROOF</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your roofing project.
          </p>
          <a
            href="tel:2087683987"
            className="inline-block bg-[#FFC845] hover:bg-yellow-400 text-dark-blue font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 768-3987
          </a>
        </div>
      </section>
    </main>
  )
}
