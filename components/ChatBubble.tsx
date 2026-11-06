import type { ReactNode } from "react";

type Props = {
  side: "in" | "out";
  children: ReactNode;
  time?: string;
  seen?: boolean;
  dark?: boolean;
};

/** A WhatsApp style message bubble: the campaign's signature visual. Incoming left, outgoing right. */
export function ChatBubble({ side, children, time, seen, dark }: Props) {
  const isOut = side === "out";
  const surface = isOut ? "bg-bubble text-ink" : dark ? "bg-ink3 text-paper" : "bg-white text-ink";
  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div className={`relative max-w-[85%] rounded-2xl px-3 py-2 ${surface} ${isOut ? "rounded-br-md" : "rounded-bl-md"}`}>
        <p className="body-3 whitespace-pre-line">{children}</p>
        {(time || seen) && (
          <p className={`mt-1 flex items-center justify-end gap-1 caption-5 ${isOut ? "text-mute" : dark ? "text-paper/60" : "text-mute"}`}>
            {time && <span>{time}</span>}
            {seen && (
              <span className="text-tick" role="img" aria-label="seen">
                ✓✓
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
