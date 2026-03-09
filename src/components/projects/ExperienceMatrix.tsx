'use client';

import React from 'react';
import { Download } from 'lucide-react';

const experienceData = [
  { year: '2016', client: 'Y&V Ingeniería / Petrocedeño', contract: '4500011935 / 4500011931', desc: 'Certificación de equipos de izamiento y carga.', type: 'Privado' },
  { year: '2016', client: 'PDVSA - Petrocedeño', contract: 'OT 19930 / 2200010616', desc: 'Certificación de grúa y pruebas hidrostáticas en macollas.', type: 'Público' },
  { year: '2016', client: 'Petropiar (Complejo José)', contract: 'A-071-16-0077 / 4600012005', desc: 'Certificación de equipos pesados y del mejorador.', type: 'Público' },
  { year: '2016', client: 'Constructora Cipriani (RPLC)', contract: 'O/S 6754321', desc: 'Certificación de brazos articulados y montacargas en Wison.', type: 'Privado' },
  { year: '2016', client: 'Cosapi (Proyecto SIGMA)', contract: 'O-S 446876', desc: 'Evaluación de separador de gas y ensayos por ultrasonido.', type: 'Privado' },
  { year: '2016', client: 'Constructora Faena (RPLC)', contract: 'O-S 986955 / 876956', desc: 'Certificación de grúas y brazo Pickman en Conversión Profunda.', type: 'Privado' },
  { year: '2017', client: 'Construcciones AYF (Anaco)', contract: 'S/N', desc: 'Certificación de grúas, montacargas y brazos articulados.', type: 'Privado' },
  { year: '2017', client: 'Cuferca, C.A.', contract: 'S/N', desc: 'Certificación de brazos articulados y calibración de máquinas de soldar.', type: 'Privado' },
  { year: '2017', client: 'Trans Carga Pesada (Anaco)', contract: 'S/N', desc: 'Cursos de adiestramiento en espacios confinados y atmósferas peligrosas.', type: 'Privado' },
  { year: '2017', client: 'Mammoet de Venezuela', contract: 'S/N', desc: 'Certificación de grúas (275 y 350 Ton), montacargas y accesorios.', type: 'Privado' },
  { year: '2017', client: 'Wespro (Proyecto IPC)', contract: 'S/N', desc: 'Suministro, instalación y prueba hidrostática de cabezales.', type: 'Privado' },
  { year: '2018', client: 'Inversiones Decarte (Taladro PDV-20)', contract: 'S/N', desc: 'Certificación de sección de cabria categoría Nivel IV en Maturín.', type: 'Privado' },
  { year: '2018', client: 'Servicios Poleo (Petropiar)', contract: 'S/N', desc: 'Evaluación y certificación de equipos de excavación y vacuum.', type: 'Privado' },
  { year: '2018', client: 'Transporte Felconsa (RPLC Hyundai)', contract: 'S/N', desc: 'Certificación de grúas de 115 Ton en Proyecto Conversión Profunda.', type: 'Privado' },
  { year: '2019', client: 'Commetasa (Cumaná)', contract: 'S/N', desc: 'Certificación de máquinas de soldar, plantas eléctricas y montacargas.', type: 'Privado' },
  { year: '2019', client: 'CVP PDVSA Petropiar', contract: 'S/N', desc: 'Servicios y certificación de ascensores en Lechería.', type: 'Público' },
  { year: '2020', client: 'PDVSA (Taladro PDV-20 Maturín)', contract: 'S/N', desc: 'Evaluación e inspección básica y especializada de sección intermedia.', type: 'Público' },
  { year: '2020', client: 'Petrolera Sinovensa (Complejo José)', contract: '3H073-006-A N-085', desc: 'Boroscopia, ultrasonido (Phased Array) e inspección de espesores.', type: 'Público' },
  { year: '2020', client: 'Buque Tanque HERO (Bahía Cardón)', contract: 'S/N', desc: 'END (VT, PT, MT) a soldaduras de refuerzo y mamparos.', type: 'Privado' },
  { year: '2020', client: 'Cementera Cerro Azul', contract: 'S/N', desc: 'Ensayos Phased Array a martillos trituradores en área de canteras.', type: 'Público' },
  { year: '2022', client: 'SASCA Airlines', contract: 'S/N', desc: 'Boroscopia a cámara de combustión de motores de aviones Cessna.', type: 'Privado' },
  { year: '2022', client: 'Cipriani (Cementera Pertigaletes)', contract: 'S/N', desc: 'END a 220 álabes estatóricos de turbinas (Turbo Generador GT6).', type: 'Privado' },
  { year: '2022', client: 'Neduarca (Punto Fijo)', contract: 'S/N', desc: 'Mantenimiento de chalecos salvavidas, botes y prueba hidrostática a cilindros.', type: 'Privado' },
  { year: '2023', client: 'Avior Airlines', contract: 'S/N', desc: 'Inspección de Stator y mantenimiento de equipos de emergencia.', type: 'Privado' },
  { year: '2023', client: 'Aereonáutica Sanjines', contract: 'S/N', desc: 'Mantenimiento de balsas y certificación de cilindros de presión.', type: 'Privado' },
  { year: '2023', client: 'Stalco de Venezuela', contract: 'S/N', desc: 'Medición de capacidad de carga en gabarras y ultrasonido a casco.', type: 'Privado' },
  { year: '2024', client: 'Petrosucre, S.A.', contract: 'S/N', desc: 'Inspección y certificación de equipos de izamiento en Plataforma (WHP).', type: 'Público' },
  { year: '2025', client: 'PERTIGALETE (PLANTA VENCEMENT, C.A)', contract: 'S/N', desc: 'Inspección UT a ejes de rotor, mando y cola alimentador de Unidad trituradora.', type: 'Público' },
];

