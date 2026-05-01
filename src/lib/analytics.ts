// lib/analytics.ts
// Wrapper for GA4 custom events

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params)
  }
}

// Track employer page visits
export function trackEmployerVisit(employerSlug: string, roleType: string) {
  trackEvent('employer_page_view', {
    employer: employerSlug,
    role_type: roleType,
    timestamp: new Date().toISOString(),
  })
}

// Track CV downloads
export function trackCVDownload(employerSlug?: string) {
  trackEvent('cv_download', {
    employer: employerSlug ?? 'direct',
  })
}

// Track contact form submissions
export function trackContactSubmit(source?: string) {
  trackEvent('contact_form_submit', {
    source: source ?? 'contact_page',
  })
}

// Track scroll depth milestones
export function trackScrollDepth(percent: number, page: string) {
  trackEvent('scroll_depth', { percent, page })
}
