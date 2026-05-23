import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Bloom, DepthOfField, Noise } from '@react-three/postprocessing'
import * as THREE from 'three'

function PostProcessing() {
  return (
    <>
      <Bloom
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        height={300}
        opacity={1.2}
      />
      <DepthOfField
        focusDistance={0.01}
        focalLength={0.02}
        bokehScale={5}
      />
      <Noise opacity={0.05} />
    </>
  )
}

export default PostProcessing
