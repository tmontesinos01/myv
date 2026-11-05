import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { MobileMenu } from '@/src/components/mobile-menu'
import { SiteNavigation } from '@/src/components/site-navigation'
import { WhatsAppLink } from '@/src/components/whatsapp-link'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container flex h-20 items-center justify-between gap-6">
        <a href="#inicio" className="block shrink-0" aria-label="MYV Centro Odontológico — Inicio">
          <Image src="/logo.png" alt="MYV Centro Odontológico" width={96} height={64} className="h-16 w-auto" priority />
        </a>
        <SiteNavigation
          className="hidden items-center gap-6 text-sm font-semibold text-[#556579] md:flex"
          aria-label="Navegación principal"
        />
        <div className="hidden shrink-0 md:block">
          <WhatsAppLink className="button-primary">
            WhatsApp <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </WhatsAppLink>
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}
