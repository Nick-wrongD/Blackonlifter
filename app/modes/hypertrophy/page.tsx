"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AuthModal } from "@/components/AuthModal";

export default function HypertrophyPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>("day1");

  const programData = {
    title: "HYPERTROPHY",
    subtitle: "3-8 DAY PPL • 2 SPLIT",
    description:
      "The gold standard for aesthetic bodybuilding. Every muscle trained twice per week. Built for maximum size, symmetry, and the classic physique.",
    stats: [
      { label: "Days Per Week", value: "6" },
      { label: "Muscle Sets", value: "8-15" },
      { label: "Training Range", value: "8-15" },
      { label: "Muscle Frequency", value: "2x/Week" },
    ],
    days: [
      {
        id: "day1",
        name: "Push A",
        focus: "CHEST, SHOULDERS, TRICEPS",
        exercises: [
          {
            name: "Barbell Bench Press",
            sets: "5x3-5 heavy",
            notes: "Strength",
          },
          {
            name: "Incline Dumbbell Press",
            sets: "4x6-8",
            notes: "Upper Chest Priority",
          },
          {
            name: "Cable Crossover Fly • Push-Up",
            sets: "3 rounds",
            notes: "Superset: 12+ max reps",
          },
          {
            name: "Decline Barbell Press",
            sets: "3x8-10",
            notes: "Strength",
          },
          {
            name: "Weighted Chest Dips",
            sets: "4x6-12 reps",
            notes: "Barbell/Dumbbell",
          },
          {
            name: "Pec Deck Machine",
            sets: "3x12-15",
            notes: "Drop set on last",
          },
        ],
      },
      {
        id: "day2",
        name: "Pull A",
        focus: "BACK, BICEPS",
        description: "Back width and thickness with bicep focus",
        exercises: [
          {
            name: "Weighted Pullups",
            sets: "4x5-8",
            notes: "Primary: Lats",
          },
          {
            name: "Barbell Rows",
            sets: "4x6-8",
            notes: "Back Thickness",
          },
          {
            name: "T-Bar Row",
            sets: "3x8-10",
            notes: "Mid-back",
          },
          {
            name: "Barbell Curls",
            sets: "4x6-8",
            notes: "Bicep Strength",
          },
          {
            name: "Incline Dumbbell Curls",
            sets: "3x10-12",
            notes: "Long Head Stretch",
          },
          {
            name: "Face Pulls",
            sets: "3x12-15",
            notes: "Rear delts & shoulder health",
          },
        ],
      },
      {
        id: "day3",
        name: "Legs A",
        focus: "QUADS, HAMSTRINGS, GLUTES, CALVES",
        exercises: [
          {
            name: "Barbell Back Squat",
            sets: "4x5-6",
            notes: "Primary",
          },
          {
            name: "Leg Press",
            sets: "3x8-10",
            notes: "Volume",
          },
          {
            name: "Leg Extensions",
            sets: "3x10-12",
            notes: "Quad Isolation",
          },
          {
            name: "Romanian Deadlifts",
            sets: "3x8-10",
            notes: "Hamstring Emphasis",
          },
          {
            name: "Lying Leg Curls",
            sets: "3x10-12",
            notes: "Hamstring Isolation",
          },
          {
            name: "Standing Calf Raises",
            sets: "4x10-15",
            notes: "Calf Development",
          },
        ],
      },
      {
        id: "day4",
        name: "Push B",
        focus: "SHOULDERS & TRICEPS",
        exercises: [
          {
            name: "Overhead Press",
            sets: "4x5-6",
            notes: "Primary Strength",
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: "3x8-10",
            notes: "Secondary",
          },
          {
            name: "Dumbbell Lateral Raises",
            sets: "3x12-15",
            notes: "Shoulder Width",
          },
          {
            name: "Reverse Pec Deck",
            sets: "3x12-15",
            notes: "Rear Delts",
          },
          {
            name: "Skull Crushers",
            sets: "3x8-10",
            notes: "Tricep Strength",
          },
          {
            name: "Rope Pushdowns",
            sets: "3x12-15",
            notes: "Tricep Pump",
          },
        ],
      },
      {
        id: "day5",
        name: "Pull B",
        focus: "BACK, BICEPS, FOREARMS",
        exercises: [
          {
            name: "Deadlifts",
            sets: "3x3-5",
            notes: "Primary",
          },
          {
            name: "Chest-Supported Rows",
            sets: "3x8-10",
            notes: "Secondary",
          },
          {
            name: "Cable Rows",
            sets: "3x10-12",
            notes: "Volume",
          },
          {
            name: "Dumbbell Curls",
            sets: "3x8-10",
            notes: "Bicep Hypertrophy",
          },
          {
            name: "Cable Curls",
            sets: "3x10-12",
            notes: "Constant Tension",
          },
          {
            name: "Barbell Wrist Curls",
            sets: "2x12-15",
            notes: "Forearm Development",
          },
        ],
      },
      {
        id: "day6",
        name: "Legs B",
        focus: "QUAD-DOMINANT",
        exercises: [
          {
            name: "Front Squats",
            sets: "3x5-6",
            notes: "Primary",
          },
          {
            name: "Leg Press",
            sets: "3x8-12",
            notes: "Quad Focus & Volume",
          },
          {
            name: "Smith Machine Leg Extensions",
            sets: "3x12-15",
            notes: "Quad Peak Contraction",
          },
          {
            name: "Bulgarian Split Squats",
            sets: "3x8-10",
            notes: "Single-leg strength",
          },
          {
            name: "Leg Curls",
            sets: "3x10-12",
            notes: "Hamstring Balance",
          },
          {
            name: "Seated Calf Raises",
            sets: "3x12-15",
            notes: "Soleus Development",
          },
        ],
      },
    ],
    principles: [
      {
        title: "Hypertrophy Training Rules",
        description:
          "Primarily increases ffreter turning muscle noncoding, D create new, itthemoses ad a foveation Built for mair, ithmemeses, symmetry, and the classic physique. aesthetical maximum size, symmetry, and the",
      },
      {
        title: "Weekly Volume Distribution",
        description:
          "Optimal sets per muscle group: 16-20 sets per week. This program spreads volume across two training sessions for each muscle group.",
      },
      {
        title: "Progressive Overload",
        description:
          "Set your baseline RPE on each lift each week. Aim to add 1-2 reps or small weight increases by the end of your 12-week block.",
      },
      {
        title: "Recovery & Nutrition",
        description:
          "Sleep 8-9 hours. Eat in a 300-500 calorie surplus. Protein: 0.8-1g per lb bodyweight. This program demands optimal recovery.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar showChangeLevel onAuthClick={() => setShowAuthModal(true)} />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {/* Hero Section */}
      <section className="border-b border-accent/20 px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-2">
            <div className="h-1 w-8 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent sm:text-sm">
              Aesthetic Bodybuilding
            </span>
          </div>

          <h1 className="font-oswald mb-4 text-4xl font-black uppercase text-white sm:text-5xl md:text-6xl">
            {programData.title}
            <br />
            <span className="text-accent">{programData.subtitle}</span>
          </h1>

          <p className="mb-8 max-w-2xl text-sm text-gray-300 sm:text-base">
            {programData.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {programData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded border border-accent/30 bg-[#0f1629] p-3 sm:p-4"
              >
                <div className="text-lg font-bold text-accent sm:text-xl md:text-2xl">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase text-gray-400 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="border-b border-accent/20 px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-oswald mb-8 text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl">
            Your 6-Day <span className="text-accent">Program</span>
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {programData.days.map((day) => (
              <button
                key={day.id}
                onClick={() =>
                  setExpandedDay(expandedDay === day.id ? null : day.id)
                }
                className="w-full text-left"
              >
                <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-[#0f1629] to-[#0a0e1a] p-4 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-oswald text-lg font-bold uppercase text-white sm:text-xl">
                        {day.name}
                      </h3>
                      <p className="text-xs text-gray-500 sm:text-sm">
                        {day.focus}
                      </p>
                    </div>
                    <span className="text-accent">
                      {expandedDay === day.id ? "−" : "+"}
                    </span>
                  </div>

                  {expandedDay === day.id && (
                    <div className="mt-4 space-y-3 border-t border-accent/20 pt-4">
                      {day.exercises.map((exercise) => (
                        <div
                          key={exercise.name}
                          className="flex items-start justify-between gap-2 text-sm sm:text-base"
                        >
                          <div>
                            <p className="font-bold text-white">
                              {exercise.name}
                            </p>
                            <p className="text-xs text-gray-500 sm:text-sm">
                              {exercise.notes}
                            </p>
                          </div>
                          <span className="whitespace-nowrap text-accent">
                            {exercise.sets}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="border-b border-accent/20 px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-oswald mb-8 text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl">
            Core <span className="text-accent">Principles</span>
          </h2>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {programData.principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-lg border border-accent/30 bg-[#0f1629] p-4 sm:p-6"
              >
                <h3 className="font-oswald mb-2 text-lg font-bold text-accent">
                  {principle.title}
                </h3>
                <p className="text-xs text-gray-400 sm:text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-lg border border-accent/30 bg-[#0f1629] p-6 text-center sm:p-8">
            <h3 className="font-oswald mb-4 text-2xl font-bold uppercase text-white">
              Build Your Classic Physique
            </h3>
            <p className="mb-6 text-xs text-gray-400 sm:text-sm">
              Follow the gold standard for aesthetic bodybuilding and achieve the physique of your dreams.
            </p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="btn-primary font-bold"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-accent/20 bg-background/95 backdrop-blur md:hidden">
        <div className="flex items-center justify-around px-4 py-3">
          <a href="/modes" className="flex flex-col items-center gap-1 text-accent hover:text-white">
            <span className="text-lg">←</span>
            <span className="text-xs font-bold">CHANGE</span>
          </a>
          <a href="/" className="flex flex-col items-center gap-1 text-accent hover:text-white">
            <span className="text-lg">🏠</span>
            <span className="text-xs font-bold">HOME</span>
          </a>
        </div>
      </nav>

      <div className="h-16 md:hidden" />
    </main>
  );
}
