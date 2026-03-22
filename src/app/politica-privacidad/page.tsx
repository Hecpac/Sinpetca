import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Conozca cómo SINPETCA recopila, utiliza y protege los datos compartidos a través de su sitio web y canales de contacto.',
  alternates: {
    canonical: getCanonicalUrl('/politica-privacidad'),
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-industrial-gray pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <div className="rounded-[28px] border border-white/8 bg-surface-primary p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-10">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Política de <span className="text-sinpetca-orange">Privacidad</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            Esta política describe cómo SINPETCA trata la información enviada a través del
            formulario de contacto, correo electrónico y demás canales digitales del sitio web.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-text-secondary sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-white">Información que recopilamos</h2>
              <p className="mt-3">
                Podemos recopilar datos como nombre, empresa, correo electrónico, teléfono,
                servicio de interés y el contenido del mensaje cuando un usuario solicita
                información comercial o técnica.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Uso de la información</h2>
              <p className="mt-3">
                Utilizamos estos datos para responder solicitudes, preparar cotizaciones,
                coordinar atención comercial, dar seguimiento a requerimientos y mantener registro
                interno de comunicaciones relacionadas con nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Protección de datos</h2>
              <p className="mt-3">
                SINPETCA aplica controles razonables para evitar acceso no autorizado,
                alteración o divulgación indebida de la información recibida por medios digitales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Terceros</h2>
              <p className="mt-3">
                No comercializamos datos personales. Solo podremos compartir información con
                proveedores tecnológicos o aliados operativos cuando sea necesario para atender la
                solicitud o cumplir obligaciones legales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Actualizaciones</h2>
              <p className="mt-3">
                Esta política puede actualizarse para reflejar cambios normativos, operativos o
                tecnológicos. La versión vigente será siempre la publicada en esta página.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
