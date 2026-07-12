import { useFadeIn } from '../hooks/useFadeIn'

export default function Hero() {
  const fadeRef = useFadeIn()

  return (
    <section className="hero" id="inicio">
      <div ref={fadeRef} className="container hero-content fade-in">
        <span className="hero-badge">Conectamos tu mundo</span>
        <h1>
          Experiencia Apple Premium
          <br />
          A Tu Alcance
        </h1>
        <p className="hero-subtitle">
          Especialistas en venta, servicio técnico y asesoramiento personalizado para que tu
          ecosistema iPhone rinda al máximo nivel.
        </p>
        <div className="hero-actions">
          <a href="#contacto" className="btn">
            Cotizar mi iPhone
          </a>
          <a href="#productos" className="btn btn-ghost">
            Ver productos
          </a>
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Garantía incluida
          </div>
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Respuesta en 24 hs
          </div>
          <div className="trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Equipos certificados
          </div>
        </div>
      </div>
    </section>
  )
}
