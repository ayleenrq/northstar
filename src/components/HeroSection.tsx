import { useEffect, useRef } from 'react'

const videoUrl =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const fadeWindow = 0.5

    const updateOpacity = () => {
      const currentVideo = videoRef.current
      if (!currentVideo) return

      const { currentTime, duration } = currentVideo
      let opacity = 1

      if (Number.isFinite(duration) && duration > 0) {
        if (currentTime <= fadeWindow) {
          opacity = Math.max(0, Math.min(1, currentTime / fadeWindow))
        } else if (currentTime >= duration - fadeWindow) {
          opacity = Math.max(0, Math.min(1, (duration - currentTime) / fadeWindow))
        }
      }

      currentVideo.style.opacity = `${opacity}`
      frameRef.current = window.requestAnimationFrame(updateOpacity)
    }

    const handleEnded = () => {
      const currentVideo = videoRef.current
      if (!currentVideo) return

      currentVideo.style.opacity = '0'
      window.setTimeout(() => {
        const nextVideo = videoRef.current
        if (!nextVideo) return
        nextVideo.currentTime = 0
        void nextVideo.play()
      }, 100)
    }

    video.style.opacity = '0'
    void video.play()
    frameRef.current = window.requestAnimationFrame(updateOpacity)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('ended', handleEnded)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center md:object-[center_72%] transition-opacity duration-300"
          muted
          playsInline
          autoPlay
          preload="auto"
          src={videoUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-white/10 to-background" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center" style={{ paddingTop: 'calc(8rem - 75px)' }}>
        <div className="max-w-7xl">
          <h1
            className="animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-black sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Run creative operations
            <br />
            with <em className="not-italic text-[#6F6F6F]">clarity, rhythm,</em> and <em className="not-italic text-[#6F6F6F]">calm.</em>
          </h1>

          <p className="animate-fade-rise-delay mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
            Northstar helps studios, brand teams, and strategy leads align priorities,
            shape better briefs, and keep every launch moving without adding more noise.
          </p>

          <button
            type="button"
            className="animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full bg-black px-14 py-5 text-base text-white transition-all hover:scale-[1.03]"
          >
            Explore Northstar
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
