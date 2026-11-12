import { FaqAccordion } from '@/src/components/faq-accordion'
import { SectionHeading } from '@/src/components/section-heading'
import { faqs } from '@/src/data/content'

export function FaqSection() {
  return (
    <section className="section">
      <div id="preguntas" className="container section-anchor grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <SectionHeading
          eyebrow="PREGUNTAS FRECUENTES"
          title="Antes de venir, resolvé tus dudas."
          copy="Si no encontrás lo que buscás, escribinos y te orientamos."
        />
        <FaqAccordion items={faqs} />
      </div>
    </section>
  )
}
