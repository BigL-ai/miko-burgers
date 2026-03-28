import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '../../stores/useCartStore'
import { formatPrice } from '../../utils/formatPrice'
import menuData from '../../data/menu.json'

export default function CustomizeModal({ item, isOpen, onClose }) {
  const addItem = useCartStore((state) => state.addItem)
  const [removedIngredients, setRemovedIngredients] = useState([])
  const [selectedExtras, setSelectedExtras] = useState([])

  if (!isOpen || !item) return null

  const ingredients = item.ingredients || []
  const extras = menuData.extras || []

  const toggleIngredient = (ingredient) => {
    setRemovedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    )
  }

  const toggleExtra = (extra) => {
    setSelectedExtras((prev) =>
      prev.find((e) => e.id === extra.id)
        ? prev.filter((e) => e.id !== extra.id)
        : [...prev, extra]
    )
  }

  const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0)
  const totalPrice = item.price + extrasTotal

  const handleAdd = () => {
    addItem({
      ...item,
      price: totalPrice,
      removedIngredients,
      selectedExtras,
      customId: `${item.id}-${Date.now()}`,
    })
    setRemovedIngredients([])
    setSelectedExtras([])
    onClose()
  }

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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-miko-dark border-t border-miko-pink/30"
          >
            <div className="p-6">
              {/* Handle */}
              <div className="w-10 h-1 bg-miko-white/20 rounded-full mx-auto mb-4" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-black flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-miko-white tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-miko-gold font-bold text-lg">
                    {formatPrice(item.price)}
                  </p>
                </div>
              </div>

              {/* Ingredientes */}
              {ingredients.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-miko-pink font-heading text-lg tracking-wider mb-3">
                    Ingredientes
                  </h4>
                  <p className="text-miko-white/40 text-xs mb-3">
                    Destilá los que no querés
                  </p>
                  <div className="space-y-2">
                    {ingredients.map((ingredient) => {
                      const isRemoved = removedIngredients.includes(ingredient)
                      return (
                        <button
                          key={ingredient}
                          onClick={() => toggleIngredient(ingredient)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${
                            isRemoved
                              ? 'bg-red-500/10 border-red-500/30 line-through text-miko-white/40'
                              : 'bg-miko-gray border-miko-gray text-miko-white'
                          }`}
                        >
                          <span className="text-sm">{ingredient}</span>
                          <span className="text-xs">
                            {isRemoved ? '✕ Sin' : '✓'}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Extras */}
              <div className="mb-6">
                <h4 className="text-miko-pink font-heading text-lg tracking-wider mb-3">
                  Extras
                </h4>
                <div className="space-y-2">
                  {extras.map((extra) => {
                    const isSelected = selectedExtras.find(
                      (e) => e.id === extra.id
                    )
                    return (
                      <button
                        key={extra.id}
                        onClick={() => toggleExtra(extra)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${
                          isSelected
                            ? 'bg-miko-pink/20 border-miko-pink/50 text-miko-white'
                            : 'bg-miko-gray border-miko-gray text-miko-white'
                        }`}
                      >
                        <span className="text-sm">{extra.name}</span>
                        <span
                          className={`text-sm font-bold ${isSelected ? 'text-miko-pink' : 'text-miko-gold'}`}
                        >
                          +{formatPrice(extra.price)}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Total + Agregar */}
              <div className="sticky bottom-0 bg-miko-dark pt-4 border-t border-miko-white/10">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAdd}
                  className="w-full bg-miko-pink text-white font-bold py-4 rounded-2xl text-lg"
                >
                  Agregar · {formatPrice(totalPrice)}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
