'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { trackContactSubmit } from '@/lib/analytics'

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/garrett-stack',
    description: 'Connect professionally',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/garstack1',
    description: 'Code and projects',
  },
  {
    label: 'Tech Guides',
    href: 'https://garstack1.github.io/gstack-tech-guides/',
    description: 'Technical documentation portfolio',
  },
  {
    label: 'Email',
    href: 'mailto:hello@garstack.com',
    description: 'hello@garstack.com',
  },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg]   = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error ?? 'Something went wrong')
      }

      setFormState('success')
      trackContactSubmit('contact_page')
      form.reset()
    } catch (err) {
      setFormState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="pt-40 pb-24 border-b border-ink-200">
          <div className="container-site grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="label-tag mb-8">Get in touch</p>
              <h1 className="text-display text-[clamp(3rem,7vw,6rem)] text-ink-900 leading-none">
                Let&rsquo;s start a conversation.
              </h1>
            </div>
            <p className="text-ink-500 text-xl leading-relaxed">
              Whether you have a role in mind, a project to discuss, or just
              want to connect - I&rsquo;d love to hear from you. I typically
              respond within one business day.
            </p>
          </div>
        </section>

        {/* ── Form + Links ── */}
        <section className="py-24 border-b border-ink-200">
          <div className="container-site grid md:grid-cols-12 gap-16">

            {/* Form */}
            <div className="md:col-span-7">
              {formState === 'success' ? (
                <div className="border-l-4 border-signal pl-8 py-4">
                  <p className="text-display text-3xl text-ink-900 mb-3">
                    Message received.
                  </p>
                  <p className="text-ink-500 leading-relaxed">
                    Thanks for reaching out. I&rsquo;ve sent a confirmation to
                    your email and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="label-tag block mb-2" htmlFor="name">
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full border border-ink-200 bg-transparent px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-ink-900 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="label-tag block mb-2" htmlFor="email">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full border border-ink-200 bg-transparent px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-ink-900 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="label-tag block mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Role enquiry / Project discussion / Other"
                      className="w-full border border-ink-200 bg-transparent px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-ink-900 transition-colors text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="label-tag block mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell me about the role, project, or just say hello..."
                      className="w-full border border-ink-200 bg-transparent px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:outline-none focus:border-ink-900 transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Error */}
                  {formState === 'error' && (
                    <p className="text-sm text-red-500">{errorMsg}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === 'loading' ? 'Sending...' : 'Send message'}
                    {formState !== 'loading' && <span className="text-signal">→</span>}
                  </button>
                </form>
              )}
            </div>

            {/* Links */}
            <div className="md:col-span-5 md:pl-8 md:border-l border-ink-200">
              <p className="label-tag mb-8">Other ways to connect</p>
              <div className="space-y-6">
                {SOCIAL_LINKS.map(({ label, href, description }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start justify-between py-5 border-b border-ink-100 hover:border-signal transition-colors"
                  >
                    <div>
                      <p className="text-ink-900 font-medium group-hover:text-signal transition-colors">
                        {label}
                      </p>
                      <p className="text-ink-400 text-sm mt-1">{description}</p>
                    </div>
                    <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                      →
                    </span>
                  </a>
                ))}
              </div>

              {/* Availability note */}
              <div className="mt-10 border-l-2 border-signal pl-6">
                <p className="label-tag mb-2">Current availability</p>
                <p className="text-ink-700 text-sm leading-relaxed">
                  Available for full-time roles and contract engagements.
                  Open to discussing opportunities across Instructional
                  Design, Technical Writing and Implementation Consulting.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
