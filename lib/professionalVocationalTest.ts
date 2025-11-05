// Test Vocacional Profesional basado en el Modelo RIASEC de Holland
// y metodologías de psicología ocupacional

import { udhiCareers, calculateCareerMatch, UDHICareer } from './udhiCareers';

export type RIASECType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export type RIASECCategory = {
  id: RIASECType;
  name: string;
  fullName: string;
  description: string;
  characteristics: string[];
  workEnvironment: string;
  careers: {
    name: string;
    description: string;
    requiredSkills: string[];
  }[];
  values: string[];
  developmentTips: string[];
};

export type Question = {
  id: number;
  text: string;
  category: RIASECType;
  dimension: 'interests' | 'skills' | 'values' | 'preferences';
};

export type LikertScale = 1 | 2 | 3 | 4 | 5;

// Categorías RIASEC de Holland
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
      'Independiente y persistente',
      'Prefiere problemas concretos sobre abstractos'
    ],
    workEnvironment: 'Ambientes estructurados, con herramientas y equipos técnicos. Trabajo físico o mecánico.',
    careers: [
      {
        name: 'Ingeniería Mecánica',
        description: 'Diseño, desarrollo y mantenimiento de sistemas mecánicos',
        requiredSkills: ['Física aplicada', 'Matemáticas', 'Dibujo técnico', 'Resolución de problemas']
      },
      {
        name: 'Arquitectura',
        description: 'Diseño y planificación de espacios y estructuras',
        requiredSkills: ['Diseño espacial', 'Cálculo estructural', 'Software CAD', 'Creatividad técnica']
      },
      {
        name: 'Ingeniería Civil',
        description: 'Construcción y mantenimiento de infraestructura',
        requiredSkills: ['Estructuras', 'Gestión de proyectos', 'Topografía', 'Materiales']
      },
      {
        name: 'Agronomía',
        description: 'Manejo de recursos agrícolas y pecuarios',
        requiredSkills: ['Biología', 'Química', 'Gestión ambiental', 'Trabajo de campo']
      },
      {
        name: 'Ingeniería Electromecánica',
        description: 'Sistemas eléctricos y mecánicos integrados',
        requiredSkills: ['Electricidad', 'Mecánica', 'Automatización', 'Mantenimiento']
      }
    ],
    values: ['Resultados tangibles', 'Autonomía', 'Estabilidad', 'Practicidad'],
    developmentTips: [
      'Desarrolla habilidades técnicas especializadas',
      'Practica con herramientas y tecnología',
      'Busca experiencias prácticas y pasantías',
      'Mantente actualizado en nuevas tecnologías'
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
      'Prefiere trabajar de forma independiente',
      'Orientado a la investigación',
      'Pensamiento crítico desarrollado'
    ],
    workEnvironment: 'Laboratorios, centros de investigación, universidades. Ambientes que permiten análisis profundo.',
    careers: [
      {
        name: 'Medicina',
        description: 'Diagnóstico, tratamiento y prevención de enfermedades',
        requiredSkills: ['Biología', 'Química', 'Anatomía', 'Pensamiento crítico', 'Empatía']
      },
      {
        name: 'Ingeniería en Sistemas',
        description: 'Desarrollo de soluciones tecnológicas y software',
        requiredSkills: ['Programación', 'Lógica', 'Algoritmos', 'Bases de datos']
      },
      {
        name: 'Biología',
        description: 'Estudio de organismos vivos y ecosistemas',
        requiredSkills: ['Investigación', 'Metodología científica', 'Análisis de datos', 'Bioquímica']
      },
      {
        name: 'Física',
        description: 'Estudio de las leyes fundamentales del universo',
        requiredSkills: ['Matemáticas avanzadas', 'Experimentación', 'Modelado', 'Análisis']
      },
      {
        name: 'Química',
        description: 'Estudio de la materia y sus transformaciones',
        requiredSkills: ['Química orgánica', 'Análisis instrumental', 'Laboratorio', 'Síntesis']
      },
      {
        name: 'Ciencia de Datos',
        description: 'Análisis y interpretación de grandes volúmenes de datos',
        requiredSkills: ['Estadística', 'Programación', 'Machine Learning', 'Visualización']
      }
    ],
    values: ['Conocimiento', 'Descubrimiento', 'Precisión', 'Autonomía intelectual'],
    developmentTips: [
      'Cultiva tu curiosidad científica constantemente',
      'Aprende metodología de investigación',
      'Desarrolla habilidades estadísticas y analíticas',
      'Participa en proyectos de investigación'
    ]
  },
  {
    id: 'A',
    name: 'Artístico',
    fullName: 'Artístico (Creador)',
    description: 'Personas creativas, imaginativas y expresivas que valoran la estética, la originalidad y la innovación. Prefieren ambientes no estructurados donde puedan crear.',
    characteristics: [
      'Creativo e imaginativo',
      'Expresivo y original',
      'Intuitivo y emocional',
      'Aprecia la belleza y estética',
      'No convencional',
      'Comunicación visual y artística'
    ],
    workEnvironment: 'Estudios creativos, agencias, talleres artísticos. Ambientes flexibles y expresivos.',
    careers: [
      {
        name: 'Diseño Gráfico',
        description: 'Comunicación visual a través de imágenes y tipografía',
        requiredSkills: ['Software de diseño', 'Teoría del color', 'Tipografía', 'Creatividad']
      },
      {
        name: 'Arquitectura de Interiores',
        description: 'Diseño de espacios interiores funcionales y estéticos',
        requiredSkills: ['Diseño espacial', 'Materiales', 'Iluminación', 'Tendencias']
      },
      {
        name: 'Publicidad',
        description: 'Creación de campañas y estrategias de comunicación',
        requiredSkills: ['Creatividad', 'Copywriting', 'Estrategia', 'Marketing']
      },
      {
        name: 'Comunicación Audiovisual',
        description: 'Producción de contenido para medios audiovisuales',
        requiredSkills: ['Narrativa', 'Producción', 'Edición', 'Dirección']
      },
      {
        name: 'Bellas Artes',
        description: 'Expresión artística en diversas disciplinas',
        requiredSkills: ['Técnicas artísticas', 'Historia del arte', 'Conceptualización', 'Expresión']
      },
      {
        name: 'Diseño de Moda',
        description: 'Creación de prendas y accesorios',
        requiredSkills: ['Ilustración', 'Patronaje', 'Textiles', 'Tendencias']
      }
    ],
    values: ['Creatividad', 'Expresión personal', 'Innovación', 'Estética'],
    developmentTips: [
      'Desarrolla tu portafolio constantemente',
      'Estudia tendencias y referentes artísticos',
      'Practica diferentes técnicas y medios',
      'Busca feedback y crítica constructiva'
    ]
  },
  {
    id: 'S',
    name: 'Social',
    fullName: 'Social (Ayudador)',
    description: 'Personas empáticas, colaborativas y orientadas al servicio que disfrutan ayudar, enseñar, aconsejar y trabajar con otros. Valoran las relaciones interpersonales.',
    characteristics: [
      'Empático y comprensivo',
      'Orientado al servicio',
      'Habilidades interpersonales',
      'Disfruta trabajar en equipo',
      'Comunicativo y persuasivo',
      'Valora el bienestar de otros'
    ],
    workEnvironment: 'Escuelas, hospitales, organizaciones sociales. Ambientes colaborativos y de servicio.',
    careers: [
      {
        name: 'Psicología',
        description: 'Estudio y tratamiento de la conducta y procesos mentales',
        requiredSkills: ['Empatía', 'Escucha activa', 'Análisis', 'Intervención terapéutica']
      },
      {
        name: 'Pedagogía',
        description: 'Enseñanza y desarrollo educativo',
        requiredSkills: ['Didáctica', 'Planeación', 'Comunicación', 'Paciencia']
      },
      {
        name: 'Trabajo Social',
        description: 'Intervención en problemáticas sociales',
        requiredSkills: ['Gestión de casos', 'Políticas sociales', 'Intervención', 'Advocacy']
      },
      {
        name: 'Enfermería',
        description: 'Cuidado integral de la salud',
        requiredSkills: ['Cuidado clínico', 'Farmacología', 'Comunicación', 'Empatía']
      },
      {
        name: 'Recursos Humanos',
        description: 'Gestión del talento humano en organizaciones',
        requiredSkills: ['Selección', 'Capacitación', 'Relaciones laborales', 'Comunicación']
      },
      {
        name: 'Terapia Ocupacional',
        description: 'Rehabilitación y desarrollo de habilidades funcionales',
        requiredSkills: ['Evaluación funcional', 'Intervención', 'Adaptación', 'Empatía']
      }
    ],
    values: ['Ayudar a otros', 'Relaciones significativas', 'Impacto social', 'Cooperación'],
    developmentTips: [
      'Desarrolla habilidades de comunicación',
      'Practica la escucha activa y empatía',
      'Participa en voluntariados',
      'Aprende sobre diversidad cultural'
    ]
  },
  {
    id: 'E',
    name: 'Emprendedor',
    fullName: 'Emprendedor (Persuasor)',
    description: 'Personas ambiciosas, enérgicas y persuasivas que disfrutan liderar, tomar decisiones, gestionar proyectos y alcanzar objetivos. Orientadas a resultados y al éxito.',
    characteristics: [
      'Líder natural',
      'Orientado a objetivos',
      'Persuasivo y convincente',
      'Toma de decisiones',
      'Ambicioso y competitivo',
      'Visión estratégica'
    ],
    workEnvironment: 'Empresas, startups, negocios propios. Ambientes dinámicos y de liderazgo.',
    careers: [
      {
        name: 'Administración de Empresas',
        description: 'Gestión y dirección de organizaciones',
        requiredSkills: ['Liderazgo', 'Planeación estratégica', 'Finanzas', 'Operaciones']
      },
      {
        name: 'Marketing',
        description: 'Estrategias de mercado y comercialización',
        requiredSkills: ['Investigación de mercado', 'Branding', 'Digital marketing', 'Análisis']
      },
      {
        name: 'Finanzas',
        description: 'Gestión de recursos financieros e inversiones',
        requiredSkills: ['Análisis financiero', 'Inversiones', 'Mercados', 'Valoración']
      },
      {
        name: 'Derecho',
        description: 'Aplicación y práctica del sistema legal',
        requiredSkills: ['Argumentación', 'Litigio', 'Negociación', 'Legislación']
      },
      {
        name: 'Negocios Internacionales',
        description: 'Comercio y operaciones en mercados globales',
        requiredSkills: ['Comercio exterior', 'Logística', 'Negociación', 'Idiomas']
      },
      {
        name: 'Emprendimiento',
        description: 'Creación y gestión de empresas propias',
        requiredSkills: ['Innovación', 'Pitch', 'Modelo de negocio', 'Resiliencia']
      }
    ],
    values: ['Éxito', 'Reconocimiento', 'Poder de decisión', 'Logros'],
    developmentTips: [
      'Desarrolla habilidades de liderazgo',
      'Aprende sobre estrategia empresarial',
      'Practica la negociación y persuasión',
      'Construye tu red de contactos (networking)'
    ]
  },
  {
    id: 'C',
    name: 'Convencional',
    fullName: 'Convencional (Organizador)',
    description: 'Personas organizadas, detallistas y sistemáticas que disfrutan trabajar con datos, números, archivos y procedimientos establecidos. Valoran el orden y la precisión.',
    characteristics: [
      'Organizado y metódico',
      'Atención al detalle',
      'Sigue procedimientos',
      'Responsable y confiable',
      'Eficiente y preciso',
      'Valora la estructura'
    ],
    workEnvironment: 'Oficinas, bancos, instituciones gubernamentales. Ambientes estructurados y ordenados.',
    careers: [
      {
        name: 'Contabilidad',
        description: 'Registro y análisis de información financiera',
        requiredSkills: ['Contabilidad', 'Normativas fiscales', 'Auditoría', 'Software contable']
      },
      {
        name: 'Administración Pública',
        description: 'Gestión de recursos y servicios públicos',
        requiredSkills: ['Derecho administrativo', 'Políticas públicas', 'Gestión', 'Normativas']
      },
      {
        name: 'Banca y Finanzas',
        description: 'Operaciones y servicios financieros',
        requiredSkills: ['Productos financieros', 'Análisis de riesgo', 'Atención al cliente', 'Normativa']
      },
      {
        name: 'Ingeniería Industrial',
        description: 'Optimización de procesos y sistemas productivos',
        requiredSkills: ['Procesos', 'Calidad', 'Logística', 'Mejora continua']
      },
      {
        name: 'Actuaría',
        description: 'Análisis de riesgos financieros y seguros',
        requiredSkills: ['Matemáticas', 'Estadística', 'Probabilidad', 'Modelos']
      },
      {
        name: 'Gestión de Operaciones',
        description: 'Administración de cadenas de suministro y logística',
        requiredSkills: ['Logística', 'Inventarios', 'Planeación', 'Sistemas']
      }
    ],
    values: ['Orden', 'Precisión', 'Estabilidad', 'Eficiencia'],
    developmentTips: [
      'Domina herramientas de gestión y organización',
      'Aprende sobre sistemas y procesos',
      'Desarrolla habilidades analíticas',
      'Mantente actualizado en normativas'
    ]
  }
];

