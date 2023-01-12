import { Html, Head, Main, NextScript } from 'next/document'

// custom dark mode body stuff hahae
const Document = () => (
  <Html lang="en">
    <Head />
    {/* below classname applies selection color and scrollbar modification */}
    <body className="scrollbar-thin scrollbar-track-white scrollbar-thumb-black selection:bg-logo-gradient-3 selection:text-white dark:bg-black dark:text-gray-900 dark:scrollbar-track-black dark:scrollbar-thumb-white">
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
