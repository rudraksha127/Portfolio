"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/sub/section-header";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { EDUCATION } from "@/constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <SectionHeader tag="education" title="Education" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="w-full max-w-5xl flex flex-col gap-5"
      >
        {EDUCATION.map((item) => (
          <motion.article
            key={`${item.institute}-${item.level}`}
            variants={staggerItem}
            className="glass holo-card rounded-2xl border border-[#2A0E61]/60 p-6 md:p-7"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {item.institute}
                </h2>
                <p className="text-cyan-400 font-semibold mt-1">{item.level}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  {item.duration}
                </span>
                <span className="text-xs text-gray-400">
                  Grade: <span className="text-white font-semibold">{item.grade}</span>
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.summary}</p>

            <div className="pt-3 border-t border-white/5 space-y-3">
              <div>
                <p className="text-white font-semibold text-sm mb-2">Activities &amp; Societies:</p>
                <ul className="flex flex-col gap-1">
                  {item.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-purple-400 mt-0.5 shrink-0">▸</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-semibold bg-cyan-500/12 text-cyan-300 rounded-full border border-cyan-500/22"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

