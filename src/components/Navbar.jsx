import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      id="navbar"
      aria-label="Navegación principal"
    >
      <div className="container nav-inner">
        <a href="#inicio" className="logo-brand-container" aria-label="iPhone NF — Inicio">
          <div className="logo-img-wrapper">
            <img src="/assets/logo.jpeg" alt="iPhone NF Isotipo" />
          </div>
          <div className="logo-divider"></div>
          <div className="logo-meta-text">
            <span className="meta-title">iPhone NF</span>
            <span className="meta-subtitle">Premium Reseller</span>
          </div>
        </a>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#productos" onClick={closeMenu}>Productos</a></li>
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
          <li><a href="#contacto" className="btn btn-sm nav-cta" onClick={closeMenu}>Cotizar</a></li>
        </ul>
      </div>
    </nav>
  )
}
