import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Camera, Euler, PerspectiveCamera as PCam, Vector3 } from 'three'

import { PhillyModel } from './3d/philly'

function CameraRotation() {
  useFrame(({ camera }, delta) => {
    camera.rotateOnWorldAxis(new Vector3(0, 1, 0), 0.1 * delta)
  })
  return (
    <PerspectiveCamera
      makeDefault
      position={new Vector3(80, 20, 0)}
      rotation={new Euler(-0.15, 0, 0)}
    />
  )
}

export default function Splash() {
  return (
    <section className="h-screen max-h-[1000px] min-h-[600px]">
      <Canvas>
        <CameraRotation />
        <PhillyModel />
      </Canvas>
    </section>
  )
}
