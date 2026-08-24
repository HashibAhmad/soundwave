export default function BackgroundWave() {
  return (
    <div className="bg-canvas">
      <video
        className="bg-canvas-video"
        src="/header-video-v2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}
