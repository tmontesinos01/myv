import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { siteConfig } from '@/src/config/site.config'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
export const metadata: Metadata = { title: siteConfig.name, description: siteConfig.description, generator: 'v0.app', openGraph: { title: siteConfig.name, description: siteConfig.description, type: 'website' } }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#155EEF', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Dentist', name: siteConfig.name, description: siteConfig.description, ...(siteConfig.address.includes('[PENDIENTE]') ? {} : { address: siteConfig.address }), ...(siteConfig.phone.includes('[PENDIENTE]') ? {} : { telephone: siteConfig.phone }) }
  return <html lang="es"><body className={`${manrope.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
