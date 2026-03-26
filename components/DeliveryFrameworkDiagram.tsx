"use client";

import { motion } from "framer-motion";

const stages = [
  "Discovery",
  "Architecture",
  "Development",
  "Deployment",
  "Optimization"
];

export default function DeliveryFrameworkDiagram() {
  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-white">AI Delivery Framework</h3>
      <div className="relative mt-6 flex flex-wrap items-center gap-4 md:flex-nowrap">
        {stages.map((stage, index) => (
          <div key={stage} className="relative flex-1">
            <div className="rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/25 via-glow/20 to-primary/10 px-4 py-3 text-center text-sm font-semibold text-white shadow-glow">
              {stage}
            </div>
            {index < stages.length - 1 && (
              <motion.div
                aria-hidden="true"
                className="hidden md:block absolute right-[-16px] top-1/2 h-[2px] w-8 -translate-y-1/2 rounded-full bg-primary/60"
                initial={{ scaleX: 0, opacity: 0.2 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </div>
        ))}
      </div>
      <motion.div
        aria-hidden="true"
        className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-primary/40 via-glow/50 to-primary/20 md:hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}
