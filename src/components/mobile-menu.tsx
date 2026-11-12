'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@base-ui/react/dialog'
import { CalendarDays, ChevronRight, MapPin, Menu, MessageCircle, X } from 'lucide-react'
import { getHttpUrl } from '@/lib/contact'
import { siteConfig } from '@/src/config/site.config'
import { navigationLinks, sectionTabs } from '@/src/data/navigation'
import { WhatsAppLink } from '@/src/components/whatsapp-link'

const socialLinks = [
  { mark: 'IG', label: 'Instagram', href: getHttpUrl(siteConfig.social.instagram) },
  { mark: 'f', label: 'Facebook', href: getHttpUrl(siteConfig.social.facebook) },
].filter((link) => link.href !== null)

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="lg:hidden">
        <Dialog.Trigger className="icon-button" aria-label="Abrir menú">
          <Menu aria-hidden="true" />
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-[#123B78]/30" />
        <Dialog.Popup className="mobile-menu fixed inset-y-0 right-0 z-50 flex w-[min(88vw,360px)] flex-col overflow-y-auto bg-[#E3F1FB] shadow-2xl">
          <div className="flex items-center justify-between gap-4 px-5 pt-3">
            <Dialog.Title className="eyebrow mb-0">MENÚ</Dialog.Title>
            <Dialog.Close className="mobile-menu-close" aria-label="Cerrar menú">
              <X aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav className="mt-4 flex flex-col gap-2.5 px-5" aria-label="Menú móvil">
            {navigationLinks.map(({ href, label }) => {
              const Icon = sectionTabs.find((tab) => tab.href === href)?.icon
              return (
                <a key={href} href={href} onClick={close} className="mobile-menu-link">
                  {Icon && <span className="mobile-menu-icon"><Icon aria-hidden="true" /></span>}
                  <span className="flex-1">{label}</span>
                  <ChevronRight className="mobile-menu-chevron" aria-hidden="true" />
                </a>
              )
            })}
          </nav>

          <div className="mt-5 px-5">
            <WhatsAppLink className="button-primary w-full" onClick={close}>
              <MessageCircle aria-hidden="true" className="h-5 w-5" />
              Pedí tu turno
            </WhatsAppLink>
          </div>

          <div className="mobile-menu-footer mt-auto">
            <Image src="/logo.png" alt="MYV Centro Odontológico" width={192} height={128} className="mx-auto h-24 w-auto" />
            <p className="mt-3 text-center">{siteConfig.description}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li><MapPin aria-hidden="true" /><span>{siteConfig.address}</span></li>
              <li><CalendarDays aria-hidden="true" /><span>{siteConfig.hours}</span></li>
            </ul>
            {socialLinks.length > 0 && (
              <div className="mt-4 flex justify-center gap-3">
                {socialLinks.map(({ mark, label, href }) => (
                  <a key={label} className="social-button bg-white" href={href ?? undefined} aria-label={label} target="_blank" rel="noopener noreferrer">
                    <span aria-hidden="true">{mark}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
