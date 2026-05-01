import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { getEmployerPage } from '@/lib/sanity'
import EmployerPageClient from './EmployerPageClient'

interface Props {
  params: { employer: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getEmployerPage(params.employer)
  if (!page) return { title: 'Not Found' }
  return {
    title: page.metaTitle ?? `Garrett Stack — Application for ${page.employerName}`,
    description: page.metaDescription ?? page.heroSubline,
    robots: 'noindex, nofollow', // Keep employer pages private from Google
  }
}

export default async function EmployerLandingPage({ params }: Props) {
  const page = await getEmployerPage(params.employer)
  if (!page) notFound()

  return (
    <>
      <Nav />
      <EmployerPageClient page={page} employerSlug={params.employer} />
      <Footer />
    </>
  )
}
