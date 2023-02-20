import path from 'path'

import lqip from 'lqip-modern'

import teamData from '@/data/team.json'

export async function getTeamData() {
  const { team: baseTeam, basePath } = teamData
  return Promise.all(
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
}

export type TeamData = Awaited<ReturnType<typeof getTeamData>>
