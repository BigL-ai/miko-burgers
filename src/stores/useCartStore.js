import { create } from 'zustand'

const getItemKey = (item) => item.customId || item.id

export const useCartStore = create((set, get) => ({
  items: [],

  addItem: (product) => {
    set((state) => {
      const key = getItemKey(product)
      const existing = state.items.find((item) => getItemKey(item) === key)
      if (existing) {
        return {
          items: state.items.map((item) =>
            getItemKey(item) === key
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      return { items: [...state.items, { ...product, quantity: 1 }] }
    })
  },

  removeItem: (itemKey) => {
    set((state) => {
      const existing = state.items.find(
        (item) => getItemKey(item) === itemKey
      )
      if (existing && existing.quantity > 1) {
        return {
          items: state.items.map((item) =>
            getItemKey(item) === itemKey
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }
      }
      return {
        items: state.items.filter(
          (item) => getItemKey(item) !== itemKey
        ),
      }
    })
  },

  deleteItem: (itemKey) => {
    set((state) => ({
      items: state.items.filter(
        (item) => getItemKey(item) !== itemKey
      ),
    }))
  },

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

  totalPrice: () =>
    get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}))
