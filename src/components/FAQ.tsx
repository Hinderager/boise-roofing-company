'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const faqs = [
  { question: 'How much does a new roof cost?', answer: 'Most residential roofs in Boise run between $5,000-15,000 depending on size, materials, and pitch. We provide free estimates with transparent pricing so you know exactly what to expect before we start.' },
  { question: 'How long does a roof installation take?', answer: 'Most residential roofs take 1-3 days depending on size and complexity. Weather can affect the timeline, but we\'ll keep you updated throughout the process.' },
  { question: 'How often should I have my roof inspected?', answer: 'We recommend an annual inspection, plus after any major storm. Regular inspections catch small issues before they become expensive problems and help your roof last longer.' },
  { question: 'What types of roofing do you install?', answer: 'We install asphalt shingles, metal roofing, tile, and specialty materials. Each has different benefits and lifespans. We\'ll help you pick what makes sense for your home and budget.' },
  { question: 'Do you handle insurance claims?', answer: 'Yes, we work with insurance companies regularly for storm damage claims. We can help document damage, meet with adjusters, and handle the paperwork to make the process easier.' },
  { question: 'How do I know if I need repair or replacement?', answer: 'If your roof is under 15 years old with isolated damage, repair usually makes sense. Over 20 years with widespread issues? Replacement is often more cost-effective. We\'ll give you honest advice on both options.' },
  { question: 'Do you offer warranties?', answer: 'Yes, we provide workmanship warranties on all installations, and most roofing materials come with manufacturer warranties ranging from 20-50 years depending on the product.' },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50">
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">{faq.answer}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2087683987"><span className="md:hidden">Call Now</span><span className="hidden md:inline">(208) 768-3987</span></a>
          </Button>
        </div>
      </div>
    </section>
  )
}
