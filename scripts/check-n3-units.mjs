// Integration check for the agent-authored N3 kanji units (103–118). Verifies each
// unit file against the scaffold: ids + readings copied verbatim, front === glyph,
// example.jp actually contains the glyph, meaning/hint present, no duplicate example
// sentences. Run after the authoring agents finish, before registering in index.js.
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { UNITS } from "../src/data/index.js";

const SP = "/tmp/claude-0/-home-user-lingua/0950ba36-d4c0-5403-92cf-8e520c27b4a5/scratchpad";
const scaffold = JSON.parse(readFileSync(`${SP}/n3-kanji-scaffold.json`, "utf8"));
const wantById = new Map();
for (const u of scaffold) for (const l of u.lessons) for (const it of l.items) wantById.set(it.id, it);

// The set of kanji a learner could read inside an example: everything already in
// the corpus (N5/N4 + earlier) PLUS every glyph in the N3 arc itself. A kanji in an
// example outside this set is "foreign" — unreadable, a naturalness flag.
const taughtKanji = new Set();
for (const u of UNITS) for (const l of u.lessons ?? []) for (const it of l.items ?? []) if (it.type === "kanji") taughtKanji.add(it.front);
for (const [, it] of wantById) taughtKanji.add(it.glyph);
const isKanji = (ch) => /\p{Script=Han}/u.test(ch);
const foreign = []; // {id, jp, extras}

const problems = [];
const allExamples = new Map(); // jp → id (dup detection across all units)
let items = 0;

for (const u of scaffold) {
  const order = u.order;
  const path = `/home/user/lingua/src/data/ja/unit${order}.js`;
  let mod;
  try { mod = await import(pathToFileURL(path).href + `?t=${order}`); }
  catch (e) { problems.push(`unit${order}: FAILED TO IMPORT — ${e.message}`); continue; }
  const unit = mod[`UNIT${order}`];
  if (!unit) { problems.push(`unit${order}: missing export UNIT${order}`); continue; }
  if (unit.stage !== "b1") problems.push(`unit${order}: stage is "${unit.stage}", expected "b1"`);
  if (unit.order !== order) problems.push(`unit${order}: order is ${unit.order}, expected ${order}`);
  const seenIds = new Set();
  for (const l of unit.lessons ?? []) {
    for (const it of l.items ?? []) {
      items++;
      const want = wantById.get(it.id);
      if (!want) { problems.push(`${it.id}: id not in scaffold (invented or mistyped)`); continue; }
      seenIds.add(it.id);
      if (it.type !== "kanji") problems.push(`${it.id}: type "${it.type}" != kanji`);
      if (it.front !== want.glyph) problems.push(`${it.id}: front "${it.front}" != glyph "${want.glyph}"`);
      if (it.reading !== want.reading) problems.push(`${it.id}: reading "${it.reading}" != scaffold "${want.reading}"`);
      if (!it.meaning || typeof it.meaning !== "string") problems.push(`${it.id}: missing meaning`);
      if (!Array.isArray(it.accept)) problems.push(`${it.id}: accept not an array`);
      if (!it.example?.jp || !it.example?.en) problems.push(`${it.id}: incomplete example`);
      else {
        if (!it.example.jp.includes(want.glyph)) problems.push(`${it.id}: example.jp does not contain glyph "${want.glyph}" → ${it.example.jp}`);
        const dup = allExamples.get(it.example.jp);
        if (dup) problems.push(`${it.id}: duplicate example.jp (also ${dup}) → ${it.example.jp}`);
        else allExamples.set(it.example.jp, it.id);
        const extras = [...new Set([...it.example.jp].filter((ch) => isKanji(ch) && !taughtKanji.has(ch)))];
        if (extras.length) foreign.push({ id: it.id, jp: it.example.jp, extras: extras.join("") });
      }
    }
  }
  // every scaffold id for this unit present?
  for (const [id] of wantById) {
    if (id.startsWith(`ja-u${order}l`) && !seenIds.has(id)) problems.push(`${id}: MISSING from authored unit${order}`);
  }
}

console.log(`Checked ${items} items across units 103–118.`);
if (problems.length === 0) {
  console.log("✓ ALL CLEAN — ids/readings verbatim, glyphs present in examples, no dup examples.");
} else {
  console.log(`✗ ${problems.length} problem(s):\n` + problems.map((p) => "  - " + p).join("\n"));
  process.exitCode = 1;
}
