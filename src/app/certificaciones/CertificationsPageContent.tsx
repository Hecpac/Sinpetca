'use client';

/**
 * Certifications Page Content (Client Component)
 * Contains all interactive elements and data
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  Award,
  Shield,
  CheckCircle,
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  Globe,
} from 'lucide-react';

import {
  CertificationTimeline,
  DocumentsSection,
  CertificationCard,
  type TimelineEvent,
  type CertificationDocument,
  type CertificationDetails,
} from '@/components/certifications';

// ============================================================================
// DATA
// ============================================================================

const timelineEvents: TimelineEvent[] = [
  {
    year: '1988',
    title: 'Fundación de SINPETCA',
    description:
      'Inicio de operaciones como empresa de servicios de inspección industrial en Venezuela.',
    highlight: true,
  },
  {
    year: '1995',
    title: 'Primera Certificación API',
    description:
      'Obtención de la primera acreditación del American Petroleum Institute para inspección de tanques de almacenamiento.',
    certification: 'API 653',
  },
  {
    year: '2002',
    title: 'Expansión de Servicios NDT',
    description:
      'Ampliación del alcance de servicios de ensayos no destructivos con nuevas técnicas y equipos.',
    certification: 'ASNT SNT-TC-1A',
  },
  {
    year: '2008',
    title: 'Certificación ASME',
    description:
      'Acreditación para inspección de equipos a presión bajo estándares de la American Society of Mechanical Engineers.',
    certification: 'ASME',
    highlight: true,
  },
  {
    year: '2012',
    title: 'Acreditación ISO 17020',
    description:
      'Reconocimiento internacional como organismo de inspección tipo A, garantizando independencia e imparcialidad.',
    certification: 'ISO/IEC 17020',
    highlight: true,
  },
  {
    year: '2016',
    title: 'Certificación Aeronáutica',
    description:
      'Habilitación por la autoridad aeronáutica para realizar ensayos no destructivos en componentes de aviación.',
    certification: 'OMAC-N 667',
  },
  {
    year: '2020',
    title: 'Renovación y Ampliación',
    description:
      'Renovación exitosa de todas las certificaciones con ampliación del alcance de acreditación.',
  },
  {
    year: '2024',
    title: 'Certificaciones Vigentes',
    description:
      'Mantenimiento activo de todas las acreditaciones con auditorías de seguimiento satisfactorias.',
    highlight: true,
  },
];

const certificationDocuments: CertificationDocument[] = [
  {
    id: 'iso-17020',
    name: 'ISO/IEC 17020:2012',
    certificationBody: 'SENCAMER',
    issueDate: '15 Marzo 2023',
    expiryDate: '14 Marzo 2027',
    status: 'vigente',
    documentUrl: '#',
    verificationUrl: '#',
  },
  {
    id: 'omac-n-667',
    name: 'OMAC-N 667',
    certificationBody: 'INAC Venezuela',
    issueDate: '20 Junio 2023',
    expiryDate: '19 Junio 2025',
    status: 'vigente',
    documentUrl: '#',
    verificationUrl: '#',
  },
  {
    id: 'api-653',
    name: 'API 653',
    certificationBody: 'American Petroleum Institute',
    issueDate: '01 Enero 2024',
    expiryDate: '31 Diciembre 2026',
    status: 'vigente',
    documentUrl: '#',
    verificationUrl: '#',
  },
  {
    id: 'asme',
    name: 'ASME Inspector',
    certificationBody: 'ASME International',
    issueDate: '15 Agosto 2023',
    expiryDate: '14 Agosto 2026',
    status: 'vigente',
    documentUrl: '#',
  },
];

const certifications: CertificationDetails[] = [
  {
    id: 'iso-17020',
    name: 'ISO 17020',
    fullName: 'ISO/IEC 17020:2012 - Organismos de Inspección',
    description:
      'Acreditación internacional que certifica la competencia técnica, imparcialidad e independencia de SINPETCA como organismo de inspección Tipo A. Esta norma es el estándar de referencia mundial para organismos que realizan actividades de inspección.',
    issuingBody: 'SENCAMER - Servicio Autónomo Nacional de Normalización',
    scope: [
      'Inspección de tanques de almacenamiento',
      'Inspección de tuberías y ductos',
      'Inspección de equipos a presión',
      'Ensayos no destructivos (NDT)',
      'Inspección de estructuras metálicas',
    ],
    benefits: [
      'Reconocimiento internacional',
      'Garantía de imparcialidad',
      'Competencia técnica certificada',
      'Trazabilidad de resultados',
    ],
    standards: ['ISO/IEC 17020:2012', 'ISO 9001:2015', 'ISO/IEC 17025:2017'],
    internationalRecognition: true,
    status: 'vigente',
  },
  {
    id: 'omac-n-667',
    name: 'OMAC-N 667',
    fullName: 'Organización de Mantenimiento Aeronáutico Civil',
    description:
      'Certificación otorgada por el Instituto Nacional de Aeronáutica Civil (INAC) que habilita a SINPETCA para realizar ensayos no destructivos en componentes aeronáuticos, cumpliendo con los más estrictos estándares de seguridad de la industria.',
    issuingBody: 'INAC - Instituto Nacional de Aeronáutica Civil',
    scope: [
      'Inspección de estructuras de aeronaves',
      'Ensayos NDT en componentes críticos',
      'Inspección de motores y turbinas',
      'Evaluación de daños por fatiga',
    ],
    benefits: [
      'Habilitación aeronáutica oficial',
      'Cumplimiento regulatorio INAC',
      'Seguridad operacional certificada',
      'Trazabilidad aeronáutica',
    ],
    standards: ['RAV 145', 'FAR Part 145', 'EASA Part-145'],
    internationalRecognition: false,
    status: 'vigente',
  },
  {
    id: 'api',
    name: 'API',
    fullName: 'American Petroleum Institute - Múltiples Certificaciones',
    description:
      'Conjunto de certificaciones del American Petroleum Institute que acreditan a SINPETCA para realizar inspecciones especializadas en la industria petrolera, incluyendo tanques de almacenamiento, tuberías y equipos de proceso.',
    issuingBody: 'American Petroleum Institute (API)',
    scope: [
      'Inspección de tanques sobre tierra (API 653)',
      'Inspección de tuberías (API 570)',
      'Inspección de recipientes a presión (API 510)',
      'Evaluación de fitness for service (API 579)',
    ],
    benefits: [
      'Estándar de la industria petrolera',
      'Reconocimiento mundial',
      'Metodologías probadas',
      'Compatibilidad con RBI',
    ],
    standards: ['API 510', 'API 570', 'API 653', 'API 579-1/ASME FFS-1'],
    internationalRecognition: true,
    status: 'vigente',
  },
  {
    id: 'asme',
    name: 'ASME',
    fullName: 'American Society of Mechanical Engineers',
    description:
      'Certificación de la ASME que acredita a nuestros inspectores para evaluar la integridad de equipos a presión, calderas y recipientes, siguiendo los códigos y estándares más rigurosos de la ingeniería mecánica.',
    issuingBody: 'ASME International',
    scope: [
      'Inspección de calderas de vapor',
      'Recipientes a presión',
      'Intercambiadores de calor',
      'Sistemas de tuberías a presión',
    ],
    benefits: [
      'Código de referencia mundial',
      'Seguridad en equipos a presión',
      'Cumplimiento regulatorio',
      'Inspectores certificados ASME',
    ],
    standards: ['ASME BPVC Section VIII', 'ASME B31.1', 'ASME B31.3', 'National Board'],
    internationalRecognition: true,
    status: 'vigente',
  },
];

const stats = [
  { value: '35+', label: 'Años de Experiencia', icon: TrendingUp },
  { value: '4', label: 'Certificaciones Activas', icon: Award },
  { value: '100%', label: 'Auditorías Aprobadas', icon: CheckCircle },
  { value: '15+', label: 'Países Reconocidos', icon: Globe },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function CertificationsPageContent() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const certificationsRef = useRef(null);
  const benefitsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true, margin: '-50px' });
  const isCertificationsInView = useInView(certificationsRef, { once: true, margin: '-50px' });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: '-50px' });

  return (
    <div className="min-h-screen">
      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section
        ref={heroRef}
        className="relative py-24 md:py-32 bg-gradient-to-b from-sinpetca-navy via-sinpetca-navy-dark to-industrial-dark overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sinpetca-orange/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sinpetca-blue/20 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Garantía de Calidad Internacional
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Nuestras <span className="text-sinpetca-orange">Certificaciones</span>
            </h1>

            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Más de tres décadas construyendo confianza a través de acreditaciones que garantizan
              la excelencia, imparcialidad y competencia técnica en cada servicio de inspección.
            </p>

            {/* Quick stats in hero */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sinpetca-orange">ISO 17020</div>
                <div className="text-text-muted text-sm">Organismo Tipo A</div>
              </div>
              <div className="w-px h-12 bg-industrial-gray-medium hidden md:block" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sinpetca-orange">API</div>
                <div className="text-text-muted text-sm">510 | 570 | 653</div>
              </div>
              <div className="w-px h-12 bg-industrial-gray-medium hidden md:block" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sinpetca-orange">ASME</div>
                <div className="text-text-muted text-sm">Equipos a Presión</div>
              </div>
              <div className="w-px h-12 bg-industrial-gray-medium hidden md:block" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sinpetca-orange">OMAC</div>
                <div className="text-text-muted text-sm">Aeronáutica</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* STATS SECTION */}
      {/* ================================================================== */}
      <section ref={statsRef} className="py-16 bg-industrial-gray border-y border-industrial-gray-medium">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sinpetca-navy/30 rounded-xl mb-4">
                    <IconComponent className="w-6 h-6 text-sinpetca-orange" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CERTIFICATIONS DETAIL SECTION */}
      {/* ================================================================== */}
      <section ref={certificationsRef} className="py-24 bg-industrial-gray">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCertificationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-sinpetca-navy/30 border border-sinpetca-navy/50 rounded-full text-sinpetca-blue text-sm font-medium mb-4">
              Detalle de Acreditaciones
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Certificaciones <span className="text-sinpetca-orange">Vigentes</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Haga clic en cada certificación para ver información detallada sobre alcance,
              beneficios y normas aplicables
            </p>
          </motion.div>

          {/* Certification Cards */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                index={index}
                isInView={isCertificationsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TIMELINE SECTION */}
      {/* ================================================================== */}
      <CertificationTimeline events={timelineEvents} />

      {/* ================================================================== */}
      {/* DOCUMENTS SECTION */}
      {/* ================================================================== */}
      <DocumentsSection documents={certificationDocuments} />

      {/* ================================================================== */}
      {/* BENEFITS SECTION */}
      {/* ================================================================== */}
      <section ref={benefitsRef} className="py-24 bg-industrial-dark relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sinpetca-navy/20 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium mb-4">
              Valor Agregado
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Beneficios de Trabajar con una{' '}
              <span className="text-sinpetca-orange">Empresa Certificada</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Nuestras certificaciones no son solo documentos, son el respaldo de procesos probados
              y resultados confiables
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Garantía de Calidad',
                description:
                  'Procesos estandarizados y auditados que aseguran resultados consistentes y confiables en cada inspección.',
              },
              {
                icon: Globe,
                title: 'Reconocimiento Internacional',
                description:
                  'Nuestras acreditaciones son reconocidas globalmente, facilitando el cumplimiento de requisitos internacionales.',
              },
              {
                icon: Users,
                title: 'Personal Calificado',
                description:
                  'Equipo de inspectores certificados individualmente con formación continua y evaluaciones periódicas.',
              },
              {
                icon: CheckCircle,
                title: 'Imparcialidad Certificada',
                description:
                  'Como organismo Tipo A bajo ISO 17020, garantizamos independencia total en nuestros dictámenes.',
              },
              {
                icon: Building2,
                title: 'Cumplimiento Regulatorio',
                description:
                  'Facilitamos el cumplimiento con autoridades reguladoras nacionales e internacionales.',
              },
              {
                icon: TrendingUp,
                title: 'Mejora Continua',
                description:
                  'Sistema de gestión que promueve la optimización constante de procesos y metodologías.',
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-surface-primary border border-industrial-gray-medium rounded-xl hover:border-sinpetca-navy/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-sinpetca-navy/30 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-sinpetca-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{benefit.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA SECTION */}
      {/* ================================================================== */}
      <section className="py-24 bg-gradient-to-b from-sinpetca-navy to-sinpetca-navy-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sinpetca-orange/10 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Award className="w-16 h-16 text-sinpetca-orange mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                ¿Necesita Servicios de Inspección Certificados?
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Confíe en un equipo con más de 35 años de experiencia respaldados por las
                certificaciones más exigentes del sector industrial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sinpetca-orange text-industrial-dark font-semibold rounded-xl hover:bg-sinpetca-orange-light transition-colors"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-text-secondary text-text-primary font-semibold rounded-xl hover:border-sinpetca-orange hover:text-sinpetca-orange transition-colors"
                >
                  Ver Nuestros Servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
