import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import About from './about'
import Splash from './splash'
import TeamList from './team-list'

import SiggraphLogo from '@/resources/image/upenn-siggraph-logo.svg'

function Nav() {
  return (
    <nav className="flex flex-row items-center py-5">
      <Image
        src={SiggraphLogo as StaticImageData}
        alt="UPenn Siggraph"
        width={300}
      />
      <Link href="/" className="ml-auto">
        EVENT NAME HERE!
      </Link>
    </nav>
  )
}

export default function Home() {
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
        <About />
        <TeamList />
      </main>
    </>
  )
}
