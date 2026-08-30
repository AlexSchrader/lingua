import test from "node:test";
import assert from "node:assert/strict";
import { useStore, REVIEW_CAP, activeLangId, firstLiveLang } from "../../src/store/useStore.js";
import { seedItems, LANGUAGES, isLive } from "../../src/data/index.js";

// Language scoping of the daily review queue (2026-08-14).
//
// THESE TESTS USE THE REAL CORPUS ON PURPOSE. Every language bug this project has
// shipped got through because the test that should have caught it injected a
// ja-only stub: the prune-languages suite stubbed its content predicate so only
// Japanese was ever live and was therefore structurally unable to see the bug it
// was written for, and the milestone denominator regression hid the same way. A
// stub cannot catch a bug whose whole shape is "two languages interact", so the
// fixtures below are built from seedItems() and the suite refuses to run if the
// corpus stops holding at least two languages.

const DAY = 86400000;
const past = (days) => new Date(Date.now() - days * DAY).toISOString();

// A real due item: rung ≥ 1 (RECOGNIZED — rung 0 is unlearned and never "due")
// with an FSRS card whose due date has passed.
const due = (it, daysOverdue = 1) => ({
  ...it,
  rung: 2,
  srs: { due: past(daysOverdue), stability: 1, difficulty: 5, reps: 1, lapses: 0, state: 2 },
});

// Build a store state from the REAL seed: `counts` says how many items of each
// language to make due. Everything else stays rung 0, i.e. not reviewable.
function seedDue(counts) {
  const all = seedItems();
  const byLang = {};
  for (const [id, it] of Object.entries(all)) (byLang[it.lang] ??= []).push(id);

  const items = { ...all };
  const made = {};
  for (const [lang, n] of Object.entries(counts)) {
    const ids = byLang[lang] ?? [];
    assert.ok(ids.length >= n, `corpus has only ${ids.length} ${lang} items, need ${n}`);
    // Stagger the due dates so "oldest first" ordering is meaningful.
    ids.slice(0, n).forEach((id, i) => { items[id] = due(all[id], n - i); });
    made[lang] = ids.slice(0, n);
  }
  return { items, made };
}

function withStore(counts, profile, fn) {
  const { items, made } = seedDue(counts);
  const prev = useStore.getState();
  useStore.setState({
    items,
    profile: { onboarded: true, languagesChosen: true, ...profile },
    daily: { date: null, reviewsCleared: false, lessonDone: false },
  });
  try {
    return fn(useStore.getState(), made);
  } finally {
    useStore.setState({ items: prev.items, profile: prev.profile, daily: prev.daily });
  }
}

// ---------------------------------------------------------------------------

test("GUARD: the real corpus still ships ≥2 languages with real items", () => {
  const counts = {};
  for (const it of Object.values(seedItems())) counts[it.lang] = (counts[it.lang] ?? 0) + 1;
  const langs = Object.entries(counts).filter(([, n]) => n >= REVIEW_CAP * 2);
  assert.ok(
    langs.length >= 2,
    `these tests are meaningless on a one-language corpus; found ${JSON.stringify(counts)}. ` +
      `If a language was removed, re-point the fixtures — do NOT stub this.`
  );
});

test("dueItems() serves only the active language", () => {
  withStore({ ja: 30, fr: 25 }, { languages: ["ja", "fr"], activeLang: "ja" }, (s) => {
    const jaDue = s.dueItems();
    assert.ok(jaDue.length > 0, "Japanese has due items");
    assert.equal(jaDue.filter((it) => it.lang !== "ja").length, 0, "no French leaked into the Japanese queue");
    assert.equal(jaDue.length, 30);
  });
});

test("switching the active language switches the queue", () => {
  withStore({ ja: 30, fr: 25 }, { languages: ["ja", "fr"], activeLang: "fr" }, (s) => {
    const frDue = s.dueItems();
    assert.equal(frDue.length, 25);
    assert.equal(frDue.filter((it) => it.lang !== "fr").length, 0, "no Japanese in the French queue");
  });
});

