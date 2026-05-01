import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { getBlogPosts } from '@/lib/sanity'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on instructional design, software implementation and making technology work for people - by Garrett Stack.',
}

export const revalidate = 60

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section className="pt-40 pb-24 border-b border-ink-200">
          <div className="container-site grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="label-tag mb-8">Blog</p>
              <h1 className="text-display text-[clamp(3rem,7vw,6rem)] text-ink-900 leading-none">
                Straight talk on learning and technology.
              </h1>
            </div>
            <p className="text-ink-500 text-xl leading-relaxed">
              Thoughts on instructional design, software implementation
              and what actually makes people adopt new technology.
              No waffle.
            </p>
          </div>
        </section>

        {/* ── Posts ── */}
        <section className="py-24 border-b border-ink-200">
          <div className="container-site">
            {posts.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-display text-3xl text-ink-300">Posts coming soon.</p>
              </div>
            ) : (
              <div className="space-y-0">
                {posts.map((post, i) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group grid md:grid-cols-12 gap-8 py-12 border-b border-ink-100 last:border-0 hover:bg-ink-50 -mx-6 px-6 transition-colors"
                  >
                    {/* Number */}
                    <div className="md:col-span-1 hidden md:flex items-start pt-1">
                      <span className="font-mono text-xs text-ink-300">
                        {String(i + 1).padStart(2, '0')}
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
                      <h2 className="text-display text-2xl md:text-3xl text-ink-900 mb-4 group-hover:text-signal transition-colors leading-tight">
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

      </main>
      <Footer />
    </>
  )
}
