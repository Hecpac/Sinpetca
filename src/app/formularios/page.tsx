import type { Metadata } from 'next';
import { FileText, ClipboardList, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formularios y Gestiones',
  description: 'Acceso directo a los formularios de registro de inspección, satisfacción al cliente y recepción de quejas y apelaciones de SINPETCA.',
};

const formularios = [
  {
    title: 'Registro de Inspección',
    description: 'Complete este formulario para solicitar o registrar un servicio de inspección industrial o ensayo no destructivo.',
    icon: ClipboardList,
    link: 'https://forms.gle/DF3Pd1R6f2AUVoyn8',
  },
  {
    title: 'Satisfacción al Cliente',
    description: 'Ayúdenos a mejorar nuestros servicios compartiendo su experiencia con nosotros.',
    icon: FileText,
    link: 'https://forms.gle/rX62W5WbsNAVSh9b6',
  },
  {
    title: 'Recepción de Quejas y Apelaciones',
    description: 'Canal oficial para presentar cualquier queja o apelación relacionada con nuestros servicios o dictámenes de inspección.',
    icon: MessageSquare,
    link: 'https://forms.gle/vy1v1Q8Rh19fX4hZ8',
  }
];

export default function FormulariosPage() {
  return (
    <div className="min-h-screen bg-industrial-gray pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl mt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Gestión de <span className="text-sinpetca-orange">Formularios</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Acceda de manera rápida a nuestros formularios operativos y de calidad para agilizar sus solicitudes y requerimientos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formularios.map((form, idx) => {
            const Icon = form.icon;
            return (
              <a
                key={idx}
                href={form.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-surface-primary border border-industrial-gray-medium rounded-2xl p-8 hover:border-sinpetca-orange/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-sinpetca-navy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sinpetca-orange/10 transition-colors">
                  <Icon className="w-7 h-7 text-sinpetca-navy group-hover:text-sinpetca-orange transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-sinpetca-orange transition-colors">
                  {form.title}
                </h3>
                
                <p className="text-text-secondary flex-grow mb-6">
                  {form.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-sinpetca-navy group-hover:text-sinpetca-orange transition-colors mt-auto">
                  Acceder al Formulario
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
