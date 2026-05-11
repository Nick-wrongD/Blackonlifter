# BlackOnLifter - Application Flow

## Authentication Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      VISITOR ARRIVES                         │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  / (Home)    │
                    │  Login Page  │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              │                        │
              ▼                        ▼
    ┌──────────────────┐    ┌──────────────────┐
    │ Email/Password   │    │ Google OAuth     │
    │ Form             │    │ Sign In          │
    └────────┬─────────┘    └────────┬─────────┘
             │                       │
             └───────────┬───────────┘
                         │
                         ▼
              ┌────────────────────┐
              │ Firebase Auth      │
              │ Validates User     │
              └────────┬───────────┘
                       │
            ┌──────────┴──────────┐
            │                     │
            ▼                     ▼
    ┌──────────────┐    ┌─────────────────────┐
    │ Auth Error   │    │ User Authenticated  │
    │ Show Message │    │ Session Created     │
    └──────────────┘    └──────────┬──────────┘
                                   │
                                   ▼
                        ┌──────────────────┐
                        │ /modes           │
                        │ Mode Selection   │
                        │ Page             │
                        └────────┬─────────┘
                                 │
                 ┌───────────────┬┼────────────┬──────────────┐
                 │               │ │            │              │
                 ▼               ▼ ▼            ▼              ▼
        ┌──────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
        │ Beginner     │ │Intermedia. │ │  Athlete   │ │Hypertrophy │
        │ (Red)        │ │  (Cyan)    │ │  (Yellow)  │ │  (Purple)  │
        └──────┬───────┘ └──────┬─────┘ └──────┬─────┘ └──────┬─────┘
               │                │              │              │
               └────────────────┼──────────────┼──────────────┘
                                │
                                ▼
                     ┌──────────────────────┐
                     │ /modes/[id]          │
                     │ Mode Detail Page     │
                     │ - Daily workouts     │
                     │ - Exercises          │
                     │ - Training principles│
                     └──────────┬───────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
          ┌──────────────────┐  ┌──────────────────┐
          │ Change Level     │  │ Sign Out         │
          │ Back to /modes   │  │ Clear Session    │
          └────────┬─────────┘  └────────┬─────────┘
                   │                     │
                   └─────────┬───────────┘
                             │
                             ▼
                      ┌──────────────┐
                      │ / (Login)    │
                      │ Start Over   │
                      └──────────────┘
```

## Directory Structure

```
blackonlifter/
│
├── app/                                # Next.js App Router
│   ├── context/
│   │   └── auth-context.tsx           # Authentication Provider
│   ├── modes/
│   │   ├── page.tsx                   # Mode Selection Page
│   │   └── [id]/
│   │       └── page.tsx               # Mode Detail Page
│   ├── layout.tsx                     # Root Layout with AuthProvider
│   ├── page.tsx                       # Home/Login Page
│   └── globals.css                    # Global Styles
│
├── components/                         # Reusable Components
│   ├── auth-form.tsx                  # Login/Signup Form
│   ├── header.tsx                     # Navigation Header
│   ├── loading-spinner.tsx            # Loading Indicator
│   └── protected-route.tsx            # Protected Route Wrapper
│
├── lib/                               # Utilities & Configuration
│   ├── firebase.ts                    # Firebase Config
│   ├── training-modes.ts              # Training Data (4 modes)
│   └── use-auth.ts                    # Auth Hook
│
├── public/                            # Static Assets
│   └── favicon.ico                    # (Optional)
│
├── Configuration Files
│   ├── package.json                   # Dependencies
│   ├── tsconfig.json                  # TypeScript Config
│   ├── tailwind.config.js             # Tailwind Theme
│   ├── next.config.ts                 # Next.js Config
│   ├── postcss.config.js              # PostCSS Config
│   └── .gitignore                     # Git Ignore
│
├── Documentation Files
│   ├── README.md                      # Main Documentation
│   ├── SETUP.md                       # Firebase Setup Guide
│   ├── IMPLEMENTATION.md              # Architecture Details
│   ├── API_REFERENCE.md               # Component Reference
│   ├── DEPLOYMENT_CHECKLIST.md        # Launch Checklist
│   ├── BUILD_SUMMARY.txt              # Build Overview
│   ├── PROJECT_OVERVIEW.txt           # Visual Overview
│   └── .env.example                   # Environment Template
│
├── .env.local                         # Environment Variables (Create this!)
├── .next/                             # Build Output
├── node_modules/                      # Dependencies
└── package-lock.json                  # Dependency Lock
```

## Component Hierarchy

```
┌─────────────────────────────────────────────────┐
│           RootLayout                            │
│  (Metadata, Font Import)                        │
└────────────────────┬────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │    AuthProvider         │
        │  (Global State)         │
        └────────────┬────────────┘
                     │
         ┌───────────┴──────────┐
         │                      │
    ┌────▼────────┐    ┌───────▼──────┐
    │  Page /     │    │  Page /modes │
    │  (Login)    │    │  (Protected) │
    │             │    │              │
    │  AuthForm   │    │  ModeCards   │
    │  - Google   │    │  - 4 Buttons │
    │  - Email    │    │  - Colors    │
    └─────────────┘    └───────┬──────┘
                               │
                        ┌──────▼──────┐
                        │ Page /modes │
                        │ /[id]       │
                        │ (Protected) │
                        │             │
                        │ Header      │
                        │ DaySection  │
                        │ Exercise    │
                        │ Principles  │
                        └─────────────┘
