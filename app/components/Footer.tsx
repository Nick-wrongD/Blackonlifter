'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold">B</span>
              </div>
              <h3 className="font-bold text-white">BlackOnLifter</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">Elite training programs for serious lifters.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Program</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/advanced" className="hover:text-cyan-400 transition">Advanced Mode</Link></li>
              <li><Link href="/hypertrophy" className="hover:text-cyan-400 transition">Hypertrophy Mode</Link></li>
              <li><Link href="/athlete" className="hover:text-cyan-400 transition">Athlete Mode</Link></li>
              <li><Link href="/intermediate" className="hover:text-cyan-400 transition">Intermediate Mode</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-slate-500">
              © 2024 BlackOnLifter. All rights reserved.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-cyan-400 text-sm transition">Twitter</a>
              <a href="#" className="hover:text-cyan-400 text-sm transition">Instagram</a>
              <a href="#" className="hover:text-cyan-400 text-sm transition">Discord</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
