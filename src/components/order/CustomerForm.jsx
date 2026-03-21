import { useOrderStore } from '../../stores/useOrderStore'

export default function CustomerForm() {
  const customerName = useOrderStore((state) => state.customerName)
  const setField = useOrderStore((state) => state.setField)

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Tu nombre"
        value={customerName}
        onChange={(e) => setField('customerName', e.target.value)}
        className="w-full bg-miko-dark border border-miko-gray rounded-xl px-4 py-3 text-miko-white text-sm placeholder:text-miko-white/30 focus:border-miko-pink focus:outline-none transition-colors"
      />
    </div>
  )
}
