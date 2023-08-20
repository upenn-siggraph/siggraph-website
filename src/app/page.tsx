import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import AboutSection from './about/about-section'
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

export const metadata = {
  title: 'UPenn SIGGRAPH',
  description:
    'The official UPenn chapter of the SIGGRAPH organization, focused on researching, developing, and exploring interactive 3D technology.',
}

export default function Home() {
  return (
    <main className="container mx-auto">
      <Nav />
      <Splash />
      <AboutSection />
      <section>
        <h2 className="text-4xl font-bold lg:text-8xl">Meet the Team</h2>
        <TeamList />
      </section>
    </main>
  )
}
