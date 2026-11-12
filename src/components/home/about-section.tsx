import Image from 'next/image'
import { Check, Heart, ShieldCheck, type LucideIcon } from 'lucide-react'
import aboutImage from '@/public/images/about-profesional-paciente.webp'
import { SectionHeading } from '@/src/components/section-heading'

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5c-2-1.2-4.4-2-6.2-1C3.7 5.1 3 7 3 9c0 3 1 5 2 8 .8 2.4 1.5 4 3.2 4 1.5 0 1.2-5 3.8-5s2.3 5 3.8 5c1.7 0 2.4-1.6 3.2-4 1-3 2-5 2-8 0-2-.7-3.9-2.8-5-1.8-1-4.2-.2-6.2 1Z" />
    </svg>
  )
}

const benefits: { text: string; icon: LucideIcon | typeof ToothIcon }[] = [
  { text: 'Mejores materiales', icon: Check },
  { text: 'Descuentos a jubilados y pensionados', icon: ShieldCheck },
  { text: '30 años de trayectoria', icon: Heart },
  { text: 'Aceptamos todos los medios de pago', icon: ToothIcon },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="section about-section">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="SOBRE NOSOTROS" title="Tu sonrisa, nuestra historia.">
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
          </SectionHeading>
        </div>
        <div>
          <div className="section-heading">
            <p>En Odontología MYV sabemos que una buena atención empieza por sentirte en confianza. Por eso, contamos con profesionales comprometidos con tu cuidado y un espacio preparado para recibir a personas de todas las edades.</p>
            <p>También contamos con habilitación del Ministerio de Salud y laboratorio dental propio. Así respaldamos nuestro compromiso de brindarte una atención responsable y profesional.</p>
          </div>
          <div className="about-benefits">
            <h3 className="about-benefits-title">BENEFICIOS</h3>
            <ul>
              {benefits.map(({ text, icon: Icon }) => (
                <li key={text}>
                  <span className="about-benefit-icon"><Icon aria-hidden="true" /></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
