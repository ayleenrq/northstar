import HeroSection from './components/HeroSection'

type NavItem = {
  label: string
  href: string
}

type CapabilityCard = {
  image: string
  title: string
  description: string
}

type ShowcaseCard = {
  label: string
  title: string
  description: string
  image: string
}

const navItems: NavItem[] = [
  { label: 'Product', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Company', href: '#' },
]

const capabilities: CapabilityCard[] = [
  {
    image: 'https://images.unsplash.com/photo-1507925922837-326f866ce5ee?auto=format&fit=crop&w=800&q=80',
    title: 'Align campaign timelines across teams',
    description: 'Turn overlapping requests, launches, and milestones into one shared rhythm everyone can trust.',
  },
  {
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    title: 'Shape rough notes into structured plans',
    description: 'Convert brainstorms, docs, and scattered ideas into action-ready briefs with clear owners and timing.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    title: 'Track project health without extra meetings',
    description: 'Surface blockers, momentum shifts, and delivery confidence through quiet signals across every initiative.',
  },
  {
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    title: 'Generate polished client-ready briefs',
    description: 'Compose crisp summaries, creative scopes, and next steps that are easy to share internally or externally.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    title: 'Capture ideas from chats and calls',
    description: 'Pull important context from conversations so valuable thinking never disappears into message threads.',
  },
  {
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    title: 'Build weekly recaps automatically',
    description: 'Create elegant updates that reflect progress, open questions, and decisions without manual chasing.',
  },
]

const showcaseCards: ShowcaseCard[] = [
  {
    label: 'For Studios',
    title: 'Keep every project moving without flattening the creative process.',
    description: 'Plan campaigns, manage handoffs, and keep delivery calm from kickoff through client review.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'For Brand Teams',
    title: 'Give fast-moving launches a source of truth that still feels intuitive.',
    description: 'Coordinate content, stakeholders, and approvals in one environment designed for clarity over noise.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'For Strategy Leads',
    title: 'See priorities, risk, and momentum at the altitude leadership needs.',
    description: 'Translate messy operating reality into crisp signals, weekly recaps, and sharper planning conversations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
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
                key={capability.title}
                className="card-glow flex flex-col overflow-hidden rounded-[24px] border border-[#DDD6CC] bg-white/55"
              >
                <div className="h-48 w-full border-b border-[#DDD6CC]">
                  <img src={capability.image} alt={capability.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-[#1F1F1B]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#6F6A63]">
                    {capability.description}
                  </p>
                </div>
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
                <div className="h-64 w-full border-b border-[#DDD6CC]">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
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
