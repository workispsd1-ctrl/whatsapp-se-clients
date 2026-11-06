import type { Metadata } from "next";
import site from "@/content/site.json";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: `Privacy policy · ${site.brand}`, robots: { index: false } };

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        Hum sirf wahi information lete hain jo order poora karne ke liye chahiye: naam, WhatsApp number aur email, taaki PDF aap tak pahunch
        sake. Payment Razorpay process karta hai; card ya UPI details hamare paas nahi aati.
      </p>
      <p>
        Hum aapka number sirf ebook delivery, support aur isi product se jude updates ke liye use karte hain. Kisi bhi message pe STOP likh
        kar aap updates band kar sakte hain. Hum aapka data kisi ko bechte nahi.
      </p>
      <p>
        Yeh website Meta Pixel use karti hai taaki hum ads ka result samajh sakein. Aap apne browser mein tracking block kar sakte hain. Aapka
        data dekhne, badalne ya delete karwane ke liye {site.supportEmail} pe likhein.
      </p>
      <p>Yeh policy {site.businessName} ki hai aur Digital Personal Data Protection Act, 2023 ke hisaab se banayi gayi hai.</p>
    </LegalPage>
  );
}
