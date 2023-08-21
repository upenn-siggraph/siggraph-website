import Link from 'next/link'
import { FaDiscord } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

import EarthMap from '@/resources/image/earthmap.webp'

export default function FindUsSection() {
  return (
    <div id="find-us">
      <div className="absolute left-0 right-0 border-t-[1px] border-neutral-600" />
      <div className="absolute left-0 right-0 h-screen max-h-[60rem] overflow-hidden">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur grayscale"
          style={{ backgroundImage: `url(${EarthMap.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-siggraph-2/60 via-siggraph-3/60 to-siggraph-4/60 bg-blend-multiply" />
      </div>
      <section className="relative flex h-screen max-h-[60rem] min-h-max flex-col justify-center px-4 drop-shadow-md">
        <h1 className="text-5xl font-bold tracking-tight lg:text-8xl">
          Get involved
        </h1>
        <Link
          target="_blank"
          href="https://discord.gg/uenAAP3Wue"
          className="group -ml-4 mt-4 p-4 text-2xl text-white/80"
        >
          <div className="transition-transform group-hover:translate-x-2 group-hover:scale-[1.01]">
            <FaDiscord className="mr-6 mb-1 inline-block text-3xl text-white max-xl:hidden" />
            Join us on the{' '}
            <b className="font-semibold text-white">Penn Graphics Gang</b>{' '}
            Discord server for event announcements and updates!{' '}
            <HiArrowRight className="ml-2 mb-1 inline-block text-xl text-white" />
          </div>
        </Link>
      </section>
    </div>
  )
}

// TODO: discord and interest form link
