"use client";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <h2 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
              TechTattva
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Building innovation, creativity, and technology-driven
              experiences for future developers and creators.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/techtattva/"
              // className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white whitespace-nowrap"
              >
                <FaLinkedin size={30} />
              </a>

              <a
                href="https://www.instagram.com/tech_tattva?igsh=YWR0cGxyZjI1Z3c4"
              // className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-white whitespace-nowrap"
              >
                <FaInstagram size={30} />
              </a>

              <a
                href="https://chat.whatsapp.com/CTP6CLJ7uGt6vuHsHJfG0k"
              // className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white whitespace-nowrap"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact Us At:
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
              <span className="leading-6">Email: techtattva26@gmail.com</span>
              <span className="leading-6">Phone: +91 80834 42865</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 TechTattva. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-cyan-400"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}