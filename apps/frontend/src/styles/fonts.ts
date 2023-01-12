import { Space_Mono } from '@next/font/google'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

export const fontsClassName = `${spaceMono.className}`
