'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative overflow-hidden">
      {/* Gradient orb background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              • Elite Training System
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-white">Redefine Your</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
            BlackOnLifter provides elite training programs designed for serious lifters. Choose your level: Advanced, Hypertrophy, Athlete, or Intermediate modes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/beginner" className="px-6 sm:px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 rounded-lg font-bold text-sm sm:text-base transition transform hover:scale-105">
              Choose Your Level
            </Link>
            <button className="px-6 sm:px-8 py-3 border-2 border-slate-600 hover:border-cyan-400 text-white rounded-lg font-bold text-sm sm:text-base transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="hidden lg:flex justify-center items-center relative h-96 lg:h-full min-h-96">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent rounded-full blur-3xl" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo0-IRADdYywV7A8EhJ73KEYnADlOVRaKg.png"
            alt="BlackOnLifter Mascot"
            width={400}
            height={500}
            className="relative z-10 drop-shadow-2xl object-contain"
            priority
          />
        </div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden w-full max-w-md mx-auto mt-8 relative h-64">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo0-IRADdYywV7A8EhJ73KEYnADlOVRaKg.png"
          alt="BlackOnLifter Mascot"
          width={300}
          height={400}
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
