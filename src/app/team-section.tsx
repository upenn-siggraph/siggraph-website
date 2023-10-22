import { readFile } from 'fs/promises'
import path from 'path'

import sharp from 'sharp'

import { LazyImage } from '@/components/lazy-image'
import teamData from '@/data/team.json'

async function getTeamData() {
  const { team: baseTeam, basePath } = teamData
  return Promise.all(
    baseTeam.map(async ({ image, ...member }) => {
      const imagePath = path.join(process.cwd(), 'public', basePath, image)
      const lqipBuffer = await sharp(await readFile(imagePath))
        .resize(32, 32)
        .toBuffer()
      return {
        // actual image is just in public directory
        image: path.join(basePath, image),
        // lqip image uses full path with process.cwd
        lqip: `data:image/png;base64,${lqipBuffer.toString('base64')}`,
        ...member,
      }
    }),
  )
}

export default async function TeamSection() {
  const team = await getTeamData()

  return (
    <div className="mb-12 px-16">
      <div
        style={{ backgroundImage: 'url(/image/design/bg_dots.svg)' }}
        className="absolute left-0 right-0 h-screen max-h-[80rem] border-t-[1px] border-neutral-600 bg-repeat [background-position:center_3px] [background-size:20px]"
      >
        {/* this div is the gradient covering up the dots */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,1)]" />
      </div>
      <section className="relative px-4 pt-12 lg:pt-16">
        <h2 className="mb-12 select-none text-5xl font-bold tracking-tight after:ml-[.2em] after:animate-blink after:content-['\_'] lg:text-8xl">
          Meet the Team
        </h2>
        <ul className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {team.map(({ name, role, image, lqip: lqipResult }) => (
            <li key={name} className="mb-4">
              <LazyImage
                image={image}
                lqip={lqipResult}
                width={300}
                height={300}
                alt={name}
                className="aspect-square h-auto w-full select-none rounded-xl"
              />
              <div className="my-4 sm:mx-4">
                <h3 className="text-2xl font-bold xl:text-3xl">{name}</h3>
                <p className="mt-1 tracking-wide text-neutral-400">{role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
