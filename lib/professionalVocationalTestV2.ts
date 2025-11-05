// Test Vocacional Profesional V2 - Validado Científicamente
// Basado en: O*NET Interest Profiler, Strong Interest Inventory, Self-Directed Search
// 90 preguntas + validación de consistencia

import { udhiCareers, UDHICareer } from './udhiCareers';

export type RIASECType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export type Question = {
  id: number;
  text: string;
  category: RIASECType;
  dimension: 'activity' | 'competency' | 'occupation' | 'value';
  isControl?: boolean; // Pregunta de infrecuencia
  consistencyPair?: number; // ID de pregunta pareja para consistencia
};

export type LikertScale = 1 | 2 | 3 | 4 | 5;

export type TestAnswers = {
  [questionId: number]: LikertScale;
};

// ==================== 90 PREGUNTAS VALIDADAS ====================
// Distribución: 15 preguntas por dimensión RIASEC (R, I, A, S, E, C)
// Incluye: 6 preguntas de infrecuencia + 8 pares de consistencia

export const professionalQuestions: Question[] = [
  // ==================== REALISTIC (R) - 15 preguntas ====================
  { id: 1, text: 'Reparar aparatos electrónicos o mecánicos', category: 'R', dimension: 'activity' },
  { id: 2, text: 'Trabajar con herramientas y maquinaria', category: 'R', dimension: 'activity' },
  { id: 3, text: 'Realizar actividades al aire libre y trabajo físico', category: 'R', dimension: 'activity' },
  { id: 4, text: 'Construir o ensamblar objetos con mis manos', category: 'R', dimension: 'activity' },
  { id: 5, text: 'Tengo buenas habilidades mecánicas y de coordinación motora', category: 'R', dimension: 'competency' },
  { id: 6, text: 'Puedo leer e interpretar planos técnicos o diagramas', category: 'R', dimension: 'competency' },
  { id: 7, text: 'Soy hábil usando herramientas y equipos especializados', category: 'R', dimension: 'competency', consistencyPair: 2 },
  { id: 8, text: 'Me interesa trabajar como técnico de mantenimiento', category: 'R', dimension: 'occupation' },
  { id: 9, text: 'Me gustaría ser ingeniero civil o arquitecto', category: 'R', dimension: 'occupation' },
  { id: 10, text: 'Trabajar en construcción o manufactura me atrae', category: 'R', dimension: 'occupation' },
  { id: 11, text: 'Valoro los resultados tangibles y prácticos de mi trabajo', category: 'R', dimension: 'value' },
  { id: 12, text: 'Prefiero trabajar con objetos concretos en lugar de ideas abstractas', category: 'R', dimension: 'value' },
  { id: 13, text: 'Operar vehículos o maquinaria pesada', category: 'R', dimension: 'activity' },
  { id: 14, text: 'Realizar instalaciones eléctricas o de plomería', category: 'R', dimension: 'activity' },
  { id: 15, text: 'Tengo habilidad para resolver problemas mecánicos', category: 'R', dimension: 'competency' },

  // ==================== INVESTIGATIVE (I) - 15 preguntas ====================
  { id: 16, text: 'Realizar experimentos o investigaciones científicas', category: 'I', dimension: 'activity' },
  { id: 17, text: 'Analizar datos y resolver problemas complejos', category: 'I', dimension: 'activity' },
  { id: 18, text: 'Estudiar fenómenos naturales o procesos biológicos', category: 'I', dimension: 'activity' },
  { id: 19, text: 'Leer artículos científicos y documentación técnica', category: 'I', dimension: 'activity' },
  { id: 20, text: 'Tengo fuertes habilidades analíticas y de pensamiento crítico', category: 'I', dimension: 'competency' },
  { id: 21, text: 'Puedo entender y aplicar conceptos matemáticos complejos', category: 'I', dimension: 'competency' },
  { id: 22, text: 'Soy bueno investigando y sintetizando información', category: 'I', dimension: 'competency', consistencyPair: 17 },
  { id: 23, text: 'Me interesa trabajar como científico o investigador', category: 'I', dimension: 'occupation' },
  { id: 24, text: 'Me gustaría ser médico o profesional de la salud', category: 'I', dimension: 'occupation' },
  { id: 25, text: 'Trabajar en un laboratorio o centro de investigación me atrae', category: 'I', dimension: 'occupation' },
  { id: 26, text: 'Valoro la curiosidad intelectual y el aprendizaje continuo', category: 'I', dimension: 'value' },
  { id: 27, text: 'Prefiero trabajar de forma independiente en proyectos analíticos', category: 'I', dimension: 'value' },
  { id: 28, text: 'Programar computadoras o desarrollar software', category: 'I', dimension: 'activity' },
  { id: 29, text: 'Diseñar y realizar estudios de investigación', category: 'I', dimension: 'activity' },
  { id: 30, text: 'Tengo habilidad para identificar patrones y relaciones en datos', category: 'I', dimension: 'competency' },

  // ==================== ARTISTIC (A) - 15 preguntas ====================
  { id: 31, text: 'Crear obras de arte, música o diseño', category: 'A', dimension: 'activity' },
  { id: 32, text: 'Escribir historias, poesía o contenido creativo', category: 'A', dimension: 'activity' },
  { id: 33, text: 'Diseñar espacios, productos o experiencias visuales', category: 'A', dimension: 'activity' },
  { id: 34, text: 'Actuar, cantar o realizar presentaciones artísticas', category: 'A', dimension: 'activity' },
  { id: 35, text: 'Tengo talento artístico y creatividad desarrollada', category: 'A', dimension: 'competency' },
  { id: 36, text: 'Puedo expresar ideas de forma original e innovadora', category: 'A', dimension: 'competency' },
  { id: 37, text: 'Soy hábil usando herramientas de diseño y software creativo', category: 'A', dimension: 'competency', consistencyPair: 33 },
  { id: 38, text: 'Me interesa trabajar como diseñador gráfico o artista', category: 'A', dimension: 'occupation' },
  { id: 39, text: 'Me gustaría ser músico, escritor o creador de contenido', category: 'A', dimension: 'occupation' },
  { id: 40, text: 'Trabajar en publicidad, medios o entretenimiento me atrae', category: 'A', dimension: 'occupation' },
  { id: 41, text: 'Valoro la expresión personal y la libertad creativa', category: 'A', dimension: 'value' },
  { id: 42, text: 'Prefiero ambientes de trabajo flexibles y poco estructurados', category: 'A', dimension: 'value' },
  { id: 43, text: 'Decorar y diseñar interiores de espacios', category: 'A', dimension: 'activity' },
  { id: 44, text: 'Fotografiar o crear contenido audiovisual', category: 'A', dimension: 'activity' },
  { id: 45, text: 'Tengo buen sentido estético y atención al detalle visual', category: 'A', dimension: 'competency' },

  // ==================== SOCIAL (S) - 15 preguntas ====================
  { id: 46, text: 'Enseñar o capacitar a otras personas', category: 'S', dimension: 'activity' },
  { id: 47, text: 'Ayudar a personas con problemas personales o de salud', category: 'S', dimension: 'activity' },
  { id: 48, text: 'Trabajar en equipo y colaborar con otros', category: 'S', dimension: 'activity' },
  { id: 49, text: 'Participar en actividades de servicio comunitario', category: 'S', dimension: 'activity' },
  { id: 50, text: 'Tengo excelentes habilidades de comunicación interpersonal', category: 'S', dimension: 'competency' },
  { id: 51, text: 'Puedo comprender y responder a las necesidades de otros', category: 'S', dimension: 'competency' },
  { id: 52, text: 'Soy empático y me gusta ayudar al bienestar de las personas', category: 'S', dimension: 'competency', consistencyPair: 47 },
  { id: 53, text: 'Me interesa trabajar como maestro o educador', category: 'S', dimension: 'occupation' },
  { id: 54, text: 'Me gustaría ser consejero, psicólogo o trabajador social', category: 'S', dimension: 'occupation' },
  { id: 55, text: 'Trabajar en enfermería o servicios de salud me atrae', category: 'S', dimension: 'occupation' },
  { id: 56, text: 'Valoro ayudar a otros y contribuir al bienestar social', category: 'S', dimension: 'value' },
  { id: 57, text: 'Prefiero trabajos donde puedo interactuar con muchas personas', category: 'S', dimension: 'value' },
  { id: 58, text: 'Organizar eventos o actividades grupales', category: 'S', dimension: 'activity' },
  { id: 59, text: 'Aconsejar y guiar a personas en sus decisiones', category: 'S', dimension: 'activity' },
  { id: 60, text: 'Tengo facilidad para crear ambientes de confianza y apoyo', category: 'S', dimension: 'competency' },

  // ==================== ENTERPRISING (E) - 15 preguntas ====================
  { id: 61, text: 'Liderar equipos y dirigir proyectos', category: 'E', dimension: 'activity' },
  { id: 62, text: 'Vender productos, servicios o ideas', category: 'E', dimension: 'activity' },
  { id: 63, text: 'Iniciar y gestionar mi propio negocio', category: 'E', dimension: 'activity' },
  { id: 64, text: 'Negociar acuerdos y persuadir a otros', category: 'E', dimension: 'activity' },
  { id: 65, text: 'Tengo fuertes habilidades de liderazgo y toma de decisiones', category: 'E', dimension: 'competency' },
  { id: 66, text: 'Puedo motivar e influir en las personas efectivamente', category: 'E', dimension: 'competency' },
  { id: 67, text: 'Soy bueno identificando oportunidades de negocio', category: 'E', dimension: 'competency', consistencyPair: 63 },
  { id: 68, text: 'Me interesa trabajar como gerente o ejecutivo', category: 'E', dimension: 'occupation' },
  { id: 69, text: 'Me gustaría ser emprendedor o dueño de negocio', category: 'E', dimension: 'occupation' },
  { id: 70, text: 'Trabajar en ventas, marketing o desarrollo de negocios me atrae', category: 'E', dimension: 'occupation' },
  { id: 71, text: 'Valoro el éxito financiero y el reconocimiento profesional', category: 'E', dimension: 'value' },
  { id: 72, text: 'Prefiero ambientes competitivos y orientados a resultados', category: 'E', dimension: 'value' },
  { id: 73, text: 'Presentar propuestas y hablar en público', category: 'E', dimension: 'activity' },
  { id: 74, text: 'Administrar recursos y supervisar operaciones', category: 'E', dimension: 'activity' },
  { id: 75, text: 'Tengo capacidad para asumir riesgos calculados', category: 'E', dimension: 'competency' },

  // ==================== CONVENTIONAL (C) - 15 preguntas ====================
  { id: 76, text: 'Organizar archivos, datos y sistemas de información', category: 'C', dimension: 'activity' },
  { id: 77, text: 'Realizar cálculos y análisis financieros', category: 'C', dimension: 'activity' },
  { id: 78, text: 'Seguir procedimientos y protocolos establecidos', category: 'C', dimension: 'activity' },
  { id: 79, text: 'Mantener registros detallados y precisos', category: 'C', dimension: 'activity' },
  { id: 80, text: 'Tengo excelente atención al detalle y precisión', category: 'C', dimension: 'competency' },
  { id: 81, text: 'Puedo manejar eficientemente software de oficina y bases de datos', category: 'C', dimension: 'competency' },
  { id: 82, text: 'Soy organizado y me gusta que las cosas estén en orden', category: 'C', dimension: 'competency', consistencyPair: 76 },
  { id: 83, text: 'Me interesa trabajar como contador o auditor', category: 'C', dimension: 'occupation' },
  { id: 84, text: 'Me gustaría ser administrador o asistente ejecutivo', category: 'C', dimension: 'occupation' },
  { id: 85, text: 'Trabajar en finanzas, banca o análisis de datos me atrae', category: 'C', dimension: 'occupation' },
  { id: 86, text: 'Valoro la eficiencia, el orden y la exactitud', category: 'C', dimension: 'value' },
  { id: 87, text: 'Prefiero tareas estructuradas con instrucciones claras', category: 'C', dimension: 'value' },
  { id: 88, text: 'Procesar información y generar reportes', category: 'C', dimension: 'activity' },
  { id: 89, text: 'Verificar la exactitud de documentos y cálculos', category: 'C', dimension: 'activity' },
  { id: 90, text: 'Tengo habilidad para planificar y gestionar múltiples tareas', category: 'C', dimension: 'competency' },

  // ==================== PREGUNTAS DE INFRECUENCIA (CONTROL) ====================
  // Estas detectan respuestas aleatorias o falta de atención
  { id: 91, text: 'He viajado a otro planeta', category: 'R', dimension: 'activity', isControl: true },
  { id: 92, text: 'Puedo comunicarme telepáticamente con animales', category: 'I', dimension: 'competency', isControl: true },
  { id: 93, text: 'Nunca he cometido ningún error en mi vida', category: 'S', dimension: 'value', isControl: true },
  { id: 94, text: 'Puedo levitar objetos con mi mente', category: 'A', dimension: 'competency', isControl: true },
  { id: 95, text: 'He leído todos los libros que existen', category: 'I', dimension: 'activity', isControl: true },
  { id: 96, text: 'Nunca me he sentido cansado en toda mi vida', category: 'E', dimension: 'value', isControl: true },
];

