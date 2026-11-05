import { ArrowUpRight } from 'lucide-react'
import { ImagePlaceholder } from '@/src/components/image-placeholder'
import { SectionHeading } from '@/src/components/section-heading'
import { WhatsAppLink } from '@/src/components/whatsapp-link'
import { treatments, type Treatment } from '@/src/data/content'

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="treatment-card">
      <ImagePlaceholder label="Imagen - pendiente" className={`treatment-image tone-${treatment.tone}`} />
      <div className="flex flex-1 flex-col p-5">
        <h3>{treatment.name}</h3>
        <p>{treatment.description}</p>
        <WhatsAppLink className="text-link mt-auto pt-5" message={`Hola, quisiera consultar por ${treatment.name}.`}>
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
          copy="Conocé algunas de las áreas que podemos completar con información detallada y actualizada."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => <TreatmentCard key={treatment.name} treatment={treatment} />)}
        </div>
      </div>
    </section>
  )
}
