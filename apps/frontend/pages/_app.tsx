import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/layout'
import useBasePath from '../hooks/use-base-path'

import '../styles/global.scss'

// favicon hack here

const App = ({ Component, pageProps }: AppProps) => {
  const { getPath } = useBasePath()
  return (
    <>
      <Head>
        <link rel="icon" href={getPath('favicon.ico')} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
