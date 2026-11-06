import site from "@/content/site.json";
import { Reveal } from "@/components/Reveal";

type Testimonial = { quote: string; name: string; business: string; city: string };

/**
 * Social proof. Renders only when real testimonials exist in content/site.json ("testimonials").
 * No invented reviews: the array ships empty and the section stays hidden until the owner adds real ones.
 */
export function Proof() {
  const items = site.testimonials as Testimonial[];
  if (items.length === 0) return null;
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="heading-3 md:heading-2 max-w-[680px]">Jo padh chuke hain, woh kya kehte hain</h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <li key={t.name}>
              <Reveal className="h-full rounded-2xl border border-line bg-white p-6">
                <p className="body-3">&ldquo;{t.quote}&rdquo;</p>
                <p className="caption-1 mt-6">{t.name}</p>
                <p className="caption-5 text-mute">
                  {t.business}, {t.city}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
