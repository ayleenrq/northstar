import HeroSection from './components/HeroSection'

type NavItem = {
  label: string
  href: string
}

type CapabilityCard = {
  icon: string
  title: string
  description: string
}

type ShowcaseCard = {
  label: string
  title: string
  description: string
  gradient: string
  artwork: string
}

const navItems: NavItem[] = [
  { label: 'Product', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Company', href: '#' },
]

const capabilities: CapabilityCard[] = [
  {
    icon: '01',
    title: 'Align campaign timelines across teams',
    description: 'Turn overlapping requests, launches, and milestones into one shared rhythm everyone can trust.',
  },
  {
    icon: '02',
    title: 'Shape rough notes into structured plans',
    description: 'Convert brainstorms, docs, and scattered ideas into action-ready briefs with clear owners and timing.',
  },
  {
    icon: '03',
    title: 'Track project health without extra meetings',
    description: 'Surface blockers, momentum shifts, and delivery confidence through quiet signals across every initiative.',
  },
  {
    icon: '04',
    title: 'Generate polished client-ready briefs',
    description: 'Compose crisp summaries, creative scopes, and next steps that are easy to share internally or externally.',
  },
  {
    icon: '05',
    title: 'Capture ideas from chats and calls',
    description: 'Pull important context from conversations so valuable thinking never disappears into message threads.',
  },
  {
    icon: '06',
    title: 'Build weekly recaps automatically',
    description: 'Create elegant updates that reflect progress, open questions, and decisions without manual chasing.',
  },
]

const showcaseCards: ShowcaseCard[] = [
  {
    label: 'For Studios',
    title: 'Keep every project moving without flattening the creative process.',
    description: 'Plan campaigns, manage handoffs, and keep delivery calm from kickoff through client review.',
    gradient: 'from-[#5E6E56] via-[#87947E] to-[#D8D0C4]',
    artwork: 'Layered boards, editorial notes, and timeline markers framed like a portfolio wall.',
  },
  {
    label: 'For Brand Teams',
    title: 'Give fast-moving launches a source of truth that still feels intuitive.',
    description: 'Coordinate content, stakeholders, and approvals in one environment designed for clarity over noise.',
    gradient: 'from-[#B57A5B] via-[#D8B59A] to-[#F0E7DB]',
    artwork: 'Soft clay gradients with campaign modules and translucent review cards floating above.',
  },
  {
    label: 'For Strategy Leads',
    title: 'See priorities, risk, and momentum at the altitude leadership needs.',
    description: 'Translate messy operating reality into crisp signals, weekly recaps, and sharper planning conversations.',
    gradient: 'from-[#7F7B67] via-[#A7A18C] to-[#EFE7DC]',
    artwork: 'Muted landscape textures with directional paths and structured checkpoints layered on top.',
  },
]

function App() {
  return (
    <main className="min-h-screen">
      <div className="section-reveal min-h-screen w-full bg-white">
        <header className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-8 py-6">
          <a
            href="#"
            className="text-3xl tracking-tight text-black"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Northstar<sup className="align-super text-sm">®</sup>
          </a>

          <div className="flex flex-wrap items-center justify-end gap-3 lg:gap-8">
            <nav className="hidden items-center gap-6 text-sm md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-black ${
                    item.label === 'Product' ? 'text-black' : 'text-[#6F6F6F]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#"
              className="rounded-full bg-black px-6 py-2.5 text-sm text-white transition-transform duration-200 hover:scale-[1.03]"
            >
              Book Demo
            </a>
          </div>
        </header>

        <HeroSection />

        <section className="border-t border-[#DDD6CC] px-6 py-10 lg:px-12 lg:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[#B57A5B]">Capabilities</p>
            <h2 className="serif-display mt-3 text-4xl tracking-[-0.03em] text-[#1F1F1B] sm:text-5xl">
              What Northstar can orchestrate for your team
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.icon}
                className="card-glow rounded-[24px] border border-[#DDD6CC] bg-white/55 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ede7df] text-sm font-medium text-[#66785F]">
                  {capability.icon}
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-[#1F1F1B]">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#DDD6CC] px-6 py-10 lg:px-12 lg:py-14">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#66785F]">Showcase</p>
            <h2 className="serif-display mt-3 text-4xl tracking-[-0.03em] text-[#1F1F1B] sm:text-5xl">
              Built for modern creative systems
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {showcaseCards.map((card) => (
              <article
                key={card.label}
                className="card-glow overflow-hidden rounded-[26px] border border-[#DDD6CC] bg-[#F6F2EB]"
              >
                <div className={`h-56 bg-gradient-to-br ${card.gradient} p-5`}>
                  <div className="flex h-full flex-col justify-between rounded-[22px] border border-white/35 bg-white/12 p-4 backdrop-blur-[2px]">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                    </div>
                    <p className="max-w-[24ch] text-sm leading-6 text-[#FAF8F4]">
                      {card.artwork}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#B57A5B]">{card.label}</p>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#1F1F1B]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#DDD6CC] px-6 pt-6 text-sm text-[#6F6A63] sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <a href="#" className="font-medium text-[#1F1F1B]">
            Northstar Studio
          </a>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="transition-colors duration-200 hover:text-[#1F1F1B]">Privacy</a>
            <a href="#" className="transition-colors duration-200 hover:text-[#1F1F1B]">Terms</a>
            <a href="#" className="transition-colors duration-200 hover:text-[#1F1F1B]">Contact</a>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
