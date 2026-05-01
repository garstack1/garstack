// sanity/schemas/employerPage.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'employerPage',
  title: 'Employer landing page',
  type: 'document',
  fields: [
    defineField({
      name: 'employerName',
      title: 'Employer name',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug (e.g. acme-corp → garrettstack.com/acme-corp)',
      type: 'slug',
      options: { source: 'employerName', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'roleType',
      title: 'Role type being applied for',
      type: 'string',
      options: {
        list: [
          { title: 'Instructional Designer',    value: 'instructional-designer' },
          { title: 'Implementation Consultant',  value: 'implementation-consultant' },
          { title: 'Technical Writer',           value: 'technical-writer' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero headline',
      type: 'string',
      description: 'Big bold headline — e.g. "Built to train. Proven to deliver."',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'heroSubline',
      title: 'Hero subline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'customMessage',
      title: 'Personal message to employer (optional)',
      type: 'text',
      rows: 4,
      description: 'Shows as a pull-quote. Leave blank to hide.',
    }),
    defineField({
      name: 'showModules',
      title: 'Show / hide sections',
      type: 'object',
      fields: [
        { name: 'portfolio',     type: 'boolean', title: 'Portfolio',     initialValue: true },
        { name: 'cv',            type: 'boolean', title: 'CV section',    initialValue: true },
        { name: 'blog',          type: 'boolean', title: 'Blog',          initialValue: false },
        { name: 'testimonials',  type: 'boolean', title: 'Testimonials',  initialValue: true },
        { name: 'music',         type: 'boolean', title: 'Music project', initialValue: false },
        { name: 'gis',           type: 'boolean', title: 'GIS projects',  initialValue: false },
      ],
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured projects for this page',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO title (optional)',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO description (optional)',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: { title: 'employerName', subtitle: 'roleType', slug: 'slug.current' },
    prepare: ({ title, subtitle, slug }) => ({
      title,
      subtitle: `/${slug} — ${subtitle}`,
    }),
  },
})
