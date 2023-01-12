import { Space_Mono } from '@next/font/google'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const fontClassNames = `${spaceMono}`
