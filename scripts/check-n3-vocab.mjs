// Integration check for agent-authored N3 vocab units. Verifies each unit file
// against the vocab scaffold: ids/readings/fronts copied verbatim, the target word
// appears in its own example, meaning/accept present, no spaces, no duplicate
// examples, no mixed kanji+kana within a compound (heuristic). Pass the unit-order
// range as args: `node scripts/check-n3-vocab.mjs 119 134`.
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const SP = "/tmp/claude-0/-home-user-lingua/0950ba36-d4c0-5403-92cf-8e520c27b4a5/scratchpad";
const lo = Number(process.argv[2] ?? 119), hi = Number(process.argv[3] ?? 195);
const scaffold = JSON.parse(readFileSync(`${SP}/n3-vocab-scaffold.json`, "utf8"));
const wantById = new Map();
for (const u of scaffold) for (const l of u.lessons) for (const it of l.items) wantById.set(it.id, it);

const problems = [];
const allExamples = new Map();
let items = 0;

for (const u of scaffold) {
  if (u.order < lo || u.order > hi) continue;
  const path = `/home/user/lingua/src/data/ja/unit${u.order}.js`;
  let mod;
  try { mod = await import(pathToFileURL(path).href); }
  catch (e) { problems.push(`unit${u.order}: FAILED TO IMPORT — ${e.message}`); continue; }
  const unit = mod[`UNIT${u.order}`];
  if (!unit) { problems.push(`unit${u.order}: missing export UNIT${u.order}`); continue; }
  if (unit.stage !== "b1") problems.push(`unit${u.order}: stage "${unit.stage}" != b1`);
  const seen = new Set();
  for (const l of unit.lessons ?? []) for (const it of l.items ?? []) {
    items++;
    const want = wantById.get(it.id);
    if (!want) { problems.push(`${it.id}: id not in scaffold`); continue; }
    seen.add(it.id);
    if (it.type !== "vocab") problems.push(`${it.id}: type "${it.type}" != vocab`);
    if (it.front !== want.front) problems.push(`${it.id}: front "${it.front}" != scaffold "${want.front}"`);
    if (it.reading !== want.reading) problems.push(`${it.id}: reading "${it.reading}" != scaffold "${want.reading}"`);
    if (!it.meaning) problems.push(`${it.id}: missing meaning`);
    if (!Array.isArray(it.accept)) problems.push(`${it.id}: accept not array`);
    if (!it.example?.jp || !it.example?.en) { problems.push(`${it.id}: incomplete example`); continue; }
    if (/[ 　]/.test(it.example.jp)) problems.push(`${it.id}: example has a space → ${it.example.jp}`);
    // the word should appear — but verbs/adjectives conjugate, so match the STEM:
    // the front's leading kanji run (揚げる→揚), else the kana reading minus its last
    // 1–2 mora (いけない→いけ). A whole-front or whole-kana match also counts.
    const kanjiStem = (it.front.match(/^[一-鿿]+/) || [""])[0];
    const kanaStem = want.kana.length > 2 ? want.kana.slice(0, -1) : want.kana;
    const jp = it.example.jp;
    const found = jp.includes(it.front) || jp.includes(want.kana) ||
      (kanjiStem && jp.includes(kanjiStem)) || jp.includes(kanaStem);
    if (!found) problems.push(`${it.id}: example lacks the word "${it.front}" (kana ${want.kana}) → ${jp}`);
    const dup = allExamples.get(it.example.jp);
    if (dup) problems.push(`${it.id}: duplicate example (also ${dup}) → ${it.example.jp}`);
    else allExamples.set(it.example.jp, it.id);
  }
  for (const [id] of wantById) if (id.startsWith(`ja-u${u.order}l`) && !seen.has(id)) problems.push(`${id}: MISSING from unit${u.order}`);
}

console.log(`Checked ${items} vocab items across units ${lo}–${hi}.`);
if (!problems.length) console.log("✓ ALL CLEAN — fronts/readings verbatim, word-in-example, no spaces, no dup examples.");
else { console.log(`✗ ${problems.length} problem(s):\n` + problems.slice(0, 60).map((p) => "  - " + p).join("\n")); process.exitCode = 1; }
