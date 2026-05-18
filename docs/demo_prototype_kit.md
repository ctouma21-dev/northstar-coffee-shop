# Demo Prototype Kit — Northstar Coffee Onboarding Assistant

A small, self-contained demo you can stand up on your personal Claude account in about 15 minutes and walk your PM through. The content is generic (a fictional coffee company) so nothing here touches TSB or ATF material — this is purely a "what does this experience feel like" demonstration.

The point of the demo is to show your PM the *interaction pattern*, not the real solution. Once he sees it, the leap to "imagine this loaded with our actual onboarding material, running on Claude Gov" becomes obvious.

\---

## Setup (15 minutes)

1. Log into your personal Claude account at claude.ai (a free or Pro account both work for a demo).
2. In the left sidebar, click **Projects**, then **Create project**.
3. Name it: **Northstar Coffee — Onboarding Assistant**
4. Description (optional): "Demo of an AI onboarding assistant for new hires."
5. Click **Set custom instructions** and paste the system prompt below.
6. Click **Add content** → **Add text** and paste each of the four sample documents below as separate items. Use the document titles as the names.
7. You're done. Start a new chat inside the Project and try the demo questions at the bottom.

\---

## System prompt (paste into custom instructions)

```
You are the onboarding assistant for Northstar Coffee, a fictional regional coffee company. You help new hires learn company policies, procedures, and culture during their first 30 days.

How you behave:
- Answer only from the materials uploaded to this Project. Never invent policies or details.
- If a question isn't covered by the uploaded materials, say so clearly and suggest who to ask (their manager, HR, or their assigned onboarding buddy).
- Be warm and conversational, not formal. New hires are often nervous; you make them feel welcomed.
- Keep answers concise — usually 2-4 sentences unless the question genuinely needs more.
- When you reference a policy, briefly mention which document it came from so the employee can read more.
- For sensitive topics (harassment, payroll problems, medical leave), always direct the employee to HR rather than trying to handle it yourself.

What you can do:
- Answer policy and procedure questions.
- Walk new hires through their first-week checklist.
- Quiz them on key policies if they want to test their knowledge.
- Role-play customer-service scenarios for practice.

What you don't do:
- Discuss anything outside Northstar Coffee.
- Make up information when materials don't cover something.
- Provide legal, medical, or financial advice.
```

\---

## Sample content — paste each as a separate text item

### Document 1: Welcome to Northstar Coffee

Northstar Coffee was founded in 2014 with three cafes in the Pacific Northwest. We now operate twenty-three locations across four states, employing about three hundred people. Our mission is simple: serve excellent coffee, treat people well, and be a good neighbor in the communities where we operate.

Your first 30 days are designed to help you settle in without overwhelming you. Week one focuses on logistics — paperwork, your work schedule, meeting your team, and learning the basics of your role. Week two introduces you to our coffee program and customer service standards. Weeks three and four are about building confidence in your role, with your shift lead checking in regularly.

You'll be assigned an onboarding buddy on your first day. This is an experienced team member whose job is to answer your questions and help you find your footing. Lean on them. There are no stupid questions in your first month.

Your manager will schedule a 30-day check-in to discuss how you're doing, what's working, and what isn't. Come prepared with questions and honest feedback — we use these conversations to improve our onboarding for everyone.

\---

### Document 2: Time, Attendance, and Time Off

Shifts are scheduled two weeks in advance. You'll receive your schedule by email every other Friday. If you can't work a scheduled shift, contact your shift lead as early as possible — ideally with at least 24 hours' notice. We understand emergencies happen; we just need to know.

Clock in and out using the tablet at the back-of-house station. If you forget to clock in, tell your shift lead immediately so they can correct it. Repeatedly forgetting to clock in or out may affect your paycheck.

Breaks: shifts longer than six hours include a paid 15-minute break and an unpaid 30-minute meal break. Your shift lead will tell you when to take them based on store traffic.

Paid time off accrues at a rate of one hour for every thirty hours worked, available to use after your first 90 days. Request PTO at least two weeks in advance through the scheduling app. Same-week PTO requests are granted at the manager's discretion based on coverage.

Sick days do not require advance notice — just call or text your shift lead as soon as you know you can't work. We'd rather you stay home than come in sick and pass something to customers or coworkers. After three consecutive sick days, we may ask for a doctor's note.

\---

### Document 3: Customer Service Standards

Every customer interaction at Northstar Coffee follows three principles: greet warmly, serve attentively, close gracefully.

