"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json()) as { success: boolean; message: string };

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setErrorMessage(data.message ?? "Something went wrong.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setErrorMessage("Network error. Please try emailing me directly.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center"
      >
        Get In Touch
      </motion.h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6"
        >
          <h2 className="text-2xl font-bold text-white">Let&apos;s Connect</h2>
          <p className="text-gray-300 text-lg">
            I&apos;m currently looking for new opportunities and collaborations.
            Whether you have a question or just want to say hi, I&apos;ll try my best
            to get back to you!
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <a
                  href="mailto:189518047+rudraksha127@users.noreply.github.com"
                  className="text-gray-400 hover:text-purple-400 transition"
                >
                  rudraksha127@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">Indore, Madhya Pradesh, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Availability</h3>
                <p className="text-green-400">Open to opportunities</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60">
            <h3 className="text-white font-semibold mb-3">Response Time</h3>
            <p className="text-gray-400">
              I typically respond within 24-48 hours during weekdays.
              Feel free to reach out anytime!
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0a0616]/60 border border-[#2A0E61] text-white focus:border-purple-500 focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0a0616]/60 border border-[#2A0E61] text-white focus:border-purple-500 focus:outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0a0616]/60 border border-[#2A0E61] text-white focus:border-purple-500 focus:outline-none transition"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-[#0a0616]/60 border border-[#2A0E61] text-white focus:border-purple-500 focus:outline-none transition resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 button-primary text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" && "Sending..."}
              {status === "success" && "✓ Sent!"}
              {status === "error" && "Try Again"}
              {status === "idle" && "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center">
                ✓ Thanks for reaching out! I&apos;ll get back to you within 24–48 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center text-sm">
                {errorMessage}{" "}
                <a href="mailto:rudraksha127@gmail.com" className="underline hover:text-red-300">
                  Email me directly
                </a>
                .
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
