import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function AdvancedFloor() {
  const gridRef = useRef()

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.children.forEach((line, i) => {
        line.material.opacity = 0.3 + Math.sin(clock.elapsedTime + i * 0.1) * 0.3
      })
    }
  })

  return (
    <group ref={gridRef}>
      {/* Main Platform */}
      <mesh position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial
          color="#0a0e27"
          metalness={0.8}
          roughness={0.2}
          emissive="#001a33"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Grid Lines - X axis */}
      {Array.from({ length: 31 }).map((_, i) => {
        const x = i - 15
        return (
          <mesh key={`x-${i}`} position={[x, -1.99, 0]}>
            <boxGeometry args={[0.02, 0.02, 30]} />
            <meshStandardMaterial
              color="#00ff88"
              emissive="#00ff88"
              emissiveIntensity={0.5}
              wireframe={false}
            />
          </mesh>
        )
      })}

      {/* Grid Lines - Z axis */}
      {Array.from({ length: 31 }).map((_, i) => {
        const z = i - 15
        return (
          <mesh key={`z-${i}`} position={[0, -1.99, z]}>
            <boxGeometry args={[30, 0.02, 0.02]} />
            <meshStandardMaterial
              color="#0088ff"
              emissive="#0088ff"
              emissiveIntensity={0.5}
              wireframe={false}
            />
          </mesh>
        )
      })}

      {/* Center Rings */}
      <mesh position={[0, -1.98, 0]}>
        <torusGeometry args={[5, 0.08, 32, 100]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.6}
        />
      </mesh>

      <mesh position={[0, -1.98, 0]}>
        <torusGeometry args={[10, 0.06, 32, 100]} />
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ffaa00"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

export default AdvancedFloor
