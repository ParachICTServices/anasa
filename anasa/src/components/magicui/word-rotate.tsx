"use client";

import { AnimatePresence, motion, MotionProps } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: any;
  descriptions?: any;
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  descriptions,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words?.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden h-[120px] lg:py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words?.[index]}
          className={cn(className)}
          {...motionProps}
        >
          {words?.[index]}
        </motion.h1>
        <motion.p className="text-center md:text-left w-[300px]  text-primary text-xl">
          {descriptions?.[index]}
          </motion.p>
      </AnimatePresence>
    </div>
  );
}
