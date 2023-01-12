import 'styles/globals.css'

import { fontClassNames } from './components/fonts'
import { Nav } from './components/nav'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`selection:bg-logo-gradient-3 selection:text-white dark:bg-black dark:text-gray-900 ${fontClassNames}`}
      >
        <div className="container mx-auto flex flex-col px-4">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
