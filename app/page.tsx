import { AboutSection } from '@/src/components/home/about-section'
import { AppointmentSection } from '@/src/components/home/appointment-section'
import { ContactSection } from '@/src/components/home/contact-section'
import { FaqSection } from '@/src/components/home/faq-section'
import { HeroSection } from '@/src/components/home/hero-section'
import { ProfessionalsSection } from '@/src/components/home/professionals-section'
import { TestimonialsSection } from '@/src/components/home/testimonials-section'
import { TreatmentsSection } from '@/src/components/home/treatments-section'
import { TrustBar } from '@/src/components/home/trust-bar'
import { SectionTabs } from '@/src/components/section-tabs'
import { SiteFooter } from '@/src/components/site-footer'
import { SiteHeader } from '@/src/components/site-header'
import { StickyWhatsApp } from '@/src/components/sticky-whatsapp'

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido principal</a>
      <SiteHeader />
      <SectionTabs />
      <main id="contenido" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
        <TestimonialsSection />
        <FaqSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <StickyWhatsApp />
    </>
  )
}
