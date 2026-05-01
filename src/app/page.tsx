import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* About teaser */}
        <section className="py-30 border-b border-ink-200">
          <div className="container-site grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-tag mb-6">About me</p>
              <h2 className="text-display text-5xl md:text-6xl text-ink-900 mb-8 leading-tight">
                Results don&rsquo;t happen<br />
                <span className="italic text-signal">by accident.</span>
              </h2>
              <p className="text-ink-500 text-lg leading-relaxed mb-8">
                I&rsquo;ve spent over a decade designing learning experiences,
                writing technical documentation, and leading software rollouts.
                Every project I take on is built around one question: what does
                success actually look like for the people involved?
              </p>
              <Link href="/about" className="btn-outline">
                Read my story →
              </Link>
            </div>

            {/* Placeholder for photo — swap with Next/Image once you have a photo */}
            <div className="relative">
              <div className="aspect-[4/5] bg-ink-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="label-tag text-ink-300">Photo coming soon</p>
                </div>
              </div>
              {/* Orange accent corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-signal z-[-1]" />
            </div>
          </div>
        </section>

        {/* Services / Skills teaser */}
        <section className="py-30 bg-ink-900">
          <div className="container-site">
            <p className="label-tag text-ink-500 mb-12">What I do</p>
            <div className="grid md:grid-cols-3 gap-px bg-ink-700">
              {[
                {
                  num: '01',
                  title: 'Instructional Design',
                  desc: 'I design curriculum and eLearning that changes behaviour — not just box-ticking compliance modules.',
                  link: '/portfolio?filter=instructional-design',
                },
                {
                  num: '02',
                  title: 'Technical Writing',
                  desc: 'Complex software, clear documentation. I make the hard stuff readable, searchable, and useful.',
                  link: '/portfolio?filter=technical-writing',
                },
                {
                  num: '03',
                  title: 'Implementation Consulting',
                  desc: 'I lead software rollouts and onboarding programmes that actually get adopted — end to end.',
                  link: '/portfolio?filter=implementation',
                },
              ].map(({ num, title, desc, link }) => (
                <Link
                  key={num}
                  href={link}
                  className="group bg-ink-900 p-10 hover:bg-ink-800 transition-colors duration-300"
                >
                  <p className="font-mono text-xs text-signal mb-8">{num}</p>
                  <h3 className="text-display text-3xl text-slate-site mb-4 group-hover:text-signal transition-colors">
                    {title}
                  </h3>
                  <p className="text-ink-400 text-sm leading-relaxed">{desc}</p>
                  <p className="mt-8 text-signal text-sm font-mono">View work →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="py-24 border-b border-ink-200">
          <div className="container-site flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h2 className="text-display text-4xl md:text-5xl text-ink-900 max-w-lg leading-tight">
              Ready to build something<br />
              <span className="italic text-signal">that works?</span>
            </h2>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">Get in touch</Link>
              <Link href="/portfolio" className="btn-outline">See portfolio</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
