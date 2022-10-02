import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from 'components/common'

const Home: NextPage = () => (
  <Container>
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
    <div className="flex h-[42rem] flex-col items-start justify-center">
      <h1 className="mb-6 text-4xl font-black tracking-tight lg:text-8xl">
        UPenn Siggraph
      </h1>
      <Link href="/team">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="text-2xl underline hover:text-gray-600">Meet the Team</a>
      </Link>
    </div>
  </Container>
)

export default Home
