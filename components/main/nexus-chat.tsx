"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "nexus";
  text: string;
}

// ─── Knowledge base ─────────────────────────────────────────────────────────

const KB: { keywords: string[]; response: string }[] = [
  {
    keywords: ["hello", "hi", "hey", "greet", "start"],
    response:
      "Hello! I'm NEXUS — Rudraksh's AI portfolio assistant. Ask me about his AWS expertise, MERN projects, DSA skills, or anything else. I'm here to help! 👋",
  },
  {
    keywords: ["who", "about", "introduce", "yourself", "rudraksh", "tell me"],
    response:
      "Rudraksh Udiya is a B.Tech IT student at Acropolis Institute, Indore. He's an AWS Certified Data Engineer (DEA-C01), Full Stack MERN Developer, DSA practitioner, and AI/ML enthusiast — all rolled into one. This portfolio itself is proof of that combined skill set.",
  },
  {
    keywords: ["aws", "cloud", "dea", "dea-c01", "certified", "certification"],
    response:
      "Rudraksh holds the AWS Certified Data Engineer – Associate (DEA-C01) certification. He designs and builds data pipelines: S3 data lake → Glue ETL → Redshift warehouse → QuickSight dashboards, with Lambda triggers, CloudWatch monitoring, and IAM least-privilege design. Scroll to the Cloud AWS section to see an interactive pipeline demo!",
  },
  {
    keywords: ["s3", "glue", "redshift", "quicksight", "pipeline", "data pipeline", "etl"],
    response:
      "The AWS data pipeline Rudraksh built follows the modern lakehouse pattern: raw data lands in S3, AWS Glue handles schema discovery and ETL transformations, Redshift serves as the analytics warehouse with ~120 ms query latency, and QuickSight powers BI dashboards. Scroll up to the Cloud AWS section to see it animated live!",
  },
  {
    keywords: ["lambda", "kinesis", "athena", "eventbridge", "cloudwatch", "iam"],
    response:
      "Supporting services in Rudraksh's AWS stack include: Lambda (event-driven processing), Kinesis Data Streams (real-time ingestion), Athena (serverless SQL on S3), EventBridge (scheduling & routing), CloudWatch (monitoring & alerts), and IAM (least-privilege access control).",
  },
  {
    keywords: ["mern", "react", "node", "mongodb", "express", "fullstack", "full stack", "full-stack", "web"],
    response:
      "Rudraksh is a MERN stack expert — React 19, Next.js 16, Node.js, Express, MongoDB, and TypeScript. He's built e-commerce platforms with Stripe payments, AI-powered task managers, real-time dashboards, and this very portfolio. Clean architecture, responsive design, and smooth Framer Motion animations are his signature.",
  },
  {
    keywords: ["nextjs", "next.js", "typescript", "tailwind", "framer"],
    response:
      "This portfolio is built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion. Rudraksh favours this stack for its performance, type safety, and developer experience. Server Components + client-side animations = best of both worlds.",
  },
  {
    keywords: ["dsa", "algorithm", "data structure", "leetcode", "competitive", "sorting", "graph", "tree", "dp", "dynamic"],
    response:
      "DSA is one of Rudraksh's core strengths. He's proficient in arrays, linked lists, trees, graphs, dynamic programming, and binary search algorithms. Scroll to the Algorithm Visualizer section to see sorting algorithms animated live — Bubble, Selection, Insertion, and Quick Sort with step-by-step explanations!",
  },
  {
    keywords: ["bubble sort", "selection sort", "insertion sort", "quick sort", "merge sort"],
    response:
      "The Algorithm Visualizer on this page demonstrates: Bubble Sort O(n²), Selection Sort O(n²), Insertion Sort O(n²), and Quick Sort O(n log n) with real-time bar animations. Each step is colour-coded: cyan = comparing, orange = swapping, green = sorted. Try it out in the Algorithms section!",
  },
  {
    keywords: ["ai", "ml", "machine learning", "aiml", "artificial intelligence", "nlp", "llm"],
    response:
      "Rudraksh applies AI/ML in real projects — NLP-based task prioritisation, LLM integration with prompt engineering, and recommendation systems. He built NEXUS (that's me!) as a live demonstration of AI assistant design. He's actively exploring LangChain, vector databases, and fine-tuning workflows.",
  },
  {
    keywords: ["project", "projects", "built", "portfolio", "work", "apps"],
    response:
      "Rudraksh's featured projects include: 1️⃣ AWS Data Pipeline (S3→Glue→Redshift) 2️⃣ AI-Powered Task Manager (MERN + OpenAI) 3️⃣ DSA Visualizer Platform 4️⃣ This Space Portfolio with NEXUS 5️⃣ Full-Stack E-Commerce (MERN + Stripe) 6️⃣ Real-Time Weather & Analytics App. Scroll to the Projects section for full details!",
  },
  {
    keywords: ["ecommerce", "e-commerce", "shopping", "stripe", "payment"],
    response:
      "Rudraksh built a complete MERN e-commerce platform featuring user authentication (JWT), product management, a shopping cart, Stripe payment integration, an admin dashboard, order tracking, and real-time inventory updates.",
  },
  {
    keywords: ["contact", "hire", "email", "reach", "available", "opportunity", "internship", "job"],
    response:
      "Rudraksh is actively open to internships and project collaborations! 📧 Email: rudraksha127@gmail.com | 📍 Indore, MP, India | GitHub: github.com/rudraksha127 | LinkedIn: linkedin.com/in/rudraksh-udiya. Scroll to the Contact section to send a message directly!",
  },
  {
    keywords: ["education", "college", "university", "b.tech", "btech", "acropolis"],
    response:
      "Rudraksh is pursuing B.Tech in Information Technology at Acropolis Institute of Technology and Research, Indore (2024–2028). Previous education: Class 12 PCM with Grade A and Class 10 with distinction — both from MPBSE. He also holds the NCC 'A' Certificate for leadership.",
  },
  {
    keywords: ["experience", "internship", "work experience"],
    response:
      "Rudraksh has built 10+ projects across cloud data engineering, full-stack web development, and AI/ML as a self-driven developer. He contributes to open-source, practices DSA daily, and is currently seeking internship opportunities to apply his skills professionally.",
  },
  {
    keywords: ["skill", "skills", "technology", "technologies", "stack"],
    response:
      "Rudraksh's skill stack spans 4 domains: ☁️ AWS (S3, Glue, Redshift, Lambda, Athena, Kinesis) · ⚛️ MERN (React, Next.js, Node.js, MongoDB, TypeScript) · 🧮 DSA (Graphs, DP, Trees, Binary Search) · 🤖 AI/ML (NLP, LLMs, Prompt Engineering). Plus C++, Python, Docker, Git, PostgreSQL, and Tailwind CSS.",
  },
  {
    keywords: ["strong", "strongest", "best", "expertise", "expert"],
    response:
      "Rudraksh's strongest domains are AWS Cloud Data Engineering (DEA-C01 certified) and Full Stack MERN Development. He's built production-grade data pipelines on AWS and deployed multiple full-stack web apps. His DSA and AI/ML skills make him a well-rounded engineer who bridges data, software, and intelligence.",
  },
  {
    keywords: ["python", "c++", "cpp", "go", "docker"],
    response:
      "Beyond his core stack, Rudraksh is proficient in Python (scripting, data processing, ML libraries), C++ (competitive programming, systems concepts), and has experience with Docker for containerisation and Go for high-performance services.",
  },
  {
    keywords: ["ncc", "leadership", "cadet"],
    response:
      "Rudraksh holds the NCC 'A' Certificate from the National Cadet Corps — demonstrating discipline, leadership, and teamwork skills that complement his technical expertise.",
  },
];

