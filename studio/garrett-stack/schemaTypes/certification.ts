import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Certification name',
      type: 'string',
      validation: R => R.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuing organisation',
      type: 'string',
      validation: R => R.required(),
    }),
    defineField({
      name: 'issuedDate',
      title: 'Date issued',
      type: 'date',
    }),
    defineField({
      name: 'expiryDate',
      title: 'Expiry date (optional)',
      type: 'date',
    }),
    defineField({
      name: 'credentialUrl',
      title: 'Credential URL (optional)',
      type: 'url',
      description: 'Link to verify the credential e.g. Credly badge',
    }),
    defineField({
      name: 'badgeImage',
      title: 'Badge image (optional)',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload the badge image if available',
    }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Tier 1 - Core (show everywhere)', value: 'core' },
          { title: 'Tier 2 - Role relevant',          value: 'role' },
          { title: 'Tier 3 - Company specific',       value: 'company' },
        ],
      },
      validation: R => R.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Relevant role categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Instructional Designer',   value: 'instructional-designer' },
          { title: 'Implementation Consultant', value: 'implementation-consultant' },
          { title: 'Technical Writer',          value: 'technical-writer' },
          { title: 'Enablement / Onboarding',  value: 'enablement-onboarding' },
          { title: 'Cybersecurity Training',    value: 'cybersecurity-training' },
          { title: 'Data Analytics',            value: 'data-analytics' },
          { title: 'L&D Partner',               value: 'ld-partner' },
        ],
      },
      description: 'Which role types is this cert relevant to?',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'issuer' },
  },
})
