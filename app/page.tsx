"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";

const WELCOME_MESSAGE = {
  id: "welcome",
  role: "assistant" as const,
  parts: [
    {
      type: "text" as const,
      text: "Hi! I'm your Northstar Coffee onboarding assistant. I'm here to help you navigate your first 30 days — ask me anything about company policies, your schedule, customer service, or how things work around here.\n\nWhat's on your mind?",
    },
  ],
};

export default function ChatPage() {
  const { messages, sendMessage, status } = useChat({
    messages: [WELCOME_MESSAGE],
  });

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const isLoading = status === "submitted" || status === "streaming";

  function handleSend(text: string) {
    sendMessage({ text });
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((m) => (
            <ChatMessage key={m.id} message={m} />
          ))}
          {status === "submitted" && (
            <div className="flex justify-start">
              <div className="w-7 h-7 rounded-full bg-caramel flex items-center justify-center shrink-0 mr-2 mt-1">
                <span className="text-foam text-xs font-bold" style={{ fontFamily: "Georgia, serif" }}>N</span>
              </div>
              <div className="bg-latte rounded-2xl rounded-bl-sm px-4 py-3">
                <span className="inline-flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-bark animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-bark animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-bark animate-bounce" style={{ animationDelay: "300ms" }} />
                </span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-latte-dark bg-foam px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <ChatInput onSend={handleSend} disabled={isLoading} />
          <p className="text-center text-xs text-bark mt-2">
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}
