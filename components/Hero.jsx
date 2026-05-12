"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const registerHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center px-6">
      <div className="absolute inset-0 bg-[#081120]" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(37,99,235,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.15)_1px,transparent_1px)] bg-size-[60px_60px]" />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 mb-6">
            Student Tech Community
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
            Building The Future Through{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600">
              Innovation
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
            Join workshops, hackathons, networking sessions, and innovative tech
            experiences with creators and developers.
          </p>

          <div className="flex gap-5 flex-wrap">
            <Link href="/events">
              <button className="bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 px-9 py-5 rounded-full">
                Explore Events
              </button>
            </Link>
          </div>
        </motion.div>

        <div className="hidden md:flex relative h-150 items-center justify-center perspective-[1400px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-125 h-125 rounded-full border border-blue-500/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-100 h-100 rounded-full border border-cyan-500/20"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            whileHover={{ rotateX: -8, rotateY: 8, scale: 1.05 }}
            style={{ transformStyle: "preserve-3d" }}
            className="absolute top-16 left-0 bg-[#0F172A]/80 border border-blue-500/20 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-xl cursor-pointer"
          >
            <p className="text-sm text-slate-400 mb-1">Upcoming</p>

            <h3 className="font-semibold">🚀 Hackathons</h3>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            whileHover={{ rotateX: -8, rotateY: 8, scale: 1.05 }}
            style={{ transformStyle: "preserve-3d" }}
            className="absolute top-66 right-0 bg-[#0F172A]/80 border border-blue-500/20 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-xl cursor-pointer"
          >
            <p className="text-sm text-slate-400 mb-1">Upcoming</p>

            <h3 className="font-semibold">🚀 Hackathons</h3>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
            style={{ transformStyle: "preserve-3d" }}
            className="absolute bottom-20 right-0 bg-[#0F172A]/80 border border-cyan-500/20 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-xl cursor-pointer"
          >
            <p className="text-sm text-slate-400 mb-1">Live Sessions</p>

            <h3 className="font-semibold">💡 Workshops</h3>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            whileHover={{ rotateX: -8, rotateY: 8, scale: 1.05 }}
            style={{ transformStyle: "preserve-3d" }}
            className="absolute top-66 left-0 bg-[#0F172A]/80 border border-blue-500/20 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-xl cursor-pointer"
          >
            <p className="text-sm text-slate-400 mb-1">Large</p>

            <h3 className="font-semibold">🚀 Community</h3>
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-32 right-10 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-32 right-10 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)]"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-32 left-10 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]"
          />
        </div>
      </div>
    </section>
  );
}
