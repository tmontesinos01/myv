import { Clock3, MapPin, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/src/config/site.config'

export function TrustBar() {
  const items = [
    { icon: Clock3, label: 'Horarios', value: siteConfig.hours },
    { icon: MapPin, label: 'Ubicación', value: siteConfig.address },
    // { icon: ShieldCheck, label: 'Obras sociales', value: siteConfig.insurance.join(', ') },
  ]

  return (
    <section className="trust-bar" aria-label="Información destacada">
      <div className="container grid gap-4 sm:grid-cols-2">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
