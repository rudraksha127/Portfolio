"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";
import { TESTIMONIALS } from "@/constants";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  if (TESTIMONIALS.length === 0) {
    return null;
  }

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Testimonials
      </motion.h1>

      <div className="w-full max-w-4xl">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="border border-[#2A0E61] rounded-xl bg-[#0a0616]/80 p-8 md:p-12"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
            {[...Array(5 - currentTestimonial.rating)].map((_, i) => (
              <span key={i} className="text-gray-600 text-2xl">★</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center italic mb-8">
            &ldquo;{currentTestimonial.text}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white">
              {currentTestimonial.name.charAt(0)}
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold text-lg">{currentTestimonial.name}</h3>
              <p className="text-purple-400">{currentTestimonial.role}</p>
              <p className="text-gray-400 text-sm">{currentTestimonial.company}</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        {TESTIMONIALS.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/30 text-white transition flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentIndex
                      ? "bg-purple-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/30 text-white transition flex items-center justify-center"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
