import { useState } from 'react'
import { motion } from 'framer-motion'
import './AdvancedUI.css'

function AdvancedUI() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = {
    about: 'Priya Patel - Computer Science Engineer | AI/ML Specialist | Full Stack Developer',
    skills: 'React • Three.js • GSAP • Node.js • Python • C++ • WebGL • Machine Learning',
    projects: '15+ Projects | 8 Hackathon Wins | 200+ Open Source Contributions',
    experience: 'Software Engineer • Senior Developer • Technical Lead • AI Research'
  }

  return (
    <div className="advanced-ui">
      {/* Holographic Header */}
      <motion.div
        className="holographic-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title">PRIYA PATEL</h1>
        <p className="subtitle">AI COMMAND CENTER</p>
      </motion.div>

      {/* Navigation Menu */}
      <motion.div
        className="nav-menu"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {Object.keys(sections).map((key) => (
          <motion.button
            key={key}
            className={`nav-btn ${activeSection === key ? 'active' : ''}`}
            onClick={() => setActiveSection(key)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {key.toUpperCase()}
          </motion.button>
        ))}
      </motion.div>

      {/* Content Display */}
      <motion.div
        className="content-display"
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>{sections[activeSection]}</p>
      </motion.div>

      {/* Status Bar */}
      <motion.div
        className="status-bar"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="status-item">⬤ NEURAL INTERFACE: ACTIVE</span>
        <span className="status-item">⬤ HOLOGRAM: ONLINE</span>
        <span className="status-item">⬤ AI ASSISTANT: READY</span>
      </motion.div>
    </div>
  )
}

export default AdvancedUI
