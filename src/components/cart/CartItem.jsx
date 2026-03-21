import { motion } from 'framer-motion'
import { useCartStore } from '../../stores/useCartStore'
import { formatPrice } from '../../utils/formatPrice'
import QuantitySelector from '../ui/QuantitySelector'

export default function CartItem({ item }) {
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const deleteItem = useCartStore((state) => state.deleteItem)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex items-center gap-3 py-3 border-b border-miko-gray last:border-0"
    >
      <div className="flex-1 min-w-0">
        <h4 className="text-miko-white font-medium text-sm truncate">
          {item.name}
        </h4>
        <p className="text-miko-gold text-sm font-bold mt-1">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>

      <QuantitySelector
        quantity={item.quantity}
        onIncrease={() => addItem(item)}
        onDecrease={() => removeItem(item.id)}
      />

      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => deleteItem(item.id)}
        className="text-miko-white/40 hover:text-miko-pink p-1"
        aria-label="Eliminar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </motion.button>
    </motion.div>
  )
}
