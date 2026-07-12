import { useRef } from 'react'
import { useQuote } from '../context/QuoteContext'
import { useClickOutside } from '../hooks/useClickOutside'
import { useFadeIn } from '../hooks/useFadeIn'
import { buildWhatsAppUrl } from '../utils/quote'

export default function ContactForm() {
  const infoRef = useFadeIn()
  const formFadeRef = useFadeIn()
  const formWrapRef = useRef(null)
  const {
    name,
    phone,
    subject,
    message,
    setName,
    setPhone,
    setSubject,
    setMessage,
    resetForm,
  } = useQuote()

  useClickOutside(formWrapRef, resetForm)

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedPhone || !subject || !trimmedMessage) return

    const url = buildWhatsAppUrl({
      name: trimmedName,
      phone: trimmedPhone,
      subject,
      message: trimmedMessage,
    })

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="contact-layout">
          <div ref={infoRef} className="contact-info fade-in">
            <span className="section-label">Contacto</span>
            <h2>Solicitá tu Cotización</h2>
            <p>Completá el formulario y te redirigimos a WhatsApp con tu solicitud lista para enviar.</p>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <strong>WhatsApp</strong>
                <span>
                  <a
                    href="https://wa.link/xebnz1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-whatsapp-link"
                  >
                    11 6888-4097
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div ref={formWrapRef} className="contact-form-wrap">
            <div ref={formFadeRef} className="fade-in">
            <form id="cotizacionForm" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Ej: Juan Pérez"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Ej: 11 6888-4097"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">¿Qué servicio necesitás?</label>
                <select
                  name="subject"
                  id="subject"
                  className="form-control"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Seleccioná una opción
                  </option>
                  <option value="Comprar un iPhone">Comprar un iPhone</option>
                  <option value="Servicio Técnico">Servicio Técnico</option>
                  <option value="Plan Canje">Plan Canje</option>
                  <option value="Otra Consulta">Otra Consulta</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Detalles (modelo, GB, falla o lo que busques)</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Ej: iPhone 12 de 128GB para canje, o presupuesto cambio de batería iPhone 11..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-submit">
                Enviar por WhatsApp
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
