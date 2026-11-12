import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { siteConfig } from '@/src/config/site.config'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/favicon.ico?v=5', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/favicon.png?v=5', sizes: '96x96', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.png?v=5', sizes: '96x96', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/favicon.ico?v=5',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#32569e',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: siteConfig.name,
    description: siteConfig.description,
    ...(siteConfig.address.includes('[PENDIENTE]') ? {} : { address: siteConfig.address }),
    ...(siteConfig.phone.includes('[PENDIENTE]') ? {} : { telephone: siteConfig.phone }),
  }

  return (
    <html lang="es">
      <body className={`${manrope.variable} antialiased`}>
        {children}
        {!siteConfig.name.includes('[PENDIENTE]') && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
          />
        )}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
