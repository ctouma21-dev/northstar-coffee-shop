# Northstar Coffee — Onboarding Assistant

An AI-powered onboarding chatbot for new hires at Northstar Coffee. Powered by Claude (via the Anthropic API), it answers questions about company policies, schedules, customer service standards, and culture — all grounded in the actual onboarding documents.

## Live Site

> URL added after Vercel deployment

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| AI | Vercel AI SDK + Anthropic Claude |
| Styling | Tailwind CSS v4 |
| Deployment | Vercel |

## Setup

### 1. Get an Anthropic API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign in or create a free account
3. Navigate to **API Keys** → **Create Key**
4. Copy the key

### 2. Configure the environment

Create a `.env.local` file in the project root:

```
ANTHROPIC_API_KEY=your_api_key_here
```

### 3. Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the chatbot.

## Project Structure

```
app/
  page.tsx            # Chat interface
  layout.tsx          # Root layout with header
  api/chat/route.ts   # Claude streaming API route
  globals.css         # Tailwind v4 theme + base styles
components/
  Header.tsx          # Sticky branded header
  ChatMessage.tsx     # Message bubble (user / assistant)
  ChatInput.tsx       # Textarea + send button
lib/
  systemPrompt.ts     # System prompt + all 4 onboarding documents
docs/                 # Original source documents (not part of the web app)
```

## How It Works

The assistant is instructed to answer only from the four embedded onboarding documents. It will not invent policies or speculate on anything outside those documents — if it doesn't know, it says so and points the employee to the right person (manager, HR, or their onboarding buddy).

## Deployment

```bash
npx vercel --prod
```

Add `ANTHROPIC_API_KEY` in the Vercel dashboard under **Settings → Environment Variables** before deploying.
