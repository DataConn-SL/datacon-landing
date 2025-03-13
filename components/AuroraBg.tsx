"use client";
import React from "react";
import { motion } from "motion/react";
import { AuroraBackground } from "./ui/aurora-beam-bg";

export function AuroraBackgroundWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex gap-4 items-center justify-center px-4"
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
