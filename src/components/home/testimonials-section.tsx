import { SectionHeading } from '@/src/components/section-heading'
import { testimonials } from '@/src/data/content'

export function TestimonialsSection() {
  if (testimonials.length === 0) return null

  return (
    <section className="section">
      <div id="testimonios" className="container section-anchor">
        <SectionHeading eyebrow="TESTIMONIOS" title="Lo que dicen quienes nos eligen." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote className="quote" key={`${item.author}-${item.quote}`}>
              &quot;{item.quote}&quot;<cite>{item.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