const SUGGESTIONS = [
  "Tell me about Rudraksh",
  "What are his AWS skills?",
  "Show me his projects",
  "Explain the DSA visualizer",
  "How can I contact him?",
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of KB) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response;
    }
  }
  return "I don't have a specific answer for that, but Rudraksh is always happy to chat! Try asking about his AWS expertise, MERN projects, DSA skills, or AI/ML work. Or scroll to the Contact section to reach him directly. 🚀";
}

// ─── Waveform animation ───────────────────────────────────────────────────

function Waveform({ active }: { active: boolean }) {
  const bars = [3, 5, 8, 5, 10, 7, 4, 9, 6, 4, 8, 5];
  return (
    <div className="flex items-center gap-[2px] h-5">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] bg-cyan-400 rounded-full"
          animate={
            active
              ? { scaleY: [1, h / 5, 1], opacity: [0.6, 1, 0.6] }
              : { scaleY: 1, opacity: 0.3 }
          }
          transition={{
            duration: 0.5,
            repeat: active ? Infinity : 0,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
          style={{ height: `${h}px`, transformOrigin: "center" }}
        />
      ))}
    </div>
  );
}

// ─── Typewriter effect ────────────────────────────────────────────────────

function TypewriterText({ text, onDone }: { text: string; onDone: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    setDisplayed("");
    indexRef.current = 0;
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
        onDoneRef.current();
      }
    }, 14);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
}

