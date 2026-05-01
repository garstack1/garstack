'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

const STATS = [
  { value: '600+', label: 'Learners trained' },
  { value: '15+',  label: 'Years experience' },
  { value: '20+',  label: 'Countries trained in' },
  { value: '3',    label: 'Disciplines mastered' },
]

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return
    let frame: number
    let pos = 0
    const speed = 0.4
    const step = () => {
      pos -= speed
      if (pos < -el.scrollWidth / 2) pos = 0
      el.style.transform = `translateX(${pos}px)`
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-slate-site">
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0D0D0D 1px, transparent 1px),
                            linear-gradient(90deg, #0D0D0D 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orange accent block — top right */}
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-signal" />

      {/* Main content */}
      <div className="container-site flex-1 flex flex-col justify-center pt-32 pb-20 relative z-10">
        {/* Label */}
        <p className="label-tag mb-8 animate-fade-in">
          Instructional Designer · Technical Writer · Implementation Consultant
        </p>

        {/* Giant headline */}
        <div className="overflow-hidden mb-4">
          <h1 className="text-display text-[clamp(3.5rem,10vw,9rem)] text-ink-900 leading-none animate-fade-up">
            I turn complex
          </h1>
        </div>
        <div className="overflow-hidden mb-4">
          <h1 className="text-display text-[clamp(3.5rem,10vw,9rem)] text-ink-900 leading-none animate-fade-up delay-100">
            systems into
          </h1>
        </div>
        <div className="overflow-hidden mb-12">
          <h1 className="text-display italic text-[clamp(3.5rem,10vw,9rem)] text-signal leading-none animate-fade-up delay-200">
            clear outcomes.
          </h1>
        </div>

        {/* Sub copy */}
        <p className="text-ink-500 text-lg md:text-xl max-w-xl leading-relaxed mb-12 animate-fade-up delay-300">
          With 15+ years designing learning experiences and implementing solutions -
classroom to boardroom, Seattle to Dubai - I help organisations build
capability that sticks.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
          <Link href="/portfolio" className="btn-primary">
            See my work
            <span className="text-signal">→</span>
          </Link>
          <Link href="/cv" className="btn-outline">
            Download CV
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-ink-200 animate-fade-in delay-500">
        <div className="container-site py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-display text-4xl md:text-5xl text-ink-900 mb-1">{value}</p>
              <p className="label-tag">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-t border-ink-200 bg-ink-900 py-4 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center">
              {[
                'Instructional Design',
                'Technical Writing',
                'Implementation Consulting',
                'eLearning Development',
                'Learning Strategy',
                'GIS Projects',
                'Change Management',
                'Curriculum Design',
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-6 mx-6">
                  <span className="text-slate-site font-mono text-xs tracking-widest uppercase">{item}</span>
                  <span className="w-1 h-1 rounded-full bg-signal inline-block" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
