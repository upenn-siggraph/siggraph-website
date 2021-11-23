export type PageRoute = {
  name: string;
  path: string;
}

const pages : Array<PageRoute> = [
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
