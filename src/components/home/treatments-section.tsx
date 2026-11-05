import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/src/components/section-heading'
import { WhatsAppLink } from '@/src/components/whatsapp-link'
import { treatments, type Treatment } from '@/src/data/content'

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="treatment-card">
      <div className={`treatment-image tone-${treatment.tone}`}>
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes="(min-width: 1200px) 374px, (min-width: 1024px) calc((100vw - 80px) / 3), (min-width: 768px) calc((100vw - 60px) / 2), (min-width: 640px) calc((100vw - 52px) / 2), calc(100vw - 32px)"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3>{treatment.name}</h3>
        <p>{treatment.description}</p>
        <WhatsAppLink className="text-link mt-auto pt-4" message={`Hola, quisiera consultar por ${treatment.name}.`}>
          Consultar por este tratamiento <ArrowUpRight aria-hidden="true" />
        </WhatsAppLink>
      </div>
    </article>
  )
}

export function TreatmentsSection() {
  return (
    <section id="tratamientos" className="section section-surface">
      <div className="container">
        <SectionHeading
          eyebrow="TRATAMIENTOS"
          title="Soluciones para cuidar tu salud bucal."
          copy="Conocé nuestros servicios odontológicos para niños, adolescentes y adultos."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => <TreatmentCard key={treatment.name} treatment={treatment} />)}
        </div>
        <div className="mt-10 rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-[var(--navy)]">Promociones para jubilados y pensionados</h3>
          <p className="mt-3 text-[var(--muted)]">
            Contamos con promociones y descuentos para jubilados y pensionados. Consultanos para conocer las opciones disponibles.
          </p>
          <WhatsAppLink
            className="text-link mt-5"
            message="Hola, quisiera consultar por las promociones y descuentos para jubilados y pensionados."
          >
            Consultar promociones <ArrowUpRight aria-hidden="true" />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  )
}
