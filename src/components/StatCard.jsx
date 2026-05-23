import { motion } from 'framer-motion'
import './StatCard.css'

function StatCard({ icon, label, value, color = '#00ff88' }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ '--card-color': color }}
    >
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  )
}

export default StatCard
