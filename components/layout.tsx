import { Container } from './layout/common'
import Nav from './layout/nav'

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
