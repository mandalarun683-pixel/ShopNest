import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cart.length > 0 ? 10 : 0
  const total = subtotal + shipping

  if (cart.length === 0) return <main className="page-shell empty-cart"><p className="eyebrow">YOUR SHOPPING BAG</p><h1>Your cart is empty.</h1><p>There is plenty of good stuff waiting for you.</p><Link className="primary-button" to="/">Continue shopping</Link></main>

  return <main className="page-shell"><div className="page-heading"><div><p className="eyebrow">YOUR SHOPPING BAG</p><h1>Cart <span>({itemCount} items)</span></h1></div><Link className="text-link" to="/">Continue shopping →</Link></div><div className="cart-layout"><section className="cart-list">{cart.map((item) => <CartItem key={item.id} item={item} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} />)}</section><aside className="summary"><p className="eyebrow">ORDER SUMMARY</p><div><span>Subtotal</span><strong>${subtotal}</strong></div><div><span>Shipping</span><strong>${shipping}</strong></div><hr /><div className="summary-total"><span>Total</span><strong>${total}</strong></div><Link className="primary-button full-button" to="/checkout">Go to checkout</Link></aside></div></main>
}

export default Cart
