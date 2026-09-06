// Whole-corpus audit of the MERGED Norwegian tree. Each block was gated alone;
// the RUNBOOK's own warning is that a block can be green alone and red combined,
// and nobody has run this. Reports only what crosses block boundaries.
import { normalizeReading } from "file:///c:/dev/lingua-no-drills/src/store/answer.js";
const m = await import("file:///c:/dev/lingua-no-drills/src/data/no/index.js");
const U = (m.NO_UNITS ?? Object.values(m).find(Array.isArray)).filter((u) => u.lessons.some((l) => l.items));
const items = U.flatMap((u) => u.lessons.flatMap((l) => (l.items || []).map((i) => ({ ...i, u: u.order, l: l.lesson }))));
const blk = (u) => (u <= 7 ? 1 : u <= 14 ? 2 : 3);
const say = (t) => console.log(`\n=== ${t} ===`);

say("shape");
console.log(`units ${U.length} · lessons ${U.reduce((n, u) => n + u.lessons.length, 0)} · items ${items.length}`);
const badLen = U.flatMap((u) => u.lessons.filter((l) => (l.items?.length ?? 0) !== 6).map((l) => l.id));
console.log("lessons not at 6 cards:", badLen.length ? badLen : "none");

say("duplicate fronts (hard validate:content failure at merge)");
const byFront = {};
for (const i of items) (byFront[i.front] ||= []).push(i);
const dupF = Object.entries(byFront).filter(([, v]) => v.length > 1);
console.log(dupF.length ? dupF.map(([f, v]) => `${f}: ${v.map((x) => `u${x.u}(b${blk(x.u)})`).join(" vs ")}`) : "none");

say("lexeme duplicates ACROSS BLOCKS (validator-blind)");
const strip = (f) => f.replace(/^(en |ei |et |å )/, "").toLowerCase();
const byStem = {};
for (const i of items) (byStem[strip(i.front)] ||= []).push(i);
const dupS = Object.entries(byStem).filter(([, v]) => v.length > 1 && new Set(v.map((x) => blk(x.u))).size > 1);
console.log(dupS.length ? dupS.map(([s, v]) => `${s}: ${v.map((x) => `${x.front} u${x.u}(b${blk(x.u)})`).join(" vs ")}`) : "none");

say("infinitive vs past-tense pairs (the u14 hazard — deliberate, must NOT be deduped)");
const PAST = { snakket: "snakke", jobbet: "jobbe", spiste: "spise", kjøpte: "kjøpe", lærte: "lære", var: "være", hadde: "ha", gikk: "gå", kom: "komme", så: "se", ble: "bli" };
const inf = new Map(items.filter((i) => /^å /.test(i.front)).map((i) => [strip(i.front), i]));
const pairs = items.filter((i) => PAST[i.front] && inf.has(PAST[i.front]));
console.log(pairs.map((p) => `${p.front} u${p.u}(b${blk(p.u)}) <- å ${PAST[p.front]} u${inf.get(PAST[p.front]).u}(b${blk(inf.get(PAST[p.front]).u)})`).join("\n") || "none");

say("canonical MEANING collisions (type:produce shows one prompt, two answers)");
const byM = {};
for (const i of items) (byM[i.meaning.toLowerCase()] ||= []).push(i);
const dupM = Object.entries(byM).filter(([, v]) => v.length > 1);
console.log(dupM.length ? dupM.map(([mm, v]) => `"${mm}": ${v.map((x) => `${x.front} u${x.u}`).join(" / ")}`) : "none");

say("reading collisions (two fronts, one typed answer)");
const byR = {};
for (const i of items) (byR[normalizeReading(i.reading)] ||= []).push(i);
const dupR = Object.entries(byR).filter(([, v]) => v.length > 1);
console.log(dupR.length ? dupR.map(([r, v]) => `${r}: ${v.map((x) => `${x.front} u${x.u}`).join(" / ")}`) : "none");

say("contract sanity");
console.log("readings failing [a-z]+:", items.filter((i) => !/^[a-z]+$/.test(normalizeReading(i.reading))).map((i) => i.id));
console.log("items missing accept[]:", items.filter((i) => !Array.isArray(i.accept)).map((i) => i.id).length);
console.log("items missing hint:", items.filter((i) => !i.hint).map((i) => i.id).length);
console.log("unit titles:", U.map((u) => u.title).join(" · "));
const en = U.filter((u) => /^(Sounds|Greetings|Introducing|Family|Numbers|Food|Town|Colors|Days|Describing|Body|Grammar|Vocabulary)/.test(u.title));
console.log("still English (scaffold placeholder):", en.length ? en.map((u) => u.title) : "none");
