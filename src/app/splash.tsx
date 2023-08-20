'use client'

import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Euler, Vector3 } from 'three'
import Image, { StaticImageData } from 'next/image'
import { HiArrowRight } from 'react-icons/hi'

import { PhillyModel } from '../components/3d/philly'

import InteractiveGraphics from '@/resources/image/interactive-graphics.svg'

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
    <>
      {/* this div is the dots */}
      <div
        style={{ backgroundImage: 'url(/image/design/bg_dots.svg)' }}
        className="absolute left-0 right-0 max-h-[1000px] min-h-[600px] border-t-[1px] border-b-[1px] border-neutral-600 bg-repeat [background-size:20px] [height:calc(100vh-120px)] [background-position:center_3px]"
      >
        {/* this div is the gradient covering up the dots */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,1)]" />
        <Canvas>
          <CameraRotation />
          <PhillyModel />
        </Canvas>
      </div>
      <section className="relative max-h-[1000px] min-h-[600px] [height:calc(100vh-120px)]">
        {/* content on top of canvas */}
        <div className="absolute inset-0 flex flex-col justify-center px-2">
          <Image
            src={InteractiveGraphics as StaticImageData}
            alt="Interactive Graphics Technology"
            className="w-auto pr-4 sm:w-[32rem] md:w-[36rem] lg:w-[40rem] xl:w-[40rem]"
          />
          <p className="mt-8 font-light tracking-wide drop-shadow-sm">
            Enthralling tagline that also describes us well
          </p>
          <button
            type="button"
            className="mr-auto mt-3 block rounded-full bg-gradient-to-r from-siggraph-1 via-siggraph-3 to-siggraph-4 p-1 text-left font-medium uppercase tracking-[0.3em] hover:tracking-[0.4em]"
          >
            <div className="flex w-64 items-center justify-center gap-2 rounded-full bg-black px-5 py-2 text-center transition-all">
              Learn More <HiArrowRight />
            </div>
          </button>
        </div>
      </section>
    </>
  )
}
