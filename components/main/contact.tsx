"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { SectionHeader } from "@/components/sub/section-header";

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
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10 aurora"
    >
      <SectionHeader
        tag="contact"
        title="Get In Touch"
        subtitle="Open to opportunities and collaborations — let's build something remarkable together."
      />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.4)}
          className="flex flex-col gap-5"
        >
          <h2 className="text-2xl font-bold text-white">Let&apos;s Connect</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            I&apos;m currently looking for new opportunities and collaborations.
            Whether you have a question or just want to say hi, I&apos;ll try my best
            to get back to you!
          </p>

          <div className="space-y-3 mt-2">
            {[
              { icon: "📧", title: "Email", content: "rudraksha127@gmail.com", href: "mailto:rudraksha127@gmail.com" },
              { icon: "📍", title: "Location", content: "Indore, Madhya Pradesh, India", href: null },
              { icon: "💼", title: "Availability", content: "Open to opportunities", href: null, green: true },
            ].map(({ icon, title, content, href, green }) => (
              <div key={title} className="glass rounded-xl p-4 border border-[#2A0E61]/50 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-purple-500/15 flex items-center justify-center text-xl border border-purple-500/20 shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{title}</p>
                  {href ? (
                    <a href={href} className={`text-sm transition ${green ? "text-green-400" : "text-gray-400 hover:text-purple-400"}`}>
                      {content}
                    </a>
                  ) : (
                    <p className={`text-sm ${green ? "text-green-400 font-medium" : "text-gray-400"}`}>{content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-5 border border-[#2A0E61]/50 mt-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="status-online" />
              <h3 className="text-white font-semibold text-sm">Response Time</h3>
            </div>
            <p className="text-gray-400 text-sm">
              I typically respond within 24–48 hours during weekdays.
              Feel free to reach out anytime!
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.4)}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { id: "name",    label: "Name",    type: "text",  placeholder: "Your name" },
              { id: "email",   label: "Email",   type: "email", placeholder: "your.email@example.com" },
              { id: "subject", label: "Subject", type: "text",  placeholder: "What's this about?" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-white font-semibold text-sm mb-1.5">
                  {label} *
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0616]/70 border border-[#2A0E61]/70 text-white focus:border-purple-500/70 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition placeholder-gray-600 text-sm"
                  placeholder={placeholder}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-white font-semibold text-sm mb-1.5">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-[#0a0616]/70 border border-[#2A0E61]/70 text-white focus:border-purple-500/70 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition resize-none placeholder-gray-600 text-sm"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 btn-primary text-white rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {status === "sending" && "Sending..."}
              {status === "success" && "✓ Sent!"}
              {status === "error" && "Try Again"}
              {status === "idle" && "Send Message ✦"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center text-sm">
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
