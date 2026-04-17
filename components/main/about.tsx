"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { fadeInScale, floatIn, slideInFromLeft, slideInFromRight, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionHeader } from "@/components/sub/section-header";

/* ─── Animated counter ──────────────────────────────── */
function useCountUp(end: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) { setCount(0); return; }
    let raf: number;
    let startTime: number | null = null;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, started]);
  return count;
}

/* ─── Stat card ─────────────────────────────────────── */
function StatCard({
  value, suffix, label, sublabel, gradient, border, started,
}: {
  value: number; suffix: string; label: string; sublabel?: string;
  gradient: string; border: string; started: boolean;
}) {
  const count = useCountUp(value, 1600, started);
  return (
    <motion.div
      variants={staggerItem}
      className={`glass holo-card rounded-2xl p-5 border ${border} flex flex-col gap-1 min-h-[100px]`}
    >
      <div className={`text-3xl font-black tracking-tight num bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {count}{suffix}
      </div>
      <p className="text-white font-semibold text-sm">{label}</p>
      {sublabel && <p className="text-gray-500 text-[11px]">{sublabel}</p>}
    </motion.div>
  );
}

/* ─── What I do item ────────────────────────────────── */
const SKILLS = [
  {
    icon: "☁️",
    title: "Cloud & Data Engineering",
    desc: "DEA-C01 certified. Building data pipelines: S3 → Glue → Redshift → QuickSight with Lambda automation.",
    accent: "border-l-orange-500/60",
  },
  {
    icon: "⚛️",
    title: "Full Stack MERN",
    desc: "End-to-end web apps with React 19, Next.js 16, Node.js, MongoDB, and TypeScript.",
    accent: "border-l-cyan-500/60",
  },
  {
    icon: "🧮",
    title: "Data Structures & Algorithms",
    desc: "Graphs, trees, DP, binary search. Try the live Algorithm Visualizer on this page!",
    accent: "border-l-purple-500/60",
  },
  {
    icon: "🤖",
    title: "AI / Machine Learning",
    desc: "NLP, LLM integration, prompt engineering. NEXUS (below) is a live demo.",
    accent: "border-l-green-500/60",
  },
] as const;

const STATS = [
  { value: 1, suffix: "×", label: "DEA-C01", sublabel: "AWS Certified 2025", gradient: "from-orange-400 to-yellow-400", border: "border-orange-500/25" },
  { value: 20, suffix: "+", label: "Technologies", sublabel: "In active use", gradient: "from-purple-400 to-cyan-400", border: "border-purple-500/25" },
  { value: 10, suffix: "+", label: "Projects", sublabel: "Shipped & live", gradient: "from-cyan-400 to-blue-400", border: "border-cyan-500/25" },
  { value: 4, suffix: "", label: "Skill Domains", sublabel: "Cloud · Web · DSA · AI", gradient: "from-green-400 to-teal-400", border: "border-green-500/25" },
] as const;

export const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about-me" className="flex flex-col items-center justify-center py-20 px-6 md:px-10 aurora">
      <div className="w-full max-w-6xl">
        <SectionHeader
          tag="about"
          title="About Me"
          subtitle="B.Tech IT student building at the intersection of cloud, code, and intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* ── Bio card ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(0.3)}
            className="glass noise holo-card rounded-2xl p-7 border border-[#2A0E61]/60 lg:col-span-2 flex flex-col gap-5"
          >
            <h3 className="text-2xl font-bold text-white leading-snug">
              AWS Certified Data Engineer ·{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Full Stack MERN
              </span>{" "}
              · DSA · AI/ML
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Rudraksh Udiya</span>, a B.Tech IT student at Acropolis Institute of
              Technology and Research, Indore. I hold the{" "}
              <span className="text-orange-400 font-semibold">AWS Certified Data Engineer – Associate (DEA-C01)</span>{" "}
              and specialise in building end-to-end cloud data pipelines on AWS
              (S3, Glue, Redshift, Athena, Lambda, QuickSight).
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              On the web side, I&apos;m a{" "}
              <span className="text-cyan-400 font-semibold">Full Stack MERN developer</span>{" "}
              — React 19, Next.js 16, Node.js, MongoDB, TypeScript. I also
              practice{" "}
              <span className="text-purple-400 font-semibold">DSA</span> daily
              and apply{" "}
              <span className="text-green-400 font-semibold">AI/ML</span> to
              build intelligent features in real projects.
            </p>

            {/* Mini location + status bar */}
            <div className="flex items-center gap-4 pt-2 border-t border-white/5 flex-wrap">
              <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                <span>📍</span> Indore, MP, India
              </span>
              <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                <span>🎓</span> B.Tech IT, 2024–2028
              </span>
              <span className="flex items-center gap-2 text-xs">
                <span className="status-online" />
                <span className="text-green-300 font-medium">Open to opportunities</span>
              </span>
            </div>
          </motion.div>

          {/* ── Stat cards ── */}
          <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-1 gap-3"
          >
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} started={inView} />
            ))}
          </motion.div>
        </div>

        {/* ── What I do ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.title}
              variants={staggerItem}
              className={`glass holo-card rounded-2xl p-5 border border-[#2A0E61]/60 border-l-[3px] ${skill.accent} flex gap-4`}
            >
              <span className="text-2xl mt-0.5 shrink-0">{skill.icon}</span>
              <div>
                <h4 className="text-white font-semibold mb-1">{skill.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

