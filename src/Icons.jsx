const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ZapIcon(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <polygon points="8 5 19 12 8 19" />
    </svg>
  )
}

export function PersonIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  )
}

export function PresentationIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
      <path d="M7 12l3-3 2.5 2.5L17 7" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 16.5v2.7a1.6 1.6 0 0 1-1.75 1.6 15.8 15.8 0 0 1-6.9-2.45 15.6 15.6 0 0 1-4.8-4.8A15.8 15.8 0 0 1 5.1 4.75 1.6 1.6 0 0 1 6.7 3h2.7a1.6 1.6 0 0 1 1.6 1.38c.1.77.3 1.52.56 2.24a1.6 1.6 0 0 1-.36 1.68l-1.14 1.14a12.7 12.7 0 0 0 4.8 4.8l1.14-1.14a1.6 1.6 0 0 1 1.68-.36c.72.26 1.47.46 2.24.56A1.6 1.6 0 0 1 21 16.5z" />
    </svg>
  )
}

export function MicIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  )
}

export function CapIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </svg>
  )
}

export function MoreIcon(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </svg>
  )
}

export function StarIcon(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <polygon points="12 2.5 15.1 8.9 22.1 9.9 17.1 14.8 18.3 21.8 12 18.5 5.7 21.8 6.9 14.8 1.9 9.9 8.9 8.9" />
    </svg>
  )
}
