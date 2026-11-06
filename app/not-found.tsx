import Link from "next/link";
import site from "@/content/site.json";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen items-center px-4 py-24 md:px-6">
      <div className="mx-auto max-w-2xl">
        <p className="caption-3 text-deep">404</p>
        <h1 className="heading-3 md:heading-2 mt-2">Yeh page nahi mila.</h1>
        <p className="title-2 mt-4 text-mute">Link galat ho sakta hai, ya page hata diya gaya. Home pe sab kuch hai.</p>
        <Link href="/" className="btn btn-primary button-md mt-8">
          {site.brand} home
        </Link>
      </div>
    </main>
  );
}
