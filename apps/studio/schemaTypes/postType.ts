import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'travelDates',
      title: 'Travel Dates',
      type: 'object',
      fields: [
        defineField({
          name: 'start',
          title: 'Start Date',
          type: 'date',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'end',
          title: 'End Date',
          type: 'date',
          validation: (rule) =>
            rule.min(rule.valueOfField('start')).error('End date must be after start date'),
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', title: 'Alt text', type: 'string'},
            {name: 'caption', title: 'Caption', type: 'string'},
          ],
        },
      ],
    }),
  ],
})
