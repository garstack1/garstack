import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Portfolio project',
  type: 'document',
  fields: [
    defineField({ name: 'title',    type: 'string', title: 'Project title', validation: R => R.required() }),
    defineField({ name: 'slug',     type: 'slug',   title: 'Slug', options: { source: 'title' } }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Instructional Design',   value: 'instructional-design' },
          { title: 'Technical Writing',      value: 'technical-writing' },
          { title: 'Implementation',         value: 'implementation' },
          { title: 'Enablement / Onboarding', value: 'enablement-onboarding' },
          { title: 'Cybersecurity Training', value: 'cybersecurity-training' },
          { title: 'Data Analytics',         value: 'data-analytics' },
          { title: 'GIS',                    value: 'gis' },
          { title: 'Other',                  value: 'other' },
        ],
     },
    }),
    defineField({ name: 'summary',  type: 'text',   title: 'Short summary', rows: 3 }),
    defineField({
      name: 'outcomes',
      type: 'array',
      title: 'Key outcomes / results',
      of: [{ type: 'string' }],
      description: 'Bullet points — keep them metrics-driven (e.g. "Reduced onboarding time by 30%")',
    }),
    defineField({ name: 'tags',     type: 'array',  title: 'Tags', of: [{ type: 'string' }] }),
    defineField({ name: 'image',    type: 'image',  title: 'Cover image', options: { hotspot: true } }),
    defineField({ name: 'link',     type: 'url',    title: 'External link (optional)' }),
    defineField({ name: 'body',     type: 'array',  title: 'Full write-up', of: [{ type: 'block' }] }),
  ],
})
