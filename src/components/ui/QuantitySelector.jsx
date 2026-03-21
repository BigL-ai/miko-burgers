import { motion } from 'framer-motion'

export default function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-3 bg-miko-dark rounded-xl px-1 py-1">
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={onDecrease}
        className="w-8 h-8 rounded-lg bg-miko-gray text-miko-white font-bold text-lg flex items-center justify-center active:bg-miko-pink/30"
      >
        -
      </motion.button>
      <span className="text-miko-white font-bold text-sm w-4 text-center">
        {quantity}
      </span>
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={onIncrease}
        className="w-8 h-8 rounded-lg bg-miko-gray text-miko-white font-bold text-lg flex items-center justify-center active:bg-miko-pink/30"
      >
        +
      </motion.button>
    </div>
  )
}
