export const siteConfig = {
  name: '[PENDIENTE] Nombre del centro',
  shortName: '[PENDIENTE] Centro odontológico',
  description: 'Atención odontológica cercana y profesional para cuidar tu sonrisa.',
  whatsapp: '[PENDIENTE] WhatsApp',
  phone: '[PENDIENTE] Teléfono',
  email: '[PENDIENTE] Email',
  address: '[PENDIENTE] Dirección',
  city: '[PENDIENTE] Ciudad',
  hours: '[PENDIENTE] Días y horarios de atención',
  social: { instagram: '[PENDIENTE] Instagram', facebook: '[PENDIENTE] Facebook' },
  insurance: ['[PENDIENTE] Obras sociales y prepagas'],
  whatsappDefaultMessage: 'Hola, quisiera consultar por un turno.',
  mapUrl: 'https://maps.google.com/?q=[PENDIENTE] Dirección',
} as const

export type WhatsAppParams = { phone: string; message: string }
export function buildWhatsAppUrl({ phone, message }: WhatsAppParams) {
  const normalized = phone.replace(/[^\d]/g, '')
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`
}

export function track(_evento: string, _params?: Record<string, string>) {}

export type SectionKey = 'about' | 'treatments' | 'professionals' | 'testimonials' | 'faq' | 'contact'
