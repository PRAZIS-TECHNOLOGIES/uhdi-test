// Test Vocacional Profesional V3 - 60 Preguntas de Alta Calidad
// Basado en O*NET Interest Profiler y Strong Interest Inventory
// Preguntas claras, específicas y discriminantes

import { udhiCareers, UDHICareer } from './udhiCareers';

export type RIASECType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export type Question = {
  id: number;
  text: string;
  category: RIASECType;
  isControl?: boolean;
  consistencyPair?: number;
};

export type LikertScale = 1 | 2 | 3 | 4 | 5;

export type TestAnswers = {
  [questionId: number]: LikertScale;
};

// ==================== 60 PREGUNTAS DE ALTA CALIDAD ====================
// 10 preguntas por dimensión RIASEC
// Basadas en O*NET Interest Profiler y Strong Interest Inventory

export const professionalQuestions: Question[] = [
  // ==================== REALISTIC (R) - 10 preguntas ====================
  // Enfoque: Trabajo manual, mecánico, técnico, al aire libre

  { id: 1, text: 'Reparar equipos electrónicos usando herramientas especializadas', category: 'R' },
  { id: 2, text: 'Ensamblar maquinaria o instalar sistemas técnicos', category: 'R' },
  { id: 3, text: 'Diseñar y construir estructuras físicas o prototipos', category: 'R' },
  { id: 4, text: 'Operar equipo pesado o maquinaria industrial', category: 'R' },
  { id: 5, text: 'Realizar mantenimiento preventivo a instalaciones o vehículos', category: 'R' },
  { id: 6, text: 'Trabajar con planos técnicos para proyectos de construcción', category: 'R' },
  { id: 7, text: 'Instalar y configurar sistemas eléctricos o de plomería', category: 'R', consistencyPair: 5 },
  { id: 8, text: 'Fabricar objetos usando materiales como madera, metal o plástico', category: 'R' },
  { id: 9, text: 'Diagnosticar y solucionar problemas mecánicos complejos', category: 'R' },
  { id: 10, text: 'Utilizar software CAD para diseño técnico tridimensional', category: 'R' },

  // ==================== INVESTIGATIVE (I) - 10 preguntas ====================
  // Enfoque: Análisis, investigación, ciencia, resolución de problemas

  { id: 11, text: 'Diseñar experimentos para probar hipótesis científicas', category: 'I' },
  { id: 12, text: 'Analizar datos complejos para identificar patrones y tendencias', category: 'I' },
  { id: 13, text: 'Estudiar procesos biológicos o químicos en laboratorio', category: 'I' },
  { id: 14, text: 'Desarrollar modelos matemáticos para resolver problemas reales', category: 'I' },
  { id: 15, text: 'Investigar nuevas tecnologías o métodos científicos', category: 'I', consistencyPair: 11 },
  { id: 16, text: 'Programar algoritmos para análisis de información', category: 'I' },
  { id: 17, text: 'Diagnosticar enfermedades mediante análisis clínico detallado', category: 'I' },
  { id: 18, text: 'Realizar investigación documental profunda sobre temas especializados', category: 'I' },
  { id: 19, text: 'Evaluar evidencia científica para llegar a conclusiones fundamentadas', category: 'I' },
  { id: 20, text: 'Diseñar sistemas computacionales para resolver problemas técnicos', category: 'I' },

  // ==================== ARTISTIC (A) - 10 preguntas ====================
  // Enfoque: Creatividad, diseño, expresión artística, innovación

  { id: 21, text: 'Crear diseños visuales originales para proyectos gráficos', category: 'A' },
  { id: 22, text: 'Escribir contenido creativo como historias, guiones o artículos', category: 'A' },
  { id: 23, text: 'Diseñar espacios interiores combinando estética y funcionalidad', category: 'A' },
  { id: 24, text: 'Componer música o crear producciones audiovisuales', category: 'A' },
  { id: 25, text: 'Desarrollar conceptos creativos para campañas publicitarias', category: 'A', consistencyPair: 21 },
  { id: 26, text: 'Diseñar prendas de vestir, accesorios o productos estéticos', category: 'A' },
  { id: 27, text: 'Crear ilustraciones digitales o animaciones para medios', category: 'A' },
  { id: 28, text: 'Fotografiar eventos o realizar edición artística de imágenes', category: 'A' },
  { id: 29, text: 'Diseñar experiencias de usuario innovadoras para aplicaciones', category: 'A' },
  { id: 30, text: 'Dirigir proyectos creativos coordinando elementos visuales y narrativos', category: 'A' },

  // ==================== SOCIAL (S) - 10 preguntas ====================
  // Enfoque: Ayudar, enseñar, cuidar, orientar, trabajar con personas

  { id: 31, text: 'Enseñar conceptos complejos de forma clara y motivadora', category: 'S' },
  { id: 32, text: 'Proporcionar cuidados de salud y rehabilitación a pacientes', category: 'S' },
  { id: 33, text: 'Orientar a personas en decisiones importantes de su vida', category: 'S' },
  { id: 34, text: 'Facilitar grupos de trabajo para resolver conflictos', category: 'S' },
  { id: 35, text: 'Capacitar equipos para mejorar sus habilidades profesionales', category: 'S', consistencyPair: 31 },
  { id: 36, text: 'Trabajar directamente ayudando a personas vulnerables o enfermas', category: 'S' },
  { id: 37, text: 'Planificar programas educativos adaptados a diferentes necesidades', category: 'S' },
  { id: 38, text: 'Proporcionar terapia o apoyo psicológico a individuos', category: 'S' },
  { id: 39, text: 'Organizar actividades comunitarias para beneficio social', category: 'S' },
  { id: 40, text: 'Desarrollar materiales didácticos para facilitar el aprendizaje', category: 'S' },

  // ==================== ENTERPRISING (E) - 10 preguntas ====================
  // Enfoque: Liderazgo, ventas, negocios, persuasión, gestión

  { id: 41, text: 'Dirigir equipos de trabajo hacia objetivos estratégicos', category: 'E' },
  { id: 42, text: 'Negociar contratos y acuerdos comerciales importantes', category: 'E' },
  { id: 43, text: 'Desarrollar estrategias de negocio para nuevos mercados', category: 'E' },
  { id: 44, text: 'Presentar propuestas comerciales convincentes a clientes potenciales', category: 'E' },
  { id: 45, text: 'Gestionar presupuestos y recursos para maximizar resultados', category: 'E' },
  { id: 46, text: 'Identificar oportunidades de inversión y crecimiento empresarial', category: 'E', consistencyPair: 43 },
  { id: 47, text: 'Coordinar proyectos complejos con múltiples stakeholders', category: 'E' },
  { id: 48, text: 'Crear y lanzar nuevos productos o servicios al mercado', category: 'E' },
  { id: 49, text: 'Supervisar operaciones para asegurar eficiencia y rentabilidad', category: 'E' },
  { id: 50, text: 'Persuadir e influir en decisiones organizacionales estratégicas', category: 'E' },

  // ==================== CONVENTIONAL (C) - 10 preguntas ====================
  // Enfoque: Organización, datos, procedimientos, finanzas, administración

  { id: 51, text: 'Organizar y mantener sistemas de información detallados', category: 'C' },
  { id: 52, text: 'Realizar análisis financieros y preparar reportes contables', category: 'C' },
  { id: 53, text: 'Verificar el cumplimiento de procedimientos y regulaciones', category: 'C' },
  { id: 54, text: 'Administrar bases de datos y garantizar precisión de información', category: 'C', consistencyPair: 51 },
  { id: 55, text: 'Preparar documentación legal y administrativa precisa', category: 'C' },
  { id: 56, text: 'Procesar transacciones financieras con alto nivel de exactitud', category: 'C' },
  { id: 57, text: 'Crear sistemas de archivo eficientes para gestión documental', category: 'C' },
  { id: 58, text: 'Auditar procesos para identificar errores o inconsistencias', category: 'C' },
  { id: 59, text: 'Implementar políticas y procedimientos organizacionales', category: 'C' },
  { id: 60, text: 'Gestionar agendas y coordinar logística de eventos complejos', category: 'C' },

  // ==================== PREGUNTAS DE CONTROL (INFRECUENCIA) ====================
  { id: 61, text: 'He viajado personalmente a otro planeta', category: 'R', isControl: true },
  { id: 62, text: 'Puedo comunicarme telepáticamente con animales', category: 'I', isControl: true },
  { id: 63, text: 'Nunca he cometido ningún error en toda mi vida', category: 'S', isControl: true },
  { id: 64, text: 'Puedo levitar objetos solo con mi mente', category: 'A', isControl: true },
  { id: 65, text: 'He leído absolutamente todos los libros que existen', category: 'I', isControl: true },
  { id: 66, text: 'Nunca me he sentido cansado o somnoliento', category: 'E', isControl: true },
];

