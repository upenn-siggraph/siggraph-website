import { Fonts } from 'components/layout/fonts'
import { Html, Head, Main, NextScript } from 'next/document'

// custom dark mode body stuff hahae
const Document = () => (
  <Html lang="en">
    <Head>
      <Fonts />
    </Head>
    <body className="selection:bg-logo-gradient-3 selection:text-white dark:bg-black dark:text-gray-900">
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
