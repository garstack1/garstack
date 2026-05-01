import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Garrett Stack — Instructional Designer & Learning Strategist',
    template: '%s | Garrett Stack',
  },
  description:
    'Garrett Stack is an experienced Instructional Designer, Technical Writer, and Implementation Consultant based in Ireland.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://garstack.com',
    siteName: 'Garrett Stack',
  },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  )
}
