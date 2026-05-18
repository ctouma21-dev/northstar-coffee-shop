"use client";

import { useState } from "react";

type Props = {
  onSend: (text: string) => void;
  disabled: boolean;
};

export default function ChatInput({ onSend, disabled }: Props) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-end">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask about policies, your schedule, or how things work…"
        rows={1}
        className="flex-1 resize-none rounded-xl border border-latte-dark bg-white px-4 py-3 text-sm text-espresso placeholder:text-bark focus:outline-none focus:ring-2 focus:ring-caramel disabled:opacity-50 transition"
        style={{ minHeight: "48px", maxHeight: "160px" }}
        onInput={(e) => {
          const el = e.currentTarget;
          el.style.height = "auto";
          el.style.height = Math.min(el.scrollHeight, 160) + "px";
        }}
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="shrink-0 w-11 h-11 rounded-xl bg-caramel hover:bg-caramel-dark disabled:opacity-40 text-foam flex items-center justify-center transition"
        aria-label="Send message"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  );
}
