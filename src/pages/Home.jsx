import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiCoffee, FiShoppingBag, FiSmartphone, FiZap } from 'react-icons/fi'

const Home = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <FiCoffee size={32} />,
      title: 'Fresh Menu',
      description: 'Browse our carefully curated selection of coffee, food, and desserts'
    },
    {
      icon: <FiShoppingBag size={32} />,
      title: 'Easy Ordering',
      description: 'Add items to cart and customize your order with special instructions'
    },
    {
      icon: <FiSmartphone size={32} />,
      title: 'WhatsApp Integration',
      description: 'Complete your order directly through WhatsApp for instant confirmation'
    },
    {
      icon: <FiZap size={32} />,
      title: 'Quick Service',
      description: 'Scan QR code at your table and order in seconds'
    }
  ]

  return (
    <div className="min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-br from-primary via-primary-light to-secondary text-white py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="text-8xl mb-4">☕</div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-4">
              Welcome to Café Menu
            </h1>
            <p className="text-xl md:text-2xl text-cream-light mb-8">
              Your Digital Ordering Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/menu')}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              View Menu
            </button>
            <button
              onClick={() => navigate('/qr-generator')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Generate QR Code
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-light to-transparent"></div>
      </motion.section>

      <section className="py-16 px-4 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl text-center text-gray-800 mb-12"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="font-heading font-semibold text-xl text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl text-gray-800 mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our delicious menu and place your order in just a few taps
            </p>
            <button
              onClick={() => navigate('/menu')}
              className="btn-primary text-lg"
            >
              Browse Menu Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
