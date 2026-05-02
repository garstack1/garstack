import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ── Type definitions ─────────────────────────────────────────────────────────

export interface EmployerPage {
  _id: string
  slug: string
  employerName: string
  roleType: 'instructional-designer' | 'implementation-consultant' | 'technical-writer'
  heroHeadline: string
  heroSubline: string
  showModules: {
    portfolio: boolean
    cv: boolean
    blog: boolean
    music: boolean
    gis: boolean
    testimonials: boolean
  }
  featuredProjects: Project[]
  featuredCertifications: Certification[]
  customMessage?: string
  metaTitle?: string
  metaDescription?: string
}

export interface Project {
  _id: string
  title: string
  slug: string
  category: string
  summary: string
  outcomes: string[]
  tags: string[]
  image?: SanityImageSource
  link?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: string
  publishedAt: string
  summary: string
  body: unknown[]
  tags: string[]
}

export interface Certification {
  _id: string
  name: string
  issuer: string
  issuedDate?: string
  expiryDate?: string
  credentialUrl?: string
  badgeImage?: any
  tier: 'core' | 'role' | 'company'
  categories: string[]
}

export interface Testimonial {
  _id: string
  name: string
  role: string
  company: string
  quote: string
  avatar?: SanityImageSource
}

// ── Queries ──────────────────────────────────────────────────────────────────

export async function getEmployerPage(slug: string): Promise<EmployerPage | null> {
  return sanityClient.fetch(
    `*[_type == "employerPage" && slug.current == $slug][0]{
      _id, "slug": slug.current, employerName, roleType,
      heroHeadline, heroSubline, showModules,
      featuredProjects[]->{ _id, title, "slug": slug.current,
        category, summary, outcomes, tags, image, link },
      featuredCertifications[]->{ _id, name, issuer, issuedDate, credentialUrl, badgeImage, tier, categories },
      customMessage, metaTitle, metaDescription
    }`,
    { slug }
  )
}

export async function getAllProjects(): Promise<Project[]> {
  return sanityClient.fetch(
    `*[_type == "project"] | order(_createdAt desc){
      _id, title, "slug": slug.current,
      category, summary, outcomes, tags, image, link
    }`
  )
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id, title, "slug": slug.current,
      publishedAt, summary, tags
    }`
  )
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch(
    `*[_type == "testimonial"]{ _id, name, role, company, quote, avatar }`
  )
}
