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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Senior Software Engineer | Cloud & Enterprise Solutions
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              scalable solutions
            </span>{" "}
            with modern technology.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m Rudraksh Udiya, a Full Stack Software Engineer specializing in
          cloud architecture, enterprise applications, and modern web technologies.
          With expertise in AWS, SAP, Java, and full-stack development, I deliver
          robust and scalable solutions.
        </motion.p>

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
        className="w-full h-full flex justify-center items-center"
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
