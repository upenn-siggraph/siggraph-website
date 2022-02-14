import Head from 'next/head'
import TeamList from '../components/team/team-list'

const TeamPage = () => (
  <>
    <Head>
      <title>Siggraph UPenn - Meet the Team</title>
      <meta
        name="description"
        content="Meet UPenn Siggraph's dedicated team of students that are deeply
        passionate about interactive computer graphics."
      />
    </Head>
    <h1 className="text-6xl font-black tracking-tight text-gray-100 dark:text-gray-900 mt-8 mb-12 drop-shadow self-center">
      Meet the Team
    </h1>
    <TeamList />
  </>
)

export default TeamPage
