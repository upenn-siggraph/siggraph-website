'use client'

import { Clone, Float, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

import meta from '@/data/meta.json'

export default function Cubes() {
  const { scene } = useGLTF(`${meta.basePath}/3d/cubes.glb`)

  return (
    <Canvas camera={{ position: [0, 0, 2], zoom: 1.3 }}>
      <directionalLight position={[2, 2, 4]} intensity={2} />
      {scene.children.map((child) => (
        <Float
          key={child.name}
          floatingRange={[-0.1, 0.1]}
          rotationIntensity={2}
          position={child.position}
        >
          <Clone object={child} position={[0, 0, 0]} />
        </Float>
      ))}
      <EffectComposer>
        <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={200} />
      </EffectComposer>
    </Canvas>
  )
}

useGLTF.preload(`${meta.basePath}/3d/cubes.glb`)
