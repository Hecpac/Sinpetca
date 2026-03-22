import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Condiciones generales de uso del sitio web de SINPETCA y de la información técnica y comercial publicada en línea.',
  alternates: {
    canonical: getCanonicalUrl('/terminos-condiciones'),
  },
};

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-industrial-gray pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <div className="rounded-[28px] border border-white/8 bg-surface-primary p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-10">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Términos y <span className="text-sinpetca-orange">Condiciones</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            El acceso y uso de este sitio implica la aceptación de las siguientes condiciones
            generales de navegación, consulta de contenido y envío de solicitudes.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-text-secondary sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-white">Uso del sitio</h2>
              <p className="mt-3">
                El contenido publicado tiene fines informativos y comerciales. El usuario se
                compromete a utilizar el sitio de forma lícita y sin afectar su disponibilidad,
                seguridad o integridad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Propiedad intelectual</h2>
              <p className="mt-3">
                Textos, imágenes, marcas, logotipos, diseños y demás materiales asociados a
                SINPETCA no pueden reproducirse o distribuirse sin autorización previa por
                escrito, salvo los usos permitidos por la ley aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Información técnica y comercial</h2>
              <p className="mt-3">
                La información presentada en el sitio no sustituye una propuesta formal,
                inspección en campo ni evaluación contractual específica. El alcance final de cada
                servicio se define en cotización, oferta o contrato.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Enlaces externos</h2>
              <p className="mt-3">
                Este sitio puede incluir enlaces a plataformas externas para mapas, formularios o
                redes sociales. SINPETCA no controla el contenido ni las políticas de privacidad
                de dichos terceros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Modificaciones</h2>
              <p className="mt-3">
                SINPETCA podrá actualizar estos términos cuando cambien sus operaciones, canales
                digitales o requisitos legales. La versión vigente será la que figure en esta
                página.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
