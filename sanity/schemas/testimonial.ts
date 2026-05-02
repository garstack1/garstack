import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: R => R.required(),
    }),
    defineField({
      name: 'role',
      title: 'Job title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'relationship',
      title: 'Relationship',
      type: 'string',
      description: 'e.g. "Worked together at DocuSign"',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 5,
      validation: R => R.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Photo (optional)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'LinkedIn profile URL (optional)',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Show on About page',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show or hide on the main About page',
    }),
    defineField({
      name: 'relevantRoles',
      title: 'Relevant role types',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Instructional Designer',    value: 'instructional-designer' },
          { title: 'Implementation Consultant',  value: 'implementation-consultant' },
          { title: 'Technical Writer',           value: 'technical-writer' },
          { title: 'Enablement / Onboarding',   value: 'enablement-onboarding' },
          { title: 'Cybersecurity Training',     value: 'cybersecurity-training' },
          { title: 'Data Analytics',             value: 'data-analytics' },
          { title: 'L&D Partner',                value: 'ld-partner' },
        ],
      },
      description: 'Which role types is this testimonial relevant to?',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'company' },
  },
})
