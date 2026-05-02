import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'profilePhoto',
      title: 'Profile photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Your main profile photo - used on the About page',
    }),
    defineField({
      name: 'photoAlt',
      title: 'Photo alt text',
      type: 'string',
      description: 'Describe the photo for accessibility e.g. "Garrett Stack, Instructional Designer"',
      initialValue: 'Garrett Stack',
    }),
    defineField({
      name: 'tagline',
      title: 'Personal tagline',
      type: 'string',
      description: 'Short tagline shown under your name',
    }),
    defineField({
      name: 'bioShort',
      title: 'Short bio (optional)',
      type: 'text',
      rows: 3,
      description: 'One or two sentences used in meta descriptions and previews',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site settings' }),
  },
})
