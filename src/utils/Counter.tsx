'use client'
import { motion, useMotionValue, useTransform, animate, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ countEnd, duration = 5, text }: { countEnd: number; duration?: number; text?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [state, setState] = useState(0);

  useEffect(() => {
    const animation = animate(count, countEnd, { duration: duration, delay: 3 });

    return animation.stop;
  }, []);
  useMotionValueEvent(rounded, "change", (latest) => {
    setState(latest);
  });
  return (
    <motion.span>
      {state}
      {text}
    </motion.span>
  );
};

export default Counter;
