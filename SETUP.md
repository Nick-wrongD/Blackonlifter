# BlackOnLifter - Setup Instructions

## Firebase Configuration

This project uses Firebase for user authentication with Google OAuth support.

### Steps to Set Up Firebase:

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project named "BlackOnLifter"
   - Enable authentication (Email/Password and Google Sign-In)

2. **Get Your Firebase Configuration**
   - In Firebase Console, go to Project Settings
   - Copy your Web SDK credentials

3. **Add Environment Variables**
   - Create a `.env.local` file in the project root
   - Add the following environment variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Restart the Dev Server**
   ```bash
   npm run dev
   ```

## Features

- **User Authentication**: Sign up and login with email or Google OAuth
- **Protected Routes**: Only authenticated users can access training modes
- **Training Modes**: 4 distinct training programs (Beginner, Intermediate, Athlete, Hypertrophy)
- **Mode Selection**: Click "Change Level" to switch between different training programs
- **Responsive Design**: Fully responsive layout optimized for mobile devices

## Project Structure

```
/app
  /context - Authentication context
  /modes - Training mode pages
  /layout.tsx - Root layout with auth provider
  /page.tsx - Home/Login page
/components
  - auth-form.tsx - Login/signup form
  - protected-route.tsx - Route protection wrapper
  - header.tsx - Navigation header
  - loading-spinner.tsx - Loading indicator
/lib
  - firebase.ts - Firebase configuration
  - training-modes.ts - Training program data
  - use-auth.ts - Custom auth hook
```

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This project is ready for deployment on Vercel. Push to your GitHub repository and deploy via Vercel dashboard.
