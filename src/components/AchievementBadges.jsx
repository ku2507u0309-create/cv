import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './AchievementBadges.css'

function AchievementBadges() {
  const [unlockedAchievements, setUnlockedAchievements] = useState([])

  const achievements = [
    { id: 1, title: 'Top Performer', icon: '⭐' },
    { id: 2, title: 'Hackathon Winner', icon: '🏆' },
    { id: 3, title: 'Open Source Contributor', icon: '💻' },
    { id: 4, title: 'Research Published', icon: '📚' },
    { id: 5, title: 'Technical Mentor', icon: '👨‍🏫' },
    { id: 6, title: 'Innovation Leader', icon: '🚀' }
  ]

  useEffect(() => {
    // Unlock achievements progressively
    achievements.forEach((achievement, index) => {
      setTimeout(() => {
        setUnlockedAchievements(prev => [...prev, achievement.id])
      }, index * 300)
    })
  }, [])

  return (
    <div className="achievement-badges">
      {achievements.map((achievement) => (
        <motion.div
          key={achievement.id}
          className={`badge ${unlockedAchievements.includes(achievement.id) ? 'unlocked' : 'locked'}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={unlockedAchievements.includes(achievement.id) ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px #00ffff' }}
        >
          <div className="badge-icon">{achievement.icon}</div>
          <p className="badge-title">{achievement.title}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default AchievementBadges
