'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DetailedResults, riasecCategories, RIASECType } from '@/lib/professionalVocationalTest';
import Image from 'next/image';

// Componente para el gráfico hexagonal de Holland
function HexagonChart({ percentages }: { percentages: DetailedResults['percentages'] }) {
  const size = 300;
  const center = size / 2;
  const radius = size / 2 - 40;

  // Calcular puntos del hexágono
  const getPoint = (index: number, value: number) => {
    const angle = (Math.PI / 3) * index - Math.PI / 2; // Comenzar desde arriba
    const distance = (value / 100) * radius;
    return {
      x: center + distance * Math.cos(angle),
      y: center + distance * Math.sin(angle)
    };
  };

  // Crear puntos para el polígono de resultados
  const resultPoints = percentages
    .map((p, i) => {
      const point = getPoint(i, p.percentage);
      return `${point.x},${point.y}`;
    })
    .join(' ');

  // Puntos para el hexágono de referencia (100%)
  const referencePoints = Array.from({ length: 6 }, (_, i) => {
    const point = getPoint(i, 100);
    return `${point.x},${point.y}`;
  }).join(' ');

  // Puntos para líneas de guía (50%)
  const guidePoints = Array.from({ length: 6 }, (_, i) => {
    const point = getPoint(i, 50);
    return `${point.x},${point.y}`;
  }).join(' ');

  return (
    <svg width={size} height={size} className="mx-auto">
      {/* Círculos de guía */}
      <circle cx={center} cy={center} r={radius * 0.25} fill="none" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx={center} cy={center} r={radius * 0.5} fill="none" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx={center} cy={center} r={radius * 0.75} fill="none" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx={center} cy={center} r={radius} fill="none" stroke="#d1d5db" strokeWidth="2" />

      {/* Líneas radiales */}
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

      {/* Hexágono de referencia */}
      <polygon points={referencePoints} fill="none" stroke="#d1d5db" strokeWidth="2" opacity="0.3" />

      {/* Polígono de resultados */}
      <polygon
        points={resultPoints}
        fill="url(#gradient)"
        stroke="#6366f1"
        strokeWidth="3"
        opacity="0.8"
      />

      {/* Puntos de datos */}
      {percentages.map((p, i) => {
        const point = getPoint(i, p.percentage);
        return (
          <g key={i}>
            <circle cx={point.x} cy={point.y} r="6" fill="#6366f1" stroke="white" strokeWidth="2" />
          </g>
        );
      })}

      {/* Etiquetas */}
      {percentages.map((p, i) => {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        const labelDistance = radius + 30;
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

      {/* Definir gradiente */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
        </linearGradient>
      </defs>
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

      // Enviar email automáticamente al cargar resultados
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
    router.push('/');
  };

  if (loading || !results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex items-center justify-center">
        <div className="text-white text-2xl">Analizando resultados...</div>
      </div>
    );
  }

  const getColorForCategory = (category: RIASECType) => {
    const colors = {
      R: 'bg-red-500',
      I: 'bg-blue-500',
      A: 'bg-purple-500',
      S: 'bg-green-500',
      E: 'bg-yellow-500',
      C: 'bg-gray-500'
    };
    return colors[category];
  };

  const getTextColorForCategory = (category: RIASECType) => {
    const colors = {
      R: 'text-red-600',
      I: 'text-blue-600',
      A: 'text-purple-600',
      S: 'text-green-600',
      E: 'text-yellow-600',
      C: 'text-gray-600'
    };
    return colors[category];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#029EDB]/5 via-blue-50 to-[#029EDB]/10 p-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo-udhi.svg"
              alt="UDHI Logo"
              width={200}
              height={60}
              className="h-16 w-auto"
            />
          </div>
          <div className="inline-block bg-[#029EDB] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Resultados del Test Profesional
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Tu Perfil Vocacional RIASEC
          </h1>
          <p className="text-lg text-gray-600">
            Universidad UDHI - Test Basado en el Modelo de Holland
          </p>
          {emailSent && (
            <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Resultados enviados a tu correo
            </div>
          )}
        </div>

        {/* Holland Code Card */}
        <div className="bg-gradient-to-br from-[#029EDB] to-[#0284c7] rounded-3xl shadow-2xl p-8 mb-6 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Tu Código Holland</h2>
            <div className="text-7xl font-bold tracking-widest mb-4">
              {results.hollandCode}
            </div>
            <p className="text-white/90 text-lg mb-6">
              Este código de 3 letras representa tu perfil vocacional único
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">{results.percentages[0].percentage}%</div>
                <div className="text-sm text-white/90">{results.primaryType.name}</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">{results.percentages[1].percentage}%</div>
                <div className="text-sm text-white/90">{results.secondaryType.name}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold">{results.percentages[2].percentage}%</div>
                <div className="text-sm text-white/90">{results.tertiaryType.name}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Hexagon Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Gráfico Hexagonal de Holland
            </h3>
            <p className="text-gray-600 text-sm text-center mb-6">
              Visualización de tus puntuaciones en las 6 dimensiones RIASEC
            </p>
            <HexagonChart percentages={results.percentages} />
            <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
              {results.percentages.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getColorForCategory(p.category)}`}></div>
                  <span className="font-semibold">{p.category}:</span>
                  <span className="text-gray-600">{p.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Type Description */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Tu Perfil Principal: {results.primaryType.fullName}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {results.primaryType.description}
            </p>

            <h4 className="font-bold text-gray-800 mb-3">Características Clave:</h4>
            <ul className="space-y-2 mb-6">
              {results.primaryType.characteristics.map((char, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#029EDB] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{char}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#029EDB]/10 rounded-xl p-4">
              <h4 className="font-bold text-gray-800 mb-2">Ambiente Laboral Ideal:</h4>
              <p className="text-[#029EDB] text-sm">
                {results.primaryType.workEnvironment}
              </p>
            </div>
          </div>
        </div>

        {/* All Dimensions Scores */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Puntuación Detallada por Dimensión
          </h3>

          <div className="space-y-6">
            {results.percentages.map((result, index) => {
              const category = riasecCategories.find(c => c.id === result.category)!;
              return (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full ${getColorForCategory(result.category)} flex items-center justify-center text-white font-bold text-xl`}>
                        {result.category}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">
                          {category.fullName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${getTextColorForCategory(result.category)}`}>
                        {result.percentage}%
                      </div>
                      <div className="text-xs text-gray-500">
                        {result.rawScore}/30 puntos
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                    <div
                      className={`h-4 rounded-full transition-all duration-500 ${getColorForCategory(result.category)}`}
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>

                  {/* Mini career preview */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {category.careers.slice(0, 4).map((career, careerIndex) => (
                      <span
                        key={careerIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {career.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Career Recommendations */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Carreras Recomendadas para Ti
          </h3>
          <p className="text-gray-600 mb-6">
            Basadas en tu perfil {results.hollandCode}, estas son las carreras con mayor compatibilidad
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {results.topCareers.map((career, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl p-5 hover:border-[#029EDB] hover:shadow-lg transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-gray-800 text-lg flex-1">
                    {career.name}
                  </h4>
                  <div className="bg-[#029EDB]/20 text-[#029EDB] px-3 py-1 rounded-full text-sm font-bold">
                    {career.matchPercentage}%
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {career.description}
                </p>
                <div className="bg-[#029EDB]/10 text-[#029EDB] text-xs px-3 py-2 rounded-lg">
                  {career.primaryReason}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personalized Recommendations */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-6 md:p-8 mb-6 border border-amber-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <svg className="w-7 h-7 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Recomendaciones Personalizadas
          </h3>
          <p className="text-gray-600 mb-6">
            Índice de Consistencia: <strong>{results.consistency}%</strong> -
            {results.consistency >= 70 ? ' Perfil bien definido' :
             results.consistency >= 40 ? ' Perfil equilibrado' :
             ' Perfil diversificado'}
          </p>

          <div className="space-y-3">
            {results.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700">
                  {rec}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Tips */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Consejos de Desarrollo para Perfil {results.primaryType.name}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {results.primaryType.developmentTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#029EDB]/10 rounded-xl p-4">
                <svg className="w-6 h-6 text-[#029EDB] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button
            onClick={handleRestart}
            className="bg-white hover:bg-gray-100 text-[#029EDB] font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg border-2 border-[#029EDB]/30"
          >
            Realizar Test Nuevamente
          </button>
          <button
            onClick={() => window.print()}
            className="bg-gradient-to-r from-[#029EDB] to-[#0284c7] hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg"
          >
            Descargar Resultados (PDF)
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p className="text-sm mb-2">
            Test Vocacional Profesional UDHI - Basado en el Modelo RIASEC de John L. Holland
          </p>
          <p className="text-xs text-gray-500">
            Este test es una herramienta de orientación. Se recomienda complementar con asesoría vocacional profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
