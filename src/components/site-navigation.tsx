import type { ComponentProps } from 'react'
import { navigationLinks } from '@/src/data/navigation'

type SiteNavigationProps = ComponentProps<'nav'> & {
  onNavigate?: () => void
}

export function SiteNavigation({ onNavigate, ...props }: SiteNavigationProps) {
  return (
    <nav {...props}>
      {navigationLinks.map((link) => (
        <a key={link.href} href={link.href} onClick={onNavigate}>{link.label}</a>
      ))}
    </nav>
  )
}
