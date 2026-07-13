import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const FAQ_ITEMS = [
  {
    question: '¿Los equipos tienen garantía?',
    answer:
      'Sí, todos nuestros iPhones (tanto nuevos como seminuevos) cuentan con garantía certificada para que compres con total tranquilidad.',
  },
  {
    question: '¿Cuál es la condición estética y de batería de los equipos seminuevos?',
    answer:
      'Seleccionamos únicamente equipos en excelente estado (Grado A). Todos tienen componentes 100% originales, pantallas sin detalles y condiciones de batería óptimas (normalmente superiores al 85%).',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo (tanto pesos como dólares), transferencia bancaria y usdt al 0%.',
  },
  {
    question: '¿Hacen envíos o se puede retirar en persona?',
    answer:
      'Realizamos envíos seguros a todo el país y también coordinamos entregas presenciales en nuestra oficina de forma segura.',
  },
  {
    question: '¿Toman equipos en parte de pago (Plan Canje)?',
    answer:
      'Sí, tomamos modelos seleccionados de iPhone/Android como parte de pago. Podés detallar tu equipo actual para que lo evaluemos en minutos.',
  },
]

export default function FAQ() {
  const headerRef = useFadeIn()
  const listRef = useFadeIn()
  const [openIndex, setOpenIndex] = useState(null)

  const handleSummaryClick = (index) => (event) => {
    event.preventDefault()
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div ref={headerRef} className="section-header fade-in">
          <span className="section-label">Ayuda</span>
          <h2>Preguntas Frecuentes</h2>
          <p>Resolvemos las dudas más comunes antes de que nos escribas.</p>
        </div>

        <div ref={listRef} className="faq-list fade-in">
          {FAQ_ITEMS.map((item, index) => (
            <details key={item.question} className="faq-item" open={openIndex === index}>
              <summary onClick={handleSummaryClick(index)}>{item.question}</summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
