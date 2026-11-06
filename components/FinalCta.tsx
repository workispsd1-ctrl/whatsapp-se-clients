import site from "@/content/site.json";
import { Reveal } from "@/components/Reveal";
import { BuyButton } from "@/components/BuyButton";

export function FinalCta() {
  return (
    <section data-sticky-stop className="bg-ink px-4 py-20 text-paper md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="heading-3 md:heading-1 hero-gradient-dark max-w-[680px]">{site.finalCta.heading}</h2>
          <p className="title-2 mt-6 max-w-[680px] text-paper/80">{site.finalCta.sub}</p>
          <div className="mt-8">
            <BuyButton location="final" size="lg" variant="primary-dark" className="w-full sm:w-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
