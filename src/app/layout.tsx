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
      <body
        className={`min-w-[250px] bg-black font-sans text-white selection:bg-fuchsia-500 ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
