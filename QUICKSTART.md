# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Firebase Configuration (5 minutes)

1. **Create Firebase Project:**
   - Go to https://console.firebase.google.com
   - Click "Add project" → name it "BlackOnLifter"
   - Enable Google authentication in Authentication settings

2. **Get Your Credentials:**
   - Project Settings → Web app config
   - Copy the 6 values (API Key, Auth Domain, Project ID, etc.)

3. **Add to `.env.local`:**
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_value
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_value
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_value
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_value
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_value
   NEXT_PUBLIC_FIREBASE_APP_ID=your_value
   ```

### Step 2: Test Locally (1 minute)

```bash
# Terminal
pnpm dev

# Browser
# Visit http://localhost:3000
# Click "Sign In with Google" to test
```

### Step 3: Deploy to Vercel (2 minutes)

```bash
# Push to GitHub
git add .
git commit -m "BlackOnLifter initial setup"
git push

# Then:
# 1. Go to https://vercel.com/dashboard
# 2. Import your GitHub repo
# 3. Add the 6 Firebase env vars in Vercel Settings
# 4. Deploy!
```

**Done!** Your app is live. 🎉

---

## 📱 What You Get

- ✅ Homepage with 5 training modes
- ✅ Detailed workout programs
- ✅ Google sign-in authentication
- ✅ Fully responsive mobile design
- ✅ Dark theme with cyan accents
- ✅ Ready to scale and customize

## 📚 Full Documentation

- `README.md` - Detailed setup guide
- `DEPLOYMENT.md` - Complete deployment walkthrough
- `BUILD_SUMMARY.md` - What was built and how it works

## 🆘 Troubleshooting

**"Sign in not working?"**
- Check Firebase env vars are in `.env.local`
- Verify Google auth is enabled in Firebase Console
- Restart dev server (`pnpm dev`)

**"Styles look broken?"**
- Clear cache: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Restart server: `pnpm dev`

**"Deploy issues?"**
- Make sure all 6 Firebase vars are in Vercel Environment Variables
- Check that your domain is in Firebase Authorized Domains

## 🎨 Customization

The design system is in:
- `app/globals.css` - Colors, animations, utilities
- `tailwind.config.ts` - Color palette and theme
- `components/` - Reusable components

Change colors, fonts, or layout easily!

---

**Questions?** See the full docs or contact support.
