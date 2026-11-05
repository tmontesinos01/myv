'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppLink } from '@/src/components/whatsapp-link'

export function StickyWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setShow(window.scrollY > window.innerHeight * 0.75)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  if (!show) return null

  return (
    <WhatsAppLink className="sticky-whatsapp">
      WhatsApp <ArrowUpRight aria-hidden="true" />
    </WhatsAppLink>
  )
}
