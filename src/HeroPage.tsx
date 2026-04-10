import { useMemo, useState, type CSSProperties, type MouseEvent } from 'react'

const navItems = ['Studio', 'Process', 'Works', 'Notes']
const stars = [
  ['12%', '12%', '0.2s', '4.8s'],
  ['26%', '18%', '1.1s', '5.4s'],
  ['39%', '8%', '0.7s', '4.6s'],
  ['58%', '14%', '1.9s', '5.2s'],
  ['71%', '10%', '2.4s', '4.9s'],
  ['86%', '17%', '0.5s', '5.5s'],
]
const fireflies = [
  ['14%', '30%', '0.2s', '3.7s'],
  ['23%', '56%', '1.1s', '4.2s'],
  ['38%', '42%', '0.7s', '4.8s'],
  ['56%', '29%', '1.9s', '3.9s'],
  ['69%', '50%', '2.7s', '4.4s'],
  ['84%', '33%', '1.3s', '3.6s'],
]
const letters = [
  ['18%', '18%', '0s', '8s'],
  ['42%', '16%', '2.3s', '8.8s'],
  ['68%', '19%', '4.1s', '9.3s'],
]

function Dots({ items, className, glow = false }: { items: string[][]; className: string; glow?: boolean }) {
  return (
    <>
      {items.map(([left, top, delay, duration], index) => (
        <span
          key={`${left}-${top}-${index}`}
          className={`${className} absolute block rounded-full ${glow ? 'shadow-[0_0_18px_rgba(217,168,95,0.95)]' : ''}`}
          style={{ left, top, animationDelay: delay, animationDuration: duration } as CSSProperties}
        />
      ))}
    </>
  )
}

function FloatingLetters() {
  return (
    <>
      {letters.map(([left, bottom, delay, duration], index) => (
        <div
          key={`${left}-${bottom}-${index}`}
          className="drift absolute z-20"
          style={{ left, bottom, animationDelay: delay, animationDuration: duration } as CSSProperties}
        >
          <div className="rotate-[-14deg] rounded-[6px] border border-white/25 bg-[#F6F0E8]/80 px-3 py-2">
            <div className="h-0.5 w-8 rounded-full bg-[#8D5B52]/35" />
            <div className="mt-1 h-0.5 w-5 rounded-full bg-[#8D5B52]/20" />
          </div>
        </div>
      ))}
    </>
  )
}

