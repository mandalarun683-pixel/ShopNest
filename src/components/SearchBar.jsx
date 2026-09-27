function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <label className="search-box">
      <span className="search-icon">⌕</span>
      <span className="sr-only">Search products</span>
      <input value={searchTerm} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search products..." />
    </label>
  )
}

export default SearchBar
