"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1200,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState(() => {
    if (typeof window === "undefined") return 0;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? value : 0;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    let animationFrameId = 0;
    const start = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          animationFrameId = window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [duration, value]);

  return (
    <div ref={elementRef} className="text-3xl font-black tracking-[-0.06em] text-[#fffdf7] sm:text-4xl">
      {displayValue.toLocaleString()}
      {suffix}
    </div>
  );
}
