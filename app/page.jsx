import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import InstantDemo from '../components/InstantDemo'
import { FloatingWhatsApp, LanguageWrapper } from '../components/Extras'

export default function Page() {
  return (
    <LanguageWrapper>
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
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </LanguageWrapper>
  )
}
