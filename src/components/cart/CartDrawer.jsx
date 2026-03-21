import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '../../stores/useCartStore'
import { useOrderStore } from '../../stores/useOrderStore'
import { formatPrice } from '../../utils/formatPrice'
import CartItem from './CartItem'
import CustomerForm from '../order/CustomerForm'
import WhatsAppButton from '../order/WhatsAppButton'
import menuData from '../../data/menu.json'

export default function CartDrawer({ isOpen, onClose }) {
  const items = useCartStore((state) => state.items)
  const totalPrice = useCartStore((state) => state.totalPrice())
  const clearCart = useCartStore((state) => state.clearCart)
  const deliveryType = useOrderStore((state) => state.deliveryType)

  const isDelivery = deliveryType === 'delivery'
  const deliveryFee = isDelivery ? menuData.config.deliveryFee : 0
  const finalTotal = totalPrice + deliveryFee

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-miko-dark z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-miko-gray">
              <h2 className="font-heading text-2xl text-miko-pink tracking-wider">
                Tu Pedido
              </h2>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-miko-white/60 hover:text-miko-white p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-miko-white/40 text-lg">Tu carrito esta vacio</p>
                  <p className="text-miko-white/20 text-sm mt-2">Agrega burgers para empezar</p>
                </div>
              ) : (
                <>
                  <AnimatePresence>
                    {items.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </AnimatePresence>

                  {/* Totals */}
                  <div className="mt-4 pt-4 border-t border-miko-gray space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-miko-white/60">Subtotal</span>
                      <span className="text-miko-white">{formatPrice(totalPrice)}</span>
                    </div>
                    {isDelivery && (
                      <div className="flex justify-between text-sm">
                        <span className="text-miko-white/60">Envio (Recoleta)</span>
                        <span className="text-miko-white">{formatPrice(deliveryFee)}</span>
                      </div>
                    )}
                    {!isDelivery && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-400">Retiro en local</span>
                        <span className="text-green-400">Te ahorras {formatPrice(deliveryFee > 0 ? deliveryFee : menuData.config.deliveryFee)}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-2 border-t border-miko-gray">
                      <span className="text-miko-white font-bold">Total</span>
                      <span className="text-miko-gold font-bold text-xl">{formatPrice(finalTotal)}</span>
                    </div>
                  </div>

                  {/* Checkout: nombre + WhatsApp */}
                  <div className="mt-6 space-y-4">
                    <CustomerForm />
                    <WhatsAppButton />
                  </div>

                  {/* Vaciar */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={clearCart}
                    className="w-full mt-4 border border-miko-gray text-miko-white/40 font-medium py-2 rounded-xl text-sm"
                  >
                    Vaciar carrito
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
