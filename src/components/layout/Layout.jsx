import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, onCartClick }) {
  return (
    <div className="min-h-screen bg-miko-black/95 flex flex-col relative z-10">
      <Header onCartClick={onCartClick} />
      <main className="flex-1 max-w-lg mx-auto w-full px-4">
        {children}
      </main>
      <Footer />
    </div>
  )
}
