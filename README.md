# BlackOnLifter - Next.js + Firebase Setup Guide

## Project Overview

This is a modern Next.js application featuring:
- **Responsive Mobile Design** - Built mobile-first with TailwindCSS
- **Firebase Authentication** - Google OAuth sign-in
- **5 Training Modes** - Beginner, Intermediate, Athlete, Advanced, Hypertrophy
- **Dark Theme UI** - Matching the original design system with cyan accents

## Getting Started

### 1. Firebase Configuration

You need to set up a Firebase project and add your credentials to `.env.local`:

#### Steps:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing
3. Enable Google Authentication:
   - Go to Authentication → Sign-in method
   - Enable Google provider
4. Get your config from Project Settings:
   - Click gear icon → Project Settings
   - Copy your Web API configuration

#### Update `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 2. Development

```bash
# Install dependencies (already done via pnpm)
pnpm install

# Start dev server
pnpm dev
# Open http://localhost:3000
```

### 3. Project Structure

```
app/
├── layout.tsx           # Root layout with auth provider
├── page.tsx            # Homepage with mode selection
├── globals.css         # Global styles
└── modes/
    ├── page.tsx        # Mode selection page
    ├── beginner/
    ├── intermediate/
    ├── athlete/
    ├── advanced/
    └── hypertrophy/

components/
├── Navbar.tsx          # Navigation bar with auth
├── AuthModal.tsx       # Google sign-in modal
└── (future components)

context/
└── AuthContext.tsx     # Firebase auth context

lib/
└── firebase.ts         # Firebase initialization
```

## Features

### Authentication
- Google OAuth sign-in via AuthModal
- Session persistence using Firebase Auth
- Logout functionality
- User profile in navbar

### UI Components
- **Navbar** - Fixed top nav with auth, home, and "Change Level" button
- **AuthModal** - Sign-in modal accessible from any page
- **Mode Cards** - Responsive grid layout for program selection
- **Expandable Day Breakdowns** - Click to see exercises for each training day
- **Mobile Bottom Navigation** - For easy access on phones

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly buttons and spacing
- Optimized for all device sizes

## Styling System

### Colors
- **Background**: `#0a0e1a` (dark navy)
- **Primary (Accent)**: `#00d9ff` (cyan)
- **Secondary**: `#ff6b35` (orange - used in Advanced mode)
- **Text**: White with gray accents

### Typography
- **Headings**: Oswald (bold, uppercase)
- **Body**: Montserrat (regular weight)
- **Line heights**: 1.4-1.6 for readability

### Tailwind Classes Used
- `btn-primary` - Cyan CTA buttons
- `btn-outline` - Outlined buttons
- `text-accent` - Cyan text
- `text-secondary` - Orange text (Advanced/Hypertrophy)
- Responsive classes: `sm:`, `md:`, `lg:`

## Firebase Setup Checklist

- [ ] Create Firebase project
- [ ] Enable Google authentication
- [ ] Copy Firebase config to `.env.local`
- [ ] Test sign-in modal on homepage
- [ ] Verify auth persistence
- [ ] Test logout functionality

## Deployment

### To Vercel:
```bash
# Push to GitHub
git add .
git commit -m "Initial Next.js + Firebase setup"
git push origin main

# In Vercel dashboard:
# 1. Import project from GitHub
# 2. Add environment variables from .env.local
# 3. Deploy
```

## Next Steps

1. **Add user data persistence** - Save user training preferences to Firestore
2. **Implement workout logging** - Track completed exercises
3. **Add progress charts** - Visualize strength gains over time
4. **User settings page** - Profile customization
5. **Social features** - Connect with community lifters

## Troubleshooting

### "Firebase config is invalid"
- Check all Firebase env vars are filled in `.env.local`
- Verify you copied from correct Firebase project

### "Google sign-in not working"
- Ensure Google provider is enabled in Firebase Authentication
- Check authorized domains in Firebase console
- Verify redirect URIs if deployed

### "Style issues on mobile"
- Clear browser cache
- Restart dev server with `pnpm dev`
- Test in mobile viewport mode (DevTools)

## Questions?

Refer to the [Next.js Docs](https://nextjs.org/docs) and [Firebase Docs](https://firebase.google.com/docs) for detailed guidance.
