// window.StudyBot end to end — runs ONLY under SMOKE_MODE=studybot, which builds
// `npm run build:studybot` and serves dist-studybot/ (see playwright.config.js).
// Drives a real Japanese lesson the way Doodle's window does: only through
// StudyBot, in a portrait 390x844 window. Contract: docs/STUDYBOT.md.
import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

// Doodle's window is an ordinary Electron page, not a WebDriver session, so the
// app must take its real paths there (Lingua skips animations and arms no mic
// under WebDriver). Present as a plain browser so this spec walks the same path:
// the clip plays, the microphone is refused, the speak card falls back.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(Navigator.prototype, "webdriver", { get: () => false }));
});

const ready = async (page) => {
  await page.goto("/");
  await page.waitForFunction(() => !!window.StudyBot);
};
const sb = (page, fn, arg) => page.evaluate(fn, arg);
const state = (page) => sb(page, () => window.StudyBot.state());
const actions = (page) => sb(page, () => window.StudyBot.actions());
const act = (page, id, value) => sb(page, ([i, v]) => window.StudyBot.act(i, v), [id, value]);
const take = (page) => sb(page, () => window.StudyBot.take());

// act() refuses while a card's entrance guard is up (a finger would miss), and a
// control that is disabled is not an action at all (Continue waits for the word's
// clip to play). Retry for a while, like his window does after a "stuck".
async function tap(page, id, value) {
  let last;
  for (let i = 0; i < 80; i++) {
    last = await act(page, id, value);
    if (last.ok) return last;
    await page.waitForTimeout(100);
  }
  throw new Error(`act("${id}") failed (${last?.error}) on ${JSON.stringify(await state(page))}: ${JSON.stringify((await actions(page)).map((a) => a.id))}`);
}

// First run: Lingua's own language pick, by tapping, as a new learner does.
async function readyJa(page) {
  await ready(page);
  expect((await state(page)).screen).toBe("onboarding");
  await tap(page, "lang-ja");
  await tap(page, "continue");
  await expect.poll(async () => (await state(page)).screen).toBe("onboarding:profile");
  await tap(page, "start-learning");
  await expect.poll(async () => (await state(page)).screen).toBe("home");
}

test("hello: Lingua, StudyBot 1.3, a test account (signed out, no Supabase)", async ({ page }) => {
  await ready(page);
  const h = await sb(page, () => window.StudyBot.hello());
  expect(h).toMatchObject({ app: "lingua", version: "1.3", testAccount: true });
  // Every language Lingua lists; complete = playable through B2, fully voiced.
  const complete = h.languages.filter((l) => l.complete).map((l) => l.id).sort();
  expect(complete).toEqual(["de", "es", "fr", "hi", "id", "ja", "no", "pt", "ru"]);
  expect(h.subjects.slice().sort()).toEqual(h.languages.filter((l) => l.complete).map((l) => l.subject).sort());
  expect(h.languages.find((l) => l.id === "ja")).toEqual({ id: "ja", subject: "japanese", name: "Japanese", complete: true });
  expect(h.languages.find((l) => l.id === "it")?.complete).toBe(false);
  for (const l of h.languages) expect(l.subject, l.id).toMatch(/^[a-z]+$/);
  // The build's studybot.json says the same, for the copy script.
  const json = await page.evaluate(() => fetch("/studybot.json").then((r) => r.json()));
  expect(json.studybot).toBe("1.3");
  expect(json.languages).toEqual(h.languages);
  expect(Math.floor(Number(h.version))).toBe(1);
  expect(await sb(page, () => window.StudyBot.version)).toBe("1.3");
  // No account UI anywhere: the app opens on the first-run language pick.
  expect((await state(page)).screen).toBe("onboarding");
  // The hook cannot be replaced by page code.
  expect(await sb(page, () => { try { window.StudyBot = null; } catch {} return !!window.StudyBot; })).toBe(true);
});

