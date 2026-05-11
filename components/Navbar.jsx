"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/public/website-logo.png";
import Image from "next/image";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  // { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-35">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xl border-b border-white/10" />
      <nav className="relative w-full py-1 flex items-center justify-between pr-6">
        <Link href="/" className="flex items-center gap-2 z-50 ml-3">
          <Image
            src={Logo}
            alt="TechTattva Logo"
            width={130}
            height={130}
            priority
            className="object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.45)]"
          />
          <div className="flex flex-col leading-none ml-2">
            <span className="text-3xl font-bold tracking-wide text-white">
              TechTattva
            </span>

            <span className="text-[10px] tracking-[0.25em] text-cyan-400 uppercase mt-1">
              Innovation Club
            </span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8 mr-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-slate-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-50 text-white"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-[#081120]/95 backdrop-blur-2xl border-l border-white/10
            transform transition-transform duration-500 p-8 flex flex-col gap-8 pt-24 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-slate-300 hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
          {/* <button
            className="mt-4 bg-linear-to-r from-blue-600 to-cyan-500 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            Register
          </button> */}
        </div>
      </nav>
    </header>
  );
}