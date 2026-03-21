import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '../../stores/useCartStore'
import { useOrderStore } from '../../stores/useOrderStore'
import { formatPrice } from '../../utils/formatPrice'
import menuData from '../../data/menu.json'

export default function FloatingCartBar({ onCartClick }) {
  const totalItems = useCartStore((state) => state.totalItems())
  const totalPrice = useCartStore((state) => state.totalPrice())
  const deliveryType = useOrderStore((state) => state.deliveryType)

  const deliveryFee = deliveryType === 'delivery' ? menuData.config.deliveryFee : 0
  const finalTotal = totalPrice + deliveryFee

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-miko-black via-miko-black/95 to-transparent pt-8"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onCartClick}
            className="w-full max-w-lg mx-auto bg-miko-pink text-white font-bold py-4 rounded-2xl flex items-center justify-between px-6 shadow-lg shadow-miko-pink/20"
          >
            <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
            <span className="text-lg">Ver Pedido</span>
            <span className="font-bold">{formatPrice(finalTotal)}</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
