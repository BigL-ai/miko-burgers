import { create } from 'zustand'

export const useOrderStore = create((set) => ({
  deliveryType: 'takeaway',
  customerName: '',
  address: '',
  floor: '',
  apartment: '',
  instructions: '',

  setDeliveryType: (type) => set({ deliveryType: type }),
  setField: (field, value) => set({ [field]: value }),
  reset: () =>
    set({
      deliveryType: 'takeaway',
      customerName: '',
      address: '',
      floor: '',
      apartment: '',
      instructions: '',
    }),
}))
