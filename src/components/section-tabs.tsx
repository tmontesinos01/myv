'use client'

import { useEffect, useState } from 'react'
import { sectionTabs } from '@/src/data/navigation'

export function SectionTabs() {
  const [active, setActive] = useState<string>(sectionTabs[0].href)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -55% 0px' },
    )
    for (const { href } of sectionTabs) {
      const section = document.getElementById(href.slice(1))
      if (section) observer.observe(section)
    }
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
