import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { MotionConfig } from 'framer-motion'
import CommandCenterScene from './scenes/CommandCenterScene'
import UIOverlay from './components/UIOverlay'
import LoadingScreen from './components/LoadingScreen'
import AudioManager from './utils/AudioManager'
import { useSceneStore } from './store/sceneStore'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [audioInitialized, setAudioInitialized] = useState(false)
  const { currentScene } = useSceneStore()

  useEffect(() => {
    // Initialize audio manager
    const audio = AudioManager.getInstance()
    audio.initialize()
    setAudioInitialized(true)

    // Simulate system boot sequence
    const bootTimer = setTimeout(() => {
      setIsLoading(false)
      audio.playSoundEffect('systemBoot')
    }, 3000)

    return () => clearTimeout(bootTimer)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-container">
        {isLoading && <LoadingScreen />}
        
        <Canvas
          camera={{
            position: [0, 2, 8],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <CommandCenterScene />
            <Preload all />
          </Suspense>
        </Canvas>

        {!isLoading && <UIOverlay currentScene={currentScene} />}
      </div>
    </MotionConfig>
  )
}

export default App
