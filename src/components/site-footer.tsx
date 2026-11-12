import Image from 'next/image'
import { ArrowUp, ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { getHttpUrl } from '@/lib/contact'
import { siteConfig } from '@/src/config/site.config'
import { SiteNavigation } from '@/src/components/site-navigation'
import { WhatsAppLink } from '@/src/components/whatsapp-link'

export function SiteFooter() {
  const privacyUrl = getHttpUrl(siteConfig.privacyPolicyUrl)
  const socialLinks = [
    { mark: 'IG', label: 'Instagram', href: getHttpUrl(siteConfig.social.instagram) },
    { mark: 'f', label: 'Facebook', href: getHttpUrl(siteConfig.social.facebook) },
  ].filter((link) => link.href !== null)

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <span className="footer-kicker">ODONTOLOGÍA EN MERLO</span>
          <a href="#inicio" className="footer-logo" aria-label="MYV Centro Odontológico — Inicio">
            <Image src="/logo.png" alt="MYV Centro Odontológico" width={192} height={128} className="h-32 w-auto" />
          </a>
          <p className="footer-tagline">Cuidamos tu sonrisa con una atención cercana y clara.</p>
          <WhatsAppLink className="footer-cta">
            Hablemos por WhatsApp <ArrowUpRight aria-hidden="true" />
          </WhatsAppLink>
        </div>

        <div className="footer-details">
          <div>
            <p className="footer-label">Explorá</p>
            <SiteNavigation className="footer-nav" aria-label="Navegación del pie" />
          </div>
          <div>
            <p className="footer-label">Encontranos</p>
            <div className="footer-contact">
              <a href="#contacto"><MapPin aria-hidden="true" /><span>{siteConfig.address}</span></a>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}><Phone aria-hidden="true" /><span>{siteConfig.phone}</span></a>
              <a href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" /><span>{siteConfig.email}</span></a>
              <p><Clock3 aria-hidden="true" /><span>{siteConfig.hours}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</span>
        <div className="footer-bottom-links">
          {socialLinks.map(({ mark, label, href }) => (
            <a key={label} className="footer-social" href={href ?? undefined} aria-label={label} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">{mark}</span>
            </a>
          ))}
          {privacyUrl && <a href={privacyUrl}>Política de privacidad</a>}
          <a href="#inicio" className="footer-top">Volver arriba <ArrowUp aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}
