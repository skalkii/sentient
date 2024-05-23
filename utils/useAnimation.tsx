"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Animation = {
  initial: any;
  animate: any;
  transition: any;
  viewport?: any;
};

export const fadeInSlideUp: Animation = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { ease: "easeInOut", duration: 0.75 },
};

interface UseAnimationPropTypes {
  children: ReactNode;
  animation: Animation;
}

export const UseAnimation = ({
  children,
  animation,
}: UseAnimationPropTypes) => {
  return <motion.div {...animation}>{children}</motion.div>;
};
