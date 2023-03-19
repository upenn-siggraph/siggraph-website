import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import TeamList from '@/components/team-list'
import { getTeamData } from '@/lib/team'
import Splash from '@/components/splash'
import SiggraphLogo from '@/resources/image/upenn-siggraph-logo.svg'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: { team: await getTeamData() },
  }
}

function Nav() {
  return (
    <nav className="flex flex-row items-center py-5">
      <Image src={SiggraphLogo} alt="UPenn Siggraph" width={300} />
      <Link href="/" className="ml-auto">
        EVENT NAME HERE!
      </Link>
    </nav>
  )
}

export default function Home({
  team,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Siggraph Funny (we should replace this with NextSEO)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Nav />
        <Splash />
        You had been trolled...{' '}
        <Link href="/test" className="underline">
          Go funny
        </Link>
        <TeamList team={team} />
      </main>
    </>
  )
}
