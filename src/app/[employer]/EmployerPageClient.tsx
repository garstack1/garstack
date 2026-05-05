'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { trackEmployerVisit, trackCVDownload } from '@/lib/analytics'
import type { EmployerPage } from '@/lib/sanity'

const ROLE_LABELS: Record<string, string> = {
  'instructional-designer':     'Instructional Designer',
  'implementation-consultant':  'Implementation Consultant',
  'technical-writer':           'Technical Writer',
}

interface Props {
  page: EmployerPage
  employerSlug: string
}

export default function EmployerPageClient({ page, employerSlug }: Props) {
  // Fire GA event on mount
  useEffect(() => {
    trackEmployerVisit(employerSlug, page.roleType)
  }, [employerSlug, page.roleType])

  const roleLabel = ROLE_LABELS[page.roleType] ?? page.roleType

  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-[70vh] flex flex-col justify-end pb-20 pt-40 bg-ink-900 relative overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#F4F2EE 1px, transparent 1px),
                              linear-gradient(90deg, #F4F2EE 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 left-0 w-1 h-full bg-signal" />

        <div className="container-site relative z-10">
          <p className="label-tag text-ink-500 mb-6">
            Personal application · {page.employerName} · {roleLabel}
          </p>
          <h1 className="text-display text-[clamp(3rem,8vw,7rem)] text-slate-site leading-none mb-8">
            {page.heroHeadline}
          </h1>
          <p className="text-ink-300 text-xl max-w-2xl leading-relaxed mb-12">
            {page.heroSubline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/cv/garrett-stack-cv.pdf"
              download
              onClick={() => trackCVDownload(employerSlug)}
              className="btn-primary"
            >
              Download CV
              <span className="text-signal">↓</span>
            </a>
            <Link href="/contact" className="btn-outline border-ink-600 text-slate-site hover:bg-slate-site hover:text-ink-900">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Custom message (optional) ── */}
      {page.customMessage && (
        <section className="py-20 border-b border-ink-200">
          <div className="container-site max-w-3xl">
            <p className="label-tag mb-6">A note for {page.employerName}</p>
            <p className="text-display text-2xl md:text-3xl text-ink-900 leading-relaxed italic">
              &ldquo;{page.customMessage}&rdquo;
            </p>
          </div>
        </section>
      )}

      {/* ── Featured projects ── */}
      {page.showModules.portfolio && page.featuredProjects?.length > 0 && (
        <section className="py-24 border-b border-ink-200">
          <div className="container-site">
            <p className="label-tag mb-12">Selected work for this application</p>
            <div className="grid md:grid-cols-2 gap-8">
              {page.featuredProjects.map((project) => (
                <div key={project._id} className="border border-ink-200 p-8 hover:border-signal transition-colors group">
                  <p className="label-tag mb-4">{project.category}</p>
                  <h3 className="text-display text-2xl text-ink-900 mb-4 group-hover:text-signal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-ink-500 text-sm leading-relaxed mb-6">{project.summary}</p>
                  {project.outcomes?.length > 0 && (
                    <ul className="space-y-2">
                      {project.outcomes.map((o, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink-600">
                          <span className="text-signal mt-0.5">→</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="font-mono text-xs bg-ink-100 text-ink-600 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Certifications ── */}
      {page.featuredCertifications?.length > 0 && (
        <section className="py-24 border-b border-ink-200 bg-ink-900">
          <div className="container-site">
            <p className="label-tag text-ink-500 mb-4">Verified certifications</p>
            <h2 className="text-display text-4xl text-slate-site mb-16">Credentials that back the claim.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.featuredCertifications.map((cert) => (
                <div
                  key={cert._id}
                  className="relative bg-ink-800 border border-ink-700 hover:border-signal transition-all duration-300 group overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-signal" />

                  <div className="p-6">
                    {/* Issuer tag */}
                    <span className="inline-block font-mono text-xs text-signal tracking-widest uppercase mb-4 border border-signal/30 px-2 py-1">
                      {cert.issuer}
                    </span>

                    {/* Cert name */}
                    <p className="text-slate-site font-medium leading-snug mb-4 group-hover:text-signal transition-colors">
                      {cert.name}
                    </p>

                    {/* Date */}
                    {cert.issuedDate && (
                      <p className="font-mono text-xs text-ink-500 mb-4">
                        Issued {new Date(cert.issuedDate).toLocaleDateString('en-IE', { year: 'numeric', month: 'long' })}
                      </p>
                    )}

                    {/* Verify link */}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-signal hover:gap-3 transition-all"
                      >
                        Verify credential →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CV section ── */}
      {page.showModules.cv && (
        <section className="py-24 border-b border-ink-200 bg-ink-50">
          <div className="container-site flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="label-tag mb-4">Experience & qualifications</p>
              <h2 className="text-display text-4xl text-ink-900">12+ years. Measurable results.</h2>
            </div>
            <div className="flex gap-4">
              <Link href="/cv" className="btn-outline">View full CV</Link>
              <a
                href="/cv/garrett-stack-cv.pdf"
                download
                onClick={() => trackCVDownload(employerSlug)}
                className="btn-primary"
              >
                Download PDF
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── Testimonials ── */}
      {page.featuredTestimonials?.length > 0 && (
        <section className="py-24 border-b border-ink-200">
          <div className="container-site">
            <p className="label-tag mb-4">What colleagues say</p>
            <h2 className="text-display text-4xl text-ink-900 mb-16">
              Don&rsquo;t just take my word for it.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {page.featuredTestimonials.map((t) => (
                <div key={t._id} className="border border-ink-200 p-8 hover:border-signal transition-colors flex flex-col">
                  {/* Quote */}
                  <p className="text-signal text-4xl font-serif leading-none mb-4">&ldquo;</p>
                  <p className="text-ink-700 text-lg leading-relaxed mb-8 italic flex-1">
                    {t.quote}
                  </p>
                  {/* Attribution */}
                  <div className="border-t border-ink-100 pt-6 mt-auto">
                    <p className="text-ink-900 font-medium">{t.name}</p>
                    <p className="text-ink-400 text-sm mt-1">{t.role}{t.company ? ` - ${t.company}` : ''}</p>
                    {t.relationship && (
                      <p className="font-mono text-xs text-ink-300 mt-1">{t.relationship}</p>
                    )}
                    {t.linkedInUrl && (
                      <a
                        href={t.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-signal hover:underline mt-2 inline-block"
                      >
                        View on LinkedIn →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <section className="py-24">
        <div className="container-site text-center max-w-2xl mx-auto">
          <p className="label-tag mb-6">Ready to talk?</p>
          <h2 className="text-display text-5xl text-ink-900 mb-8 leading-tight">
            Let&rsquo;s discuss what I can<br />
            <span className="italic text-signal">do for {page.employerName}.</span>
          </h2>
          <Link href="/contact" className="btn-primary">
            Start the conversation →
          </Link>
        </div>
      </section>
    </main>
  )
}
