import dynamic from 'next/dynamic'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import MoreAbout from '@/resources/image/more-about.svg'

const Cubes = dynamic(() => import('@/components/3d/cubes'), { ssr: false })

export default function AboutSection() {
  return (
    <div className="relative flex h-screen max-h-[42rem] grid-cols-2 flex-col justify-center overflow-hidden py-12 px-16 text-white lg:mx-12 lg:grid lg:max-h-[60rem] lg:items-center">
      <div className="absolute aspect-square w-full lg:relative">
        <Cubes />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 lg:hidden" />
      <div className="relative flex flex-col px-4">
        <h2 className="select-none text-5xl font-extrabold tracking-tight drop-shadow-lg lg:text-8xl">
          Our Chapter
        </h2>
        <p className="mt-8 mb-4 font-light tracking-wide text-neutral-100 lg:text-lg">
          We are the the{' '}
          <b className="font-medium text-white">
            official UPenn chapter of SIGGRAPH
          </b>
          , a nonprofit organization with annual conferences and thousands of
          members across the globe. We are passionate undergraduate students who
          want to explore the future of graphics technology.
        </p>
        <Link
          target="_blank"
          href="https://www.siggraph.org/"
          className="w-full max-w-[28rem] select-none transition hover:-translate-y-[0.1rem] hover:scale-[1.01] hover:brightness-125"
        >
          <Image
            src={MoreAbout as StaticImageData}
            alt="More About Us"
            className="mt-6 self-start"
          />
        </Link>
      </div>
    </div>
  )
}
