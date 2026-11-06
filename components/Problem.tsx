import site from "@/content/site.json";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";

export function Problem() {
  return (
    <section className="bg-ink px-4 py-16 text-paper md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="heading-3 md:heading-2 max-w-[680px]">{site.problem.heading}</h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {site.problem.items.map((item, i) => (
            <li key={item.title} className="h-full">
              <Reveal className="h-full rounded-2xl bg-ink2 p-6">
                <p className="heading-2 text-green">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="heading-6 mt-6">{item.title}</h3>
                <p className="body-3 mt-2 text-paper/80">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-12 md:mt-16">
          <div className="flex max-w-[680px] items-start gap-4 rounded-2xl bg-ink2 p-6">
            <Icon name="lightning" size={24} className="mt-1 shrink-0 text-green" />
            <p className="title-1 text-paper">{site.problem.solution}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
