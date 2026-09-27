import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Auth() {
  const location = useLocation()
  const isSignIn = location.pathname === '/login'
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return <main className="auth-page"><section className="auth-card success-state"><div className="success-icon">✓</div><p className="eyebrow">WELCOME TO SHOPNEST</p><h1>{isSignIn ? 'You are signed in.' : 'Your account is ready.'}</h1><p>This is a demo account form. No real account or password has been saved.</p><Link className="primary-button" to="/">Continue shopping</Link></section></main>
  }

  return <main className="auth-page"><section className="auth-card"><p className="eyebrow">{isSignIn ? 'WELCOME BACK' : 'JOIN SHOPNEST'}</p><h1>{isSignIn ? 'Sign in' : 'Create an account'}</h1><p className="auth-intro">{isSignIn ? 'Sign in to keep your shopping experience in one place.' : 'Save your favourites and keep checkout simple.'}</p><form className="checkout-form" onSubmit={handleSubmit}>{!isSignIn && <label>Full name<input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required /></label>}<label>Email address<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required /></label><label>Password<input type="password" name="password" value={form.password} onChange={handleChange} placeholder="At least 6 characters" minLength="6" required /></label><button className="primary-button full-button" type="submit">{isSignIn ? 'Sign in' : 'Create account'}</button></form><p className="auth-switch">{isSignIn ? 'New to ShopNest?' : 'Already have an account?'} <Link to={isSignIn ? '/signin' : '/login'}>{isSignIn ? 'Create an account' : 'Sign in'}</Link></p></section></main>
}

export default Auth
