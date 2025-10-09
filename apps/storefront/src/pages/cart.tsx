import { useCart } from '../lib/store'
import { formatCurrency } from '../lib/format'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const { items, removeFromCart, changeQty } = useCart()
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  if (!items.length) return <div className="p-6">Cart is empty.</div>

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {items.map(i => (
        <div key={i.id} className="flex items-center justify-between border-b pb-2">
          <span>{i.title}</span>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              min={1}
              value={i.qty}
              className="border w-12 text-center"
              onChange={e => changeQty(i.id, Number(e.target.value))}
            />
            <span>{formatCurrency(i.price * i.qty)}</span>
            <button className="text-red-500" onClick={() => removeFromCart(i.id)}>
              ✕
            </button>
          </div>
        </div>
      ))}
      <div className="font-semibold">Total: {formatCurrency(total)}</div>
      <Link to="/checkout" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded">
        Checkout
      </Link>
    </div>
  )
}
