import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function AdvancedLighting() {
  const lightRef = useRef()

  useFrame(() => {
    if (!lightRef.current) return
    // Dynamic lighting based on user interactions
    lightRef.current.intensity = 0.6 + Math.sin(Date.now() * 0.001) * 0.2
  })

  return (
    <>
      {/* Key light */}
      <directionalLight
        ref={lightRef}
        position={[10, 10, 5]}
        intensity={0.8}
        color="#00ff88"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill lights */}
      <pointLight position={[-8, 5, 8]} intensity={0.5} color="#0088ff" />
      <pointLight position={[8, 3, -8]} intensity={0.4} color="#ff00ff" />
      <pointLight position={[0, 2, 10]} intensity={0.3} color="#ffaa00" />

      {/* Ambient fill */}
      <ambientLight intensity={0.3} color="#0088ff" />
    </>
  )
}

export default AdvancedLighting
