import './globals.css'

export const metadata = {
  title: 'Création Site Web Oujda | Développeur Web Oriental | Oujda Digital Studio',
  description: 'Création site web professionnel à Oujda. Site vitrine, e-commerce, marketing digital. Livraison 5-7 jours. Prix: 2,999 DH. Service local Oriental. WhatsApp: +212710925748',
  
  // FAVICON CONFIGURATION - CORRECT PATHS
  icons: {
    icon: [
      { url: '/logo/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  keywords: 'création site web oujda, développeur web oujda, agence web oriental, site internet oujda, e-commerce maroc...',
  
  authors: [{ name: 'Oujda Digital Studio' }],
  creator: 'Oujda Digital Studio',
  
  robots: {
    index: true,
    follow: true,
  },
  
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://oujdadigital.vercel.app',
    siteName: 'Oujda Digital Studio',
    title: 'Oujda Digital Studio - Création Site Web Professionnel Oujda',
    description: 'Site web professionnel en 5-7 jours. À partir de 2,999 DH.',
  },
  
  alternates: {
    canonical: 'https://oujdadigital.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Explicit favicon links with CORRECT paths */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/logo.png" />
        <link rel="shortcut icon" href="/logo/favicon.png" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