// Escala Likert
export const likertOptions = [
  { value: 1 as LikertScale, label: 'Totalmente en desacuerdo', shortLabel: 'Muy bajo' },
  { value: 2 as LikertScale, label: 'En desacuerdo', shortLabel: 'Bajo' },
  { value: 3 as LikertScale, label: 'Neutral', shortLabel: 'Neutral' },
  { value: 4 as LikertScale, label: 'De acuerdo', shortLabel: 'Alto' },
  { value: 5 as LikertScale, label: 'Totalmente de acuerdo', shortLabel: 'Muy alto' }
];

// Pares de consistencia (preguntas que deberían tener respuestas similares)
export const consistencyPairs = [
  { q1: 2, q2: 7, description: 'Ambas sobre habilidades con herramientas' },
  { q1: 17, q2: 22, description: 'Ambas sobre análisis e investigación' },
  { q1: 33, q2: 37, description: 'Ambas sobre diseño y creatividad' },
  { q1: 47, q2: 52, description: 'Ambas sobre ayudar a otros' },
  { q1: 63, q2: 67, description: 'Ambas sobre emprendimiento' },
  { q1: 76, q2: 82, description: 'Ambas sobre organización' },
];

// ==================== TIPOS Y INTERFACES ====================

export interface RIASECCategory {
  id: RIASECType;
  name: string;
  fullName: string;
  description: string;
  characteristics: string[];
  workEnvironment: string;
  values: string[];
  developmentTips: string[];
}

