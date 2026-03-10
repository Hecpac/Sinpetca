import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { FeaturedProject } from '@/lib/projects-content';

type ProjectCardProps = {
  project: FeaturedProject;
  ctaLabel?: string;
  className?: string;
  priority?: boolean;
};

export default function ProjectCard({
  project,
  ctaLabel = 'Ver detalles',
  className = '',
  priority = false,
}: ProjectCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.02] shadow-[0_20px_48px_rgba(0,0,0,0.28)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-sinpetca-orange/35 hover:shadow-[0_28px_64px_rgba(0,0,0,0.38)] ${className}`}
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/20 sm:aspect-[4/3]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-industrial-dark/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="mb-4 inline-flex w-fit rounded-full border border-sinpetca-blue/25 bg-sinpetca-navy/75 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-sinpetca-blue-light uppercase">
          {project.category}
        </span>

        <h3 className="min-h-[4.75rem] max-w-[22ch] text-balance text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-sinpetca-orange">
          {project.title}
        </h3>

        <p className="mt-3 min-h-[4.5rem] max-w-[34ch] text-pretty text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        <div className="mt-auto pt-5">
          <Link
            href={`/proyectos/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-sinpetca-orange"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
