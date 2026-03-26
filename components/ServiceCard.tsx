"use client";

import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  description,
  bullets
}: {
  title: string;
  description: string;
  bullets?: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl p-6 shadow-glow"
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-secondary/80">{description}</p>
      {bullets && (
        <ul className="mt-4 space-y-2 text-sm text-secondary/70">
          {bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
