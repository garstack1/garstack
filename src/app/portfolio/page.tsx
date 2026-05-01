import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { getAllProjects } from '@/lib/sanity'
import PortfolioClient from './PortfolioClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected work by Garrett Stack - Instructional Design, Technical Writing and Implementation projects.',
}

export const revalidate = 60

export default async function PortfolioPage() {
  const projects = await getAllProjects()

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="pt-40 pb-24 border-b border-ink-200">
          <div className="container-site grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="label-tag mb-8">Portfolio</p>
              <h1 className="text-display text-[clamp(3rem,7vw,6rem)] text-ink-900 leading-none">
                Work that delivers results.
              </h1>
            </div>
            <p className="text-ink-500 text-xl leading-relaxed">
              A selection of projects across Instructional Design, Technical
              Writing and Implementation Consulting - each built around
              measurable outcomes.
            </p>
          </div>
        </section>

        <PortfolioClient projects={projects} />

      </main>
      <Footer />
    </>
  )
}
