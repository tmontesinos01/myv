import { ArrowUpRight } from 'lucide-react'
import { ImagePlaceholder } from '@/src/components/image-placeholder'
import { WhatsAppLink } from '@/src/components/whatsapp-link'

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="eyebrow">CUIDAMOS TU SONRISA</p>
          <h1>Tu sonrisa, acompañada con calidez y confianza.</h1>
          <p className="hero-copy">
            Una primera orientación para que conozcas el centro, nuestros tratamientos y el camino para pedir tu próxima consulta.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink className="button-primary">
              Pedí turno por WhatsApp <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
            </WhatsAppLink>
            <a className="button-secondary" href="#tratamientos">Ver tratamientos</a>
          </div>
        </div>
        <ImagePlaceholder label="Foto principal - pendiente" className="hero-image" />
      </div>
    </section>
  )
}
