import type { NextPage } from 'next'
import Head from 'next/head'
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

      <main className="container mx-auto px-4">
        <TeamList />
        <p>Hello!</p>
      </main>
    </Container>
  )
}

export default Home