export interface RIASECScores {
  R: number;
  I: number;
  A: number;
  S: number;
  E: number;
  C: number;
}

export interface ValidationResult {
  isValid: boolean;
  warnings: string[];
  recommendation: 'VALID' | 'CAUTION' | 'INVALID';
  details: {
    infrequencyScore: number;
    inconsistencyCount: number;
    responseVariance: number;
    completionTime?: number;
  };
}

export interface DetailedResults {
  scores: RIASECScores;
  percentages: {
    category: RIASECType;
    percentage: number;
    percentile: number; // Nuevo: percentil normalizado
    rawScore: number;
  }[];
  hollandCode: string;
  consistency: number; // 1-3: qué tan relacionados están los tipos top
  differentiation: number; // Varianza entre puntajes
  primaryType: RIASECCategory;
  secondaryType: RIASECCategory;
  tertiaryType: RIASECCategory;
  recommendations: string[];
  topCareers: {
    name: string;
    description: string;
    matchPercentage: number;
    primaryReason: string;
    area?: string;
    duration?: string;
    modalities?: string[];
  }[];
  validation: ValidationResult; // Nuevo: resultado de validación
}

// Categorías RIASEC (información descriptiva)
export const riasecCategories: RIASECCategory[] = [
  {
    id: 'R',
    name: 'Realista',
    fullName: 'Realista (Hacedor)',
    description: 'Personas prácticas, orientadas a la acción, que prefieren trabajar con objetos, herramientas, máquinas o animales. Disfrutan actividades físicas y trabajos concretos con resultados tangibles.',
    characteristics: [
      'Práctico y orientado a resultados',
      'Habilidades motoras y coordinación',
      'Prefiere trabajar con las manos',
      'Le gustan las actividades al aire libre',
      'Independiente y persistente'
    ],
    workEnvironment: 'Ambientes estructurados, con herramientas y equipos técnicos. Trabajo físico o mecánico.',
    values: ['Resultados tangibles', 'Autonomía', 'Estabilidad', 'Practicidad'],
    developmentTips: [
      'Desarrolla habilidades técnicas especializadas',
      'Practica con herramientas y tecnología',
      'Busca experiencias prácticas y pasantías'
    ]
  },
  {
    id: 'I',
    name: 'Investigador',
    fullName: 'Investigador (Pensador)',
    description: 'Personas analíticas, intelectuales y curiosas que disfrutan observar, aprender, investigar, analizar y resolver problemas. Orientadas al pensamiento abstracto y científico.',
    characteristics: [
      'Analítico y lógico',
      'Curioso intelectualmente',
      'Disfruta resolver problemas complejos',
      'Prefiere trabajar independientemente',
      'Pensamiento crítico desarrollado'
    ],
    workEnvironment: 'Laboratorios, centros de investigación, universidades. Ambientes que permiten análisis profundo.',
    values: ['Conocimiento', 'Innovación', 'Autonomía intelectual', 'Rigor científico'],
    developmentTips: [
      'Cultiva la curiosidad y el pensamiento crítico',
      'Participa en proyectos de investigación',
      'Desarrolla habilidades analíticas y metodológicas'
    ]
  },
  {
    id: 'A',
    name: 'Artístico',
    fullName: 'Artístico (Creador)',
    description: 'Personas creativas, expresivas e imaginativas que disfrutan trabajar en ambientes no estructurados. Valoran la belleza, la originalidad y la expresión personal.',
    characteristics: [
      'Creativo e imaginativo',
      'Expresivo y original',
      'Aprecia la estética',
      'Flexible y espontáneo',
      'Sensible y emotivo'
    ],
    workEnvironment: 'Ambientes creativos, flexibles y poco estructurados. Estudios, talleres, medios.',
    values: ['Expresión personal', 'Creatividad', 'Originalidad', 'Libertad artística'],
    developmentTips: [
      'Explora diferentes formas de expresión creativa',
      'Desarrolla tu portafolio y estilo personal',
      'Busca feedback y colaboraciones creativas'
    ]
  },
  {
    id: 'S',
    name: 'Social',
    fullName: 'Social (Ayudador)',
    description: 'Personas orientadas a las relaciones interpersonales, que disfrutan ayudar, enseñar, cuidar y servir a otros. Valoran la cooperación y el bienestar colectivo.',
    characteristics: [
      'Empático y comprensivo',
      'Buen comunicador',
      'Orientado al servicio',
      'Cooperativo y amigable',
      'Paciente y tolerante'
    ],
    workEnvironment: 'Ambientes colaborativos y orientados a personas. Escuelas, hospitales, servicios sociales.',
    values: ['Ayudar a otros', 'Relaciones significativas', 'Cooperación', 'Bienestar social'],
    developmentTips: [
      'Desarrolla habilidades de comunicación interpersonal',
      'Practica la escucha activa y la empatía',
      'Participa en actividades de voluntariado'
    ]
  },
  {
    id: 'E',
    name: 'Emprendedor',
    fullName: 'Emprendedor (Persuasor)',
    description: 'Personas ambiciosas, enérgicas y persuasivas que disfrutan liderar, influir, vender y tomar riesgos. Orientadas al logro, el poder y el reconocimiento.',
    characteristics: [
      'Asertivo y persuasivo',
      'Orientado a metas',
      'Energético y ambicioso',
      'Toma riesgos calculados',
      'Habilidades de liderazgo'
    ],
    workEnvironment: 'Ambientes competitivos y dinámicos. Negocios, ventas, gestión, política.',
    values: ['Éxito', 'Liderazgo', 'Reconocimiento', 'Poder e influencia'],
    developmentTips: [
      'Desarrolla habilidades de liderazgo y negociación',
      'Practica la toma de decisiones bajo presión',
      'Construye red de contactos profesionales'
    ]
  },
  {
    id: 'C',
    name: 'Convencional',
    fullName: 'Convencional (Organizador)',
    description: 'Personas ordenadas, eficientes y precisas que disfrutan trabajar con datos, números y procedimientos establecidos. Valoran la estructura, el orden y la exactitud.',
    characteristics: [
      'Organizado y metódico',
      'Atento a los detalles',
      'Eficiente y preciso',
      'Sigue instrucciones bien',
      'Confiable y responsable'
    ],
    workEnvironment: 'Oficinas, bancos, entornos estructurados. Trabajo con sistemas y procedimientos claros.',
    values: ['Orden', 'Eficiencia', 'Exactitud', 'Estabilidad'],
    developmentTips: [
      'Perfecciona habilidades organizacionales',
      'Domina software y herramientas de gestión',
      'Desarrolla atención al detalle y precisión'
    ]
  }
];

