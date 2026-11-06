import site from "@/content/site.json";
import { Reveal } from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icon";

const ICONS: IconName[] = ["users", "chat", "megaphone", "calendarCheck", "timer"];

export function Benefits() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="heading-3 md:heading-2 max-w-[680px]">{site.benefits.heading}</h2>
        </Reveal>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {site.benefits.items.map((b, i) => (
            <li key={b.title}>
              <Reveal className="grid gap-2 py-6 md:grid-cols-12 md:gap-6 md:py-8">
                <div className="flex items-center gap-3 md:col-span-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-haldi text-ink">
                    <Icon name={ICONS[i % ICONS.length]} size={20} />
                  </span>
                  <h3 className="heading-6">{b.title}</h3>
                </div>
                <p className="body-3 text-ink md:col-span-7">{b.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
