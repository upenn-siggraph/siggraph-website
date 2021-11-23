import React from 'react'
import { Link } from 'react-router-dom'
import pages, { PageRoute } from '../pages/pages'

interface NavButtonProps {
  pageRoute: PageRoute
}

const NavButton = ({ pageRoute } : NavButtonProps) => {
  const { name, path } = pageRoute
  return (
    <Link
      to={path}
      className="px-3 py-2 text-gray-text-secondary uppercase text-base
        lg:px-4 lg:py-4
        font-display tracking-widest hover:text-gray-text-primary"
    >
      {name}
    </Link>
  )
}

const Navbar = () => (
  <nav className="flex sticky top-0 bg-gray-base z-10">
    {pages.map((pageRoute) => (
      <NavButton pageRoute={pageRoute} key={pageRoute.path} />
    ))}
  </nav>
)

export default Navbar
