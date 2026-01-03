import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-roofing-company.com'),
  title: {
    default: 'Boise Roofing Company | Licensed & Insured | Top Shelf',
    template: '%s | Boise Roofing',
  },
  description: 'Professional roofing services in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. Roof installation, replacement, repair, inspection & maintenance. Licensed & insured. Free estimates. Call (208) 768-3987.',
  keywords: [
    'roofing Boise',
    'roof repair Boise Idaho',
    'roof installation Meridian',
    'roof replacement Nampa',
    'roofing contractor near me',
    'roof inspection Caldwell',
    'roofing service Eagle Idaho',
    'new roof installation Treasure Valley',
    'emergency roof repair',
    'roofing company Boise',
    'roof maintenance Idaho',
    'shingle roof repair',
  ],
  authors: [{ name: 'Boise Roofing Company' }],
  openGraph: {
    title: 'Roofing Services | Boise, Meridian, Nampa Idaho',
    description: 'Professional roofing installation, repair, and maintenance in the Treasure Valley. Licensed, insured, and committed to quality workmanship.',
    url: 'https://boise-roofing-company.com',
    siteName: 'Boise Roofing Co',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://boise-roofing-company.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <BreadcrumbSchema siteName="Top Shelf Roofing" siteUrl="https://boise-roofing-company.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
          `}
        </Script>
        <QuoteFormProvider>
          <Header />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
