"use client";

import { motion } from "framer-motion";
import { floatIn, slideInFromLeft } from "@/lib/motion";

type Gradient = "purple-cyan" | "orange-amber" | "green-teal" | "pink-purple" | "blue-indigo";

const GRADIENT_MAP: Record<Gradient, string> = {
  "purple-cyan":  "from-purple-400 via-violet-400 to-cyan-400",
  "orange-amber": "from-orange-400 via-amber-400 to-yellow-400",
  "green-teal":   "from-green-400 via-emerald-400 to-teal-400",
  "pink-purple":  "from-pink-400 via-fuchsia-400 to-purple-400",
  "blue-indigo":  "from-blue-400 via-indigo-400 to-violet-400",
};

const UNDERLINE_MAP: Record<Gradient, string> = {
  "purple-cyan":  "from-purple-500 to-cyan-500",
  "orange-amber": "from-orange-500 to-yellow-500",
  "green-teal":   "from-green-500 to-teal-500",
  "pink-purple":  "from-pink-500 to-purple-500",
  "blue-indigo":  "from-blue-500 to-violet-500",
};

type SectionHeaderProps = {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  gradient?: Gradient;
};

export const SectionHeader = ({
  tag,
  title,
  subtitle,
  align = "center",
  gradient = "purple-cyan",
}: SectionHeaderProps) => {
  const isCenter = align === "center";
  const gradientClass = GRADIENT_MAP[gradient];
  const underlineClass = UNDERLINE_MAP[gradient];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} gap-3 mb-12`}
    >
      {/* Mono tag label */}
      <motion.div
        variants={floatIn(0.1)}
        className={`flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}
      >
        {!isCenter && (
          <span className="w-8 h-[1px] bg-gradient-to-r from-purple-500/80 to-transparent" />
        )}
        <span className="section-tag">{tag}</span>
        {!isCenter && (
          <span className="w-4 h-[1px] bg-gradient-to-r from-purple-500/40 to-transparent" />
        )}
      </motion.div>

      {/* Main title */}
      <motion.h2
        variants={slideInFromLeft(0.2)}
        className={`text-4xl md:text-[44px] font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}
      >
        {title}
      </motion.h2>

      {/* Gradient underline */}
      <motion.div
        variants={floatIn(0.35)}
        className={`h-[3px] w-14 rounded-full bg-gradient-to-r ${underlineClass} ${isCenter ? "mx-auto" : ""}`}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={floatIn(0.45)}
          className="text-gray-400 max-w-2xl mt-1 text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
