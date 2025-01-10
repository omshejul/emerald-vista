import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
