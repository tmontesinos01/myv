'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FaqItem } from '@/src/data/content'

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [active, setActive] = useState<number | null>(0)
  const id = useId()

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const expanded = active === index
        const triggerId = `${id}-trigger-${index}`
        const panelId = `${id}-panel-${index}`

        return (
          <div key={item.question} className="faq-item">
            <h3 className="m-0">
              <button
                type="button"
                id={triggerId}
                className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-[#172B45]"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setActive(expanded ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" className={cn('shrink-0 transition-transform', expanded && 'rotate-180')} />
              </button>
            </h3>
            <div id={panelId} aria-labelledby={triggerId} role="region" hidden={!expanded}>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#556579]">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
