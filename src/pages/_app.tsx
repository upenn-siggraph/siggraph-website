import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
