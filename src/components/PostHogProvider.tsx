'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key  = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

    if (!key) return

    posthog.init(key, {
      api_host:              host ?? 'https://eu.i.posthog.com',
      capture_pageview:      false, // We handle this manually
      capture_pageleave:     true,
      session_recording: {
        maskAllInputs:       false,
        maskTextSelector:    '[data-sensitive]',
      },
      persistence:           'localStorage',
      loaded: (ph) => {
        if (process.env.NODE_ENV === 'development') {
          ph.opt_out_capturing() // Don't track in dev
        }
      },
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
