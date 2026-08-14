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
      name: 'hidden',
      title: 'Hide from CV page',
      type: 'boolean',
      description: 'Toggle on to hide this certification from the public CV page',
      initialValue: false,
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
      title: 'Certification categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'certCategory' }] }],
      description: 'Which certification categories this belongs to',
    }),
    defineField({
      name: 'categoryOrder',
      title: 'Order within category',
      type: 'number',
      description: 'Lower numbers appear first within each category',
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'issuer' },
  },
})
