import { COMPANY_EXPERIENCE_LABEL } from '@/lib/site-config';

export type CertificationMetric = {
  value: string;
  label: string;
  detail: string;
};

export type CertificationPillar = {
  title: string;
  description: string;
};

export type CertificationProgram = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  issuer: string;
  scope: string[];
  evidence: string[];
  references: string[];
};

export type SectorCompliance = {
  sector: string;
  focus: string;
  standards: string[];
};

export type VerificationStep = {
  title: string;
  description: string;
};

export const certificationMetrics: CertificationMetric[] = [
  {
    value: COMPANY_EXPERIENCE_LABEL,
    label: 'Años en inspección industrial',
    detail: 'Experiencia sostenida en proyectos petroleros, navales, aeronáuticos y de izamiento.',
  },
  {
    value: '4',
    label: 'Frentes de cumplimiento',
    detail: 'Normativa, ejecución en campo, trazabilidad documental y continuidad operativa.',
  },
  {
    value: '100%',
    label: 'Entregables trazables',
    detail: 'Cada inspección se respalda con registros, evidencia técnica y criterio de aceptación.',
  },
  {
    value: '24/7',
    label: 'Capacidad de respuesta',
    detail: 'Soporte para ventanas programadas, correctivos críticos y operaciones con alta exigencia.',
  },
];

export const certificationPillars: CertificationPillar[] = [
  {
    title: 'Base normativa clara',
    description:
      'Aterrizamos API, ASME, AWS y criterios de END al activo real, al contexto operativo y al alcance contratado.',
  },
  {
    title: 'Método antes que improvisación',
    description:
      'Definimos técnica, superficie, criterios de aceptación, seguridad y evidencia requerida antes de intervenir en campo.',
  },
  {
    title: 'Evidencia verificable',
    description:
      'Cada hallazgo queda soportado con reportes, identificación del equipo, trazabilidad del inspector y registro fotográfico.',
  },
  {
    title: 'Decisión orientada a riesgo',
    description:
      'Priorizamos seguridad operacional, integridad del activo y continuidad del servicio para recomendar acción inmediata o diferida.',
  },
];

export const certificationPrograms: CertificationProgram[] = [
  {
    id: 'iso-17020',
    eyebrow: 'Sistema de inspección',
    title: 'ISO/IEC 17020 como marco de trabajo',
    summary:
      'La operación de inspección se estructura sobre imparcialidad, competencia técnica, control documental y trazabilidad del resultado.',
    issuer: 'Marco de referencia para organismos de inspección',
    scope: [
      'Planificación del servicio',
      'Control del proceso de inspección',
      'Emisión de informes y registros',
      'Gestión de hallazgos y recomendaciones',
    ],
    evidence: [
      'Procedimientos definidos',
      'Registros de ejecución',
      'Trazabilidad del inspector y del activo',
    ],
    references: ['ISO/IEC 17020', 'Control documental', 'Trazabilidad técnica'],
  },
  {
    id: 'api-asme',
    eyebrow: 'Integridad mecánica',
    title: 'API y ASME para activos críticos',
    summary:
      'Aplicamos referencias de la industria para tanques, tuberías, recipientes a presión y equipos que demandan criterio de integridad mecánica.',
    issuer: 'American Petroleum Institute y ASME',
    scope: [
      'Tanques de almacenamiento',
      'Tuberías y líneas de proceso',
      'Recipientes a presión',
      'Equipos de servicio industrial',
    ],
    evidence: [
      'Condición del activo al momento de la inspección',
      'Hallazgos clasificados por criticidad',
      'Recomendaciones alineadas al servicio del equipo',
    ],
    references: ['API 510', 'API 570', 'API 653', 'ASME BPVC', 'ASME B31'],
  },
  {
    id: 'end-soldadura',
    eyebrow: 'END y soldadura',
    title: 'END y control de discontinuidades',
    summary:
      'Seleccionamos el método según el modo de falla esperado, el material y la accesibilidad: visual, tintes, partículas, ultrasonido u otras técnicas complementarias.',
    issuer: 'Buenas prácticas de END y control de soldadura',
    scope: [
      'Inspección visual y dimensional',
      'Tinte penetrante y partículas magnéticas',
      'Ultrasonido y medición de espesores',
      'Evaluación de uniones soldadas y componentes',
    ],
    evidence: [
      'Registro del método aplicado',
      'Superficie o zona evaluada',
      'Indicaciones detectadas y criterio de aceptación',
    ],
    references: ['ASNT', 'AWS', 'ASME Section V', 'Buenas prácticas END'],
  },
  {
    id: 'izamiento',
    eyebrow: 'Izamiento y operación',
    title: 'Certificación operativa de equipos de izamiento',
    summary:
      'La certificación de grúas, bloques, ganchos y accesorios se ejecuta con énfasis en condición operacional, inspección visual, END superficial y soporte documental.',
    issuer: 'Normas de izamiento y procedimientos de inspección',
    scope: [
      'Grúas de pedestal y grúas puente',
      'Bloques, poleas y ganchos',
      'Accesorios de maniobra y carga',
      'Equipos especiales vinculados a operación crítica',
    ],
    evidence: [
      'Identificación del equipo',
      'Estado visual y funcional',
      'Conclusión de operatividad y restricciones aplicables',
    ],
    references: ['ASME B30', 'Inspección visual', 'Tinte penetrante', 'Certificación operativa'],
  },
];

export const sectorCompliance: SectorCompliance[] = [
  {
    sector: 'Industria petrolera',
    focus: 'Integridad de líneas, recipientes, tanques y activos de superficie o costa afuera.',
    standards: ['API 510', 'API 570', 'API 653', 'ASME', 'END en campo'],
  },
  {
    sector: 'Izamiento y carga',
    focus: 'Condición operativa de grúas, bloques, ganchos y accesorios para maniobras críticas.',
    standards: ['ASME B30', 'Inspección visual', 'Tinte penetrante', 'Trazabilidad documental'],
  },
  {
    sector: 'Infraestructura y metalmecánica',
    focus: 'Verificación de estructuras, soldaduras y componentes antes de liberación o puesta en servicio.',
    standards: ['AWS', 'END superficial', 'Control dimensional', 'Recomendaciones de reparación'],
  },
  {
    sector: 'Aeronáutica y equipos especiales',
    focus: 'Inspección orientada a seguridad operacional, condición del componente y evidencia técnica para auditoría.',
    standards: ['Inspección visual', 'Procedimientos END', 'Control documental', 'Criterio de aceptación'],
  },
];

export const verificationSteps: VerificationStep[] = [
  {
    title: 'Levantamiento del activo',
    description:
      'Identificamos equipo, servicio, criticidad, historial disponible y ventana operativa antes de definir el alcance.',
  },
  {
    title: 'Plan de inspección',
    description:
      'Seleccionamos método, superficie, criterios de aceptación, seguridad y entregables para ejecutar con control.',
  },
  {
    title: 'Ejecución con evidencia',
    description:
      'Documentamos condición del activo, hallazgos, registros fotográficos y restricciones detectadas durante la inspección.',
  },
  {
    title: 'Informe y certificación',
    description:
      'Emitimos conclusión técnica, condición de operatividad y recomendaciones priorizadas para continuidad o intervención.',
  },
];
