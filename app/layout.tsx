import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
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
      <Head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MX94TFKR');
          `
        }} />
        {/* End Google Tag Manager */}
      </Head>
      <body className={montserrat.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX94TFKR"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {children}
      </body>
    </html>
  )
}
