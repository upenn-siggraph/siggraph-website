import Image, { StaticImageData } from 'next/image'

import SiggraphLogo from '@/resources/image/upenn-siggraph-logo.svg'

export default function Header() {
  return (
    <header className="px-16 w-full">
      <nav className="flex select-none flex-row items-center px-4 py-5">
        <Image
          src={SiggraphLogo as StaticImageData}
          alt="UPenn Siggraph"
          width={300}
        />
      </nav>
    </header>
  )
}
