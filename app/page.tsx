'use client';

import { useAuth } from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AuthForm } from '@/components/auth-form';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/modes');
    }
  }, [user, loading, router]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-3xl font-bold shadow-lg shadow-teal-500/20">
            ⚡
          </div>
          <h1 className="text-4xl font-bold mb-2 text-white">BlackOnLifter</h1>
          <p className="text-slate-400 text-lg font-medium">Elite Strength Training Redefined</p>
        </div>

        {/* Auth Form */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-slate-400">Loading...</p>
            </div>
          ) : (
            <AuthForm />
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center p-3">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-xs text-slate-400 font-medium">Science Based</p>
          </div>
          <div className="text-center p-3">
            <div className="text-3xl mb-2">💪</div>
            <p className="text-xs text-slate-400 font-medium">Progressive</p>
          </div>
          <div className="text-center p-3">
            <div className="text-3xl mb-2">📊</div>
            <p className="text-xs text-slate-400 font-medium">Tracked</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-8">
          By signing in, you agree to our Terms of Service
        </p>
      </div>
    </main>
  );
}
