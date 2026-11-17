import Image from 'next/image'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/src/components/section-heading'
import { WhatsAppLink } from '@/src/components/whatsapp-link'
import { treatments, type Treatment } from '@/src/data/content'

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <WhatsAppLink
      className="treatment-card"
      message={`Hola, quisiera consultar por ${treatment.name}.`}
      aria-label={`Consultar por ${treatment.name} por WhatsApp`}
    >
      <div className={`treatment-image tone-${treatment.tone}`}>
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(min-width: 1200px) 374px, (min-width: 1024px) calc((100vw - 80px) / 3), (min-width: 768px) calc((100vw - 60px) / 2), (min-width: 640px) calc((100vw - 52px) / 2), 96px"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="treatment-body flex flex-1 flex-col p-5">
        <h3>{treatment.name}</h3>
        <p>{treatment.description}</p>
        <span className="treatment-cta text-link mt-auto pt-4">
          Consultar por este tratamiento <ArrowUpRight aria-hidden="true" />
        </span>
      </div>
      <ChevronRight className="treatment-chevron" aria-hidden="true" />
    </WhatsAppLink>
  )
}

export function TreatmentsSection() {
  return (
    <section className="section section-surface treatments-section">
      <div id="tratamientos" className="container section-anchor">
        <SectionHeading
          eyebrow="TRATAMIENTOS"
          title="Soluciones para cuidar tu salud bucal."
          copy="Conocé nuestros servicios odontológicos para niños, adolescentes y adultos."
        />
        <div className="mt-10 grid gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => <TreatmentCard key={treatment.name} treatment={treatment} />)}
        </div>
        <hr className="section-divider" />
      </div>
    </section>
  )
}
