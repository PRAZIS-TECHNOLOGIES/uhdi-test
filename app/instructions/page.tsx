'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Instructions() {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      router.push('/register');
      return;
    }
    const user = JSON.parse(userInfo);
    setUserName(user.nombre);
  }, [router]);

  const handleStart = () => {
    router.push('/test');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-200 shadow-md">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5">
          <Image
            src="/logo-udhi.svg"
            alt="UDHI - Universidad para el Desarrollo Humano e Integral"
            width={280}
            height={49}
            className="h-auto w-full max-w-[280px]"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-4 sm:p-8 lg:p-12 animate-fade-in">
          {/* Greeting */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0D47A1] to-[#1565C0] bg-clip-text text-transparent mb-3 sm:mb-4">
              ¡Hola, {userName}!
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">
              Estás por comenzar el Test Vocacional UDHI
            </p>
          </div>

          {/* Instructions */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1565C0] to-[#1E88E5] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">Responde con honestidad</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  No hay respuestas correctas o incorrectas. Lo importante es que refleje tus verdaderos intereses y preferencias.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1565C0] to-[#1E88E5] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Son 60 preguntas con frases de actividades</h3>
                <p className="text-gray-700 mb-3">
                  Verás frases como <span className="font-semibold">"Reparar equipos electrónicos"</span> o <span className="font-semibold">"Enseñar conceptos complejos"</span>.
                </p>
                <p className="text-gray-700">
                  Piensa: <span className="italic">"¿Qué tanto me gustaría realizar esta actividad?"</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1565C0] to-[#1E88E5] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Usa la escala del 1 al 5</h3>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#1565C0] text-lg w-6">1</span>
                    <span className="text-gray-700">= Totalmente en desacuerdo / No me gusta nada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#1565C0] text-lg w-6">2</span>
                    <span className="text-gray-700">= En desacuerdo / No me gusta mucho</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#1565C0] text-lg w-6">3</span>
                    <span className="text-gray-700">= Neutral / Me es indiferente</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#1565C0] text-lg w-6">4</span>
                    <span className="text-gray-700">= De acuerdo / Me gusta</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#1565C0] text-lg w-6">5</span>
                    <span className="text-gray-700">= Totalmente de acuerdo / Me gusta mucho</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1565C0] to-[#1E88E5] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Tómate tu tiempo</h3>
                <p className="text-gray-700">
                  El test toma aproximadamente <span className="font-semibold">10-15 minutos</span>. No hay límite de tiempo, pero responde con tu primera impresión.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border-2 border-amber-300">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-amber-900 text-lg mb-2">Importante</h3>
                <p className="text-amber-800">
                  El test incluye preguntas de validación para asegurar la calidad de tus resultados. Responde todas las preguntas con atención.
                </p>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              onClick={handleStart}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#1565C0] to-[#1E88E5] hover:from-[#0D47A1] hover:to-[#1565C0] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Comenzar Test
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
