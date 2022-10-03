import { Html, Head, Main, NextScript } from 'next/document'

// custom dark mode body stuff hahae
const Document = () => (
  <Html lang="en">
    <Head />
    <body className="dark:bg-gray-100 dark:text-gray-900">
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
