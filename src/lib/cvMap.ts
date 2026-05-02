export const CV_MAP: Record<string, string> = {
  'instructional-designer':    '/cv/garrett-stack-cv-instructional-designer.pdf',
  'implementation-consultant': '/cv/garrett-stack-cv-implementation-consultant.pdf',
  'technical-writer':          '/cv/garrett-stack-cv-technical-writer.pdf',
  'enablement-onboarding':     '/cv/garrett-stack-cv-enablement-onboarding.pdf',
  'cybersecurity-training':    '/cv/garrett-stack-cv-cybersecurity-training.pdf',
  'data-analytics':            '/cv/garrett-stack-cv-data-analytics.pdf',
}

export function getCVPath(roleType: string): string {
  return CV_MAP[roleType] ?? '/cv/garrett-stack-cv-implementation-consultant.pdf'
}
