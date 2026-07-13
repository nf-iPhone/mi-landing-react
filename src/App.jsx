import { QuoteProvider } from './context/QuoteContext'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromoBanner from './components/PromoBanner'
import ProductGrid from './components/Catalog/ProductGrid'
import Services from './components/Services'
import Commitments from './components/Commitments'
import About from './components/About'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <QuoteProvider>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <PromoBanner />
        <ProductGrid />
        <Services />
        <Commitments />
        <About />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QuoteProvider>
  )
}

export default App
