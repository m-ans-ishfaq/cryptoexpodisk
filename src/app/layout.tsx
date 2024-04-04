import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Crypto Expo Disk',
  description: 'Shapping the future of finance in the city of innovation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <body className="font-poppins">{children}</body>
    </html>
  )
}
