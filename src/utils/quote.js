export function formatIphoneModel(versionLabel) {
  const label = versionLabel.trim()
  return label.startsWith('iPhone') ? label : `iPhone ${label}`
}

export function buildProductQuoteMessage(product, specificVersion, isCtaClick) {
  if (specificVersion) {
    const fullModel = formatIphoneModel(specificVersion)
    return `Hola! Me interesa obtener más información y cotizar el ${fullModel}.`
  }

  if (isCtaClick) {
    const versionsList = product.versionLabels.map(formatIphoneModel).join(', ')
    return `Hola! Quiero cotizar el ${product.name}. Me interesan sus versiones disponibles (${versionsList}).`
  }

  return `Hola! Me interesa obtener más información sobre el ${product.name}.`
}

export const PLAN_CANJE_MESSAGE =
  'Hola! Me interesa acceder al Plan Canje. Mi objetivo es entregar mi equipo actual como parte de pago para actualizarme. ¿Cómo es el proceso de cotización?'

export const ACCESORIOS_PREMIUM_MESSAGE =
  'Hola, me gustaría consultar por el stock y precios de accesorios premium (cargadores, fundas o vidrios templados).'

export function buildOtherProductMessage(productName) {
  return `Hola! Me interesa recibir información y consultar disponibilidad sobre ${productName}`
}

export const WHATSAPP_PHONE = '5491168884097'

const emoji = {
  wave: String.fromCodePoint(0x1f44b),
  user: String.fromCodePoint(0x1f464),
  phone: String.fromCodePoint(0x1f4f1),
  wrench: String.fromCodePoint(0x1f527),
  memo: String.fromCodePoint(0x1f4dd),
}

export function buildWhatsAppUrl({ name, phone, subject, message }) {
  const text = [
    `¡Hola iPhone NF! ${emoji.wave}`,
    '',
    '*Solicitud de cotización*',
    '',
    `${emoji.user} *Nombre:* ${name}`,
    `${emoji.phone} *Teléfono:* ${phone}`,
    `${emoji.wrench} *Servicio:* ${subject}`,
    '',
    `${emoji.memo} *Detalles:*`,
    message,
    '',
    '¡Gracias! Quedo atento/a a su respuesta.',
  ].join('\n')

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`
}

export function scrollToContact() {
  const section = document.getElementById('contacto')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    window.history.replaceState(null, '', '#contacto')
  }
}
