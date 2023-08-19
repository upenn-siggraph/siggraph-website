import { Inter } from 'next/font/google'

import '@/styles/globals.scss'

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black font-sans text-white ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
