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
  const [stepStarted, setStepStarted] = useState(false)
  const deliveryType = useOrderStore((state) => state.deliveryType)

  const handleStart = () => {
    setStepStarted(true)
    // Scroll suave al menú después de elegir
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
          <h2 className="font-heading text-2xl text-miko-pink tracking-wider mb-4 text-center">
            Como lo queres?
          </h2>
          <DeliveryToggle />
          <DeliveryForm />

          {!stepStarted && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
              className="w-full mt-4 bg-miko-pink text-white font-bold py-3 rounded-2xl text-lg"
            >
              Ver Menu
            </motion.button>
          )}
        </section>

        {/* Paso 2: Menú (solo se muestra después de elegir) */}
        <AnimatePresence>
          {stepStarted && (
            <motion.section
              id="menu"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="scroll-mt-20"
            >
              {deliveryType === 'delivery' && (
                <div className="mb-4 bg-miko-pink/10 border border-miko-pink/20 rounded-xl px-4 py-2">
                  <p className="text-miko-pink text-xs font-medium text-center">
                    🛵 Envio a Recoleta: $3.000 por pedido
                  </p>
                </div>
              )}
              <MenuList />
            </motion.section>
          )}
        </AnimatePresence>

      </Layout>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <FloatingCartBar onCartClick={() => setCartOpen(true)} />
    </>
  )
}

export default App
