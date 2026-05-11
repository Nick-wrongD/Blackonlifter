# BlackOnLifter API & Component Reference

## Authentication API

### useAuth() Hook

Custom hook for accessing authentication context throughout the app.

```typescript
import { useAuth } from '@/lib/use-auth';

export function MyComponent() {
  const { user, loading, logout } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  if (!user) return <div>Not authenticated</div>;
  
  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}
```

**Returns:**
- `user: User | null` - Current authenticated user (Firebase User object)
- `loading: boolean` - True during authentication operations
- `logout: () => Promise<void>` - Function to sign out user

### AuthProvider

Wraps the entire application to provide authentication context.

Located in: `/app/context/auth-context.tsx`

Automatically available via `/app/layout.tsx`

## Components

### AuthForm

Handles login and signup functionality.

```typescript
import { AuthForm } from '@/components/auth-form';

export function LoginPage() {
  return <AuthForm />;
}
```

**Features:**
- Email/Password authentication
- Google OAuth sign-in
- Toggle between login and signup modes
- Error handling and display
- Loading states

### Header

Navigation header with branding and user controls.

```typescript
import { Header } from '@/components/header';

export function ModePage() {
  return (
    <>
      <Header 
        showChangeLevel={true} 
        onChangeLevel={() => router.push('/modes')}
        title="Training Mode"
      />
      {/* Page content */}
    </>
  );
}
```

**Props:**
- `showChangeLevel?: boolean` - Show "Change Level" button
- `onChangeLevel?: () => void` - Callback when changing level
- `title?: string` - Page title to display

### ProtectedRoute

Wraps components to protect from unauthorized access.

```typescript
import { ProtectedRoute } from '@/components/protected-route';

export default function MyPage() {
  return (
    <ProtectedRoute>
      <ProtectedContent />
    </ProtectedRoute>
  );
}
```

### LoadingSpinner

Displays a loading indicator.

```typescript
import { LoadingSpinner } from '@/components/loading-spinner';

export function MyPage() {
  const { loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  return <div>Page content</div>;
}
```

## Data Models

### Training Mode

```typescript
interface TrainingMode {
  id: string;              // Unique identifier (beginner, intermediate, athlete, hypertrophy)
  name: string;            // Display name
  title: string;           // Large title
  subtitle: string;        // Subtitle
  color: 'red' | 'cyan' | 'yellow' | 'purple';
  description: string;     // Full description
  stats: Array<{
    label: string;
    value: string;
  }>;
  days: Day[];
  sections: Array<{
    title: string;
    content: string;
  }>;
}
```

### Day

```typescript
interface Day {
  id: string;
  name: string;           // e.g., "DAY 1", "DAY 2"
  title: string;          // e.g., "CHEST", "BACK"
  focus: string;          // Focus areas
  exercises: Exercise[];
}
```

### Exercise

```typescript
interface Exercise {
  id: number | string;
  name: string;
  description: string;
  type: string;           // WARM-UP, STRENGTH, COMPOUND, ISOLATION, etc.
  sets?: string;
  reps?: string;
  duration?: string;
}
```

## Pages & Routes

### Public Routes

#### / (Root)
- **Component**: `/app/page.tsx`
- **Purpose**: Home page with login/signup form
- **Accessible**: To all users
- **Auth**: Redirects to `/modes` if already logged in

### Protected Routes

#### /modes
- **Component**: `/app/modes/page.tsx`
- **Purpose**: Mode selection page
- **Accessible**: Authenticated users only
- **Auth**: Redirected to `/` if not authenticated
- **Features**:
  - Displays all 4 training modes
  - Mode cards with statistics
  - Click to view mode details

#### /modes/[id]
- **Component**: `/app/modes/[id]/page.tsx`
- **Purpose**: Individual mode detail page
- **Params**: `id` - training mode ID (beginner, intermediate, athlete, hypertrophy)
- **Accessible**: Authenticated users only
- **Features**:
  - Full mode description and statistics
  - Daily workout schedules
  - Exercise lists with expandable details
  - "Change Level" button to return to modes
  - Training principles section

## Firebase Integration

### Firebase Config

Location: `/lib/firebase.ts`

```typescript
import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

// Sign in with Google
await signInWithPopup(auth, googleProvider);

// Sign out
await signOut(auth);
```

**Exported Objects:**
- `auth` - Firebase auth instance
- `googleProvider` - Google auth provider
- `default` - Firebase app instance

### Authentication Methods

```typescript
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

// Email signup
await createUserWithEmailAndPassword(auth, email, password);

// Email login
await signInWithEmailAndPassword(auth, email, password);

// Google login
await signInWithPopup(auth, googleProvider);

// Logout
await signOut(auth);

// Listen to auth changes
const unsubscribe = onAuthStateChanged(auth, (user) => {
  console.log('User:', user);
});
```

## Styling System

### Tailwind Colors

Primary theme colors defined in `tailwind.config.js`:

```typescript
colors: {
  background: '#0a0e27',
  foreground: '#ffffff',
  accent: {
    red: '#ff2e3e',
    cyan: '#06b6d4',
    yellow: '#fbbf24',
    purple: '#c084fc',
  },
  muted: {
    DEFAULT: '#4b5563',
    foreground: '#9ca3af',
  },
}
```

### Component Classes

Defined in `globals.css`:

```css
.btn-primary    /* Primary action button */
.btn-secondary  /* Secondary action button */
.mode-card      /* Training mode card */
.section-title  /* Section heading */
.section-subtitle /* Section subtitle */
```

## Development Workflow

### File Changes Trigger

- TypeScript files (`.ts`, `.tsx`) - Auto-compiled and hot-reloaded
- CSS files - Auto-applied with HMR
- Environment variables - Requires restart

### Debugging

Enable console logging:
```typescript
console.log("[v0] Debug message:", variable);
```

Check browser DevTools:
- Application tab → Cookies (see auth tokens)
- Network tab → Firebase requests
- Console tab → Error messages

### Performance Tips

- Use React.memo() for expensive components
- Lazy load heavy components with dynamic()
- Optimize images with Next.js Image component
- Check bundle size with `npm run build`

## Testing Routes

### Test Authentication Flow

1. **Sign Up**
   - Navigate to `/`
   - Click "Sign up" toggle
   - Enter email and password
   - Click "Create Account"
   - Should redirect to `/modes`

2. **Sign In**
   - Navigate to `/`
   - Enter registered email and password
   - Click "Sign In"
   - Should redirect to `/modes`

3. **Sign Out**
   - While on `/modes`
   - Click "Sign Out" button
   - Should redirect to `/`

4. **Protected Route**
   - Try accessing `/modes` without login
   - Should redirect to `/`

### Test Training Modes

1. **Browse Modes**
   - After login, view all 4 modes on `/modes`
   - Check colors are correct
   - Click on mode card

2. **View Mode Details**
   - Click "Change Level" button
   - Should return to `/modes`
   - Verify URL is `/modes/[id]`

3. **Responsive Design**
   - Test on mobile (DevTools)
   - Test on tablet size
   - Test on desktop size

## Troubleshooting Guide

### Common Issues

**Issue**: "Firebase: Error (auth/invalid-api-key)"
- **Solution**: Check `.env.local` has correct Firebase credentials

**Issue**: "Cannot GET /modes"
- **Solution**: Make sure you're authenticated before accessing `/modes`

**Issue**: Styles not loading
- **Solution**: Clear `.next/` folder and restart dev server

**Issue**: Page shows blank/error
- **Solution**: Check browser console for errors

---

**Last Updated**: 2025
**Status**: Complete Reference
