import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { sanityClient } from '@/lib/sanity'
import BlogClient from './BlogClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on instructional design, software implementation and making technology work for people - by Garrett Stack.',
}

export const revalidate = 60

async function getAllPosts() {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id, title, "slug": slug.current,
      publishedAt, summary, tags
    }`
  )
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <Nav />
      <main>
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
        <BlogClient posts={posts} />
      </main>
      <Footer />
    </>
  )
}
