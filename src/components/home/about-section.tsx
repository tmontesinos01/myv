import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import aboutImage from '@/public/images/about-profesional-paciente.webp'
import { SectionHeading } from '@/src/components/section-heading'
import { WhatsAppLink } from '@/src/components/whatsapp-link'

export function AboutSection() {
  return (
    <section id="nosotros" className="section">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="about-image">
          <Image
            src={aboutImage}
            alt="Odontóloga realizando un control dental a una paciente en el consultorio."
            fill
            sizes="(min-width: 1200px) 540px, (min-width: 1024px) calc((100vw - 120px) / 2), (min-width: 768px) calc(100vw - 40px), calc(100vw - 32px)"
            className="object-cover object-[50%_35%]"
            placeholder="blur"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="SOBRE NOSOTROS"
            title="Tu sonrisa, nuestra historia."
            copy="Con más de 25 años de trayectoria, construimos una historia acompañando a quienes confían en nosotros para cuidar su salud bucal."
          />
          <WhatsAppLink className="text-link">
            Conocé más por WhatsApp <ArrowUpRight aria-hidden="true" />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  )
}
