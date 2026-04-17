"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { SectionHeader } from "@/components/sub/section-header";
import { CERTIFICATIONS } from "@/constants";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10 aurora"
    >
      <SectionHeader
        tag="credentials"
        title="Certifications & Achievements"
        subtitle="Validated expertise across cloud engineering, full-stack development, and competitive programming."
      />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={`${cert.title}-${cert.issuer}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? slideInFromLeft(0.4) : slideInFromRight(0.4)}
            className="glass holo-card rounded-2xl border border-[#2A0E61]/60 p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl glow-purple">
                {cert.icon}
              </div>
              {cert.verified && (
                <span className="text-green-400 text-xs font-bold flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                  ✓ Verified
                </span>
              )}
            </div>

            <h2 className="text-base font-bold text-white mb-1 leading-snug">{cert.title}</h2>
            <p className="text-purple-400 font-semibold text-sm mb-0.5">{cert.issuer}</p>
            <p className="text-gray-500 text-xs mb-4">{cert.date}</p>

            {cert.description && (
              <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">{cert.description}</p>
            )}

            {cert.skills && cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] bg-cyan-500/15 text-cyan-300 rounded-full border border-cyan-500/25 font-semibold"
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
                className="inline-block mt-3 text-xs text-purple-400 hover:text-purple-300 transition"
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

