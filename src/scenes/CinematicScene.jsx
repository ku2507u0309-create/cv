import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'
import CommandCenter3D from '../3d/CommandCenter3D'
import HologramPod from '../3d/HologramPod'
import ParticleField from '../3d/ParticleField'
import AdvancedFloor from '../3d/AdvancedFloor'
import DataVisualization3D from '../3d/DataVisualization3D'

function CinematicScene() {
  const groupRef = useRef()
  const particlesRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0002
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {/* Advanced Floor with Grid */}
      <AdvancedFloor />

      {/* Command Center Structure */}
      <CommandCenter3D />

      {/* Holographic Pod */}
      <HologramPod position={[0, 1, 0]} />

      {/* Particle Field */}
      <group ref={particlesRef}>
        <ParticleField count={2000} />
      </group>

      {/* Data Visualization Spheres */}
      <DataVisualization3D />

      {/* Atmospheric Fog */}
      <fog attach="fog" args={['#0a0e27', 5, 50]} />
    </group>
  )
}

export default CinematicScene
