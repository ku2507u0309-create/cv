import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './LoadingScreen.css'

function LoadingScreen() {
  const [text, setText] = useState('')
  const fullText = 'INITIALIZING COMMAND CENTER...'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1))
        index++
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="loading-content">
        <div className="boot-text">{text}</div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <div className="scanlines"></div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
