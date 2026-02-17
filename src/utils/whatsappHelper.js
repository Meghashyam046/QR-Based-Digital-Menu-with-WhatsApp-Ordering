export const generateWhatsAppMessage = (orderDetails) => {
  const { customerName, phoneNumber, tableNumber, specialInstructions, items, total } = orderDetails

  let message = `🍽️ *NEW CAFÉ ORDER*\n\n`
  message += `👤 *Customer:* ${customerName}\n`
  message += `📱 *Phone:* ${phoneNumber}\n`
  message += `🪑 *Table:* ${tableNumber}\n\n`
  message += `📋 *ORDER DETAILS:*\n`
  message += `${'─'.repeat(30)}\n\n`

  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`
    message += `   Qty: ${item.quantity} × ₹${item.price.toFixed(2)} = ₹${(item.quantity * item.price).toFixed(2)}\n\n`
  })

  message += `${'─'.repeat(30)}\n`
  message += `💰 *TOTAL: ₹${total}*\n`

  if (specialInstructions) {
    message += `\n📝 *Special Instructions:*\n${specialInstructions}\n`
  }

  message += `\n✅ Please confirm this order.`

  return message
}

export const formatPhoneNumber = (phone) => {
  return phone.replace(/\D/g, '')
}
