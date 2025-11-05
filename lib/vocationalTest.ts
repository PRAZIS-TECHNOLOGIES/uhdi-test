// Tipos para el test vocacional
export type Category = {
  id: string;
  name: string;
  description: string;
  careers: string[];
};

export type Question = {
  id: number;
  text: string;
  options: {
    text: string;
    scores: { [categoryId: string]: number };
  }[];
};

// Categorías vocacionales
export const categories: Category[] = [
  {
    id: 'creativo',
    name: 'Creativo/Artístico',
    description: 'Personas con habilidades artísticas, imaginación y expresión creativa',
    careers: ['Diseño Gráfico', 'Arquitectura', 'Publicidad', 'Artes Visuales', 'Diseño de Interiores']
  },
  {
    id: 'analitico',
    name: 'Analítico/Científico',
    description: 'Personas con pensamiento lógico, análisis y resolución de problemas',
    careers: ['Ingeniería', 'Matemáticas', 'Física', 'Química', 'Ciencias de la Computación']
  },
  {
    id: 'social',
    name: 'Social/Humanístico',
    description: 'Personas orientadas a ayudar y trabajar con otros',
    careers: ['Psicología', 'Trabajo Social', 'Educación', 'Enfermería', 'Recursos Humanos']
  },
  {
    id: 'emprendedor',
    name: 'Emprendedor/Empresarial',
    description: 'Personas con liderazgo, visión de negocios y capacidad de gestión',
    careers: ['Administración de Empresas', 'Marketing', 'Finanzas', 'Economía', 'Negocios Internacionales']
  },
  {
    id: 'tecnico',
    name: 'Técnico/Práctico',
    description: 'Personas hábiles con herramientas, maquinaria y trabajo manual',
    careers: ['Ingeniería Industrial', 'Mecánica', 'Electrónica', 'Construcción', 'Tecnología']
  },
  {
    id: 'investigador',
    name: 'Investigador/Académico',
    description: 'Personas con curiosidad intelectual y deseo de descubrir conocimiento',
    careers: ['Medicina', 'Biología', 'Investigación Científica', 'Derecho', 'Historia']
  }
];