test("actions: page-pixel rects in the 390x844 window, each landing on its own control", async ({ page }) => {
  await readyJa(page);
  const list = await actions(page);
  expect(list.length).toBeGreaterThan(3);
  const ids = list.map((a) => a.id);
  expect(new Set(ids).size).toBe(ids.length);
  const hits = await sb(page, (acts) =>
    acts.map((a) => {
      const el = document.elementFromPoint(a.rect.x + a.rect.w / 2, a.rect.y + a.rect.h / 2);
      const ctl = el?.closest('button, input, textarea, a[href], [role="button"], [role="tab"], canvas');
      const hitLabel = ctl ? ctl.dataset.botLabel || ctl.getAttribute("aria-label") || ctl.innerText || ctl.placeholder || "" : null;
      return { id: a.id, label: a.label, hitLabel: hitLabel == null ? null : hitLabel.replace(/\s+/g, " ").trim() };
    }),
    list.filter((a) => a.kind !== "scroll" && !a.offscreen && a.rect.y + a.rect.h <= 844)
  );
  // The centre of each rect lands on THAT control, not just on some control.
  for (const h of hits) expect(h.hitLabel, `action ${h.id}`).toBe(h.label);
  for (const a of list) {
    expect(a.rect.x).toBeGreaterThanOrEqual(0);
    expect(a.rect.x + a.rect.w).toBeLessThanOrEqual(390);
  }
  expect(list.find((a) => a.label === "Today")?.kind).toBe("tab");
});

test("scrolling: scroll-down/up are listed when the page can scroll, and move it about a screen", async ({ page }) => {
  await ready(page);
  // The onboarding language list is longer than the window.
  const before = await actions(page);
  expect(before.find((a) => a.id === "scroll-down")?.kind).toBe("scroll");
  expect(before.some((a) => a.id === "scroll-up")).toBe(false);
  const off = before.filter((a) => a.offscreen);
  expect(off.length).toBeGreaterThan(0);
  for (const a of off) expect(a.rect.y + a.rect.h / 2 > 844 || a.rect.y + a.rect.h / 2 < 0).toBe(true);
  const target = off[0];
  expect((await act(page, "scroll-down")).ok).toBe(true);
  const after = await actions(page);
  expect(after.some((a) => a.id === "scroll-up")).toBe(true);
  const moved = after.find((a) => a.id === target.id);
  expect(moved.rect.y).toBeLessThan(target.rect.y - 200);
  expect((await act(page, "scroll-up")).ok).toBe(true);
  // Leaving the Stats page, the way Doodle got stuck: the Today tab brings home back.
  await tap(page, "lang-ja");
  await tap(page, "continue");
  await tap(page, "start-learning");
  await expect.poll(async () => (await state(page)).screen).toBe("home");
  const home = await actions(page);
  expect(home.find((a) => a.id === "start-lesson")?.main).toBe(true);
  expect(home.filter((a) => a.main).length).toBe(1);
});

