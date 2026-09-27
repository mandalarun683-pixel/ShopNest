import { useState } from 'react'
import { Link } from 'react-router-dom'

function Checkout({ cart }) {
  const [form, setForm] = useState({ name: '', email: '', address: '' })
  const [submitted, setSubmitted] = useState(false)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal + (cart.length > 0 ? 10 : 0)

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (form.name.trim() && form.email.trim() && form.address.trim()) setSubmitted(true)
  }

  if (cart.length === 0) return <main className="page-shell empty-state"><h1>Nothing to check out.</h1><p>Add a product to your cart first.</p><Link className="primary-button" to="/">Browse products</Link></main>
  if (submitted) return <main className="page-shell success-state"><div className="success-icon">✓</div><p className="eyebrow">ORDER CONFIRMED</p><h1>Thank you, {form.name}.</h1><p>Your order has been placed successfully. This demo does not process a real payment.</p><Link className="primary-button" to="/">Return to shop</Link></main>

  return <main className="page-shell"><div className="page-heading"><div><p className="eyebrow">ALMOST THERE</p><h1>Checkout</h1></div><Link className="text-link" to="/cart">← Edit cart</Link></div><div className="checkout-layout"><form className="checkout-form" onSubmit={handleSubmit}><h2>Delivery details</h2><label>Full name<input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required /></label><label>Email address<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required /></label><label>Address<textarea name="address" value={form.address} onChange={handleChange} placeholder="Street, city, and postal code" rows="4" required /></label><button className="primary-button" type="submit">Place demo order</button></form><aside className="summary"><p className="eyebrow">ORDER SUMMARY</p>{cart.map((item) => <div className="checkout-item" key={item.id}><span>{item.name} × {item.quantity}</span><strong>${item.price * item.quantity}</strong></div>)}<hr /><div><span>Subtotal</span><strong>${subtotal}</strong></div><div><span>Shipping</span><strong>$10</strong></div><div className="summary-total"><span>Total</span><strong>${total}</strong></div></aside></div></main>
}

export default Checkout
