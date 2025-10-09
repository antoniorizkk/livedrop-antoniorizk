export type Product = {
  id: string
  title: string
  price: number
  image: string
  tags: string[]
  stockQty: number
}

const ORDERS: Record<string, { status: string; carrier?: string; eta?: string }> = {}

export async function listProducts(): Promise<Product[]> {
  const res = await fetch('/mock-catalog.json')
  if (!res.ok) throw new Error('Failed to load catalog')
  return await res.json()
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const catalog = await listProducts()
  return catalog.find(p => p.id === id)
}

export async function placeOrder(cart: Product[]) {
  const orderId = Math.random().toString(36).substring(2, 12).toUpperCase()
  ORDERS[orderId] = { status: 'Placed' }
  return { orderId }
}

export async function getOrderStatus(orderId: string) {
  const status = ORDERS[orderId]
  if (!status) return { orderId, status: 'Not Found' }

  const states = ['Placed', 'Packed', 'Shipped', 'Delivered']
  const current = states.indexOf(status.status)
  if (current < states.length - 1 && Math.random() > 0.6) {
    status.status = states[current + 1]
  }

  if (status.status === 'Shipped') {
    status.carrier = 'DHL'
    status.eta = '2 days'
  }

  return { orderId, ...status }
}
