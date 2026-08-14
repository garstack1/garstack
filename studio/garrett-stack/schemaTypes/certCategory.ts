import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'certCategory',
  title: 'Certification Category',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Display label',
      type: 'string',
      description: 'e.g. Instructional Design & L&D',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'key',
      title: 'Key',
      type: 'slug',
      description: 'e.g. instructional-design',
      options: { source: 'label' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'label', subtitle: 'order' },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Order: ${subtitle}` }
    },
  },
})
