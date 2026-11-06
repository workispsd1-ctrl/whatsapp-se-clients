# WhatsApp Se Clients — landing page (Next.js, Vercel)

One offer, one audience, one action: a ₹99 PDF for local business owners, sold through a Razorpay Payment Link. Built to the `landing-page-design` skill (floating nav, named text styles, flat backgrounds, weighted motion, tagline reveal, honest proof, FAQ, risk reversal, identical final CTA).

## Run locally

```bash
npm install
cp .env.example .env.local   # fill the three values
npm run dev                  # http://localhost:3000
npm run build                # must pass before deploying
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (or `vercel` CLI from inside it).
2. In Vercel → New Project → import the repo. Framework is auto detected (Next.js). No build settings to change.
3. Project → Settings → Environment Variables, add:
   - `NEXT_PUBLIC_RAZORPAY_LINK` — your Razorpay Payment Link (Dashboard → Payment Links → Create → copy the `https://rzp.io/...` link). In the link's settings, set **redirect after payment** to `https://<your-domain>/thank-you` so the Purchase pixel event fires.
   - `NEXT_PUBLIC_META_PIXEL_ID` — from Meta Events Manager. The page fires PageView on load, InitiateCheckout on every buy click, Purchase (₹99) on `/thank-you`.
   - `NEXT_PUBLIC_SITE_URL` — e.g. `https://whatsappseclients.in` (used for canonical, OG and sitemap).
4. Deploy. Then add your domain under Settings → Domains.
5. Test a ₹1 payment end to end before launching ads (set the link amount to 1 temporarily).

Without `NEXT_PUBLIC_RAZORPAY_LINK`, every buy button renders disabled with the note "Payment link not configured" — the page never ships a dead link.

## Edit the copy

Everything the visitor reads is in **`content/site.json`**: headline lines, sub, proof line, problem/benefit/how/inside/honesty blocks, offer, FAQ, footer, thank-you page. Components only lay it out.

- `businessName`, `supportEmail`, `supportWhatsApp` — replace the `{{...}}` placeholders (they show in the footer, legal pages and thank-you page).
- `refundDays` — `7` shows the refund line, the hero proof item, the FAQ item and the refund policy text; set to `0` to remove all of them at once.
- `testimonials` — ships empty on purpose (no invented reviews). When you have real ones, add objects like `{"quote": "...", "name": "Rekha Sharma", "business": "Glow Salon", "city": "Jaipur"}` and the proof section appears automatically.
- Copy rules the page follows: sentence case, no hyphens inside sentences, specific numbers, no income claims, no fake scarcity. Keep them when editing.

## Structure

```
app/layout.tsx        fonts (Poppins, self hosted, Latin + Devanagari), metadata, skip link, Meta Pixel
app/page.tsx          section order + FAQ/Product JSON-LD
app/thank-you/        Razorpay redirect target, fires Purchase
app/refund-policy, app/privacy, app/terms   short legal pages with placeholders
app/not-found.tsx     branded 404
components/           one file per section + Nav, BuyButton, Reveal, TaglineReveal, StickyCta, ChatBubble, Icon (Phosphor paths)
content/site.json     all copy and config
public/               cover_mockup.png, cover_square.png, og.png (1200×630), favicons
```

## Design notes

- Typeface: Poppins only (OFL). No Inter, no italics, nothing heavier than Bold.
- Palette: paper `#F7F3EA`, sand `#EFE9DC`, ink `#181818`, green `#25D366` / `#128C5E`, haldi `#FFC43D`, bubble `#DCF8C6`. Backgrounds are flat; the only gradient is on the hero heading text.
- Motion: `cubic-bezier(0.22, 1, 0.36, 1)`; reveals and the tagline use IntersectionObserver; reduced motion is respected.
- Icons: Phosphor (MIT), inlined in `components/Icon.tsx`.
- Message match: the hero headline family is the same as the Meta ad creatives ("Aapke customers already WhatsApp pe hain…", "Price poocha. Seen. Gayab.").

## Compliance

No income or result claims, no guarantees, no invented testimonials, no countdown timers or stock counts, no WhatsApp/Meta logos. The footer carries "Not affiliated with WhatsApp or Meta." Keep it that way; it is what keeps the ad account safe.
