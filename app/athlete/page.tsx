'use client';

import Link from 'next/link';

export default function AthletePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold">AT</span>
            </div>
            <span className="text-white font-bold hidden sm:inline">BlackOnLifter</span>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/" className="px-4 py-2 text-slate-400 hover:text-cyan-400 text-sm font-medium transition">
              ← Back
            </Link>
            <Link
              href="/choose"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-slate-900 rounded-lg font-semibold text-sm transition"
            >
              + CHANGE LEVELS
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ATHLETE MODE
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Elite training for those who have already conquered the basics.
          </p>
          <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-slate-900 rounded-lg font-bold transition">
            Log In to Access
          </button>
        </div>
      </div>
    </div>
  );
}
