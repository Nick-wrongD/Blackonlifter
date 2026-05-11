"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AuthModal } from "@/components/AuthModal";

export default function AthletePage() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>("day1");

  const programData = {
    title: "ATHLETE",
    subtitle: "4-DAY ELITE SPLIT",
    description:
      "The apex training system. Built for those who have already conquered the basics and are ready to train like predators. Focus on explosive power, structural strength, and sport-transfer mobility. 4 days per week.",
    stats: [
      { label: "Training Days", value: "4" },
      { label: "Exercises Per Day", value: "37" },
      { label: "Max Duration", value: "90 min" },
      { label: "Rest Per Exercise", value: "8-12" },
    ],
    days: [
      {
        id: "day1",
        name: "Day 1",
        focus: "PULL",
        description: "Black, Biceps, Forearms, Grip",
        exercises: [
          {
            name: "Hip Circles • Lug Swings",
            type: "MOBILITY",
            notes: "Primary Focus: Explosive Hip Hinges • Leg Drive",
          },
          {
            name: "Cube Bridges",
            type: "ACTIVATION",
            notes: "3 TRICYDIVE TEELT INTO JOE IN BETWEEN SETS",
          },
          {
            name: "Dom Jumps",
            type: "EXPLOSIVE",
            notes: "Plyometric power development",
          },
          {
            name: "Broad Jumps",
            type: "EXPLOSIVE",
            notes: "Horizontal propulsion and coordination",
          },
        ],
      },
      {
        id: "day2",
        name: "Day 2",
        focus: "LEGS",
        description: "Quads, Glutes, Calves",
        exercises: [
          {
            name: "Barbell Squat",
            sets: "4x5-6",
            notes: "Primary Power Development",
          },
          {
            name: "Romanian Deadlift",
            sets: "3x6-8",
            notes: "Hamstring Emphasis",
          },
          {
            name: "Leg Press",
            sets: "3x8-10",
            notes: "Volume and Hypertrophy",
          },
          {
            name: "Leg Curls",
            sets: "3x10-12",
            notes: "Hamstring Isolation",
          },
          {
            name: "Calf Raises",
            sets: "3x12-15",
            notes: "Calf Development",
          },
        ],
      },
      {
        id: "day3",
        name: "Day 3",
        focus: "PUSH",
        description: "Chest, Shoulders, Triceps",
        exercises: [
          {
            name: "Barbell Bench Press",
            sets: "4x5-6",
            notes: "Primary: Chest Strength",
          },
          {
            name: "Incline Dumbbell Press",
            sets: "3x6-8",
            notes: "Upper Chest Priority",
          },
          {
            name: "Overhead Press",
            sets: "3x5-6",
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
            name: "Tricep Dips",
            sets: "3x8-10",
            notes: "Compound Tricep Work",
          },
          {
            name: "Tricep Pushdowns",
            sets: "3x10-12",
            notes: "Tricep Pump and Finish",
          },
        ],
      },
      {
        id: "day4",
        name: "Day 4",
        focus: "FULL BODY",
        description: "Compound Power and Recovery & Mobility",
        exercises: [
          {
            name: "Power Cleans",
            sets: "3x3-5",
            notes: "Olympic lift variation for power",
          },
          {
            name: "Box Jumps",
            sets: "3x5",
            notes: "Explosive leg power",
          },
          {
            name: "Mobility Flow",
            sets: "15-20 min",
            notes: "Joint health and movement quality",
          },
        ],
      },
    ],
    principles: [
      {
        title: "Explosive Intensity",
        description:
          "Every set should feel like a controlled explosion. Focus on rate of force development.",
      },
      {
        title: "Structural Resilience",
        description:
          "Build bulletproof joints and connective tissue with compound lifts and proper form.",
      },
      {
        title: "Sport-Transfer Mobility",
        description:
          "Dedicate time each week to athletic mobility and movement pattern diversity.",
      },
      {
        title: "Recovery Optimization",
        description:
          "Rest 2-3 minutes between heavy sets. This program demands proper CNS recovery.",
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
              Elite Performance
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
            Your 4-Day <span className="text-accent">Elite Program</span>
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
                          {(exercise as any).sets && (
                            <span className="whitespace-nowrap text-accent">
                              {(exercise as any).sets}
                            </span>
                          )}
                          {(exercise as any).type && (
                            <span className="whitespace-nowrap text-xs text-accent">
                              {(exercise as any).type}
                            </span>
                          )}
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
              Train Like An Athlete
            </h3>
            <p className="mb-6 text-xs text-gray-400 sm:text-sm">
              Join the elite. Push your limits and discover what you're truly capable of.
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
