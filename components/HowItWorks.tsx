import site from "@/content/site.json";
import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  return (
    <section id="how" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="heading-3 md:heading-2 max-w-[680px]">{site.how.heading}</h2>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {site.how.steps.map((s, i) => (
            <li key={s.title} className="h-full">
              <Reveal className="h-full rounded-2xl border border-line bg-white p-6">
                <p className="caption-3 text-deep">Step {i + 1}</p>
                <h3 className="heading-5 mt-2">{s.title}</h3>
                <p className="body-3 mt-2 text-ink">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
