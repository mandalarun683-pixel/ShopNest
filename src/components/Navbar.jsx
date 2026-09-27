import { NavLink } from 'react-router-dom'

function Navbar({ cartCount, darkMode, onToggleTheme }) {
  return (
    <header className="navbar">
      <NavLink className="brand" to="/">
        <img src="/shopnest-logo.svg" alt="ShopNest" className="brand-logo" />
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/cart">
          Cart <span className="cart-count">{cartCount}</span>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/login">Login</NavLink>
      </nav>
      <button className="theme-button" type="button" onClick={onToggleTheme} aria-label="Toggle color theme">
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </header>
  )
}

export default Navbar
