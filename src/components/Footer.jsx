export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">iPhone NF</span>
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <a
          href="https://maps.app.goo.gl/f4dMvY9ACQMTjv9u7"
          className="footer-location"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="footer-location-text">
            <span className="footer-location-primary">Limay 1238, Oficina 27</span>
            <span className="footer-location-secondary">San Antonio de Padua, Buenos Aires</span>
          </span>
        </a>

        <p className="footer-copy">
          &copy; 2026 iPhone NF. Todos los derechos reservados. Conectamos tu mundo.
        </p>
      </div>
    </footer>
  )
}
