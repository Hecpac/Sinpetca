import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock3 } from 'lucide-react';

import { blogPosts } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos técnicos de SINPETCA sobre inspección industrial, END, integridad mecánica y certificación de equipos críticos.',
  alternates: {
    canonical: 'https://sinpetca.com/blog',
  },
  openGraph: {
    title: 'Blog | SINPETCA',
    description:
      'Notas técnicas y criterios prácticos para inspección industrial, END, izamiento y continuidad operativa.',
    type: 'website',
  },
};

const featuredPost = blogPosts.find(post => post.featured) ?? blogPosts[0];
const regularPosts = blogPosts.filter(post => post.slug !== featuredPost.slug);

function formatDate(date: string) {
  return new Intl.DateTimeFormat('es-VE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`));
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-industrial-dark">
      <section className="relative overflow-hidden bg-gradient-to-b from-sinpetca-navy via-sinpetca-navy to-industrial-dark pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-12 h-80 w-80 rounded-full bg-sinpetca-orange/10 blur-[140px]" />
          <div className="absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-sinpetca-blue/10 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:34px_34px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sinpetca-orange">
              Blog técnico
            </span>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Criterio de inspección, sin relleno
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Publicamos notas útiles para operaciones, mantenimiento y calidad: cuándo aplicar un
              método, cómo preparar una inspección y qué revisar en activos críticos antes de
              certificar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-industrial-gray py-16 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
            <article className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-industrial-dark/25 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
                  <span className="rounded-full border border-sinpetca-orange/30 bg-sinpetca-orange/10 px-3 py-1 font-medium text-sinpetca-orange">
                    Destacado
                  </span>
                  <span>{featuredPost.category}</span>
                  <span className="text-white/20">•</span>
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                  <span className="text-white/20">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-4 w-4" />
                    {featuredPost.readingTime}
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {featuredPost.keyTakeaways.map(item => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/8 bg-black/15 p-4 text-sm leading-6 text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-sinpetca-orange"
                >
                  Leer artículo completo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            <div className="grid gap-5">
              {regularPosts.map(post => (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-[0_18px_54px_rgba(0,0,0,0.24)]"
                >
                  <div className="grid sm:grid-cols-[220px_minmax(0,1fr)]">
                    <div className="relative min-h-[220px] overflow-hidden">
                      <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-gray-400">
                        <span className="text-sinpetca-orange">{post.category}</span>
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <h2 className="mt-3 text-2xl font-bold text-white">{post.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-gray-400">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-sinpetca-orange"
                      >
                        Leer más
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-industrial-dark pb-20 pt-6 sm:pb-24">
        <div className="container mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="rounded-[30px] border border-sinpetca-orange/20 bg-gradient-to-r from-sinpetca-navy/50 via-black/15 to-sinpetca-orange/10 px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sinpetca-orange">
                  ¿Tienes un caso específico?
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Podemos aterrizar estas recomendaciones a tu activo y a tu operación
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  Si necesitas convertir criterios generales en un plan de inspección útil para
                  campo, te ayudamos a definir alcance, método y entregables.
                </p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sinpetca-orange px-6 py-3 text-sm font-semibold text-industrial-dark transition-transform duration-300 hover:-translate-y-0.5"
              >
                Solicitar asesoría
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
