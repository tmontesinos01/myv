import { ImagePlaceholder } from '@/src/components/image-placeholder'
import { SectionHeading } from '@/src/components/section-heading'
import { professionals, type Professional } from '@/src/data/content'

function ProfessionalCard({ person }: { person: Professional }) {
  return (
    <article className="professional-card">
      <ImagePlaceholder label="Foto profesional - pendiente" className="professional-image" />
      <div>
        <h3>{person.name}</h3>
        <p>{person.specialty}</p>
        {person.license && <small>{person.license}</small>}
      </div>
    </article>
  )
}

export function ProfessionalsSection() {
  return (
    <section id="profesionales" className="section section-surface">
      <div className="container">
        <SectionHeading eyebrow="PROFESIONALES" title="El equipo que va a acompañarte." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {professionals.map((person) => <ProfessionalCard key={person.id} person={person} />)}
        </div>
      </div>
    </section>
  )
}
