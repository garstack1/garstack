'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Post {
  _id: string
  title: string
  slug: string
  publishedAt: string
  summary: string
  tags: string[]
}

interface Props {
  posts: Post[]
}

const GRID_PAGE_SIZE = 6
const LIST_PAGE_SIZE = 10

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogClient({ posts }: Props) {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [page, setPage] = useState(1)

  const pageSize   = view === 'grid' ? GRID_PAGE_SIZE : LIST_PAGE_SIZE
  const totalPages = Math.ceil(posts.length / pageSize)
  const paginated  = posts.slice((page - 1) * pageSize, page * pageSize)

  function switchView(v: 'grid' | 'list') {
    setView(v)
    setPage(1)
  }

  return (
    <>
      {/* ── Toolbar ── */}
      <section className="py-6 border-b border-ink-200 sticky top-16 md:top-20 bg-slate-site/95 backdrop-blur-sm z-40">
        <div className="container-site flex items-center justify-between">
          <p className="label-tag">{posts.length} posts</p>
          <div className="flex items-center gap-2">
            {/* Grid toggle */}
            <button
              onClick={() => switchView('grid')}
              aria-label="Grid view"
              className={`p-2 border transition-colors ${
                view === 'grid'
                  ? 'border-ink-900 bg-ink-900 text-slate-site'
                  : 'border-ink-200 text-ink-400 hover:border-ink-900 hover:text-ink-900'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="0" y="0" width="7" height="7" fill="currentColor"/>
                <rect x="9" y="0" width="7" height="7" fill="currentColor"/>
                <rect x="0" y="9" width="7" height="7" fill="currentColor"/>
                <rect x="9" y="9" width="7" height="7" fill="currentColor"/>
              </svg>
            </button>
            {/* List toggle */}
            <button
              onClick={() => switchView('list')}
              aria-label="List view"
              className={`p-2 border transition-colors ${
                view === 'list'
                  ? 'border-ink-900 bg-ink-900 text-slate-site'
                  : 'border-ink-200 text-ink-400 hover:border-ink-900 hover:text-ink-900'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="0" y="1" width="16" height="2" fill="currentColor"/>
                <rect x="0" y="6" width="16" height="2" fill="currentColor"/>
                <rect x="0" y="11" width="16" height="2" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="py-16 border-b border-ink-200">
        <div className="container-site">
          {posts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-display text-3xl text-ink-300">Posts coming soon.</p>
            </div>
          ) : view === 'grid' ? (
            /* Grid view - 2 columns */
            <div className="grid md:grid-cols-2 gap-8">
              {paginated.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group border border-ink-200 hover:border-signal transition-colors p-8 flex flex-col"
                >
                  {/* Tags */}
                  {post.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="font-mono text-xs bg-ink-100 text-ink-500 px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-display text-2xl text-ink-900 group-hover:text-signal transition-colors leading-tight mb-4 flex-1">
                    {post.title}
                  </h2>

                  {/* Summary */}
                  <p className="text-ink-500 text-sm leading-relaxed mb-6">
                    {post.summary}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-ink-100">
                    <p className="font-mono text-xs text-ink-400">
                      {formatDate(post.publishedAt)}
                    </p>
                    <span className="font-mono text-xs text-signal opacity-0 group-hover:opacity-100 transition-opacity">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* List view */
            <div className="space-y-0">
              {paginated.map((post, i) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group grid md:grid-cols-12 gap-8 py-10 border-b border-ink-100 last:border-0 hover:bg-ink-50 -mx-6 px-6 transition-colors"
                >
                  {/* Number */}
                  <div className="md:col-span-1 hidden md:flex items-start pt-1">
                    <span className="font-mono text-xs text-ink-300">
                      {String(posts.length - ((page - 1) * LIST_PAGE_SIZE + i)).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Date + Tags */}
                  <div className="md:col-span-2">
                    <p className="font-mono text-xs text-ink-400 mb-3">
                      {formatDate(post.publishedAt)}
                    </p>
                    {post.tags?.slice(0, 2).map(tag => (
                      <span key={tag} className="inline-block font-mono text-xs bg-ink-100 text-ink-500 px-2 py-0.5 mr-1 mb-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title + Summary */}
                  <div className="md:col-span-8">
                    <h2 className="text-display text-2xl md:text-3xl text-ink-900 mb-3 group-hover:text-signal transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-ink-500 text-sm leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 hidden md:flex items-start justify-end pt-2">
                    <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <section className="py-12">
          <div className="container-site flex items-center justify-center gap-2">
            {/* Previous */}
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="font-mono text-xs px-4 py-2 border border-ink-200 text-ink-400 hover:border-ink-900 hover:text-ink-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`font-mono text-xs px-4 py-2 border transition-colors ${
                  p === page
                    ? 'border-ink-900 bg-ink-900 text-slate-site'
                    : 'border-ink-200 text-ink-400 hover:border-ink-900 hover:text-ink-900'
                }`}
              >
                {p}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="font-mono text-xs px-4 py-2 border border-ink-200 text-ink-400 hover:border-ink-900 hover:text-ink-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
          <p className="text-center font-mono text-xs text-ink-300 mt-4">
            Page {page} of {totalPages}
          </p>
        </section>
      )}
    </>
  )
}
