'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/register');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center animate-fade-in">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo-udhi.svg"
            alt="UDHI Logo"
            width={200}
            height={60}
            className="h-16 w-auto mx-auto drop-shadow-md"
            priority
          />
        </div>

        {/* Spinner */}
        <div className="relative mx-auto mb-6">
          <div className="w-20 h-20 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-[#1565C0] rounded-full animate-spin"></div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#0D47A1] to-[#1565C0] bg-clip-text text-transparent">
            Test Vocacional UDHI
          </h2>
          <p className="text-gray-600 font-medium">Cargando...</p>
        </div>
      </div>
    </div>
  );
}
