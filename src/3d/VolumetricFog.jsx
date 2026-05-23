import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function VolumetricFog() {
  const fogRef = useRef()

  useFrame(() => {
    if (!fogRef.current) {
      return
    }
    // Subtle fog animation
  })

  return (
    <mesh ref={fogRef}>
      <boxGeometry args={[100, 100, 100]} />
      <meshStandardMaterial
        transparent
        opacity={0.05}
        color="#0088ff"
        emissive="#0088ff"
        emissiveIntensity={0.1}
        wireframe={false}
      />
    </mesh>
  )
}

export default VolumetricFog