export default function ExperienceMatrix() {
  return (
    <section className="py-24 bg-surface-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Matriz de <span className="text-sinpetca-orange">Experiencia Técnica</span>
            </h2>
            <p className="text-text-secondary max-w-2xl">
              Un registro detallado de nuestra trayectoria, proyectos clave y alianzas estratégicas desde 2016 hasta la actualidad.
            </p>
          </div>
          {/* <button className="inline-flex items-center gap-2 px-6 py-3 bg-sinpetca-navy/10 hover:bg-sinpetca-navy/20 border border-sinpetca-navy/30 text-text-primary font-medium rounded-xl transition-all">
            <Download className="w-5 h-5" />
            Descargar Matriz PDF
          </button> */}
        </div>

        <div className="overflow-x-auto rounded-xl border border-industrial-gray-medium">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-industrial-gray text-text-primary">
                <th className="p-4 font-semibold border-b border-industrial-gray-medium">Año</th>
                <th className="p-4 font-semibold border-b border-industrial-gray-medium">Ente Contratante</th>
                <th className="p-4 font-semibold border-b border-industrial-gray-medium">N° de Contrato / Orden</th>
                <th className="p-4 font-semibold border-b border-industrial-gray-medium">Descripción del Servicio</th>
                <th className="p-4 font-semibold border-b border-industrial-gray-medium">Tipo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-industrial-gray-medium">
              {experienceData.map((row, idx) => (
                <tr key={idx} className="hover:bg-industrial-gray/30 transition-colors">
                  <td className="p-4 text-text-secondary whitespace-nowrap">{row.year}</td>
                  <td className="p-4 text-text-primary font-medium">{row.client}</td>
                  <td className="p-4 text-text-muted text-sm whitespace-nowrap">{row.contract}</td>
                  <td className="p-4 text-text-secondary min-w-[300px]">{row.desc}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      row.type === 'Público' ? 'bg-sinpetca-blue/10 text-sinpetca-blue border border-sinpetca-blue/20' : 'bg-sinpetca-orange/10 text-sinpetca-orange border border-sinpetca-orange/20'
                    }`}>
                      {row.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
