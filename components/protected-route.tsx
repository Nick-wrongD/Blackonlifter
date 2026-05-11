'use client';

import { ReactNode } from 'react';
import { useAuth } from '@/app/context/auth-context';
import Link from 'next/link';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Authentication Required</h1>
          <p className="text-muted-foreground mb-6">You must be logged in to access this page.</p>
          <Link href="/" className="btn-primary">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
