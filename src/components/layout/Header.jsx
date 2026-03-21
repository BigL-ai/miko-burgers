import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '../../stores/useCartStore'

export default function Header({ onCartClick }) {
  const totalItems = useCartStore((state) => state.totalItems())

  return (
    <header className="sticky top-0 z-50 bg-miko-black/90 backdrop-blur-md border-b border-miko-gray">
      <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src="/images/logo.png" alt="MIKO" className="h-10 w-auto" />

        {/* Cart button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onCartClick}
          className="relative p-2"
          aria-label="Ver carrito"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-miko-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>

          {/* Badge */}
          <AnimatePresence>
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 bg-miko-pink text-miko-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </header>
  )
}
