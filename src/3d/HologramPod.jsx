import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function HologramPod({ position = [0, 1, 0] }) {
  const groupRef = useRef()
  const outerRingRef = useRef()
  const innerRingRef = useRef()

  useFrame(({ clock }) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += 0.01
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x -= 0.015
    }
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(clock.elapsedTime) * 0.2
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Central Sphere */}
      <mesh castShadow>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.7}
          metalness={0.6}
          roughness={0.4}
          wireframe={false}
        />
      </mesh>

      {/* Outer Rotating Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[0.9, 0.06, 32, 100]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Inner Counter-Rotating Ring */}
      <mesh ref={innerRingRef}>
        <torusGeometry args={[1.2, 0.05, 32, 100]} />
        <meshStandardMaterial
          color="#0088ff"
          emissive="#0088ff"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Orbital Particles */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2
        const radius = 1.5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#ff00ff"
              emissive="#ff00ff"
              emissiveIntensity={0.9}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default HologramPod
