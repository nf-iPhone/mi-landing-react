import { useState } from 'react'
import PhoneSvg from '../icons/PhoneSvg'
import { useQuote } from '../../context/QuoteContext'

function ColorVisual({ color, productName, isActive }) {
  const [hasImage, setHasImage] = useState(Boolean(color.image))

  const handleError = () => {
    setHasImage(false)
  }

  return (
    <div className={`product-color-layer${isActive ? ' active' : ''}`} aria-hidden={!isActive}>
      {hasImage && color.image ? (
        <img
          className="product-image"
          src={color.image}
          alt={`${productName} ${color.name}`}
          loading="lazy"
          onError={handleError}
        />
      ) : (
        <div className="product-visual-fallback">
          <PhoneSvg bodyColor={color.swatch} />
        </div>
      )}
    </div>
  )
}

export default function ProductCard({ product }) {
  const { selectProductForQuote } = useQuote()
  const colors = product.colors ?? []
  const isNew = product.tag === 'Nuevo'
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const selectedColor = colors[selectedColorIndex]

  const handleCardClick = (event) => {
    if (event.target.closest('.product-version-pill, .product-card-cta, .color-swatch')) return
    selectProductForQuote(product.id)
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    if (event.target.closest('.product-version-pill, .product-card-cta, .color-swatch')) return
    event.preventDefault()
    selectProductForQuote(product.id)
  }

  const handleVersionClick = (event, versionLabel) => {
    event.stopPropagation()
    selectProductForQuote(product.id, versionLabel)
  }

  const handleVersionKeyDown = (event, versionLabel) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    event.stopPropagation()
    selectProductForQuote(product.id, versionLabel)
  }

  const handleCtaClick = (event) => {
    event.stopPropagation()
    selectProductForQuote(product.id, null, true)
  }

  const handleCtaKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    event.stopPropagation()
    selectProductForQuote(product.id, null, true)
  }

  const handleColorSelect = (event, index) => {
    event.stopPropagation()
    setSelectedColorIndex(index)
  }

  const handleColorKeyDown = (event, index) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    event.stopPropagation()
    setSelectedColorIndex(index)
  }

  return (
    <article
      className="product-card fade-in"
      role="listitem"
      tabIndex={0}
      aria-label={`${product.name}. ${product.tagline}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      <div className="product-card-visual product-card-visual--colors">
        <div className="product-image-stage">
          {colors.map((color, index) => (
            <ColorVisual
              key={color.id}
              color={color}
              productName={product.name}
              isActive={index === selectedColorIndex}
            />
          ))}
        </div>
      </div>

      {colors.length > 0 && (
        <div className="product-color-picker" onClick={(event) => event.stopPropagation()}>
          <p className="product-color-name">{selectedColor?.name}</p>
          <div className="color-swatches" role="listbox" aria-label={`Colores de ${product.name}`}>
            {colors.map((color, index) => (
              <button
                key={color.id}
                type="button"
                className={`color-swatch${index === selectedColorIndex ? ' selected' : ''}`}
                role="option"
                aria-selected={index === selectedColorIndex}
                aria-label={color.name}
                title={color.name}
                onClick={(event) => handleColorSelect(event, index)}
                onKeyDown={(event) => handleColorKeyDown(event, index)}
              >
                <span className="color-swatch-inner" style={{ backgroundColor: color.swatch }} />
              </button>
            ))}
          </div>
        </div>
      )}

      <span className="product-tag">{product.tag}</span>
      <h3>{product.name}</h3>
      <p className="product-versions-hint">Ver versiones disponibles</p>

      <div className="product-versions" aria-label="Variantes disponibles">
        {product.versionLabels.map((label) => (
          <span
            key={label}
            className="product-version-pill"
            role="button"
            tabIndex={0}
            onClick={(event) => handleVersionClick(event, label)}
            onKeyDown={(event) => handleVersionKeyDown(event, label)}
          >
            {label}
          </span>
        ))}
      </div>

      <p className="product-desc">{product.description}</p>

      <div className="product-card-footer">
        <p className="product-price">
          {product.priceFrom} <span>Cotización gratuita</span>
        </p>
        <div className="product-card-purchase">
          <span
            className="product-card-cta"
            role="button"
            tabIndex={0}
            onClick={handleCtaClick}
            onKeyDown={handleCtaKeyDown}
          >
            Cotizar este modelo →
          </span>
          <div className="product-card-trust-badges" aria-label="Beneficios de compra">
            <div className="product-card-trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Garantía incluida</span>
            </div>
            <div className="product-card-trust-item">
              {isNew ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
                  <line x1="23" y1="13" x2="23" y2="11" />
                  <line x1="6" y1="10" x2="6" y2="14" />
                  <line x1="10" y1="10" x2="10" y2="14" />
                  <line x1="14" y1="10" x2="14" y2="14" />
                </svg>
              )}
              <span>{isNew ? 'Caja sellada' : 'Batería testeada'}</span>
            </div>
            <div className="product-card-trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span>Envío seguro</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