// ─── Component ────────────────────────────────────────────────────────────

export const NexusChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "nexus",
      text: "Hello! I'm NEXUS — Rudraksh's AI portfolio assistant. Ask me anything about his skills, projects, or background. I'm online and ready! 🤖",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [pendingResponse, setPendingResponse] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, pendingResponse]);

  const handleSend = (text?: string) => {
    const userText = (text ?? input).trim();
    if (!userText) return;
    setInput("");

    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setIsSpeaking(true);

    const delay = 400 + Math.random() * 300;
    setTimeout(() => {
      const response = getResponse(userText);
      setPendingResponse(response);
    }, delay);
  };

  const handleTypewriterDone = () => {
    if (pendingResponse) {
      setMessages((prev) => [...prev, { role: "nexus", text: pendingResponse }]);
      setPendingResponse(null);
      setIsSpeaking(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close NEXUS assistant" : "Open NEXUS assistant"}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/40 flex items-center justify-center text-white font-bold text-xl hover:scale-110 transition-transform"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? "✕" : "🤖"}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[99] w-[340px] md:w-[380px] rounded-2xl border border-purple-500/30 bg-[#07041a] shadow-2xl shadow-purple-900/50 flex flex-col overflow-hidden"
            style={{ maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#120830] to-[#060920] border-b border-purple-500/20">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-lg shrink-0">
                🤖
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight">NEXUS</p>
                <div className="flex items-center gap-1.5">
                  <Waveform active={isSpeaking} />
                  <span className="text-xs text-gray-400">
                    {isSpeaking ? "Responding…" : "Online"}
                  </span>
                </div>
              </div>
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-green-400"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hidden">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-purple-600/80 text-white rounded-br-none"
                        : "bg-[#0e0828] border border-purple-500/20 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typewriter response */}
              {pendingResponse && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] px-3 py-2 rounded-xl rounded-bl-none text-sm leading-relaxed bg-[#0e0828] border border-cyan-500/20 text-gray-200">
                    <TypewriterText text={pendingResponse} onDone={handleTypewriterDone} />
                  </div>
                </div>
              )}

              {/* Thinking dots */}
              {isSpeaking && !pendingResponse && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-xl rounded-bl-none bg-[#0e0828] border border-purple-500/20">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-purple-400"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 2 && !isSpeaking && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="text-xs px-2.5 py-1 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-purple-500/20 px-3 py-2.5 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask NEXUS anything…"
                disabled={isSpeaking}
                className="flex-1 bg-[#0e0828] text-white text-sm px-3 py-2 rounded-lg border border-purple-500/20 focus:border-purple-500/50 focus:outline-none disabled:opacity-50 placeholder:text-gray-600"
              />
              <button
                onClick={() => handleSend()}
                disabled={isSpeaking || !input.trim()}
                aria-label="Send message"
                className="w-9 h-9 rounded-lg bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
