import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const CartSystem = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart()

  const handleQuantityChange = (itemId, change) => {
    const item = cart.find(i => i.id === itemId)
    const newQuantity = item.quantity + change
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Add some delicious items from our menu!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {cart.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              <p className="text-primary font-medium">₹{item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <FiMinus size={16} />
              </button>

              <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>

              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="w-8 h-8 rounded-full bg-primary text-white hover:bg-primary-light flex items-center justify-center transition-colors"
              >
                <FiPlus size={16} />
              </button>
            </div>

            <div className="text-right">
              <p className="font-bold text-lg text-gray-800">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <FiTrash2 size={20} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>₹{getCartTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax (10%)</span>
            <span>₹{(getCartTotal() * 0.1).toFixed(2)}</span>
          </div>
          <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-800">
            <span>Total</span>
            <span>₹{(getCartTotal() * 1.1).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSystem
