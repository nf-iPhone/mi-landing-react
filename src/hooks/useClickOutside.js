import { useEffect } from 'react'

const QUOTE_TRIGGER_SELECTOR = '.product-card, .plan-canje-trigger, .other-product-link'

export function useClickOutside(ref, onClickOutside) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current?.contains(event.target)) return
      if (event.target.closest(QUOTE_TRIGGER_SELECTOR)) return
      onClickOutside()
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [ref, onClickOutside])
}
