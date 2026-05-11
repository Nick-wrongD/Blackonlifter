import type { Metadata, Viewport } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlackOnLifter - Strength Training Programs",
  description:
    "Elite strength training programs for beginner, intermediate, athlete, advanced, and hypertrophy modes. Science-backed training from our community.",
  keywords: [
    "strength training",
    "fitness programs",
    "bodybuilding",
    "workout plans",
    "fitness",
  ],
  authors: [{ name: "BlackOnLifter" }],
  openGraph: {
    type: "website",
    url: "https://blackonlifter.com",
    title: "BlackOnLifter - Strength Training Programs",
    description: "Elite strength training programs for all levels",
    images: [
      {
        url: "https://blackonlifter.com/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#00d9ff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
