'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Menu, MapPin, X } from 'lucide-react'
import { buildWhatsAppUrl, siteConfig, track } from '@/src/config/site.config'
import type { FaqItem } from '@/src/data/content'

export function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false)
  return <>
    <button className="icon-button md:hidden" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(true)}><Menu /></button>
    {open && <div className="fixed inset-0 z-50 bg-[#123B78]/30 md:hidden" onClick={() => setOpen(false)}>
      <aside className="ml-auto flex h-full w-[min(88vw,360px)] flex-col gap-8 bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between"><span className="brand-mark">{siteConfig.shortName}</span><button className="icon-button" aria-label="Cerrar menú" onClick={() => setOpen(false)}><X /></button></div>
        <nav className="flex flex-col gap-5" aria-label="Menú móvil">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav>
        <a className="button-primary mt-auto justify-center" href={buildWhatsAppUrl({ phone: siteConfig.whatsapp, message: siteConfig.whatsappDefaultMessage })} onClick={() => track('click_whatsapp', { location: 'mobile_menu' })}>Pedí turno</a>
      </aside>
    </div>}
  </>
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [active, setActive] = useState<number | null>(0)
  return <div className="flex flex-col gap-3">{items.map((item, index) => <div key={item.question} className="faq-item">
    <button className="flex w-full items-center justify-between gap-4 text-left font-semibold text-[#172B45]" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)}><span>{item.question}</span><ChevronDown className={`shrink-0 transition-transform ${active === index ? 'rotate-180' : ''}`} /></button>
    {active === index && <p className="mt-3 max-w-2xl text-sm leading-6 text-[#556579]">{item.answer}</p>}
  </div>)}</div>
}

export function MapReveal() {
  const [visible, setVisible] = useState(false)
  return <div className="map-box">
    {!visible ? <><MapPin className="text-[#155EEF]" /><p className="font-semibold text-[#172B45]">Mapa de ubicación</p><p className="text-sm text-[#556579]">Cargalo cuando quieras consultar cómo llegar.</p><button className="button-secondary mt-2" onClick={() => setVisible(true)}>Ver mapa</button></> : <iframe title="Mapa de ubicación" src={siteConfig.mapUrl} className="h-full min-h-72 w-full rounded-2xl border-0" loading="lazy" />}
  </div>
}

export function StickyWhatsApp() {
  const [show, setShow] = useState(false)
  useEffect(() => { const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.75); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  if (!show) return null
  return <a className="sticky-whatsapp" href={buildWhatsAppUrl({ phone: siteConfig.whatsapp, message: siteConfig.whatsappDefaultMessage })} onClick={() => track('click_whatsapp', { location: 'sticky_mobile' })}>WhatsApp <span aria-hidden="true">→</span></a>
}
