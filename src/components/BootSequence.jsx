import { motion } from 'framer-motion'
import './BootSequence.css'

function BootSequence() {
  return (
    <motion.div
      className="boot-sequence"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="boot-container">
        <motion.div
          className="boot-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <h1>SYSTEM INITIALIZING...</h1>
        </motion.div>

        <motion.div
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 4.5, ease: 'easeInOut' }}
        />

        <motion.div
          className="boot-lines"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          <p>&gt; BOOTING NEURAL INTERFACE...</p>
          <p>&gt; INITIALIZING HOLOGRAPHIC DISPLAY...</p>
          <p>&gt; ACTIVATING AI ASSISTANT...</p>
          <p>&gt; LOADING USER PROFILE DATA...</p>
          <p>&gt; ESTABLISHING SECURE CONNECTION...</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BootSequence
