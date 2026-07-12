import { QuoteProvider } from './context/QuoteContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromoBanner from './components/PromoBanner'
import ProductGrid from './components/Catalog/ProductGrid'
import Services from './components/Services'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <QuoteProvider>
      <Navbar />
      <main>
        <Hero />
        <PromoBanner />
        <ProductGrid />
        <Services />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QuoteProvider>
  )
}

export default App
