import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { FloatingWhatsApp, LanguageWrapper } from '../components/Extras'
import SEOContent from '../components/SEOContent'
import LocationsSection from '../components/LocationsSection'

export default function Page() {
  // STRUCTURED DATA FOR GOOGLE (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oujda Digital Studio",
    "description": "Création de sites web professionnels, e-commerce et marketing digital à Oujda et dans la région Orientale du Maroc",
    "url": "https://oujdadigital.vercel.app",
    "telephone": "+212710925748",
    "email": "smail.al.harrak@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oujda",
      "addressRegion": "Oriental",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.6814",
      "longitude": "-1.9086"
    },
    "areaServed": [
      { "@type": "City", "name": "Oujda" },
      { "@type": "City", "name": "Berkane" },
      { "@type": "City", "name": "Nador" },
      { "@type": "City", "name": "Jerada" },
      { "@type": "City", "name": "Taourirt" }
    ],
    "priceRange": "2999-8999 DH",
    "openingHours": "Mo-Sa 09:00-20:00",
    "sameAs": [
      "https://wa.me/212710925748"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Site Web Vitrine",
            "description": "Site vitrine professionnel 5 pages personnalisées"
          },
          "price": "2999",
          "priceCurrency": "MAD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Site E-commerce Premium",
            "description": "Boutique en ligne complète avec paiement sécurisé"
          },
          "price": "5499",
          "priceCurrency": "MAD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Elite",
            "description": "Solution e-commerce complète avec toutes les fonctionnalités"
          },
          "price": "8999",
          "priceCurrency": "MAD"
        }
      ]
    }
  };

  return (
    <LanguageWrapper>
      {/* STRUCTURED DATA - CRITICAL FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      <FloatingWhatsApp />
      
      <main>
        <Hero />
        
        <section id="services">
          <Services />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
        
        {/* LOCATIONS SECTION - SEO BOOST */}
        <LocationsSection />
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        {/* SEO CONTENT SECTION - CRITICAL FOR RANKING */}
        <SEOContent />
      </main>
      
      {/* FOOTER WITH KEYWORDS */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Oujda Digital Studio</h3>
          <p className="text-gray-400 mb-4">Création Site Web Professionnel Oujda</p>
          <p className="text-sm text-gray-500 mb-6">
            Développement Web | E-commerce | Marketing Digital | SEO | Oujda & Oriental
          </p>
          <p className="text-xs text-gray-600">
            © 2024 Oujda Digital Studio. Service local Oujda, Berkane, Nador.
          </p>
          <p className="text-xs text-gray-700 mt-4">
            Création site web Oujda | Agence web Oriental | Site internet professionnel Maroc | 
            Développeur web freelance | E-commerce Berkane | Marketing digital Nador
          </p>
        </div>
      </footer>
    </LanguageWrapper>
  )
}
