import site from "@/content/site.json";
import { TaglineReveal } from "@/components/TaglineReveal";

/** B11: the large type moment, separate from the hero. */
export function Tagline() {
  return (
    <section className="bg-haldi px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <TaglineReveal text={site.tagline} className="heading-3 md:heading-1 max-w-[680px] text-ink" />
      </div>
    </section>
  );
}
