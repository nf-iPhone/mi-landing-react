import { useFadeIn } from '../hooks/useFadeIn'

const ABOUT_CARDS = [
  {
    title: '¿Quiénes Somos?',
    content: (
      <>
        En <strong>iPhone NF</strong> nos dedicamos a conectar tu mundo a través de soluciones móviles
        de alta calidad. Nacimos con la misión de ofrecer un servicio transparente, seguro y de nivel
        premium para todos los usuarios de la manzana.
      </>
    ),
  },
  {
    title: 'Nuestro Compromiso',
    content: (
      <>
        Ya sea que busques actualizar tu equipo o reparar el actual, te garantizamos repuestos
        seleccionados, atención personalizada y una experiencia ágil sin complicaciones.
      </>
    ),
  },
]

export default function About() {
  const headerRef = useFadeIn()
  const cardOneRef = useFadeIn()
  const cardTwoRef = useFadeIn()

  return (
    <section id="nosotros" className="about-section">
      <div className="container">
        <div ref={headerRef} className="section-header fade-in">
          <span className="section-label">Nosotros</span>
          <h2>Pasión por Apple</h2>
          <p>Compromiso con la tecnología y mantenerte siempre comunicado.</p>
        </div>

        <div className="about-grid">
          <article ref={cardOneRef} className="about-card fade-in">
            <h3>{ABOUT_CARDS[0].title}</h3>
            <p>{ABOUT_CARDS[0].content}</p>
          </article>
          <article ref={cardTwoRef} className="about-card fade-in">
            <h3>{ABOUT_CARDS[1].title}</h3>
            <p>{ABOUT_CARDS[1].content}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
