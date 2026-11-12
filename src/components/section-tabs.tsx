'use client'

import { useEffect, useState } from 'react'
import { sectionTabs } from '@/src/data/navigation'

export function SectionTabs() {
  const [active, setActive] = useState<string>(sectionTabs[0].href)

  useEffect(() => {
    const sections = new Map<Element, string>()
    for (const { href } of sectionTabs) {
      const section = document.getElementById(href.slice(1))?.closest('section')
      if (section) sections.set(section, href)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(sections.get(entry.target) ?? sectionTabs[0].href)
        }
      },
      { rootMargin: '-45% 0px -55% 0px' },
    )
    for (const section of sections.keys()) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="section-tabs" aria-label="Secciones de la página">
      {sectionTabs.map((tab) => (
        <a
          key={tab.href}
          href={tab.href}
          aria-label={tab.label}
          aria-current={active === tab.href ? 'location' : undefined}
        >
          <span className="section-tab-icon" aria-hidden="true"><tab.icon /></span>
          <span className="section-tab-label" aria-hidden="true">{tab.label}</span>
        </a>
      ))}
    </nav>
  )
}