// 36 Preguntas (6 por cada tipo RIASEC) con múltiples dimensiones
export const professionalQuestions: Question[] = [
  // REALISTA (R) - 6 preguntas
  { id: 1, text: 'Disfruto armar, reparar o construir cosas con mis manos', category: 'R', dimension: 'interests' },
  { id: 2, text: 'Me siento cómodo trabajando con herramientas, máquinas o equipos técnicos', category: 'R', dimension: 'skills' },
  { id: 3, text: 'Prefiero trabajos que requieran actividad física y movimiento', category: 'R', dimension: 'preferences' },
  { id: 4, text: 'Me gusta trabajar al aire libre o en talleres', category: 'R', dimension: 'preferences' },
  { id: 5, text: 'Valoro los resultados tangibles y concretos de mi trabajo', category: 'R', dimension: 'values' },
  { id: 6, text: 'Tengo habilidad para entender cómo funcionan las máquinas y sistemas mecánicos', category: 'R', dimension: 'skills' },

  // INVESTIGADOR (I) - 6 preguntas
  { id: 7, text: 'Me fascina investigar y descubrir cómo funcionan las cosas', category: 'I', dimension: 'interests' },
  { id: 8, text: 'Disfruto resolver problemas complejos que requieren análisis profundo', category: 'I', dimension: 'interests' },
  { id: 9, text: 'Tengo facilidad para las matemáticas y el pensamiento lógico', category: 'I', dimension: 'skills' },
  { id: 10, text: 'Me gusta leer sobre descubrimientos científicos y avances tecnológicos', category: 'I', dimension: 'interests' },
  { id: 11, text: 'Prefiero trabajar de forma independiente en proyectos que requieren concentración', category: 'I', dimension: 'preferences' },
  { id: 12, text: 'Valoro el conocimiento y la búsqueda de la verdad', category: 'I', dimension: 'values' },

  // ARTÍSTICO (A) - 6 preguntas
  { id: 13, text: 'Me considero una persona creativa e imaginativa', category: 'A', dimension: 'interests' },
  { id: 14, text: 'Disfruto expresarme a través del arte, diseño, música o escritura', category: 'A', dimension: 'interests' },
  { id: 15, text: 'Tengo buen ojo para la estética, los colores y las formas', category: 'A', dimension: 'skills' },
  { id: 16, text: 'Prefiero ambientes de trabajo flexibles donde pueda ser original', category: 'A', dimension: 'preferences' },
  { id: 17, text: 'Me gusta crear cosas nuevas y originales', category: 'A', dimension: 'interests' },
  { id: 18, text: 'Valoro la expresión personal y la innovación', category: 'A', dimension: 'values' },

  // SOCIAL (S) - 6 preguntas
  { id: 19, text: 'Me gusta ayudar a las personas con sus problemas', category: 'S', dimension: 'interests' },
  { id: 20, text: 'Disfruto enseñar o explicar cosas a otros', category: 'S', dimension: 'interests' },
  { id: 21, text: 'Tengo facilidad para entender las emociones y necesidades de los demás', category: 'S', dimension: 'skills' },
  { id: 22, text: 'Prefiero trabajar en equipo y colaborar con otros', category: 'S', dimension: 'preferences' },
  { id: 23, text: 'Me siento bien cuando puedo hacer una diferencia en la vida de alguien', category: 'S', dimension: 'values' },
  { id: 24, text: 'Tengo habilidades de comunicación y me gusta escuchar a otros', category: 'S', dimension: 'skills' },

  // EMPRENDEDOR (E) - 6 preguntas
  { id: 25, text: 'Me gusta liderar proyectos y tomar decisiones importantes', category: 'E', dimension: 'interests' },
  { id: 26, text: 'Disfruto persuadir y convencer a otros de mis ideas', category: 'E', dimension: 'interests' },
  { id: 27, text: 'Tengo habilidad para organizar y dirigir actividades', category: 'E', dimension: 'skills' },
  { id: 28, text: 'Me motivan los desafíos y alcanzar objetivos ambiciosos', category: 'E', dimension: 'values' },
  { id: 29, text: 'Prefiero roles donde pueda influir y tomar decisiones estratégicas', category: 'E', dimension: 'preferences' },
  { id: 30, text: 'Me visualizo dirigiendo mi propio negocio o proyecto', category: 'E', dimension: 'interests' },

  // CONVENCIONAL (C) - 6 preguntas
  { id: 31, text: 'Me gusta trabajar con datos, números y registros', category: 'C', dimension: 'interests' },
  { id: 32, text: 'Disfruto organizar información y mantener sistemas ordenados', category: 'C', dimension: 'interests' },
  { id: 33, text: 'Tengo atención al detalle y soy preciso en mi trabajo', category: 'C', dimension: 'skills' },
  { id: 34, text: 'Prefiero seguir procedimientos establecidos y trabajar de forma sistemática', category: 'C', dimension: 'preferences' },
  { id: 35, text: 'Valoro la eficiencia, el orden y la exactitud', category: 'C', dimension: 'values' },
  { id: 36, text: 'Me siento cómodo trabajando con software de gestión, hojas de cálculo o bases de datos', category: 'C', dimension: 'skills' }
];

