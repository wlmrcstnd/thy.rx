"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"],
  });

  // Modified transform values for spread-out effect
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const rotateThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  // Scale effect for middle column
  const scaleSecond = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacitySecond = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={twMerge("min-h-screen w-full", className)}
      ref={gridRef}
    >
      <div className="sticky top-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                x: translateXFirst,
                rotateZ: rotateFirst,
              }}
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{
                scale: scaleSecond,
                opacity: opacitySecond,
              }}
              key={"grid-2" + idx}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                x: translateXThird,
                rotateZ: rotateThird,
              }}
              key={"grid-3" + idx}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};