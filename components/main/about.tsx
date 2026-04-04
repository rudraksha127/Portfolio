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
              Full Stack Developer & Technology Enthusiast
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m Rudraksh Udiya, a passionate Full Stack Developer currently pursuing
              B.Tech in Information Technology at Acropolis Institute of Technology and Research.
              I specialize in building modern web applications using cutting-edge technologies
              like React, Next.js, Node.js, and TypeScript.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in software development is driven by curiosity and a desire to
              create impactful solutions. I believe in writing clean, maintainable code
              and following industry best practices. Whether it&apos;s front-end user interfaces
              or back-end APIs, I enjoy every aspect of bringing ideas to life.
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-semibold text-purple-400">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">▹</span>
                <div>
                  <h4 className="text-white font-semibold">Web Development</h4>
                  <p className="text-gray-400">Building responsive and performant web applications with modern frameworks</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">▹</span>
                <div>
                  <h4 className="text-white font-semibold">Full Stack Solutions</h4>
                  <p className="text-gray-400">End-to-end development from database design to user interface</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">▹</span>
                <div>
                  <h4 className="text-white font-semibold">Problem Solving</h4>
                  <p className="text-gray-400">Tackling complex challenges with data structures and algorithms</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 text-xl">▹</span>
                <div>
                  <h4 className="text-white font-semibold">Continuous Learning</h4>
                  <p className="text-gray-400">Always exploring new technologies and development patterns</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Fun Facts</h3>
              <ul className="space-y-2 text-gray-300">
                <li>🎓 First-year B.Tech student with a passion for coding</li>
                <li>💻 Love building projects that solve real-world problems</li>
                <li>🚀 Fascinated by space-themed designs and 3D graphics</li>
                <li>📚 Constantly learning and improving my skills</li>
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
              15+
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
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              1+
            </h3>
            <p className="text-gray-400 mt-2">Years Learning</p>
          </div>
          <div className="p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              100%
            </h3>
            <p className="text-gray-400 mt-2">Dedication</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