// Preguntas del test vocacional
export const questions: Question[] = [
  {
    id: 1,
    text: '¿Qué actividad disfrutas más en tu tiempo libre?',
    options: [
      { text: 'Dibujar, pintar o diseñar cosas', scores: { creativo: 3, analitico: 0, social: 0, emprendedor: 0, tecnico: 1, investigador: 0 } },
      { text: 'Resolver acertijos o problemas matemáticos', scores: { creativo: 0, analitico: 3, social: 0, emprendedor: 0, tecnico: 1, investigador: 2 } },
      { text: 'Ayudar a amigos con sus problemas', scores: { creativo: 0, analitico: 0, social: 3, emprendedor: 1, tecnico: 0, investigador: 0 } },
      { text: 'Organizar eventos o liderar grupos', scores: { creativo: 1, analitico: 0, social: 1, emprendedor: 3, tecnico: 0, investigador: 0 } }
    ]
  },
  {
    id: 2,
    text: '¿Cuál de estas materias te resulta más interesante?',
    options: [
      { text: 'Arte, música o literatura', scores: { creativo: 3, analitico: 0, social: 1, emprendedor: 0, tecnico: 0, investigador: 1 } },
      { text: 'Matemáticas o ciencias', scores: { creativo: 0, analitico: 3, social: 0, emprendedor: 0, tecnico: 2, investigador: 2 } },
      { text: 'Historia o ciencias sociales', scores: { creativo: 1, analitico: 0, social: 2, emprendedor: 1, tecnico: 0, investigador: 3 } },
      { text: 'Educación física o talleres prácticos', scores: { creativo: 0, analitico: 0, social: 1, emprendedor: 1, tecnico: 3, investigador: 0 } }
    ]
  },
  {
    id: 3,
    text: '¿Cómo prefieres trabajar en un proyecto?',
    options: [
      { text: 'De forma creativa, sin muchas reglas', scores: { creativo: 3, analitico: 0, social: 0, emprendedor: 1, tecnico: 0, investigador: 1 } },
      { text: 'Siguiendo un método sistemático y lógico', scores: { creativo: 0, analitico: 3, social: 0, emprendedor: 1, tecnico: 2, investigador: 2 } },
      { text: 'En equipo, colaborando con otros', scores: { creativo: 1, analitico: 0, social: 3, emprendedor: 2, tecnico: 0, investigador: 0 } },
      { text: 'Con herramientas y construyendo cosas', scores: { creativo: 1, analitico: 1, social: 0, emprendedor: 0, tecnico: 3, investigador: 0 } }
    ]
  },
  {
    id: 4,
    text: '¿Qué tipo de ambiente laboral prefieres?',
    options: [
      { text: 'Un estudio creativo o taller artístico', scores: { creativo: 3, analitico: 0, social: 0, emprendedor: 0, tecnico: 1, investigador: 0 } },
      { text: 'Un laboratorio o centro de investigación', scores: { creativo: 0, analitico: 2, social: 0, emprendedor: 0, tecnico: 1, investigador: 3 } },
      { text: 'Una oficina trabajando con personas', scores: { creativo: 0, analitico: 0, social: 3, emprendedor: 2, tecnico: 0, investigador: 0 } },
      { text: 'Una empresa propia o startup', scores: { creativo: 1, analitico: 1, social: 1, emprendedor: 3, tecnico: 0, investigador: 0 } }
    ]
  },
  {
    id: 5,
    text: '¿Cuál de estas habilidades describes mejor?',
    options: [
      { text: 'Tengo buena imaginación y originalidad', scores: { creativo: 3, analitico: 0, social: 0, emprendedor: 1, tecnico: 0, investigador: 1 } },
      { text: 'Soy bueno analizando y resolviendo problemas', scores: { creativo: 0, analitico: 3, social: 0, emprendedor: 1, tecnico: 2, investigador: 2 } },
      { text: 'Me comunico bien y entiendo a las personas', scores: { creativo: 1, analitico: 0, social: 3, emprendedor: 2, tecnico: 0, investigador: 0 } },
      { text: 'Soy hábil con las manos y herramientas', scores: { creativo: 1, analitico: 0, social: 0, emprendedor: 0, tecnico: 3, investigador: 0 } }
    ]
  },
  {
    id: 6,
    text: '¿Qué actividad te gustaría hacer en un futuro trabajo?',
    options: [
      { text: 'Diseñar, crear contenido visual o musical', scores: { creativo: 3, analitico: 0, social: 0, emprendedor: 0, tecnico: 0, investigador: 0 } },
      { text: 'Investigar, experimentar y descubrir cosas nuevas', scores: { creativo: 0, analitico: 2, social: 0, emprendedor: 0, tecnico: 1, investigador: 3 } },
      { text: 'Enseñar, aconsejar o cuidar a otros', scores: { creativo: 0, analitico: 0, social: 3, emprendedor: 0, tecnico: 0, investigador: 1 } },
      { text: 'Dirigir proyectos y tomar decisiones estratégicas', scores: { creativo: 0, analitico: 1, social: 1, emprendedor: 3, tecnico: 0, investigador: 0 } }
    ]
  },
  {
    id: 7,
    text: '¿Cuál de estos programas de TV o contenido prefieres?',
    options: [
      { text: 'Programas de diseño, moda o arte', scores: { creativo: 3, analitico: 0, social: 0, emprendedor: 1, tecnico: 0, investigador: 0 } },
      { text: 'Documentales científicos o tecnológicos', scores: { creativo: 0, analitico: 2, social: 0, emprendedor: 0, tecnico: 2, investigador: 3 } },
      { text: 'Programas de ayuda social o reality shows', scores: { creativo: 0, analitico: 0, social: 3, emprendedor: 1, tecnico: 0, investigador: 0 } },
      { text: 'Programas de negocios o emprendimiento', scores: { creativo: 0, analitico: 1, social: 0, emprendedor: 3, tecnico: 0, investigador: 0 } }
    ]
  },
  {
    id: 8,
    text: '¿Cómo te ves en 10 años?',
    options: [
      { text: 'Como un artista o diseñador reconocido', scores: { creativo: 3, analitico: 0, social: 0, emprendedor: 1, tecnico: 0, investigador: 0 } },
      { text: 'Como un científico o ingeniero innovador', scores: { creativo: 0, analitico: 3, social: 0, emprendedor: 0, tecnico: 2, investigador: 3 } },
      { text: 'Como un profesional ayudando a la comunidad', scores: { creativo: 0, analitico: 0, social: 3, emprendedor: 0, tecnico: 0, investigador: 1 } },
      { text: 'Como dueño de mi propio negocio', scores: { creativo: 1, analitico: 0, social: 0, emprendedor: 3, tecnico: 1, investigador: 0 } }
    ]
  },
  {
    id: 9,
    text: '¿Qué te motiva más al elegir una carrera?',
    options: [
      { text: 'Expresar mi creatividad y originalidad', scores: { creativo: 3, analitico: 0, social: 0, emprendedor: 0, tecnico: 0, investigador: 0 } },
      { text: 'Resolver problemas complejos y desafiantes', scores: { creativo: 0, analitico: 3, social: 0, emprendedor: 1, tecnico: 1, investigador: 2 } },
      { text: 'Hacer una diferencia en la vida de las personas', scores: { creativo: 0, analitico: 0, social: 3, emprendedor: 0, tecnico: 0, investigador: 1 } },
      { text: 'Tener éxito financiero y reconocimiento', scores: { creativo: 0, analitico: 0, social: 0, emprendedor: 3, tecnico: 1, investigador: 0 } }
    ]
  },
  {
    id: 10,
    text: '¿Qué herramienta o recurso usarías más?',
    options: [
      { text: 'Software de diseño, cámara o instrumentos musicales', scores: { creativo: 3, analitico: 0, social: 0, emprendedor: 0, tecnico: 1, investigador: 0 } },
      { text: 'Calculadora, software de análisis o equipo de laboratorio', scores: { creativo: 0, analitico: 3, social: 0, emprendedor: 0, tecnico: 2, investigador: 3 } },
      { text: 'Teléfono, redes sociales o espacios de reunión', scores: { creativo: 0, analitico: 0, social: 3, emprendedor: 2, tecnico: 0, investigador: 0 } },
      { text: 'Herramientas manuales, maquinaria o equipo técnico', scores: { creativo: 0, analitico: 1, social: 0, emprendedor: 0, tecnico: 3, investigador: 0 } }
    ]
  }
];

// Función para calcular resultados
export function calculateResults(answers: { [questionId: number]: number }) {
  const scores: { [categoryId: string]: number } = {
    creativo: 0,
    analitico: 0,
    social: 0,
    emprendedor: 0,
    tecnico: 0,
    investigador: 0
  };

  // Calcular puntuaciones totales
  Object.entries(answers).forEach(([questionId, optionIndex]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (question && question.options[optionIndex]) {
      const optionScores = question.options[optionIndex].scores;
      Object.entries(optionScores).forEach(([categoryId, score]) => {
        scores[categoryId] += score;
      });
    }
  });

  // Calcular el total de puntos
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

  // Calcular porcentajes
  const percentages = Object.entries(scores).map(([categoryId, score]) => ({
    category: categories.find(c => c.id === categoryId)!,
    score,
    percentage: totalScore > 0 ? Math.round((score / totalScore) * 100) : 0
  }));

  // Ordenar por porcentaje descendente
  percentages.sort((a, b) => b.percentage - a.percentage);

  return percentages;
}
