import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function CommandCenter3D() {
  const groupRef = useRef()
  const postsRef = useRef([])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((post, i) => {
        post.position.y += Math.sin(clock.elapsedTime * 2 + i) * 0.0005
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.6, 0.3, 32]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Core Glow Ring */}
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1, 0.05, 32, 100]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={1.2}
          wireframe={false}
        />
      </mesh>

      {/* Rotating Secondary Ring */}
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[1.5, 0.04, 32, 100]} />
        <meshStandardMaterial
          color="#0088ff"
          emissive="#0088ff"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* Support Posts */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2
        const x = Math.cos(angle) * 3
        const z = Math.sin(angle) * 3
        return (
          <mesh key={i} position={[x, 0, z]} castShadow>
            <cylinderGeometry args={[0.15, 0.2, 4, 16]} />
            <meshStandardMaterial
              color="#0088ff"
              emissive="#0088ff"
              emissiveIntensity={0.5}
              metalness={0.8}
            />
          </mesh>
        )
      })}

      {/* Connecting Beams */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2
        const nextAngle = ((i + 1) / 4) * Math.PI * 2
        const x1 = Math.cos(angle) * 3
        const z1 = Math.sin(angle) * 3
        const x2 = Math.cos(nextAngle) * 3
        const z2 = Math.sin(nextAngle) * 3
        
        return (
          <mesh key={`beam-${i}`} position={[(x1 + x2) / 2, 2, (z1 + z2) / 2]}>
            <boxGeometry args={[Math.hypot(x2 - x1, z2 - z1), 0.08, 0.08]} />
            <meshStandardMaterial
              color="#00ff88"
              emissive="#00ff88"
              emissiveIntensity={0.6}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default CommandCenter3D
