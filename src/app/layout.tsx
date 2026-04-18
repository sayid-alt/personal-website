import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '../styles/tailwind.css';
import { Toaster } from 'react-hot-toast';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Sayid Muhammad Heykal — Data Analyst & Scientist',
  description:
    'Portfolio of Sayid Muhammad Heykal, a Jakarta-based Data Analyst and Scientist specializing in machine learning, predictive modeling, and data visualization.',
  icons: [
    {
      url: '/assets/images/profile.png',
      href: '/assets/images/profile.png',
      type: 'image/jpeg', // Matches the actual file extension
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <Toaster
          position="bottom-left"
          toastOptions={{
            style: {
              background: '#0D1526',
              color: '#E2E8F0',
              border: '1px solid rgba(34,211,238,0.2)',
              fontSize: '14px',
            },
          }}
        />

        {/* <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fheykalspor6394back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17"
        />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /> */}
      </body>
    </html>
  );
}
