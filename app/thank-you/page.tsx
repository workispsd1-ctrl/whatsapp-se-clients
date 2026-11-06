import type { Metadata } from "next";
import Link from "next/link";
import site from "@/content/site.json";
import { Icon } from "@/components/Icon";
import { PurchaseEvent } from "@/components/PurchaseEvent";

export const metadata: Metadata = {
  title: `Shukriya · ${site.brand}`,
  robots: { index: false, follow: false },
};

/** Razorpay Payment Link redirect target. Fires the Purchase pixel event once. */
export default function ThankYou() {
  return (
    <main id="main" className="px-4 py-24 md:px-6">
      <PurchaseEvent />
      <div className="mx-auto max-w-2xl">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green text-ink">
          <Icon name="check" size={24} label="Payment successful" />
        </span>
        <h1 className="heading-3 md:heading-2 mt-6">{site.thankYou.heading}</h1>
        <p className="title-2 mt-4 text-ink">{site.thankYou.body}</p>
        <ol className="mt-8 flex flex-col gap-3">
          {site.thankYou.next.map((step, i) => (
            <li key={step} className="body-3 flex gap-3">
              <span className="caption-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-haldi">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <p className="caption-2 mt-8 text-mute">
          Support: {site.supportWhatsApp} · {site.supportEmail}
        </p>
        <Link href="/" className="btn btn-secondary button-md mt-8">
          Wapas home
        </Link>
      </div>
    </main>
  );
}
