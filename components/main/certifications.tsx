"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { CERTIFICATIONS } from "@/constants";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Certifications & Achievements
      </motion.h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={`${cert.title}-${cert.issuer}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className="border border-[#2A0E61] rounded-xl bg-[#0a0616]/80 p-6 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl">
                {cert.icon}
              </div>
              {cert.verified && (
                <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
                  ✓ Verified
                </span>
              )}
            </div>

            <h2 className="text-xl font-bold text-white mb-2">{cert.title}</h2>
            <p className="text-purple-400 font-semibold mb-1">{cert.issuer}</p>
            <p className="text-gray-400 text-sm mb-4">{cert.date}</p>

            {cert.description && (
              <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
            )}

            {cert.skills && cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block mt-4 text-sm text-purple-400 hover:text-purple-300 transition"
              >
                View Credential →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
