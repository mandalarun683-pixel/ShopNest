import { Link } from 'react-router-dom'

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <div className="product-meta"><span>★ {product.rating}</span><span>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</span></div>
        <div className="product-card-footer"><strong>${product.price}</strong><button type="button" disabled={product.stock === 0} onClick={() => onAddToCart(product)}>{product.stock > 0 ? 'Add to cart' : 'Unavailable'}</button></div>
      </div>
    </article>
  )
}

export default ProductCard
