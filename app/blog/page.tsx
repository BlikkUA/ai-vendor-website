import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage
}`

interface Post {
  _id: string
  title: string
  slug?: { current: string }
  publishedAt?: string
  excerpt?: string
  mainImage?: any
}

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY)

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Hero Section у стилі Vendor+ */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          Insights & Updates
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Latest Perspectives on AI Data & Operations
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
          Deep dives into human-in-the-loop infrastructure, data annotation best practices, RLHF evaluation, and building reliable AI models at scale.
        </p>
      </div>

      {/* Grid з картками в стилі головної */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const postHref = post.slug?.current ? `/blog/${post.slug.current}` : null

          return (
            <article 
              key={post._id} 
              className="group flex flex-col bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Прев'ю-зображення */}
              {postHref ? (
                <Link href={postHref} className="block aspect-[16/9] relative overflow-hidden bg-zinc-950/80 border-b border-zinc-800/50">
                  {post.mainImage ? (
                    <Image
                      src={urlForImage(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-700 text-xs font-mono">
                      [VENDOR+ AI DATA]
                    </div>
                  )}
                </Link>
              ) : (
                <div className="aspect-[16/9] bg-zinc-950/80 relative overflow-hidden border-b border-zinc-800/50">
                  {post.mainImage && (
                    <Image
                      src={urlForImage(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover opacity-90"
                    />
                  )}
                </div>
              )}

              {/* Текстова частина */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {post.publishedAt && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[11px] font-mono tracking-wider text-amber-400/90 uppercase">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                )}

                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug tracking-tight">
                  {postHref ? (
                    <Link href={postHref} className="hover:text-amber-400 transition-colors">
                      {post.title}
                    </Link>
                  ) : (
                    post.title
                  )}
                </h2>
                
                {post.excerpt && (
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                )}

                {/* Кнопка "Read article" як на головній */}
                {postHref && (
                  <div className="mt-auto pt-4 border-t border-zinc-800/40">
                    <Link 
                      href={postHref} 
                      className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-amber-400 transition-colors"
                    >
                      Read full article
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}