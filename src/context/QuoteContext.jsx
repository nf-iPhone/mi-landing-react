import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { PRODUCTS } from '../data/products'
import {
  ACCESORIOS_PREMIUM_MESSAGE,
  PLAN_CANJE_MESSAGE,
  buildOtherProductMessage,
  buildProductQuoteMessage,
  scrollToContact,
} from '../utils/quote'

const QuoteContext = createContext(null)

export function QuoteProvider({ children }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const resetForm = useCallback(() => {
    setName('')
    setPhone('')
    setSubject('')
    setMessage('')
  }, [])

  const selectProductForQuote = useCallback((productId, specificVersion = null, isCtaClick = false) => {
    const product = PRODUCTS.find((item) => item.id === productId)
    if (!product) return

    setSubject('Comprar un iPhone')
    setMessage(buildProductQuoteMessage(product, specificVersion, isCtaClick))
    scrollToContact()
  }, [])

  const selectPlanCanje = useCallback(() => {
    setSubject('Plan Canje')
    setMessage(PLAN_CANJE_MESSAGE)
    scrollToContact()
  }, [])

  const selectAccesoriosPremium = useCallback(() => {
    setSubject('Otra Consulta')
    setMessage(ACCESORIOS_PREMIUM_MESSAGE)
    scrollToContact()
  }, [])

  const selectOtherProduct = useCallback((productName) => {
    setSubject('Otra Consulta')
    setMessage(buildOtherProductMessage(productName))
    scrollToContact()
  }, [])

  const value = useMemo(
    () => ({
      name,
      phone,
      subject,
      message,
      setName,
      setPhone,
      setSubject,
      setMessage,
      resetForm,
      selectProductForQuote,
      selectPlanCanje,
      selectAccesoriosPremium,
      selectOtherProduct,
    }),
    [
      name,
      phone,
      subject,
      message,
      resetForm,
      selectProductForQuote,
      selectPlanCanje,
      selectAccesoriosPremium,
      selectOtherProduct,
    ],
  )

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const context = useContext(QuoteContext)
  if (!context) {
    throw new Error('useQuote debe usarse dentro de QuoteProvider')
  }
  return context
}
