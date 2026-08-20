import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
  ZapIcon,
  ArrowRightIcon,
  PlayIcon,
  PersonIcon,
  PresentationIcon,
  PhoneIcon,
  MicIcon,
  CapIcon,
  MoreIcon,
  StarIcon,
} from './Icons'
import './App.css'

const WAVE_BAR_COUNT = 22
const SCORE = 71
const RING_RADIUS = 26
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

const TOOLS = [
  { label: 'Mock Interviews', Icon: PersonIcon },
  { label: 'Sales Pitches', Icon: PresentationIcon },
  { label: 'Customer Calls', Icon: PhoneIcon },
  { label: 'Public Speaking', Icon: MicIcon },
  { label: 'Admissions', Icon: CapIcon },
]

function App() {
  const container = useRef(null)
  const scoreRingRef = useRef(null)

  useGSAP(
    () => {
      const ringOffset =
        RING_CIRCUMFERENCE - (SCORE / 100) * RING_CIRCUMFERENCE

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.badge', { y: 16, opacity: 0, duration: 0.6 })
        .from(
          '.hero-title-line',
          { y: 44, opacity: 0, duration: 0.8, stagger: 0.15 },
          '-=0.35'
        )
        .from('.hero-desc', { y: 18, opacity: 0, duration: 0.7 }, '-=0.5')
        .from(
          '.hero-actions .btn',
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 },
          '-=0.45'
        )
        .from(
          '.hero-divider',
          { scaleX: 0, transformOrigin: 'left', duration: 0.6 },
          '-=0.35'
        )
        .from(
          '.hero-social-proof',
          { y: 16, opacity: 0, duration: 0.6 },
          '-=0.4'
        )
        .from(
          '.video-card',
          { opacity: 0, scale: 0.94, duration: 0.9 },
          '-=0.9'
        )
        .from(
          '.floating-card',
          { x: 36, opacity: 0, duration: 0.7, stagger: 0.15 },
          '-=0.6'
        )
        .fromTo(
          scoreRingRef.current,
          { strokeDashoffset: RING_CIRCUMFERENCE },
          { strokeDashoffset: ringOffset, duration: 1.1, ease: 'power2.out' },
          '-=0.4'
        )
        .from(
          '.progress-fill',
          { scaleX: 0, transformOrigin: 'left', duration: 0.8, stagger: 0.1 },
          '-=0.9'
        )
        .from('.tool-nav', { y: 16, opacity: 0, duration: 0.6 }, '-=0.3')

      gsap.to('.live-dot', {
        opacity: 0.15,
        duration: 0.7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.wave-bar', {
        scaleY: () => gsap.utils.random(0.25, 1),
        duration: 0.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
        stagger: { each: 0.04, from: 'random' },
      })

      gsap.to('.listening-dot', {
        opacity: 0.15,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, repeat: -1, yoyo: true },
      })
    },
    { scope: container }
  )

  return (
    <header className="hero" ref={container}>
      <div className="hero-left">
        <div className="badge">
          <ZapIcon className="badge-icon" />
          AI COMMUNICATION PLATFORM
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">Every pitch,</span>
          <span className="hero-title-line accent">perfected.</span>
        </h1>

        <p className="hero-desc">
          Practice any conversation with AI roleplay. Get real-time coaching
          during live calls. Showcase your skills to the world.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary">
            Start free practice
            <ArrowRightIcon width={18} height={18} />
          </button>
          <button className="btn btn-secondary">Watch the film</button>
        </div>

        <div className="hero-divider" />

        <div className="hero-social-proof">
          <div className="avatar-stack">
            <span className="avatar" />
            <span className="avatar" />
            <span className="avatar" />
          </div>
          <div className="proof-text">
            <span className="proof-loved">Loved by 2.5M+ users</span>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={16} height={16} />
              ))}
              <span className="rating">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="video-row">
          <div className="video-card">
            <span className="live-badge">
              <span className="live-dot" />
              LIVE COACHING
            </span>
            <div className="video-placeholder" />
            <button className="play-btn" aria-label="Play video">
              <PlayIcon width={22} height={22} />
            </button>
          </div>

          <div className="side-cards">
            <div className="floating-card interviewer-card">
              <span className="card-label">AI INTERVIEWER</span>
              <div className="waveform">
                {Array.from({ length: WAVE_BAR_COUNT }).map((_, i) => (
                  <span key={i} className="wave-bar" />
                ))}
              </div>
              <p className="card-question">
                Why do you want to join our team?
              </p>
              <span className="listening">
                Listening...
                <span className="listening-dots">
                  <i className="listening-dot" />
                  <i className="listening-dot" />
                  <i className="listening-dot" />
                </span>
              </span>
            </div>

            <div className="floating-card feedback-card">
              <span className="card-label">AI COACH FEEDBACK</span>
              <div className="feedback-body">
                <svg
                  className="score-ring"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r={RING_RADIUS}
                    className="score-ring-track"
                  />
                  <circle
                    ref={scoreRingRef}
                    cx="32"
                    cy="32"
                    r={RING_RADIUS}
                    className="score-ring-fg"
                    strokeDasharray={RING_CIRCUMFERENCE}
                  />
                  <text x="32" y="38" className="score-ring-text">
                    {SCORE}
                  </text>
                </svg>
                <p className="feedback-text">
                  Great performance! Keep your pace and reduce filler words.
                </p>
              </div>
              <div className="progress-bars">
                <div className="progress-track">
                  <div className="progress-fill progress-green" />
                </div>
                <div className="progress-track">
                  <div className="progress-fill progress-orange" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="tool-nav">
          {TOOLS.map(({ label, Icon }) => (
            <button key={label} className="tool-item">
              <Icon />
              <span>{label}</span>
            </button>
          ))}
          <button className="tool-item tool-more" aria-label="More tools">
            <MoreIcon />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default App
