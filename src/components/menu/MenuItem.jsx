import { useState } from 'react'
import { motion } from 'framer-motion'
import { formatPrice } from '../../utils/formatPrice'
import CustomizeModal from './CustomizeModal'

export default function MenuItem({ item }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        className="bg-miko-gray rounded-2xl overflow-hidden border border-miko-gray hover:border-miko-pink/30 transition-colors"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] bg-black overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          {item.popular && (
            <span className="absolute top-2 left-2 bg-miko-pink text-white text-xs font-bold px-2 py-1 rounded-full">
              POPULAR
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-heading text-xl text-miko-white tracking-wide">
            {item.name}
          </h3>
          <p className="text-miko-white/60 text-sm mt-1 leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-miko-gold font-bold text-lg">
              {formatPrice(item.price)}
            </span>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setModalOpen(true)}
              className="bg-miko-pink text-white font-bold text-sm px-4 py-2 rounded-xl active:bg-miko-pink/80 transition-colors"
            >
              Agregar
            </motion.button>
          </div>
        </div>
      </motion.div>

      <CustomizeModal
        item={item}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
