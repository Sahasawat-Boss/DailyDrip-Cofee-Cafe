import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./CSS/globals.css";
import "./CSS/animation.css";

import Navbar from "./components/layout/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DailyDrip | Cofee Cafe",
  description: "DailyDrip | Cofee Cafe Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
