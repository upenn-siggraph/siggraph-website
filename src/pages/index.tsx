import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import TeamList from '@/components/team-list'
import { getTeamData } from '@/lib/team'
import Splash from '@/components/splash'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: { team: await getTeamData() },
  }
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
      <main className="container mx-auto pt-10">
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
