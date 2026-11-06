import type { Metadata } from "next";
import site from "@/content/site.json";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: `Refund policy · ${site.brand}`, robots: { index: false } };

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund policy">
      {site.refundDays > 0 ? (
        <>
          <p>
            Agar ebook kharidne ke {site.refundDays} din ke andar aapko pasand na aaye, toh {site.supportEmail} ya {site.supportWhatsApp} pe
            ek message bhejo aur poora paisa wapas milega. Payment ka screenshot ya Razorpay payment ID saath mein bhej dein.
          </p>
          <p>Refund usi payment method pe jaata hai jisse payment hua tha. Razorpay ke hisaab se 5 se 7 working days lag sakte hain.</p>
        </>
      ) : (
        <p>Yeh ek digital product hai. Download ke baad refund nahi hota. Koi dikkat ho toh {site.supportEmail} pe likhein, hum madad karenge.</p>
      )}
      <p>Yeh policy {site.businessName} ki hai. Sawaal ke liye: {site.supportEmail}.</p>
    </LegalPage>
  );
}
