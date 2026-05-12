import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlackOnLifter - Elite Training Programs',
  description: 'Transform your fitness with BlackOnLifter elite training programs. Advanced, Hypertrophy, and Athlete modes designed for serious lifters.',
  viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="bg-slate-950">
        {children}
      </body>
    </html>
  )
}