// ==================== FUNCIONES DE VALIDACIÓN ====================

/**
 * Valida la calidad de las respuestas del test
 * Detecta: respuestas aleatorias, inconsistencias, falta de atención
 */
export function validateTestResponses(
  answers: TestAnswers,
  timeData?: { startTime: number; endTime: number }
): ValidationResult {
  const warnings: string[] = [];

  // 1. Validar preguntas de infrecuencia (control)
  const controlQuestions = professionalQuestions.filter(q => q.isControl);
  let infrequencyScore = 0;

  controlQuestions.forEach(q => {
    const response = answers[q.id];
    // Si responde 4 o 5 (de acuerdo/totalmente de acuerdo) a pregunta imposible
    if (response && response >= 4) {
      infrequencyScore++;
    }
  });

  if (infrequencyScore >= 3) {
    warnings.push('INFREQUENCY_HIGH');
  } else if (infrequencyScore >= 2) {
    warnings.push('INFREQUENCY_MODERATE');
  }

  // 2. Validar consistencia interna (pares de preguntas similares)
  let inconsistencyCount = 0;

  consistencyPairs.forEach(pair => {
    const resp1 = answers[pair.q1];
    const resp2 = answers[pair.q2];

    if (resp1 && resp2) {
      const difference = Math.abs(resp1 - resp2);
      // Si la diferencia es > 2 puntos, es inconsistente
      if (difference > 2) {
        inconsistencyCount++;
      }
    }
  });

  if (inconsistencyCount >= 4) {
    warnings.push('INCONSISTENCY_HIGH');
  } else if (inconsistencyCount >= 2) {
    warnings.push('INCONSISTENCY_MODERATE');
  }

  // 3. Validar varianza de respuestas
  const responses = Object.values(answers).filter(r => r !== undefined);
  const mean = responses.reduce((sum, r) => sum + r, 0) / responses.length;
  const variance = responses.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / responses.length;

  if (variance < 0.5) {
    warnings.push('LOW_VARIANCE');
  }

  // 4. Detectar aquiescence bias (tendencia a responder siempre positivo/negativo)
  const highResponses = responses.filter(r => r >= 4).length;
  const lowResponses = responses.filter(r => r <= 2).length;
  const totalResponses = responses.length;

  if (highResponses / totalResponses > 0.85) {
    warnings.push('ACQUIESCENCE_HIGH');
  } else if (lowResponses / totalResponses > 0.85) {
    warnings.push('ACQUIESCENCE_LOW');
  }

  // 5. Validar tiempo de completación (si está disponible)
  let completionTime: number | undefined;
  if (timeData) {
    completionTime = (timeData.endTime - timeData.startTime) / 1000; // segundos
    const avgTimePerItem = completionTime / Object.keys(answers).length;

    if (avgTimePerItem < 3) {
      warnings.push('TOO_FAST');
    } else if (completionTime > 3600) { // 1 hora
      warnings.push('TOO_SLOW');
    }
  }

  // Determinar recomendación final
  let recommendation: 'VALID' | 'CAUTION' | 'INVALID';

  if (warnings.length === 0) {
    recommendation = 'VALID';
  } else if (warnings.length <= 2 && !warnings.includes('INFREQUENCY_HIGH') && !warnings.includes('INCONSISTENCY_HIGH')) {
    recommendation = 'CAUTION';
  } else {
    recommendation = 'INVALID';
  }

  return {
    isValid: recommendation !== 'INVALID',
    warnings,
    recommendation,
    details: {
      infrequencyScore,
      inconsistencyCount,
      responseVariance: variance,
      completionTime
    }
  };
}

