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

export function PauseIcon(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
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

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
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

export function UsersIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20c0-3.5 2.9-5.5 6.5-5.5s6.5 2 6.5 5.5" />
      <path d="M16 8.3a3.2 3.2 0 1 1 1.6 6" />
      <path d="M21.5 20c0-2.8-1.7-4.6-4-5.2" />
    </svg>
  )
}

export function BuildingIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="12" height="18" rx="1" />
      <path d="M16 21h4V11l-4-3" />
      <path d="M8 7h.01M12 7h.01M8 11h.01M12 11h.01M8 15h.01M12 15h.01" />
    </svg>
  )
}

export function ThumbsUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3z" />
      <path d="M7 11l4-7a2.2 2.2 0 0 1 2.2 2.4L12.5 9H18a2 2 0 0 1 2 2.4l-1.4 7A2 2 0 0 1 16.6 20H10a3 3 0 0 1-3-3v-6z" />
    </svg>
  )
}

export function GlobeIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </svg>
  )
}

export function MicOffIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1-.4 1.5" />
      <path d="M6.5 10a5.5 5.5 0 0 0 8.4 4.7" />
      <path d="M12 18v3M8 21h8" />
      <line x1="3" y1="3" x2="21" y2="21" />
    </svg>
  )
}

export function VideoIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="13" height="12" rx="2" />
      <path d="M15.5 10.5 21 7v10l-5.5-3.5z" />
    </svg>
  )
}

export function PitchBubbleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 5.5A2 2 0 0 1 5 3.5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9l-4.5 4v-4H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="10" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ChartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 3v16a1 1 0 0 0 1 1h16" />
      <path d="M6 15l4-5 3.5 3L19 7" />
    </svg>
  )
}

export function RocketIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2c3 1.5 5 5 5 9.5 0 2-1 4-1 4H8s-1-2-1-4C7 7 9 3.5 12 2z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M8.5 15.5 6 18l1-3.5M15.5 15.5 18 18l-1-3.5" />
      <path d="M10 19.5 12 22l2-2.5" />
    </svg>
  )
}

export function TrendingUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16l6-6 4 4 8-9" />
      <path d="M15 5h6v6" />
    </svg>
  )
}

export function BriefcaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="7.5" width="19" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M2.5 13h19M10.5 13v1.5h3V13" />
    </svg>
  )
}

export function GridIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  )
}

export function TargetIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ReportsBarsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V9M9 21V3M15 21v-7M21 21v-4" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export function AudioBarsIcon(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" viewBox="0 0 24 24" {...props}>
      <rect x="2.5" y="9" width="2.6" height="6" rx="1.3" />
      <rect x="8" y="4.5" width="2.6" height="15" rx="1.3" />
      <rect x="13.5" y="7.5" width="2.6" height="9" rx="1.3" />
      <rect x="19" y="2.5" width="2.6" height="19" rx="1.3" />
    </svg>
  )
}
