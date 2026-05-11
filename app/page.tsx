'use client';

import { useAuth } from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AuthForm } from '@/components/auth-form';
import Image from 'next/image';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/modes');
    }
  }, [user, loading, router]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-blue-600 flex items-center justify-center text-xl font-bold">
              ⚡
            </div>
            <div>
              <h1 className="text-2xl font-bold">BlackOnLifter</h1>
              <p className="text-sm text-muted-foreground">Strength Training Programs</p>
            </div>
          </div>
        </div>

        {/* Auth Form */}
        <div className="mode-card bg-white/5">
          {loading ? (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading...</p>
            </div>
          ) : (
            <AuthForm />
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </main>
  );
}
