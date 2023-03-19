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
    float waveOffset = distance * 0.01 - time * 1. - 0.2;
    waveIntensity = smoothstep(0.3, 1., (sin(waveOffset) + 1.) * 0.5);
    wave2Intensity = smoothstep(0., 1., (sin(waveOffset + radians(180.) + 1.) * 0.5));
    vec3 actualPosition = position; // + vec3(0, pow(waveIntensity, 8.) * 5., 0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(actualPosition, 1.0);
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
    float distFactor = clamp(15. / distance, 0., 1.);
    float intensity = (pow(waveIntensity, 2.) + pow(wave2Intensity, 2.) * 1.) * distFactor;
    gl_FragColor.rgba = vec4(vec3(1.5) * intensity, clamp(intensity, 0., 1.));
  }
`
)
