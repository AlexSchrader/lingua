// Vercel serverless function: the TEXT tutor for Doodle's study window.
//
// Why: the voice tutor (/api/convai-session) runs on an ElevenLabs agent, and the
// account behind it is gone. Doodle (the user's desktop pet) studies in a
// StudyBot build of Lingua served on the fake origin https://lingua.invalid, and
// talks to the tutor as text only. This endpoint answers one chat turn with
// Claude in the companion's persona. It makes no ElevenLabs call.
//
// POST /api/tutor-text  { lang: "ja", messages: [{ from: "you"|"tutor", text }] }
//   -> 200 { reply }
//
// OFF unless the deployment sets TUTOR_TEXT_ON=1 — it spends money, so it ships
// dark, and only the user turns it on (Vercel dashboard, Preview environment).
//
// Env:
//   TUTOR_TEXT_ON=1          switch (required)
//   TUTOR_TEXT_TOKEN         shared secret (required, 24+ chars). Doodle's local
//                            build sends it as `x-tutor-token`. THIS is the lock:
//                            the Origin check below stops other web pages, but any
//                            script can fake an Origin header, and this repo is
//                            public. Without the token nobody can spend money here.
//   ANTHROPIC_API_KEY        Claude API key (required; server-side only)
//   TUTOR_MODEL              default claude-opus-5-5
//   TUTOR_DAILY_CAP          default 10 messages a day, PER INSTANCE (below)
//   TUTOR_ALLOWED_ORIGINS    comma-separated; default https://lingua.invalid
//
// THE DAILY CAP IS NOT A GLOBAL LIMIT. Lingua has no server-side store a function
// can count in (no KV; Supabase is the learners' data and gets no new table for
// this), so the count lives in each serverless instance's memory. Parallel requests
// start more instances, each with its own count, and every preview deployment has
// its own. The real 10-a-day cap is Doodle's (his window counts every message);
// this one only slows a runaway loop from the one client that holds the token.
// A true shared cap needs a shared store (e.g. Vercel KV) — not added here.
//
// Per call: at most 20 turns of history, 2000 characters a line, and up to 4000
// output tokens (thinking included; the reply itself is asked to be 1-3 sentences).
import { getCompanion } from "../server/companions.js";

export const DEFAULT_ORIGINS = ["https://lingua.invalid"];
export const MAX_TURNS = 20;
export const MAX_CHARS = 2000;
export const MIN_TOKEN_LENGTH = 24;

const TEXT_MODE = `

# THIS CHAT IS TEXT, NOT VOICE
This conversation is typed, not spoken: there is no voice and no call. Reply in one to three short sentences of plain text — no lists, no markdown. Your friend is a beginner: keep the Japanese simple, add the English meaning the first time you use a new word, and write new words in kana with their romaji.`;

const counter = { day: "", count: 0 };

