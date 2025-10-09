import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProduct, listProducts, Product } from '../lib/api'
import { useCart } from '../lib/store'
import { formatCurrency } from '../lib/format'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [related, setRelated] = useState<Product[]>([])
  const addToCart = useCart(s => s.addToCart)

  useEffect(() => {
    if (!id) return
    getProduct(id).then(p => {
      if (p) {
        setProduct(p)
        listProducts().then(all => {
          setRelated(all.filter(x => x.tags.some(t => p.tags.includes(t)) && x.id !== p.id).slice(0, 3))
        })
      }
    })
  }, [id])

  if (!product) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6">
      <img src={product.image} className="w-64 mb-4" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-lg mb-2">{formatCurrency(product.price)}</p>
      <p className="text-sm text-gray-500">Stock: {product.stockQty}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>

      <h2 className="mt-6 text-xl font-semibold">Related</h2>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {related.map(r => (
          <Link key={r.id} to={`/p/${r.id}`} className="block p-2 border rounded">
            {r.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
