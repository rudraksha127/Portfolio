"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

const PIPELINE_NODES = [
  {
    id: "s3",
    label: "Amazon S3",
    icon: "🪣",
    color: "from-green-600 to-green-400",
    border: "border-green-500/50",
    glow: "shadow-green-500/30",
    description: "Data Lake — raw data ingestion from multiple sources (CSV, JSON, Parquet).",
    metric: "2.4 TB stored",
  },
  {
    id: "glue",
    label: "AWS Glue",
    icon: "⚙️",
    color: "from-orange-600 to-orange-400",
    border: "border-orange-500/50",
    glow: "shadow-orange-500/30",
    description: "Serverless ETL — schema discovery, data transformation, and cataloguing.",
    metric: "18 jobs / day",
  },
  {
    id: "redshift",
    label: "Amazon Redshift",
    icon: "🗄️",
    color: "from-red-600 to-red-400",
    border: "border-red-500/50",
    glow: "shadow-red-500/30",
    description: "Petabyte-scale data warehouse for analytics workloads.",
    metric: "~120 ms query",
  },
  {
    id: "quicksight",
    label: "QuickSight",
    icon: "📊",
    color: "from-blue-600 to-cyan-400",
    border: "border-cyan-500/50",
    glow: "shadow-cyan-500/30",
    description: "BI dashboards — interactive visualisations & ML-powered insights.",
    metric: "5 live dashboards",
  },
] as const;

const METRICS = [
  { label: "Pipeline Runs", value: "1,247", unit: "total", color: "text-green-400" },
  { label: "Data Processed", value: "2.4", unit: "TB", color: "text-orange-400" },
  { label: "Avg Latency", value: "120", unit: "ms", color: "text-cyan-400" },
  { label: "Uptime", value: "99.9", unit: "%", color: "text-purple-400" },
] as const;

function AnimatedArrow({ active }: { active: boolean }) {
  return (
    <div className="flex items-center justify-center w-10 md:w-16 shrink-0">
      <div className="relative w-full h-0.5 bg-gray-700">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
          initial={{ scaleX: 0, originX: 0 }}
          animate={active ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: active ? "8px solid rgb(34,211,238)" : "8px solid rgb(55,65,81)",
          }}
          animate={active ? { opacity: 1 } : { opacity: 0.3 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
        {/* Travelling dot */}
        {active && (
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/80"
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>
    </div>
  );
}

export const AwsCloudPanel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [arrowsActive, setArrowsActive] = useState(false);
  const [pulseMetric, setPulseMetric] = useState(0);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setArrowsActive(true), 600);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseMetric((prev) => (prev + 1) % METRICS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="cloud-aws"
      ref={ref}
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <motion.div variants={slideInFromLeft(0.3)}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-orange-500/80 to-transparent" />
              <span className="section-tag">cloud aws</span>
            </div>
            <h1 className="text-4xl md:text-[44px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 leading-tight">
              Cloud AWS Engineering
            </h1>
            <div className="h-[3px] w-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 mt-3 mb-2" />
            <p className="text-gray-400 mt-2 max-w-xl">
              Live data pipeline architecture — the same pattern used in my AWS
              DEA-C01 certified projects.
            </p>
          </motion.div>

          {/* AWS Cert badge */}
          <motion.div
            variants={slideInFromRight(0.3)}
            className="relative flex items-center gap-3 px-5 py-3 rounded-xl border border-orange-500/40 bg-[#0a0616]/80"
          >
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl"
            >
              ☁️
            </motion.div>
            <div>
              <p className="text-orange-400 font-bold text-sm">AWS CERTIFIED</p>
              <p className="text-white font-semibold text-xs">Data Engineer – Associate</p>
              <p className="text-gray-400 text-xs">DEA-C01 · 2025</p>
            </div>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Pipeline diagram */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col md:flex-row items-center justify-center gap-0 mb-12 overflow-x-auto pb-4"
        >
          {PIPELINE_NODES.map((node, i) => (
            <div key={node.id} className="flex items-center">
              {/* Node card */}
              <motion.button
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border ${node.border} bg-[#0a0616]/80 cursor-pointer hover:scale-105 transition-transform shadow-lg ${node.glow} min-w-[110px]`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.25 + 0.3, duration: 0.5 }}
                aria-label={`${node.label} details`}
              >
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: activeNode === node.id ? [0, -10, 10, 0] : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {node.icon}
                </motion.span>
                <span className="text-white font-semibold text-xs text-center leading-tight">
                  {node.label}
                </span>
                <span
                  className={`text-[10px] font-medium bg-gradient-to-r ${node.color} bg-clip-text text-transparent`}
                >
                  {node.metric}
                </span>

                {/* Active ring */}
                {activeNode === node.id && (
                  <motion.div
                    className={`absolute inset-0 rounded-xl border-2 ${node.border}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>

              {/* Arrow between nodes */}
              {i < PIPELINE_NODES.length - 1 && (
                <AnimatedArrow active={arrowsActive} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Node detail card */}
        {activeNode && (
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-10 p-5 rounded-xl border border-purple-500/30 bg-[#0a0616]/80 max-w-xl mx-auto text-center"
          >
            {PIPELINE_NODES.filter((n) => n.id === activeNode).map((node) => (
              <div key={node.id}>
                <p className="text-white font-bold text-lg mb-1">{node.label}</p>
                <p className="text-gray-300 text-sm">{node.description}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Live metrics row */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              animate={
                pulseMetric === i
                  ? { scale: [1, 1.04, 1], borderColor: ["rgba(112,66,248,0.3)", "rgba(112,66,248,0.7)", "rgba(112,66,248,0.3)"] }
                  : {}
              }
              transition={{ duration: 0.6 }}
              className="p-4 border border-[#2A0E61] rounded-lg bg-[#0a0616]/60 text-center"
            >
              <p className={`text-2xl font-bold ${m.color}`}>
                {m.value}
                <span className="text-sm ml-1 text-gray-400">{m.unit}</span>
              </p>
              <p className="text-gray-400 text-xs mt-1">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting services */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="mt-8 p-5 rounded-xl border border-[#2A0E61] bg-[#0a0616]/60"
        >
          <p className="text-gray-400 text-sm mb-3 font-semibold">Supporting AWS Services</p>
          <div className="flex flex-wrap gap-2">
            {["Lambda", "IAM", "CloudWatch", "Athena", "Kinesis Data Streams", "EventBridge", "SNS", "Step Functions"].map(
              (svc) => (
                <span
                  key={svc}
                  className="px-3 py-1 text-xs bg-orange-500/10 text-orange-300 rounded-full border border-orange-500/20 hover:bg-orange-500/20 transition cursor-default"
                >
                  {svc}
                </span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