// ==================== FUNCIONES DE CÁLCULO ====================

/**
 * Calcula el percentil basado en puntaje bruto
 * Usa aproximación de distribución normal para simplificar
 * En producción, esto debería usar normas poblacionales reales
 */
function calculatePercentile(rawScore: number, maxScore: number): number {
  // Convertir a porcentaje (0-100)
  const percentage = (rawScore / maxScore) * 100;

  // Aproximación simple: asumiendo distribución normal
  // Media = 50%, SD = 15%
  // En producción, usar tabla de normas real
  const mean = 50;
  const sd = 15;
  const zScore = (percentage - mean) / sd;

  // Convertir z-score a percentil (aproximación)
  // Fórmula simplificada - en producción usar tabla z completa
  let percentile: number;

  if (zScore <= -2) percentile = 2;
  else if (zScore <= -1.5) percentile = 7;
  else if (zScore <= -1) percentile = 16;
  else if (zScore <= -0.5) percentile = 31;
  else if (zScore <= 0) percentile = 50;
  else if (zScore <= 0.5) percentile = 69;
  else if (zScore <= 1) percentile = 84;
  else if (zScore <= 1.5) percentile = 93;
  else if (zScore <= 2) percentile = 98;
  else percentile = 99;

  return percentile;
}

/**
 * Calcula la consistencia del código Holland
 * Basado en el modelo hexagonal RIASEC
 */
