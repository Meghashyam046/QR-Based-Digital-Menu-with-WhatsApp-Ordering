import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiPhone, FiMessageSquare } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { generateWhatsAppMessage } from '../utils/whatsappHelper'
import toast from 'react-hot-toast'

const OrderSummary = () => {
  const { cart, getCartTotal, clearCart } = useCart()
  const [customerName, setCustomerName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [tableNumber, setTableNumber] = useState('')
  const [specialInstructions, setSpecialInstructions] = useState('')

  const handleWhatsAppOrder = () => {
    if (!customerName.trim()) {
      toast.error('Please enter your name')
      return
    }
    if (!phoneNumber.trim()) {
      toast.error('Please enter your phone number')
      return
    }
    if (!tableNumber.trim()) {
      toast.error('Please select a table number')
      return
    }

    const orderDetails = {
      customerName,
      phoneNumber,
      tableNumber,
      specialInstructions,
      items: cart,
      total: (getCartTotal() * 1.1).toFixed(2)
    }

    const message = generateWhatsAppMessage(orderDetails)
    const whatsappNumber = '123456789'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')
    toast.success('Opening WhatsApp...')

    setTimeout(() => {
      clearCart()
      setCustomerName('')
      setPhoneNumber('')
      setTableNumber('')
      setSpecialInstructions('')
    }, 1000)
  }

  if (cart.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 space-y-6"
    >
      <h2 className="text-2xl font-heading font-bold text-gray-800">Complete Your Order</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FiUser className="inline mr-2" />
            Your Name *
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="input-field"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FiPhone className="inline mr-2" />
            Phone Number *
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input-field"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Table Number *
          </label>
          <select
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="input-field"
          >
            <option value="">Select table number</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Table {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FiMessageSquare className="inline mr-2" />
            Special Instructions (Optional)
          </label>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            className="input-field min-h-[100px] resize-none"
            placeholder="Any special requests or dietary requirements?"
          />
        </div>
      </div>

      <div className="bg-cream rounded-lg p-4 space-y-2">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span className="font-medium">₹{getCartTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tax (10%)</span>
          <span className="font-medium">₹{(getCartTotal() * 0.1).toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-300 pt-2 flex justify-between text-lg font-bold text-gray-800">
          <span>Total</span>
          <span>₹{(getCartTotal() * 1.1).toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleWhatsAppOrder}
        className="btn-whatsapp w-full justify-center text-lg"
      >
        <FaWhatsapp size={24} />
        <span>Order via WhatsApp</span>
      </button>

      <p className="text-xs text-gray-500 text-center">
        By placing an order, you agree to our terms and conditions
      </p>
    </motion.div>
  )
}

export default OrderSummary
