import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    career: defineCollection({
      type: 'page',
      source: 'career/*.md',
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      }),
    }),
    skills: defineCollection({
      type: 'page',
      source: 'skills/*.md',
      schema: z.object({
        title: z.string().optional(),
      }),
    }),
  },
})