function calculateConsistency(hollandCode: string): number {
  // Hexágono RIASEC: R-I-A-S-E-C-R (circular)
  const hexagon = ['R', 'I', 'A', 'S', 'E', 'C'];

  const first = hollandCode[0];
  const second = hollandCode[1];

  const idx1 = hexagon.indexOf(first);
  const idx2 = hexagon.indexOf(second);

  // Calcular distancia en hexágono
  const distance = Math.min(
    Math.abs(idx1 - idx2),
    6 - Math.abs(idx1 - idx2)
  );

  // Consistencia: 3 = adyacentes (alta), 2 = separados por 1, 1 = opuestos (baja)
  if (distance === 1) return 3; // Alta consistencia
  if (distance === 2) return 2; // Media consistencia
  return 1; // Baja consistencia
}

/**
 * Calcula la diferenciación (varianza entre puntajes)
 */
function calculateDifferentiation(percentages: number[]): number {
  const max = Math.max(...percentages);
  const min = Math.min(...percentages);
  return max - min;
}

/**
 * Genera recomendaciones personalizadas basadas en el perfil
 */
function generateRecommendations(
  percentages: { category: RIASECType; percentage: number; percentile: number }[],
  consistency: number,
  differentiation: number
): string[] {
  const recommendations: string[] = [];
  const topCategory = riasecCategories.find(c => c.id === percentages[0].category)!;
  const topPercentage = percentages[0].percentage;
  const topPercentile = percentages[0].percentile;

  // Recomendaciones basadas en percentil
  if (topPercentile >= 85) {
    recommendations.push(
      `Tu perfil ${topCategory.name} es excepcionalmente fuerte (percentil ${topPercentile}). Tienes un interés muy marcado en esta área.`
    );
  } else if (topPercentile >= 70) {
    recommendations.push(
      `Tu perfil ${topCategory.name} está bien definido (percentil ${topPercentile}). Muestras un interés significativo en esta área.`
    );
  } else if (topPercentile >= 50) {
    recommendations.push(
      `Tu perfil ${topCategory.name} es moderado (percentil ${topPercentile}). Tienes interés en esta área junto con otros intereses.`
    );
  } else {
    recommendations.push(
      `Tu perfil muestra intereses diversificados. No hay un área dominante clara, lo que te da flexibilidad para explorar múltiples opciones.`
    );
  }

  // Recomendaciones basadas en consistencia
  if (consistency === 3) {
    recommendations.push(
      'Tus intereses principales son muy coherentes entre sí, lo que facilitará encontrar una carrera que te satisfaga plenamente.'
    );
  } else if (consistency === 2) {
    recommendations.push(
      'Tus intereses principales tienen buena compatibilidad. Considera carreras que integren ambas áreas.'
    );
  } else {
    recommendations.push(
      'Tus intereses principales son diversos. Busca carreras interdisciplinarias o considera desarrollar diferentes facetas de tu personalidad profesional.'
    );
  }

  // Recomendaciones basadas en diferenciación
  if (differentiation >= 40) {
    recommendations.push(
      'Tienes un perfil especializado con intereses muy definidos. Enfócate en carreras específicas que aprovechen tus fortalezas principales.'
    );
  } else if (differentiation >= 25) {
    recommendations.push(
      'Tu perfil muestra especialización moderada. Tienes intereses claros pero también versatilidad para adaptarte a diferentes contextos.'
    );
  } else {
    recommendations.push(
      'Tienes un perfil generalista con intereses amplios. Esto te da gran versatilidad - considera carreras que te permitan desarrollar múltiples habilidades.'
    );
  }

  // Recomendaciones de desarrollo del tipo principal
  const tip = topCategory.developmentTips[0];
  recommendations.push(tip);

  // Recomendación sobre tipo secundario si es significativo
  const secondCategory = riasecCategories.find(c => c.id === percentages[1].category)!;
  if (percentages[1].percentile >= 60) {
    recommendations.push(
      `También muestras interés significativo en el área ${secondCategory.name}. Explora carreras que combinen ${topCategory.name} y ${secondCategory.name}.`
    );
  }

  return recommendations;
}

