"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  floatIn,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

/* ─── Bento card data ────────────────────────────────── */
const BENTO = [
  {
    id: "aws",
    icon: "☁️",
    title: "AWS DEA-C01",
    sub: "Certified Data Engineer",
    badge: "2025",
    live: false,
    cls: "border-orange-500/25 bg-gradient-to-br from-orange-500/12 to-yellow-500/5",
    badgeCls: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  },
  {
    id: "data",
    icon: "📊",
    title: "2.4 TB",
    sub: "Data Processed",
    badge: null,
    live: false,
    cls: "border-cyan-500/25 bg-gradient-to-br from-cyan-500/12 to-blue-500/5",
    badgeCls: "",
  },
  {
    id: "projects",
    icon: "🚀",
    title: "10+ Projects",
    sub: "Shipped & Live",
    badge: null,
    live: false,
    cls: "border-green-500/25 bg-gradient-to-br from-green-500/12 to-teal-500/5",
    badgeCls: "",
  },
  {
    id: "tech",
    icon: "🛠️",
    title: "20+ Tools",
    sub: "In My Stack",
    badge: null,
    live: false,
    cls: "border-purple-500/25 bg-gradient-to-br from-purple-500/12 to-pink-500/5",
    badgeCls: "",
  },
] as const;

/* ─── Mini bento card ────────────────────────────────── */
function BentoCard({
  icon, title, sub, badge, badgeCls, cls, delay,
}: {
  icon: string; title: string; sub: string;
  badge: string | null; badgeCls: string; cls: string; delay: number;
}) {
  return (
    <motion.div
      variants={staggerItem}
      transition={{ delay }}
      className={`glass holo-card rounded-xl p-4 border ${cls} cursor-default`}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl leading-none">{icon}</span>
        {badge && (
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${badgeCls}`}>
            {badge}
          </span>
        )}
      </div>
      <p className="text-white font-bold text-base leading-tight num">{title}</p>
      <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
    </motion.div>
  );
}

/* ─── Hero content ───────────────────────────────────── */
export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-28 md:mt-40 w-full z-[20] gap-10 lg:gap-16"
    >
      {/* ── LEFT: Copy ──────────────────────────────────── */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        {/* Availability badge */}
        <motion.div variants={slideInFromTop} className="flex items-center gap-2.5 w-fit">
          <div className="flex items-center gap-2 bg-[#0a0621]/80 border border-green-500/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span className="status-online" />
            <span className="text-xs text-green-300 font-medium">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-2"
        >
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight text-glow-white">
            Engineering
          </span>
          <span className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight gradient-animated">
            Cloud · Code
          </span>
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
            &amp; Intelligence.
          </span>
        </motion.div>

        {/* Welcome badge */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <span className="Welcome-text text-[13px]">
            AWS Certified · Full Stack MERN · DSA · AI/ML
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={slideInFromLeft(0.7)}
          className="text-base md:text-lg text-gray-400 max-w-[560px] leading-relaxed"
        >
          I&apos;m <span className="text-white font-semibold">Rudraksh Udiya</span> — AWS Certified Data Engineer (DEA-C01),
          Full Stack MERN Developer, DSA practitioner, and AIML enthusiast.
          Meet{" "}
          <span className="text-cyan-400 font-semibold">NEXUS</span>, my AI assistant — ask it anything about my work.
        </motion.p>

        {/* Domain pills */}
        <motion.div variants={slideInFromLeft(0.8)} className="flex flex-wrap gap-2">
          {[
            { label: "☁️ AWS DEA-C01", from: "from-orange-500", to: "to-yellow-400" },
            { label: "⚛️ MERN Stack",  from: "from-cyan-500",   to: "to-blue-400"  },
            { label: "🧮 DSA Expert",  from: "from-purple-500", to: "to-pink-400"  },
            { label: "🤖 AI/ML",       from: "from-green-500",  to: "to-teal-400"  },
          ].map(({ label, from, to }) => (
            <span
              key={label}
              className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${from} ${to} opacity-90 shadow-lg`}
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={slideInFromLeft(0.9)} className="flex flex-wrap gap-3 mt-1">
          <a
            href="#contact"
            className="btn-primary py-3 px-7 text-white rounded-lg text-sm"
          >
            Get In Touch ✦
          </a>
          <a
            href="#projects"
            className="btn-outline-cyan py-3 px-7 text-white rounded-lg text-sm"
          >
            View Projects →
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-outline-purple py-3 px-7 text-white rounded-lg text-sm"
          >
            Resume ↓
          </a>
        </motion.div>
      </div>

      {/* ── RIGHT: Bento grid ───────────────────────────── */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="hidden md:flex w-full max-w-[420px] flex-col gap-3 shrink-0"
      >
        {/* "Currently Building" — full-width highlight card */}
        <motion.div
          variants={floatIn(0.3)}
          className="glass holo-card rounded-2xl p-5 border border-purple-500/25 bg-gradient-to-br from-purple-500/12 to-cyan-500/5 scan-container"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="section-tag">Currently Building</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="status-online" />
              <span className="text-[10px] text-green-300 font-semibold">Live</span>
            </div>
          </div>
          <p className="text-white font-bold text-lg leading-snug mb-1">
            Space Portfolio · NEXUS AI
          </p>
          <p className="text-gray-400 text-xs mb-3">Next.js 16 · React 19 · Framer Motion · TypeScript</p>
          <div className="flex gap-1.5 flex-wrap">
            {["AWS", "MERN", "DSA", "AI/ML", "Docker"].map(tag => (
              <span key={tag} className="px-2 py-0.5 text-[10px] bg-purple-500/15 text-purple-300 rounded-full border border-purple-500/25 font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 2×2 bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-3"
        >
          {BENTO.map((card, i) => (
            <BentoCard key={card.id} {...card} delay={0.1 * i} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

