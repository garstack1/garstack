'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Project } from '@/lib/sanity'

const FILTERS = [
  { label: 'All work',              value: 'all' },
  { label: 'Instructional Design',  value: 'instructional-design' },
  { label: 'Technical Writing',     value: 'technical-writing' },
  { label: 'Implementation',        value: 'implementation' },
  { label: 'Enablement',            value: 'enablement-onboarding' },
  { label: 'GIS',                   value: 'gis' },
]

const CATEGORY_LABELS: Record<string, string> = {
  'instructional-design':  'Instructional Design',
  'technical-writing':     'Technical Writing',
  'implementation':        'Implementation',
  'enablement-onboarding': 'Enablement',
  'gis':                   'GIS',
  'other':                 'Other',
}

interface Props {
  projects: Project[]
}

export default function PortfolioClient({ projects }: Props) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.categories?.includes(active))

  return (
    <>
      <section className="py-8 border-b border-ink-200 sticky top-16 md:top-20 bg-slate-site/95 backdrop-blur-sm z-40">
        <div className="container-site flex flex-wrap gap-3">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`font-mono text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors duration-200 ${
                active === value
                  ? 'bg-ink-900 text-slate-site border-ink-900'
                  : 'border-ink-200 text-ink-400 hover:border-ink-900 hover:text-ink-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24 border-b border-ink-200">
        <div className="container-site">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-display text-3xl text-ink-300">No projects in this category yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.image ? urlFor(project.image).width(800).height(450).url() : null

  return (
    <div className="group border border-ink-200 hover:border-signal transition-colors duration-300 flex flex-col h-full">
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden bg-ink-100">
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="px-8 pt-6 pb-0">
        <p className="label-tag">
          {project.categories?.map(c => CATEGORY_LABELS[c] ?? c).join(', ')}
        </p>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-display text-2xl text-ink-900 mb-4 group-hover:text-signal transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="text-ink-500 text-sm leading-relaxed mb-6 flex-1">
          {project.summary}
        </p>

        {project.outcomes?.length > 0 && (
          <ul className="space-y-2 mb-6">
            {project.outcomes.slice(0, 3).map((outcome, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink-600">
                <span className="text-signal mt-0.5 shrink-0">->;</span>
                {outcome}
              </li>
            ))}
          </ul>
        )}

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs bg-ink-100 text-ink-500 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-signal tracking-widest uppercase hover:gap-4 transition-all mt-auto border border-signal px-4 py-2 hover:bg-signal hover:text-slate-site w-fit"
          >
            View project ->
          </a>
        )}
      </div>
    </div>
  )
}
