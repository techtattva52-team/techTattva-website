"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Blur Background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xl border-b border-white/10" />

      <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50">
          <img
            src="/logo/logo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />

          <h1 className="text-xl font-bold tracking-wide">Community</h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                relative
                text-slate-300
                hover:text-white
                transition
                duration-300
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-linear-to-r
                after:from-blue-500
                after:to-cyan-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}

          {/* CTA */}
          <button
            className="
              bg-linear-to-r
              from-blue-600
              to-cyan-500
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
              transition-all
              duration-300
              px-6
              py-2.5
              rounded-full
              font-medium
            "
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-50"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            fixed
            top-0
            right-0
            h-screen
            w-70
            bg-[#081120]/95
            backdrop-blur-2xl
            border-l
            border-white/10
            transform
            transition-transform
            duration-500
            p-8
            flex
            flex-col
            gap-8
            pt-24
            md:hidden
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="
                text-lg
                text-slate-300
                hover:text-blue-400
                transition
              "
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <button
            className="
              mt-4
              bg-linear-to-r
              from-blue-600
              to-cyan-500
              py-3
              rounded-full
              font-medium
            "
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}
