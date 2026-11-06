import site from "@/content/site.json";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export function Faq() {
  const items = site.refundDays > 0 ? site.faq : site.faq.filter((f) => !/refund/i.test(f.q));
  return (
    <section id="faq" className="bg-sand px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl md:grid md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <h2 className="heading-3 md:heading-2">Sawaal jo sab poochte hain</h2>
          <p className="body-3 mt-4 text-mute">Aur kuch poochna hai? Support WhatsApp pe likho, jawab aata hai.</p>
        </Reveal>
        <div className="mt-8 md:col-span-8 md:mt-0">
          <div className="divide-y divide-line rounded-2xl border border-line bg-white">
            {items.map((f) => (
              <details key={f.q} className="group p-4 md:p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tick/60">
                  <span className="title-2">{f.q}</span>
                  <Icon name="caretDown" size={20} className="faq-caret shrink-0 text-deep transition duration-500 ease-base" />
                </summary>
                <p className="body-3 mt-3 text-ink">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
