import { Container } from './common'
import { Nav } from './nav'

export interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Nav />
    {children}
  </Container>
)
