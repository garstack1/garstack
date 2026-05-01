import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Garrett Stack — Instructional Designer, Technical Writer and Implementation Consultant based in Ireland.',
}

const ACHIEVEMENTS = [
  {
    num: '01',
    stat: '500+',
    label: 'Professionals trained',
    detail: 'Delivered end-to-end training on DocuSign Contract Lifecycle Management, including Salesforce integration, eSignature workflows, and Apex Automation.',
  },
  {
    num: '02',
    stat: '7',
    label: 'Enterprise organisations',
    detail: 'Designed and rolled out a full Learning Management System at Amdocs — serving in-house staff and six major US telecommunications companies.',
  },
  {
    num: '03',
    stat: 'EMEA',
    label: 'Regional reach',
    detail: 'Consulted for Autodesk across Europe, the Middle East and Africa — rolling out Web GIS software training to distributors, resellers and end customers.',
  },
]

const SKILLS = [
  { category: 'Instructional Design', items: ['Curriculum design', 'eLearning development', 'LMS administration', 'Learning strategy'] },
  { category: 'Technical Writing', items: ['User documentation', 'Process guides', 'API documentation', 'Release notes'] },
  { category: 'Implementation', items: ['Software rollouts', 'Onboarding programmes', 'Change management', 'Stakeholder training'] },
  { category: 'Platforms & Tools', items: ['Salesforce', 'DocuSign CLM', 'Salesforce Apex', 'Web GIS / Autodesk'] },
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="pt-40 pb-24 border-b border-ink-200">
          <div className="container-site grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="label-tag mb-8">About me</p>
              <h1 className="text-display text-[clamp(3rem,7vw,6rem)] text-ink-900 leading-none mb-8">
                Technology is only as good as the people using it.
              </h1>
            </div>
            <div>
              <p className="text-ink-500 text-xl leading-relaxed">
                I&rsquo;ve spent an extensive career at the intersection of
                complex technology and the people who need to use it — turning
                sophisticated systems into clear, confident capability.
              </p>
            </div>
          </div>
        </section>

        {/* ── Photo + Story ── */}
        <section className="py-24 border-b border-ink-200">
          <div className="container-site grid md:grid-cols-12 gap-16 items-start">

            {/* Photo placeholder */}
            <div className="md:col-span-4">
              <div className="relative">
                <div className="aspect-[3/4] bg-ink-100 flex items-center justify-center">
                  <p className="label-tag text-ink-300">Photo coming soon</p>
                </div>
                {/* Orange accent */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-signal z-[-1]" />
              </div>
            </div>

            {/* Story */}
            <div className="md:col-span-8 space-y-6">
              <p className="label-tag mb-2">My story</p>

              <p className="text-ink-700 text-lg leading-relaxed">
                My career began in Civil Engineering software — a world where
                precision is non-negotiable and the gap between what a system
                can do and what an engineer actually needs it to do is vast.
                That tension between technical complexity and real-world
                application has shaped everything I&rsquo;ve done since.
              </p>

              <p className="text-ink-700 text-lg leading-relaxed">
                From there I moved into the SaaS world, working with some of
                the most demanding enterprise environments in the industry —
                telecommunications, contract management, geographic information
                systems. In each case, my role was the same: make the
                technology work for the people, not the other way around.
              </p>

              <p className="text-ink-700 text-lg leading-relaxed">
                I&rsquo;ve trained hundreds of professionals on platforms like
                Salesforce, DocuSign CLM, and Autodesk&rsquo;s Web GIS suite.
                I&rsquo;ve designed learning systems adopted by enterprise
                telecoms companies across the United States. I&rsquo;ve
                consulted across the EMEA region, adapting technical content
                for vastly different audiences and contexts.
              </p>

              <p className="text-ink-700 text-lg leading-relaxed">
                What I&rsquo;ve learned across all of it: the best
                implementation is the one people actually use. The best
                documentation is the one people actually read. The best
                training is the one that changes how people work — measurably,
                lastingly.
              </p>

              <p className="text-ink-700 text-lg leading-relaxed">
                I&rsquo;m based in Ireland, working remotely with organisations
                across Europe and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* ── Achievements ── */}
        <section className="py-24 bg-ink-900 border-b border-ink-800">
          <div className="container-site">
            <p className="label-tag text-ink-500 mb-16">Career highlights</p>
            <div className="grid md:grid-cols-3 gap-px bg-ink-700">
              {ACHIEVEMENTS.map(({ num, stat, label, detail }) => (
                <div key={num} className="bg-ink-900 p-10">
                  <p className="font-mono text-xs text-signal mb-6">{num}</p>
                  <p className="text-display text-6xl text-slate-site mb-2">{stat}</p>
                  <p className="label-tag text-ink-400 mb-6">{label}</p>
                  <p className="text-ink-400 text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="py-24 border-b border-ink-200">
          <div className="container-site">
            <p className="label-tag mb-16">Skills & expertise</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {SKILLS.map(({ category, items }) => (
                <div key={category}>
                  <h3 className="text-display text-xl text-ink-900 mb-6">{category}</h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-500">
                        <span className="text-signal mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why work with me ── */}
        <section className="py-24 border-b border-ink-200">
          <div className="container-site grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-tag mb-6">Why work with me</p>
              <h2 className="text-display text-4xl md:text-5xl text-ink-900 leading-tight mb-8">
                I bring the technical depth<br />
                <span className="italic text-signal">and the human touch.</span>
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: 'I understand the technology',
                  body: 'With a background spanning Civil Engineering software, SaaS platforms, CLM, and GIS — I can get up to speed on complex systems fast.',
                },
                {
                  title: 'I understand the people',
                  body: 'Training hundreds of professionals across multiple industries has given me a sharp instinct for what makes adoption succeed or fail.',
                },
                {
                  title: 'I deliver measurable outcomes',
                  body: 'Every project I take on is built around clear success criteria — not just "training delivered" but capability genuinely transferred.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-2 border-signal pl-6">
                  <h3 className="text-ink-900 font-medium mb-2">{title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="container-site flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h2 className="text-display text-4xl md:text-5xl text-ink-900 max-w-lg leading-tight">
              Interested in working<br />
              <span className="italic text-signal">together?</span>
            </h2>
            <div className="flex gap-4">
              <a href="/contact" className="btn-primary">Get in touch</a>
              <a href="/cv" className="btn-outline">View my CV</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
