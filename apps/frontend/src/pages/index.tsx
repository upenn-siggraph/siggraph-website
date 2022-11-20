import type { NextPage } from 'next'
import Head from 'next/head'

import { Pillars } from 'components/pages/home/pillars'
import { Splash } from 'components/pages/home/splash'

const Home: NextPage = () => (
  <>
    {/* TODO: use NextSeo */}
    <Head>
      <title>UPenn Siggraph</title>
      <meta
        name="description"
        content="The University of Pennsylvania chapter of Siggraph works to provide
        exciting events and opportunities for all UPenn students that are interested in
        interactive computer graphics. Join our mailing group and come to our
        community-building, educational events, free of charge!"
      />
    </Head>
    {/* this below is just placeholder before splash is implemented :) */}
    <Splash />
    <Pillars />
  </>
)

export default Home
