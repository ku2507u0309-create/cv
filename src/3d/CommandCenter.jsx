import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function CommandCenter() {
  const groupRef = useRef()
  const floorRef = useRef()
  const wallRef = useRef()

  useEffect(() => {
    // Create procedural command center geometry
    // This will be enhanced with the background image texture
  }, [])

  useFrame(() => {
    if (floorRef.current) {
      // Animate floor grid glow
      floorRef.current.material.emissiveIntensity = 0.5 + Math.sin(Date.now() * 0.002) * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Floor Grid */}
      <mesh 
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20, 32, 32]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#0088ff"
          emissiveIntensity={0.3}
          wireframe={false}
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>

      {/* Neon Grid Lines */}
      {Array.from({ length: 21 }).map((_, i) => (
        <lineSegments key={`grid-x-${i}`} position={[i - 10, 0.01, -10]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, 0, 0, 20])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00ff88" linewidth={2} />
        </lineSegments>
      ))}

      {/* Command Center Panels - Left */}
      <mesh position={[-8, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial
          color="#000a1a"
          emissive="#0088ff"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Command Center Panels - Right */}
      <mesh position={[8, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 3, 4]} />
        <meshStandardMaterial
          color="#000a1a"
          emissive="#0088ff"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Central Control Station */}
      <mesh position={[0, 0.8, -3]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 2.5, 1.6, 32]} />
        <meshStandardMaterial
          color="#1a0f2e"
          emissive="#ff00ff"
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* Holographic projection area - back wall */}
      <mesh position={[0, 3, -8]} castShadow receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial
          color="#0a1a3a"
          emissive="#00ffff"
          emissiveIntensity={0.3}
          roughness={0.5}
          metalness={0.3}
          wireframe={false}
        />
      </mesh>
    </group>
  )
}

export default CommandCenter
