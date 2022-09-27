import Head from 'next/head'
import { SectionHeader } from '../components/common'
import TeamList from '../components/team/team-list'

const TeamPage = () => (
  <>
    <Head>
      <title>UPenn Siggraph - Meet the Team</title>
      <meta
        name="description"
        content="Meet UPenn Siggraph's dedicated team of students that are deeply
        passionate about interactive computer graphics."
      />
    </Head>
    <SectionHeader>Meet the Team</SectionHeader>
    <TeamList />
  </>
)

export default TeamPage
