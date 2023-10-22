import Link from 'next/link'
import { FaDiscord } from 'react-icons/fa'

import EarthMap from '@/resources/image/earthmap.webp'

export default function ContactSection() {
  return (
    <div id="find-us" className="px-16">
      <div className="absolute left-0 right-0 border-t-[1px] border-neutral-600" />
      <div className="absolute left-0 right-0 h-screen max-h-[60rem] overflow-hidden">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur grayscale"
          style={{ backgroundImage: `url(${EarthMap.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-siggraph-2/60 via-siggraph-3/60 to-siggraph-4/60 bg-blend-multiply" />
      </div>
      <section className="relative flex h-screen max-h-[60rem] min-h-max flex-col justify-center px-4">
        <h2 className="select-none text-5xl font-bold tracking-tight drop-shadow-md lg:text-8xl">
          Get involved
        </h2>
        <p className="mt-6 text-xl">
          Check the{' '}
          <b className="font-semibold text-white">Penn Graphics Gang</b> Discord
          for event announcements and updates!{' '}
        </p>
        <Link
          target="_blank"
          href="https://discord.gg/uenAAP3Wue"
          className="group mr-auto mt-4 inline-block select-none text-xl drop-shadow"
        >
          <div className="flex w-max flex-row items-center gap-2 rounded-full bg-white px-8 py-2 font-bold tracking-wide text-purple-700 transition-transform group-hover:translate-x-2 group-hover:scale-[1.01]">
            <FaDiscord className="inline-block text-3xl" />
            Join
          </div>
        </Link>
      </section>
    </div>
  )
}

// TODO: discord and interest form link
