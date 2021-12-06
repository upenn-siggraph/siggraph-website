export type PageRoute = {
  name: string
  path: string
}

const pages : PageRoute[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
]

export default pages
