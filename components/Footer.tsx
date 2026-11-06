import Link from "next/link";
import site from "@/content/site.json";

export function Footer() {
  return (
    <footer data-sticky-stop className="border-t border-line bg-paper px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="title-3">{site.brand}</p>
          <p className="caption-2 mt-2 text-mute">Ek product of {site.businessName}</p>
        </div>
        <div className="md:col-span-4">
          <p className="caption-3 text-mute">Support</p>
          <p className="body-6 mt-2">{site.supportEmail}</p>
          <p className="body-6">{site.supportWhatsApp}</p>
        </div>
        <nav aria-label="Legal" className="md:col-span-3">
          <ul className="flex flex-col gap-2">
            {site.footer.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="body-6 text-ink underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="caption-5 text-mute md:col-span-12">
          {site.footer.disclaimer} © {new Date().getFullYear()} {site.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