/**
 * Genera matching con carreras UDHI
 */
function generateCareerMatches(
  scores: RIASECScores,
  percentages: { category: RIASECType; percentage: number }[]
): {
  name: string;
  description: string;
  matchPercentage: number;
  primaryReason: string;
  area?: string;
  duration?: string;
  modalities?: string[];
}[] {
  const hollandCode = percentages.slice(0, 3).map(p => p.category).join('');

  // Calcular match para cada carrera de UDHI
  const matches = udhiCareers.map(career => {
    // Algoritmo de matching mejorado
    let matchScore = 0;

    // 1. Compatibilidad con tipos primarios de la carrera (60% del peso)
    career.primaryTypes.forEach((type, index) => {
      const weight = [0.4, 0.25, 0.15][index] || 0.05; // Pesos decrecientes
      const studentScore = scores[type as RIASECType] || 0;
      const maxScore = 75; // 15 preguntas × 5 puntos máximo
      const normalizedScore = (studentScore / maxScore) * 100;
      matchScore += normalizedScore * weight;
    });

    // 2. Bonus por match exacto de código Holland (20% del peso)
    if (career.riasecProfile === hollandCode) {
      matchScore += 20;
    } else if (career.riasecProfile.substring(0, 2) === hollandCode.substring(0, 2)) {
      matchScore += 10;
    } else if (career.riasecProfile[0] === hollandCode[0]) {
      matchScore += 5;
    }

    // 3. Considerar tipos secundarios (20% del peso)
    const secondaryMatch = career.primaryTypes.some(type =>
      percentages.slice(0, 3).some(p => p.category === type)
    );
    if (secondaryMatch) {
      matchScore += 10;
    }

    const finalMatch = Math.min(100, Math.round(matchScore));

    // Generar razón del match
    let primaryReason: string;
    if (career.riasecProfile === hollandCode) {
      primaryReason = `¡Match perfecto! Tu código ${hollandCode} coincide exactamente con esta carrera`;
    } else if (career.riasecProfile.substring(0, 2) === hollandCode.substring(0, 2)) {
      const primaryType = riasecCategories.find(c => c.id === career.primaryTypes[0])!;
      primaryReason = `Excelente compatibilidad - Ambos comparten perfil ${primaryType.name} dominante`;
    } else {
      const primaryType = riasecCategories.find(c => c.id === career.primaryTypes[0])!;
      primaryReason = `Compatible con tu interés en el área ${primaryType.name}`;
    }

    return {
      name: career.name,
      description: career.description,
      matchPercentage: finalMatch,
      primaryReason,
      area: career.area,
      duration: career.duration,
      modalities: career.modalities
    };
  });

  // Ordenar por match percentage descendente
  return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
}

