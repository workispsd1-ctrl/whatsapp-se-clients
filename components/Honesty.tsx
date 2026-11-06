import site from "@/content/site.json";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

/** Objections handled head on. This is the trust section a cold visitor needs before the price. */
export function Honesty() {
  return (
    <section className="bg-ink px-4 py-16 text-paper md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="heading-3 md:heading-2 max-w-[680px]">{site.honesty.heading}</h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {site.honesty.items.map((item) => (
            <li key={item.title}>
              <Reveal className="flex h-full gap-4 rounded-2xl bg-ink2 p-6">
                <Icon name="x" size={24} className="mt-1 shrink-0 text-warn" />
                <div>
                  <h3 className="heading-6">{item.title}</h3>
                  <p className="body-3 mt-2 text-paper/80">{item.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-12">
          <p className="title-1 max-w-[680px] text-paper/90">{site.honesty.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
