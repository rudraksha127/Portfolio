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
              Senior Software Engineer | Cloud & Enterprise Specialist
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m Rudraksh Udiya, a Senior Full Stack Software Engineer specializing in
              cloud architecture, enterprise solutions, and modern web technologies. With multiple
              professional certifications including AWS Solutions Architect, SAP ABAP, and Red Hat
              Linux, I bring enterprise-grade expertise to every project.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My technical foundation spans from enterprise applications with SAP and Java to
              cutting-edge cloud infrastructure on AWS. I architect scalable solutions using
              microservices, containerization, and modern DevOps practices. Whether it&apos;s
              building full-stack applications with Next.js and React or optimizing cloud
              infrastructure, I deliver production-ready, maintainable solutions.
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-semibold text-purple-400">Core Competencies</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">▹</span>
                <div>
                  <h4 className="text-white font-semibold">Cloud Architecture</h4>
                  <p className="text-gray-400">AWS-certified solutions architect with expertise in scalable cloud infrastructure</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">▹</span>
                <div>
                  <h4 className="text-white font-semibold">Enterprise Development</h4>
                  <p className="text-gray-400">SAP ABAP/EWM and Java enterprise application development</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">▹</span>
                <div>
                  <h4 className="text-white font-semibold">Full Stack Mastery</h4>
                  <p className="text-gray-400">Modern web apps with React, Next.js, Node.js, and TypeScript</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">▹</span>
                <div>
                  <h4 className="text-white font-semibold">System Architecture</h4>
                  <p className="text-gray-400">Microservices, containerization, and distributed systems design</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Professional Highlights</h3>
              <ul className="space-y-2 text-gray-300">
                <li>☁️ 5 AWS Professional Certifications</li>
                <li>💼 SAP Certified (ABAP & EWM)</li>
                <li>🐧 Red Hat Certified System Administrator</li>
                <li>🎓 Scaler & GeeksforGeeks DSA Certified</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromLeft(0.7)}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              25+
            </h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>
          <div className="p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              12+
            </h3>
            <p className="text-gray-400 mt-2">Certifications</p>
          </div>
          <div className="p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              10+
            </h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>
          <div className="p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              100%
            </h3>
            <p className="text-gray-400 mt-2">Commitment</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
