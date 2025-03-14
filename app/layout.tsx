import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import CanonicalLink from '../lib/CanonicalLink'; 

// Google Font Setup
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

// Metadata for the website
export const metadata: Metadata = {
  title: "Deepak Yadav | Frontend Developer Portfolio",
  description: "Portfolio of Deepak Yadav, a Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <CanonicalLink />
        <Analytics />
        <Script
          defer
          data-domain="" // Replace with your domain
          src=""
        />
        {children}
      </body>
    </html>
  );
}
