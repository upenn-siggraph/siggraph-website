import { Container } from './common'
import Nav from './nav'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Nav />
    {children}
  </Container>
)

export default Layout
