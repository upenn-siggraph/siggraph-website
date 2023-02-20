import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { PhillyModel } from './3d/philly'

export default function Splash() {
  return (
    <section className="h-screen max-h-[900px]">
      <Canvas>
        <PerspectiveCamera />
        <PhillyModel />
      </Canvas>
    </section>
  )
}
