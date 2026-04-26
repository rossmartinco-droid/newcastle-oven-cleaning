import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro 5 content collections — using the new glob loader pattern.
// Collection ID = filename (so jesmond.md → entry.id = 'jesmond').
const serviceAreas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/service-areas' }),
  schema: z.object({
    name: z.string(),
    /** Distance from Fenham (NE4 5NS) in miles. */
    distanceMiles: z.number(),
    /** Postcode prefixes covered (e.g. ['NE2', 'NE3']). */
    postcodes: z.array(z.string()),
    /** Named streets that demonstrate genuine local knowledge (5–8 ideal). */
    streets: z.array(z.string()),
    /** Landmarks / known places (1–3). */
    landmarks: z.array(z.string()),
    /** One-line demographic note (informs tone). */
    demographic: z.string(),
    /** Property types prevalent in this area. */
    propertyTypes: z.array(z.string()),
    /** Hero-section short description. */
    heroLead: z.string(),
    /** Meta title (under 65 chars). */
    metaTitle: z.string(),
    /** Meta description (under 160 chars). */
    metaDescription: z.string(),
    /** Area-specific FAQs (3 minimum, 5 ideal). */
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

export const collections = { 'service-areas': serviceAreas };