// The day after a lesson: words are due, so Today's big button says "Clear reviews". It keeps a
// stable id and the main flag, so Doodle always has a way on (reported to the user 24 Nov: "no way
// on from this screen", which stalled his Japanese for two days).
test("home with reviews due: the main button is start-review, marked main, and leads into a review", async ({ page }) => {
  const due = { due: new Date(Date.now() - 60_000).toISOString(), stability: 2, difficulty: 5, elapsed_days: 1, scheduled_days: 1, reps: 1, lapses: 0, learning_steps: 0, state: 2, last_review: new Date(Date.now() - 86_400_000).toISOString() };
  const fixture = {
    state: {
      items: { "ja-u1l1-a": { rung: 1, srs: due }, "ja-u1l1-i": { rung: 1, srs: due } },
      profile: { onboarded: true, displayName: "Doodle", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja", languagesChosen: true },
      settings: {},
      ui: {},
    },
    version: 1,
  };
  await page.addInitScript((json) => { if (!sessionStorage.getItem("seeded")) { localStorage.setItem("lingua-v1", json); sessionStorage.setItem("seeded", "1"); } }, JSON.stringify(fixture));
  await page.goto("/");
  await page.waitForFunction(() => !!window.StudyBot);
  await expect.poll(async () => (await state(page)).screen).toBe("home");
  const home = await actions(page);
  const mains = home.filter((a) => a.main);
  expect(mains.map((a) => a.id)).toEqual(["start-review"]);
  expect(mains[0].label).toMatch(/review/i);
  await tap(page, "start-review");
  await expect.poll(async () => (await state(page)).screen).toMatch(/question|review/);
});

test("any complete language: pick it at first run, items carry its subject, add and switch to another", async ({ page }) => {
  test.setTimeout(90_000);
  await ready(page);
  const h = await sb(page, () => window.StudyBot.hello());
  const ids = (await actions(page)).map((a) => a.id);
  for (const l of h.languages.filter((x) => x.complete)) expect(ids, `lang-${l.id} on the first-run pick`).toContain(`lang-${l.id}`);
  expect((await state(page)).language).toBeNull();
  // Spanish sits low in the list: act() scrolls it into view, as a finger would after scrolling.
  await tap(page, "lang-es");
  await tap(page, "continue");
  await tap(page, "start-learning");
  await expect.poll(async () => (await state(page)).screen).toBe("home");
  expect((await state(page)).language).toBe("spanish");
  await tap(page, "start-lesson");
  await tap(page, "begin");
  await expect.poll(async () => (await state(page)).screen).toBe("teach");
  const teach = await state(page);
  expect(teach.item.subject).toBe("spanish");
  expect(teach.item.itemId).toMatch(/^es-u\d+l\d+-/);
  // Back out, add Japanese on the Ladder, and switch between the two.
  await tap(page, "close-lesson");
  await expect.poll(async () => (await state(page)).screen).toBe("home");
  await tap(page, "ladder");
  await tap(page, "start-lang-ja");
  await expect.poll(async () => (await state(page)).language).toBe("japanese");
  await tap(page, "switch-lang-es");
  await expect.poll(async () => (await state(page)).language).toBe("spanish");
  await tap(page, "switch-lang-ja");
  await expect.poll(async () => (await state(page)).language).toBe("japanese");
});

test("a whole lesson through StudyBot: teach, questions, feedback with the answer, done", async ({ page }) => {
  test.setTimeout(240_000);
  await readyJa(page);
  await take(page);
  const start = (await actions(page)).find((a) => /start lesson|keep learning/i.test(a.label));
  expect(start, "home has a Start lesson action").toBeTruthy();
  await tap(page, start.id);
  await expect.poll(async () => (await state(page)).screen).toBe("lesson");
  await tap(page, "begin");

  const feedbacks = [];
  const allEvents = [];
  // What the app has taught so far, and nothing else: itemId -> { prompt, answer }.
  // Fed only by `teach` and `feedback` events — the way Doodle learns.
  const known = new Map();
  const learn = (evs) => {
    for (const e of evs) {
      if (e.name === "teach") known.set(e.data.itemId, { prompt: e.data.prompt, answer: e.data.answer });
      if (e.name === "feedback" && e.data.answer) known.set(e.data.itemId, { ...known.get(e.data.itemId), answer: e.data.answer });
    }
  };
  let teach = 0;
  let questions = 0;
  for (let step = 0; step < 400; step++) {
    const pending = await take(page);
    allEvents.push(...pending);
    learn(pending);
    const s = await state(page);
    if (process.env.SB_DEBUG) console.log(step, s.screen, s.item?.card, s.item?.itemId, JSON.stringify(s.progress), s.item?.note || "", pending.filter((e) => e.name === "feedback").map((e) => `${e.data.itemId}:${e.data.right}:${e.data.answer}`).join(" "));
    if (s.screen === "done") break;
    const acts = await actions(page);
    const has = (id) => acts.some((a) => a.id === id);
    if (s.screen === "teach") {
      teach++;
      expect(s.item.itemId).toMatch(/^ja-u\d+l\d+-/);
      expect(s.item.subject).toBe("japanese");
      expect(s.item.shown).toBeTruthy();
      await tap(page, "got-it");
    } else if (s.screen === "question") {
      questions++;
      expect(s.item, JSON.stringify(s)).toBeTruthy();
      expect(s.progress.total).toBeGreaterThan(0);
      const before = JSON.stringify({ s, acts });
      // THE RULE: nothing on a question screen says which answer is right.
      expect(before).not.toMatch(/"(correct|answer|meaning|reading)":/);
      const k = known.get(s.item.itemId);
      if (s.item.audio && has("show")) {
        // Can't hear it: "Show it", then the choices state() reports must be the ones on screen
        // (the kana list swaps for the rōmaji one; reported to the user 23 Nov as a content bug).
        await tap(page, "show");
        const after = await state(page);
        const onScreen = await page.evaluate(() => [...document.querySelectorAll('[data-testid="option"]')].map((b) => b.innerText.trim()));
        if (after.item?.choices) expect(after.item.choices.map((c) => c.text)).toEqual(onScreen);
        continue;
      }
      if (s.item.choices) {
        expect(s.item.choices.map((c) => c.id)).toEqual(s.item.choices.map((_, i) => `c${i}`));
        const pick = s.item.choices.find((c) => k && (c.text === k.answer || c.text === k.prompt)) ?? s.item.choices[0];
        await tap(page, pick.id);
      } else if (s.item.input === "text") {
        const guess = k?.answer ?? "zzz";
        await tap(page, "answer", guess);
        await tap(page, "submit");
        if ((await state(page)).screen === "question") {
          await tap(page, "answer", guess);
          await tap(page, "submit");
        }
      } else if (s.item.card?.startsWith("trace")) {
        // One stroke when the pad takes one, then wait for the card to move on
        // (next stroke, or done) before looking again.
        if (has("trace")) {
          // Guided: trace over the guide the card is showing. Read it fresh: `s` was read before
          // the actions, and the card can move from snapping (no guide) to waiting in between (it
          // did on GitHub's slower runner).
          let guide = s.item.guide;
          for (let t = 0; t < 40 && !guide?.length; t++) {
            await page.waitForTimeout(50);
            guide = (await state(page)).item?.guide;
          }
          expect(guide?.length).toBeGreaterThan(1);
          await act(page, "trace", guide);
          await expect.poll(async () => JSON.stringify(await state(page)) !== JSON.stringify(s), { timeout: 5000 }).toBe(true);
        } else {
          await page.waitForTimeout(150);
        }
      } else if (s.item.card === "speak") {
        // The clip plays, the microphone is refused, the card falls back to an
        // ungraded Continue.
        await tap(page, "continue");
      } else {
        throw new Error(`no way through ${JSON.stringify(s)} ${JSON.stringify(acts.map((a) => a.id))}`);
      }
      const evs = await take(page);
      allEvents.push(...evs);
      learn(evs);
      // Only this card's feedback: a card can report after its last tap (a traced
      // character finishes on a timer), so events are matched by itemId.
      for (const e of evs.filter((e) => e.name === "feedback" && e.data.itemId === s.item.itemId)) {
        feedbacks.push(e.data);
        // The typed answer was never on screen before the learner answered.
        if (s.item.input === "text" && e.data.answer.length >= 3) expect(before.includes(e.data.answer)).toBe(false);
        if (s.item.choices) expect(s.item.choices.map((c) => c.text)).toContain(e.data.answer);
      }
    } else if (s.screen === "feedback") {
      // The way on is marked main on every card (once enabled: Continue waits for the word's clip).
      await expect.poll(async () => (await actions(page)).find((a) => a.main)?.id, { timeout: 8000 }).toBe("continue");
      await tap(page, "continue");
    } else {
      throw new Error(`unexpected screen ${JSON.stringify(s)}`);
    }
  }
  expect((await state(page)).screen).toBe("done");
  expect(teach).toBeGreaterThan(0);
  expect(questions).toBeGreaterThan(0);
  expect(feedbacks.length).toBeGreaterThan(0);
  // Studying only from what the app showed, most answers end up right.
  expect(feedbacks.filter((f) => f.right).length).toBeGreaterThan(feedbacks.length / 2);
  for (const f of feedbacks) {
    expect(typeof f.right).toBe("boolean");
    expect(typeof f.answer).toBe("string");
    expect(f.itemId).toMatch(/^ja-u\d+l\d+-/);
  }
  allEvents.push(...(await take(page)));
  const done = allEvents.find((e) => e.name === "done") ?? null;
  // Every answered card reported once; a teach card reported what it taught.
  expect(allEvents.some((e) => e.name === "teach" && e.data.itemId)).toBe(true);
  expect(allEvents.some((e) => e.name === "screen")).toBe(true);
  expect(done, "a done event").toBeTruthy();
  expect(done.data.total).toBeGreaterThan(0);
});

// A REVIEW, where a kana at its production rung is written FROM MEMORY: the pad
// shows no guide, a wrong stroke fails honestly, and only after repeated misses
// does the card flash the stroke — which is when StudyBot shows it too.
test("review: free trace — no guide until the card shows one, a wrong stroke fails, the shown one passes", async ({ page }) => {
  test.setTimeout(120_000);
  const due = { due: new Date(Date.now() - 60_000).toISOString(), stability: 2, difficulty: 5, elapsed_days: 1, scheduled_days: 1, reps: 1, lapses: 0, learning_steps: 0, state: 2, last_review: new Date(Date.now() - 86_400_000).toISOString() };
  const fixture = {
    state: {
      items: { "ja-u1l1-a": { rung: 3, srs: due } },
      profile: { onboarded: true, displayName: "Doodle", reason: null, reminderTime: null, languages: ["ja"], activeLang: "ja", languagesChosen: true },
      settings: {},
      ui: {},
    },
    version: 1,
  };
  await page.addInitScript((json) => { if (!sessionStorage.getItem("seeded")) { localStorage.setItem("lingua-v1", json); sessionStorage.setItem("seeded", "1"); } }, JSON.stringify(fixture));
  await page.goto("/review");
  await page.waitForFunction(() => !!window.StudyBot);
  await expect.poll(async () => (await state(page)).item?.card, { timeout: 10_000 }).toBe("trace:free");
  const first = await state(page);
  expect(first.item.itemId).toBe("ja-u1l1-a:trace"); // its own id: writing is its own skill
  expect(first.item.guide).toBeUndefined(); // free mode: the stroke is the answer
  expect(JSON.stringify(first)).not.toContain("あ");

  // Two wrong strokes (a scribble in a corner) -> the card flashes the guide.
  let shown = null;
  for (let i = 0; i < 6 && !shown; i++) {
    await tap(page, "trace", [[0.95, 0.95], [0.96, 0.96], [0.97, 0.97]]);
    for (let t = 0; t < 20 && !shown; t++) {
      shown = (await state(page)).item?.guide ?? null;
      if (!shown) await page.waitForTimeout(50);
    }
  }
  expect(shown, "the card showed the stroke after repeated misses").toBeTruthy();
  const strokeBefore = (await state(page)).item.note;
  // Draw what was shown: the stroke is accepted and the card moves on.
  await tap(page, "trace", shown);
  await expect.poll(async () => (await state(page)).item?.note, { timeout: 5000 }).not.toBe(strokeBefore);
  // …and the guide went with it: the NEXT stroke was never on screen, so it is
  // not in state either, at any moment before the flash would have ended.
  for (let t = 0; t < 12; t++) {
    const now = await state(page);
    if (now.item?.card === "trace:free" && now.item.note !== strokeBefore) expect(now.item.guide, `poll ${t}`).toBeUndefined();
    await page.waitForTimeout(100);
  }
});

// "Can't hear it? Show it" means the learner cannot hear: Continue must not then wait out the
// word's clip (1 s, then the clip or a 6 s ceiling). An ordinary listening answer still waits,
// so the word is heard before the card goes. Doodle's window gave up on that wait, 27 Nov.
// This spec presents as a plain browser, so the clip really plays and the gate really closes.
test("Show it: Continue is ready at once after a can't-hear answer, an ordinary one waits for the clip", async ({ page }) => {
  test.setTimeout(180_000);
  await readyJa(page);
  await tap(page, "start-lesson");
  await tap(page, "begin");
  const seen = { waited: false, open: false };
  const continueUp = async () => (await actions(page)).some((a) => a.id === "continue");
  for (let step = 0; step < 400 && !(seen.waited && seen.open); step++) {
    await take(page);
    const s = await state(page);
    if (s.screen === "done") break;
    const acts = await actions(page);
    const has = (id) => acts.some((a) => a.id === id);
    if (s.screen === "teach") { await tap(page, "got-it"); continue; }
    if (s.screen === "feedback") {
      await expect.poll(async () => (await actions(page)).find((a) => a.main)?.id, { timeout: 10_000 }).toBe("continue");
      await tap(page, "continue");
      continue;
    }
    if (s.item?.card === "listen:choice" && s.item.audio && has("show")) {
      if (!seen.waited) {
        // An ordinary answer from the sound: Continue waits for the clip.
        await tap(page, "c0");
        await page.waitForTimeout(300);
        expect(await continueUp(), "an ordinary listening answer waits for its clip").toBe(false);
        seen.waited = true;
      } else {
        await tap(page, "show");
        await tap(page, "c0");
        await page.waitForTimeout(300);
        expect(await continueUp(), "after Show it, Continue does not wait for the clip").toBe(true);
        seen.open = true;
      }
      continue;
    }
    // Anything else: the quickest way through.
    if (s.item?.choices) await tap(page, "c0");
    else if (s.item?.input === "text") { await tap(page, "answer", "zzz"); await tap(page, "submit"); }
    else if (s.item?.card?.startsWith("trace")) {
      const g = s.item.guide ?? (await state(page)).item?.guide;
      if (has("trace") && g?.length) await act(page, "trace", g);
      await page.waitForTimeout(200);
    } else if (has("continue")) await tap(page, "continue");
    else await page.waitForTimeout(150);
  }
  expect(seen, "met two listening choice cards in lesson 1").toEqual({ waited: true, open: true });
});

test("events: screen changes, thrown errors, console errors and failed requests", async ({ page }) => {
  await readyJa(page);
  await take(page);
  const stats = (await actions(page)).find((a) => a.label === "Stats");
  await tap(page, stats.id);
  await expect.poll(async () => (await take(page)).some((e) => e.name === "screen" && e.data.to === "stats")).toBe(true);

  await sb(page, () => {
    setTimeout(() => {
      throw new Error("boom from a test");
    });
    console.error("a console error from a test");
    return fetch("/definitely-missing.json").catch(() => null);
  });
  await page.waitForTimeout(100);
  const errs = (await take(page)).filter((e) => e.name === "error").map((e) => e.data);
  expect(errs.some((e) => e.source === "throw" && /boom/.test(e.message))).toBe(true);
  expect(errs.some((e) => e.source === "console")).toBe(true);
  // A static server may answer a missing file with index.html (200); only assert
  // the shape if it really failed.
  for (const e of errs.filter((x) => x.source === "request")) expect(e.url).toBeTruthy();
});

test("tutor: text only, his lines arrive as tutor events, no voice SDK", async ({ page }) => {
  await readyJa(page);
  const tab = (await actions(page)).find((a) => a.kind === "tab" && /haruki/i.test(a.label));
  await tap(page, tab.id);
  await expect.poll(async () => (await state(page)).screen).toBe("tutor");
  // The tutor screen is its own chunk: the field appears once it has loaded.
  await expect.poll(async () => (await actions(page)).some((a) => a.id === "message")).toBe(true);
  await take(page);
  await tap(page, "message", "こんにちは");
  await tap(page, "submit");
  const evs = await take(page);
  expect(evs.find((e) => e.name === "tutor")?.data).toEqual({ from: "you", text: "こんにちは" });
  // Built without VITE_STUDYBOT_API: it says so and makes no request.
  await expect(page.getByText(/isn't connected in this build/)).toBeVisible();
  const scripts = await page.evaluate(() => performance.getEntriesByType("resource").map((r) => r.name).filter((n) => /\.js$/.test(n)));
  expect(scripts.some((n) => /Haruki/.test(n))).toBe(false);
});
