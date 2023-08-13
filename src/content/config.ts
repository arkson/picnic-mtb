// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    location: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    cover: image(),
    coverAlt: z.string(),
    tags: z.array(z.string()),
    amenities: z.array(z.string()),
    readTime: z.string(),
  })
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    location: z.string(),
    pubDate: z.date(),
    cover: image(),
  })
});

export const collections = {
  posts: postsCollection,
  events: eventsCollection,
};