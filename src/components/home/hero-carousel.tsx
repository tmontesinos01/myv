'use client'

import { useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

type Slide = { src: StaticImageData; alt: string }

export function HeroCarousel({ slides, interval = 3000 }: { slides: readonly Slide[]; interval?: number }) {
  const [active, setActive] = useState(0)
  const total = slides.length

  useEffect(() => {
    if (total < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timeout = setTimeout(() => setActive((a) => (a + 1) % total), interval)
    return () => clearTimeout(timeout)
  }, [active, total, interval])

  return (
    <div className="hero-carousel">
      {[2, 1].map((depth) => {
        const slide = slides[(active + depth) % total]
        return (
          <div key={depth} className={`hero-peek hero-peek-${depth}`} aria-hidden="true">
            <Image src={slide.src} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" placeholder="blur" />
          </div>
        )
      })}
      <div className="hero-track">
        {slides.map((slide, index) => {
          const offset = (index - active + total) % total

          return (
            <div
              key={slide.src.src}
              className={cn('hero-slide', offset === 0 && 'is-active', offset === total - 1 && 'is-prev')}
              aria-hidden={offset !== 0}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                placeholder="blur"
                priority={index === 0}
              />
            </div>
          )
        })}
      </div>
      <svg className="hero-mobile-divider" viewBox="0 0 100 352" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 H100 V39 C93 54 92 66 78 72 C65 80 60 78 50 81 C34 83 26 95 19 108 C9 126 4 148 0 190 V352 Z" />
      </svg>
    </div>
  )
}
