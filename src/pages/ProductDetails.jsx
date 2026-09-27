import { Link, useParams } from 'react-router-dom'

function ProductDetails({ products, onAddToCart }) {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) return <main className="page-shell empty-state"><h1>Product not found.</h1><p>That product may have been removed or the link is incorrect.</p><Link className="primary-button" to="/">Back to products</Link></main>

  return <main className="page-shell"><Link className="back-link" to="/">← Back to products</Link><section className="details-layout"><div className="details-image"><img src={product.image} alt={product.name} /></div><div className="details-copy"><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><div className="rating">★ {product.rating} <span>Customer rating</span></div><p className="details-description">{product.description}</p><strong className="details-price">${product.price}</strong><p className={product.stock > 0 ? 'stock in-stock' : 'stock out-stock'}>{product.stock > 0 ? `${product.stock} available today` : 'Currently out of stock'}</p><button className="primary-button" type="button" disabled={product.stock === 0} onClick={() => onAddToCart(product)}>{product.stock > 0 ? 'Add to cart' : 'Unavailable'}</button></div></section></main>
}

export default ProductDetails
