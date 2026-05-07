"use client";

import Link from "next/link";

const navItems = ["Home", "About", "Events", "Team", "Gallery", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo/logo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="font-bold text-xl">Community</h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-blue-400 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-full">
          Register
        </button>
      </nav>
    </header>
  );
}
