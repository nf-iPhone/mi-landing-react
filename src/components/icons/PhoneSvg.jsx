export default function PhoneSvg({ bodyColor = '#1d1d1f' }) {
  return (
    <svg width="80" height="120" viewBox="0 0 80 120" fill="none" aria-hidden="true">
      <rect
        x="8"
        y="4"
        width="64"
        height="112"
        rx="12"
        fill={bodyColor}
        stroke={bodyColor}
        strokeWidth="2"
        className="phone-body"
      />
      <rect x="28" y="10" width="24" height="6" rx="3" fill="#0a0a0a" opacity="0.85" />
      <circle cx="40" cy="108" r="4" stroke="#86868b" strokeWidth="1.5" />
    </svg>
  )
}
