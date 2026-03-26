"use client";

import { motion } from "framer-motion";

const layers = [
  "Data Sources",
  "Vector Database / Retrieval",
  "Large Language Models",
  "Agent Orchestration",
  "Enterprise Applications",
  "Governance & Monitoring"
];

export default function ArchitectureDiagram() {
  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-white">
        Enterprise AI Architecture
      </h3>
      <div className="relative mt-6 grid gap-6">
        {layers.map((layer, index) => (
          <div key={layer} className="relative">
            <div className="relative z-10 rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/25 via-glow/20 to-primary/10 px-5 py-4 text-white shadow-glow">
              <p className="text-sm font-semibold">{layer}</p>
            </div>
            {index < layers.length - 1 && (
              <motion.div
                aria-hidden="true"
                className="absolute left-1/2 top-full h-6 w-[2px] -translate-x-1/2 rounded-full bg-primary/60"
                initial={{ scaleY: 0, opacity: 0.2 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{ transformOrigin: "top" }}
              />
            )}
          </div>
        ))}
        <svg
          className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 opacity-60"
          viewBox="0 0 200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="archGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2F80ED" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#56A3FF" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <motion.path
            d="M100 20 L100 580"
            stroke="url(#archGlow)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    </div>
  );
}
