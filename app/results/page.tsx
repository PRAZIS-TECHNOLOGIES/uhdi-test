'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DetailedResults, riasecCategories, RIASECType } from '@/lib/professionalVocationalTestV3';
import Image from 'next/image';

// Componente de gráfico hexagonal simplificado
function HexagonChart({ percentages }: { percentages: DetailedResults['percentages'] }) {
  const size = 280;
  const center = size / 2;
  const radius = size / 2 - 30;

  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI / 3) * index - Math.PI / 2;
    const distance = (value / 100) * radius;
    return {
      x: center + distance * Math.cos(angle),
      y: center + distance * Math.sin(angle)
    };
  };

  const resultPoints = percentages
    .map((p, i) => {
      const point = getPoint(i, p.percentage);
      return `${point.x},${point.y}`;
    })
    .join(' ');

  return (
    <svg width={size} height={size} className="mx-auto">
      {/* Grid circles */}
      {[0.25, 0.5, 0.75, 1].map((factor, i) => (
        <circle
          key={i}
          cx={center}
          cy={center}
          r={radius * factor}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      ))}

      {/* Radial lines */}
      {Array.from({ length: 6 }, (_, i) => {
        const point = getPoint(i, 100);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={point.x}
            y2={point.y}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        );
      })}

      {/* Data polygon */}
      <polygon
        points={resultPoints}
        fill="url(#blueGradient)"
        fillOpacity="0.15"
        stroke="#1565C0"
        strokeWidth="3"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#1E88E5" />
        </linearGradient>
      </defs>

      {/* Data points */}
      {percentages.map((p, i) => {
        const point = getPoint(i, p.percentage);
        return (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#1565C0"
            stroke="white"
            strokeWidth="3"
          />
        );
      })}

      {/* Labels */}
      {percentages.map((p, i) => {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        const labelDistance = radius + 25;
        const x = center + labelDistance * Math.cos(angle);
        const y = center + labelDistance * Math.sin(angle);

        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs font-bold fill-gray-700"
          >
            {p.category}
          </text>
        );
      })}
    </svg>
  );
}

