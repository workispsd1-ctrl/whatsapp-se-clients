import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import site from "@/content/site.json";
import { MetaPixel } from "@/components/MetaPixel";

// One typeface for the whole site (Poppins, self hosted; Latin + Devanagari subset, OFL).
const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.woff", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: "/",
    siteName: site.brand,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.brand} ebook cover` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F3EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below adds the "js" class before hydration.
    <html lang="hi-Latn" className={poppins.variable} suppressHydrationWarning>
      <body>
        {/* Marks JS as available before the first paint so scroll reveals never hide content without it. */}
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-3 focus:py-2 focus:text-paper button-sm"
        >
          Seedha content pe jao
        </a>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
