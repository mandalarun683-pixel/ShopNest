import { Link } from 'react-router-dom'

function Footer() {
  return <footer className="footer"><div><img src="/shopnest-logo.svg" alt="ShopNest" className="footer-logo" /></div><div className="footer-links"><Link to="/">Home</Link><Link to="/cart">Cart</Link></div><small>© 2026 ShopNest.</small></footer>
}

export default Footer
