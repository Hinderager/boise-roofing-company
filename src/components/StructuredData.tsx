const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

const faqData = [
  { question: 'How much does a new roof cost in Boise?', answer: 'Most residential roofs in Boise cost between $5,000-15,000 depending on size, materials, and pitch. We provide free estimates with transparent pricing.' },
  { question: 'How often should I have my roof inspected?', answer: 'We recommend annual roof inspections plus after any major storm. Regular inspections catch small issues before they become expensive problems.' },
  { question: 'How long does a roof installation take?', answer: 'Most residential roofs take 1-3 days depending on size and complexity. We\'ll provide a timeline with your estimate.' },
  { question: 'What types of roofing do you install?', answer: 'We install asphalt shingles, metal roofing, tile, and specialty materials. We\'ll help you choose what works best for your home and budget.' },
  { question: 'Do you handle insurance claims?', answer: 'Yes, we work with insurance companies regularly for storm damage claims and can help with documentation and paperwork.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding Treasure Valley communities.' },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": `Boise Roofing Company - ${city}`,
    "description": `Professional roofing services in ${city}, Idaho. Roof installation, replacement, repair, inspection & maintenance. Licensed and insured. Free estimates.`,
    "url": "https://boise-roofing-company.com",
    "telephone": "+1-208-768-3987",
    "email": "info@topshelfpros.com",
    "address": { "@type": "PostalAddress", "addressLocality": city, "addressRegion": "ID", "addressCountry": "US" },
    "geo": { "@type": "GeoCoordinates", "latitude": coords.lat, "longitude": coords.lng },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": ["Roof Installation", "Roof Replacement", "Roof Repair", "Roof Inspection", "Roof Maintenance", "Emergency Roof Repair", "Storm Damage Repair", "Shingle Roofing", "Metal Roofing"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "16:00" }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150" }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roofing Services",
    "provider": { "@type": "RoofingContractor", "name": "Boise Roofing Company" },
    "areaServed": { "@type": "State", "name": "Idaho" },
    "description": `Professional roofing installation, replacement, repair, and maintenance in ${city} and the Treasure Valley. Quality workmanship and customer service you can trust.`
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
