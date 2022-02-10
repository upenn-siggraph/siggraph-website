import type { AppProps } from 'next/app'
import { useLayoutEffect } from 'react-layout-effect'

import '../styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useLayoutEffect(() => {
    document.body.classList.add('dark:bg-gray-100', 'dark:text-gray-900')
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
