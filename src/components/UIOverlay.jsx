import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import WorldMapScene from '../scenes/WorldMapScene'
import NavigationMenu from './NavigationMenu'
import ProfileHologram from './ProfileHologram'
import ContentSection from './ContentSection'
import './UIOverlay.css'

function UIOverlay({ currentScene }) {
  const [activeSection, setActiveSection] = useState('activation')
  const [showContent, setShowContent] = useState(false)

  const menuItems = [
    'About',
    'Skills',
    'Projects',
    'Experience',
    'Education',
    'Certifications',
    'Achievements',
    'Contact'
  ]

  return (
    <div className="ui-overlay">
      {/* World Map Scanning Scene */}
      {activeSection === 'activation' && <WorldMapScene />}

      {/* Profile Hologram Display */}
      {activeSection !== 'activation' && <ProfileHologram />}

      {/* Content Sections */}
      {activeSection !== 'activation' && (
        <motion.div 
          className="content-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContentSection section={activeSection} />
        </motion.div>
      )}

      {/* Navigation Menu */}
      <NavigationMenu 
        items={menuItems}
        activeItem={activeSection}
        onSelect={(item) => {
          setActiveSection(item.toLowerCase())
          setShowContent(true)
        }}
      />

      {/* Holographic Grid Background */}
      <div className="holographic-grid"></div>
    </div>
  )
}

export default UIOverlay
