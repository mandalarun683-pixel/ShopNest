import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import products from './data/products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import Auth from './pages/Auth'
import './App.css'

function loadSavedCart() {
  try {
    const savedCart = localStorage.getItem('shopnest-cart')
    const parsedCart = savedCart ? JSON.parse(savedCart) : []
    if (!Array.isArray(parsedCart)) return []
    return parsedCart.flatMap((item) => {
      if (!item || !Number.isInteger(item.quantity) || item.quantity < 1) return []
      const product = products.find((entry) => entry.id === item.id)
      if (!product || product.stock === 0) return []
      return [{ ...product, quantity: Math.min(item.quantity, product.stock) }]
    })
  } catch {
    return []
  }
}

function App() {
  const [cart, setCart] = useState(loadSavedCart)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('shopnest-theme') === 'dark')

  // Save cart changes so a refresh does not remove the shopper's items.
  useEffect(() => {
    localStorage.setItem('shopnest-cart', JSON.stringify(cart))
  }, [cart])

  // Save the selected theme so it is remembered next time.
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : ''
    localStorage.setItem('shopnest-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  function addToCart(product) {
    setCart((currentCart) => {
      if (!product || product.stock < 1) return currentCart
      const existingItem = currentCart.find((item) => item.id === product.id)
      if (existingItem) {
        if (existingItem.quantity >= product.stock) return currentCart
        return currentCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  function increaseQuantity(id) {
    setCart((currentCart) => currentCart.map((item) => {
      const product = products.find((entry) => entry.id === id)
      return item.id === id && product && item.quantity < product.stock ? { ...item, quantity: item.quantity + 1 } : item
    }))
  }
  function decreaseQuantity(id) { setCart((currentCart) => currentCart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0)) }
  function removeFromCart(id) { setCart((currentCart) => currentCart.filter((item) => item.id !== id)) }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return <BrowserRouter><Navbar cartCount={cartCount} darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} /><Routes><Route path="/" element={<Home products={products} onAddToCart={addToCart} />} /><Route path="/cart" element={<Cart cart={cart} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onRemove={removeFromCart} />} /><Route path="/product/:id" element={<ProductDetails products={products} onAddToCart={addToCart} />} /><Route path="/checkout" element={<Checkout cart={cart} />} /><Route path="/login" element={<Auth />} /><Route path="/signin" element={<Auth />} /></Routes><Footer /></BrowserRouter>
}

export default App
