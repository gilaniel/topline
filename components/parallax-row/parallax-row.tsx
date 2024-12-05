"use client";

import { ReactNode, useRef } from "react";

import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";

import "./styles.css";

interface ParallaxRowProps {
  children: ReactNode;
  baseVelocity?: number;
  repeatCount?: number;
  rightX?: number;
}

export function ParallaxRow({
  children,
  baseVelocity = 1.5,
  rightX = -43.5,
}: ParallaxRowProps) {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-10, rightX, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax h-full">
      <motion.div
        className="scroller flex items-center justify-center"
        style={{ x }}
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default ParallaxRow;
