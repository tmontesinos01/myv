import heroImage from '@/public/images/hero-section1.jpg'
import aboutImage from '@/public/images/about-profesional-paciente.webp'
import implantesImage from '@/public/images/treatments/implantes.webp'
import ortodonciaImage from '@/public/images/treatments/ortodoncia.webp'
import { HeroCarousel } from './hero-carousel'

const heroSlides = [
  { src: heroImage, alt: 'Primer plano de una revisión dental con espejo e instrumental odontológico.' },
  { src: aboutImage, alt: 'Profesional atendiendo a un paciente en el consultorio.' },
  { src: implantesImage, alt: 'Tratamiento de implantes dentales.' },
  { src: ortodonciaImage, alt: 'Tratamiento de ortodoncia.' },
] as const

export function HeroSection() {
  return (
    <section className="hero-section">
      <HeroCarousel slides={heroSlides} />
      <svg className="hero-divider" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 L72 0 C55 2 46 18 47 45 C48 75 35 96 0 100 Z" />
      </svg>
      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
        <div id="inicio" className="section-anchor max-w-2xl">
          <p className="eyebrow">MYV · ODONTOLOGÍA EN MERLO</p>
          <h1><span className="hero-highlight">Más de 25 años de trayectoria</span> en odontología.</h1>
          <p className="hero-copy">
            Conocé nuestros tratamientos, desde limpieza dental y restauraciones hasta implantes y ortodoncia. Escribinos para consultar por un turno.
          </p>
          <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#tratamientos">Ver tratamientos</a>
          </div>
        </div>
      </div>
    </section>
  )
}
