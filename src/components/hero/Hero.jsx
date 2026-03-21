import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-12 text-center">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', damping: 15 }}
        className="flex justify-center"
      >
        <img
          src="/images/logo.png"
          alt="MIKO Burgers"
          className="w-48 h-48 object-contain drop-shadow-[0_0_25px_rgba(255,20,147,0.3)]"
          onError={(e) => {
            // Fallback: si no hay imagen, muestra texto
            e.target.style.display = 'none'
            e.target.nextElementSibling.style.display = 'block'
          }}
        />
        <div className="hidden">
          <h1 className="font-heading text-7xl text-miko-pink tracking-wider leading-none">
            MIKO
          </h1>
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-miko-white/60 mt-4 text-lg"
      >
        Smash burgers que pegan fuerte
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-miko-white/30 text-sm"
      >
        📍 Recoleta, Buenos Aires
      </motion.div>
    </section>
  )
}
