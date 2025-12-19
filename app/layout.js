import './globals.css'

export const metadata = {
  // PRIMARY SEO - CRITICAL FOR GOOGLE
  title: 'Création Site Web Oujda | Développeur Web Oriental | Oujda Digital Studio',
  description: 'Création site web professionnel à Oujda. Site vitrine, e-commerce, marketing digital. Livraison 5-7 jours. Prix: 2,999 DH. Service local Oriental. WhatsApp: +212710925748',
  
  // KEYWORDS
  keywords: 'création site web oujda, développeur web oujda, agence web oriental, site internet oujda, e-commerce maroc, site vitrine oujda, développement web berkane, référencement oujda, marketing digital oriental, freelance web oujda, site restaurant oujda, boutique en ligne maroc',
  
  // AUTHOR & CONTACT
  authors: [{ name: 'Oujda Digital Studio' }],
  creator: 'Oujda Digital Studio',
  publisher: 'Oujda Digital Studio',
  
  // ROBOTS
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
  
  // OPEN GRAPH (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://oujdadigital.vercel.app',
    siteName: 'Oujda Digital Studio',
    title: 'Oujda Digital Studio - Création Site Web Professionnel Oujda',
    description: 'Site web professionnel en 5-7 jours. À partir de 2,999 DH. Service local Oujda & Oriental.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oujda Digital Studio',
      },
    ],
  },
  
  // TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'Création Site Web Oujda - Oujda Digital Studio',
    description: 'Site professionnel en 5-7 jours. 2,999 DH. Oujda & Oriental.',
    images: ['/og-image.jpg'],
  },
  
  // VERIFICATION (Add these when you get them)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },
  
  // CANONICAL URL
  alternates: {
    canonical: 'https://oujdadigital.vercel.app',
  },
  
  // ADDITIONAL META
  other: {
    'geo.region': 'MA-60',
    'geo.placename': 'Oujda',
    'geo.position': '34.6814;-1.9086',
    'ICBM': '34.6814, -1.9086',
    'contact': 'smail.al.harrak@gmail.com',
    'telephone': '+212710925748',
    'coverage': 'Oujda, Berkane, Nador, Jerada, Taourirt, Maroc Oriental',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Additional head elements if needed */}
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
