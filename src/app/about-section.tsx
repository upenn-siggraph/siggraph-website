import Image, { StaticImageData } from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import OurChapter from '@/resources/image/our-chapter2.svg'
import MoreAbout from '@/resources/image/more-about.svg'

const Cubes = dynamic(() => import('@/components/3d/cubes'), { ssr: false })

export default function AboutSection() {
  return (
    <div className="relative grid-cols-2 overflow-hidden text-white lg:mx-12 lg:grid">
      <div className="absolute aspect-square max-lg:-mb-[70vw] max-lg:w-full max-lg:max-w-[40rem] lg:relative lg:mb-0">
        <Cubes />
      </div>
      <div className="relative flex flex-col self-center bg-gradient-to-b from-transparent to-black px-4 max-lg:mt-16">
        <Image
          src={OurChapter as StaticImageData}
          alt="Our Chapter"
          className="mb-8 w-full max-w-[32rem] drop-shadow-lg"
        />
        <span className="pb-5 text-lg">
          Lorem ipsum siat beniere esse insert random Latin here fiat fecem
          lorem die ablative absolute explanation on what we do etc etc etc
        </span>
        <Link
          target="_blank"
          href="https://www.siggraph.org/"
          className="w-full max-w-[28rem] transition hover:-translate-y-[0.1rem] hover:scale-[1.01] hover:brightness-125"
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
