# BlackOnLifter - Deployment & Firebase Setup Guide

## Overview

Your BlackOnLifter Next.js application is ready to deploy! The app is fully built with:
- ✅ Responsive mobile design
- ✅ Firebase authentication infrastructure  
- ✅ All 5 training modes (Beginner, Intermediate, Athlete, Advanced, Hypertrophy)
- ✅ Change Level functionality
- ✅ TailwindCSS dark theme styling

**What's left**: Configure Firebase credentials for authentication to work.

---

## Step 1: Firebase Project Setup

### Create a Firebase Project
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Enter project name: `BlackOnLifter`
4. Accept the default settings and create

### Enable Google Authentication
1. In Firebase Console, go to **Authentication** (left sidebar)
2. Click **Get Started**
3. Click **Google** as a sign-in provider
4. Toggle **Enable** 
5. Set "Project support email" (your email is fine for now)
6. Click **Save**

### Get Your Firebase Config
1. Go to **Project Settings** (gear icon, top right)
2. Scroll to "Your apps" section
3. If you don't have a Web app, click **Add app** and select **Web**
4. Copy the Firebase config object

### Configure Authorized Domains
1. In **Authentication**, go to **Settings** tab
2. Scroll to "Authorized domains"
3. Add these domains:
   - `localhost:3000` (development)
   - `yourdomain.com` (after deployment)
   - `yourproject.vercel.app` (Vercel deployment)

---

## Step 2: Add Environment Variables

### For Local Development
Update `.env.local` in your project root:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=yourproject.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=yourproject
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=yourproject.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

**Where to find each value:**
- Copy from Firebase Console → Project Settings → Web app config
- All values labeled `NEXT_PUBLIC_*` are safe to expose (they're client-side)

### Test Locally
```bash
pnpm dev
# Visit http://localhost:3000
# Try clicking "Sign In with Google"
```

---

## Step 3: Deploy to Vercel

### Option A: Git + Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial BlackOnLifter Next.js setup"
   git push origin main
   ```

2. **Deploy via Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Add Environment Variables:**
   - In Vercel dashboard, go to your project settings
   - Click **Environment Variables**
   - Add all 6 Firebase variables from Step 2
   - Click "Save"

4. **Update Firebase Authorized Domains:**
   - Add your `yourproject.vercel.app` to Firebase authorized domains (see Step 1)

5. **Deploy:**
   - Vercel automatically deploys when you push to main
   - Or manually trigger deployment in Vercel dashboard

### Option B: Direct Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables when prompted
# Then vercel will give you your deployment URL
```

---

## Step 4: Testing

### Local Testing
```bash
pnpm dev
# Test homepage: http://localhost:3000
# Test auth modal: Click "Sign In with Google"
# Test navigation: Try changing levels and browsing modes
```

### Production Testing (Vercel)
1. Visit your deployed URL
2. Test Google sign-in (should work now)
3. Test responsive design on mobile devices
4. Test all mode pages

---

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)"
- **Cause**: Firebase config not set in `.env.local`
- **Fix**: Copy all 6 variables from Firebase → Project Settings

### "Google sign-in fails with redirect error"
- **Cause**: Domain not authorized in Firebase
- **Fix**: Add your domain to Firebase → Authentication → Settings → Authorized domains

### "Styles not loading"
- **Cause**: Tailwind CSS build issue
- **Fix**: 
  ```bash
  pnpm install
  pnpm dev  # restart dev server
  ```

### "Build fails on Vercel"
- **Cause**: Environment variables not set
- **Fix**: Go to Vercel project settings → Environment Variables → add all 6 Firebase vars

---

## Production Checklist

- [ ] Firebase project created
- [ ] Google authentication enabled
- [ ] All 6 env vars added to `.env.local`
- [ ] App works locally (`pnpm dev`)
- [ ] GitHub repository connected
- [ ] Project deployed to Vercel
- [ ] All 6 env vars added to Vercel
- [ ] `yourproject.vercel.app` added to Firebase authorized domains
- [ ] Google sign-in works on production
- [ ] Responsive design tested on mobile

---

## Next Features to Implement

1. **User Data Persistence**
   - Store user preferences in Firestore
   - Track selected training mode per user

2. **Workout Logging**
   - Allow users to log completed workouts
   - Store sets, reps, weight data

3. **Progress Analytics**
   - Display charts of strength gains
   - Personal records tracking

4. **Social Features**
   - Connect with other lifters
   - Share progress and achievements

---

## Support

- **Next.js Docs**: https://nextjs.org/docs
- **Firebase Docs**: https://firebase.google.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## File Structure Reference

```
.
├── app/
│   ├── layout.tsx              # Root layout + auth provider
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   └── modes/
│       ├── page.tsx            # Mode selection
│       ├── beginner/page.tsx    # Beginner program
│       ├── intermediate/page.tsx
│       ├── athlete/page.tsx
│       ├── advanced/page.tsx
│       └── hypertrophy/page.tsx
├── components/
│   ├── Navbar.tsx              # Navigation with auth
│   └── AuthModal.tsx           # Google sign-in modal
├── context/
│   └── AuthContext.tsx         # Firebase auth state
├── lib/
│   └── firebase.ts             # Firebase config
├── public/                      # Static assets
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── .env.local                  # Your Firebase credentials (keep secret!)
```

---

**You're all set!** Your BlackOnLifter app is ready to go live. Just add the Firebase credentials and deploy.
