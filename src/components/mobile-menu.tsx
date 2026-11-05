'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@base-ui/react/dialog'
import { Menu, X } from 'lucide-react'
import { SiteNavigation } from '@/src/components/site-navigation'
import { WhatsAppLink } from '@/src/components/whatsapp-link'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

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
        <Dialog.Popup
          className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,360px)] flex-col gap-8 overflow-y-auto bg-white p-6 shadow-2xl"
        >
          <div className="flex items-center justify-between gap-4">
            <Dialog.Title className="mb-0">
              <Image src="/logo-diente.png" alt="MYV Centro Odontológico" width={64} height={64} className="h-16 w-auto" />
            </Dialog.Title>
            <Dialog.Close className="icon-button" aria-label="Cerrar menú">
              <X aria-hidden="true" />
            </Dialog.Close>
          </div>
          <SiteNavigation
            className="flex flex-col gap-5"
            aria-label="Menú móvil"
            onNavigate={() => setOpen(false)}
          />
          <WhatsAppLink className="button-primary mt-auto" onClick={() => setOpen(false)}>
            Pedí turno
          </WhatsAppLink>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
