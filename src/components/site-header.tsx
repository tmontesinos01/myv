import Image from 'next/image'
import { MobileMenu } from '@/src/components/mobile-menu'
import { SiteNavigation } from '@/src/components/site-navigation'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container flex min-h-16 items-center justify-between gap-6 lg:min-h-16">
        <a href="#inicio" className="block shrink-0" aria-label="MYV Centro Odontológico — Inicio">
          <Image src="/logo-diente.png" alt="MYV Centro Odontológico" width={68} height={68} className="h-14 w-auto lg:h-16" priority />
        </a>
        <SiteNavigation
          className="hidden items-center gap-5 whitespace-nowrap text-sm font-semibold text-[#556579] lg:flex xl:gap-6"
          aria-label="Navegación principal"
        />
        <MobileMenu />
      </div>
    </header>
  )
}
