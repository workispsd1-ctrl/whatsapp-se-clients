import site from "@/content/site.json";
import { Reveal } from "@/components/Reveal";
import { BuyButton } from "@/components/BuyButton";
import { Icon } from "@/components/Icon";

export function Offer() {
  return (
    <section id="offer" data-sticky-stop className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl bg-green p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="caption-3 text-ink/70">{site.offer.eyebrow}</p>
                <p className="heading-1 mt-2 text-ink">{site.priceLabel}</p>
                <p className="body-5 mt-2 text-ink/80">Ek baar ka payment. Turant download. Koi subscription nahi.</p>
              </div>
              {/* Button-md here: inside this card's padding the lg label wraps to two lines at 390px. */}
              <BuyButton location="offer" variant="secondary" className="w-full sm:w-auto" />
            </div>

            <ul className="mt-8 grid gap-3 rounded-2xl bg-paper p-6 sm:grid-cols-2">
              {site.offer.included.map((item) => (
                <li key={item} className="body-5 flex items-start gap-2 text-ink">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-deep" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <p className="caption-2 flex items-start gap-2 text-ink/80">
                <Icon name="shieldCheck" size={18} className="mt-0.5 shrink-0" />
                {site.offer.payment}
              </p>
              {site.refundDays > 0 && (
                /* REFUND BLOCK: set "refundDays" to 0 in content/site.json to remove */
                <p className="caption-1 flex items-start gap-2 text-ink">
                  <Icon name="sealCheck" size={18} className="mt-0.5 shrink-0" />
                  {site.offer.refund}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
