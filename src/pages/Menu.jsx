import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { categories, menuItems } from '../data/mockMenuData'
import CategoryTabs from '../components/CategoryTabs'
import MenuDisplay from '../components/MenuDisplay'
import FloatingCartBadge from '../components/FloatingCartBadge'
import { useCart } from '../context/CartContext'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const { addToCart } = useCart()

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return menuItems
    }
    return menuItems.filter(item => item.category === activeCategory)
  }, [activeCategory])

  const handleAddToCart = (item) => {
    addToCart(item)
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-800 mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-gray-600">
            Discover our selection of freshly prepared items
          </p>
        </motion.div>

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <MenuDisplay
          items={filteredItems}
          onAddToCart={handleAddToCart}
        />
      </div>

      <FloatingCartBadge />
    </div>
  )
}

export default Menu
