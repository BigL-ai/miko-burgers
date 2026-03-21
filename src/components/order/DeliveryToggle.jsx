import { motion } from 'framer-motion'
import { useOrderStore } from '../../stores/useOrderStore'

export default function DeliveryToggle() {
  const deliveryType = useOrderStore((state) => state.deliveryType)
  const setDeliveryType = useOrderStore((state) => state.setDeliveryType)

  const options = [
    { value: 'takeaway', label: 'Retiro en local', emoji: '🏃' },
    { value: 'delivery', label: 'Delivery', emoji: '🛵' },
  ]

  return (
    <div className="bg-miko-gray rounded-2xl p-1 flex gap-1">
      {options.map((option) => (
        <motion.button
          key={option.value}
          whileTap={{ scale: 0.97 }}
          onClick={() => setDeliveryType(option.value)}
          className={`relative flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-colors ${
            deliveryType === option.value
              ? 'text-white'
              : 'text-miko-white/40'
          }`}
        >
          {deliveryType === option.value && (
            <motion.div
              layoutId="delivery-toggle"
              className="absolute inset-0 bg-miko-pink rounded-xl"
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            />
          )}
          <span className="relative z-10">
            {option.emoji} {option.label}
          </span>
        </motion.button>
      ))}
    </div>
  )
}
