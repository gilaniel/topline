"use client";

import Image from "next/image";
import { delay, motion, Variants } from "framer-motion";

const onscreen = ({ side }: { side: string }) => {
  return {
    x: side === "left" ? -77 : 77,
    transition: {
      type: "spring",
      stiffness: 1010,
      damping: 180,
      mass: 1,
      delay: 0.5,
    },
  };
};

const leftArrow = (width: number) => {
  return {
    offscreen: {
      x: -width / 2 - 110,
      y: -14,
      rotate: 225,
    },
    onscreen: onscreen({ side: "left" }),
  };
};

const rightArrow = (width: number) => {
  return {
    offscreen: {
      x: width / 2 + 80,
      y: 10,
      rotate: 45,
    },
    onscreen: onscreen({ side: "right" }),
  };
};

export const Animate = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 0;

  return (
    <section className="w-full overflow-hidden">
      <motion.div
        className="h-[160px] relative"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          initial={{ rotate: 0, x: "-50%", y: 50 }}
          whileInView={{ rotate: 135 }}
          transition={{
            delay: 1.9,
            type: "spring",
            stiffness: 1010,
            damping: 180,
            mass: 1,
          }}
          viewport={{ once: true, amount: 1 }}
          className="absolute left-1/2 -translate-x-1/2 w-[60px] h-[60px]"
        >
          <motion.div
            variants={leftArrow(width)}
            className="absolute w-[69px] h-[69px] left-1/2"
          >
            <Image src="/logo_part.svg" alt="Topline" width={69} height={69} />
          </motion.div>

          <motion.div
            variants={rightArrow(width)}
            className="absolute w-[69px] h-[69px] right-1/2"
          >
            <Image src="/logo_part.svg" alt="Topline" width={69} height={69} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