// Escala Likert 5 puntos
export const likertOptions = [
  { value: 1 as LikertScale, label: 'Totalmente en desacuerdo', shortLabel: 'Muy bajo' },
  { value: 2 as LikertScale, label: 'En desacuerdo', shortLabel: 'Bajo' },
  { value: 3 as LikertScale, label: 'Neutral', shortLabel: 'Neutral' },
  { value: 4 as LikertScale, label: 'De acuerdo', shortLabel: 'Alto' },
  { value: 5 as LikertScale, label: 'Totalmente de acuerdo', shortLabel: 'Muy alto' }
];

// Pares de consistencia (preguntas que deberían tener respuestas similares)
export const consistencyPairs = [
  { q1: 5, q2: 7, description: 'Ambas sobre mantenimiento técnico' },
  { q1: 11, q2: 15, description: 'Ambas sobre investigación científica' },
  { q1: 21, q2: 25, description: 'Ambas sobre diseño creativo' },
  { q1: 31, q2: 35, description: 'Ambas sobre enseñanza' },
  { q1: 43, q2: 46, description: 'Ambas sobre estrategia de negocios' },
  { q1: 51, q2: 54, description: 'Ambas sobre organización de información' },
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
    percentile: number;
    rawScore: number;
  }[];
  hollandCode: string;
  consistency: number;
  differentiation: number;
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
  validation: ValidationResult;
}

