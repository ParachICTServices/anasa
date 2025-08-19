"use client";

const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
 
const slideUp = (delay: number) => {
  return {
    hidden: { y: "100%" },
    show: {
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childAnimation = {
  hidden: { y: '100%'},
  show: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const zoomIn = {
  hidden: { scale: 0.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const zoomFade = {
  hidden: { scale: 1.2, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "tween", duration: 1.9 } },
};

const zoomFadeBlur = {
  hidden: { scale: 1.1, opacity: 0, filter: "blur(10px)" },
  show: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

const fadeInLetters = (index: number) => {
  return {
    hidden: { opacity: 0 },
    show: () => ({
      opacity: 1,
      transition: { duration: 0.8, delay: index * 0.2 }, // Delay based on index
    }),
  };
};

export {
  fadeIn,
  stagger,
  childAnimation,
  zoomIn,
  zoomFade,
  zoomFadeBlur,
  fadeInLetters,
  slideUp,
};
