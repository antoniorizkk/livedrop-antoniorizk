import { useEffect, useState } from 'react'
import { listProducts, Product } from '../lib/api'
import { useCart } from '../lib/store'
import { formatCurrency } from '../lib/format'
import { Link } from 'react-router-dom'

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])
  const addToCart = useCart(s => s.addToCart)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    listProducts().then(setProducts)
  }, [])

  const filtered = products
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price))

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Catalog</h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          onChange={e => setSort(e.target.value as 'asc' | 'desc')}
        >
          <option value="asc">Price ↑</option>
          <option value="desc">Price ↓</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map(p => (
          <div key={p.id} className="bg-white shadow rounded p-3">
            <Link to={`/p/${p.id}`}>
              <img src={p.image} alt={p.title} className="w-full h-32 object-cover mb-2" />
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-600">{formatCurrency(p.price)}</p>
            </Link>
            <button
              onClick={() => addToCart(p)}
              className="mt-2 w-full bg-indigo-600 text-white py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
