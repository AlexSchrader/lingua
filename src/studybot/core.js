// StudyBot 1.0 — the pure half. No DOM, no React, no import.meta, so the rules
// that matter (what may be shown, how ids are made, the event queue) are
// unit-testable under plain node: tests/unit/studybot-core.test.mjs.
//
// Contract: docs/STUDYBOT.md. The hook that uses this lives in ./hook.js and is
// only ever loaded in a `--mode studybot` build (see ./flag.js).

export const STUDYBOT_VERSION = "1.1";
export const MAX_TEXT = 2000;

// Every text field is plain text, trimmed, whitespace collapsed, under 2000 chars.
export function plainText(s) {
  if (s == null) return "";
  const t = String(s).replace(/\s+/g, " ").trim();
  return t.length > MAX_TEXT ? t.slice(0, MAX_TEXT - 1) + "…" : t;
}

// An action id from a visible label: "Got it" -> "got-it". Non-Latin labels
// (a kana tile) slug to "", and the caller falls back to a positional id.
export function slug(label) {
  return plainText(label)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

// Ids must be unique on one screen. The first "continue" stays "continue", a
// second becomes "continue-2", so the common case reads naturally.
export function uniqueIds(ids) {
  const seen = new Map();
  return ids.map((id) => {
    const base = id || "action";
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  });
}

// The subject a card belongs to. Lingua studies Japanese for Doodle today; any
// other language reports its own code rather than pretending to be Japanese.
const SUBJECTS = { ja: "japanese" };
export function subjectFor(lang) {
  return SUBJECTS[lang] ?? (lang ? String(lang) : "unknown");
}

// The item's kind, from its content type. A card that drills something other
// than the item itself (a conjugation, a particle, a sentence) overrides it.
const KINDS = { kana: "kana", kanji: "kanji", glyph: "letter", vocab: "word" };
export function itemKind(type) {
  return KINDS[type] ?? (type ? String(type) : "word");
}

// The screen name for a route when no card or runner has published one.
export function screenForPath(pathname) {
  const p = String(pathname || "/").replace(/\/+$/, "") || "/";
  if (p === "/") return "home";
  if (p.startsWith("/lesson/")) return "lesson";
  if (p === "/review") return "review";
  if (p === "/haruki") return "tutor";
  return p.slice(1).split("/")[0] || "home";
}

// THE ANSWER-HIDING RULE, in one place. Whatever a card publishes, only these
// fields leave the app through state(). A card that put an `answer` (or any
// other field) on its item by mistake still cannot leak it.
export function publicItem(raw) {
  if (!raw || typeof raw !== "object" || !raw.itemId) return null;
  const out = {
    itemId: String(raw.itemId),
    subject: plainText(raw.subject) || "unknown",
    kind: plainText(raw.kind) || "word",
    prompt: plainText(raw.prompt),
  };
  if (raw.card) out.card = plainText(raw.card);
  // The instruction line printed above the prompt ("Type the meaning"), and a
  // message the card is showing right now ("Not quite — try once more").
  if (raw.ask) out.ask = plainText(raw.ask);
  if (raw.note) out.note = plainText(raw.note);
  if (Array.isArray(raw.choices) && raw.choices.length) {
    out.choices = raw.choices.map((c) => ({ id: String(c.id), text: plainText(c.text) }));
  }
  if (raw.input === "text") out.input = "text";
  const guide = cleanPath(raw.guide);
  if (guide) out.guide = guide;
  if (raw.audio === true) out.audio = true;
  // A teach card SHOWS the answer — that is what teaching is. Only on that
  // screen, and only what is printed on it.
  if (raw.shown && typeof raw.shown === "object") {
    const shown = {};
    for (const k of ["meaning", "reading", "example", "hint"]) {
      if (raw.shown[k]) shown[k] = plainText(raw.shown[k]);
    }
    if (Object.keys(shown).length) out.shown = shown;
  }
  return out;
}

// A finger path in 0..1 of a drawing pad: 2 to 64 [x, y] pairs, clamped, rounded.
// Used both for the guide a trace card shows and for the path act('trace', …) draws.
export function cleanPath(path) {
  if (!Array.isArray(path) || path.length < 2 || path.length > 64) return null;
  const out = [];
  for (const p of path) {
    if (!Array.isArray(p) || p.length !== 2) return null;
    const [x, y] = p.map(Number);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
    const c = (v) => Math.round(Math.min(1, Math.max(0, v)) * 1000) / 1000;
    out.push([c(x), c(y)]);
  }
  return out;
}

// Highest level wins: a card (2) sits above its runner (1), whichever effect ran
// last. React runs child effects before parent effects, so "last set wins" would
// let the runner hide the card.
export function pickSurface(surfaces) {
  let best = null;
  for (const s of surfaces) {
    if (!s) continue;
    if (!best || (s.level ?? 0) >= (best.level ?? 0)) best = s;
  }
  return best;
}

export function progressOf(surfaces) {
  for (const s of surfaces) {
    const p = s?.progress;
    if (p && Number.isFinite(p.done) && Number.isFinite(p.total)) return { done: p.done, total: p.total };
  }
  return null;
}

// Events: every event goes to on() handlers AND to a queue that take() drains,
// oldest first. The queue is capped so a window nobody polls can't grow forever.
export function createEvents({ now = () => Date.now(), cap = 500 } = {}) {
  const handlers = new Map(); // name -> Set
  let queue = [];
  return {
    on(name, fn) {
      if (typeof fn !== "function") return () => {};
      const key = String(name);
      if (!handlers.has(key)) handlers.set(key, new Set());
      handlers.get(key).add(fn);
      return () => handlers.get(key)?.delete(fn);
    },
    emit(name, data) {
      const ev = { name, data, at: now() };
      queue.push(ev);
      if (queue.length > cap) queue = queue.slice(queue.length - cap);
      for (const key of [name, "*"]) {
        for (const fn of handlers.get(key) ?? []) {
          try {
            fn(data, name);
          } catch {
            /* a bad handler must not break the app */
          }
        }
      }
      return ev;
    },
    take() {
      const out = queue;
      queue = [];
      return out;
    },
  };
}

// Where a finger lands: page pixels, rounded, in the 390x844 window.
// Edges are rounded, then the size taken between them, so a control that ends at
// the window's edge never reports past it.
export function roundRect(r) {
  const left = r.left ?? r.x;
  const top = r.top ?? r.y;
  const x = Math.round(left);
  const y = Math.round(top);
  return { x, y, w: Math.round(left + (r.width ?? r.w)) - x, h: Math.round(top + (r.height ?? r.h)) - y };
}