function BannerScene() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const layers = useMemo(
    () => ({
      sky: { transform: `translate(${parallax.x * -8}px, ${parallax.y * -8}px)` },
      hills: { transform: `translate(${parallax.x * -14}px, ${parallax.y * -10}px)` },
      garden: { transform: `translate(${parallax.x * -18}px, ${parallax.y * -10}px)` },
      front: { transform: `translate(${parallax.x * 16}px, ${parallax.y * 10}px)` },
      panel: { transform: `translate(${parallax.x * 8}px, ${parallax.y * 6}px)` },
    }),
    [parallax],
  )

  const glow = hovered ? 'opacity-100' : 'opacity-70'

  return (
    <div
      className="fade-rise-delay-2 relative mx-auto mt-14 w-full max-w-6xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        setParallax({ x: 0, y: 0 })
      }}
      onMouseMove={(event: MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setParallax({
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5,
        })
      }}
    >
      <div className="overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.04] p-3 shadow-[0_28px_80px_rgba(8,4,12,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="relative aspect-[16/7] overflow-hidden rounded-[28px] border border-white/10 bg-[#1A1520]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(141,91,82,0.18),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(217,168,95,0.1),transparent_28%),linear-gradient(180deg,#251D2D_0%,#1A1520_32%,#16111A_100%)]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0.6px,transparent_0.8px)] [background-size:12px_12px]" />

          <div className="absolute inset-0 transition-transform duration-500 ease-out" style={layers.sky}>
            <Dots items={stars} className="twinkle z-10 h-0.5 w-0.5 bg-white/80" />
            <div className="absolute right-[16%] top-[10%] h-28 w-28 rounded-full bg-[#F4D8B0]/80 blur-[2px]" />
            <div className="absolute right-[12%] top-[16%] h-32 w-32 rounded-full bg-[#F4D8B0]/15 blur-xl" />
            <div className="slow-float absolute left-[-8%] top-[10%] h-16 w-40 rounded-full bg-white/10 blur-md" />
            <div className="drift absolute left-[24%] top-[14%] h-14 w-36 rounded-full bg-white/12 blur-md" />
            <div className="slow-float absolute right-[-2%] top-[18%] h-16 w-44 rounded-full bg-white/10 blur-md [animation-delay:1.2s]" />
          </div>

          <div className="absolute inset-x-0 bottom-[24%] top-[28%] transition-transform duration-500 ease-out" style={layers.hills}>
            <div className="absolute bottom-0 left-[-8%] h-36 w-[42%] rounded-[50%] bg-[#3D3347]" />
            <div className="absolute bottom-[-8%] left-[18%] h-44 w-[46%] rounded-[50%] bg-[#493D55]" />
            <div className="absolute bottom-[-10%] right-[-6%] h-48 w-[50%] rounded-[50%] bg-[#352C3F]" />
          </div>

          <div className="absolute inset-x-0 bottom-0 top-[46%] transition-transform duration-500 ease-out" style={layers.garden}>
            <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,#2F2B2E_0%,#231D22_36%,#181318_100%)]" />
            <div className={`absolute inset-x-0 bottom-[22%] h-28 ${glow} transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_60%,rgba(217,168,95,0.18),transparent_40%)]`} />
            <div className="absolute left-[8%] right-[8%] bottom-[8%] h-[36%] rounded-[50%] bg-[linear-gradient(180deg,#5E503A_0%,#3F3328_42%,#2A2320_100%)]" />
            <div className="absolute left-[18%] right-[18%] bottom-[10%] h-[22%] rounded-[50%] border border-[#D9A85F]/20 bg-[linear-gradient(180deg,#8E7551_0%,#614E39_50%,#3B2E28_100%)]" />
            <div className="sway absolute bottom-[16%] left-[10%] h-40 w-16 origin-bottom">
              <div className="absolute bottom-0 left-6 h-28 w-1.5 rounded-full bg-[#3A2A24]" />
              <div className="absolute bottom-24 left-0 h-20 w-20 rounded-[60%_40%_70%_30%] bg-[#445842]" />
              <div className="absolute bottom-28 left-5 h-16 w-16 rounded-[30%_70%_40%_60%] bg-[#5F7557]" />
            </div>
            <div className="sway absolute bottom-[17%] right-[12%] h-44 w-20 origin-bottom [animation-delay:1.1s]">
              <div className="absolute bottom-0 left-9 h-32 w-1.5 rounded-full bg-[#3A2A24]" />
              <div className="absolute bottom-24 left-0 h-24 w-24 rounded-[65%_35%_55%_45%] bg-[#50644C]" />
              <div className="absolute bottom-30 left-6 h-16 w-14 rounded-[30%_70%_40%_60%] bg-[#6C825F]" />
            </div>
            <div className="sway absolute bottom-[14%] left-[30%] h-24 w-14 origin-bottom [animation-delay:0.6s]">
              <div className="absolute bottom-0 left-6 h-18 w-px bg-[#4C4036]" />
              <div className="absolute bottom-10 left-2 h-10 w-10 rounded-full bg-[#8D5B52]" />
              <div className="absolute bottom-12 left-8 h-7 w-7 rounded-full bg-[#D9A85F]" />
            </div>
            <div className="sway absolute bottom-[13%] right-[29%] h-24 w-16 origin-bottom [animation-delay:1.4s]">
              <div className="absolute bottom-0 left-8 h-18 w-px bg-[#4C4036]" />
              <div className="absolute bottom-10 left-3 h-10 w-10 rounded-full bg-[#6A845E]" />
              <div className="absolute bottom-13 left-9 h-6 w-6 rounded-full bg-[#D9A85F]" />
            </div>
          </div>

          <FloatingLetters />
          <Dots items={fireflies} className="pulse-soft z-30 h-2.5 w-2.5 bg-[#D9A85F]" glow />

          <div className="absolute inset-x-0 bottom-[8%] h-[44%] transition-transform duration-500 ease-out" style={layers.front}>
            <div className="absolute left-[14%] bottom-[18%] h-28 w-[66%] rounded-[50%] border border-[#D9A85F]/15 bg-[radial-gradient(circle_at_50%_20%,rgba(255,226,173,0.12),transparent_35%),linear-gradient(180deg,#725639_0%,#4B362A_42%,#25191A_100%)]" />
            <div className={`absolute left-[22%] bottom-[29%] h-16 w-4 ${glow} transition-all duration-300`}>
              <div className="absolute bottom-0 left-1/2 h-12 w-px -translate-x-1/2 bg-[#4F3B30]" />
              <div className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full bg-[#F6D59F]/95 shadow-[0_0_24px_rgba(217,168,95,0.85)]" />
            </div>
            <div className={`absolute right-[24%] bottom-[25%] h-16 w-4 ${glow} transition-all duration-300`}>
              <div className="absolute bottom-0 left-1/2 h-12 w-px -translate-x-1/2 bg-[#4F3B30]" />
              <div className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full bg-[#F6D59F]/95 shadow-[0_0_24px_rgba(217,168,95,0.85)]" />
            </div>
            <div className="fox-ride absolute bottom-[20%] left-[-18%] h-24 w-32">
              <div className="relative h-full w-full">
                <div className="absolute bottom-0 left-1 h-10 w-10 rounded-full border-2 border-[#2E2525]" />
                <div className="absolute bottom-0 right-3 h-10 w-10 rounded-full border-2 border-[#2E2525]" />
                <div className="absolute bottom-8 left-7 h-0.5 w-12 rotate-[14deg] bg-[#2E2525]" />
                <div className="absolute bottom-8 left-11 h-9 w-0.5 rotate-[18deg] bg-[#2E2525]" />
                <div className="absolute bottom-12 left-[42px] h-0.5 w-8 bg-[#2E2525]" />
                <div className="absolute bottom-[34px] left-[47px] h-8 w-10 rounded-[50%_50%_45%_45%] bg-[#8D5B52]" />
                <div className="absolute bottom-[56px] left-[55px] h-8 w-8 rounded-full bg-[#C37A45]" />
                <div className="absolute bottom-[62px] left-[54px] h-4 w-4 rotate-[-20deg] rounded-[30%_80%_20%_80%] bg-[#8B4D34]" />
                <div className="absolute bottom-[67px] left-[61px] h-4 w-4 rotate-[18deg] rounded-[80%_30%_80%_20%] bg-[#8B4D34]" />
                <div className="absolute bottom-[62px] left-[73px] h-3 w-2 rounded-full bg-[#F6F0E8]" />
                <div className="absolute bottom-[61px] left-[74px] h-1.5 w-1.5 rounded-full bg-[#1F1A17]" />
                <div className="absolute bottom-[38px] left-[70px] h-12 w-4 rotate-[30deg] rounded-full bg-[#C37A45]" />
                <div className="absolute bottom-[56px] left-[86px] h-6 w-5 rounded-[0_100%_100%_40%] bg-[#8B4D34]" />
                <div className="absolute bottom-[57px] left-[89px] h-5 w-5 rounded-[0_100%_100%_40%] bg-[#C37A45]" />
              </div>
            </div>
          </div>

          <div className="fade-rise-delay absolute left-[5%] bottom-[14%] z-40 w-[42%] max-w-sm transition-transform duration-500 ease-out" style={layers.panel}>
            <div className="rounded-2xl border border-white/25 bg-[#F6F0E8]/76 p-4 text-[#1F1A17] shadow-[0_16px_48px_rgba(8,4,12,0.24)] backdrop-blur-xl sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#746A63]">Creative assistant</p>
                  <p className="mt-3 max-w-[26ch] text-sm leading-6 sm:text-[15px]">
                    Draft tomorrow&apos;s concept note and send a calm summary to the team.
                  </p>
                </div>
                <button type="button" aria-label="Send note" className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F1A17] text-[#F6F0E8] transition-transform duration-200 hover:scale-105">
                  <span className="text-lg">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeroPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#171319] text-[#F6F0E8]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(141,91,82,0.18),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(95,117,87,0.12),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(217,168,95,0.1),transparent_22%)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <header className="fade-rise flex items-center justify-between px-4 py-6 sm:px-2 lg:px-0">
          <a href="#" className="serif-display text-3xl tracking-tight text-[#F6F0E8]">Moonletter®</a>
          <div className="flex items-center gap-4 lg:gap-8">
            <nav className="hidden items-center gap-6 text-sm text-[#C9BDB5] md:flex">
              {navItems.map((item) => (
                <a key={item} href="#" className="transition-colors duration-200 hover:text-[#F6F0E8]">{item}</a>
              ))}
            </nav>
            <a href="#" className="rounded-full bg-[#F6F0E8] px-6 py-2.5 text-sm font-medium text-[#1F1A17] transition duration-200 hover:scale-[1.03] hover:bg-white">
              Start a Project
            </a>
          </div>
        </header>

        <section className="flex flex-1 flex-col justify-center pb-8 pt-8 sm:pt-10 lg:pb-12">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <p className="fade-rise mb-6 text-sm uppercase tracking-[0.28em] text-[#D9A85F]">Whimsical motion studio for story-led brands</p>
            <h1 className="fade-rise serif-display max-w-5xl text-5xl font-normal leading-[0.94] tracking-[-0.04em] text-[#F6F0E8] sm:text-6xl md:text-7xl lg:text-8xl">
              Stories in motion,
              <br />
              crafted for modern brands.
            </h1>
            <p className="fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[rgba(246,240,232,0.72)] sm:text-lg">
              We design living digital experiences with rhythm, warmth, and imagination blending interface, illustration, and motion into unforgettable product storytelling.
            </p>
            <div className="fade-rise-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="rounded-full bg-[#D9A85F] px-7 py-3 text-sm font-medium text-[#1F1A17] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#E0B97F]">View Showcase</a>
              <a href="#" className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-[#F6F0E8] transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5">How It Works</a>
            </div>
          </div>
          <BannerScene />
        </section>
      </div>
    </main>
  )
}

export default HeroPage
