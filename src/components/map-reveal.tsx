'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { getHttpUrl } from '@/lib/contact'

export function MapReveal({ embedUrl }: { embedUrl: string }) {
  const [visible, setVisible] = useState(false)
  const src = getHttpUrl(embedUrl)

  return (
    <div className="map-box">
      {visible && src ? (
        <iframe
          title="Mapa de ubicación"
          src={src}
          className="h-full min-h-72 w-full rounded-2xl border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <>
          <MapPin className="text-[#155EEF]" aria-hidden="true" />
          <p className="font-semibold text-[#172B45]">Mapa de ubicación</p>
          <p className="text-sm text-[#556579]">
            {src ? 'Cargalo cuando quieras consultar cómo llegar.' : 'La ubicación estará disponible próximamente.'}
          </p>
          {src && (
            <button type="button" className="button-secondary mt-2" onClick={() => setVisible(true)}>
              Ver mapa
            </button>
          )}
        </>
      )}
    </div>
  )
}