export function allowedOrigins(env = process.env) {
  const list = String(env.TUTOR_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return list.length ? list : DEFAULT_ORIGINS;
}

// One chat turn's input, checked. Returns { lang, messages } or { error }.
export function parseBody(body) {
  let b = body;
  if (typeof b === "string") {
    try {
      b = JSON.parse(b);
    } catch {
      return { error: "Body is not JSON." };
    }
  }
  if (!b || typeof b !== "object") return { error: "Missing body." };
  const lang = typeof b.lang === "string" ? b.lang : "ja";
  if (!Array.isArray(b.messages) || b.messages.length === 0) return { error: "No messages." };
  if (b.messages.length > MAX_TURNS) return { error: `At most ${MAX_TURNS} messages.` };
  const messages = [];
  for (const m of b.messages) {
    const from = m?.from;
    const text = typeof m?.text === "string" ? m.text.trim() : "";
    if (from !== "you" && from !== "tutor") return { error: "Each message needs from: you|tutor." };
    if (!text) return { error: "Empty message." };
    if (text.length > MAX_CHARS) return { error: `A message is over ${MAX_CHARS} characters.` };
    messages.push({ from, text });
  }
  if (messages[messages.length - 1].from !== "you") return { error: "The last message must be yours." };
  return { lang, messages };
}

// The Messages API wants the conversation to open with the user; a history that
// starts with a tutor line (the tutor greeted first) drops that line.
export function toClaudeMessages(messages) {
  const out = messages.map((m) => ({ role: m.from === "you" ? "user" : "assistant", content: m.text }));
  while (out.length && out[0].role !== "user") out.shift();
  return out;
}

export function takeFromDailyCap(cap, now = new Date()) {
  const day = now.toISOString().slice(0, 10);
  if (counter.day !== day) {
    counter.day = day;
    counter.count = 0;
  }
  if (counter.count >= cap) return false;
  counter.count += 1;
  return true;
}

export function resetDailyCap() {
  counter.day = "";
  counter.count = 0;
}

// Constant-time compare, so the token can't be found by timing the answers.
export function tokenMatches(given, expected) {
  if (typeof given !== "string" || typeof expected !== "string" || expected.length < MIN_TOKEN_LENGTH) return false;
  let diff = given.length ^ expected.length;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ (i < given.length ? given.charCodeAt(i) : 0);
  return diff === 0;
}

function setCors(req, res, origins) {
  const origin = req.headers?.origin;
  res.setHeader("Vary", "Origin");
  if (origin && origins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-tutor-token");
    res.setHeader("Access-Control-Max-Age", "600");
  }
  return !!origin && origins.includes(origin);
}

export default async function handler(req, res, { fetchImpl = fetch, env = process.env } = {}) {
  const origins = allowedOrigins(env);
  const originOk = setCors(req, res, origins);
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.status(originOk ? 204 : 403).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "POST only." });
    return;
  }
  // Only Doodle's window may call it. (CORS alone would not stop a script; this
  // at least refuses every other browser page and any request without the header.)
  if (!originOk) {
    res.status(403).json({ error: "Origin not allowed." });
    return;
  }
  if (env.TUTOR_TEXT_ON !== "1") {
    res.status(503).json({ error: "The text tutor is switched off on this deployment." });
    return;
  }
  if (!env.TUTOR_TEXT_TOKEN || env.TUTOR_TEXT_TOKEN.length < MIN_TOKEN_LENGTH) {
    res.status(503).json({ error: `TUTOR_TEXT_TOKEN (${MIN_TOKEN_LENGTH}+ characters) is not set on this deployment.` });
    return;
  }
  if (!tokenMatches(req.headers?.["x-tutor-token"], env.TUTOR_TEXT_TOKEN)) {
    res.status(401).json({ error: "Missing or wrong tutor token." });
    return;
  }
  const apiKey = env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "ANTHROPIC_API_KEY is not set on this deployment." });
    return;
  }

  const parsed = parseBody(req.body);
  if (parsed.error) {
    res.status(400).json({ error: parsed.error });
    return;
  }
  const companion = getCompanion(parsed.lang);
  if (!companion?.persona) {
    res.status(404).json({ error: `No tutor for "${parsed.lang}".` });
    return;
  }

  const cap = Math.max(0, Number(env.TUTOR_DAILY_CAP ?? 10) || 0);
  if (!takeFromDailyCap(cap)) {
    res.status(429).json({ error: "Daily tutor limit reached." });
    return;
  }

  try {
    const r = await fetchImpl("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2026-10-21",
        // Server-side refusal fallback, routed by category (no model list to keep).
        "anthropic-beta": "server-side-fallback-2026-07-01",
      },
      body: JSON.stringify({
        model: env.TUTOR_MODEL || "claude-opus-5-5",
        // Thinking is always on for this model and counts toward max_tokens, so
        // this is room for it plus a one-to-three sentence reply.
        max_tokens: 4000,
        output_config: { effort: "low" },
        fallbacks: "default",
        system: companion.persona + TEXT_MODE,
        messages: toClaudeMessages(parsed.messages),
      }),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      res.status(502).json({ error: `Claude API ${r.status}`, detail: String(data?.error?.message ?? "").slice(0, 200) });
      return;
    }
    if (data.stop_reason === "refusal") {
      res.status(502).json({ error: "The tutor declined to answer that." });
      return;
    }
    const reply = (data.content ?? [])
      .filter((b) => b?.type === "text")
      .map((b) => b.text)
      .join("")
      .trim()
      .slice(0, MAX_CHARS);
    if (!reply) {
      res.status(502).json({ error: "The tutor gave an empty reply." });
      return;
    }
    res.status(200).json({ reply });
  } catch (err) {
    console.error("tutor-text:", err);
    res.status(500).json({ error: "Failed to reach the Claude API." });
  }
}
