"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AuthModal } from "@/components/AuthModal";

export default function BeginnerPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>("day1");

  const programData = {
    title: "BEGINNER",
    subtitle: "3-DAY FULL BODY SPLIT",
    description:
      "Perfect foundation for those starting their strength journey. Build the fundamentals with compound movements and establish consistent training habits.",
    stats: [
      { label: "Training Days", value: "3" },
      { label: "Exercises Per Day", value: "5-6" },
      { label: "Session Duration", value: "45-60 min" },
      { label: "Rest Between Sets", value: "2-3 min" },
    ],
    days: [
      {
        id: "day1",
        name: "Day 1",
        focus: "LOWER BODY",
        description: "Explosive hip hinge patterns and leg strength",
        exercises: [
          {
            name: "Barbell Back Squats",
            sets: "4x6-8",
            notes: "Primary: Legs",
          },
          {
            name: "Romanian Deadlifts",
            sets: "3x8-10",
            notes: "Hamstrings & Glutes",
          },
          {
            name: "Leg Press",
            sets: "3x8-12",
            notes: "Quad Volume",
          },
          {
            name: "Leg Curls",
            sets: "3x10-12",
            notes: "Hamstring Isolation",
          },
          {
            name: "Calf Raises",
            sets: "3x12-15",
            notes: "Calf Pump",
          },
        ],
      },
      {
        id: "day2",
        name: "Day 2",
        focus: "PULL DAY",
        description: "Back width and pulling strength fundamentals",
        exercises: [
          {
            name: "Barbell Rows",
            sets: "4x6-8",
            notes: "Primary: Back Thickness",
          },
          {
            name: "Lat Pulldowns",
            sets: "3x8-10",
            notes: "Back Width",
          },
          {
            name: "Barbell Curls",
            sets: "3x8-10",
            notes: "Bicep Strength",
          },
          {
            name: "Face Pulls",
            sets: "3x12-15",
            notes: "Rear Delts & Shoulder Health",
          },
          {
            name: "Barbell Shrugs",
            sets: "3x8-10",
            notes: "Trap Development",
          },
        ],
      },
      {
        id: "day3",
        name: "Day 3",
        focus: "PUSH DAY",
        description: "Horizontal and vertical pressing patterns",
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
    ],
    principles: [
      {
        title: "Master The Fundamentals",
        description:
          "Learn proper form on compound movements. Quality over quantity.",
      },
      {
        title: "Progressive Overload",
        description:
          "Add weight or reps each week. Aim for ~2.5 lbs increases on upper body, 5 lbs on lower body.",
      },
      {
        title: "Consistency Is King",
        description:
          "Stick with this program for 12 weeks minimum. Results come from adherence.",
      },
      {
        title: "Recovery Matters",
        description:
          "Sleep 7-9 hours, eat in a slight surplus, and rest 2-3 minutes between heavy sets.",
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
              Foundation Building
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
                <div className="text-xl font-bold text-accent sm:text-2xl">
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
            Your 3-Day <span className="text-accent">Program</span>
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {programData.days.map((day) => (
              <button
                key={day.id}
                onClick={() =>
                  setExpandedDay(expandedDay === day.id ? null : day.id)
                }
                className="w-full"
              >
                <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-[#0f1629] to-[#0a0e1a] p-4 text-left transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-oswald text-lg font-bold uppercase text-white sm:text-xl">
                        {day.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm font-bold text-accent">
                          {day.focus}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-400 sm:text-sm">
                          {day.description}
                        </span>
                      </div>
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
              Ready to Start?
            </h3>
            <p className="mb-6 text-xs text-gray-400 sm:text-sm">
              Sign in to save your progress, track your lifts, and connect with our community.
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

      {/* Padding for mobile nav */}
      <div className="h-16 md:hidden" />
    </main>
  );
}
