"use client";

import { useEffect, useState } from "react";
import { BuyButton } from "@/components/BuyButton";
import site from "@/content/site.json";

/**
 * Mobile only bar with the same primary action. Appears once the hero has scrolled out of view
 * and hides again over the offer and footer, so it never competes with an on screen buy button.
 */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const stops = Array.from(document.querySelectorAll<HTMLElement>("[data-sticky-stop]"));
    if (!hero || typeof IntersectionObserver === "undefined") return;

    let heroVisible = true;
    let stopVisible = false;
    const update = () => setShow(!heroVisible && !stopVisible);

    const heroIo = new IntersectionObserver(
      (entries) => {
        heroVisible = entries.some((e) => e.isIntersecting);
        update();
      },
      { threshold: 0.1 },
    );
    heroIo.observe(hero);

    // Track each stop separately: the callback only receives entries that changed, so one
    // section leaving must not clear a sibling that is still on screen.
    const visibleStops = new Set<Element>();
    const stopIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visibleStops.add(e.target);
          else visibleStops.delete(e.target);
        }
        stopVisible = visibleStops.size > 0;
        update();
      },
      { threshold: 0.05 },
    );
    stops.forEach((s) => stopIo.observe(s));

    return () => {
      heroIo.disconnect();
      stopIo.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/90 px-4 py-3 backdrop-blur-md transition duration-500 ease-base md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!show}
      inert={!show}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="body-4 truncate">{site.brand}</p>
          <p className="caption-5 text-mute">{site.priceLabel} · PDF · turant delivery</p>
        </div>
        <BuyButton location="sticky" label={site.ctaShort} className="shrink-0" />
      </div>
    </div>
  );
}
