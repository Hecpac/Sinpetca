'use client';

/**
 * Team Section Component
 * Displays leadership team members
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Mail, Award } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  certifications: string[];
  image?: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Orlando Segundo Medina Labrador',
    position: 'Director',
    description:
      '~31 años de experiencia. Ingeniero Mecánico y T.S.U. en Metalurgia. Especialista en inspección bajo códigos ASME, AWS, ANSI y API.',
    certifications: ['CICB', 'NDT Nivel II', 'ISO 17020'],
    linkedin: '#',
    email: 'sinpetca68@gmail.com',
  },
  {
    name: 'Leonardo José Yépez Escalona',
    position: 'Gerente Técnico',
    description:
      'Más de 20 años de experiencia. T.S.U. en Mecánica Aeronáutica. Especialista en mantenimiento de aeronaves Boeing y Sukhoi.',
    certifications: ['ISO 9001 Lead Auditor', 'NDT Nivel I', 'Trinorma'],
    linkedin: '#',
    email: 'sinpetca68@gmail.com',
  },
  {
    name: 'Klevis Andrea Caldera',
    position: 'Gerente Control y Aseguramiento de Calidad',
    description:
      '~11 años de experiencia. Licenciada en Administración de Empresas.',
    certifications: ['ISO 9001 Lead Auditor', 'ISO 17020', 'NDT Nivel I'],
    linkedin: '#',
    email: 'sinpetca68@gmail.com',
  },
  {
    name: 'Yaniber Estefanía García Martínez',
    position: 'Planificación',
    description:
      '~3 años de experiencia. Ingeniero de Mantenimiento Industrial y Técnico en Mantenimiento de Aeronaves. Diplomada en Confiabilidad Industrial.',
    certifications: ['ISO 17020 / 9001', 'SMS y MCM', 'Factores Humanos'],
    linkedin: '#',
    email: 'sinpetca68@gmail.com',
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-industrial-gray relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sinpetca-orange/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sinpetca-navy/30 border border-sinpetca-navy/50 rounded-full text-sinpetca-blue text-sm font-medium mb-4">
            Liderazgo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Nuestro <span className="text-sinpetca-orange">Equipo Directivo</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Profesionales con décadas de experiencia liderando la excelencia en inspección
            industrial
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-surface-primary border border-industrial-gray-medium rounded-xl overflow-hidden hover:border-sinpetca-orange/50 transition-all duration-300">
                {/* Avatar placeholder */}
                <div className="h-48 bg-gradient-to-br from-sinpetca-navy to-sinpetca-navy-dark flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,166,35,0.1),transparent_70%)]" />
                  <div className="w-24 h-24 bg-sinpetca-navy-light/50 rounded-full flex items-center justify-center border-2 border-sinpetca-orange/30">
                    <span className="text-3xl font-bold text-sinpetca-orange">
                      {member.name
                       .split(' ')
                       .slice(1)
                       .map((n) => n[0])
                       .join('')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-sinpetca-orange text-sm font-medium mb-3">{member.position}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Certifications */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 text-text-muted text-xs mb-2">
                      <Award className="w-3.5 h-3.5" />
                      <span>Certificaciones</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-sinpetca-navy/20 text-sinpetca-blue text-xs rounded"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-2 pt-4 border-t border-industrial-gray-medium">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-industrial-gray-light rounded-lg flex items-center justify-center text-text-muted hover:text-sinpetca-blue hover:bg-sinpetca-navy/30 transition-colors"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-industrial-gray-light rounded-lg flex items-center justify-center text-text-muted hover:text-sinpetca-orange hover:bg-sinpetca-orange/10 transition-colors"
                        aria-label={`Email de ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 bg-surface-primary border border-industrial-gray-medium rounded-2xl max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sinpetca-orange mb-1">50+</div>
              <div className="text-text-muted text-sm">Inspectores Certificados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sinpetca-orange mb-1">15+</div>
              <div className="text-text-muted text-sm">Años Promedio Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sinpetca-orange mb-1">100+</div>
              <div className="text-text-muted text-sm">Certificaciones Activas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sinpetca-orange mb-1">4</div>
              <div className="text-text-muted text-sm">Sectores Industriales</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
