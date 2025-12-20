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

import './globals.css'

export const metadata = {
  title: 'Création Site Web Oujda | Développeur Web Oriental | Oujda Digital Studio',
  description: 'Création site web professionnel à Oujda...',
  // ... your existing metadata
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* PRELOAD CRITICAL FONTS */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        />
        
        {/* Favicon links */}
        <link rel="icon" type="image/png" href="/logo/favicon.png" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
        
        {/* DNS PREFETCH for faster loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
