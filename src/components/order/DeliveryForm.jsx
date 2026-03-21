import { motion, AnimatePresence } from 'framer-motion'
import { useOrderStore } from '../../stores/useOrderStore'

export default function DeliveryForm() {
  const deliveryType = useOrderStore((state) => state.deliveryType)
  const address = useOrderStore((state) => state.address)
  const floor = useOrderStore((state) => state.floor)
  const apartment = useOrderStore((state) => state.apartment)
  const instructions = useOrderStore((state) => state.instructions)
  const setField = useOrderStore((state) => state.setField)

  const inputClass =
    'w-full bg-miko-dark border border-miko-gray rounded-xl px-4 py-3 text-miko-white text-sm placeholder:text-miko-white/30 focus:border-miko-pink focus:outline-none transition-colors'

  return (
    <AnimatePresence>
      {deliveryType === 'delivery' && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-3 mt-4">
            <div className="bg-miko-pink/10 border border-miko-pink/20 rounded-xl px-4 py-2">
              <p className="text-miko-pink text-xs font-medium">
                🛵 Solo envios a Recoleta · Envio: $3.000
              </p>
            </div>

            <input
              type="text"
              placeholder="Direccion (ej: Av. Callao 1234)"
              value={address}
              onChange={(e) => setField('address', e.target.value)}
              className={inputClass}
            />

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Piso"
                value={floor}
                onChange={(e) => setField('floor', e.target.value)}
                className={`${inputClass} flex-1`}
              />
              <input
                type="text"
                placeholder="Depto"
                value={apartment}
                onChange={(e) => setField('apartment', e.target.value)}
                className={`${inputClass} flex-1`}
              />
            </div>

            <input
              type="text"
              placeholder="Indicaciones (ej: no anda el timbre)"
              value={instructions}
              onChange={(e) => setField('instructions', e.target.value)}
              className={inputClass}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
