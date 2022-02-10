import { Container } from '../components/layout/common'
import Nav from '../components/layout/nav'
import TeamList from '../components/team/team-list'

const TeamPage = () => (
  <Container>
    <Nav />
    <h1 className="text-6xl font-black tracking-tight text-gray-100 dark:text-gray-900 mt-8 mb-12 drop-shadow self-center">
      {' '}
      Meet the Team{' '}
    </h1>
    <TeamList />
  </Container>
)

export default TeamPage
