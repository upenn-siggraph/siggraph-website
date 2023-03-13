import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Euler, Vector3 } from 'three'

import { PhillyModel } from './3d/philly'

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
      <div
        style={{ backgroundImage: 'url(/image/design/bg_dots.svg)' }}
        className="absolute left-0 right-0 h-screen max-h-[1000px] min-h-[600px] bg-repeat [background-size:20px]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,1)]" />
      </div>
      <section className="relative h-screen max-h-[1000px] min-h-[600px]">
        <Canvas>
          <CameraRotation />
          <PhillyModel />
        </Canvas>
      </section>
    </>
  )
}
