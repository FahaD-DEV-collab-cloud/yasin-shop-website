"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealElements = document.querySelectorAll(".reveal");

    if (reducedMotion) {
      revealElements.forEach((element) => {
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
      { threshold: 0.12, rootMargin: "0px 0px -10px 0px" }
    );

    revealElements.forEach((element, index) => {
      const target = element as HTMLElement;
      target.classList.remove("is-visible");
      target.style.transitionDelay = `${index * 40}ms`;
      observer.observe(target);
    });

    const checkInitialVisibility = () => {
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      });
    };

    requestAnimationFrame(checkInitialVisibility);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
