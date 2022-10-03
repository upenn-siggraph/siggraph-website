import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/global.css'

import { useBasePath } from 'hooks/util/use-base-path'
import { Nav } from 'components/layout/nav'

// favicon base path hack
const App = ({ Component, pageProps }: AppProps) => {
  const { getPath } = useBasePath()
  return (
    <>
      {/* TODO: use NextSeo */}
      <Head>
        <link rel="icon" href={getPath('favicon.ico')} />
      </Head>
      <div className="container mx-auto flex flex-col px-4">
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
