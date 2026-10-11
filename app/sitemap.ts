import { client } from '@/sanity/lib/client'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vendor-plus.com'

  // Отримуємо список усіх опублікованих статей із Sanity
  const posts = await client.fetch<Array<{ slug: { current: string }; publishedAt: string }>>(
    `*[_type == "post" && defined(slug.current)]{ slug, publishedAt }`
  )

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogPosts,
  ]
}