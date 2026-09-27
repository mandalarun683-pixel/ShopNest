import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'

function Home({ products, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All')
  const [sortOption, setSortOption] = useState('default')

  let visibleProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'All' || product.category === category
    return matchesSearch && matchesCategory
  })

  if (sortOption === 'low') visibleProducts = [...visibleProducts].sort((a, b) => a.price - b.price)
  if (sortOption === 'high') visibleProducts = [...visibleProducts].sort((a, b) => b.price - a.price)
  if (sortOption === 'name') visibleProducts = [...visibleProducts].sort((a, b) => a.name.localeCompare(b.name))

  return <main>
    <section className="catalog-intro"><div><p className="eyebrow">CURATED TECH FOR EVERYDAY LIFE</p><h1>Find something<br /><em>useful.</em></h1><p className="intro-copy">Thoughtful tech and everyday essentials, selected to make work, study, and downtime a little better.</p></div><div className="intro-note"><span>20</span><p>carefully chosen<br />products</p></div></section>
    <section className="catalog-section"><div className="catalog-toolbar"><div><p className="eyebrow">THE COLLECTION</p><h2>Shop all products</h2></div><SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /></div><FilterBar category={category} onCategoryChange={setCategory} sortOption={sortOption} onSortChange={setSortOption} />
      {visibleProducts.length > 0 ? <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}</div> : <div className="empty-state"><h3>No products found</h3><p>Try a different search term or category.</p></div>}
    </section>
  </main>
}

export default Home
