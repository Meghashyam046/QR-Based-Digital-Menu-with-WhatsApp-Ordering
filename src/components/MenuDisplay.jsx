import React from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'

const MenuDisplay = ({ items, onAddToCart }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🍽️</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No items found</h3>
        <p className="text-gray-500">Try selecting a different category</p>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants}>
          <MenuItem item={item} onAddToCart={onAddToCart} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default MenuDisplay
