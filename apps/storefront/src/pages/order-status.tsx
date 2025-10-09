import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOrderStatus } from '../lib/api'

export default function OrderStatusPage() {
  const { id } = useParams()
  const [status, setStatus] = useState<any>(null)

  useEffect(() => {
    if (id) getOrderStatus(id).then(setStatus)
  }, [id])

  if (!status) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Order Status</h1>
      <p>Order ID: {id?.slice(-4)}</p>
      <p>Status: {status.status}</p>
      {status.carrier && (
        <>
          <p>Carrier: {status.carrier}</p>
          <p>ETA: {status.eta}</p>
        </>
      )}
    </div>
  )
}
