import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
const montserrat = Montserrat({ subsets: ['latin'] })
import { GoogleTagManager } from '@next/third-parties/google'
import Analytics from '../components/Analytics'
import { GTM_ID } from '../lib/gtm'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'EMERALD VISTA',
  description: 'Luxury Suits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
        <Suspense fallback={null}>
          <Analytics />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
