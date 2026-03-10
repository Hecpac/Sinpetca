import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Fuel,
  Plane,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

import {
  certificationMetrics,
  certificationPillars,
  certificationPrograms,
  sectorCompliance,
  verificationSteps,
} from '@/lib/certifications-content';

const pillarIcons = [ShieldCheck, ClipboardCheck, FileCheck2, BadgeCheck];
const sectorIcons = [Fuel, Wrench, ShieldCheck, Plane];

export default function CertificationsPageContent() {
  return (
    <div className="min-h-screen bg-industrial-dark">
      <section className="relative overflow-hidden bg-gradient-to-b from-sinpetca-navy via-sinpetca-navy to-industrial-dark pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="absolute inset-0">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-sinpetca-orange/10 blur-[120px]" />
          <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-sinpetca-blue/10 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:34px_34px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-sinpetca-orange/30 bg-sinpetca-orange/10 px-4 py-2 text-sm font-medium text-sinpetca-orange">
                <ShieldCheck className="h-4 w-4" />
                Cumplimiento técnico y trazabilidad real
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Certificaciones y criterios que respaldan cada inspección
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                Reordenamos esta sección para mostrar lo importante: cómo estructuramos el
                cumplimiento, qué normas guían la evaluación y qué evidencia recibe el cliente al
                cierre del servicio.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sinpetca-orange px-6 py-3 text-sm font-semibold text-industrial-dark transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Solicitar revisión técnica
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-sinpetca-orange/35 hover:text-sinpetca-orange"
                >
                  Ver servicios relacionados
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {certificationMetrics.map(metric => (
                <article
                  key={metric.label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.24)]"
                >
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                  <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-sinpetca-orange">
                    {metric.label}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-gray-400">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-industrial-gray py-16 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sinpetca-orange">
                Cómo entendemos certificaciones
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Menos listado decorativo, más criterio de cumplimiento
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-400">
                No tratamos la certificación como una vitrina separada del trabajo en campo.
                Forma parte del método, del alcance, de la evidencia técnica y de la forma en que
                se emite cada conclusión.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {certificationPillars.map((pillar, index) => {
                const Icon = pillarIcons[index];

                return (
                  <article
                    key={pillar.title}
                    className="rounded-[26px] border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sinpetca-orange/12 text-sinpetca-orange">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-400">{pillar.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-industrial-dark py-16 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sinpetca-orange">
              Marcos aplicados
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Programas y referencias que sostienen nuestros servicios
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-400">
              Estas líneas resumen cómo conectamos normas, procedimientos y evidencia técnica
              según el tipo de activo, el método de inspección y el sector donde operamos.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {certificationPrograms.map(program => (
              <article
                key={program.id}
                className="rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7 shadow-[0_20px_60px_rgba(0,0,0,0.26)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sinpetca-orange">
                  {program.eyebrow}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white">{program.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">{program.summary}</p>

                <div className="mt-5 rounded-2xl border border-white/8 bg-black/15 px-4 py-3 text-sm text-gray-300">
                  <span className="font-semibold text-white">Base de referencia:</span> {program.issuer}
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Alcance</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-400">
                      {program.scope.map(item => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-sinpetca-orange" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">Evidencia</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-400">
                      {program.evidence.map(item => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-sinpetca-orange" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white">Referencias</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {program.references.map(reference => (
                        <span
                          key={reference}
                          className="rounded-full border border-sinpetca-blue/20 bg-sinpetca-navy/40 px-3 py-1 text-xs font-medium text-sinpetca-blue-light"
                        >
                          {reference}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-industrial-gray py-16 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sinpetca-orange">
                Aplicación sectorial
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                El cumplimiento cambia según el activo, no según una plantilla
              </h2>

              <div className="mt-8 grid gap-4">
                {sectorCompliance.map((sector, index) => {
                  const Icon = sectorIcons[index];

                  return (
                    <article
                      key={sector.sector}
                      className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-sinpetca-orange/12 text-sinpetca-orange">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{sector.sector}</h3>
                          <p className="mt-2 text-sm leading-6 text-gray-400">{sector.focus}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {sector.standards.map(standard => (
                              <span
                                key={standard}
                                className="rounded-full border border-white/8 bg-black/15 px-3 py-1 text-xs font-medium text-gray-300"
                              >
                                {standard}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-b from-sinpetca-navy/50 to-black/10 p-7 shadow-[0_22px_62px_rgba(0,0,0,0.28)]">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sinpetca-orange">
                Flujo de verificación
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Cómo cerramos una certificación con criterio técnico
              </h2>

              <div className="mt-8 space-y-5">
                {verificationSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-sinpetca-orange/30 bg-sinpetca-orange/10 text-sm font-bold text-sinpetca-orange">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-white/8 bg-black/15 p-5">
                <h3 className="text-base font-semibold text-white">Qué recibe el cliente</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-300">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-sinpetca-orange" />
                    <span>Conclusión clara sobre condición, operatividad o restricción del activo.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-sinpetca-orange" />
                    <span>Evidencia técnica lista para auditoría, mantenimiento o trazabilidad interna.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-sinpetca-orange" />
                    <span>Recomendaciones priorizadas para operar, monitorear o intervenir.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-industrial-dark pb-20 pt-8 sm:pb-24">
        <div className="container mx-auto px-4 lg:px-8 lg:pl-16">
          <div className="rounded-[32px] border border-sinpetca-orange/20 bg-gradient-to-r from-sinpetca-navy/50 via-black/20 to-sinpetca-orange/10 px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sinpetca-orange">
                  Siguiente paso
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Si necesitas sustento técnico real, revisamos el activo contigo
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  Podemos ayudarte a definir alcance, método, evidencia requerida y criterio de
                  aceptación antes de ejecutar la inspección o certificación en campo.
                </p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sinpetca-orange px-6 py-3 text-sm font-semibold text-industrial-dark transition-transform duration-300 hover:-translate-y-0.5"
              >
                Hablar con SINPETCA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
