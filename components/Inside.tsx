import site from "@/content/site.json";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export function Inside() {
  return (
    <section id="inside" className="bg-sand px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="heading-3 md:heading-2 max-w-[680px]">{site.inside.heading}</h2>
          <p className="title-2 mt-4 max-w-[680px] text-mute">{site.inside.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Parts list */}
          <div className="md:col-span-7">
            <ol className="divide-y divide-line rounded-2xl border border-line bg-white">
              {site.inside.parts.map((p) => (
                <li key={p.label} className="grid gap-2 p-4 md:grid-cols-12 md:gap-4 md:p-6">
                  <div className="md:col-span-3">
                    <p className="caption-3 text-deep">{p.label}</p>
                    <p className="caption-4 text-mute">{p.days}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="title-1">{p.title}</h3>
                    <p className="body-6 mt-1 text-ink">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl bg-ink p-6 text-paper">
              <p className="caption-3 text-green">5 bonuses, saath mein</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {site.inside.bonuses.map((b) => (
                  <li key={b} className="body-5 flex items-center gap-2">
                    <Icon name="check" size={16} className="shrink-0 text-green" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sample page */}
          <div className="md:col-span-5">
            <Reveal>
              <p className="caption-3 mb-4 text-mute">{site.inside.sampleLabel}</p>
              <div className="rounded-2xl bg-paper p-4 shadow-sm md:p-6">
                <p className="caption-4 text-mute">{site.inside.sampleBubbleTitle}</p>
                <div className="mt-3 rounded-2xl rounded-br-md bg-bubble px-3 py-2">
                  {site.inside.sampleBubble.map((line, i) => (
                    <p key={i} className="body-6">
                      {line}
                    </p>
                  ))}
                  <p className="mt-1 text-right caption-5 text-tick">✓✓</p>
                </div>
                <div className="mt-6 rounded-2xl bg-haldi p-4">
                  <p className="caption-3">{site.inside.sampleKaamTitle}</p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {site.inside.sampleKaam.map((k) => (
                      <li key={k} className="body-6 flex items-start gap-2">
                        <span className="mt-1 h-3 w-3 shrink-0 rounded-sm border-2 border-ink" aria-hidden="true" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
