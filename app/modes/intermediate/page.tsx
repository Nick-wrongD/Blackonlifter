"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AuthModal } from "@/components/AuthModal";

export default function IntermediatePage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>("day1");

  const programData = {
    title: "INTERMEDIATE",
    subtitle: "4-DAY UPPER/LOWER SPLIT",
    description:
      "Build explosive power, structural strength, and sport-transfer mobility. 4 days per week with 75–150 min rest cycles.",
    stats: [
      { label: "Training Days", value: "4" },
      { label: "Minutes Per Session", value: "42" },
      { label: "Rest Cycle", value: "75-150 min" },
      { label: "Reps Per Exercise", value: "8-12" },
    ],
    days: [
      {
        id: "day1",
        name: "Lower",
        focus: "EXPLOSIVE HIP HINGES",
        exercises: [
          { name: "Barbell Back Squats", sets: "4x6-8", notes: "Primary" },
          {
            name: "Romanian Deadlifts",
            sets: "3x8-10",
            notes: "Hamstring Dominant",
          },
          { name: "Leg Press", sets: "3x8-12", notes: "Quad Volume" },
          { name: "Leg Curls", sets: "3x10-12", notes: "Activation" },
          { name: "Calf Raises", sets: "3x12-15", notes: "Rate" },
        ],
      },
      {
        id: "day2",
        name: "Upper",
        focus: "VERTICAL PRESSING",
        exercises: [
          {
            name: "Barbell Bench Press",
            sets: "4x6-8",
            notes: "Primary: Chest",
          },
          {
            name: "Incline Dumbbell Press",
            sets: "3x8-10",
            notes: "Upper Chest",
          },
          {
            name: "Overhead Press",
            sets: "3x6-8",
            notes: "Shoulder Strength",
          },
          {
            name: "Cable Flyes",
            sets: "3x10-12",
            notes: "Chest Isolation",
          },
          {
            name: "Dumbbell Lateral Raises",
            sets: "3x12-15",
            notes: "Shoulder Width",
          },
          {
            name: "Tricep Pushdowns",
            sets: "3x10-12",
            notes: "Tricep Pump",
          },
        ],
      },
      {
        id: "day3",
        name: "Full",
        focus: "FULL BODY POWER",
        exercises: [
          {
            name: "Power Cleans",
            sets: "3x3-5",
            notes: "Explosive Coordination",
          },
          {
            name: "Back Squats",
            sets: "2x5-6",
            notes: "Lower Body Power",
          },
          {
            name: "Plyometric Box Jumps",
            sets: "3x5",
            notes: "Explosive Extension",
          },
        ],
      },
      {
        id: "day4",
        name: "Rate",
        focus: "SPEED & RECOVERY",
        exercises: [
          {
            name: "Keep 5+ Exercises",
            sets: "3x8-12",
            notes: "Choose from previous sessions",
          },
          {
            name: "Moderate Intensity",
            sets: "Vary",
            notes: "Focus on movement quality",
          },
        ],
      },
    ],
    principles: [
      {
        title: "Explosive Power Focus",
        description:
          "Incorporate Olympic lifts or plyometrics 1-2x per week to develop rate of force development.",
      },
      {
        title: "Sport-Transfer Mobility",
        description:
          "Dedicate 10-15 min each session to mobility and activation work targeting movement quality.",
      },
      {
        title: "Structural Strength",
        description:
          "Build resilience with compound movements and progressive tension on main lifts.",
      },
      {
        title: "Recovery Protocol",
        description:
          "75-150 min rest cycles allow CNS recovery. Respect these rest periods for maximum adaptation.",
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
              Sport Science Training
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
            Your 4-Day <span className="text-accent">Program</span>
          </h2>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
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
                      <h3 className="font-oswald text-lg font-bold uppercase text-accent sm:text-xl">
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
              Ready to Level Up?
            </h3>
            <p className="mb-6 text-xs text-gray-400 sm:text-sm">
              Start your intermediate training journey today and unlock new levels of strength and power.
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
