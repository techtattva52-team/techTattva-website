import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tech Tattva",
  description: "A hub for tech enthusiasts to connect, learn, and innovate.",
  icons: {
    icon: "@/public/logo/logo.png"
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#081120] text-white overflow-x-hidden flex flex-col">
        <Navbar />

        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
