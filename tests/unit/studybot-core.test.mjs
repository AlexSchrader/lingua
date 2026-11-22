// StudyBot's pure rules (src/studybot/core.js): what may leave the app through
// state(), how action ids are made, and the event queue his window polls.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  cleanPath,
  createEvents,
  itemKind,
  pickSurface,
  plainText,
  progressOf,
  publicItem,
  roundRect,
  screenForPath,
  slug,
  subjectFor,
  uniqueIds,
} from "../../src/studybot/core.js";

test("publicItem passes only the learner-visible fields — an answer field never leaks", () => {
  const out = publicItem({
    itemId: "ja-u1l1-a",
    subject: "japanese",
    kind: "kana",
    card: "choice",
    ask: "Which sound is this?",
    prompt: "あ",
    choices: [{ id: "c0", text: "a", correct: true }, { id: "c1", text: "i", correct: false }],
    answer: "a",
    correct: 0,
    reading: "a",
    meaning: "x",
  });
  assert.deepEqual(out, {
    itemId: "ja-u1l1-a",
    subject: "japanese",
    kind: "kana",
    prompt: "あ",
    card: "choice",
    ask: "Which sound is this?",
    choices: [{ id: "c0", text: "a" }, { id: "c1", text: "i" }],
  });
  assert.equal(JSON.stringify(out).includes("correct"), false);
});

test("publicItem: `shown` (teach card) keeps only what a teach card prints", () => {
  const out = publicItem({ itemId: "x", prompt: "猫", shown: { meaning: "cat", reading: "neko", secret: "no", hint: "" } });
  assert.deepEqual(out.shown, { meaning: "cat", reading: "neko" });
});

test("publicItem: nothing without an itemId", () => {
  assert.equal(publicItem(null), null);
  assert.equal(publicItem({ prompt: "x" }), null);
});

test("plainText collapses whitespace and caps at 2000 characters", () => {
  assert.equal(plainText("  a \n\t b  "), "a b");
  assert.equal(plainText(null), "");
  assert.equal(plainText("x".repeat(3000)).length, 2000);
});

test("slug and uniqueIds give stable, readable action ids", () => {
  assert.equal(slug("Got it"), "got-it");
  assert.equal(slug("Can't hear it? Show it"), "can-t-hear-it-show-it");
  assert.equal(slug("ねこ"), "");
  assert.deepEqual(uniqueIds(["continue", "continue", "", "back"]), ["continue", "continue-2", "action", "back"]);
});

test("subject and kind", () => {
  assert.equal(subjectFor("ja"), "japanese");
  assert.equal(subjectFor("fr"), "fr");
  assert.equal(itemKind("kana"), "kana");
  assert.equal(itemKind("vocab"), "word");
  assert.equal(itemKind("glyph"), "letter");
  assert.equal(itemKind("kanji"), "kanji");
});

test("screenForPath names every route", () => {
  assert.equal(screenForPath("/"), "home");
  assert.equal(screenForPath("/lesson/ja-u1l1"), "lesson");
  assert.equal(screenForPath("/review"), "review");
  assert.equal(screenForPath("/haruki"), "tutor");
  assert.equal(screenForPath("/settings/"), "settings");
});

test("a card's surface (level 2) wins over its runner's (level 1) whatever the order", () => {
  const runner = { level: 1, screen: "lesson", progress: { done: 2, total: 5 } };
  const card = { level: 2, screen: "question", item: { itemId: "a" } };
  assert.equal(pickSurface([card, runner]).screen, "question");
  assert.equal(pickSurface([runner, card]).screen, "question");
  assert.deepEqual(progressOf([card, runner]), { done: 2, total: 5 });
  assert.equal(pickSurface([]), null);
});

test("events reach on() handlers and take() drains them oldest first", () => {
  let t = 0;
  const ev = createEvents({ now: () => ++t });
  const seen = [];
  ev.on("feedback", (d, n) => seen.push(["fb", n, d.itemId]));
  ev.on("*", (d, n) => seen.push(["all", n]));
  ev.on("feedback", () => {
    throw new Error("a bad handler");
  });
  ev.emit("screen", { from: "home", to: "lesson" });
  ev.emit("feedback", { itemId: "a" });
  assert.deepEqual(seen, [["all", "screen"], ["fb", "feedback", "a"], ["all", "feedback"]]);
  assert.deepEqual(ev.take().map((e) => [e.name, e.at]), [["screen", 1], ["feedback", 2]]);
  assert.deepEqual(ev.take(), []);
});

test("the queue is capped so an unpolled window cannot grow forever", () => {
  const ev = createEvents({ cap: 3 });
  for (let i = 0; i < 10; i++) ev.emit("screen", { i });
  assert.deepEqual(ev.take().map((e) => e.data.i), [7, 8, 9]);
});

test("roundRect gives whole page pixels", () => {
  assert.deepEqual(roundRect({ left: 10.4, top: 20.6, width: 100.5, height: 40.2 }), { x: 10, y: 21, w: 101, h: 40 });
  // a control ending at 389.6 in a 390 window reports its right edge at 390
  assert.deepEqual(roundRect({ left: 0.4, top: 0, width: 389.2, height: 10 }), { x: 0, y: 0, w: 390, h: 10 });
});

test("cleanPath: 2-64 points, clamped to the pad, rounded; anything else is refused", () => {
  assert.deepEqual(cleanPath([[0.1234, -1], [2, 0.5]]), [[0.123, 0], [1, 0.5]]);
  assert.equal(cleanPath([[0, 0]]), null);
  assert.equal(cleanPath(Array.from({ length: 65 }, () => [0, 0])), null);
  assert.equal(cleanPath([[0, 0], [0, "x"]]), null);
  assert.equal(cleanPath("not a path"), null);
});

test("publicItem passes a trace card's visible guide, cleaned", () => {
  assert.deepEqual(publicItem({ itemId: "a", guide: [[0.5, 0.1], [0.5, 0.9]] }).guide, [[0.5, 0.1], [0.5, 0.9]]);
  assert.equal(publicItem({ itemId: "a", guide: [[0.5]] }).guide, undefined);
});
