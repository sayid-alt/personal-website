import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Sayid Muhammad Sayid — Data Analyst & Scientist',
  description:
    'Portfolio of Sayid Muhammad Sayid, a Jakarta-based Data Analyst and Scientist specializing in machine learning, predictive modeling, and data visualization.',
  icons: [
    {
      url: 'https://www.datascienceportfol.io/static/profile_pics/pr0_AFACD359DB7FE2B9118D.jpg',
      href: 'https://www.datascienceportfol.io/static/profile_pics/pr0_AFACD359DB7FE2B9118D.jpg',
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
