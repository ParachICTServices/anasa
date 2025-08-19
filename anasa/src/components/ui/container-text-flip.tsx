"use client";

import React, { useState, useEffect, useId } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  descriptions?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  descriptions = ["better", "modern", "beautiful", "awesome"],
  interval = 5000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentDescriptionIndex(
        (prevIndex) => (prevIndex + 1) % descriptions.length
      );
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, descriptions, interval]);

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 1000 }}
      className={cn(
        "relative inline-block pt-2 pb-3 ",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 2000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block font-bold">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.01,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      <p className=" text-xl w-[300px] ">
        {descriptions[currentDescriptionIndex].split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: index * 0.02,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
