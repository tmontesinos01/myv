import { ArrowUpRight } from 'lucide-react'
import { ImagePlaceholder } from '@/src/components/image-placeholder'
import { SectionHeading } from '@/src/components/section-heading'
import { WhatsAppLink } from '@/src/components/whatsapp-link'

export function AboutSection() {
  return (
    <section id="nosotros" className="section">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <ImagePlaceholder label="Foto del centro - pendiente" className="about-image" />
        <div>
          <SectionHeading
            eyebrow="SOBRE NOSOTROS"
            title="Un espacio pensado para que te sientas bien."
            copy="Somos un centro odontológico en construcción, con una mirada cercana y clara sobre cada consulta. Esta sección queda lista para sumar la historia, el equipo y la propuesta real del centro."
          />
          <WhatsAppLink className="text-link">
            Conocé más por WhatsApp <ArrowUpRight aria-hidden="true" />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  )
}
