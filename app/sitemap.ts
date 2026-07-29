import type { MetadataRoute } from 'next'
import { getActiveRegions, SITE_URL } from '@/lib/regions'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/regions`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...getActiveRegions().map((region) => ({
      url: `${SITE_URL}/regions/${region.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: region.level === 'sido' ? 0.8 : 0.7,
    })),
  ]
}