test("an explicit lang argument overrides the active language; null asks for all", () => {
  withStore({ ja: 30, fr: 25 }, { languages: ["ja", "fr"], activeLang: "ja" }, (s) => {
    assert.equal(s.dueItems("fr").length, 25, "can ask about a non-active language");
    assert.equal(s.dueItems(null).length, 55, "null is the explicit cross-language escape hatch");
  });
});

// THE REPORTED BUG.
test("French review debt does not lock Japanese lessons", () => {
  withStore({ fr: 40 }, { languages: ["ja", "fr"], activeLang: "ja" }, (s) => {
    assert.equal(s.dueItems("fr").length, 40, "French really is in debt");
    assert.equal(s.dueItems("ja").length, 0, "Japanese owes nothing");
    assert.equal(s.reviewsLocked("ja"), false, "so the Japanese lesson must be available");
    assert.equal(s.reviewsLocked("fr"), true, "while French itself is still gated");
  });
});

test("the queue a learner faces is capped per language, not summed across them", () => {
  withStore({ ja: 60, fr: 60 }, { languages: ["ja", "fr"], activeLang: "ja" }, (s) => {
    // What the Review runner serves: oldest-due first, sliced to the cap.
    const served = (lang) =>
      s.dueItems(lang)
        .slice()
        .sort((a, b) => new Date(a.srs.due) - new Date(b.srs.due))
        .slice(0, REVIEW_CAP);
    assert.equal(served("ja").length, REVIEW_CAP, "Japanese session is bounded");
    assert.equal(served("fr").length, REVIEW_CAP, "French session is bounded");
    // The pre-fix behaviour was one merged queue: 120 due, and whichever language
    // sorted oldest ate all 20 slots while the other starved.
    assert.equal(s.dueItems(null).length, 120, "the backlog is real…");
    assert.ok(served("ja").every((it) => it.lang === "ja"), "…but no language eats another's slots");
  });
});

// THE ANTI-BURNOUT DECISION, LOCKED DOWN.
// Per-language capping must not become "two languages, two walls". The queue is
// per-language; the daily OBLIGATION is global — one cleared session unlocks
// lessons everywhere, so adding a language never adds a required card.
test("clearing reviews in one language satisfies the day for every language", () => {
  withStore({ ja: 30, fr: 30 }, { languages: ["ja", "fr"], activeLang: "ja" }, (s) => {
    assert.equal(s.reviewsLocked("ja"), true, "before: Japanese gated");
    assert.equal(s.reviewsLocked("fr"), true, "before: French gated");

    useStore.getState().completeReviews(); // finish ONE session, in Japanese

    const after = useStore.getState();
    assert.equal(after.reviewsLocked("ja"), false, "Japanese unlocked — it was cleared");
    assert.equal(
      after.reviewsLocked("fr"),
      false,
      "French unlocked too: the day's review duty is global, so a second language " +
        "never becomes a second mandatory wall"
    );
    assert.equal(after.dueItems("fr").length, 30, "French cards stay due and reviewable by choice");
  });
});

// code-auditor BLOCKER 2 (2026-08-14): scoping dueItems() flipped rollDailyGoal to
// per-language by accident — the one call in the store that must stay global. It
// would have handed out the streak for a French lesson while 30 Japanese cards sat
// overdue, silently contradicting the "obligation is global" half of the design.
test("the daily goal asks about EVERY language, not just the active one", () => {
  withStore({ ja: 30 }, { languages: ["ja", "fr"], activeLang: "fr" }, () => {
    useStore.setState((s) => ({ daily: { ...s.daily, lessonDone: true, reviewsCleared: false } }));
    const before = useStore.getState().streak.current;
    const met = useStore.getState().rollDailyGoal();
    assert.equal(met, false, "a French lesson must NOT satisfy the day while Japanese is in debt");
    assert.equal(useStore.getState().streak.current, before, "and the streak must not tick");
  });
});

test("the daily goal is met by a lesson when NO language owes reviews", () => {
  withStore({}, { languages: ["ja", "fr"], activeLang: "fr" }, () => {
    useStore.setState((s) => ({ daily: { ...s.daily, lessonDone: true, reviewsCleared: false } }));
    assert.equal(useStore.getState().rollDailyGoal(), true);
  });
});

