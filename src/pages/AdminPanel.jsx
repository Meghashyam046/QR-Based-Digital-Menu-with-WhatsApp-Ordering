import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FiPlus, FiEdit2, FiTrash2, FiSave, FiX } from 'react-icons/fi'
import { menuItems as initialMenuItems } from '../data/mockMenuData'
import toast from 'react-hot-toast'

const AUTH_STORAGE_KEY = 'cafe_admin_auth'
const ADMIN_PASSWORD = 'admin123'

const AdminPanel = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems)
  const [editingItem, setEditingItem] = useState(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, reset, setValue } = useForm()

  useEffect(() => {
    const authStatus = localStorage.getItem(AUTH_STORAGE_KEY)
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem(AUTH_STORAGE_KEY, 'true')
      toast.success('Login successful!')
      setPassword('')
    } else {
      toast.error('Invalid password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem(AUTH_STORAGE_KEY)
    toast.success('Logged out successfully')
  }

  const onSubmit = (data) => {
    if (editingItem) {
      setMenuItems(menuItems.map(item =>
        item.id === editingItem.id ? { ...item, ...data, price: parseFloat(data.price) } : item
      ))
      toast.success('Item updated successfully')
      setEditingItem(null)
    } else {
      const newItem = {
        id: Math.max(...menuItems.map(i => i.id)) + 1,
        ...data,
        price: parseFloat(data.price),
        available: true,
        popular: false,
        image: data.image || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'
      }
      setMenuItems([...menuItems, newItem])
      toast.success('Item added successfully')
      setIsAddingNew(false)
    }
    reset()
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setIsAddingNew(false)
    Object.keys(item).forEach(key => setValue(key, item[key]))
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMenuItems(menuItems.filter(item => item.id !== id))
      toast.success('Item deleted successfully')
    }
  }

  const handleCancel = () => {
    setEditingItem(null)
    setIsAddingNew(false)
    reset()
  }

  const toggleAvailability = (id) => {
    setMenuItems(menuItems.map(item =>
      item.id === id ? { ...item, available: !item.available } : item
    ))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen py-8 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔒</span>
            </div>
            <h1 className="font-heading font-bold text-3xl text-gray-800 mb-2">
              Admin Login
            </h1>
            <p className="text-gray-600">
              Enter password to access admin panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-12"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FiX size={20} /> : <FiEdit2 size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <FiSave size={20} />
              Login
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              💡 Demo password: <span className="font-mono font-semibold">admin123</span>
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-800 mb-4">
                Admin Panel
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Manage your café menu items
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="btn-outline flex items-center gap-2"
            >
              <FiX size={20} />
              Logout
            </button>
          </div>

          {!isAddingNew && !editingItem && (
            <button
              onClick={() => setIsAddingNew(true)}
              className="btn-primary flex items-center gap-2"
            >
              <FiPlus size={20} />
              Add New Item
            </button>
          )}
        </motion.div>

        {(isAddingNew || editingItem) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading font-semibold text-2xl text-gray-800">
                {editingItem ? 'Edit Item' : 'Add New Item'}
              </h2>
              <button
                onClick={handleCancel}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Item Name *
                  </label>
                  <input
                    {...register('name', { required: true })}
                    className="input-field"
                    placeholder="e.g., Cappuccino"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select {...register('category', { required: true })} className="input-field">
                    <option value="coffee">Coffee</option>
                    <option value="food">Food</option>
                    <option value="desserts">Desserts</option>
                    <option value="beverages">Beverages</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price  *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('price', { required: true })}
                    className="input-field"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    {...register('image')}
                    className="input-field"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  {...register('description', { required: true })}
                  className="input-field min-h-[100px] resize-none"
                  placeholder="Describe the item..."
                />
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn-primary flex items-center gap-2">
                  <FiSave size={20} />
                  {editingItem ? 'Update Item' : 'Add Item'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="btn-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                  </div>
                  <span className="text-xl font-bold text-primary">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleAvailability(item.id)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.available
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {item.available ? 'Available' : 'Out of Stock'}
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <FiEdit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
