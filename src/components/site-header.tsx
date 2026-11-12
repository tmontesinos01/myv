import Image from 'next/image'
import { MobileMenu } from '@/src/components/mobile-menu'
import { SiteNavigation } from '@/src/components/site-navigation'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container flex min-h-16 items-center justify-between gap-6 lg:min-h-16">
        <a href="#inicio" className="site-logo block shrink-0" aria-label="MYV Centro Odontológico — Inicio">
          <Image src="/logo-diente.png" alt="MYV Centro Odontológico" width={68} height={68} className="h-14 w-auto lg:h-16" priority />
        </a>
        <a href="#inicio" className="site-wordmark" aria-hidden="true" tabIndex={-1}>
          <span className="site-wordmark-name">MYV</span>
          <span className="site-wordmark-sub">CENTRO ODONTOLÓGICO</span>
          <span className="site-wordmark-tagline">TU SONRISA, NUESTRA PRIORIDAD</span>
        </a>
        <SiteNavigation
          className="site-header-nav hidden items-center whitespace-nowrap lg:flex"
          aria-label="Navegación principal"
        />
        <MobileMenu />
      </div>
    </header>
  )
}
