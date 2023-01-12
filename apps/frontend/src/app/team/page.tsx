import path from 'path'

import lqip from 'lqip-modern'

import teamData from 'data/team.json'
import { PageHeader } from 'components/layout/common'
import { LazyImage } from 'components/util/lazy-image'

const getData = async () => {
  const { team: baseTeam, basePath } = teamData
  const team = await Promise.all(
    baseTeam.map(async ({ image, ...member }) => {
      const imagePath = path.join(process.cwd(), 'public', basePath, image)
      return {
        // actual image is just in public directory
        image: path.join(basePath, image),
        // lqip image uses full path with process.cwd
        lqip: (await lqip(imagePath, { outputFormat: 'webp' })).metadata
          .dataURIBase64,
        ...member,
      }
    })
  )
  return { team }
}

const TeamPage = async () => {
  const { team } = await getData()
  return (
    <>
      <PageHeader>Meet the Team</PageHeader>
      <ul className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
        {team.map(({ name, role, image, lqip }) => (
          <li key={name} className="mb-4">
            <LazyImage
              image={image}
              lqip={lqip}
              width={300}
              height={300}
              alt={name}
              className="aspect-square h-auto w-full rounded-xl shadow-lg"
            />
            <div className="m-4">
              <h3 className="font-mono text-2xl font-bold dark:text-gray-900 xl:text-3xl">
                {name}
              </h3>
              <p className="tracking-wide text-gray-500 dark:text-gray-600">
                {role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TeamPage
