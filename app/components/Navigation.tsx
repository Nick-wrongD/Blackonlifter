'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-green-400 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">B</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg">BlackOnLifter</h1>
              <p className="text-xs text-slate-400">Elite Training</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition">
              Features
            </Link>
            <Link href="#modes" className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition">
              Training Modes
            </Link>
            <Link href="#" className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition">
              Resources
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="px-4 sm:px-6 py-2 text-slate-300 hover:text-cyan-400 text-sm font-medium transition">
              Log In
            </button>
            <button className="px-4 sm:px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-slate-900 rounded-lg font-semibold text-sm transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
