import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  copy?: string | string[]
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, copy, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
      {copy && (Array.isArray(copy) ? copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{copy}</p>)}
    </div>
  )
}