export default function Results() {
  const router = useRouter();
  const [results, setResults] = useState<DetailedResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  useEffect(() => {
    const storedResults = localStorage.getItem('professionalVocationalResults');
    const userInfo = localStorage.getItem('userInfo');

    if (storedResults && userInfo) {
      const parsedResults = JSON.parse(storedResults);
      setResults(parsedResults);
      setLoading(false);

      // Enviar email automáticamente
      sendEmailWithResults(JSON.parse(userInfo), parsedResults);
    } else {
      router.push('/register');
    }
  }, [router]);

  const sendEmailWithResults = async (userInfo: any, results: DetailedResults) => {
    try {
      setSendingEmail(true);
      const response = await fetch('/api/send-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInfo, results }),
      });

      const data = await response.json();
      if (data.success) {
        setEmailSent(true);
      }
    } catch (error) {
      console.error('Error al enviar email:', error);
    } finally {
      setSendingEmail(false);
    }
  };

  const handleRestart = () => {
    localStorage.removeItem('professionalVocationalResults');
    localStorage.removeItem('userInfo');
    router.push('/register');
  };

  if (loading || !results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-[#1565C0] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium text-lg">Analizando resultados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="border-b-2 border-gray-200 bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <Image
              src="/logo-udhi.svg"
              alt="UDHI - Universidad para el Desarrollo Humano e Integral"
              width={280}
              height={49}
              className="h-auto w-full max-w-[280px]"
              priority
            />
            {emailSent && (
              <div className="flex items-center gap-2 text-sm text-green-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Resultados enviados
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1565C0] to-[#1E88E5] px-5 py-2 rounded-full text-sm font-semibold text-white mb-6 shadow-lg">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Evaluación Completada
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0D47A1] to-[#1565C0] bg-clip-text text-transparent mb-6">
              Tu Perfil Vocacional UDHI
            </h1>
            <p className="text-xl text-gray-700 font-medium mb-8">
              Basado en el modelo RIASEC de Holland • Test Vocacional UDHI
            </p>

            {/* Holland Code Display */}
            <div className="inline-flex items-center gap-8 bg-white border-2 border-gray-200 rounded-2xl px-12 py-8 shadow-xl hover:shadow-2xl transition-shadow animate-scale-in">
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">Tu Código Holland</div>
                <div className="text-6xl font-bold bg-gradient-to-r from-[#1565C0] to-[#1E88E5] bg-clip-text text-transparent tracking-wider">
                  {results.hollandCode}
                </div>
              </div>
              <div className="w-px h-16 bg-gray-200"></div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-500 mb-2">Perfil Principal</div>
                <div className="text-2xl font-bold text-gray-900">
                  {results.primaryType.name}
                </div>
                <div className="text-lg text-gray-600">
                  {results.percentages[0].percentage}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Alert */}
      {results.validation && results.validation.recommendation !== 'VALID' && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className={`rounded-xl p-6 border-2 ${
            results.validation.recommendation === 'CAUTION'
              ? 'bg-yellow-50 border-yellow-300'
              : 'bg-red-50 border-red-300'
          }`}>
            <div className="flex items-start gap-4">
              <svg className={`w-6 h-6 flex-shrink-0 ${
                results.validation.recommendation === 'CAUTION' ? 'text-yellow-600' : 'text-red-600'
              }`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div className="flex-1">
                <h3 className={`font-bold mb-2 ${
                  results.validation.recommendation === 'CAUTION' ? 'text-yellow-900' : 'text-red-900'
                }`}>
                  {results.validation.recommendation === 'CAUTION'
                    ? '⚠️ Resultados con Precaución'
                    : '❌ Resultados No Confiables'}
                </h3>
                <p className={`text-sm mb-3 ${
                  results.validation.recommendation === 'CAUTION' ? 'text-yellow-800' : 'text-red-800'
                }`}>
                  {results.validation.recommendation === 'CAUTION'
                    ? 'Se detectaron algunas inconsistencias menores en tus respuestas. Los resultados son utilizables pero te recomendamos revisarlos con cuidado.'
                    : 'Se detectaron múltiples inconsistencias en tus respuestas. Te recomendamos retomar el test con más atención para obtener resultados confiables.'}
                </p>
                <div className="text-xs space-y-1">
                  {results.validation.warnings.map((warning, i) => (
                    <div key={i} className={`${
                      results.validation.recommendation === 'CAUTION' ? 'text-yellow-700' : 'text-red-700'
                    }`}>
                      • {warning === 'INFREQUENCY_HIGH' && 'Respuestas improbables detectadas'}
                      {warning === 'INFREQUENCY_MODERATE' && 'Algunas respuestas inusuales'}
                      {warning === 'INCONSISTENCY_HIGH' && 'Respuestas contradictorias detectadas'}
                      {warning === 'INCONSISTENCY_MODERATE' && 'Algunas inconsistencias en respuestas'}
                      {warning === 'LOW_VARIANCE' && 'Baja variación en respuestas'}
                      {warning === 'ACQUIESCENCE_HIGH' && 'Tendencia a responder siempre positivo'}
                      {warning === 'ACQUIESCENCE_LOW' && 'Tendencia a responder siempre negativo'}
                      {warning === 'TOO_FAST' && 'Test completado muy rápidamente'}
                      {warning === 'TOO_SLOW' && 'Tiempo de completación inusualmente largo'}
                    </div>
                  ))}
                </div>
                {results.validation.recommendation === 'INVALID' && (
                  <button
                    onClick={() => router.push('/register')}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Retomar Test
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Test Quality Indicator */}
      {results.validation && results.validation.recommendation === 'VALID' && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div className="flex-1">
                <span className="text-sm font-semibold text-green-900">✅ Resultados Validados</span>
                <p className="text-xs text-green-700 mt-1">
                  Tus respuestas pasaron todas las verificaciones de consistencia. Resultados confiables.
                  {results.validation.details.completionTime && (
                    <span className="ml-2">
                      Tiempo: {Math.round(results.validation.details.completionTime / 60)} minutos
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:border-[#1565C0]">
            <div className="text-sm font-semibold text-gray-500 mb-1">Consistencia</div>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gray-900">
                {results.consistency === 3 ? 'Alta' : results.consistency === 2 ? 'Media' : 'Baja'}
              </div>
              <div className="text-sm text-gray-500 mb-1">({results.consistency}/3)</div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {results.consistency === 3 && 'Tus intereses principales son muy coherentes'}
              {results.consistency === 2 && 'Tus intereses tienen buena compatibilidad'}
              {results.consistency === 1 && 'Tienes intereses diversos y variados'}
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:border-[#1565C0]">
            <div className="text-sm font-semibold text-gray-500 mb-1">Diferenciación</div>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gray-900">{results.differentiation}%</div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {results.differentiation >= 40 && 'Perfil especializado - Intereses muy definidos'}
              {results.differentiation >= 25 && results.differentiation < 40 && 'Perfil balanceado - Especialización moderada'}
              {results.differentiation < 25 && 'Perfil generalista - Intereses amplios'}
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:border-[#1565C0]">
            <div className="text-sm font-semibold text-gray-500 mb-1">Percentil Principal</div>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-gray-900">{results.percentages[0].percentile}</div>
              <div className="text-sm text-gray-500 mb-1">percentil</div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {results.percentages[0].percentile >= 85 && 'Excepcionalmente alto - Top 15%'}
              {results.percentages[0].percentile >= 70 && results.percentages[0].percentile < 85 && 'Bien definido - Top 30%'}
              {results.percentages[0].percentile >= 50 && results.percentages[0].percentile < 70 && 'Por encima del promedio'}
              {results.percentages[0].percentile < 50 && 'Perfil diversificado'}
            </p>
          </div>
        </div>

        {/* Profile Summary Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Chart */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Análisis Multidimensional</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <HexagonChart percentages={results.percentages} />
              <div className="grid grid-cols-2 gap-3 mt-6">
                {results.percentages.map((p, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-br from-[#1565C0] to-[#1E88E5] rounded-full shadow-sm"></div>
                      <span className="font-semibold text-gray-700">{p.category}:</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-900 font-semibold">{p.percentage}%</div>
                      <div className="text-xs text-gray-500">P{p.percentile}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{results.primaryType.fullName}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {results.primaryType.description}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Características Clave</h3>
                <div className="grid gap-2">
                  {results.primaryType.characteristics.slice(0, 4).map((char, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#1565C0] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Ambiente Laboral Ideal</h3>
                <p className="text-gray-700">{results.primaryType.workEnvironment}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Careers - UDHI */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Carreras UDHI Recomendadas</h2>
            <p className="text-lg text-gray-600">
              Basadas en tu código {results.hollandCode} - Todas las opciones disponibles en UDHI
            </p>
          </div>

          {/* Top 3 Carreras destacadas */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">⭐ Mejores Matches</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {results.topCareers.slice(0, 3).map((career, index) => (
                <div
                  key={index}
                  className="relative border-2 border-[#1565C0] rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-scale-in"
                >
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#1565C0] to-[#1E88E5] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    #{index + 1}
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-900 text-lg pr-8">
                      {career.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gradient-to-r from-[#1565C0] to-[#1E88E5] bg-clip-text text-transparent font-bold text-3xl">
                      {career.matchPercentage}%
                    </span>
                    <span className="text-sm text-gray-600 font-medium">compatibilidad</span>
                  </div>
                  {career.area && (
                    <div className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 mb-3">
                      Área de {career.area}
                    </div>
                  )}
                  <p className="text-gray-600 text-sm mb-4">
                    {career.description}
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{career.duration}</span>
                    </div>
                    <div className="text-gray-500 italic">
                      {career.primaryReason}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Todas las demás carreras agrupadas por área */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Todas las Carreras UDHI por Área</h3>
            {['Salud', 'Humanidades', 'Negocios', 'Ingenierías'].map(area => {
              const careersInArea = results.topCareers.filter(c => c.area === area);
              if (careersInArea.length === 0) return null;

              return (
                <div key={area} className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-lg font-bold text-gray-900">Área de {area}</h4>
                    <span className="text-sm text-gray-500">({careersInArea.length} carreras)</span>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {careersInArea.map((career, index) => (
                      <div
                        key={index}
                        className="group border-2 border-gray-200 rounded-xl p-5 hover:border-[#1565C0] hover:shadow-lg transition-all bg-white"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-bold text-gray-900 text-base group-hover:text-[#1565C0] transition-colors leading-tight">
                            {career.name}
                          </h5>
                          <span className="text-[#1565C0] font-bold text-base ml-2 flex-shrink-0">
                            {career.matchPercentage}%
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                          {career.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{career.duration}</span>
                        </div>
                        {career.modalities && career.modalities.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {career.modalities.map((mod, i) => (
                              <span key={i} className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
                                {mod}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Scores */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Desglose por Dimensión</h2>
          <div className="space-y-6">
            {results.percentages.map((result, index) => {
              const category = riasecCategories.find(c => c.id === result.category)!;
              return (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">{result.category}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {category.fullName}
                        </h3>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#1565C0] to-[#1E88E5] bg-clip-text text-transparent">
                        {result.percentage}%
                      </div>
                      <div className="text-sm text-gray-600 font-semibold">Percentil {result.percentile}</div>
                      <div className="text-xs text-gray-500">{result.rawScore}/50 pts</div>
                    </div>
                  </div>
                  <div className="relative w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#1565C0] to-[#1E88E5] transition-all shadow-sm"
                      style={{ width: `${result.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recomendaciones Personalizadas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {results.recommendations.map((rec, index) => (
              <div key={index} className="flex gap-3 bg-white rounded-lg p-4">
                <div className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRestart}
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 hover:border-gray-400 transition-all shadow-md hover:shadow-lg"
          >
            Realizar Nuevamente
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-4 bg-gradient-to-r from-[#1565C0] to-[#1E88E5] text-white font-bold rounded-xl hover:from-[#0D47A1] hover:to-[#1565C0] transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Descargar PDF
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-600">
            Test Vocacional Profesional UDHI - Basado en el Modelo RIASEC de John L. Holland
          </p>
        </div>
      </div>
    </div>
  );
}
