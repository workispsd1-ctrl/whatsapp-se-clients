"use client";

import { useEffect, useRef } from "react";

type Props = { text: string; className?: string };

/**
 * Tagline reveal (B11): words start muted and switch on one at a time, in reading order,
 * as each crosses a trigger line near the lower third of the viewport. One IntersectionObserver,
 * many targets. Reduced motion is handled in CSS (words render at full color).
 */
export function TaglineReveal({ text, className = "" }: Props) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = Array.from(root.querySelectorAll<HTMLSpanElement>(".tagline-word"));
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((t) => t.classList.add("is-on"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-on");
            io.unobserve(entry.target);
          }
        }
      },
      // trigger line sits 35% up from the bottom of the viewport
      { rootMargin: "0px 0px -35% 0px", threshold: 0 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="tagline-word">{w}</span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
