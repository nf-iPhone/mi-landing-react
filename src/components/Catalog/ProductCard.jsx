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
          {product.priceFrom} <span>/ desde</span>
        </p>
        <span
          className="product-card-cta"
          role="button"
          tabIndex={0}
          onClick={handleCtaClick}
          onKeyDown={handleCtaKeyDown}
        >
          Cotizar este modelo →
        </span>
      </div>
    </article>
  )
}
