import type { Metadata } from "next";
import site from "@/content/site.json";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: `Terms · ${site.brand}`, robots: { index: false } };

export default function Terms() {
  return (
    <LegalPage title="Terms">
      <p>
        {site.brand} ek digital product (PDF ebook) hai jo {site.businessName} bechta hai. Payment ke baad aapko PDF ka personal use license
        milta hai. Isse aage bechna, share karna ya copy karke baantna allowed nahi hai.
      </p>
      <p>
        Ebook sirf jaankari aur ek tareeka deta hai. Kisi result ka vaada nahi hai; business ka result aapki mehnat aur market pe depend
        karta hai. WhatsApp aur Meta ke rules aur rates badalte rehte hain; latest jaankari unke official pages pe dekhein.
      </p>
      <p>
        Hum WhatsApp ya Meta se affiliated nahi hain. WhatsApp unke maalik ka trademark hai. Kisi bhi dispute ke liye {site.supportEmail} pe
        likhein; hum pehle baat karke suljhaane ki koshish karte hain.
      </p>
    </LegalPage>
  );
}
