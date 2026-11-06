"use client";

import { useEffect } from "react";
import { track } from "@/components/MetaPixel";
import site from "@/content/site.json";

export function PurchaseEvent() {
  useEffect(() => {
    // Delay a tick so the pixel script (afterInteractive) has initialised.
    const t = window.setTimeout(() => track("Purchase", { value: site.price, currency: "INR", content_name: site.brand }), 800);
    return () => window.clearTimeout(t);
  }, []);
  return null;
}
