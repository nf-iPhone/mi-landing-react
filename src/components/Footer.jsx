export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-col footer-col-left">
            <span className="footer-logo">iPhone NF</span>
            <a
              href="https://maps.app.goo.gl/f4dMvY9ACQMTjv9u7"
              className="footer-location"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Limay 1238, Oficina 27 — San Antonio de Padua, Buenos Aires</span>
            </a>
          </div>

          <div className="footer-col footer-col-right">
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>

            <div className="footer-social">
              <a
                href="https://www.instagram.com/iphonee.nf/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de iPhone NF"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@iphonee.nf"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de iPhone NF"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Iphoneenf/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de iPhone NF"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="footer-copy">
          &copy; 2026 iPhone NF. Todos los derechos reservados. Conectamos tu mundo.
        </p>
      </div>
    </footer>
  )
}
