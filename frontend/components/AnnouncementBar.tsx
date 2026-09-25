"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export type Announcement = {
  text: string;
  href?: string;
};

export default function AnnouncementBar({ announcements }: { announcements: Announcement[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.sessionStorage.getItem("mkcafe-announcements-dismissed") !== "true";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isPaused || announcements.length <= 1) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = prefersReducedMotion ? 7000 : 4500;

    const timer = window.setTimeout(() => {
      setCurrentIndex((previous) => (previous + 1) % announcements.length);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [announcements.length, currentIndex, isPaused]);

  const dismiss = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("mkcafe-announcements-dismissed", "true");
    }
    setIsVisible(false);
  };

  if (!isVisible || announcements.length === 0) return null;

  const activeAnnouncement = announcements[currentIndex];

  return (
    <div
      className="border-b border-[#ead7a4] bg-[#fffaf0] text-[#3E2723]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <div className="relative min-h-[20px] flex-1 overflow-hidden">
          <div
            key={activeAnnouncement.text}
            className="flex min-h-[20px] items-center justify-center gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-500 ease-out"
          >
            {activeAnnouncement.href ? (
              <a href={activeAnnouncement.href} className="hover:text-[#6D4C41]">
                {activeAnnouncement.text}
              </a>
            ) : (
              <span>{activeAnnouncement.text}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {announcements.length > 1 && (
            <div className="flex items-center gap-1.5">
              {announcements.map((announcement, index) => (
                <button
                  key={announcement.text}
                  type="button"
                  aria-label={`Show announcement ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "w-5 bg-[#3E2723]" : "bg-[#d2b66c] hover:bg-[#6D4C41]"
                  }`}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={dismiss}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e3d4ad] bg-[#fffdf7] text-[#3E2723] transition hover:border-[#c9a227] hover:bg-[#fff7e7]"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
