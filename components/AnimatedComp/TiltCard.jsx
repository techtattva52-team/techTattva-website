"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TiltCard() {
  // Mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotate values
  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = width / 2;
    const centerY = height / 2;

    x.set(mouseX - centerX);
    y.set(mouseY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="
        relative
        w-85
        h-105
        rounded-4xl
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        shadow-2xl shadow-blue-500/10
        overflow-hidden
      "
    >
      {/* Inner content with depth */}
      <div
        style={{
          transform: "translateZ(60px)",
        }}
        className="absolute inset-0"
      >
        <img
          src="/images/hero-illustration.png"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-cyan-500/10" />
    </motion.div>
  );
}
