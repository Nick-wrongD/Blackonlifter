"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface NavbarProps {
  showChangeLevel?: boolean;
  onAuthClick?: () => void;
}

export function Navbar({ showChangeLevel = false, onAuthClick }: NavbarProps) {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("[v0] Logout failed:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-accent/20 bg-background/95 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-accent">
            <span className="text-sm font-bold text-background">⚡</span>
          </div>
          <span className="text-sm font-bold text-accent sm:text-base">
            BlackOnLifter
          </span>
        </Link>

        {/* Center - Change Level Button */}
        {showChangeLevel && (
          <Link
            href="/modes"
            className="hidden text-xs font-bold text-accent transition-all hover:text-white md:block"
          >
            ← CHANGE LEVEL
          </Link>
        )}

        {/* Right side - Auth/User Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          {loading ? (
            <div className="h-8 w-8 animate-pulse rounded bg-accent/20" />
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 rounded px-3 py-2 text-sm font-bold text-accent hover:bg-accent/10"
              >
                <span className="hidden sm:inline">{user.displayName || "User"}</span>
                <span className="sm:hidden">👤</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded bg-[#0f1629] shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-accent/10"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              className="btn-primary text-xs font-bold"
            >
              Sign In
            </button>
          )}

          {/* Home icon */}
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded hover:bg-accent/10"
            title="Home"
          >
            🏠
          </Link>
        </div>
      </div>
    </nav>
  );
}
