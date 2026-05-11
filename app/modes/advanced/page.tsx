"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AuthModal } from "@/components/AuthModal";

export default function AdvancedPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>("day1");

  const programData = {
    title: "ADVANCED",
    subtitle: "5-DAY SPECIALIZED SPLIT",
    description:
      "Years of grinding forged this. Every variable optimized — volume, intensity, frequency, deload. This is where elite physiqueså are built.",
    stats: [
      { label: "Training Days", value: "5" },
      { label: "Exercises", value: "42" },
      { label: "Avg Duration", value: "75 min" },
      { label: "Rep Range", value: "6-12" },
    ],
    days: [
      {
        id: "day1",
        name: "Chest",
        focus: "PECS, ANTERIOR DELTS",
        exercises: [
          {
            name: "Barbell Bench Press",
            sets: "5x3-5 heavy",
            notes: "Strength",
          },
          {
            name: "Incline Dumbbell Press",
            sets: "4x6-8",
            notes: "Upper Chest",
          },
          {
            name: "Cable Crossovers",
            sets: "3x10-12",
            notes: "Superset with pushups",
          },
          {
            name: "Dumbbell Flyes",
            sets: "3x12-15",
            notes: "Stretch and squeeze",
          },
        ],
      },
      {
        id: "day2",
        name: "Back",
        focus: "LATS, RHOMBOIDS, TRAPS",
        exercises: [
          {
            name: "Barbell Rows",
            sets: "5x3-5 heavy",
            notes: "Thickness",
          },
          {
            name: "Weighted Pullups",
            sets: "4x6-8",
            notes: "Lats & Width",
          },
          {
            name: "T-Bar Rows",
            sets: "3x8-10",
            notes: "Mid-back",
          },
          {
            name: "Face Pulls",
            sets: "3x12-15",
            notes: "Rear delts",
          },
        ],
      },
      {
        id: "day3",
        name: "Shoulders",
        focus: "ALL THREE DELTOID HEADS",
        exercises: [
          {
            name: "Overhead Press",
            sets: "4x5-6",
            notes: "Primary",
          },
          {
            name: "Dumbbell Lateral Raises",
            sets: "4x10-12",
            notes: "Width",
          },
          {
            name: "Reverse Pec Deck",
            sets: "3x12-15",
            notes: "Rear delts",
          },
          {
            name: "Machine Shoulder Press",
            sets: "3x10-12",
            notes: "Volume",
          },
        ],
      },
      {
        id: "day4",
        name: "Arms",
        focus: "BICEPS, TRICEPS, FOREARMS",
        exercises: [
          {
            name: "Barbell Curls",
            sets: "4x6-8",
            notes: "Bicep Strength",
          },
          {
            name: "Dumbbell Curls",
            sets: "3x8-10",
            notes: "Bicep Hypertrophy",
          },
          {
            name: "Skull Crushers",
            sets: "4x8-10",
            notes: "Tricep Strength",
          },
          {
            name: "Rope Pushdowns",
            sets: "3x10-12",
            notes: "Tricep Pump",
          },
        ],
      },
      {
        id: "day5",
        name: "Legs",
        focus: "QUADS, HAMSTRINGS, GLUTES, CALVES",
        exercises: [
          {
            name: "Barbell Back Squat",
            sets: "5x3-5 heavy",
            notes: "Primary",
          },
          {
            name: "Leg Press",
            sets: "4x8-10",
            notes: "Volume",
          },
          {
            name: "Leg Curls",
            sets: "3x10-12",
            notes: "Hamstrings",
          },
          {
            name: "Leg Extensions",
            sets: "3x12-15",
            notes: "Quads",
          },
          {
            name: "Calf Raises",
            sets: "4x10-15",
            notes: "Calves",
          },
        ],
      },
    ],
    protocols: [
      {
        title: "Intensity Scale — RPE Guide",
        items: [
          "RPE 6-7: Warmup / Feeder",
          "RPE 8: Moderate – 3 reps left",
          "RPE 9: Hard – 1 rep left",
          "RPE 10: Max effort – Failure",
        ],
      },
      {
        title: "Weekly Volume Distribution",
        items: [
          "Chest: 16 sets",
          "Back: 18 sets",
          "Shoulders: 14 sets",
          "Arms: 13 sets",
          "Legs: 20 sets",
        ],
      },
      {
        title: "Deload Protocol — Every 4-6 Weeks",
        details:
          "Signs you need a deload: persistent joint pain, stalled PRs for 2+ weeks, disrupted sleep, loss of motivation, reduced bar speed. When these hit, take a 7-day deload: drop volume by 40-50%, keep intensity at RPE 6–7, prioritize sleep and nutrition recovery.",
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
              Elite Optimization
            </span>
          </div>

          <h1 className="font-oswald mb-4 text-4xl font-black uppercase text-white sm:text-5xl md:text-6xl">
            {programData.title}
            <br />
            <span className="text-secondary">{programData.subtitle}</span>
          </h1>

          <p className="mb-8 max-w-2xl text-sm text-gray-300 sm:text-base">
            {programData.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {programData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded border border-secondary/30 bg-[#0f1629] p-3 sm:p-4"
              >
                <div className="text-lg font-bold text-secondary sm:text-xl md:text-2xl">
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
            Your 5-Day <span className="text-secondary">Split</span>
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
                <div className="rounded-lg border border-secondary/30 bg-gradient-to-r from-[#0f1629] to-[#0a0e1a] p-4 transition-all hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-oswald text-lg font-bold uppercase text-white sm:text-xl">
                        {day.name}
                      </h3>
                      <p className="text-xs text-gray-500 sm:text-sm">
                        {day.focus}
                      </p>
                    </div>
                    <span className="text-secondary">
                      {expandedDay === day.id ? "−" : "+"}
                    </span>
                  </div>

                  {expandedDay === day.id && (
                    <div className="mt-4 space-y-3 border-t border-secondary/20 pt-4">
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
                          <span className="whitespace-nowrap text-secondary">
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

      {/* Protocols Section */}
      <section className="border-b border-accent/20 px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-oswald mb-8 text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl">
            Training <span className="text-secondary">Protocols</span>
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {programData.protocols.map((protocol) => (
              <div
                key={protocol.title}
                className="rounded-lg border border-secondary/30 bg-[#0f1629] p-4 sm:p-6"
              >
                <h3 className="font-oswald mb-4 text-lg font-bold text-secondary">
                  {protocol.title}
                </h3>
                {protocol.items && (
                  <ul className="space-y-2">
                    {protocol.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-gray-400 sm:text-sm"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
                {protocol.details && (
                  <p className="text-xs text-gray-400 sm:text-sm">
                    {protocol.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-lg border border-secondary/30 bg-[#0f1629] p-6 text-center sm:p-8">
            <h3 className="font-oswald mb-4 text-2xl font-bold uppercase text-white">
              Ready to Build Your Legacy?
            </h3>
            <p className="mb-6 text-xs text-gray-400 sm:text-sm">
              Join elite athletes and lifters pushing the limits of human potential.
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
          <a href="/modes" className="flex flex-col items-center gap-1 text-secondary hover:text-white">
            <span className="text-lg">←</span>
            <span className="text-xs font-bold">CHANGE</span>
          </a>
          <a href="/" className="flex flex-col items-center gap-1 text-secondary hover:text-white">
            <span className="text-lg">🏠</span>
            <span className="text-xs font-bold">HOME</span>
          </a>
        </div>
      </nav>

      <div className="h-16 md:hidden" />
    </main>
  );
}
