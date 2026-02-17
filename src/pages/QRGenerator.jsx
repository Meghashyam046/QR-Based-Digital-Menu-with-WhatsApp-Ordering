import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { FiDownload, FiCopy, FiCheck } from 'react-icons/fi'
import { tables } from '../data/mockMenuData'
import toast from 'react-hot-toast'

const QRGenerator = () => {
  const [selectedTable, setSelectedTable] = useState('')
  const [copied, setCopied] = useState(false)

  const menuUrl = selectedTable
    ? `${window.location.origin}/menu?table=${selectedTable}`
    : `${window.location.origin}/menu`

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(menuUrl)
    setCopied(true)
    toast.success('URL copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadQR = () => {
    const svg = document.getElementById('qr-code-svg')
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      
      const downloadLink = document.createElement('a')
      downloadLink.download = `cafe-menu-qr-table-${selectedTable || 'general'}.png`
      downloadLink.href = pngFile
      downloadLink.click()
      
      toast.success('QR code downloaded!')
    }
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-800 mb-4">
            QR Code Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate QR codes for your café tables
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Table Number (Optional)
            </label>
            <select
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className="input-field"
            >
              <option value="">General Menu (No Table)</option>
              {tables.map((table) => (
                <option key={table.id} value={table.number}>
                  Table {table.number}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl mb-6">
              <QRCodeSVG
                id="qr-code-svg"
                value={menuUrl}
                size={256}
                level="H"
                includeMargin={true}
                imageSettings={{
                  src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='50' x='50' text-anchor='middle' dominant-baseline='middle' font-size='60'%3E☕%3C/text%3E%3C/svg%3E",
                  height: 40,
                  width: 40,
                  excavate: true,
                }}
              />
            </div>

            <div className="w-full space-y-4">
              <div className="bg-cream rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2 font-medium">Menu URL:</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={menuUrl}
                    readOnly
                    className="input-field flex-1 bg-white"
                  />
                  <button
                    onClick={handleCopyUrl}
                    className="p-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                  >
                    {copied ? <FiCheck size={20} /> : <FiCopy size={20} />}
                  </button>
                </div>
              </div>

              <button
                onClick={handleDownloadQR}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <FiDownload size={20} />
                Download QR Code
              </button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">📱 How to Use:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>1. Select a table number or use general menu</li>
              <li>2. Download the QR code image</li>
              <li>3. Print and place on your café tables</li>
              <li>4. Customers scan to view menu and order</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default QRGenerator
