"use client";

import { track } from "@/components/MetaPixel";
import { Icon } from "@/components/Icon";
import site from "@/content/site.json";

const LINK = process.env.NEXT_PUBLIC_RAZORPAY_LINK;

type Props = {
  size?: "md" | "lg";
  variant?: "primary" | "primary-dark" | "secondary";
  label?: string;
  className?: string;
  location: string;
};

/**
 * The single primary action. Points at the Razorpay Payment Link from the environment.
 * Without a link it renders visibly disabled with a specific note, never a dead "#".
 */
export function BuyButton({ size = "md", variant = "primary", label = site.cta, className = "", location }: Props) {
  const textStyle = size === "lg" ? "button-lg" : "button-md";
  const tone = variant === "primary-dark" ? "btn-primary-dark" : variant === "secondary" ? "btn-secondary" : "btn-primary";

  if (!LINK) {
    return (
      <span className={`inline-flex flex-col items-start gap-1 ${className}`}>
        <span className={`btn btn-disabled ${textStyle}`} aria-disabled="true">
          {label}
        </span>
        <span className="caption-4 text-mute">Payment link not configured. Set NEXT_PUBLIC_RAZORPAY_LINK.</span>
      </span>
    );
  }

  return (
    <a
      href={LINK}
      className={`btn ${tone} ${textStyle} ${className}`}
      data-location={location}
      onClick={() => track("InitiateCheckout", { content_name: site.brand, value: site.price, currency: "INR" })}
    >
      <span>{label}</span>
      <Icon name="arrowRight" size={size === "lg" ? 22 : 18} />
    </a>
  );
}
