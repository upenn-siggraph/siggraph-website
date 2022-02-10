import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../components/layout/common'

import TeamList from '../components/team/team-list'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* this below is just placeholder before splash is implemented :) */}
      <div className="h-[42rem] flex flex-col items-start justify-center">
        <h1 className="font-black tracking-tight text-4xl lg:text-8xl mb-6">
          Siggraph UPenn
        </h1>
        <Link href="/team">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="underline text-2xl hover:text-gray-600">
            Meet the Team
          </a>
        </Link>
      </div>
    </Container>
  )
}

export default Home
