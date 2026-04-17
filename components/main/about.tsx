"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold text-white">
              AWS Certified Data Engineer · Full Stack MERN · DSA · AI/ML
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m Rudraksh Udiya, a B.Tech IT student at Acropolis Institute of
              Technology and Research, Indore. I hold the{" "}
              <span className="text-orange-400 font-semibold">
                AWS Certified Data Engineer – Associate (DEA-C01)
              </span>{" "}
              and specialise in building end-to-end cloud data pipelines on AWS
              (S3, Glue, Redshift, Athena, Lambda, QuickSight).
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              On the web side, I&apos;m a{" "}
              <span className="text-cyan-400 font-semibold">
                Full Stack MERN developer
              </span>{" "}
              — React 19, Next.js 16, Node.js, MongoDB, TypeScript. I also
              practice{" "}
              <span className="text-purple-400 font-semibold">DSA</span> daily
              and apply{" "}
              <span className="text-green-400 font-semibold">AI/ML</span> to
              build intelligent features in real projects.
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-semibold text-purple-400">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 text-xl">☁️</span>
                <div>
                  <h4 className="text-white font-semibold">Cloud & Data Engineering (AWS)</h4>
                  <p className="text-gray-400">DEA-C01 certified. Building data pipelines: S3 → Glue → Redshift → QuickSight with Lambda automation.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">⚛️</span>
                <div>
                  <h4 className="text-white font-semibold">Full Stack MERN Development</h4>
                  <p className="text-gray-400">End-to-end web apps with React, Next.js, Node.js, MongoDB, and TypeScript — from UI to API to database.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl">🧮</span>
                <div>
                  <h4 className="text-white font-semibold">Data Structures & Algorithms</h4>
                  <p className="text-gray-400">Proficient in graphs, trees, DP, and binary search. Try the live Algorithm Visualizer panel on this page!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">🤖</span>
                <div>
                  <h4 className="text-white font-semibold">AI / Machine Learning</h4>
                  <p className="text-gray-400">Building AI-powered features: NLP, LLM integration, prompt engineering. NEXUS (below) is a live demo!</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromLeft(0.7)}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              DEA-C01
            </h3>
            <p className="text-gray-400 mt-2">AWS Certified</p>
          </div>
          <div className="p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              20+
            </h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>
          <div className="p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              10+
            </h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>
          <div className="p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              4
            </h3>
            <p className="text-gray-400 mt-2">Skill Domains</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
