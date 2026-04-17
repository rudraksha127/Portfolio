"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { SectionHeader } from "@/components/sub/section-header";
import { EXPERIENCE } from "@/constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10 aurora"
    >
      <SectionHeader tag="experience" title="Work Experience" />

      <div className="w-full max-w-5xl">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? slideInFromLeft(0.4) : slideInFromRight(0.4)}
            className="mb-6 flex gap-5"
          >
            {/* Timeline */}
            <div className="flex flex-col items-center pt-1">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 glow-purple shrink-0" />
              {index < EXPERIENCE.length - 1 && (
                <div className="w-[2px] flex-1 mt-2 bg-gradient-to-b from-purple-500/40 to-transparent" />
              )}
            </div>

            {/* Card */}
            <div className="flex-1 pb-6">
              <div className="glass holo-card rounded-2xl border border-[#2A0E61]/60 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
                  <h2 className="text-xl font-bold text-white">{exp.role}</h2>
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 w-fit">
                    {exp.duration}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-cyan-400 mb-0.5">{exp.company}</h3>
                <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-white font-semibold text-sm mb-2">Key Achievements:</h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-semibold bg-purple-500/15 text-purple-300 rounded-full border border-purple-500/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

