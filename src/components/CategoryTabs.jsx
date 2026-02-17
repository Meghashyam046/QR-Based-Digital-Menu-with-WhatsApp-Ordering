import React from 'react'
import { motion } from 'framer-motion'

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`${
            activeCategory === category.id
              ? 'category-tab-active'
              : 'category-tab-inactive'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl mr-2">{category.icon}</span>
          <span>{category.name}</span>
        </motion.button>
      ))}
    </div>
  )
}

export default CategoryTabs
