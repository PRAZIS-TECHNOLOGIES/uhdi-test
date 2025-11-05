'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/register');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#029EDB] via-[#0284c7] to-[#0369a1] flex items-center justify-center">
      <div className="text-white text-2xl">Redirigiendo...</div>
    </div>
  );
}
