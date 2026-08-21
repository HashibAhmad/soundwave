import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundWave from './BackgroundWave'
import {
  ZapIcon,
  ArrowRightIcon,
  PlayIcon,
  PauseIcon,
  PhoneIcon,
  MicIcon,
  MoreIcon,
  StarIcon,
  ChevronDownIcon,
  UsersIcon,
  BuildingIcon,
  ThumbsUpIcon,
  GlobeIcon,
  AudioBarsIcon,
  MicOffIcon,
  VideoIcon,
  PinIcon,
  GridIcon,
  TargetIcon,
  ReportsBarsIcon,
  PitchBubbleIcon,
  ChartIcon,
  RocketIcon,
  TrendingUpIcon,
  BriefcaseIcon,
} from './Icons'
import logoMark from './assets/pitch-logo-mark.png'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const WAVE_BAR_COUNT = 22
const SCORE = 71
const RING_RADIUS = 26
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

const TOOLS = [
  { label: 'Elevator Pitch', Icon: PitchBubbleIcon },
  { label: 'Sales Pitch', Icon: ChartIcon },
  { label: 'Product Pitch', Icon: RocketIcon },
  { label: 'Investor Pitch', Icon: TrendingUpIcon },
  { label: 'Business Pitch', Icon: BriefcaseIcon },
]

const STATS = [
  { label: 'Interviews analyzed', value: '1M+', Icon: UsersIcon },
  { label: 'Institutions worldwide', value: '250+', Icon: BuildingIcon },
  { label: 'User satisfaction', value: '98%', Icon: ThumbsUpIcon },
  { label: 'Countries supported', value: '50+', Icon: GlobeIcon },
]

const PROVE_TAGS = ['Strategic Thinker', 'Clear Communicator', 'Problem Solver']

const PROVE_STATS = [
  { label: 'Storylines', value: '12' },
  { label: 'Avg. Rating', value: '4.9' },
  { label: 'Response Rate', value: '97%' },
]

const RECRUITERS = ['Google', 'Microsoft', 'amazon', 'Deloitte.']

const TEAMS_NAV = [
  { label: 'Overview', Icon: GridIcon, active: true },
  { label: 'Teams', Icon: UsersIcon },
  { label: 'Skills', Icon: TargetIcon },
  { label: 'Reports', Icon: ReportsBarsIcon },
]

const TEAM_METRICS = [
  { label: 'Readiness Score', value: '85', change: '+14%' },
  { label: 'Conversations', value: '2,450', change: '+18%' },
  { label: 'Win Rate Impact', value: '23%', change: '+9%' },
]

const CHART_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const CHART_POINTS = [
  { x: 40, y: 160 },
  { x: 172, y: 178 },
  { x: 304, y: 90 },
  { x: 436, y: 108 },
  { x: 568, y: 100 },
  { x: 700, y: 20 },
]
const CHART_PATH =
  'M40,160 C90,150 110,190 172,178 C220,168 250,100 304,90 ' +
  'C350,82 390,120 436,108 C480,98 520,112 568,100 ' +
  'C610,90 650,60 700,20'

const FOOTER_COLUMNS = [
  ['Pitch Types', 'AI Feedback', 'Dashboard', 'Enterprise'],
  ['Blog', 'Guides', 'Career Tips', 'Help Center'],
  ['About Us', 'Careers', 'Contact Us', 'Partners'],
  ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
]

const PRACTICE_METRICS = [
  { label: 'Content', value: '90', unit: '/100', percent: 90 },
  { label: 'Delivery', value: '88', unit: '/100', percent: 88 },
  { label: 'Body Language', value: '87', unit: '/100', percent: 87 },
  { label: 'Filler Words', value: 'Good', percent: 100, good: true },
]

const NAV_LINKS = [
  { label: 'Platform', dropdown: true },
  { label: 'Solutions', dropdown: true },
  { label: 'Resources', dropdown: true },
  { label: 'Interview Board' },
  { label: 'Pricing' },
]

