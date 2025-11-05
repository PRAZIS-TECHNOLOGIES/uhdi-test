'use client';

import { useState, useEffect } from 'react';
import {
  professionalQuestions,
  likertOptions,
  calculateProfessionalResults,
  LikertScale,
  TestAnswers
} from '@/lib/professionalVocationalTestV3';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Test() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<TestAnswers>({});
  const [selectedOption, setSelectedOption] = useState<LikertScale | null>(null);
  const [userName, setUserName] = useState('');
  const [startTime, setStartTime] = useState<number>(0);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      router.push('/register');
      return;
    }
    const user = JSON.parse(userInfo);
    setUserName(`${user.nombre} ${user.apellido}`);

    // Iniciar tracking de tiempo
    setStartTime(Date.now());
  }, [router]);

  const handleAnswer = (value: LikertScale) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = {
        ...answers,
        [professionalQuestions[currentQuestion].id]: selectedOption
      };
      setAnswers(newAnswers);

      if (currentQuestion < professionalQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        const nextQuestionId = professionalQuestions[currentQuestion + 1].id;
        setSelectedOption(newAnswers[nextQuestionId] || null);
      } else {
        // Calcular resultados con tiempo de completación
        const endTime = Date.now();
        const results = calculateProfessionalResults(newAnswers, {
          startTime,
          endTime
        });
        localStorage.setItem('professionalVocationalResults', JSON.stringify(results));
        router.push('/results');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevQuestionId = professionalQuestions[currentQuestion - 1].id;
      setSelectedOption(answers[prevQuestionId] || null);
    }
  };

  const progress = ((currentQuestion + 1) / professionalQuestions.length) * 100;
  const question = professionalQuestions[currentQuestion];

  // Filtrar preguntas de control para no mostrarlas en el conteo visible
  const regularQuestions = professionalQuestions.filter(q => !q.isControl);
  const currentRegularIndex = regularQuestions.findIndex(q => q.id === question.id);
  const displayQuestionNumber = currentRegularIndex >= 0 ? currentRegularIndex + 1 : currentQuestion + 1;
  const totalRegularQuestions = regularQuestions.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-200 shadow-md">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/logo-udhi.svg"
              alt="UDHI - Universidad para el Desarrollo Humano e Integral"
              width={240}
              height={42}
              className="h-auto w-full max-w-[240px]"
            />
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <div className="text-xs text-gray-500">Participante</div>
                <div className="text-sm font-medium text-gray-900">{userName}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">{displayQuestionNumber}/{totalRegularQuestions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-3">
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#1565C0] to-[#1E88E5] transition-all duration-500 shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-4 sm:p-6 lg:p-12 hover:shadow-xl transition-shadow duration-300">
          {/* Control Question Badge */}
          {question.isControl && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#1565C0] to-[#1E88E5] text-white rounded-full text-xs font-semibold uppercase tracking-wide shadow-md">
                Pregunta de Validación
              </span>
            </div>
          )}

          {/* Question */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-6 sm:mb-10 leading-relaxed">
            {question.text}
          </h2>

          {/* Likert Scale - Professional Format */}
          <div className="space-y-3 mb-12">
            {/* Header */}
            <div className="grid grid-cols-5 gap-2 mb-2 px-4">
              {likertOptions.map((option) => (
                <div key={option.value} className="text-center">
                  <div className="text-xs font-medium text-gray-600 mb-1">{option.value}</div>
                  <div className="text-xs text-gray-500">{option.shortLabel}</div>
                </div>
              ))}
            </div>

            {/* Options as buttons */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-6 border-2 border-gray-200">
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {likertOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`relative group flex flex-col items-center justify-center p-3 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${
                      selectedOption === option.value
                        ? 'border-[#1565C0] bg-gradient-to-br from-[#1565C0] to-[#1E88E5] shadow-xl scale-105 transform'
                        : 'border-gray-300 bg-white hover:border-[#1565C0] hover:bg-blue-50 hover:scale-102'
                    }`}
                  >
                    <div className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${
                      selectedOption === option.value ? 'text-white' : 'text-gray-900'
                    }`}>
                      {option.value}
                    </div>
                    <div className={`text-[10px] sm:text-xs font-medium text-center ${
                      selectedOption === option.value ? 'text-white' : 'text-gray-600'
                    }`}>
                      {option.shortLabel}
                    </div>

                    {selectedOption === option.value && (
                      <div className="absolute -top-2 -right-2 animate-scale-in">
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-[#1565C0]" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Labels below */}
              <div className="grid grid-cols-5 gap-3 mt-4">
                {likertOptions.map((option) => (
                  <div key={option.value} className="text-center">
                    <div className={`text-xs leading-tight transition-colors ${
                      selectedOption === option.value ? 'text-[#1565C0] font-bold' : 'text-gray-600'
                    }`}>
                      {option.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100 border-2 border-gray-300 hover:border-gray-400 hover:shadow-md'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </button>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                selectedOption === null
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#1565C0] to-[#1E88E5] text-white hover:from-[#0D47A1] hover:to-[#1565C0] shadow-lg hover:shadow-xl hover:scale-105'
              }`}
            >
              {currentQuestion === professionalQuestions.length - 1 ? (
                <>
                  Finalizar Test
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              ) : (
                <>
                  Siguiente
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 font-medium">
            Selecciona el número que mejor represente tu nivel de acuerdo con la afirmación
          </p>
        </div>
      </div>
    </div>
  );
}
