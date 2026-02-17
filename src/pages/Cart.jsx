import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import CartSystem from '../components/CartSystem'
import OrderSummary from '../components/OrderSummary'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const navigate = useNavigate()
  const { cart } = useCart()

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/menu')}
            className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors mb-4"
          >
            <FiArrowLeft size={20} />
            <span className="font-medium">Back to Menu</span>
          </button>
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-800 mb-2">
            Your Cart
          </h1>
          <p className="text-lg text-gray-600">
            Review your order and complete checkout
          </p>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some delicious items from our menu!</p>
            <button
              onClick={() => navigate('/menu')}
              className="btn-primary"
            >
              Browse Menu
            </button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartSystem />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <OrderSummary />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