export type TestAnswers = {
  [questionId: number]: LikertScale;
};

export type RIASECScores = {
  R: number;
  I: number;
  A: number;
  S: number;
  E: number;
  C: number;
};

export type DetailedResults = {
  scores: RIASECScores;
  percentages: {
    category: RIASECType;
    percentage: number;
    rawScore: number;
  }[];
  hollandCode: string; // Código de 3 letras (ej: "RIA", "SAE")
  primaryType: RIASECCategory;
  secondaryType: RIASECCategory;
  tertiaryType: RIASECCategory;
  consistency: number; // Medida de qué tan consistente es el perfil (0-100)
  recommendations: string[];
  topCareers: {
    name: string;
    description: string;
    matchPercentage: number;
    primaryReason: string;
    area?: string; // Área de estudio (Salud, Humanidades, etc.)
    duration?: string; // Duración de la carrera
    modalities?: string[]; // Modalidades disponibles
  }[];
};

// Función para calcular resultados profesionales
export function calculateProfessionalResults(answers: TestAnswers): DetailedResults {
  // Inicializar puntuaciones
  const scores: RIASECScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  // Calcular puntuaciones totales por categoría
  professionalQuestions.forEach(question => {
    const answer = answers[question.id];
    if (answer) {
      scores[question.category] += answer;
    }
  });

  // Calcular puntuación máxima posible por categoría (6 preguntas × 5 puntos = 30)
  const maxScorePerCategory = 30;
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

  // Calcular porcentajes
  const percentages = (Object.keys(scores) as RIASECType[])
    .map(category => ({
      category,
      rawScore: scores[category],
      percentage: Math.round((scores[category] / maxScorePerCategory) * 100)
    }))
    .sort((a, b) => b.percentage - a.percentage);

  // Obtener código Holland (3 letras más altas)
  const hollandCode = percentages.slice(0, 3).map(p => p.category).join('');

  // Obtener categorías principales
  const primaryType = riasecCategories.find(c => c.id === percentages[0].category)!;
  const secondaryType = riasecCategories.find(c => c.id === percentages[1].category)!;
  const tertiaryType = riasecCategories.find(c => c.id === percentages[2].category)!;

  // Calcular consistencia (qué tan diferenciado está el perfil)
  const consistency = calculateConsistency(percentages);

  // Generar recomendaciones personalizadas
  const recommendations = generateRecommendations(percentages, consistency);

  // Generar top carreras con match percentage
  const topCareers = generateTopCareers(percentages.slice(0, 3));

  return {
    scores,
    percentages,
    hollandCode,
    primaryType,
    secondaryType,
    tertiaryType,
    consistency,
    recommendations,
    topCareers
  };
}

