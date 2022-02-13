import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body className="dark:bg-gray-100 dark:text-gray-900">
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
