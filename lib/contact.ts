export type WhatsAppParams = { phone: string; message: string }

export function buildWhatsAppUrl({ phone, message }: WhatsAppParams) {
  if (!/^\+?[\d\s().-]+$/.test(phone.trim())) return null

  const normalized = phone.replace(/\D/g, '')
  if (!/^[1-9]\d{6,14}$/.test(normalized)) return null

  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`
}

export function getHttpUrl(value: string) {
  try {
    const url = new URL(value)
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null
  } catch {
    return null
  }
}
