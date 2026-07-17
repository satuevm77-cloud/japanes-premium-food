"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 80, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 80, damping: 24, mass: 0.4 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[4] hidden h-[360px] w-[360px] rounded-full bg-gold/10 blur-3xl lg:block"
      style={{ x: springX, y: springY }}
    />
  );
}