function calculateConsistency(percentages: { category: RIASECType; percentage: number }[]): number {
  // La consistencia mide qué tan diferenciados están los puntajes
  // Un perfil con un tipo dominante claro tiene alta consistencia
  // Un perfil plano tiene baja consistencia

  const topThreeAvg = (percentages[0].percentage + percentages[1].percentage + percentages[2].percentage) / 3;
  const bottomThreeAvg = (percentages[3].percentage + percentages[4].percentage + percentages[5].percentage) / 3;

  const difference = topThreeAvg - bottomThreeAvg;

  // Normalizar a 0-100
  return Math.min(100, Math.max(0, Math.round(difference * 2)));
}

function generateRecommendations(
  percentages: { category: RIASECType; percentage: number }[],
  consistency: number
): string[] {
  const recommendations: string[] = [];

  const topCategory = riasecCategories.find(c => c.id === percentages[0].category)!;
  const topPercentage = percentages[0].percentage;

  // Recomendaciones basadas en perfil dominante
  if (topPercentage >= 80) {
    recommendations.push(
      `Tienes un perfil ${topCategory.name} muy definido. Enfócate en carreras especializadas en esta área.`
    );
  } else if (topPercentage >= 60) {
    recommendations.push(
      `Tu perfil ${topCategory.name} es claro. Considera carreras principales en esta área con complementos de tus intereses secundarios.`
    );
  } else {
    recommendations.push(
      `Tienes un perfil diversificado. Busca carreras interdisciplinarias que combinen tus múltiples intereses.`
    );
  }

  // Recomendaciones basadas en consistencia
  if (consistency >= 70) {
    recommendations.push(
      'Tu perfil es consistente y bien definido, lo que facilitará tu elección de carrera.'
    );
  } else if (consistency >= 40) {
    recommendations.push(
      'Tu perfil muestra intereses diversos. Esto te da flexibilidad para explorar diferentes opciones.'
    );
  } else {
    recommendations.push(
      'Tu perfil es muy equilibrado. Considera realizar actividades exploratorias en diferentes áreas antes de decidir.'
    );
  }

  // Recomendación de desarrollo
  recommendations.push(
    ...topCategory.developmentTips.slice(0, 2)
  );

  // Recomendación de exploración
  const secondCategory = riasecCategories.find(c => c.id === percentages[1].category)!;
  if (percentages[1].percentage >= 50) {
    recommendations.push(
      `También muestras afinidad ${secondCategory.name}. Explora carreras que combinen ambos perfiles.`
    );
  }

  return recommendations;
}

