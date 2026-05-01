import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { sanityClient } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 60

interface Post {
  _id: string
  title: string
  slug: string
  publishedAt: string
  summary: string
  tags: string[]
  body: Array<{
    _type: string
    _key: string
    style?: string
    children?: Array<{ text: string; marks?: string[] }>
  }>
}

async function getPost(slug: string): Promise<Post | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, "slug": slug.current,
      publishedAt, summary, tags, body
    }`,
    { slug }
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Not Found' }
  return { title: post.title, description: post.summary }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IE', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

function renderBody(body: Post['body']) {
  if (!body?.length) return null
  return body.map((block) => {
    if (block._type !== 'block') return null
    const text = block.children?.map(c => c.text).join('') ?? ''
    if (!text.trim()) return <hr key={block._key} className="border-ink-200 my-8" />
    switch (block.style) {
      case 'h2':
        return <h2 key={block._key} className="text-display text-3xl text-ink-900 mt-12 mb-6">{text}</h2>
      case 'h3':
        return <h3 key={block._key} className="text-display text-2xl text-ink-900 mt-10 mb-4">{text}</h3>
      default:
        return <p key={block._key} className="text-ink-700 text-lg leading-relaxed mb-6">{text}</p>
    }
  })
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <Nav />
      <main>
        <section className="pt-40 pb-16 border-b border-ink-200">
          <div className="container-site max-w-3xl">
            <Link href="/blog" className="label-tag hover:text-signal transition-colors mb-8 inline-block">
              Back to blog
            </Link>
            <h1 className="text-display text-[clamp(2.5rem,6vw,5rem)] text-ink-900 leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <p className="font-mono text-xs text-ink-400">{formatDate(post.publishedAt)}</p>
              {post.tags?.map(tag => (
                <span key={tag} className="font-mono text-xs bg-ink-100 text-ink-500 px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 border-b border-ink-200">
          <div className="container-site max-w-3xl">
            {renderBody(post.body)}
          </div>
        </section>
        <section className="py-24">
          <div className="container-site max-w-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="label-tag mb-3">Want to work together?</p>
              <p className="text-display text-3xl text-ink-900">Let&rsquo;s start a conversation.</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">Get in touch</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
