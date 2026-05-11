"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      await signInWithGoogle();
      onClose();
    } catch (err) {
      console.error("[v0] Google sign-in failed:", err);
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="w-full max-w-md rounded-lg bg-[#0f1629] p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white">Welcome to</h2>
          <h1 className="text-3xl font-bold text-accent">BlackOnLifter</h1>
        </div>

        {error && (
          <div className="mb-4 rounded bg-red-900/20 p-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="btn-primary w-full py-3 font-bold"
        >
          {loading ? "Signing in..." : "Sign In with Google"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Sign in to access all training modes and track your progress.
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full border-2 border-accent px-4 py-3 text-accent hover:bg-accent hover:text-background"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
}
