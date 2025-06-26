import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parkbench - A Place for Real, Anonymous Connection",
  description: "Join Spriggy in a safe space where you can express yourself freely and find meaningful connections through anonymous conversations.",
  keywords: "mental health, anonymous chat, support community, connection, well-being",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-sunbeam-beige`}
      >
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
