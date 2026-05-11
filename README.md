# BlackOnLifter - Strength Training Programs

A modern, responsive Next.js application for elite strength training programs with Firebase authentication and color-coded training modes.

## Features

- **User Authentication**: Sign up and login with email or Google OAuth via Firebase
- **Protected Routes**: Only authenticated users can access training modes
- **4 Training Modes**: 
  - **Beginner** - Red themed, foundational training
  - **Intermediate** - Cyan themed, intermediate level programs
  - **Athlete** - Yellow themed, advanced athletic training
  - **Hypertrophy** - Purple themed, aesthetic bodybuilding focus
- **Mobile Responsive**: Fully responsive design optimized for all devices
- **Mode Selection**: "Change Level" button on each mode for easy navigation
- **Comprehensive Training Data**: Detailed exercise lists, daily schedules, and training principles

## Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Firebase account with authentication enabled

### Installation

1. **Clone or download the project**
   ```bash
   cd blackonlifter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a `.env.local` file in the project root
   - Add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Firebase Setup Guide

### 1. Create Firebase Project
- Go to [Firebase Console](https://console.firebase.google.com)
- Click "Add project" or "Create a project"
- Name it "BlackOnLifter"
- Accept the terms and create the project

### 2. Enable Authentication
- In the Firebase Console, go to Authentication → Sign-in method
- Enable "Email/Password"
- Enable "Google"
- Add your domain to authorized domains

### 3. Get Your Web SDK Configuration
- In Project Settings (⚙ icon), scroll to "Your apps"
- Click the Web app icon (</> symbol)
- Copy the firebaseConfig object
- Extract the values and add to `.env.local`

## Project Structure

```
/app
  /context
    - auth-context.tsx       # Authentication provider
  /modes
    - page.tsx               # Mode selection page
    - [id]/
      - page.tsx             # Individual mode detail page
  /layout.tsx                # Root layout with auth provider
  /page.tsx                  # Home/Login page
  
/components
  - auth-form.tsx            # Login/signup form component
  - header.tsx               # Navigation header
  - loading-spinner.tsx      # Loading indicator
  - protected-route.tsx      # Protected route wrapper

/lib
  - firebase.ts              # Firebase configuration
  - training-modes.ts        # Training program data
  - use-auth.ts              # Custom auth hook

/public
  - Favicon and static assets
```

## Authentication Flow

1. **Unauthenticated Users** → Redirected to login page
2. **Login/Signup** → Email or Google OAuth authentication
3. **Authenticated Users** → Access mode selection page
4. **Select Mode** → View detailed training program
5. **Change Level** → Return to mode selection

## Training Mode Data

Each training mode includes:
- Program overview and description
- Training statistics (days, exercises, duration, etc.)
- Daily workout schedules with exercises
- Exercise details (sets, reps, duration, type)
- Training principles and guidelines
- Weekly volume distribution

## Styling

Built with **Tailwind CSS** with a dark theme:
- **Primary Background**: `#0a0e27` (Dark Navy)
- **Accent Colors**:
  - Red (`#ff2e3e`) - Beginner mode
  - Cyan (`#06b6d4`) - Intermediate mode
  - Yellow (`#fbbf24`) - Athlete mode
  - Purple (`#c084fc`) - Hypertrophy mode
- **Text**: White and slate grays
- **Borders**: Subtle white opacity

## API Endpoints

This is a client-side application. All authentication is handled by Firebase. No backend API endpoints are required for basic functionality.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter (if configured)
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Optimizations

- **Code Splitting**: Each route is automatically code-split by Next.js
- **Image Optimization**: Uses Next.js Image component
- **Font Optimization**: Geist font family loaded from next/font
- **Caching**: Static assets cached with long-term caching headers
- **Mobile First**: Responsive design prioritizes mobile experience

## Security

- **Protected Routes**: Authentication context wrapper prevents unauthorized access
- **Firebase Auth**: Secure, industry-standard authentication
- **HTTPS**: All deployments use secure HTTPS
- **Environment Variables**: Sensitive data stored in environment variables
- **Client-Side**: No sensitive data stored in localStorage

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect to Vercel dashboard
3. Add environment variables from `.env.local`
4. Vercel automatically deploys on push

### Other Hosting Options
- AWS Amplify
- Netlify
- Firebase Hosting
- AWS S3 + CloudFront

## Troubleshooting

### Firebase Auth Errors
- **"Invalid API Key"**: Check `.env.local` has correct Firebase credentials
- **"Auth/configuration-not-found"**: Ensure Firebase is enabled in your project
- **"CORS Error"**: Check authorized domains in Firebase Console

### Development Issues
- **Port already in use**: Change port with `npm run dev -- -p 3001`
- **Styles not loading**: Clear `.next` folder and restart: `rm -rf .next && npm run dev`
- **Module not found**: Run `npm install` to ensure all dependencies are installed

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

For issues or questions:
- Check the [Setup Guide](./SETUP.md)
- Review Firebase documentation: https://firebase.google.com/docs/auth
- Check Next.js documentation: https://nextjs.org/docs

## Credits

Built with:
- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