function App() {
  const container = useRef(null)
  const scoreRingRef = useRef(null)
  const scoreTextRef = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  useGSAP(
    () => {
      const ringOffset =
        RING_CIRCUMFERENCE - (SCORE / 100) * RING_CIRCUMFERENCE

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.topnav', { y: -20, opacity: 0, duration: 0.6 })
        .from('.badge', { y: 16, opacity: 0, duration: 0.6 }, '-=0.3')
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

      // Once the intro reveal settles, keep the feedback card "live" —
      // score and bars drift to new random values forever, like a real
      // in-progress coaching session.
      tl.eventCallback('onComplete', () => {
        const liveScore = { value: SCORE }
        gsap.to(liveScore, {
          value: () => gsap.utils.random(55, 93, 1),
          duration: 1.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
          onUpdate: () => {
            const value = Math.round(liveScore.value)
            if (scoreTextRef.current) scoreTextRef.current.textContent = value
            if (scoreRingRef.current) {
              scoreRingRef.current.style.strokeDashoffset =
                RING_CIRCUMFERENCE - (value / 100) * RING_CIRCUMFERENCE
            }
          },
        })

        gsap.to('.progress-green', {
          scaleX: () => gsap.utils.random(0.55, 0.95),
          transformOrigin: 'left',
          duration: 1.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
        })

        gsap.to('.progress-orange', {
          scaleX: () => gsap.utils.random(0.3, 0.75),
          transformOrigin: 'left',
          duration: 1.7,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
        })
      })

      // Stats bar eases up into place as it scrolls into view, and eases
      // back down to its original spot if you scroll away — scrub keeps it
      // tied directly to scroll position so both directions stay smooth.
      gsap.fromTo(
        '.stats-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.stats-bar',
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      )

      // Practice content converges in from the sides — text from the left,
      // the AI Buyer card from the right — and eases smoothly back out on
      // scroll-up since scrub ties the animation directly to scroll position.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.practice-section',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
        })
        .from('.practice-left', { x: -150, opacity: 0, ease: 'none' }, 0)
        .from('.practice-right', { x: 150, opacity: 0, ease: 'none' }, 0)

      // Perform content converges in from the sides too — video card from
      // the left, text from the right — reversible on scroll-up via scrub.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.perform-section',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
        })
        .from('.perform-left', { x: -150, opacity: 0, ease: 'none' }, 0)
        .from('.perform-right', { x: 150, opacity: 0, ease: 'none' }, 0)

      // Prove content converges in from the sides too — text from the
      // left, the storyline card from the right — reversible on scroll-up
      // via scrub.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.prove-section',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
        })
        .from('.prove-left', { x: -150, opacity: 0, ease: 'none' }, 0)
        .from('.prove-right', { x: 150, opacity: 0, ease: 'none' }, 0)

      // Teams content converges in from the sides too — text from the
      // left, the dashboard card from the right — reversible on scroll-up
      // via scrub.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.teams-section',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
        })
        .from('.teams-left', { x: -150, opacity: 0, ease: 'none' }, 0)
        .from('.teams-right', { x: 150, opacity: 0, ease: 'none' }, 0)

      // Closing CTA content converges vertically — heading from the top,
      // buttons from the bottom — reversible on scroll-up via scrub.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
        })
        .from('.cta-text', { y: -80, opacity: 0, ease: 'none' }, 0)
        .from('.cta-actions', { y: 80, opacity: 0, ease: 'none' }, 0)

      // Hero content parts ways as it scrolls out — text left, video/cards
      // right — and eases smoothly back on scroll-up since scrub ties the
      // animation directly to scroll position.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
        .to('.hero-left', { x: -150, opacity: 0, ease: 'none' }, 0)
        .to('.hero-right', { x: 150, opacity: 0, ease: 'none' }, 0)

      // Background animation zooms in and fades out as the hero scrolls
      // away, finishing exactly as the Practice section reaches the top.
      gsap.to('.bg-canvas', {
        scale: 1.5,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          endTrigger: '.practice-section',
          end: 'top top',
          scrub: 1,
        },
      })

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
    <div className="page" ref={container}>
      <BackgroundWave />

      <nav className="topnav">
        <div className="topnav-logo">
          <img src={logoMark} alt="" className="logo-mark" />
          Pitch.ai
        </div>

        <div className="topnav-links">
          {NAV_LINKS.map(({ label, dropdown }) => (
            <a key={label} href="#" className="topnav-link">
              {label}
              {dropdown && <ChevronDownIcon width={14} height={14} />}
            </a>
          ))}
        </div>

        <div className="topnav-actions">
          <a href="#" className="topnav-login">
            Log in
          </a>
          <button className="btn btn-nav-cta">Watch the film</button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-left">
          <div className="badge">
            <ZapIcon className="badge-icon" />
            AI-Powered Pitch Coach
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">Every pitch,</span>
            <span className="hero-title-line accent">perfected.</span>
          </h1>

          <p className="hero-desc">
            Practice any conversation with AI roleplay. Get real-time
            coaching during live calls. Showcase your skills to the world.
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
                Nancy (You)
              </span>
              <video
                ref={videoRef}
                className="video-media"
                src="/header-gsap.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <button
                className="play-btn"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <PauseIcon width={20} height={20} />
                ) : (
                  <PlayIcon width={22} height={22} />
                )}
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
                  Why should we choose you over the alternatives?
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
                    width="128"
                    height="128"
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
                    <text
                      ref={scoreTextRef}
                      x="32"
                      y="38"
                      className="score-ring-text"
                    >
                      {SCORE}
                    </text>
                  </svg>
                  <p className="feedback-text">
                    Great performance! Keep your pace and reduce filler
                    words.
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
              <span>&amp; more</span>
            </button>
          </nav>
        </div>
      </header>

      <section className="stats-bar">
        <div className="stats-card">
          {STATS.map(({ label, value, Icon }, i) => (
            <div className="stat-item" key={label}>
              {i > 0 && <span className="stat-divider" />}
              <div className="stat-top">
                <Icon className="stat-icon" width={18} height={18} />
                <span className="stat-value">{value}</span>
              </div>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="practice-section">
        <div className="practice-left">
          <span className="practice-eyebrow">Practice</span>
          <h2 className="practice-title">Rehearse with AI that argues back.</h2>
          <p className="practice-desc">
            Adaptive roleplay. Real objections. Realistic pressure. Real
            growth. Experience scenarios tailored to your exact industry and
            goals.
          </p>
          <a href="#" className="practice-link">
            Explore mock interviews
            <ArrowRightIcon width={16} height={16} />
          </a>
        </div>

        <div className="practice-right">
          <div className="practice-card">
            <div className="practice-card-header">
              <span className="pill pill-dark">
                <span className="pill-dot" />
                AI Buyer
              </span>
              <span className="pill pill-orange">Challenging Mode</span>
            </div>

            <div className="practice-media-row">
              <video
                className="practice-video"
                src="/header-gsap.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="practice-message">
                That&rsquo;s interesting. How is your solution different from
                what we already use?
              </div>
            </div>

            <div className="recording-pill">
              <MicIcon width={16} height={16} />
              <span>Recording... 01:24</span>
              <AudioBarsIcon
                width={20}
                height={16}
                className="recording-bars"
              />
            </div>

            <div className="practice-divider" />

            <div className="practice-metrics">
              {PRACTICE_METRICS.map(({ label, value, unit, percent, good }) => (
                <div className="metric-item" key={label}>
                  <span className="metric-label">{label}</span>
                  <div className="metric-value">
                    <span className={good ? 'metric-value-good' : ''}>
                      {value}
                    </span>
                    {unit && <span className="metric-unit">{unit}</span>}
                  </div>
                  <div className="metric-bar-track">
                    <div
                      className={`metric-bar-fill${good ? ' metric-bar-fill-good' : ''}`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="perform-section">
        <div className="perform-left">
          <div className="perform-card">
            <span className="pill pill-dark perform-badge">
              <span className="pill-dot" />
              Live Call Coaching
            </span>

            <video
              className="video-media"
              src="/header-gsap.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="floating-card coaching-tip">
              <span className="card-label">Coaching Tip</span>
              <p className="coaching-tip-text">
                Slow down a little. You haven&rsquo;t asked about their
                budget.
              </p>
              <svg
                className="coaching-squiggle"
                viewBox="0 0 200 30"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 8 Q 50 30 100 10 T 196 6"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="call-toolbar">
              <button className="call-btn" aria-label="Toggle microphone">
                <MicOffIcon width={18} height={18} />
              </button>
              <button className="call-btn" aria-label="Toggle camera">
                <VideoIcon width={18} height={18} />
              </button>
              <button className="call-btn" aria-label="More options">
                <MoreIcon width={18} height={18} />
              </button>
              <button className="call-btn call-btn-end" aria-label="End call">
                <PhoneIcon
                  width={18}
                  height={18}
                  className="call-end-icon"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="perform-right">
          <span className="practice-eyebrow">Perform</span>
          <h2 className="practice-title">Perform better when it counts.</h2>
          <p className="practice-desc">
            Real-time coaching during live calls on Zoom, Meet, and Teams.
            Get subtle nudges and keyword hints to guide the conversation
            perfectly.
          </p>
          <a href="#" className="practice-link">
            See live coaching
            <ArrowRightIcon width={16} height={16} />
          </a>
        </div>
      </section>

      <section className="prove-section">
        <div className="prove-left">
          <span className="practice-eyebrow">Prove</span>
          <h2 className="practice-title">
            Turn your best pitch into your edge.
          </h2>
          <p className="practice-desc">
            Create a Storyline. Showcase your skills visually. Get
            discovered and evaluated by top recruiters based on actual
            performance, not just a resume.
          </p>
          <a href="#" className="practice-link">
            Explore Interview Board
            <ArrowRightIcon width={16} height={16} />
          </a>
        </div>

        <div className="prove-right">
          <div className="prove-card">
            <div className="prove-header">
              <div className="prove-avatar">N</div>
              <div className="prove-identity">
                <span className="prove-name">Nancy</span>
                <span className="prove-role">Product Manager</span>
                <span className="prove-location">
                  <PinIcon width={13} height={13} />
                  Bengaluru, India
                </span>
              </div>

              <div className="prove-video-thumb">
                <video
                  className="video-media"
                  src="/header-gsap.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <span className="prove-play-btn">
                  <PlayIcon width={18} height={18} />
                </span>
                <span className="prove-clip-caption">
                  Elevator Pitch &middot; 60s
                </span>
              </div>
            </div>

            <div className="prove-tags">
              {PROVE_TAGS.map((tag, i) => (
                <span
                  key={tag}
                  className={`tag-pill${i === 0 ? ' tag-pill-primary' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="practice-divider" />

            <div className="prove-stats">
              {PROVE_STATS.map(({ label, value }) => (
                <div className="prove-stat-item" key={label}>
                  <span className="prove-stat-value">{value}</span>
                  <span className="prove-stat-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="practice-divider" />

            <span className="recruiters-label">Top recruiters on board</span>
            <div className="recruiters-row">
              {RECRUITERS.map((name) => (
                <span className="recruiter-name" key={name}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="teams-section">
        <div className="teams-left">
          <span className="practice-eyebrow">For teams</span>
          <h2 className="practice-title">One platform. Stronger conversations.</h2>
          <p className="practice-desc">
            Train, certify and coach your entire organization with
            comprehensive dashboards that prove impact and highlight skill
            gaps.
          </p>
          <a href="#" className="practice-link">
            Explore for teams
            <ArrowRightIcon width={16} height={16} />
          </a>
        </div>

        <div className="teams-right">
          <div className="teams-card">
            <div className="teams-sidebar">
              {TEAMS_NAV.map(({ label, Icon, active }) => (
                <span
                  key={label}
                  className={`teams-nav-item${active ? ' teams-nav-item-active' : ''}`}
                >
                  <Icon width={17} height={17} />
                  {label}
                </span>
              ))}
            </div>

            <div className="teams-main">
              <div className="teams-main-header">
                <span className="teams-main-title">Team Performance</span>
                <span className="quarter-select">
                  This Quarter
                  <ChevronDownIcon width={14} height={14} />
                </span>
              </div>

              <div className="teams-metrics">
                {TEAM_METRICS.map(({ label, value, change }) => (
                  <div className="teams-metric-item" key={label}>
                    <span className="teams-metric-label">{label}</span>
                    <span className="teams-metric-value">
                      {value}
                      <span className="teams-metric-change">{change}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="teams-chart">
                <svg viewBox="0 0 720 210" preserveAspectRatio="none">
                  <line
                    className="chart-axis"
                    x1="40"
                    y1="190"
                    x2="700"
                    y2="190"
                  />
                  <line
                    className="chart-axis"
                    x1="40"
                    y1="20"
                    x2="40"
                    y2="190"
                  />
                  <path
                    className="chart-line"
                    d={CHART_PATH}
                    fill="none"
                  />
                  {CHART_POINTS.map((p, i) => (
                    <circle
                      key={i}
                      className="chart-dot"
                      cx={p.x}
                      cy={p.y}
                      r="6"
                    />
                  ))}
                </svg>

                <div className="chart-y-labels">
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>

                <div className="chart-x-labels">
                  {CHART_MONTHS.map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <svg
            className="cta-waves"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,170 C120,120 220,220 340,170 C460,120 560,220 680,160 C800,110 900,210 1020,150 C1100,120 1160,150 1200,140"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <path
              d="M0,190 C140,240 240,140 360,190 C480,240 580,140 700,180 C820,220 920,130 1040,170 C1110,190 1160,175 1200,180"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
              opacity="0.7"
            />
            <path
              d="M0,205 C160,160 260,250 380,205 C500,165 600,245 720,200 C840,160 940,240 1060,195 C1120,175 1160,190 1200,185"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1.2"
              opacity="0.5"
            />
          </svg>

          <div className="cta-text">
            <span className="cta-eyebrow">Ready for what&rsquo;s next?</span>
            <h2 className="cta-title">
              The next conversation that{' '}
              <em className="cta-accent">matters</em> is already on your
              calendar.
            </h2>
          </div>

          <div className="cta-actions">
            <button className="btn btn-cta-light">
              Watch a Demo
              <ArrowRightIcon width={16} height={16} />
            </button>
            <button className="btn btn-cta-dark">
              Start free practice
              <ArrowRightIcon width={16} height={16} />
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="topnav-logo">
              <img src={logoMark} alt="" className="logo-mark" />
              Pitch.ai
            </div>
            <p className="footer-desc">
              AI-powered pitch coach helping you communicate with confidence
              and create opportunities.
            </p>
          </div>

          <div className="footer-links">
            {FOOTER_COLUMNS.map((links, i) => (
              <div className="footer-col" key={i}>
                {links.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          &copy; 2026 Pitch.ai. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
