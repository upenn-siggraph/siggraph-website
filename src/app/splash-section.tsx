'use client'

import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import Image, { StaticImageData } from 'next/image'
import { HiArrowRight } from 'react-icons/hi'
import { Euler, Vector3 } from 'three'

import InteractiveGraphics from '@/resources/image/interactive-graphics.svg'
import SiggraphLogo from '@/resources/image/upenn-siggraph-logo.svg'

const PhillyModel = dynamic(() => import('@/components/3d/philly'), {
  ssr: false,
})

function CameraRotation() {
  useFrame(({ camera }, delta) => {
    camera.rotateOnWorldAxis(new Vector3(0, 1, 0), -0.05 * delta)
  })
  return (
    <PerspectiveCamera
      makeDefault
      position={new Vector3(0, 15, 0)}
      rotation={new Euler(-0.15, -Math.PI * 0.5, 0, 'YXZ')}
    />
  )
}

export default function Splash() {
  return (
    <div>
      <nav className="flex select-none flex-row items-center py-5 px-4">
        <Image
          src={SiggraphLogo as StaticImageData}
          alt="UPenn Siggraph"
          width={300}
        />
      </nav>
      {/* this div is the dots */}
      <div
        style={{ backgroundImage: 'url(/image/design/bg_dots.svg)' }}
        className="absolute left-0 right-0 max-h-[1000px] min-h-[550px] border-t-[1px] border-b-[1px] border-neutral-600 bg-repeat [background-size:20px] [height:calc(100vh-120px)] [background-position:center_3px]"
      >
        {/* this div is the gradient from the top covering up the dots */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/100" />
        <Canvas>
          <CameraRotation />
          <PhillyModel />
        </Canvas>
        {/* this is the gradient from bottom covering the mesh to show the text. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
      </div>
      <section className="relative max-h-[1000px] min-h-[550px] [height:calc(100vh-120px)]">
        {/* content on top of canvas */}
        <div className="absolute inset-0 flex flex-col justify-end px-4 lg:justify-center">
          <Image
            src={InteractiveGraphics as StaticImageData}
            alt="Interactive Graphics Technology"
            className="w-auto select-none pr-4 sm:w-[32rem] md:w-[36rem] lg:mt-14 lg:mb-0 lg:w-[40rem] xl:w-[40rem]"
          />
          <div className="mb-14 mt-12 font-light tracking-wide text-neutral-100 lg:text-lg">
            <p className="max-w-prose">
              We are Penn&apos;s premier undergraduate computer graphics-focused
              club, for all things rendered offline to real-time.
            </p>
            <p className="mt-2 max-w-prose">
              Join us at social events, career-oriented panels, workshops, and
              tech demos.
            </p>
            <button
              type="button"
              onClick={() => {
                document
                  .querySelector('#find-us')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group mr-auto mt-6 block select-none rounded-full bg-gradient-to-r from-siggraph-1 via-siggraph-3 to-siggraph-4 p-1 text-left text-lg font-bold tracking-wide text-white transition"
            >
              <div className="flex items-center justify-center gap-2 rounded-full bg-black px-12 py-2 text-center transition-[margin,padding] group-hover:mx-4 group-hover:px-8">
                Find Us <HiArrowRight />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
