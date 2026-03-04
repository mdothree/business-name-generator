import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Name Generator',
  description: 'Business name generator with numerology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