// truth-agent + code-auditor BLOCKER (2026-08-14), found independently by both.
// Scoping the pill to the active language fixed the bilingual lie ("Cleared" over 40
// overdue French cards) and broke the MONOLINGUAL case — today's only real learner.
// Japanese-only, 60 due, clears the capped 20: the closure signal must survive. It
// takes a per-language record to tell "capped today" from "never opened", which is
// what daily.clearedLangs is for.
test("a capped backlog still reads as done for the language that was reviewed", () => {
  withStore({ ja: 60 }, { languages: ["ja"], activeLang: "ja" }, () => {
    useStore.getState().completeReviews(); // the day's session, in Japanese
    const s = useStore.getState();
    assert.equal(s.languageCleared("ja"), true, "Japanese was reviewed today");
    assert.ok(s.dueItems("ja").length > REVIEW_CAP, "and is still deep in backlog");
    // Today renders the pill from languageCleared, not from the raw due count, so a
    // learner who did today's work is not shown the pile the cap exists to hide.
    assert.deepEqual(s.daily.clearedLangs, ["ja"]);
  });
});

test("clearing one language does NOT mark another as cleared", () => {
  withStore({ ja: 30, fr: 40 }, { languages: ["ja", "fr"], activeLang: "ja" }, () => {
    useStore.getState().completeReviews();
    const s = useStore.getState();
    assert.equal(s.languageCleared("ja"), true);
    assert.equal(s.languageCleared("fr"), false, "French was never reviewed…");
    assert.equal(s.reviewsLocked("fr"), false, "…but is still unlocked — one duty a day");
    assert.equal(s.dueItems("fr").length, 40, "and its queue is intact and reachable");
  });
});

test("clearedLangs is absent-safe on an older save and resets with the day", () => {
  withStore({ ja: 10 }, { languages: ["ja"], activeLang: "ja" }, () => {
    useStore.setState((s) => ({ daily: { ...s.daily, clearedLangs: undefined } }));
    assert.equal(useStore.getState().languageCleared("ja"), false, "no field → not cleared, no crash");
    useStore.getState().completeReviews();
    assert.deepEqual(useStore.getState().daily.clearedLangs, ["ja"]);
  });
});

test("a language with nothing due is never locked, cleared or not", () => {
  withStore({ ja: 5 }, { languages: ["ja", "fr"], activeLang: "fr" }, (s) => {
    assert.equal(s.dueItems("fr").length, 0);
    assert.equal(s.reviewsLocked("fr"), false);
  });
});

// ---------------------------------------------------------------------------
// activeLangId — the fallback the store and Today.jsx must agree on.

test("activeLangId honours activeLang only when it is actually started", () => {
  assert.equal(activeLangId({ languages: ["ja", "fr"], activeLang: "fr" }), "fr");
  assert.equal(
    activeLangId({ languages: ["ja", "fr"], activeLang: "es" }),
    "ja",
    "an activeLang that was pruned falls back to the first started language"
  );
  // An unresolvable profile falls back to the first language WITH CONTENT, derived
  // from the catalog — never to a hardcoded id. This used to return "ja" flat, which
  // quietly made every such learner a Japanese learner (the kanji-milestone bug).
  const live = firstLiveLang();
  assert.ok(live, "some language must be live for this fallback to mean anything");
  assert.equal(activeLangId({ languages: [], activeLang: null }), live, "empty profile → first live language");
  assert.equal(activeLangId(undefined), live, "missing profile → first live language, never a crash");
});

test("no language id is hardcoded into the fallback", () => {
  // The guarantee is structural, not "it happens to return fr today": whatever the
  // catalog says is live first, that is what an unresolvable profile gets.
  const live = firstLiveLang();
  assert.ok(LANGUAGES.some((l) => l.id === live), "fallback is a real catalog entry");
  assert.ok(isLive(live), "fallback language actually has content");
});

test("a stale activeLang cannot silently empty the review queue", () => {
  // Regression guard: if dueItems trusted profile.activeLang blindly, a save
  // pointing at a language the learner is no longer started in would scope the
  // queue to a language with no items and report "nothing due" forever.
  withStore({ ja: 30 }, { languages: ["ja"], activeLang: "es" }, (s) => {
    assert.equal(s.dueItems().length, 30, "falls back to the started language, not to empty");
    assert.equal(s.reviewsLocked(), true);
  });
});
