"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import site from "@/content/site.json";
import { BuyButton } from "@/components/BuyButton";

/**
 * Floating compact bar (B7 navigation): sits off the top edge, centered, sized to content,
 * translucent over a blur. Mobile menu is a full height panel with staggered link entrance.
 */
export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-3 z-50 flex justify-center px-4 ${open ? "menu-open" : ""}`}>
      <nav
        aria-label="Main"
        className="relative z-10 flex items-center gap-2 rounded-full border border-line/70 bg-paper/75 py-2 pl-4 pr-2 shadow-sm backdrop-blur-md md:gap-6"
      >
        <Link href="/" aria-current="page" className="title-3 whitespace-nowrap text-ink">
          <span className="text-deep">WhatsApp</span> Se Clients
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="title-4 text-ink transition duration-300 ease-base hover:text-deep">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <BuyButton location="nav" label={site.ctaShort} />
        </div>

        <button
          type="button"
          className="btn btn-ghost rounded-full p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menu band karo" : "Menu kholo"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line className="toggle-line toggle-top" x1="4" y1="7" x2="20" y2="7" />
            <line className="toggle-line toggle-bottom" x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </nav>

      {/* Full height mobile panel */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 flex flex-col bg-paper/95 px-6 pb-8 pt-24 backdrop-blur-xl transition duration-500 ease-base md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <ul className="flex flex-col gap-6">
          {site.nav.map((item, i) => (
            <li key={item.href} className="menu-link" style={{ "--i": i } as CSSProperties}>
              <a href={item.href} className="heading-4 block text-ink" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="menu-link pt-2" style={{ "--i": site.nav.length } as CSSProperties}>
            <BuyButton location="menu" size="lg" className="w-full" />
          </li>
        </ul>
        <p className="menu-link mt-auto caption-2 text-mute" style={{ "--i": site.nav.length + 1 } as CSSProperties}>
          {site.footer.disclaimer}
        </p>
      </div>
    </header>
  );
}
