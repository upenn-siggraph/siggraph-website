import { shaderMaterial } from '@react-three/drei'
import { Vector3 } from 'three'

export const WobblyWireMaterial = shaderMaterial(
  // TODO: modify and use this uniform
  { time: 0, color: new Vector3(1, 1, 1), cameraPos: new Vector3(0, 0, 0) },
  /* glsl */ `
  uniform vec3 cameraPos;
  uniform float time;
  varying float distance;
  varying float waveIntensity;
  varying float wave2Intensity;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    distance = length(position - cameraPos);
    float waveOffset = distance * 0.001 - time * 0.5;
    waveIntensity = smoothstep(0.95, 1., (sin(waveOffset) + 1.) * 0.5);
    wave2Intensity = smoothstep(0.1, 1., (sin(waveOffset + radians(180.) + 1.) * 0.5));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position + vec3(0, pow(waveIntensity, 8.) * 5., 0), 1.0);
  }
`,
  /* glsl */ `
  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;
  varying float distance;
  varying float waveIntensity;
  varying float wave2Intensity;

  void main() {
    // gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(time) + color, 1.0);
    // float distanceBasedWaveIntensity = clamp((waveIntensity * 0.8 + wave2Intensity * 0.5) * 1000. / clamp(distance, 1., 1000.), 0., 1.);
    gl_FragColor.rgba = vec4(color * (pow(waveIntensity, 4.) * 1. + pow(wave2Intensity, 2.) * 0.8), 1);
  }
`
)
