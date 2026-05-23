import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Environment } from '@react-three/drei'
import { MotionConfig } from 'framer-motion'
import CinematicScene from './scenes/CinematicScene'
import AdvancedUI from './components/AdvancedUI'
import BootSequence from './components/BootSequence'
import AudioManager from './utils/AudioManager'
import './styles/app.css'

function App() {
  const [isBooting, setIsBooting] = useState(true)
  const [showUI, setShowUI] = useState(false)

  useEffect(() => {
    const audio = AudioManager.getInstance()
    audio.initialize()

    const bootTimer = setTimeout(() => {
      setIsBooting(false)
      setShowUI(true)
      audio.playSoundEffect('systemBoot')
    }, 4500)

    return () => clearTimeout(bootTimer)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-container">
        {isBooting && <BootSequence />}

        <Canvas
          camera={{
            position: [0, 3, 12],
            fov: 60,
            near: 0.1,
            far: 2000
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            pixelRatio: Math.min(2, window.devicePixelRatio)
          }}
          className="canvas"
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.4} color="#0088ff" />
            <directionalLight position={[10, 10, 5]} intensity={1.2} color="#00ff88" castShadow />
            <pointLight position={[-8, 5, 8]} intensity={0.8} color="#0088ff" />
            <pointLight position={[8, 3, -8]} intensity={0.6} color="#ff00ff" />
            
            {/* Environment */}
            <Environment preset="night" />
            
            {/* Main Scene */}
            <CinematicScene />
            
            {/* Controls */}
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              autoRotate={true}
              autoRotateSpeed={0.5}
              maxDistance={30}
              minDistance={5}
            />
            
            <Preload all />
          </Suspense>
        </Canvas>

        {showUI && <AdvancedUI />}
      </div>
    </MotionConfig>
  )
}

export default App