**Greet warmly.** Make eye contact and say hello within ten seconds of a customer reaching the counter. A genuine smile and "Hi, what can I get started for you?" beats a scripted greeting every time. If there's a line, acknowledge waiting customers with a nod or a quick "I'll be right with you."

**Serve attentively.** Repeat the order back before ringing it up. If a customer seems unsure, offer suggestions based on what they usually order or what's popular. Never rush a customer who's deciding. If you don't know the answer to a question about a drink or a product, say "let me check on that" and ask a coworker — never guess.

**Close gracefully.** Hand off the drink with the customer's name, make brief eye contact, and say something genuine — "have a great morning" or "thanks for coming in." Avoid empty filler like "have a nice day" said while looking elsewhere.

**Difficult customers.** If a customer is unhappy with their drink, remake it without question. If a customer is rude or unreasonable, stay calm, don't argue, and quietly get your shift lead. You are never expected to absorb verbal abuse from anyone. The shift lead's job is to step in and let you step back.

\---

### Document 4: Conduct, Conflicts, and Reporting Concerns

Northstar Coffee expects every team member to treat coworkers and customers with respect, regardless of role, background, or personal differences. This is not a slogan — it's a condition of working here.

**Conflicts with coworkers.** Small conflicts usually resolve themselves with a direct, calm conversation. If you have a minor issue with a coworker, try addressing it directly before escalating. If that doesn't work or doesn't feel safe, talk to your shift lead or manager.

**Harassment, discrimination, or anything that makes you feel unsafe.** Go directly to HR — do not try to handle it yourself, and do not feel obligated to confront the person. HR can be reached at hr@northstarcoffee.example or by phone at the number posted in the back-of-house break room. Reports are treated confidentially. Retaliation against anyone who reports a concern in good faith is grounds for termination.

**Substance use.** Reporting to work under the influence of alcohol or recreational drugs is grounds for immediate termination. If you're prescribed medication that might affect your ability to work safely (drowsiness, dizziness, etc.), let your manager know — we'll work with you.

**Theft and dishonesty.** Taking food, drinks, or supplies without authorization, falsifying time records, or being dishonest in any work-related matter is grounds for termination. Employee discounts and shift drinks are clearly defined in your benefits packet — when in doubt, ask before taking.

**Confidentiality.** Don't discuss specific customer interactions, coworker performance, or internal company matters on social media or with people outside the company. If a journalist or member of the public asks about Northstar Coffee operations, refer them to corporate communications.

\---

## Demo questions to try (in this order)

These are sequenced to build from simple to impressive — exactly what you'd want to walk a PM through.

1. **Start simple:** *"Hi! It's my first day. Where do I start?"*
— Shows the warm, conversational tone.
2. **Specific policy lookup:** *"How does PTO work? When can I start using it?"*
— Shows accurate retrieval from the documents.
3. **Edge case the documents don't cover:** *"Can I bring my dog to work?"*
— Shows that it declines instead of inventing an answer (it'll suggest asking the manager).
4. **Sensitive topic:** *"A customer was really rude to me yesterday and I'm still upset about it. What should I do?"*
— Shows it handles human moments with care and points to the right resources.
5. **Practice/role-play:** *"Can we role-play a difficult customer situation? Pretend you're a customer whose order is wrong and you're frustrated."*
— This is the moment that usually clicks for people. Static training material can't do this.
6. **Self-quiz:** *"Quiz me on the time and attendance policy. Three questions, then tell me how I did."*
— Shows the assessment angle.

\---

## What to say while you're demonstrating

Keep the narration light. A few lines that work well:

* Before starting: *"This took me about fifteen minutes to set up. The hard part wouldn't be the technology — it would be deciding what content to load."*
* After question 3 (the dog question): *"Notice it didn't make something up. That's the behavior we want for anything we'd build for real work."*
* After question 5 (role-play): *"This is the part that's genuinely hard to replicate any other way. You can't staff enough humans to give every new hire unlimited practice time."*
* Closing: *"Imagine this with our actual onboarding material instead of fake coffee company content, running in the Claude Gov environment so it's appropriate for our contract work. That's the proposal."*

\---

## A few things to be careful about

* **Don't load any real TSB or ATF material into this demo.** This is your personal Claude account on the commercial product. Keep it generic.
* **Don't show this from a TSB-issued computer if your IT policy restricts personal AI use on work devices.** Use a personal laptop, or just bring it up in a meeting where you screen-share from your phone or personal device.
* **Be ready for the question "why can't we just use this?"** The answer is the one in the primer: commercial Claude isn't the right environment for federal contractor work. The demo shows the experience; Claude Gov delivers it in the right environment.

