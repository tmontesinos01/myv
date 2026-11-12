import { CalendarCheck, CircleQuestionMark, House, MapPin, Quote, Sparkles, Users, type LucideIcon } from 'lucide-react'
import { testimonials } from '@/src/data/content'

export type NavigationLink = { href: `#${string}`; label: string }
export type SectionTab = NavigationLink & { icon: LucideIcon }

export const navigationLinks: NavigationLink[] = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#tratamientos', label: 'Tratamientos' },
  { href: '#preguntas', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' },
]

export const sectionTabs: SectionTab[] = [
  { href: '#inicio', label: 'Inicio', icon: House },
  { href: '#nosotros', label: 'Nosotros', icon: Users },
  { href: '#tratamientos', label: 'Tratamientos', icon: Sparkles },
  ...(testimonials.length > 0 ? [{ href: '#testimonios', label: 'Testimonios', icon: Quote } satisfies SectionTab] : []),
  { href: '#preguntas', label: 'Preguntas frecuentes', icon: CircleQuestionMark },
  { href: '#turno', label: 'Pedí tu turno', icon: CalendarCheck },
  { href: '#contacto', label: 'Contacto', icon: MapPin },
]
