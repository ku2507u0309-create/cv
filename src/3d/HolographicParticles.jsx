import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function HolographicParticles() {
  const particlesRef = useRef()
  const particleCount = 1000

  // Create particle system
  const particles = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount * 3; i += 3) {
    particles[i] = (Math.random() - 0.5) * 30
    particles[i + 1] = Math.random() * 10
    particles[i + 2] = (Math.random() - 0.5) * 30
  }

  useFrame(() => {
    if (!particlesRef.current) return
    
    const positions = particlesRef.current.geometry.attributes.position.array
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += 0.02
      
      if (positions[i + 1] > 10) {
        positions[i + 1] = 0
      }
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00ff88"
        emissive="#0088ff"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  )
}

export default HolographicParticles
