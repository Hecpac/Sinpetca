import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react';

import { blogPosts, getBlogPost } from '@/lib/blog-content';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('es-VE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`));
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: post.title,
    description: post.seoDescription,
    alternates: {
      canonical: `https://sinpetca.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | SINPETCA`,
      description: post.seoDescription,
      type: 'article',
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(item => item.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-industrial-dark">
      <section className="relative overflow-hidden bg-gradient-to-b from-sinpetca-navy via-sinpetca-navy to-industrial-dark pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-sinpetca-orange/10 blur-[120px]" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sinpetca-blue/10 blur-[140px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 lg:pl-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-sinpetca-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          <div className="mt-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <span className="rounded-full border border-sinpetca-orange/30 bg-sinpetca-orange/10 px-3 py-1 font-medium text-sinpetca-orange">
                {post.category}
              </span>
              <span>{formatDate(post.publishedAt)}</span>
              <span className="text-white/20">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="bg-industrial-gray py-16 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
            <article className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="space-y-10">
                  {post.sections.map(section => (
                    <section key={section.title}>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                      <div className="mt-4 space-y-4 text-base leading-8 text-gray-300">
                        {section.paragraphs.map(paragraph => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets && (
                        <ul className="mt-5 space-y-3 text-base leading-7 text-gray-300">
                          {section.bullets.map(item => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-sinpetca-orange" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-sinpetca-navy/40 to-black/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-sinpetca-orange">
                  Puntos clave
                </span>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-gray-300">
                  {post.keyTakeaways.map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sinpetca-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-sinpetca-orange">
                  Autor
                </span>
                <p className="mt-3 text-lg font-semibold text-white">{post.author}</p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Criterio técnico aplicado a inspección industrial, END, certificación operativa y
                  continuidad de activos críticos.
                </p>
              </div>

              <div className="rounded-[28px] border border-sinpetca-orange/20 bg-gradient-to-r from-sinpetca-orange/10 to-transparent p-6">
                <h2 className="text-xl font-bold text-white">¿Quieres evaluar un caso similar?</h2>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  Podemos convertir estas recomendaciones en un alcance de inspección para tu
                  activo, equipo o proyecto.
                </p>
                <Link
                  href="/contacto"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sinpetca-orange"
                >
                  Solicitar apoyo técnico
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-industrial-dark pb-20 pt-4 sm:pb-24">
        <div className="container mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="mb-8 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sinpetca-orange">
              Artículos relacionados
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white">Sigue leyendo</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {relatedPosts.map(related => (
              <article
                key={related.slug}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={related.coverImage} alt={related.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-gray-400">
                    <span className="text-sinpetca-orange">{related.category}</span>
                    <span>{formatDate(related.publishedAt)}</span>
                    <span>{related.readingTime}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-white">{related.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{related.excerpt}</p>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-sinpetca-orange"
                  >
                    Leer artículo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
