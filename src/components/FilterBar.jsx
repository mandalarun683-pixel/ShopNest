function FilterBar({ category, onCategoryChange, sortOption, onSortChange }) {
  return (
    <div className="filter-bar">
      <div className="category-tabs" aria-label="Product categories">
        {['All', 'Audio', 'Accessories', 'Computer', 'Wearables'].map((item) => (
          <button key={item} className={category === item ? 'selected' : ''} type="button" onClick={() => onCategoryChange(item)}>{item}</button>
        ))}
      </div>
      <label className="sort-select">Sort by
        <select value={sortOption} onChange={(event) => onSortChange(event.target.value)}>
          <option value="default">Default</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="name">Name: A-Z</option>
        </select>
      </label>
    </div>
  )
}

export default FilterBar