// Categorías RIASEC
export const riasecCategories: RIASECCategory[] = [
  {
    id: 'R',
    name: 'Realista',
    fullName: 'Realista (Hacedor)',
    description: 'Personas prácticas y orientadas a la acción que prefieren trabajar con herramientas, máquinas y objetos físicos. Disfrutan resolver problemas concretos con resultados tangibles.',
    characteristics: [
      'Habilidades técnicas y manuales',
      'Pensamiento práctico y concreto',
      'Preferencia por actividades físicas',
      'Trabajo independiente',
      'Atención a detalles técnicos'
    ],
    workEnvironment: 'Talleres, laboratorios, exteriores, fábricas. Ambientes con herramientas y equipos especializados.',
    values: ['Resultados tangibles', 'Autonomía', 'Habilidad técnica', 'Practicidad'],
    developmentTips: [
      'Desarrolla habilidades técnicas especializadas',
      'Busca certificaciones en áreas técnicas',
      'Practica con herramientas y tecnología'
    ]
  },
  {
    id: 'I',
    name: 'Investigador',
    fullName: 'Investigador (Pensador)',
    description: 'Personas analíticas e intelectuales que disfrutan la investigación, el análisis y la resolución de problemas complejos. Orientadas al pensamiento científico y abstracto.',
    characteristics: [
      'Pensamiento analítico y crítico',
      'Curiosidad intelectual',
      'Método científico',
      'Trabajo independiente',
      'Resolución de problemas complejos'
    ],
    workEnvironment: 'Laboratorios, centros de investigación, universidades, hospitales. Ambientes de análisis profundo.',
    values: ['Conocimiento', 'Innovación', 'Rigor científico', 'Descubrimiento'],
    developmentTips: [
      'Desarrolla habilidades de investigación',
      'Practica el método científico',
      'Participa en proyectos de investigación'
    ]
  },
  {
    id: 'A',
    name: 'Artístico',
    fullName: 'Artístico (Creador)',
    description: 'Personas creativas e innovadoras que valoran la expresión personal y la originalidad. Disfrutan crear, diseñar y trabajar en ambientes poco estructurados.',
    characteristics: [
      'Creatividad e imaginación',
      'Pensamiento original',
      'Sensibilidad estética',
      'Expresión personal',
      'Flexibilidad'
    ],
    workEnvironment: 'Estudios creativos, agencias, medios, talleres. Ambientes flexibles y no rutinarios.',
    values: ['Expresión personal', 'Originalidad', 'Belleza', 'Innovación'],
    developmentTips: [
      'Desarrolla tu portafolio creativo',
      'Explora diferentes medios artísticos',
      'Busca feedback de profesionales'
    ]
  },
  {
    id: 'S',
    name: 'Social',
    fullName: 'Social (Ayudador)',
    description: 'Personas orientadas a las relaciones interpersonales que disfrutan ayudar, enseñar, cuidar y servir a otros. Valoran la cooperación y el impacto social.',
    characteristics: [
      'Empatía y comprensión',
      'Habilidades interpersonales',
      'Orientación al servicio',
      'Comunicación efectiva',
      'Trabajo en equipo'
    ],
    workEnvironment: 'Escuelas, hospitales, organizaciones sociales, centros comunitarios. Ambientes colaborativos.',
    values: ['Ayudar a otros', 'Relaciones significativas', 'Bienestar social', 'Cooperación'],
    developmentTips: [
      'Desarrolla habilidades de comunicación',
      'Practica la escucha activa',
      'Participa en voluntariado'
    ]
  },
  {
    id: 'E',
    name: 'Emprendedor',
    fullName: 'Emprendedor (Persuasor)',
    description: 'Personas ambiciosas y persuasivas que disfrutan liderar, influir y tomar decisiones estratégicas. Orientadas al logro y los resultados.',
    characteristics: [
      'Liderazgo y persuasión',
      'Orientación a resultados',
      'Toma de decisiones',
      'Asunción de riesgos',
      'Visión estratégica'
    ],
    workEnvironment: 'Oficinas corporativas, ventas, negocios, política. Ambientes competitivos y dinámicos.',
    values: ['Éxito', 'Poder e influencia', 'Liderazgo', 'Reconocimiento'],
    developmentTips: [
      'Desarrolla habilidades de liderazgo',
      'Practica la negociación',
      'Construye red de contactos'
    ]
  },
  {
    id: 'C',
    name: 'Convencional',
    fullName: 'Convencional (Organizador)',
    description: 'Personas ordenadas y precisas que disfrutan trabajar con datos, números y procedimientos establecidos. Valoran la estructura, la eficiencia y la exactitud.',
    characteristics: [
      'Organización y método',
      'Atención al detalle',
      'Precisión y exactitud',
      'Seguimiento de procedimientos',
      'Confiabilidad'
    ],
    workEnvironment: 'Oficinas, bancos, administración, contabilidad. Entornos estructurados y organizados.',
    values: ['Orden', 'Eficiencia', 'Precisión', 'Estabilidad'],
    developmentTips: [
      'Perfecciona habilidades organizacionales',
      'Domina software especializado',
      'Desarrolla atención al detalle'
    ]
  }
];

// Continúa en siguiente bloque con funciones de validación y cálculo...
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
      const maxScore = 50; // 10 preguntas × 5 puntos máximo
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
  const maxScorePerCategory = 50; // 10 preguntas × 5 puntos = 50

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

