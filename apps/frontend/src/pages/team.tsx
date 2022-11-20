import path from 'path'

import { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import lqip from 'lqip-modern'

import teamData from 'data/team.json'
import { TeamList } from 'components/pages/team/team-list'
import { PageHeader } from 'components/layout/common'

export const getStaticProps = async () => {
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
  return {
    props: { team },
  }
}

const TeamPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  team,
}) => (
  <>
    {/* TODO: use NextSeo */}
    <Head>
      <title>UPenn Siggraph - Meet the Team</title>
      <meta
        name="description"
        content="Meet UPenn Siggraph's dedicated team of students that are deeply
        passionate about interactive computer graphics."
      />
    </Head>
    <PageHeader>Meet the Team</PageHeader>
    <TeamList team={team} />
  </>
)

export default TeamPage
