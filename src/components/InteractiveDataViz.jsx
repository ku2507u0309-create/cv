import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './InteractiveDataViz.css'

function InteractiveDataViz() {
  const [activeTab, setActiveTab] = useState('skills')

  const skillsData = [
    { name: 'Frontend', level: 92 },
    { name: 'Backend', level: 85 },
    { name: 'AI/ML', level: 87 },
    { name: 'DevOps', level: 78 },
    { name: 'Problem Solving', level: 98 }
  ]

  const statsData = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Hackathons Won', value: '8' },
    { label: 'Open Source Contributions', value: '200+' },
    { label: 'People Mentored', value: '50+' }
  ]

  return (
    <div className="interactive-data-viz">
      <div className="tab-buttons">
        <motion.button
          className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SKILLS
        </motion.button>
        <motion.button
          className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          STATS
        </motion.button>
      </div>

      <motion.div
        className="tab-content"
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {activeTab === 'skills' && (
          <div className="skills-container">
            {skillsData.map((skill, index) => (
              <div key={skill.name} className="skill-bar-item">
                <div className="skill-label">
                  <span>{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.value}</div>
                <div className="stat-name">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default InteractiveDataViz
