import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './ProfileHologram.css'

function ProfileHologram() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate floating particles around profile
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.cos((i / 20) * Math.PI * 2) * 100,
      y: Math.sin((i / 20) * Math.PI * 2) * 100,
      delay: i * 0.05
    }))
    setParticles(newParticles)
  }, [])

  return (
    <motion.div 
      className="profile-hologram"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hologram-pod">
        <div className="profile-image-container">
          <img 
            src="/profile.jpg" 
            alt="Priya Patel" 
            className="profile-image"
          />
          <div className="hologram-overlay"></div>
        </div>

        <div className="profile-info">
          <h1 className="profile-name">PRIYA PATEL</h1>
          <p className="profile-title">COMPUTER SCIENCE ENGINEER</p>
          <p className="profile-location">GUJARAT, INDIA</p>
        </div>

        {/* Orbiting particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="orbit-particle"
            animate={{
              x: particle.x,
              y: particle.y
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
          ></motion.div>
        ))}
      </div>

      {/* Rotating circles */}
      <motion.div 
        className="hologram-ring ring-1"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div 
        className="hologram-ring ring-2"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  )
}

export default ProfileHologram
