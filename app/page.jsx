
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import InstantDemo from '../components/InstantDemo'
import LanguageToggle from '../components/LanguageToggle'
import { FloatingWhatsApp, LanguageWrapper } from '../components/Extras'

export default function Page() {
  return (
    <LanguageWrapper>
      <LanguageToggle />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <InstantDemo />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </LanguageWrapper>
  )
}
