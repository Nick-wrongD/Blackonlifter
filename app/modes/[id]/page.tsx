'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/protected-route';
import { trainingModes } from '@/lib/training-modes';
import { useState } from 'react';

function ExerciseItem({ exercise }: any) {
  const [expanded, setExpanded] = useState(false);

  const typeColorMap: Record<string, string> = {
    'WARM-UP': 'bg-orange-500/20 text-orange-400',
    'STRENGTH': 'text-red-400',
    'COMPOUND': 'text-cyan-400',
    'ISOLATION': 'text-purple-400',
    'EXPLOSIVE': 'text-yellow-400',
    'ACTIVATION': 'text-orange-400',
    'MOBILITY': 'text-cyan-400',
    'TECHNIQUE': 'text-blue-400',
  };

  const typeLabel = typeColorMap[exercise.type] ? exercise.type : 'EXERCISE';

  return (
    <div className="mode-card bg-white/5 cursor-pointer transition hover:bg-white/10" onClick={() => setExpanded(!expanded)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {exercise.id && (
            <span className="text-xs font-mono text-muted-foreground">
              {String(exercise.id).padStart(2, '0')}
            </span>
          )}
          <h4 className="font-semibold text-white mt-1">{exercise.name}</h4>
          <p className="text-sm text-muted-foreground">{exercise.description}</p>

          {(exercise.sets || exercise.reps || exercise.duration) && (
            <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
              {exercise.sets && <span>Sets: {exercise.sets}</span>}
              {exercise.reps && <span>Reps: {exercise.reps}</span>}
              {exercise.duration && <span>Duration: {exercise.duration}</span>}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {typeLabel && (
            <span className={`text-xs font-semibold uppercase px-2 py-1 rounded ${typeColorMap[exercise.type] || 'text-gray-400'}`}>
              {typeLabel}
            </span>
          )}
          <button className="text-muted-foreground hover:text-white transition">
            {expanded ? '−' : '+'}
          </button>
        </div>
      </div>
    </div>
  );
}

function DaySection({ day }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full mode-card bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border-cyan-500/30 hover:border-cyan-500/50 p-4 flex items-center justify-between group"
      >
        <div className="text-left">
          <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">{day.name}</p>
          <h3 className="text-lg font-bold text-white mt-1">{day.title}</h3>
          <p className="text-sm text-muted-foreground">{day.focus}</p>
        </div>
        <span className="text-2xl group-hover:translate-x-1 transition">{expanded ? '−' : '+'}</span>
      </button>

      {expanded && (
        <div className="mt-4 space-y-3 ml-2 border-l-2 border-cyan-500/30 pl-4">
          {day.exercises.map((exercise: any) => (
            <ExerciseItem key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  );
}

function ModeContent() {
  const params = useParams();
  const modeId = params?.id as string;
  const mode = trainingModes.find((m) => m.id === modeId);

  if (!mode) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Mode not found</h2>
          <Link href="/modes" className="btn-primary">
            Back to Modes
          </Link>
        </div>
      </main>
    );
  }

  const colorMap = {
    red: { bg: 'from-red-500/10 to-red-600/5', accent: 'text-red-400', border: 'border-red-500/30' },
    cyan: { bg: 'from-cyan-500/10 to-cyan-600/5', accent: 'text-cyan-400', border: 'border-cyan-500/30' },
    yellow: { bg: 'from-yellow-500/10 to-yellow-600/5', accent: 'text-yellow-400', border: 'border-yellow-500/30' },
    purple: { bg: 'from-purple-500/10 to-purple-600/5', accent: 'text-purple-400', border: 'border-purple-500/30' },
  };

  const colors = colorMap[mode.color];

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/modes"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition text-sm"
          >
            ← Back to Modes
          </Link>

          <Link
            href="/modes"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/10 hover:border-white/20 transition text-sm font-medium"
          >
            ⚙ CHANGE LEVEL
          </Link>
        </div>

        {/* Hero Section */}
        <div className={`mode-card bg-gradient-to-br ${colors.bg} ${colors.border} mb-12`}>
          <p className={`text-xs uppercase tracking-wider font-semibold ${colors.accent}`}>
            Training Mode
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-2">{mode.title}</h1>
          <p className={`text-lg font-semibold ${colors.accent} mb-4`}>{mode.subtitle}</p>
          <p className="text-white text-lg leading-relaxed max-w-2xl">{mode.description}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {mode.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-black/30 border border-white/10">
                <p className={`text-2xl font-bold ${colors.accent}`}>{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Day Sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Training Schedule</h2>
          <div className="space-y-4">
            {mode.days.map((day) => (
              <DaySection key={day.id} day={day} />
            ))}
          </div>
        </div>

        {/* Principles Section */}
        {mode.sections && mode.sections.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{mode.sections[0].title}</h2>
            <div className={`mode-card bg-gradient-to-br ${colors.bg} ${colors.border} p-6`}>
              <p className="text-white leading-relaxed">{mode.sections[0].content}</p>
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex gap-4 mt-12 pt-8 border-t border-white/10">
          <Link href="/modes" className="flex-1 btn-secondary text-center">
            ← Back to Modes
          </Link>
          <Link href="/modes" className="flex-1 btn-primary text-center">
            ⚙ Change Level
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ModePage() {
  return (
    <ProtectedRoute>
      <ModeContent />
    </ProtectedRoute>
  );
}
