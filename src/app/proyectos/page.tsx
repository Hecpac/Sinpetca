/**
 * Projects Page - SINPETCA
 * 
 * Gallery of successful case studies and completed projects
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ExperienceMatrix from '@/components/projects/ExperienceMatrix';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Galería de proyectos exitosos de inspección industrial y ensayos no destructivos. Casos de éxito en petrolera, naval y aeronáutica.',
  alternates: {
    canonical: 'https://sinpetca.com/proyectos',
  },
};

const projects = [
  {
    title: 'Inspección por END (Tinte Penetrante)',
    category: 'Industria Petrolera',
    description: 'Empresa Petrosucre, Ubicación Golfo de Paria. Servicio de END mediante técnica de Tinte Penetrante.',
    image: '/Fotos_Proyectos/WhatsApp Image 2026-03-05 at 11.18.01 AM.jpeg',
    link: '/proyectos/tuberias',
  },
  {
    title: 'Inspección y Certificación de Grúa de Pedestal',
    category: 'Industria Petrolera',
    description: 'Empresa Petrosucre, Ubicación Golfo de Paria. Unidad Flotante WHP. Servicio de Tinte e Inspección Visual.',
    image: '/Fotos_Proyectos/proyecto-6.jpg',
    link: '/proyectos/aeronautica',
  },
  {
    title: 'Inspección y Calibración de Máquinas de Soldar',
    category: 'Equipos Especiales',
    description: 'INSPECCIÓN Y CALIBRACION DE MAQUINAS DE SOLDAR EMPRESA PETROSYSTEM',
    image: '/Fotos_Proyectos/WhatsApp Image 2025-12-17 at 12.28.18 PM.jpeg',
    link: '/proyectos/alabes-turbina',
  },
  {
    title: 'Inspección y Certificación de Grúa de Pedestal',
    category: 'Industria Petrolera',
    description: 'INSPECCIÓN Y CERTIFICACION DE GRUA DE PEDESTAL EN LA UNIDAD FLOTANTE WHP .EMPRESA PETROSUCRE UBICACIÓN GOLFO DE PARIA  SERVICIO DE TINTE INSPECCIÓN VISUAL',
    image: '/Fotos_Proyectos/proyecto-3.jpg',
    link: '/proyectos/grua-puente',
  },
  {
    title: 'Inspección de Grúa Puente',
    category: 'Aeronáutica',
    description: 'INSPECCIÓN DE GRUA PUENTE EMPRESA TRANSPORTE AEREO UNICA SAN TOME. TECNI INSPECCIÓN VISUAL TINTE PENETRANTES.',
    image: '/Fotos_Proyectos/proyecto-7.png',
    link: '/proyectos/motores',
  },
  {
    title: 'EVALUACION NO DESTRUCTIVA ESTRUCTURAL A TOBERAS',
    category: 'Generación Eléctrica',
    description: 'EVALUACION NO DESTRUCTIVA ESTRUCTURAL A TOBERAS UNIDAD AJS-01 SERIAL No. 298957 “COMPLEJO TERMOELÉCTRICO ANTONIO JOSE DE SUCRE” bajo la empresa contratante G&G 1726, C.A. UB ESTADO SUCRE',
    image: '/Fotos_Proyectos/proyecto-8.jpg',
    link: '/proyectos/toberas',
  }
];

export default function ProyectosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-sinpetca-navy to-industrial-dark relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sinpetca-navy/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sinpetca-orange/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestros <span className="text-sinpetca-orange">Proyectos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Casos de éxito que demuestran nuestra experiencia y compromiso con la excelencia y calidad en campo
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-industrial-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-industrial-dark border border-white/5 hover:border-sinpetca-orange/30 transition-colors flex flex-col"
              >
                <div className="relative aspect-video w-full bg-black/20 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-transparent to-transparent opacity-90" />
                </div>
                
                <div className="p-6 sm:p-8 flex-grow flex flex-col z-10 -mt-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-sinpetca-navy/90 backdrop-blur-sm border border-sinpetca-blue/30 rounded text-xs font-semibold text-sinpetca-blue-light shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sinpetca-orange transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-sinpetca-orange transition-colors mt-auto"
                  >
                    Ver detalles del proyecto
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Matrix */}
      <ExperienceMatrix />
    </div>
  );
}
