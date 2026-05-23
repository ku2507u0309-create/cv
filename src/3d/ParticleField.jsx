import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField({ count = 2000 }) {
  const pointsRef = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40

      const color = Math.random()
      if (color < 0.33) {
        colors[i * 3] = 0 // R
        colors[i * 3 + 1] = 1 // G
        colors[i * 3 + 2] = 0.5 // B
      } else if (color < 0.66) {
        colors[i * 3] = 0
        colors[i * 3 + 1] = 1
        colors[i * 3 + 2] = 1
      } else {
        colors[i * 3] = 0
        colors[i * 3 + 1] = 0.5
        colors[i * 3 + 2] = 1
      }

      sizes[i] = Math.random() * 0.8 + 0.2
    }

    return { positions, colors, sizes }
  }, [count])

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001
      pointsRef.current.rotation.y += 0.0002
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        vertexColors={true}
        sizeRange={[0, 10]}
        depthWrite={false}
      />
    </points>
  )
}

export default ParticleField
