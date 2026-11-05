import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { getHttpUrl } from '@/lib/contact'
import { MapReveal } from '@/src/components/map-reveal'
import { SectionHeading } from '@/src/components/section-heading'
import { siteConfig } from '@/src/config/site.config'

export function ContactSection() {
  const details = [
    { icon: MapPin, label: 'Dirección', value: `${siteConfig.address}, ${siteConfig.city}` },
    { icon: Phone, label: 'Teléfono', value: siteConfig.phone },
    { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.whatsapp },
    { icon: Mail, label: 'Email', value: siteConfig.email },
    { icon: CalendarDays, label: 'Horarios', value: siteConfig.hours },
  ]
  const socialLinks = [
    { mark: 'IG', label: 'Instagram', href: getHttpUrl(siteConfig.social.instagram) },
    { mark: 'f', label: 'Facebook', href: getHttpUrl(siteConfig.social.facebook) },
  ].filter((link) => link.href !== null)

  return (
    <section id="contacto" className="section">
      <div className="container grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="CONTACTO Y UBICACIÓN" title="Estamos para ayudarte." />
          <div className="contact-list">
            {details.map(({ icon: Icon, label, value }) => (
              <p key={label}><Icon aria-hidden="true" /><span><span className="sr-only">{label}: </span>{value}</span></p>
            ))}
          </div>
          {socialLinks.length > 0 && (
            <div className="mt-7 flex gap-3">
              {socialLinks.map(({ mark, label, href }) => (
                <a key={label} className="social-button" href={href ?? undefined} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <span aria-hidden="true">{mark}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <MapReveal embedUrl={siteConfig.mapEmbedUrl} />
      </div>
    </section>
  )
}