function generateTopCareers(
  topThreeTypes: { category: RIASECType; percentage: number }[]
): {
  name: string;
  description: string;
  matchPercentage: number;
  primaryReason: string;
}[] {
  // Convertir percentages a un objeto de scores para el cálculo
  const studentProfile: { [key: string]: number } = {};
  topThreeTypes.forEach(type => {
    studentProfile[type.category] = type.percentage;
  });

  // Calcular match para cada carrera de UDHI
  const careers = udhiCareers.map(career => {
    // Calcular compatibilidad basada en los tipos RIASEC de la carrera
    let matchScore = 0;
    career.primaryTypes.forEach((type, index) => {
      const weight = [0.5, 0.3, 0.2][index] || 0.1; // Pesos decrecientes
      const studentScore = studentProfile[type] || 0;
      matchScore += studentScore * weight;
    });

    // Bonus si el código Holland coincide exactamente
    const hollandCode = topThreeTypes.map(t => t.category).join('');
    const exactMatch = career.riasecProfile === hollandCode;
    if (exactMatch) {
      matchScore += 10;
    }

    // Bonus si los primeros 2 tipos coinciden
    const partialMatch = career.riasecProfile.substring(0, 2) === hollandCode.substring(0, 2);
    if (partialMatch && !exactMatch) {
      matchScore += 5;
    }

    const matchPercentage = Math.min(100, Math.round(matchScore));

    // Generar razón principal del match
    const primaryType = career.primaryTypes[0];
    const primaryCategory = riasecCategories.find(c => c.id === primaryType)!;
    const primaryReason = exactMatch
      ? `¡Match perfecto! Tu código ${hollandCode} coincide con esta carrera`
      : partialMatch
      ? `Excelente match con tu perfil ${primaryCategory.name} dominante`
      : `Compatible con tu perfil ${primaryCategory.name}`;

    return {
      name: career.name,
      description: career.description,
      matchPercentage,
      primaryReason,
      area: career.area, // Agregar área para contexto
      duration: career.duration, // Agregar duración
      modalities: career.modalities // Agregar modalidades
    };
  });

  // Ordenar por match percentage y tomar todas (mostraremos las 16 carreras)
  return careers
    .sort((a, b) => b.matchPercentage - a.matchPercentage);
}

// Escala Likert
export const likertOptions = [
  { value: 1 as LikertScale, label: 'Totalmente en desacuerdo', shortLabel: 'Muy bajo' },
  { value: 2 as LikertScale, label: 'En desacuerdo', shortLabel: 'Bajo' },
  { value: 3 as LikertScale, label: 'Neutral', shortLabel: 'Medio' },
  { value: 4 as LikertScale, label: 'De acuerdo', shortLabel: 'Alto' },
  { value: 5 as LikertScale, label: 'Totalmente de acuerdo', shortLabel: 'Muy alto' }
];
