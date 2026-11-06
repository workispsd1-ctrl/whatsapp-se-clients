import Image from "next/image";
import site from "@/content/site.json";
import { BuyButton } from "@/components/BuyButton";
import { ChatBubble } from "@/components/ChatBubble";
import { Icon } from "@/components/Icon";
import cover from "@/public/cover_mockup.png";

export function Hero() {
  const proof = site.refundDays > 0 ? site.hero.proof : site.hero.proof.filter((p) => !/refund/i.test(p));
  return (
    <section id="hero" className="px-4 pb-16 pt-24 md:px-6 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12 md:gap-8">
        {/* Copy */}
        <div className="md:col-span-7">
          <p className="caption-3 mb-6 inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1 text-deep">
            <Icon name="storefront" size={16} />
            {site.hero.eyebrow}
          </p>
          {/* 36px on phones: at 48px the first line wraps to five single word lines and pushes the CTA below the first screen at 390px. */}
          <h1 className="heading-3 sm:heading-2 lg:heading-1 max-w-[680px]">
            {site.hero.headlineLines.map((line, i) => (
              <span key={i} className="hero-gradient block">
                {line}
              </span>
            ))}
          </h1>
          <p className="title-2 mt-6 max-w-[680px] text-ink">{site.hero.sub}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <BuyButton location="hero" size="lg" className="w-full sm:w-auto" />
            <a href="#inside" className="body-4 text-deep underline-offset-4 hover:underline">
              Pehle andar dekho
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {proof.map((p) => (
              <li key={p} className="caption-1 flex items-center gap-1 text-mute">
                <Icon name="check" size={14} className="text-deep" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual: the signature chat moment with the book beside it */}
        <div className="md:col-span-5">
          <div className="rounded-3xl bg-sand p-4 md:p-6">
            <p className="caption-3 mb-4 text-mute">Kal shaam, aapki dukaan ka WhatsApp</p>
            <div className="flex flex-col gap-2">
              {site.hero.chat.map((m, i) => (
                <ChatBubble key={i} side={m.side as "in" | "out"} time={m.time} seen={"seen" in m ? Boolean(m.seen) : false}>
                  {m.text}
                </ChatBubble>
              ))}
            </div>
            <p className="body-5 mt-4 text-ink">{site.hero.chatCaption}</p>
          </div>
          {/* The mockup has ~10% transparent headroom, so the book tucks into the card's bottom padding without covering the seen bubble or caption. */}
          <div className="-mt-8 ml-auto w-40 md:-mt-10 md:w-56">
            <Image
              src={cover}
              alt="WhatsApp Se Clients ebook cover, shown as a book"
              priority
              sizes="(min-width: 768px) 224px, 160px"
              className="h-auto w-full drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
