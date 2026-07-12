import { useEffect, useRef } from 'react'
import { PRODUCTS, OTHER_PRODUCTS } from '../../data/products'
import { useQuote } from '../../context/QuoteContext'
import { useFadeIn } from '../../hooks/useFadeIn'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const headerRef = useFadeIn()
  const otherRef = useFadeIn()
  const gridRef = useRef(null)
  const { selectOtherProduct } = useQuote()

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return undefined

    const cards = grid.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="products-section" id="productos">
      <div className="container">
        <div ref={headerRef} className="section-header fade-in">
          <span className="section-label">Catálogo</span>
          <h2>Catálogo iPhone</h2>
          <p>Desde el iPhone 11 hasta el 17. Cada modelo incluye todas sus versiones disponibles.</p>
        </div>

        <div className="products-grid" ref={gridRef} role="list">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div ref={otherRef} className="other-products fade-in">
          <p className="other-products-text">
            ¿Buscás complementar tu ecosistema? Consultanos también por:{' '}
            <span className="other-products-links">
              {OTHER_PRODUCTS.map((productName, index) => (
                <span key={productName}>
                  {index > 0 && (
                    <span className="other-products-sep" aria-hidden="true">
                      •
                    </span>
                  )}
                  <button
                    type="button"
                    className="other-product-link"
                    onClick={() => selectOtherProduct(productName)}
                  >
                    {productName}
                  </button>
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
