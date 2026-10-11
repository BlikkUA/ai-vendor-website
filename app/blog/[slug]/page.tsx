import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
export const dynamic = "force-dynamic";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  excerpt,
  body,
  mainImage
}`

interface PageProps {
  params: Promise<{ slug: string }>
}

// Динамічні SEO мета-теги для кожної статті
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ title, excerpt, mainImage }`,
    { slug }
  )

  if (!post) {
    return {
      title: 'Post Not Found | Vendor+',
    }
  }

  const imageUrl = post.mainImage ? urlForImage(post.mainImage).url() : undefined

  return {
    title: `${post.title} | Vendor+ Insights`,
    description: post.excerpt || 'Read the latest insights on AI data operations, human-in-the-loop workflows, and evaluation at Vendor+.',
    openGraph: {
      title: post.title,
      description: post.excerpt || 'Read the latest insights on AI data operations at Vendor+.',
      type: 'article',
      publishedTime: post.publishedAt,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })

  if (!post) {
    notFound()
  }

  const portableTextComponents = {
    types: {
      image: ({ value }: { value: any }) => {
        if (!value?.asset?._ref) return null
        return (
          <div className="my-10 aspect-[16/9] relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 shadow-2xl">
            <Image
              src={urlForImage(value).url()}
              alt={value.alt || 'Article image'}
              fill
              className="object-cover"
            />
          </div>
        )
      },
    },
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Кнопка повернення */}
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 hover:text-amber-300 uppercase mb-8 transition-colors"
      >
        <span>←</span> Back to Insights
      </Link>
      
      {/* Заголовок і дата */}
      <div className="mb-12">
        {post.publishedAt && (
          <p className="text-xs font-mono text-zinc-400 tracking-wider uppercase mb-4">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
          {post.title}
        </h1>
      </div>

      {/* Головне зображення */}
      {post.mainImage && (
        <div className="mb-12 aspect-[16/9] relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-2xl">
          <Image
            src={urlForImage(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Текст статті */}
      {post.body && (
        <div className="prose prose-invert max-w-none text-zinc-300 prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline prose-lg leading-relaxed">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      )}
    </main>
  )
}