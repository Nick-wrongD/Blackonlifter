'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function BeginnerPage() {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPrompt(true);
    setTimeout(() => setShowLoginPrompt(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold">B</span>
            </div>
            <span className="text-white font-bold hidden sm:inline">BlackOnLifter</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 text-slate-400 hover:text-cyan-400 text-sm font-medium transition"
            >
              ← Back
            </Link>
            <Link
              href="/choose"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-sm transition"
            >
              + CHANGE LEVELS
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2">
              • Strength Fundamentals
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              <span>BEGINNER</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                MODE
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Master the fundamentals of strength training. Build a solid foundation with proper form, technique, and consistent progression.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'TRAINING DAYS', value: '3' },
              { label: 'PER WEEK', value: '45m' },
              { label: 'MUSCLE FREQUENCY', value: '2x' },
              { label: 'REST DAYS', value: '4' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Day Tabs */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex gap-3 min-w-max pb-4">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <button
                  key={day}
                  className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold text-sm transition whitespace-nowrap"
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Program Overview */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">→</span> PROGRAM OVERVIEW
            </h2>
            <p className="text-slate-300 mb-8">
              This beginner program focuses on learning proper form, building work capacity, and establishing consistent training habits. All exercises are compound movements that build functional strength.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { value: '3', label: 'TRAINING DAYS' },
                { value: '45-60m', label: 'DURATION' },
                { value: '8-12', label: 'REPS PER SET' },
                { value: '3-4', label: 'SETS PER EX' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/70 border border-slate-700 rounded-lg p-4 text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">{item.value}</p>
                  <p className="text-xs sm:text-sm text-slate-300 uppercase tracking-widest font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workout Days */}
          <div className="space-y-4">
            {[
              {
                day: 'DAY 1',
                name: 'CHEST & TRICEPS',
                focus: 'Upper Push',
                exercises: 5,
              },
              {
                day: 'DAY 2',
                name: 'BACK & BICEPS',
                focus: 'Upper Pull',
                exercises: 5,
              },
              {
                day: 'DAY 3',
                name: 'LEGS & CORE',
                focus: 'Lower Body',
                exercises: 6,
              },
            ].map((workout, idx) => (
              <div
                key={idx}
                className="group border border-slate-700/50 hover:border-cyan-500/50 bg-slate-800/30 hover:bg-slate-800/50 rounded-xl p-4 sm:p-6 transition cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                      {workout.day}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{workout.name}</h3>
                    <p className="text-sm text-slate-400">{workout.focus}</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg">
                    <span className="text-xs text-slate-300 font-semibold">{workout.exercises}</span>
                    <span className="text-slate-500">exercises</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Login Prompt */}
          <div className="mt-12 text-center">
            <button
              onClick={handleLoginClick}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 rounded-lg font-bold text-lg transition transform hover:scale-105 mb-4"
            >
              Start Training Now
            </button>
            {showLoginPrompt && (
              <div className="mt-4 p-4 bg-blue-500/20 border border-blue-500/50 rounded-lg text-blue-300">
                Please log in to access the full training program
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
