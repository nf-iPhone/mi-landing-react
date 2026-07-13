import { useFadeIn } from '../hooks/useFadeIn'

const COMMITMENTS = [
  {
    title: 'Equipos Verificados',
    description:
      'Cada iPhone de nuestro catálogo pasa por un testeo riguroso de más de 30 puntos (batería, cámaras, sensores) antes de ser entregado.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Transparencia Total',
    description:
      'Te mostramos el porcentaje real de batería y el estado estético exacto de cada equipo sin vueltas ni sorpresas.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Garantía y Soporte Real',
    description:
      'Al ser independiente, te atendemos personalmente. Tu equipo cuenta con garantía certificada y soporte directo ante cualquier duda postventa.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  },
]

function CommitmentCard({ commitment }) {
  const cardRef = useFadeIn()

  return (
    <article ref={cardRef} className="commitment-card fade-in">
      <div className="commitment-icon">{commitment.icon}</div>
      <h3>{commitment.title}</h3>
      <p>{commitment.description}</p>
    </article>
  )
}

export default function Commitments() {
  const headerRef = useFadeIn()

  return (
    <section id="compromisos" className="commitments-section">
      <div className="container">
        <div ref={headerRef} className="section-header fade-in">
          <span className="section-label">Confianza</span>
          <h2>Nuestros Compromisos</h2>
          <p>Comprá con tranquilidad: cada detalle está pensado para que tu experiencia sea premium de principio a fin.</p>
        </div>

        <div className="commitments-grid">
          {COMMITMENTS.map((commitment) => (
            <CommitmentCard key={commitment.title} commitment={commitment} />
          ))}
        </div>
      </div>
    </section>
  )
}
