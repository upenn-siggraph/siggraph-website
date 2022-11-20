import { useEffect, useRef, useState } from 'react'
import { MenuAlt2Icon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'

import { useLockBody } from 'hooks/util/use-lock-body'
import { useBasePath } from 'hooks/util/use-base-path'

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Team',
    href: '/team',
  },
  {
    name: 'Events',
    href: '/events',
  },
]

const navShadow =
  '[box-shadow:0_-7px_12px_rgba(0,0,0,.5)] sm:[box-shadow:0_10px_12px_-17px_rgba(0,0,0,.5)]'

const navLinkStyle = 'block p-4 text-xl font-semibold inline-block w-auto'

const VideoBG = () => {
  const { getPath } = useBasePath()
  const videoRef = useRef<HTMLVideoElement>(null)

  const updateTime = () => {
    if (!videoRef.current) return
    videoRef.current.style.filter = `blur(7px) hue-rotate(${
      (Date.now() / 100) % 360
    }deg)`
  }

  useEffect(() => {
    updateTime()
    const i = setInterval(updateTime, 500)
    return () => {
      clearInterval(i)
    }
  }, [])

  return (
    <video
      autoPlay
      muted
      className="h-full min-h-[56.25vw] w-full min-w-[177.78vh]"
      ref={videoRef}
      loop
    >
      <source src={getPath('video/background.mp4')} />
    </video>
  )
}

export const Nav = () => {
  const [open, setOpen] = useState(false)
  const { getPath } = useBasePath()
  const { pathname, push } = useRouter()

  useLockBody(open)

  return (
    <nav className="sticky top-0 z-10">
      <div
        className={`mx-[-1rem] flex items-center bg-white dark:bg-black ${navShadow}`}
      >
        <button
          type="button"
          className={`z-[11] p-6 transition-[color] ${
            open ? 'text-white' : ''
          }`}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{`${
            open ? 'Close' : 'Open'
          } Navigation Menu`}</span>
          <MenuAlt2Icon className="h-5 w-5" />
        </button>
        <h2 className="select-none text-2xl font-extrabold">UPenn Siggraph</h2>
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
        <div className="container absolute inset-0 top-14 mx-auto select-none px-4">
          <h2 className="my-4 text-6xl font-black tracking-tight text-white drop-shadow">
            UPenn Siggraph
          </h2>
          <ul className="tracking-wide text-white drop-shadow">
            {pages.map(({ name, href }) => {
              const onPage = pathname === href
              return (
                <li
                  key={href}
                  className={`border-l-4 border-l-transparent ${
                    onPage ? 'border-l-white' : ''
                  }`}
                >
                  <button
                    type="button"
                    className={navLinkStyle}
                    tabIndex={0}
                    onKeyPress={async (evt) => {
                      await push(href)
                      if (evt.key === 'Enter') setOpen(false)
                    }}
                    onClick={async () => {
                      await push(href)
                      setOpen(false)
                    }}
                  >
                    {name}
                  </button>
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
