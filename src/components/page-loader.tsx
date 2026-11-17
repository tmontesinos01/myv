'use client'

import { useEffect, useState } from 'react'

const loaderBars = [0, 1, 2, 3, 4]

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let hideTimer: number | undefined
    let fallbackTimer: number | undefined

    const hideAfterLoad = () => {
      window.clearTimeout(fallbackTimer)
      window.removeEventListener('load', hideAfterLoad)
      hideTimer = window.setTimeout(() => setIsVisible(false), 700)
    }

    fallbackTimer = window.setTimeout(hideAfterLoad, 8000)

    if (document.readyState === 'complete') {
      hideAfterLoad()
    } else {
      window.addEventListener('load', hideAfterLoad, { once: true })
    }

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(fallbackTimer)
      window.removeEventListener('load', hideAfterLoad)
    }
  }, [])

  return (
    <div
      className={`page-loader${isVisible ? '' : ' page-loader--hidden'}`}
      role="status"
      aria-label="Cargando la página"
      aria-hidden={!isVisible}
    >
      <section className="loader" aria-hidden="true">
        {loaderBars.map((index) => (
          <div key={index} className="slider" style={{ '--i': index } as React.CSSProperties} />
        ))}
      </section>
    </div>
  )
}
