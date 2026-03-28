import { motion } from 'framer-motion'
import { useCartStore } from '../../stores/useCartStore'
import { formatPrice } from '../../utils/formatPrice'
import QuantitySelector from '../ui/QuantitySelector'

export default function CartItem({ item }) {
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const deleteItem = useCartStore((state) => state.deleteItem)

  const itemKey = item.customId || item.id

  const hasCustomizations =
    (item.removedIngredients && item.removedIngredients.length > 0) ||
    (item.selectedExtras && item.selectedExtras.length > 0)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex items-start gap-3 py-3 border-b border-miko-gray last:border-0"
    >
      <div className="flex-1 min-w-0">
        <h4 className="text-miko-white font-medium text-sm truncate">
          {item.name}
        </h4>

        {hasCustomizations && (
          <div className="mt-1 space-y-0.5">
            {item.removedIngredients?.map((ing) => (
              <p key={ing} className="text-red-400 text-xs">
                ✕ Sin {ing}
              </p>
            ))}
            {item.selectedExtras?.map((extra) => (
              <p key={extra.id} className="text-miko-pink text-xs">
                + {extra.name}
              </p>
            ))}
          </div>
        )}

        <p className="text-miko-gold text-sm font-bold mt-1">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>

      <QuantitySelector
        quantity={item.quantity}
        onIncrease={() => addItem({ ...item, quantity: undefined })}
        onDecrease={() => removeItem(itemKey)}
      />

      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => deleteItem(itemKey)}
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
