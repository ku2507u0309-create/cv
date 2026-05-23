import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function DataVisualization3D() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((sphere, i) => {
        sphere.position.y += Math.sin(clock.elapsedTime * 1.5 + i) * 0.005
        sphere.rotation.x += 0.003
        sphere.rotation.y += 0.005
      })
    }
  })

  const skills = [
    { name: 'React', value: 95, color: '#61dafb' },
    { name: 'Three.js', value: 90, color: '#ffb13d' },
    { name: 'Node.js', value: 88, color: '#68a063' },
    { name: 'AI/ML', value: 85, color: '#ff6b6b' },
    { name: 'WebGL', value: 87, color: '#00ffff' },
    { name: 'GSAP', value: 92, color: '#00ff88' }
  ]

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2
        const x = Math.cos(angle) * 6
        const z = Math.sin(angle) * 6
        const scale = skill.value / 100

        return (
          <group key={skill.name} position={[x, 2, z]}>
            {/* Sphere */}
            <mesh>
              <sphereGeometry args={[0.4 * scale, 32, 32]} />
              <meshStandardMaterial
                color={skill.color}
                emissive={skill.color}
                emissiveIntensity={0.7}
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>

            {/* Label Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.5 * scale, 0.03, 16, 32]} />
              <meshStandardMaterial
                color={skill.color}
                emissive={skill.color}
                emissiveIntensity={0.8}
              />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

export default DataVisualization3D