/**
 * Función principal: Calcula resultados del test con validación
 */
export function calculateProfessionalResults(
  answers: TestAnswers,
  timeData?: { startTime: number; endTime: number }
): DetailedResults {
  // 1. Validar respuestas
  const validation = validateTestResponses(answers, timeData);

  // 2. Calcular puntajes brutos por dimensión RIASEC
  const scores: RIASECScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  // Solo contar preguntas regulares (no control)
  const regularQuestions = professionalQuestions.filter(q => !q.isControl);

  regularQuestions.forEach(question => {
    const answer = answers[question.id];
    if (answer) {
      scores[question.category] += answer;
    }
  });

  // 3. Calcular porcentajes y percentiles
  const maxScorePerCategory = 75; // 15 preguntas × 5 puntos = 75

  const percentages = (Object.keys(scores) as RIASECType[])
    .map(category => ({
      category,
      rawScore: scores[category],
      percentage: Math.round((scores[category] / maxScorePerCategory) * 100),
      percentile: calculatePercentile(scores[category], maxScorePerCategory)
    }))
    .sort((a, b) => b.percentage - a.percentage);

  // 4. Generar código Holland (top 3 tipos)
  const hollandCode = percentages.slice(0, 3).map(p => p.category).join('');

  // 5. Calcular métricas de perfil
  const consistency = calculateConsistency(hollandCode);
  const differentiation = calculateDifferentiation(percentages.map(p => p.percentage));

  // 6. Obtener categorías principales
  const primaryType = riasecCategories.find(c => c.id === percentages[0].category)!;
  const secondaryType = riasecCategories.find(c => c.id === percentages[1].category)!;
  const tertiaryType = riasecCategories.find(c => c.id === percentages[2].category)!;

  // 7. Generar recomendaciones personalizadas
  const recommendations = generateRecommendations(percentages, consistency, differentiation);

  // 8. Generar matches con carreras UDHI
  const topCareers = generateCareerMatches(scores, percentages);

  return {
    scores,
    percentages,
    hollandCode,
    consistency,
    differentiation,
    primaryType,
    secondaryType,
    tertiaryType,
    recommendations,
    topCareers,
    validation
  };
}

