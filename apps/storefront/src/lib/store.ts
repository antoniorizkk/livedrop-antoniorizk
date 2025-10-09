// /src/lib/store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from './api'

type CartItem = Product & { qty: number }

type CartState = {
  items: CartItem[]
  addToCart: (p: Product) => void
  removeFromCart: (id: string) => void
  changeQty: (id: string, qty: number) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (p) => {
        const items = [...get().items]
        const existing = items.find(i => i.id === p.id)
        if (existing) existing.qty++
        else items.push({ ...p, qty: 1 })
        set({ items })
      },
      removeFromCart: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      changeQty: (id, qty) =>
        set({
          items: get().items.map(i => (i.id === id ? { ...i, qty } : i)),
        }),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'cart-storage' }
  )
)
