import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Sostenibilidad',
  description:
    'Compromisos de SINPETCA con sostenibilidad operativa, eficiencia digital y prácticas responsables en inspección industrial.',
  alternates: {
    canonical: getCanonicalUrl('/sostenibilidad'),
  },
};

const commitments = [
  'Reducir retrabajos y tiempos muertos mediante inspección planificada y trazable.',
  'Promover documentación digital para disminuir consumo innecesario de papel.',
  'Favorecer entregables técnicos claros que faciliten decisiones de mantenimiento oportunas.',
  'Diseñar experiencias web ligeras, accesibles y eficientes en consumo de recursos.',
];

export default function SostenibilidadPage() {
  return (
    <div className="min-h-screen bg-industrial-gray pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <div className="rounded-[28px] border border-white/8 bg-surface-primary p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-10">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Política de <span className="text-sinpetca-orange">Sostenibilidad</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            SINPETCA entiende la sostenibilidad como una combinación de seguridad operativa,
            eficiencia técnica, uso responsable de recursos y decisiones respaldadas por evidencia.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-text-secondary sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-white">En operaciones</h2>
              <p className="mt-3">
                Nuestra labor busca extender la vida útil de los activos, reducir fallas
                inesperadas y apoyar intervenciones de mantenimiento más precisas, seguras y
                proporcionales al riesgo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">En gestión documental</h2>
              <p className="mt-3">
                Promovemos registros digitales, trazabilidad técnica y procesos de revisión que
                mejoran la calidad del dato y reducen desperdicio administrativo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">En nuestro ecosistema digital</h2>
              <ul className="mt-4 space-y-3">
                {commitments.map((commitment) => (
                  <li key={commitment} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    {commitment}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
