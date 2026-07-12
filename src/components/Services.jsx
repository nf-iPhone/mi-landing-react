import { useFadeIn } from '../hooks/useFadeIn'
import { useQuote } from '../context/QuoteContext'

const SERVICES = [
  {
    title: 'Venta de Equipos',
    description: 'Modelos nuevos y seminuevos certificados con garantía. Encontrá el iPhone perfecto para vos.',
    emoji: '📱',
  },
  {
    title: 'Servicio Técnico',
    description: 'Cambios de módulo, batería y reparaciones con altos estándares de precisión y cuidado.',
    emoji: '🛠️',
  },
  {
    title: 'Plan Canje',
    description: 'Tomamos tu equipo actual en forma de pago para que accedas a tu próximo dispositivo fácilmente.',
    planCanje: true,
    emoji: '🔄',
  },
  {
    title: 'Accesorios Premium',
    description: 'Fundas, vidrios templados y cargadores homologados para proteger lo que más querés.',
    emoji: '🛡️',
  },
]

function ServiceCard({ service, onPlanCanje }) {
  const fadeRef = useFadeIn()

  const handleKeyDown = (event) => {
    if (!service.planCanje) return
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    onPlanCanje()
  }

  return (
    <article
      ref={fadeRef}
      className={`service-card fade-in${service.planCanje ? ' plan-canje-trigger' : ''}`}
      role={service.planCanje ? 'button' : undefined}
      tabIndex={service.planCanje ? 0 : undefined}
      aria-label={service.planCanje ? 'Consultar Plan Canje' : undefined}
      onClick={service.planCanje ? onPlanCanje : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className="service-icon" aria-hidden="true">
        {service.emoji}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  )
}

export default function Services() {
  const headerRef = useFadeIn()
  const { selectPlanCanje } = useQuote()

  return (
    <section id="servicios">
      <div className="container">
        <div ref={headerRef} className="section-header fade-in">
          <span className="section-label">Servicios</span>
          <h2>Todo lo que necesitás</h2>
          <p>Soluciones diseñadas a la medida de tus necesidades tecnológicas.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              onPlanCanje={selectPlanCanje}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
