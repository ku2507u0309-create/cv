import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import './AlienAIAssistant.css'
import AudioManager from '../utils/AudioManager'

function AlienAIAssistant() {
  const [narration, setNarration] = useState('')
  const [isActive, setIsActive] = useState(false)
  const audioRef = useRef(AudioManager.getInstance())
  const textRef = useRef('')

  const narrativeSequence = [
    'SCANNING COMPLETE.',
    'IDENTITY CONFIRMED.',
    'PRIYA PATEL.',
    'COMPUTER SCIENCE ENGINEER.',
    'INNOVATOR. BUILDER. VISIONARY.',
    'DISPLAYING MISSION RECORDS.'
  ]

  useEffect(() => {
    setIsActive(true)
    let sequenceIndex = 0

    const playSequence = () => {
      if (sequenceIndex < narrativeSequence.length) {
        const text = narrativeSequence[sequenceIndex]
        typeText(text)
        audioRef.current.playSoundEffect('hologramActivate')
        sequenceIndex++
        setTimeout(playSequence, 2000)
      }
    }

    playSequence()
  }, [])

  const typeText = (text) => {
    setNarration(text)
  }

  return (
    <motion.div
      className="alien-ai-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* AI Entity Hologram */}
      <div className="ai-hologram">
        <div className="ai-core"></div>
        <div className="ai-pulse"></div>
        <div className="ai-waves">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="wave" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>

      {/* Narration Display */}
      <div className="narration-box">
        <p className="narration-text">{narration}</p>
        <div className="text-cursor"></div>
      </div>

      {/* Sound Wave Visualization */}
      <div className="sound-wave">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="wave-bar"
            style={{
              height: `${20 + Math.sin(i / 20 * Math.PI * 2) * 30}%`,
              animationDelay: `${i * 0.05}s`
            }}
          ></div>
        ))}
      </div>
    </motion.div>
  )
}

export default AlienAIAssistant
