import Link from 'next/link'
import { useState } from 'react'

import { MenuAlt2Icon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'
import useLockBody from '../../hooks/useLockBody'

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

const Nav = () => {
  const [open, setOpen] = useState(false)

  const { pathname } = useRouter()

  useLockBody(open)

  return (
    <nav className="sticky top-0 z-10">
      <div
        className={`mx-[-1rem] bg-white dark:bg-gray-100 flex items-center ${navShadow}`}
      >
        <button
          type="button"
          className={`p-6 z-[11] ${open ? 'text-white' : ''}`}
          onClick={() => setOpen((o) => !o)}
          name={`${open ? 'Close' : 'Open'} Navigation Menu`}
        >
          <MenuAlt2Icon className="w-5 h-5" />
        </button>
        <h2 className="font-extrabold text-2xl">Siggraph UPenn</h2>
      </div>
      <Transition show={open}>
        <Transition.Child
          className="fixed inset-0 bg-logo-gradient-3 h-screen w-full"
          enter="transition-height duration-300"
          enterFrom="h-[0vh]"
          leave="transition-height duration-300 top-auto"
          leaveTo="h-[0vh]"
        />
        <Transition.Child
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          leave="transition-opacity duration-100"
          leaveTo="opacity-0"
        >
          <ul className="fixed text-white">
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
                      className={`block p-4 text-xl font-semibold ${
                        onPage ? '' : ''
                      }`}
                    >
                      {name}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Transition.Child>
      </Transition>
    </nav>
  )
}

export default Nav
