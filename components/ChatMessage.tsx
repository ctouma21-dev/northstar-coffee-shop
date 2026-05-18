import type { UIMessage } from "ai";

type Props = { message: UIMessage };

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  const text = message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");

  if (!text) return null;

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-caramel flex items-center justify-center shrink-0 mr-2 mt-1">
          <span className="text-foam text-xs font-bold" style={{ fontFamily: "Georgia, serif" }}>N</span>
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-espresso text-foam rounded-br-sm"
            : "bg-latte text-espresso rounded-bl-sm"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
