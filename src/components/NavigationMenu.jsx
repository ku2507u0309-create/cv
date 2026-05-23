import { motion } from 'framer-motion'
import './NavigationMenu.css'

function NavigationMenu({ items, activeItem, onSelect }) {
  return (
    <motion.div 
      className="navigation-menu"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {items.map((item, index) => (
        <motion.button
          key={item}
          className={`nav-item ${activeItem === item.toLowerCase() ? 'active' : ''}`}
          onClick={() => onSelect(item)}
          whileHover={{ scale: 1.05, glowIntensity: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="item-text">{item}</span>
          <span className="item-glow"></span>
        </motion.button>
      ))}
    </motion.div>
  )
}

export default NavigationMenu
