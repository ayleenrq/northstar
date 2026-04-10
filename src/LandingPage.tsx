import HeroSection from './components/HeroSection'

const studioWorkspaceImage =
  'https://images.pexels.com/photos/29753441/pexels-photo-29753441.jpeg?cs=srgb&dl=pexels-prolificpeople-29753441.jpg&fm=jpg'
const campaignPlanningImage =
  'https://images.pexels.com/photos/15635239/pexels-photo-15635239.jpeg?cs=srgb&dl=pexels-walls-io-440716388-15635239.jpg&fm=jpg'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Product', href: '#' },
  { label: 'Approach', href: '#' },
  { label: 'Use Cases', href: '#' },
  { label: 'Company', href: '#' },
]

function LandingPage() {
  return (
    <main className="min-h-screen">
      <div className="section-reveal min-h-screen w-full bg-white">
        <header className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-8 py-6">
          <a
            href="#"
            className="text-3xl tracking-tight text-black"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Northstar<sup className="align-super text-sm">&reg;</sup>
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

        <section className="border-t border-[#E2D8CC] px-6 py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <h2
                className="max-w-5xl text-5xl font-normal leading-[1.02] tracking-[-0.06em] text-[#181713] sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Northstar brings clear, actionable structure to creative operations without adding more noise to the work.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr_1fr]">
              <article className="rounded-[28px] border border-[#ECE5DB] bg-white p-6 shadow-[0_22px_52px_rgba(78,60,42,0.1)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#3E3D49_0%,#121216_100%)] text-lg text-white shadow-[0_12px_22px_rgba(31,31,27,0.18)]">
                  1
                </div>
                <h3
                  className="mt-8 text-2xl font-normal tracking-[-0.03em] text-[#1F1F1B]"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Structured Intake
                </h3>
                <p className="mt-4 text-base leading-8 text-[#6F6A63]">
                  Northstar turns rough requests, meeting notes, and stakeholder asks into clean briefs with scope, owners, and next steps.
                </p>
              </article>

              <article className="rounded-[28px] border border-[#ECE5DB] bg-white p-6 shadow-[0_18px_42px_rgba(78,60,42,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#3E3D49_0%,#121216_100%)] text-lg text-white shadow-[0_12px_22px_rgba(31,31,27,0.18)]">
                  2
                </div>
                <h3
                  className="mt-8 text-2xl font-normal tracking-[-0.03em] text-[#1F1F1B]"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Calm Coordination
                </h3>
                <p className="mt-4 text-base leading-8 text-[#6F6A63]">
                  Campaigns, approvals, and dependencies stay aligned in one surface so teams can move quickly without more operational clutter.
                </p>
              </article>

              <article className="rounded-[28px] border border-[#ECE5DB] bg-white p-6 shadow-[0_18px_42px_rgba(78,60,42,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#3E3D49_0%,#121216_100%)] text-lg text-white shadow-[0_12px_22px_rgba(31,31,27,0.18)]">
                  3
                </div>
                <h3
                  className="mt-8 text-2xl font-normal tracking-[-0.03em] text-[#1F1F1B]"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Sharper Weekly Signal
                </h3>
                <p className="mt-4 text-base leading-8 text-[#6F6A63]">
                  Leadership gets concise reads on pace, blockers, and confidence instead of rebuilding the week from scattered updates.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2D8CC] px-6 py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <h2
                  className="max-w-[12ch] text-5xl font-normal leading-[1.04] tracking-[-0.06em] text-[#181713] sm:text-6xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Calm visibility, built for modern launch teams.
                </h2>
              </div>

              <div className="max-w-lg rounded-[28px] border border-[#ECE5DB] bg-[#FBF7F1] p-6 shadow-[0_18px_40px_rgba(95,76,57,0.05)] lg:justify-self-end">
                <p className="text-lg leading-8 text-[#6F6A63]">
                  Northstar gives teams one operating layer for briefs, planning, approvals, and weekly reads so launches keep moving with more clarity and less friction.
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex rounded-full border border-[#1F1F1B] px-7 py-3 text-sm text-[#1F1F1B] transition-colors duration-200 hover:bg-[#1F1F1B] hover:text-white"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-[34px] bg-[#d6d2ca] p-4 sm:p-8">
                <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-[0_28px_60px_rgba(91,77,57,0.12)]">
                  <img
                    src={studioWorkspaceImage}
                    alt="Creative operations workspace with campaign materials"
                    className="h-[260px] w-full object-cover sm:h-[420px]"
                  />
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[28px] border border-[#ECE5DB] bg-white p-5 shadow-[0_18px_40px_rgba(95,76,57,0.05)]">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8A7667]">Signals</p>
                  <p className="mt-3 text-base leading-7 text-[#6F6A63]">
                    Track launch timing, risk, ownership, and next decisions in one cleaner operating layer.
                  </p>
                </div>
                <div className="rounded-[28px] border border-[#ECE5DB] bg-[#F7F3EC] p-5 shadow-[0_18px_40px_rgba(95,76,57,0.05)]">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8A7667]">Weekly Read</p>
                  <p className="mt-3 text-base leading-7 text-[#6F6A63]">
                    Give leadership sharper summaries without creating another reporting ritual for the team.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h3
                  className="text-2xl font-normal tracking-[-0.03em] text-[#1F1F1B]"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Real-time launch coordination
                </h3>
                <p className="mt-4 max-w-4xl text-base leading-8 text-[#6F6A63]">
                  Instead of watching campaign context disappear into chats, docs, and recurring check-ins, Northstar keeps requests, approvals, timing, and delivery shifts visible in one shared operating layer.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button type="button" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7DED3] bg-white text-xl text-[#1F1F1B] shadow-[0_12px_24px_rgba(95,76,57,0.06)]">
                  ←
                </button>
                <button type="button" className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7DED3] bg-white text-xl text-[#1F1F1B] shadow-[0_12px_24px_rgba(95,76,57,0.06)]">
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2D8CC] px-6 py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <h2
                  className="max-w-[12ch] text-5xl font-normal leading-[1.04] tracking-[-0.06em] text-[#181713] sm:text-6xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Everything teams need, without overcomplicating how work moves.
                </h2>

                <div className="mt-12 grid gap-4">
                  <div className="rounded-[26px] border border-[#ECE5DB] bg-white p-6 shadow-[0_14px_32px_rgba(78,60,42,0.04)]">
                    <h3
                      className="text-[2rem] font-normal leading-tight tracking-[-0.04em] text-[#2C2B27]"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      Brief Quality
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-8 text-[#6F6A63]">
                      Shape incoming work before execution starts, so creative direction and delivery expectations are already aligned.
                    </p>
                  </div>
                  <div className="rounded-[26px] border border-[#ECE5DB] bg-[#FBF7F1] p-6 shadow-[0_14px_32px_rgba(78,60,42,0.04)]">
                    <h3
                      className="text-[2rem] font-normal leading-tight tracking-[-0.04em] text-[#2C2B27]"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      Launch Visibility
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-8 text-[#6F6A63]">
                      See timing, ownership, and active risks across campaigns through a cleaner, more editorial operating view.
                    </p>
                  </div>
                  <div className="rounded-[26px] border border-[#ECE5DB] bg-white p-6 shadow-[0_14px_32px_rgba(78,60,42,0.04)]">
                    <h3
                      className="text-[2rem] font-normal leading-tight tracking-[-0.04em] text-[#2C2B27]"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      Leadership Readiness
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-8 text-[#6F6A63]">
                      Turn the week into one usable summary for reviews, planning sessions, and cross-functional decision-making.
                    </p>
                  </div>
                </div>

                <p className="mt-12 max-w-xl text-base leading-8 text-[#6F6A63]">
                  Northstar reveals where work is truly getting stuck and where it is gaining momentum, helping teams coordinate launches with cleaner communication and steadier timing.
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex rounded-full border border-[#1F1F1B] px-7 py-3 text-sm text-[#1F1F1B] transition-colors duration-200 hover:bg-[#1F1F1B] hover:text-white"
                >
                  Get Started
                </a>
              </div>

              <div className="grid gap-6 lg:pt-10">
                <p className="max-w-md text-lg leading-8 text-[#6F6A63]">
                  Northstar combines structured intake, collaborative visibility, and leadership-ready summaries into one operating system built for clarity, not complexity.
                </p>
                <div className="mt-10 overflow-hidden rounded-[34px] bg-[#c8c5bb] p-4 sm:p-6">
                  <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_24px_48px_rgba(95,76,57,0.12)]">
                    <img
                      src={campaignPlanningImage}
                      alt="Planning notes and device used for campaign coordination"
                      className="h-[420px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2D8CC] px-6 py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <h2
              className="text-5xl font-normal leading-[1.04] tracking-[-0.06em] text-[#181713] sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Simple transparent plans built around calmer operations.
            </h2>
            <div className="mx-auto mt-8 inline-flex rounded-full bg-[#F2EFEA] p-1.5 shadow-[0_12px_26px_rgba(95,76,57,0.08)]">
              <button type="button" className="rounded-full bg-[#24232B] px-5 py-2 text-sm text-white">
                Billed Annually
              </button>
              <button type="button" className="rounded-full px-5 py-2 text-sm text-[#4C4942]">
                Billed Monthly
              </button>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2">
            <article className="rounded-[32px] border border-[#ECE5DB] bg-white p-7 shadow-[0_18px_44px_rgba(78,60,42,0.06)] sm:p-8 lg:translate-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#3E3D49_0%,#121216_100%)] text-lg text-white shadow-[0_12px_22px_rgba(31,31,27,0.18)]">
                ◈
              </div>
              <h3
                className="mt-8 text-4xl font-normal tracking-[-0.04em] text-[#1F1F1B]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Studio Flow
              </h3>
              <p className="mt-4 max-w-lg text-base leading-8 text-[#6F6A63]">
                For creative studios and internal design teams that need more structure around briefs, approvals, and weekly delivery rhythm.
              </p>
              <p className="mt-8 text-base font-medium text-[#1F1F1B]">This plan includes</p>
              <div className="mt-5 space-y-4 text-base leading-7 text-[#302E2A]">
                <div className="flex items-start gap-3"><span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#1F1F1B] text-center text-xs leading-5 text-white">✓</span><span>Structured intake and kickoff briefs</span></div>
                <div className="flex items-start gap-3"><span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#1F1F1B] text-center text-xs leading-5 text-white">✓</span><span>Feedback and approval tracking</span></div>
                <div className="flex items-start gap-3"><span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#1F1F1B] text-center text-xs leading-5 text-white">✓</span><span>Weekly recaps for clients and leads</span></div>
                <div className="flex items-start gap-3"><span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#1F1F1B] text-center text-xs leading-5 text-white">✓</span><span>One surface for campaign momentum</span></div>
              </div>
              <div className="mt-12 flex items-end gap-3">
                <span className="text-6xl font-medium tracking-[-0.06em] text-[#10100D]">$189</span>
                <span className="pb-2 text-base text-[#6F6A63]">Billed Annually</span>
              </div>
            </article>

            <article className="rounded-[32px] border border-[#ECE5DB] bg-white p-7 shadow-[0_18px_44px_rgba(78,60,42,0.06)] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#3E3D49_0%,#121216_100%)] text-lg text-white shadow-[0_12px_22px_rgba(31,31,27,0.18)]">
                ♛
              </div>
              <h3
                className="mt-8 text-4xl font-normal tracking-[-0.04em] text-[#1F1F1B]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Leadership Layer
              </h3>
              <p className="mt-4 max-w-lg text-base leading-8 text-[#6F6A63]">
                For brand teams, operators, and strategy leads who need cleaner visibility across launches, priorities, and decision-ready updates.
              </p>
              <p className="mt-8 text-base font-medium text-[#1F1F1B]">This plan includes</p>
              <div className="mt-5 space-y-4 text-base leading-7 text-[#302E2A]">
                <div className="flex items-start gap-3"><span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#1F1F1B] text-center text-xs leading-5 text-white">✓</span><span>Everything in Studio Flow</span></div>
                <div className="flex items-start gap-3"><span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#1F1F1B] text-center text-xs leading-5 text-white">✓</span><span>Cross-functional launch visibility</span></div>
                <div className="flex items-start gap-3"><span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#1F1F1B] text-center text-xs leading-5 text-white">✓</span><span>Executive-ready planning summaries</span></div>
                <div className="flex items-start gap-3"><span className="mt-1.5 inline-block h-5 w-5 rounded-full bg-[#1F1F1B] text-center text-xs leading-5 text-white">✓</span><span>Priority, risk, and confidence signals</span></div>
              </div>
              <div className="mt-12 flex items-end gap-3">
                <span className="text-6xl font-medium tracking-[-0.06em] text-[#10100D]">$389</span>
                <span className="pb-2 text-base text-[#6F6A63]">Billed Annually</span>
              </div>
            </article>
          </div>
        </section>

        <section className="border-t border-[#E2D8CC] px-6 py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2
                className="text-5xl font-normal leading-[1.04] tracking-[-0.06em] text-[#181713] sm:text-6xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Everything you need to know about Northstar.
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              <details className="group rounded-[28px] border border-[#ECE5DB] bg-white px-6 py-5 shadow-[0_14px_34px_rgba(78,60,42,0.04)]" open>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-2xl tracking-[-0.03em] text-[#1F1F1B]">
                  <span>How does Northstar reduce operational noise?</span>
                  <span className="text-[#8A867F] transition-transform duration-200 group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-4 max-w-5xl pr-10 text-base leading-8 text-[#6F6A63]">
                  It centralizes requests, briefs, approvals, and status signals in one calmer workflow, so teams stop rebuilding context in meetings and message threads.
                </p>
              </details>
              <details className="group rounded-[28px] border border-[#ECE5DB] bg-white px-6 py-5 shadow-[0_14px_34px_rgba(78,60,42,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-2xl tracking-[-0.03em] text-[#1F1F1B]">
                  <span>Is Northstar only for creative teams?</span>
                  <span className="text-[#8A867F] transition-transform duration-200 group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-4 max-w-5xl pr-10 text-base leading-8 text-[#6F6A63]">
                  No. It is designed for studios, brand teams, marketing operators, and leadership stakeholders who need shared visibility without flattening how teams work.
                </p>
              </details>
              <details className="group rounded-[28px] border border-[#ECE5DB] bg-white px-6 py-5 shadow-[0_14px_34px_rgba(78,60,42,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-2xl tracking-[-0.03em] text-[#1F1F1B]">
                  <span>What kind of output does Northstar help produce?</span>
                  <span className="text-[#8A867F] transition-transform duration-200 group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-4 max-w-5xl pr-10 text-base leading-8 text-[#6F6A63]">
                  Northstar supports launch-ready briefs, weekly recaps, planning summaries, stakeholder updates, and clearer execution signals across active work.
                </p>
              </details>
              <details className="group rounded-[28px] border border-[#ECE5DB] bg-white px-6 py-5 shadow-[0_14px_34px_rgba(78,60,42,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-2xl tracking-[-0.03em] text-[#1F1F1B]">
                  <span>Can it support both campaign delivery and leadership reviews?</span>
                  <span className="text-[#8A867F] transition-transform duration-200 group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-4 max-w-5xl pr-10 text-base leading-8 text-[#6F6A63]">
                  Yes. The same operating layer helps contributors manage execution details while giving leaders a sharper read on pace, blockers, and timing.
                </p>
              </details>
              <details className="group rounded-[28px] border border-[#ECE5DB] bg-white px-6 py-5 shadow-[0_14px_34px_rgba(78,60,42,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-2xl tracking-[-0.03em] text-[#1F1F1B]">
                  <span>Does the workflow replace creative judgment?</span>
                  <span className="text-[#8A867F] transition-transform duration-200 group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-4 max-w-5xl pr-10 text-base leading-8 text-[#6F6A63]">
                  No. It is built to support creative teams with better structure and communication, not to turn the process into rigid project administration.
                </p>
              </details>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#E2D8CC] bg-[#111115] px-6 py-20 text-white lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,#17171d_0%,#0f0f13_100%)] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <a href="#" className="text-4xl tracking-tight text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Northstar
                </a>
                <p className="mt-5 max-w-md text-base leading-8 text-[#A8A8B0]">
                  Northstar is a calm operating layer for creative teams, campaign launches, and leadership planning across modern organizations.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                  <a href="#" className="rounded-full border border-white/14 px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-white/8">
                    Book Demo
                  </a>
                  <a href="#" className="rounded-full border border-white/14 px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-white/8">
                    Contact
                  </a>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-sm text-[#A8A8B0]">
              <a href="#" className="hover:text-white">Overview</a>
              <a href="#" className="hover:text-white">Use Cases</a>
              <a href="#" className="hover:text-white">Approach</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-[#8F8F99]">
              <p>&copy; 2026 Northstar Studio. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default LandingPage
