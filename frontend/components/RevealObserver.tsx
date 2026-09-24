"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          target.classList.add("is-visible");
          observer.unobserve(target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -20px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element, index) => {
      const target = element as HTMLElement;
      target.style.transitionDelay = `${index * 80}ms`;
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
