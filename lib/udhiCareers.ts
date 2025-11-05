// Carreras específicas de UDHI mapeadas a perfiles RIASEC
// Universidad Digital del Estado de Hidalgo

export interface UDHICareer {
  id: string;
  name: string;
  area: 'Salud' | 'Humanidades' | 'Negocios' | 'Ingenierías';
  riasecProfile: string; // Código Holland de 2-3 letras
  primaryTypes: string[]; // Tipos RIASEC primarios
  description: string;
  competencies: string[];
  workEnvironment: string;
  duration: string;
  modalities: string[];
  profileMatch: string; // Descripción del perfil ideal del estudiante
}

export const udhiCareers: UDHICareer[] = [
  // ==================== ÁREA DE SALUD ====================
  {
    id: 'enfermeria',
    name: 'Licenciatura en Enfermería',
    area: 'Salud',
    riasecProfile: 'SIR',
    primaryTypes: ['S', 'I', 'R'],
    description: 'Forma profesionales del cuidado de la salud capacitados para promover, prevenir, curar y rehabilitar la salud individual y colectiva.',
    competencies: [
      'Cuidado integral del paciente',
      'Conocimientos médicos y farmacológicos',
      'Empatía y comunicación efectiva',
      'Trabajo bajo presión',
      'Ética profesional en salud'
    ],
    workEnvironment: 'Hospitales, clínicas, centros de salud, servicios de urgencias, cuidados domiciliarios',
    duration: '3 años + 1 año de servicio',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas con vocación de servicio, interés por ayudar a otros, capacidad para trabajar en equipo y resistencia emocional'
  },
  {
    id: 'estilismo-cosmetologia',
    name: 'Licenciatura en Estilismo y Cosmetología',
    area: 'Salud',
    riasecProfile: 'AES',
    primaryTypes: ['A', 'E', 'S'],
    description: 'Desarrolla profesionales especializados en tratamientos estéticos, imagen personal y bienestar, combinando conocimientos técnicos con creatividad artística.',
    competencies: [
      'Técnicas de estilismo y belleza',
      'Conocimientos dermatológicos',
      'Creatividad y sentido estético',
      'Atención personalizada al cliente',
      'Emprendimiento en el sector belleza'
    ],
    workEnvironment: 'Salones de belleza, spas, clínicas estéticas, televisión, eventos, consultoría de imagen',
    duration: '3 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas creativas con interés en la imagen personal, tendencias de moda y bienestar, con habilidades interpersonales'
  },
  {
    id: 'fisioterapia',
    name: 'Licenciatura en Fisioterapia',
    area: 'Salud',
    riasecProfile: 'SRI',
    primaryTypes: ['S', 'R', 'I'],
    description: 'Prepara especialistas en rehabilitación física que ayudan a pacientes a recuperar o mejorar su capacidad de movimiento y funcionalidad.',
    competencies: [
      'Evaluación y diagnóstico funcional',
      'Técnicas de terapia manual',
      'Diseño de programas de rehabilitación',
      'Anatomía y biomecánica',
      'Empatía y motivación al paciente'
    ],
    workEnvironment: 'Hospitales, centros de rehabilitación, clínicas deportivas, consultorios privados, equipos deportivos',
    duration: '4 años + 1 año de servicio',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas con interés en el cuerpo humano, el movimiento y ayudar en la recuperación de pacientes'
  },
  {
    id: 'nutricion',
    name: 'Licenciatura en Nutrición',
    area: 'Salud',
    riasecProfile: 'ISE',
    primaryTypes: ['I', 'S', 'E'],
    description: 'Forma expertos en alimentación y nutrición que promueven la salud a través de planes alimenticios personalizados y educación nutricional.',
    competencies: [
      'Evaluación del estado nutricional',
      'Diseño de planes alimenticios',
      'Conocimientos de bioquímica y metabolismo',
      'Educación en salud nutricional',
      'Prevención de enfermedades crónicas'
    ],
    workEnvironment: 'Hospitales, consultorios privados, centros deportivos, industria alimentaria, investigación',
    duration: '4 años + 1 año de servicio',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas interesadas en la ciencia de los alimentos, la salud preventiva y el bienestar integral'
  },
  {
    id: 'gestion-deportiva',
    name: 'Licenciatura en Gestión Deportiva',
    area: 'Salud',
    riasecProfile: 'ESR',
    primaryTypes: ['E', 'S', 'R'],
    description: 'Capacita profesionales para administrar organizaciones deportivas, planificar eventos y promover la actividad física y el deporte.',
    competencies: [
      'Administración de instalaciones deportivas',
      'Organización de eventos deportivos',
      'Marketing deportivo',
      'Entrenamiento y coaching',
      'Promoción de hábitos saludables'
    ],
    workEnvironment: 'Clubes deportivos, gimnasios, federaciones deportivas, eventos, centros de alto rendimiento',
    duration: '4 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas apasionadas por el deporte con habilidades de liderazgo y gestión organizacional'
  },

  // ==================== ÁREA DE HUMANIDADES ====================
  {
    id: 'criminologia-criminalistica',
    name: 'Licenciatura en Criminología y Criminalística',
    area: 'Humanidades',
    riasecProfile: 'ICS',
    primaryTypes: ['I', 'C', 'S'],
    description: 'Forma especialistas en el estudio del crimen, sus causas y la investigación científica de evidencias para el sistema de justicia.',
    competencies: [
      'Investigación criminológica',
      'Análisis de evidencias físicas',
      'Perfilación criminal',
      'Conocimientos forenses',
      'Pensamiento analítico y deductivo'
    ],
    workEnvironment: 'Ministerios públicos, policía investigadora, peritos forenses, consultoría privada, seguridad',
    duration: '4 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas con pensamiento analítico, interés en la justicia y capacidad para resolver problemas complejos'
  },
  {
    id: 'derecho',
    name: 'Licenciatura en Derecho',
    area: 'Humanidades',
    riasecProfile: 'ESC',
    primaryTypes: ['E', 'S', 'C'],
    description: 'Prepara abogados competentes en el conocimiento, interpretación y aplicación de las normas jurídicas para la defensa de derechos.',
    competencies: [
      'Interpretación y argumentación jurídica',
      'Litigio y representación legal',
      'Redacción de documentos legales',
      'Negociación y mediación',
      'Conocimiento del sistema judicial'
    ],
    workEnvironment: 'Despachos jurídicos, juzgados, notarías, empresas, gobierno, organismos internacionales',
    duration: '4 años',
    modalities: ['Escolarizada', 'Sabatina', '100% en línea'],
    profileMatch: 'Personas con habilidades de argumentación, interés en la justicia y capacidad para defender causas'
  },
  {
    id: 'arquitectura',
    name: 'Licenciatura en Arquitectura',
    area: 'Humanidades',
    riasecProfile: 'ARI',
    primaryTypes: ['A', 'R', 'I'],
    description: 'Forma diseñadores del espacio habitable que crean proyectos arquitectónicos funcionales, estéticos y sustentables.',
    competencies: [
      'Diseño arquitectónico y urbano',
      'Dibujo técnico y modelado 3D',
      'Conocimientos estructurales',
      'Gestión de proyectos constructivos',
      'Creatividad y visión espacial'
    ],
    workEnvironment: 'Despachos de arquitectura, construcción, diseño urbano, consultoría, obra pública',
    duration: '3 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas creativas con visión espacial, interés en el diseño y habilidades técnicas'
  },
  {
    id: 'idiomas',
    name: 'Licenciatura en Idiomas',
    area: 'Humanidades',
    riasecProfile: 'SAE',
    primaryTypes: ['S', 'A', 'E'],
    description: 'Desarrolla profesionales multilingües capacitados en la enseñanza, traducción e interpretación de lenguas extranjeras.',
    competencies: [
      'Dominio de múltiples idiomas',
      'Traducción e interpretación',
      'Enseñanza de lenguas',
      'Comunicación intercultural',
      'Análisis lingüístico'
    ],
    workEnvironment: 'Instituciones educativas, empresas multinacionales, traducción, turismo, diplomacia',
    duration: '3 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas con facilidad para los idiomas, interés en otras culturas y habilidades comunicativas'
  },
  {
    id: 'educacion',
    name: 'Licenciatura en Educación',
    area: 'Humanidades',
    riasecProfile: 'SAI',
    primaryTypes: ['S', 'A', 'I'],
    description: 'Forma educadores comprometidos con procesos de enseñanza-aprendizaje innovadores y el desarrollo integral de las personas.',
    competencies: [
      'Diseño de estrategias pedagógicas',
      'Evaluación del aprendizaje',
      'Psicología educativa',
      'Uso de tecnologías educativas',
      'Liderazgo educativo'
    ],
    workEnvironment: 'Escuelas, instituciones educativas, capacitación empresarial, educación en línea, investigación',
    duration: '3 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas con vocación docente, paciencia y pasión por transmitir conocimientos'
  },
  {
    id: 'diseno-interiores',
    name: 'Licenciatura en Diseño de Interiores',
    area: 'Humanidades',
    riasecProfile: 'AER',
    primaryTypes: ['A', 'E', 'R'],
    description: 'Capacita diseñadores especializados en crear espacios interiores funcionales, estéticos y que mejoren la calidad de vida.',
    competencies: [
      'Diseño de espacios interiores',
      'Selección de mobiliario y materiales',
      'Iluminación y color',
      'Dibujo técnico y renderizado',
      'Gestión de proyectos de interiorismo'
    ],
    workEnvironment: 'Estudios de diseño, arquitectura, retail, hoteles, consultoría, independiente',
    duration: '3 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas creativas con sentido estético, atención al detalle y visión espacial'
  },

  // ==================== ÁREA DE NEGOCIOS ====================
  {
    id: 'administracion-turistica-gastronomia',
    name: 'Licenciatura en Administración Turística y Gastronomía',
    area: 'Negocios',
    riasecProfile: 'ESA',
    primaryTypes: ['E', 'S', 'A'],
    description: 'Forma profesionales en gestión de servicios turísticos y gastronómicos con visión empresarial y orientación al cliente.',
    competencies: [
      'Administración de empresas turísticas',
      'Gestión hotelera y restaurantera',
      'Arte culinario y gastronomía',
      'Marketing turístico',
      'Atención y servicio al cliente'
    ],
    workEnvironment: 'Hoteles, restaurantes, agencias de viajes, turismo, eventos, consultoría gastronómica',
    duration: '3 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas con pasión por el servicio, la gastronomía y habilidades interpersonales'
  },
  {
    id: 'administracion-empresas',
    name: 'Licenciatura en Administración de Empresas',
    area: 'Negocios',
    riasecProfile: 'ECR',
    primaryTypes: ['E', 'C', 'R'],
    description: 'Prepara líderes empresariales con capacidad para administrar recursos, tomar decisiones estratégicas y gestionar organizaciones.',
    competencies: [
      'Planeación estratégica',
      'Gestión de recursos humanos',
      'Finanzas corporativas',
      'Marketing y ventas',
      'Liderazgo organizacional'
    ],
    workEnvironment: 'Empresas privadas, sector público, consultoría, emprendimiento, multinacionales',
    duration: '4 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas con visión de negocios, habilidades de liderazgo y capacidad para tomar decisiones'
  },
  {
    id: 'contaduria',
    name: 'Licenciatura en Contaduría',
    area: 'Negocios',
    riasecProfile: 'CEI',
    primaryTypes: ['C', 'E', 'I'],
    description: 'Forma contadores públicos expertos en información financiera, auditoría y cumplimiento fiscal para la toma de decisiones.',
    competencies: [
      'Contabilidad financiera y fiscal',
      'Auditoría y control interno',
      'Análisis financiero',
      'Normatividad contable',
      'Tecnologías contables'
    ],
    workEnvironment: 'Despachos contables, empresas, auditoría, consultoría fiscal, sector financiero',
    duration: '3 años y 4 meses',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas analíticas, organizadas, con habilidades numéricas y atención al detalle'
  },

  // ==================== ÁREA DE INGENIERÍAS ====================
  {
    id: 'ingenieria-industrial',
    name: 'Ingeniería Industrial',
    area: 'Ingenierías',
    riasecProfile: 'RIE',
    primaryTypes: ['R', 'I', 'E'],
    description: 'Forma ingenieros especializados en optimización de procesos productivos, gestión de operaciones y mejora de la eficiencia.',
    competencies: [
      'Optimización de procesos',
      'Control de calidad',
      'Gestión de la cadena de suministro',
      'Ingeniería de métodos',
      'Análisis y mejora continua'
    ],
    workEnvironment: 'Industria manufacturera, logística, producción, consultoría, plantas de fabricación',
    duration: '4 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas con pensamiento lógico, interés en la eficiencia y capacidad para resolver problemas complejos'
  },
  {
    id: 'ingenieria-sistemas',
    name: 'Ingeniería en Sistemas y Tecnologías de la Información',
    area: 'Ingenierías',
    riasecProfile: 'IRC',
    primaryTypes: ['I', 'R', 'C'],
    description: 'Desarrolla ingenieros expertos en diseño, desarrollo e implementación de sistemas computacionales y soluciones tecnológicas.',
    competencies: [
      'Programación y desarrollo de software',
      'Administración de bases de datos',
      'Redes y ciberseguridad',
      'Análisis de sistemas',
      'Gestión de proyectos TI'
    ],
    workEnvironment: 'Empresas tecnológicas, desarrollo de software, consultoría TI, startups, sector financiero',
    duration: '4 años',
    modalities: ['Escolarizada', 'Sabatina'],
    profileMatch: 'Personas con pensamiento lógico, interés en la tecnología y habilidades para resolver problemas'
  }
];

// Función para obtener carreras por área
export function getCareersByArea(area: UDHICareer['area']): UDHICareer[] {
  return udhiCareers.filter(career => career.area === area);
}

// Función para obtener carreras por tipo RIASEC
export function getCareersByRIASEC(riasecTypes: string[]): UDHICareer[] {
  return udhiCareers.filter(career =>
    riasecTypes.some(type => career.primaryTypes.includes(type))
  );
}

// Función para calcular compatibilidad entre perfil del estudiante y carrera
export function calculateCareerMatch(
  studentProfile: { [key: string]: number },
  career: UDHICareer
): number {
  const careerTypes = career.primaryTypes;
  let totalScore = 0;
  let weights = [0.5, 0.3, 0.2]; // Pesos para 1er, 2do y 3er tipo

  careerTypes.forEach((type, index) => {
    const weight = weights[index] || 0.1;
    totalScore += (studentProfile[type] || 0) * weight;
  });

  return Math.round(totalScore);
}
