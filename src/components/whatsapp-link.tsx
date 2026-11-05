import type { ComponentProps } from 'react'
import { buildWhatsAppUrl } from '@/lib/contact'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/src/config/site.config'

type WhatsAppLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  message?: string
}

export function WhatsAppLink({
  message = siteConfig.whatsappDefaultMessage,
  className,
  children,
  ...props
}: WhatsAppLinkProps) {
  const href = buildWhatsAppUrl({ phone: siteConfig.whatsapp, message })

  if (!href) {
    return (
      <span
        className={cn(className, 'unavailable-link')}
        role="link"
        aria-disabled="true"
        title="WhatsApp estará disponible próximamente"
      >
        {children}
      </span>
    )
  }

  return <a className={className} href={href} {...props}>{children}</a>
}
