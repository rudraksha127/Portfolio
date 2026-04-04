"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const ACHIEVEMENTS = [
  {
    title: "Competitive Programming",
    description: "Active problem solver on multiple competitive programming platforms",
    icon: "🏆",
    stats: [
      { label: "LeetCode", value: "Active" },
      { label: "GeeksforGeeks", value: "Certified" },
      { label: "Platforms", value: "Multiple" },
    ],
    link: "https://leetcode.com/u/rudra_2007/",
  },
  {
    title: "Open Source Contributions",
    description: "Contributing to open source projects and maintaining repositories",
    icon: "💡",
    stats: [
      { label: "GitHub", value: "Active" },
      { label: "Projects", value: "Multiple" },
      { label: "Collaboration", value: "Ongoing" },
    ],
    link: "https://github.com/rudraksha127",
  },
  {
    title: "Professional Certifications",
    description: "Multiple industry-recognized certifications across cloud, enterprise, and development",
    icon: "🎓",
    stats: [
      { label: "AWS", value: "5 Certs" },
      { label: "SAP", value: "2 Certs" },
      { label: "Others", value: "5+ Certs" },
    ],
    link: "#certifications",
  },
  {
    title: "Technical Expertise",
    description: "Full-stack development with modern technologies and cloud platforms",
    icon: "⚡",
    stats: [
      { label: "Frontend", value: "Expert" },
      { label: "Backend", value: "Expert" },
      { label: "Cloud", value: "Advanced" },
    ],
    link: "#skills",
  },
] as const;

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop()}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Achievements & Recognition
      </motion.h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.a
            key={achievement.title}
            href={achievement.link}
            target={achievement.link.startsWith("http") ? "_blank" : undefined}
            rel={achievement.link.startsWith("http") ? "noreferrer noopener" : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className="group border border-[#2A0E61] rounded-xl bg-[#0a0616]/80 p-6 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-3xl flex-shrink-0">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition">
                  {achievement.title}
                </h2>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {achievement.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-cyan-400 font-bold text-lg">{stat.value}</p>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
