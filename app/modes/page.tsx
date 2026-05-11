"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { AuthModal } from "@/components/AuthModal";

export default function ModesPage() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const modes = [
    {
      name: "Beginner",
      emoji: "🔰",
      color: "accent",
      description: "Start your strength journey with solid foundations",
      days: "3-4 Days/Week",
      href: "/modes/beginner",
    },
    {
      name: "Intermediate",
      emoji: "💪",
      color: "accent",
      description: "Build explosive power and structural strength",
      days: "4 Days/Week",
      href: "/modes/intermediate",
    },
    {
      name: "Athlete",
      emoji: "🏆",
      color: "accent",
      description: "Apex training for advanced lifters",
      days: "4 Days/Week",
      href: "/modes/athlete",
    },
    {
      name: "Advanced",
      emoji: "🔥",
      color: "accent",
      description: "Elite physiques built on years of training",
      days: "5 Days/Week",
      href: "/modes/advanced",
    },
    {
      name: "Hypertrophy",
      emoji: "💎",
      color: "accent",
      description: "Gold standard for aesthetic bodybuilding",
      days: "6 Days/Week",
      href: "/modes/hypertrophy",
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar onAuthClick={() => setShowAuthModal(true)} />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      <section className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="font-oswald mb-4 text-4xl font-black uppercase text-white sm:text-5xl">
              Select Your <span className="text-accent">Mode</span>
            </h1>
            <p className="text-sm text-gray-400 sm:text-base">
              Choose a program that matches your experience and goals
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {modes.map((mode) => (
              <Link key={mode.name} href={mode.href}>
                <div className="group relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-r from-[#0f1629] to-[#0a0e1a] p-4 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-6">
                  <div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="text-3xl sm:text-4xl">{mode.emoji}</div>
                      <div>
                        <h3 className="font-oswald text-lg font-bold uppercase text-white sm:text-2xl">
                          {mode.name} Mode
                        </h3>
                        <p className="text-xs text-gray-400 sm:text-sm">
                          {mode.description}
                        </p>
                        <p className="mt-2 text-xs font-bold text-accent/80 sm:text-sm">
                          {mode.days}
                        </p>
                      </div>
                    </div>
                    <div className="text-accent">→</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-accent/30 bg-[#0f1629] p-4 text-center sm:p-6">
            <p className="text-xs text-gray-400 sm:text-sm">
              Not sure which mode is right for you? Start with Beginner if you're new to structured training.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
