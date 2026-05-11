'use client';

import { useAuth } from '@/app/context/auth-context';
import { ProtectedRoute } from '@/components/protected-route';
import { trainingModes } from '@/lib/training-modes';
import Link from 'next/link';

function ModeCard({ mode }: { mode: typeof trainingModes[0] }) {
  const colorMap = {
    red: 'from-red-500/20 to-red-600/10 border-red-500/30 hover:border-red-500/50',
    cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:border-cyan-500/50',
    yellow: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 hover:border-yellow-500/50',
    purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-500/50',
  };

  const textColorMap = {
    red: 'text-red-400',
    cyan: 'text-cyan-400',
    yellow: 'text-yellow-400',
    purple: 'text-purple-400',
  };

  return (
    <Link href={`/modes/${mode.id}`}>
      <div
        className={`group mode-card bg-gradient-to-br ${colorMap[mode.color]} cursor-pointer transform transition hover:scale-105`}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wider ${textColorMap[mode.color]}`}>
              {mode.name}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mt-1">{mode.title}</h3>
          </div>
          <div className={`w-8 h-8 rounded-lg ${colorMap[mode.color].split(' ')[0]} flex items-center justify-center opacity-0 group-hover:opacity-100 transition`}>
            →
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{mode.subtitle}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {mode.stats.slice(0, 4).map((stat, idx) => (
            <div key={idx} className="p-2 rounded bg-black/20">
              <p className={`text-xs uppercase tracking-wider font-semibold ${textColorMap[mode.color]}`}>
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2">{mode.description}</p>
      </div>
    </Link>
  );
}

function ModesContent() {
  const { user, logout } = useAuth();

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-blue-600 flex items-center justify-center text-lg font-bold">
                ⚡
              </div>
              <h1 className="text-2xl font-bold">BlackOnLifter</h1>
            </div>
            <p className="text-muted-foreground text-sm">Choose Your Training Program</p>
          </div>

          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition text-sm font-medium"
          >
            Sign Out
          </button>
        </div>

        {/* Welcome */}
        <div className="mb-12">
          <h2 className="section-title mb-2">Select Your Training Level</h2>
          <p className="section-subtitle max-w-2xl">
            Choose the training program that matches your fitness level and goals. Each program is scientifically designed for optimal results.
          </p>
        </div>

        {/* Mode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingModes.map((mode) => (
            <ModeCard key={mode.id} mode={mode} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 BlackOnLifter • Strength Training Redefined
          </p>
        </div>
      </div>
    </main>
  );
}

export default function ModesPage() {
  return (
    <ProtectedRoute>
      <ModesContent />
    </ProtectedRoute>
  );
}
