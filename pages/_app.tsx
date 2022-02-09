import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import '../styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.body.classList.add('dark:bg-gray-100', 'dark:text-gray-900')
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
