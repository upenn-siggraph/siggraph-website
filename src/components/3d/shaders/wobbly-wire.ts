import { shaderMaterial } from '@react-three/drei'

export const WobblyWireMaterial = shaderMaterial(
  { time: 0 },
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  /* glsl */ `
  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;
  void main() {
    gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
  }
`
)
