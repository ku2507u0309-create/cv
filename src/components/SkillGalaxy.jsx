import { useState } from 'react'
import { motion } from 'framer-motion'
import './SkillGalaxy.css'

function SkillGalaxy() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const skills = [
    { name: 'C++', proficiency: 95, x: 0, y: -80 },
    { name: 'Python', proficiency: 90, x: 60, y: -50 },
    { name: 'JavaScript', proficiency: 92, x: 80, y: 0 },
    { name: 'React', proficiency: 88, x: 60, y: 50 },
    { name: 'Three.js', proficiency: 85, x: 0, y: 80 },
    { name: 'AI/ML', proficiency: 87, x: -60, y: 50 },
    { name: 'Web Dev', proficiency: 90, x: -80, y: 0 },
    { name: 'Problem Solving', proficiency: 98, x: -60, y: -50 }
  ]

  return (
    <motion.div
      className="skill-galaxy"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Central sun */}
      <div className="galaxy-center"></div>

      {/* Orbiting skills */}
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="skill-planet"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          style={{
            '--x': `${skill.x}px`,
            '--y': `${skill.y}px`
          }}
          onHoverStart={() => setSelectedSkill(skill)}
          onHoverEnd={() => setSelectedSkill(null)}
        >
          <motion.div
            className="planet-core"
            animate={{
              boxShadow: selectedSkill?.name === skill.name
                ? [`0 0 20px #00ffff`, `0 0 40px #00ffff`]
                : `0 0 15px #00ff88`
            }}
          >
            <span className="skill-name">{skill.name}</span>
          </motion.div>
          <div className="proficiency-bar">
            <motion.div
              className="proficiency-fill"
              initial={{ width: 0 }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
            />
          </div>
        </motion.div>
      ))}

      {/* Orbital paths */}
      <svg className="orbital-paths" viewBox="-100 -100 200 200">
        <circle cx="0" cy="0" r="80" fill="none" stroke="#00ff88" strokeWidth="0.5" opacity="0.3" />
        <circle cx="0" cy="0" r="60" fill="none" stroke="#0088ff" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </motion.div>
  )
}

export default SkillGalaxy
