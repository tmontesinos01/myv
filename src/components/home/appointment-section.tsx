import { MessageCircle } from 'lucide-react'
import { WhatsAppLink } from '@/src/components/whatsapp-link'

export function AppointmentSection() {
  return (
    <section className="cta-section">
      <div className="container flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
        <div>
          <p className="eyebrow">PEDÍ TU TURNO</p>
          <h2>Tu próxima consulta empieza acá.</h2>
          <p>Escribinos para consultar disponibilidad. El pedido no confirma un turno.</p>
        </div>
        <WhatsAppLink className="button-light">
          Hablar por WhatsApp <MessageCircle data-icon="inline-end" aria-hidden="true" />
        </WhatsAppLink>
      </div>
    </section>
  )
}
