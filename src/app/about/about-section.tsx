import Image, { StaticImageData } from 'next/image'

import Cubes from './cubes'

import OurChapter from '@/resources/image/our-chapter2.svg'
import MoreAbout from '@/resources/image/more-about.svg'

export default function AboutSection() {
  return (
    <div className="bg-background mt-20 flex h-screen max-h-[1080px] min-h-[600px] flex-col text-white">
      <div className="m-auto flex flex-row px-2">
        <div className="h-[60rem] w-[60rem] basis-1/2">
          <Cubes />
        </div>
        <div className="ml-12 flex basis-1/2 flex-col self-center">
          <Image
            src={OurChapter as StaticImageData}
            alt="Our Chapter"
            className="mb-12"
          />
          <span className="pb-5 text-lg">
            Lorem ipsum siat beniere esse insert random Latin here fiat fecem
            lorem die ablative absolute explanation on what we do etc etc etc
          </span>
          <Image
            src={MoreAbout as StaticImageData}
            alt="More About Us"
            className="mt-6 self-start"
          />
        </div>
      </div>
    </div>
  )
}
