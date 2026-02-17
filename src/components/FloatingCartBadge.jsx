import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const FloatingCartBadge = () => {
  const navigate = useNavigate()
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  if (totalItems === 0) return null

  return (
    <AnimatePresence>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/cart')}
        className="floating-cart"
      >
        <FiShoppingCart size={24} />
        <motion.span
          key={totalItems}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
        >
          {totalItems}
        </motion.span>
      </motion.button>
    </AnimatePresence>
  )
}

export default FloatingCartBadge
