import Link from 'next/link'
import { useState } from 'react'

import { MenuAlt2Icon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'
import useLockBody from '../../hooks/useLockBody'
import useBasePath from '../../hooks/useBasePath'
import VideoBG from './video-bg'

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Team',
    href: '/team',
  },
]

const navShadow =
  '[box-shadow:0_-7px_12px_rgba(0,0,0,.5)] sm:[box-shadow:0_10px_12px_-17px_rgba(0,0,0,.5)]'

const navLinkStyle = 'block p-4 text-xl font-semibold inline-block w-auto'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const { getPath } = useBasePath()
  const { pathname } = useRouter()

  useLockBody(open)

  return (
    <nav className="sticky top-0 z-10">
      <div
        className={`mx-[-1rem] bg-white dark:bg-gray-100 flex items-center ${navShadow}`}
      >
        <button
          type="button"
          className={`p-6 z-[11] transition-[color] ${
            open ? 'text-white' : ''
          }`}
          onClick={() => setOpen((o) => !o)}
          name={`${open ? 'Close' : 'Open'} Navigation Menu`}
        >
          <MenuAlt2Icon className="w-5 h-5" />
        </button>
        <h2 className="font-extrabold text-2xl">UPenn Siggraph</h2>
      </div>
      <Transition
        show={open}
        className="fixed inset-0 h-screen w-full overflow-hidden
            bg-gray-300 [clip-path:polygon(0_100%,100%_100%,100%_0,0_0)]"
        enter="transition-height duration-300"
        enterFrom="[clip-path:polygon(0_0,100%_0,100%_0,0_0)]"
        leave="transition-[clip-path] duration-300"
        leaveTo="[clip-path:polygon(0_100%,100%_100%,100%_100%,0_100%)]"
      >
        <VideoBG />
        <div className="absolute inset-0 container mx-auto px-4 top-14">
          <h2 className="font-black text-white tracking-tight text-6xl my-4 drop-shadow">
            UPenn Siggraph
          </h2>
          <ul className="text-white tracking-wide drop-shadow">
            {pages.map(({ name, href }) => {
              const onPage = pathname === href
              return (
                <li
                  key={href}
                  className={`border-l-4 border-l-transparent ${
                    onPage ? 'border-l-white' : ''
                  }`}
                >
                  <Link href={href}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      className={navLinkStyle}
                      role="link"
                      tabIndex={0}
                      onKeyPress={(evt) => {
                        if (evt.key === 'Enter') setOpen(false)
                      }}
                      onClick={() => {
                        setOpen(false)
                      }}
                    >
                      {name}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Transition>
      <video className="hidden" muted>
        <source src={getPath('video/background.mp4')} />
      </video>
    </nav>
  )
}

export default Nav
