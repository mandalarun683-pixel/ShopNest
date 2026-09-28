function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-info"><span className="product-category">{item.category}</span><h3>{item.name}</h3><p>${item.price} each</p></div>
      <div className="quantity-control"><button type="button" onClick={() => onDecrease(item.id)} aria-label={`Decrease ${item.name} quantity`}>−</button><span>{item.quantity}</span><button type="button" onClick={() => onIncrease(item.id)} aria-label={`Increase ${item.name} quantity`} disabled={item.quantity >= item.stock}>+</button></div>
      <strong className="item-subtotal">${item.price * item.quantity}</strong>
      <button className="remove-button" type="button" onClick={() => onRemove(item.id)}>Remove</button>
    </article>
  )
}

export default CartItem
