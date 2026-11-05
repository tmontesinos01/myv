import Image from 'next/image'
import { getHttpUrl } from '@/lib/contact'
import { siteConfig } from '@/src/config/site.config'
import { SiteNavigation } from '@/src/components/site-navigation'

export function SiteFooter() {
  const privacyUrl = getHttpUrl(siteConfig.privacyPolicyUrl)

  return (
    <footer className="site-footer">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a href="#inicio" className="inline-block" aria-label="MYV Centro Odontológico — Inicio">
            <Image src="/logo.png" alt="MYV Centro Odontológico" width={192} height={128} className="h-32 w-auto" />
          </a>
          <p className="mt-4 max-w-xs text-sm">Cuidamos tu sonrisa con una atención cercana y clara.</p>
        </div>
        <div>
          <p className="footer-label">Navegación</p>
          <SiteNavigation className="flex flex-col gap-3 text-sm" aria-label="Navegación del pie" />
        </div>
        <div>
          <p className="footer-label">Contacto</p>
          <p className="text-sm">{siteConfig.whatsapp}</p>
          <p className="text-sm">{siteConfig.email}</p>
          {privacyUrl && <a className="text-sm underline" href={privacyUrl}>Política de privacidad</a>}
        </div>
      </div>
      <div className="container border-t border-[#DCE7F2] py-5 text-xs text-[#556579]">
        © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
      </div>
    </footer>
  )
}
