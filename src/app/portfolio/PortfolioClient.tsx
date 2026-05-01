'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/sanity'

const FILTERS = [
  { label: 'All work',              value: 'all' },
  { label: 'Instructional Design',  value: 'instructional-design' },
  { label: 'Technical Writing',     value: 'technical-writing' },
  { label: 'Implementation',        value: 'implementation' },
  { label: 'GIS',                   value: 'gis' },
]

interface Props {
  projects: Project[]
}

export default function PortfolioClient({ projects }: Props) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <>
      {/* ── Filters ── */}
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

      {/* ── Projects grid ── */}
      <section className="py-24 border-b border-ink-200">
        <div className="container-site">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-display text-3xl text-ink-300">
                No projects in this category yet.
              </p>
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
  const CATEGORY_LABELS: Record<string, string> = {
    'instructional-design': 'Instructional Design',
    'technical-writing':    'Technical Writing',
    'implementation':       'Implementation',
    'gis':                  'GIS',
    'other':                'Other',
  }

  const card = (
    <div className="group border border-ink-200 hover:border-signal transition-colors duration-300 flex flex-col h-full">
      {/* Category tag */}
      <div className="px-8 pt-8 pb-0">
        <p className="label-tag">{CATEGORY_LABELS[project.category] ?? project.category}</p>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-display text-2xl text-ink-900 mb-4 group-hover:text-signal transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="text-ink-500 text-sm leading-relaxed mb-6 flex-1">
          {project.summary}
        </p>

        {/* Outcomes */}
        {project.outcomes?.length > 0 && (
          <ul className="space-y-2 mb-6">
            {project.outcomes.slice(0, 3).map((outcome, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink-600">
                <span className="text-signal mt-0.5 shrink-0">→</span>
                {outcome}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs bg-ink-100 text-ink-500 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link indicator */}
        {project.link && (
          <p className="font-mono text-xs text-signal mt-auto">
            View project →
          </p>
        )}
      </div>
    </div>
  )

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    )
  }

  return <div>{card}</div>
}
