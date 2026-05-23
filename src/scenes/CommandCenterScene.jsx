import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import CommandCenter from '../3d/CommandCenter'
import HolographicParticles from '../3d/HolographicParticles'
import VolumetricFog from '../3d/VolumetricFog'
import { useSceneStore } from '../store/sceneStore'
import AudioManager from '../utils/AudioManager'

function CommandCenterScene() {
  const { camera, scene } = useThree()
  const cameraRef = useRef()
  const { currentScene } = useSceneStore()
  const audioRef = useRef(null)

  useEffect(() => {
    // Setup initial cinematic camera position
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 2, 8)
      cameraRef.current.lookAt(0, 1, 0)
    }
  }, [])

  useFrame(() => {
    if (!cameraRef.current) return
    
    // Subtle camera movements for cinematic feel
    cameraRef.current.position.x += Math.sin(Date.now() * 0.0001) * 0.001
    cameraRef.current.position.y += Math.cos(Date.now() * 0.00008) * 0.0005
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault />
      
      {/* Lighting setup for cinematic atmosphere */}
      <ambientLight intensity={0.4} color="#0088ff" />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.8} 
        color="#00ff88"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 3, 5]} intensity={0.6} color="#ff00ff" />
      <pointLight position={[5, 2, -5]} intensity={0.5} color="#ffaa00" />
      
      {/* Environment and atmosphere */}
      <Environment preset="warehouse" />
      <VolumetricFog />
      
      {/* Main 3D Command Center */}
      <CommandCenter />
      
      {/* Holographic particles and effects */}
      <HolographicParticles />
      
      {/* Fog effect for depth */}
      <fog attach="fog" args={['#0a0e27', 5, 50]} />
    </>
  )
}

export default CommandCenterScene
