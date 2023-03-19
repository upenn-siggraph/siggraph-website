import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Euler, Vector3 } from 'three'
import Image from 'next/image'

import { PhillyModel } from './3d/philly'

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
        className="absolute left-0 right-0 max-h-[1000px] min-h-[600px] border-t-[1px] border-neutral-600 bg-repeat [background-size:20px] [height:calc(100vh-120px)] [background-position:center_3px]"
      >
        {/* this div is the gradient covering up the dots */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,1)]" />
      </div>
      <section className="relative max-h-[1000px] min-h-[600px] [height:calc(100vh-120px)]">
        <Canvas>
          <CameraRotation />
          <PhillyModel />
        </Canvas>
        {/* content on top of canvas */}
        <div className="absolute inset-0 flex flex-col justify-center px-2">
          <Image src={InteractiveGraphics} />
          <p className="mt-8 font-light tracking-wide drop-shadow-sm">
            Enthralling tagline that also describes us well
          </p>
          <button
            type="button"
            className="mr-auto mt-3 block rounded-full border-4 border-red-500 bg-black px-6 py-2 text-left font-medium uppercase tracking-[0.3em]"
          >
            Learn More →
          </button>
        </div>
      </section>
    </>
  )
}
