import { useNavigate } from 'react-router-dom'
import { useCart } from '../lib/store'
import { placeOrder } from '../lib/api'

export default function CheckoutPage() {
  const { items, clearCart } = useCart()
  const navigate = useNavigate()

  async function handlePlaceOrder() {
    const { orderId } = await placeOrder(items)
    clearCart()
    navigate(`/order/${orderId}`)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p>This is a summary only. Click below to place your mock order.</p>
      <button onClick={handlePlaceOrder} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Place Order
      </button>
    </div>
  )
}
