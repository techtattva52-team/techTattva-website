"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const registerHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[#081120]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(37,99,235,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.15)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Glow Orb 1 */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl"
      />

      {/* Glow Orb 2 */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 mb-6">
            Student Tech Community
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
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
            <button
              onClick={registerHandler}
              className="bg-linear-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 px-7 py-4 rounded-full font-medium shadow-2xl shadow-blue-500/20"
            >
              Register Now
            </button>

            <Link href="/events#eventsSection">
              <button className="border border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 px-7 py-4 rounded-full">
                Explore Events
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative h-150 flex items-center justify-center perspective-[1400px]">
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-125 h-125 rounded-full border border-blue-500/20"
          />

          {/* Rotating Ring 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-100 h-100 rounded-full border border-cyan-500/20"
          />

          {/* Floating Card 1 */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            whileHover={{
              rotateX: -8,
              rotateY: 8,
              scale: 1.05,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
              absolute
              top-16
              left-0
              bg-[#0F172A]/80
              border border-blue-500/20
              backdrop-blur-xl
              px-5 py-4
              rounded-2xl
              shadow-xl
              cursor-pointer
            "
          >
            <p className="text-sm text-slate-400 mb-1">Upcoming</p>

            <h3 className="font-semibold">🚀 Hackathons</h3>
          </motion.div>
          {/* Floating Card 2 */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            whileHover={{
              rotateX: -8,
              rotateY: 8,
              scale: 1.05,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
              absolute
              top-66
              right-0
              bg-[#0F172A]/80
              border border-blue-500/20
              backdrop-blur-xl
              px-5 py-4
              rounded-2xl
              shadow-xl
              cursor-pointer
            "
          >
            <p className="text-sm text-slate-400 mb-1">Upcoming</p>

            <h3 className="font-semibold">🚀 Hackathons</h3>
          </motion.div>

          {/* Floating Card 3 */}
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.05,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
              absolute
              bottom-20
              right-0
              bg-[#0F172A]/80
              border border-cyan-500/20
              backdrop-blur-xl
              px-5 py-4
              rounded-2xl
              shadow-xl
              cursor-pointer
            "
          >
            <p className="text-sm text-slate-400 mb-1">Live Sessions</p>

            <h3 className="font-semibold">💡 Workshops</h3>
          </motion.div>

          {/* Floating Card 4 */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            whileHover={{
              rotateX: -8,
              rotateY: 8,
              scale: 1.05,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
              absolute
              top-66
              left-0
              bg-[#0F172A]/80
              border border-blue-500/20
              backdrop-blur-xl
              px-5 py-4
              rounded-2xl
              shadow-xl
              cursor-pointer
            "
          >
            <p className="text-sm text-slate-400 mb-1">Large</p>

            <h3 className="font-semibold">🚀 Community</h3>
          </motion.div>

          {/* Floating Orb 1 */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
              absolute
              top-32
              right-10
              w-6
              h-6
              rounded-full
              bg-cyan-400
              shadow-[0_0_30px_rgba(34,211,238,0.8)]
            "
          />

          {/* Floating Orb 2 */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-32
              left-10
              w-4
              h-4
              rounded-full
              bg-blue-500
              shadow-[0_0_25px_rgba(59,130,246,0.8)]
            "
          />
        </div>
      </div>
    </section>
  );
}
