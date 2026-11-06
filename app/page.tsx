import site from "@/content/site.json";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Benefits } from "@/components/Benefits";
import { Tagline } from "@/components/Tagline";
import { HowItWorks } from "@/components/HowItWorks";
import { Inside } from "@/components/Inside";
import { Honesty } from "@/components/Honesty";
import { Proof } from "@/components/Proof";
import { Offer } from "@/components/Offer";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function Page() {
  const faqItems = site.refundDays > 0 ? site.faq : site.faq.filter((f) => !/refund/i.test(f.q));
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.brand,
    description: site.seo.description,
    image: `${siteUrl}/og.png`,
    offers: { "@type": "Offer", price: site.price, priceCurrency: "INR", availability: "https://schema.org/InStock" },
  };

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Benefits />
        <Tagline />
        <HowItWorks />
        <Inside />
        <Honesty />
        <Proof />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </>
  );
}
