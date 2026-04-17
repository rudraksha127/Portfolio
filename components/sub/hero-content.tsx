"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-28 md:mt-40 w-full z-[20] gap-10"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AWS Certified · Full Stack MERN · DSA · AI/ML
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Cloud · Code
            </span>{" "}
            & Intelligence.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m Rudraksh Udiya — AWS Certified Data Engineer (DEA-C01),
          Full Stack MERN Developer, DSA practitioner, and AIML enthusiast.
          Meet <span className="text-cyan-400 font-semibold">NEXUS</span>, my
          AI assistant below — ask it anything about my skills or projects.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap gap-3 mb-2"
        >
          {[
            { label: "☁️ AWS DEA-C01", color: "from-orange-500 to-yellow-400" },
            { label: "⚛️ MERN Stack", color: "from-cyan-500 to-blue-400" },
            { label: "🧮 DSA Expert", color: "from-purple-500 to-pink-400" },
            { label: "🤖 AI/ML", color: "from-green-500 to-teal-400" },
          ].map(({ label, color }) => (
            <span
              key={label}
              className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${color} opacity-90`}
            >
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="py-3 px-6 bg-transparent border-2 border-purple-500 text-center text-white cursor-pointer rounded-lg font-semibold hover:bg-purple-500/20 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="py-3 px-6 bg-transparent border-2 border-cyan-500 text-center text-white cursor-pointer rounded-lg font-semibold hover:bg-cyan-500/20 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full h-full justify-center items-center shrink-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
