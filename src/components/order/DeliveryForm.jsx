import { useOrderStore } from '../../stores/useOrderStore'

export default function DeliveryForm({ alwaysVisible = false }) {
  const deliveryType = useOrderStore((state) => state.deliveryType)
  const address = useOrderStore((state) => state.address)
  const floor = useOrderStore((state) => state.floor)
  const apartment = useOrderStore((state) => state.apartment)
  const instructions = useOrderStore((state) => state.instructions)
  const setField = useOrderStore((state) => state.setField)

  if (!alwaysVisible && deliveryType !== 'delivery') return null

  const inputClass =
    'w-full bg-miko-dark border border-miko-gray rounded-xl px-4 py-3 text-miko-white text-sm placeholder:text-miko-white/30 focus:border-miko-pink focus:outline-none transition-colors'

  return (
    <div className="space-y-3">
      <div className="bg-miko-pink/10 border border-miko-pink/20 rounded-xl px-4 py-2">
        <p className="text-miko-pink text-xs font-medium">
          🛵 Solo envíos a Recoleta · Envío: $3.000
        </p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Dirección (ej: Av. Callao 1234) *"
          value={address}
          onChange={(e) => setField('address', e.target.value)}
          className={`${inputClass} ${!address.trim() ? 'border-miko-pink/40' : 'border-miko-gray'}`}
        />
      </div>

      <div className="flex gap-3">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Piso *"
            value={floor}
            onChange={(e) => setField('floor', e.target.value)}
            className={`${inputClass} ${!floor.trim() ? 'border-miko-pink/40' : 'border-miko-gray'}`}
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Depto *"
            value={apartment}
            onChange={(e) => setField('apartment', e.target.value)}
            className={`${inputClass} ${!apartment.trim() ? 'border-miko-pink/40' : 'border-miko-gray'}`}
          />
        </div>
      </div>

      <input
        type="text"
        placeholder="Indicaciones (opcional)"
        value={instructions}
        onChange={(e) => setField('instructions', e.target.value)}
        className={inputClass}
      />

      <p className="text-miko-white/30 text-xs">* Campos obligatorios</p>
    </div>
  )
}
