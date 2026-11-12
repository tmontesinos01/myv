import { Check, Heart, Sparkles, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/src/components/section-heading'

type Feature = { icon: LucideIcon; title: string; copy: string }

const features: Feature[] = [
  { icon: Heart, title: 'Cercanía', copy: 'Un trato humano, claro y atento en cada paso.' },
  { icon: Sparkles, title: 'Claridad', copy: 'Información simple para que puedas decidir con tranquilidad.' },
  { icon: Check, title: 'Acompañamiento', copy: 'Te orientamos para encontrar la consulta que necesitás.' },
]

function FeatureCard({ feature: { icon: Icon, title, copy } }: { feature: Feature }) {
  return (
    <div className="feature">
      <div className="feature-icon"><Icon aria-hidden="true" /></div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section id="elegirnos" className="section">
      <div className="container">
        <SectionHeading eyebrow="POR QUÉ ELEGIRNOS" title="Una atención que empieza por escucharte." />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}
        </div>
      </div>
    </section>
  )
}
