import type { Metadata } from "next";
import "./CSS/globals.css";
import "./CSS/animation.css";
import Navbar from "./components/layout/Nav";

import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
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
      <body className={`${quicksand.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
