import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages, UIMessage } from "ai";
import { SYSTEM_PROMPT } from "@/lib/systemPrompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
