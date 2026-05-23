import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import './WorldMapScene.css'
import AudioManager from '../utils/AudioManager'

function WorldMapScene() {
  const [scanComplete, setScanComplete] = useState(false)
  const [targetLocked, setTargetLocked] = useState(false)
  const mapRef = useRef(null)
  const audioRef = useRef(AudioManager.getInstance())

  useEffect(() => {
    // Trigger radar pulse animation
    audioRef.current.playSoundEffect('radarPulse')
    
    const timeline = gsap.timeline()
    
    // Radar scanning animation
    timeline.to('.radar-pulse', {
      r: 400,
      opacity: 0,
      duration: 2,
      repeat: 2
    }, 0)

    // Country highlighting
    timeline.to('.country-dot', {
      opacity: 0.8,
      duration: 0.3,
      stagger: 0.1
    }, 0)

    // Gujarat target lock
    timeline.to('.target-location', {
      scale: 1.5,
      opacity: 1,
      duration: 1.5
    }, 1.5)

    timeline.to('.target-rings', {
      r: 80,
      opacity: 0,
      duration: 1,
      repeat: 2
    }, 1.5)

    // Completion sequence
    timeline.call(() => {
      setScanComplete(true)
      audioRef.current.playSoundEffect('targetLocked')
    }, null, 4)

    timeline.to('.target-location', {
      scale: 2,
      duration: 0.5
    }, 4)

    timeline.call(() => {
      setTargetLocked(true)
    }, null, 4.5)

    return () => timeline.kill()
  }, [])

  return (
    <motion.div 
      className="world-map-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg className="world-map" ref={mapRef} viewBox="0 0 960 600">
        {/* World map background */}
        <defs>
          <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Animated countries */}
        {[
          { id: 'india', x: 520, y: 300, name: 'INDIA' },
          { id: 'usa', x: 200, y: 250, name: 'USA' },
          { id: 'europe', x: 400, y: 200, name: 'EUROPE' },
          { id: 'asia', x: 600, y: 200, name: 'ASIA' },
          { id: 'africa', x: 450, y: 400, name: 'AFRICA' }
        ].map((country) => (
          <g key={country.id}>
            <circle
              className="country-dot"
              cx={country.x}
              cy={country.y}
              r="8"
              fill="#00ff88"
              opacity="0"
            />
            <circle
              cx={country.x}
              cy={country.y}
              r="20"
              fill="none"
              stroke="#00ff88"
              strokeWidth="1"
              opacity="0.3"
            />
          </g>
        ))}

        {/* Target location - Gujarat */}
        <g className="target-location" opacity="0" transform="translate(520, 300)">
          <circle r="15" fill="#ff00ff" opacity="0.8" />
          <circle r="25" fill="none" stroke="#ff00ff" strokeWidth="2" opacity="0.6" />
          <circle className="target-rings" r="35" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0" />
        </g>

        {/* Radar pulse */}
        <circle
          className="radar-pulse"
          cx="520"
          cy="300"
          r="10"
          fill="none"
          stroke="#00ff88"
          strokeWidth="2"
          opacity="0"
        />

        {/* Scanning lines */}
        <g className="scan-lines" opacity="0.3">
          <line x1="0" y1="0" x2="960" y2="600" stroke="#0088ff" strokeWidth="1" />
          <line x1="960" y1="0" x2="0" y2="600" stroke="#0088ff" strokeWidth="1" />
        </g>
      </svg>

      {/* HUD Text */}
      <motion.div
        className="hud-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="scan-status">SCANNING GLOBAL NETWORK...</p>
        {scanComplete && (
          <motion.p
            className="target-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            TARGET LOCATED: GUJARAT, INDIA
          </motion.p>
        )}
        {targetLocked && (
          <motion.p
            className="lock-status"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            SYSTEM LOCKED ON TARGET
          </motion.p>
        )}
      </motion.div>

      {/* Holographic grid */}
      <div className="map-grid"></div>
    </motion.div>
  )
}

export default WorldMapScene
