import 'styles/globals.css'

import { Nav } from './components/nav'
import { Space_Mono } from '@next/font/google'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

const fontClassNames = `${spaceMono.className}`

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={fontClassNames}>
      <head>
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="selection:bg-logo-gradient-3 selection:text-white dark:bg-black dark:text-gray-900">
        <div className="container mx-auto flex flex-col px-4">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
