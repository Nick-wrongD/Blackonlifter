'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/use-auth';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface HeaderProps {
  showChangeLevel?: boolean;
  onChangeLevel?: () => void;
  title?: string;
}

export function Header({ showChangeLevel, onChangeLevel, title }: HeaderProps) {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const handleChangeLevel = () => {
    if (onChangeLevel) {
      onChangeLevel();
    } else {
      router.push('/modes');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-teal-900/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/modes" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center text-foreground font-bold text-sm">
              ⚡
            </div>
            <span className="font-bold text-foreground">BlackOnLifter</span>
          </Link>
        </div>

        {title && <h1 className="text-foreground text-sm md:text-base font-semibold">{title}</h1>}

        <div className="flex items-center gap-3">
          {showChangeLevel && (
            <button
              onClick={handleChangeLevel}
              className="px-3 py-1.5 text-sm font-semibold border border-teal-500/50 text-teal-400 rounded hover:bg-teal-500/10 transition"
            >
              ⤴ CHANGE LEVEL
            </button>
          )}
          {user && (
            <button
              onClick={handleSignOut}
              className="px-3 py-1.5 text-sm font-semibold border border-red-500/50 text-red-400 rounded hover:bg-red-500/10 transition"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
