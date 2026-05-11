"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar onAuthClick={() => setShowAuthModal(true)} />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {/* Hero Section */}
      <section className="relative px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Main Heading */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block border-l-2 border-accent pl-4 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-accent sm:text-sm">
                Elite Strength Training
              </p>
            </div>
            <h1 className="font-oswald mb-6 text-4xl font-black uppercase text-white sm:text-5xl md:text-6xl">
              Choose Your <span className="text-accent">Path</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-300 sm:text-base md:text-lg">
              Select from our five scientifically-designed training programs tailored to your experience level and goals. Each program is built on proven principles of progressive overload and optimal recovery.
            </p>
          </div>

          {/* Training Modes Grid */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-5">
            {/* Beginner Mode */}
            <Link href="/modes/beginner">
              <div className="group relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-[#0f1629] to-[#0a0e1a] p-4 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-6">
                <div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 text-2xl sm:text-3xl">🔰</div>
                  <h3 className="font-oswald mb-2 text-lg font-bold uppercase text-accent sm:text-xl">
                    Beginner
                  </h3>
                  <p className="text-xs text-gray-400 sm:text-sm">
                    Perfect foundation for those starting their strength journey.
                  </p>
                  <div className="mt-4 text-xs font-bold text-accent/80 sm:text-sm">
                    3-4 Days/Week →
                  </div>
                </div>
              </div>
            </Link>

            {/* Intermediate Mode */}
            <Link href="/modes/intermediate">
              <div className="group relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-[#0f1629] to-[#0a0e1a] p-4 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-6">
                <div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 text-2xl sm:text-3xl">💪</div>
                  <h3 className="font-oswald mb-2 text-lg font-bold uppercase text-accent sm:text-xl">
                    Intermediate
                  </h3>
                  <p className="text-xs text-gray-400 sm:text-sm">
                    Build explosive power and structural strength.
                  </p>
                  <div className="mt-4 text-xs font-bold text-accent/80 sm:text-sm">
                    4 Days/Week →
                  </div>
                </div>
              </div>
            </Link>

            {/* Athlete Mode */}
            <Link href="/modes/athlete">
              <div className="group relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-[#0f1629] to-[#0a0e1a] p-4 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-6">
                <div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 text-2xl sm:text-3xl">🏆</div>
                  <h3 className="font-oswald mb-2 text-lg font-bold uppercase text-accent sm:text-xl">
                    Athlete
                  </h3>
                  <p className="text-xs text-gray-400 sm:text-sm">
                    Apex training for those who conquered the basics.
                  </p>
                  <div className="mt-4 text-xs font-bold text-accent/80 sm:text-sm">
                    4 Days/Week →
                  </div>
                </div>
              </div>
            </Link>

            {/* Advanced Mode */}
            <Link href="/modes/advanced">
              <div className="group relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-[#0f1629] to-[#0a0e1a] p-4 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-6">
                <div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 text-2xl sm:text-3xl">🔥</div>
                  <h3 className="font-oswald mb-2 text-lg font-bold uppercase text-accent sm:text-xl">
                    Advanced
                  </h3>
                  <p className="text-xs text-gray-400 sm:text-sm">
                    Elite physiques built on years of training.
                  </p>
                  <div className="mt-4 text-xs font-bold text-accent/80 sm:text-sm">
                    5 Days/Week →
                  </div>
                </div>
              </div>
            </Link>

            {/* Hypertrophy Mode */}
            <Link href="/modes/hypertrophy">
              <div className="group relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-[#0f1629] to-[#0a0e1a] p-4 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-6">
                <div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 text-2xl sm:text-3xl">💎</div>
                  <h3 className="font-oswald mb-2 text-lg font-bold uppercase text-accent sm:text-xl">
                    Hypertrophy
                  </h3>
                  <p className="text-xs text-gray-400 sm:text-sm">
                    Gold standard for aesthetic bodybuilding.
                  </p>
                  <div className="mt-4 text-xs font-bold text-accent/80 sm:text-sm">
                    6 Days/Week →
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-lg border border-accent/30 bg-[#0f1629] p-6 text-center sm:p-8">
            <p className="mb-4 text-xs text-gray-400 sm:text-sm">
              {user
                ? "Select a program above to get started"
                : "Sign in to save your progress and track your journey"}
            </p>
            {!user && (
              <button
                onClick={() => setShowAuthModal(true)}
                className="btn-primary font-bold"
              >
                Sign In with Google
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-accent/20 px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-oswald mb-8 text-center text-3xl font-bold uppercase text-white sm:text-4xl">
            Why Choose BlackOnLifter?
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-accent/30 bg-[#0f1629] p-4 sm:p-6">
              <div className="mb-3 text-2xl sm:text-3xl">📊</div>
              <h3 className="font-oswald mb-2 font-bold uppercase text-accent">
                Science-Based
              </h3>
              <p className="text-xs text-gray-400 sm:text-sm">
                Every program is built on proven principles of progressive overload and optimal recovery.
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-[#0f1629] p-4 sm:p-6">
              <div className="mb-3 text-2xl sm:text-3xl">👥</div>
              <h3 className="font-oswald mb-2 font-bold uppercase text-accent">
                Community Tested
              </h3>
              <p className="text-xs text-gray-400 sm:text-sm">
                Refined by thousands of lifters in our community to ensure real-world results.
              </p>
            </div>
            <div className="rounded-lg border border-accent/30 bg-[#0f1629] p-4 sm:p-6">
              <div className="mb-3 text-2xl sm:text-3xl">🎯</div>
              <h3 className="font-oswald mb-2 font-bold uppercase text-accent">
                Goal-Oriented
              </h3>
              <p className="text-xs text-gray-400 sm:text-sm">
                Choose your path based on your experience level and fitness goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/20 bg-[#050710] px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl text-center text-xs text-gray-500 sm:text-sm">
          <p>&copy; 2025 BlackOnLifter. Built by lifters, for lifters.</p>
        </div>
      </footer>
    </main>
  );
}
