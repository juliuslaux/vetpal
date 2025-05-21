import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DM_Sans, Instrument_Sans } from 'next/font/google';
import { Inter } from 'next/font/google'
import CookieBanner from '@/components/CookieBanner'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'vetpal - Die KI-Telefonassistentin für Ihre Tierarztpraxis',
  description: 'Emma, die KI-Telefonassistentin, geht 24/7 ans Telefon, beantwortet Fragen, nimmt Terminwünsche entgegen und leitet direkt an die richtigen Ansprechpartner weiter.',
  keywords: ['Tierarztpraxis', 'KI', 'Telefonassistentin', 'Terminverwaltung', 'Praxismanagement', 'VetPal', 'VetPal UG', 'vet pal', 'vetpal', 'emma', 'callemma', 'KI Assistent', 'ki telefonassistent', 'voice agents', 'ai voice agents', 'rezeption', 'ki rezeptionistin' ],
  authors: [{ name: 'VetPal UG' }],
  creator: 'VetPal UG',
  publisher: 'VetPal UG',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/vetpal-icon.png', sizes: '500x500', type: 'image/png' }
    ],
    apple: [
      { url: '/images/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  themeColor: '#FFFFFF',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${instrumentSans.variable} ${inter.className} antialiased`}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
