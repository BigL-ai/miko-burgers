import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import Hero from './components/hero/Hero'
import MenuList from './components/menu/MenuList'
import CartDrawer from './components/cart/CartDrawer'
import FloatingCartBar from './components/cart/FloatingCartBar'
import DeliveryToggle from './components/order/DeliveryToggle'
import DeliveryForm from './components/order/DeliveryForm'
import GraffitiWall from './components/ui/GraffitiWall'
import { useOrderStore } from './stores/useOrderStore'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  // step: 'landing' | 'delivery-form' | 'menu'
  const [step, setStep] = useState('landing')
  const deliveryType = useOrderStore((state) => state.deliveryType)
  const address = useOrderStore((state) => state.address)
  const floor = useOrderStore((state) => state.floor)

  const handleTypeSelected = (type) => {
    if (type === 'takeaway') {
      setStep('menu')
      setTimeout(() => {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      setStep('delivery-form')
    }
  }

  const apartment = useOrderStore((state) => state.apartment)
  const canAdvanceDelivery = address.trim().length > 0 && floor.trim().length > 0 && apartment.trim().length > 0

  const handleDeliveryAdvance = () => {
    if (!canAdvanceDelivery) return
    setStep('menu')
    setTimeout(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <GraffitiWall />
      <Layout onCartClick={() => setCartOpen(true)}>
        <Hero />

        {/* Paso 1: Elegir tipo de retiro */}
        <section className="mt-4 mb-6">
          <AnimatePresence mode="wait">
            {step === 'landing' && (
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h2 className="font-heading text-2xl text-miko-pink tracking-wider mb-4 text-center">
                  ¿Cómo lo querés?
                </h2>
                <div className="flex flex-col gap-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      useOrderStore.getState().setDeliveryType('takeaway')
                      handleTypeSelected('takeaway')
                    }}
                    className="w-full bg-miko-gray border border-miko-gray hover:border-miko-pink/50 text-white font-bold py-4 rounded-2xl text-lg transition-colors"
                  >
                    🏃 Retiro en local
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      useOrderStore.getState().setDeliveryType('delivery')
                      handleTypeSelected('delivery')
                    }}
                    className="w-full bg-miko-gray border border-miko-gray hover:border-miko-pink/50 text-white font-bold py-4 rounded-2xl text-lg transition-colors"
                  >
                    🛵 Delivery
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 'delivery-form' && (
              <motion.div
                key="delivery-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h2 className="font-heading text-2xl text-miko-pink tracking-wider mb-4 text-center">
                  ¿A dónde te lo llevamos?
                </h2>
                <DeliveryForm alwaysVisible />

                <motion.button
                  whileTap={canAdvanceDelivery ? { scale: 0.95 } : {}}
                  onClick={handleDeliveryAdvance}
                  className={`w-full mt-4 font-bold py-3 rounded-2xl text-lg transition-colors ${
                    canAdvanceDelivery
                      ? 'bg-miko-pink text-white'
                      : 'bg-miko-gray text-miko-white/30 cursor-not-allowed'
                  }`}
                >
                  Ver Menú 🍔
                </motion.button>

                <button
                  onClick={() => setStep('landing')}
                  className="w-full mt-2 text-miko-white/40 text-sm py-2 hover:text-miko-white/60 transition-colors"
                >
                  ← Volver
                </button>
              </motion.div>
            )}

            {step === 'menu' && (
              <motion.div
                key="menu-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-miko-pink font-heading text-lg tracking-wider">
                      {deliveryType === 'delivery' ? '🛵 Delivery' : '🏃 Retiro en local'}
                    </span>
                  </div>
                  <button
                    onClick={() => setStep('landing')}
                    className="text-miko-white/40 text-sm hover:text-miko-white/60 transition-colors"
                  >
                    Cambiar ✏️
                  </button>
                </div>

                {deliveryType === 'delivery' && (
                  <div className="mb-4 bg-miko-pink/10 border border-miko-pink/20 rounded-xl px-4 py-2">
                    <p className="text-miko-pink text-xs font-medium text-center">
                      🛵 Envío a Recoleta · +$3.000 por pedido
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Paso 3: Menú */}
        <AnimatePresence>
          {step === 'menu' && (
            <motion.section
              id="menu"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="scroll-mt-20"
            >
              <MenuList />
            </motion.section>
          )}
        </AnimatePresence>

      </Layout>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      {step === 'menu' && <FloatingCartBar onCartClick={() => setCartOpen(true)} />}
    </>
  )
}

export default App
