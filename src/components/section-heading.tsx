type SectionHeadingProps = {
  eyebrow: string
  title: string
  copy?: string | string[]
}

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && (Array.isArray(copy) ? copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{copy}</p>)}
    </div>
  )
}
