import { Lottie } from 'lottie-react'
import animationData from './assets/background-wave.json'

export default function BackgroundWave() {
  return (
    <div className="bg-canvas">
      <Lottie
        src={animationData}
        loop
        autoplay
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        style={{ width: '100%', height: '100%', opacity: 0.2 }}
      />
    </div>
  )
}
