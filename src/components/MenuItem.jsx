import React from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiStar } from 'react-icons/fi'
import toast from 'react-hot-toast'

const MenuItem = ({ item, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(item)
    toast.success(`${item.name} added to cart!`)
  }

  return (
    <motion.div
      className="menu-item-card"
      whileHover={{ y: -4 }}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.popular && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
            <FiStar size={12} fill="currentColor" />
            Popular
          </div>
        )}
        {!item.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg text-gray-800 mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ₹{item.price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            disabled={!item.available}
            className={`{
              item.available
                ? 'bg-primary hover:bg-primary-light text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } p-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:hover:shadow-md`}
          >
            <FiPlus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default MenuItem
