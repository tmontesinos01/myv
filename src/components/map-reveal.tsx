import { MapPin } from 'lucide-react'
import { getHttpUrl } from '@/lib/contact'

export function MapReveal({ embedUrl }: { embedUrl: string }) {
  const src = getHttpUrl(embedUrl)

  return (
    <div className="map-box">
      {src ? (
        <iframe
          title="Mapa de ubicación"
          src={src}
          className="h-full min-h-72 w-full rounded-2xl border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <>
          <MapPin className="text-[#155EEF]" aria-hidden="true" />
          <p className="font-semibold text-[#172B45]">Mapa de ubicación</p>
          <p className="text-sm text-[#556579]">
            La ubicación estará disponible próximamente.
          </p>
        </>
      )}
    </div>
  )
}
