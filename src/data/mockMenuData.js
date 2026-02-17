// All prices in this file are in Indian Rupees (INR)
export const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'food', name: 'Food', icon: '🍔' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' }
]

export const menuItems = [
  {
    id: 1,
    name: 'Espresso',
    category: 'coffee',
    price: 3.50,
    description: 'Rich and bold Italian espresso shot',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
    available: true,
    popular: true
  },
  {
    id: 2,
    name: 'Cappuccino',
    category: 'coffee',
    price: 4.50,
    description: 'Classic espresso with steamed milk and foam',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
    available: true,
    popular: true
  },
  {
    id: 3,
    name: 'Latte',
    category: 'coffee',
    price: 4.75,
    description: 'Smooth espresso with steamed milk and light foam',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400',
    available: true,
    popular: false
  },
  {
    id: 4,
    name: 'Mocha',
    category: 'coffee',
    price: 5.25,
    description: 'Espresso with chocolate, steamed milk, and whipped cream',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400',
    available: true,
    popular: true
  },
  {
    id: 5,
    name: 'Americano',
    category: 'coffee',
    price: 3.75,
    description: 'Espresso diluted with hot water',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    available: true,
    popular: false
  },
  {
    id: 6,
    name: 'Caramel Macchiato',
    category: 'coffee',
    price: 5.50,
    description: 'Vanilla-flavored latte with caramel drizzle',
    image: 'https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=400',
    available: true,
    popular: true
  },
  {
    id: 7,
    name: 'Croissant',
    category: 'food',
    price: 3.25,
    description: 'Buttery, flaky French pastry',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
    available: true,
    popular: true
  },
  {
    id: 8,
    name: 'Avocado Toast',
    category: 'food',
    price: 7.50,
    description: 'Fresh avocado on sourdough with cherry tomatoes',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400',
    available: true,
    popular: true
  },
  {
    id: 9,
    name: 'Club Sandwich',
    category: 'food',
    price: 8.75,
    description: 'Triple-decker with turkey, bacon, lettuce, and tomato',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400',
    available: true,
    popular: false
  },
  {
    id: 10,
    name: 'Caesar Salad',
    category: 'food',
    price: 7.25,
    description: 'Crisp romaine with parmesan and croutons',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400',
    available: true,
    popular: false
  },
  {
    id: 11,
    name: 'Bagel with Cream Cheese',
    category: 'food',
    price: 4.50,
    description: 'Freshly baked bagel with cream cheese spread',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
    available: true,
    popular: true
  },
  {
    id: 12,
    name: 'Quiche Lorraine',
    category: 'food',
    price: 6.75,
    description: 'Savory egg tart with bacon and cheese',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400',
    available: true,
    popular: false
  },
  {
    id: 13,
    name: 'Chocolate Cake',
    category: 'desserts',
    price: 5.50,
    description: 'Rich, moist chocolate layer cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    available: true,
    popular: true
  },
  {
    id: 14,
    name: 'Cheesecake',
    category: 'desserts',
    price: 6.25,
    description: 'Creamy New York-style cheesecake',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400',
    available: true,
    popular: true
  },
  {
    id: 15,
    name: 'Tiramisu',
    category: 'desserts',
    price: 6.75,
    description: 'Classic Italian coffee-flavored dessert',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
    available: true,
    popular: true
  },
  {
    id: 16,
    name: 'Brownie',
    category: 'desserts',
    price: 4.25,
    description: 'Fudgy chocolate brownie with walnuts',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400',
    available: true,
    popular: false
  },
  {
    id: 17,
    name: 'Macarons',
    category: 'desserts',
    price: 5.75,
    description: 'Assorted French macarons (3 pieces)',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400',
    available: true,
    popular: true
  },
  {
    id: 18,
    name: 'Apple Pie',
    category: 'desserts',
    price: 5.25,
    description: 'Warm apple pie with cinnamon',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400',
    available: true,
    popular: false
  },
  {
    id: 19,
    name: 'Fresh Orange Juice',
    category: 'beverages',
    price: 4.50,
    description: 'Freshly squeezed orange juice',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
    available: true,
    popular: true
  },
  {
    id: 20,
    name: 'Iced Tea',
    category: 'beverages',
    price: 3.25,
    description: 'Refreshing iced tea with lemon',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
    available: true,
    popular: false
  },
  {
    id: 21,
    name: 'Smoothie Bowl',
    category: 'beverages',
    price: 7.50,
    description: 'Mixed berry smoothie with granola and fresh fruit',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400',
    available: true,
    popular: true
  },
  {
    id: 22,
    name: 'Matcha Latte',
    category: 'beverages',
    price: 5.25,
    description: 'Japanese green tea latte',
    image: 'https://images.unsplash.com/photo-1536013564761-09ba0d6e9e4f?w=400',
    available: true,
    popular: true
  },
  {
    id: 23,
    name: 'Hot Chocolate',
    category: 'beverages',
    price: 4.25,
    description: 'Rich hot chocolate with whipped cream',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400',
    available: true,
    popular: false
  },
  {
    id: 24,
    name: 'Lemonade',
    category: 'beverages',
    price: 3.75,
    description: 'Fresh homemade lemonade',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f8d?w=400',
    available: true,
    popular: false
  }
]

export const tables = [
  { id: 1, number: 1, status: 'available' },
  { id: 2, number: 2, status: 'available' },
  { id: 3, number: 3, status: 'available' },
  { id: 4, number: 4, status: 'available' },
  { id: 5, number: 5, status: 'available' },
  { id: 6, number: 6, status: 'available' },
  { id: 7, number: 7, status: 'available' },
  { id: 8, number: 8, status: 'available' },
  { id: 9, number: 9, status: 'available' },
  { id: 10, number: 10, status: 'available' }
]
