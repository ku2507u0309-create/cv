import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './TimelineView.css'

function TimelineView() {
  const [activeEvent, setActiveEvent] = useState(0)

  const events = [
    {
      year: '2020',
      title: 'Began Computer Science Journey',
      description: 'Started B.Tech in Computer Science & Engineering'
    },
    {
      year: '2021',
      title: 'First Hackathon Victory',
      description: 'Won hackathon with AI-powered solution'
    },
    {
      year: '2022',
      title: 'Published Research',
      description: 'Published research paper on Machine Learning'
    },
    {
      year: '2023',
      title: 'Industrial Experience',
      description: 'Worked as Software Engineer at leading tech company'
    },
    {
      year: '2024',
      title: 'Open Source Leadership',
      description: 'Leading open source projects with 1000+ stars'
    },
    {
      year: '2025',
      title: 'Innovation & Mentorship',
      description: 'Mentoring 50+ developers and building cutting-edge solutions'
    }
  ]

  return (
    <div className="timeline-view">
      <h2 className="timeline-title">CAREER TIMELINE</h2>
      
      <div className="timeline-container">
        {/* Timeline line */}
        <div className="timeline-line">
          <motion.div
            className="timeline-progress"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>

        {/* Timeline events */}
        <div className="timeline-events">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`timeline-event ${activeEvent === index ? 'active' : ''}`}
              onClick={() => setActiveEvent(index)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="event-marker"></div>
              <motion.div
                className="event-content"
                animate={activeEvent === index ? { scale: 1.05 } : { scale: 1 }}
              >
                <p className="event-year">{event.year}</p>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimelineView
