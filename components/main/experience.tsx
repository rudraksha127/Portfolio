"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { EXPERIENCE } from "@/constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Work Experience
      </motion.h1>

      <div className="w-full max-w-5xl">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className="mb-8 flex gap-6"
          >
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
              <div className="w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="border border-[#2A0E61] rounded-xl bg-[#0a0616]/80 p-6 hover:border-purple-500/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
                  <span className="text-purple-400 font-semibold">{exp.duration}</span>
                </div>

                <h3 className="text-xl text-cyan-400 mb-2">{exp.company}</h3>
                <p className="text-gray-400 mb-1">{exp.location}</p>

                <p className="text-gray-300 mt-4 mb-4">{exp.description}</p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc ml-5 space-y-1 text-gray-300">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
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
