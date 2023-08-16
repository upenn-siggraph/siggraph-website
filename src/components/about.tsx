import Image from 'next/image'

import OurChapter from '../resources/image/our-chapter2.svg'
import MoreAbout from '../resources/image/more-about.svg'
import Cubes from '../resources/image/cubes.png'

export default function About() {
  return (
    <div className="bg-background mt-20 flex h-screen max-h-[1080px] min-h-[600px] flex-col text-white">
      <div className="m-auto flex flex-row">
        <div className="basis-1/2 ">
          <Image src={Cubes} alt="Yellow Cube" className="w-[60rem] pb-40" />
        </div>
        <div className="ml-12 flex basis-1/2 flex-col self-center">
          <Image src={OurChapter} alt="Our Chapter" className="mb-12" />
          <span className="pb-5 text-lg">
            Lorem ipsum siat beniere esse insert random Latin here fiat fecem
            lorem die ablative absolute explanation on what we do etc etc etc
          </span>
          <Image
            src={MoreAbout}
            alt="More About Us"
            className="mt-6 self-start"
          />
        </div>
      </div>
    </div>
  )
}
