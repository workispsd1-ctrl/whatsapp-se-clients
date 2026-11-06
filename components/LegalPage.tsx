import Link from "next/link";
import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main id="main" className="px-4 py-24 md:px-6">
      <article className="mx-auto max-w-2xl">
        <Link href="/" className="caption-1 text-deep underline-offset-4 hover:underline">
          Wapas home
        </Link>
        <h1 className="heading-3 md:heading-2 mt-6">{title}</h1>
        <div className="mt-8 flex flex-col gap-4 body-3">{children}</div>
      </article>
    </main>
  );
}
