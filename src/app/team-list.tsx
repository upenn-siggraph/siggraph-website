import path from 'path'
import { readFile } from 'fs/promises'

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
    })
  )
}

export default async function TeamList() {
  const team = await getTeamData()

  return (
    <ul className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
      {team.map(({ name, role, image, lqip: lqipResult }) => (
        <li key={name} className="mb-4">
          <LazyImage
            image={image}
            lqip={lqipResult}
            width={300}
            height={300}
            alt={name}
            className="aspect-square h-auto w-full rounded-xl"
          />
          <div className="m-4">
            <h3 className="text-2xl font-bold xl:text-3xl">{name}</h3>
            <p className="tracking-wide text-gray-400">{role}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
