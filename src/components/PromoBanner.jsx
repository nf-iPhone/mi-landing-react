import { useFadeIn } from '../hooks/useFadeIn'
import { useQuote } from '../context/QuoteContext'

export default function PromoBanner() {
  const fadeRef = useFadeIn()
  const { selectPlanCanje } = useQuote()

  return (
    <section className="promo-section">
      <div className="container">
        <div ref={fadeRef} className="promo-banner fade-in">
          <div>
            <h2>Plan Canje disponible</h2>
            <p>
              Entregá tu iPhone actual y accedé al modelo que querés con la mejor valuación del
              mercado.
            </p>
          </div>
          <button type="button" className="btn plan-canje-trigger" onClick={selectPlanCanje}>
            Consultar canje
          </button>
        </div>
      </div>
    </section>
  )
}