```

## Data Flow

```
┌──────────────────────────────────────────────────┐
│  User Actions                                     │
├──────────────────────────────────────────────────┤
│  - Click "Sign Up" button                        │
│  - Enter email & password                        │
│  - Click "Continue with Google"                  │
│  - Click mode card                               │
│  - Click "Change Level"                          │
│  - Click "Sign Out"                              │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Component Handlers                              │
├──────────────────────────────────────────────────┤
│  - AuthForm.handleEmailAuth()                    │
│  - AuthForm.handleGoogleSignIn()                 │
│  - useAuth() hook accesses auth state            │
│  - Navigation to /modes or [id] routes           │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Firebase Operations                             │
├──────────────────────────────────────────────────┤
│  - createUserWithEmailAndPassword()              │
│  - signInWithEmailAndPassword()                  │
│  - signInWithPopup(googleProvider)               │
│  - signOut(auth)                                 │
│  - onAuthStateChanged() listener                 │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Auth Context Updates                            │
├──────────────────────────────────────────────────┤
│  - setUser(currentUser)                          │
│  - setLoading(false)                             │
│  - Notify all components via useAuth()           │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Component Re-renders                            │
├──────────────────────────────────────────────────┤
│  - Show/hide protected routes                    │
│  - Display user data                             │
│  - Update navigation                             │
│  - Redirect to appropriate page                  │
└──────────────────────────────────────────────────┘
```

## Page Routing

```
PUBLIC ROUTES:
  / ......................... Login/Signup Page
                            └─ AuthForm Component
                               ├─ Email/Password Input
                               ├─ Google OAuth Button
                               └─ Toggle Login/Signup

PROTECTED ROUTES:
  /modes ................... Mode Selection Page
                            └─ Grid of 4 Mode Cards
                               ├─ Beginner (Red)
                               ├─ Intermediate (Cyan)
                               ├─ Athlete (Yellow)
                               └─ Hypertrophy (Purple)

  /modes/beginner .......... Mode Detail Page
  /modes/intermediate ...... (with dynamic content)
  /modes/athlete ........... for each mode
  /modes/hypertrophy ...

                            └─ Header Component
                            └─ Daily Schedules
                            └─ Exercise Lists
                            └─ Training Principles
```

## State Management

```
Global State (AuthContext):
├─ user: User | null
│  └─ Firebase User object (email, uid, etc.)
├─ loading: boolean
│  └─ True during auth operations
└─ logout: () => Promise<void>
   └─ Sign out function

Component State (Individual Components):
├─ AuthForm
│  ├─ email: string
│  ├─ password: string
│  ├─ isSignUp: boolean
│  ├─ loading: boolean
│  └─ error: string
├─ DaySection
│  ├─ expanded: boolean
└─ ExerciseItem
   └─ expanded: boolean
```

## Styling System

```
Theme Layers:
├─ Tailwind Base
│  └─ Reset styles, default element styles
├─ Tailwind Components
│  ├─ .btn-primary
│  ├─ .btn-secondary
│  ├─ .mode-card
│  ├─ .section-title
│  └─ .section-subtitle
├─ Tailwind Utilities
│  ├─ Spacing (p-, m-, gap-)
│  ├─ Colors (text-, bg-, border-)
│  ├─ Layout (flex, grid)
│  └─ Responsive (sm:, md:, lg:)
└─ Custom Styles
   └─ Animation and special effects
```

---

This flow diagram shows how BlackOnLifter guides users through authentication and into their selected training program!
