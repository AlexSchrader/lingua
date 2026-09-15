// Drill verifier for Norwegian. Replicates the REAL canCloze / canSentence /
// sentenceTokens logic (src/store/cardRouting.js) rather than approximating it,
// and adds the vocab-scope rule that no gate applies to drills.
//
// Needed because `drill` is not yet in ITEM_KEYS on main, so validate:content and
// lint:curriculum cannot see a drill at all — they reject the key outright. Until
// Feature CC lands the contract half, THIS is the only check on 480 drills.
//
//   node scripts/check-drills.mjs        report
//   node scripts/check-drills.mjs -v     list every drill with its token count
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const mod = await import(`file:///${join(root, "src/data/no/index.js").replace(/\\/g, "/")}`);
const UNITS = (mod.NO_UNITS ?? Object.values(mod).find(Array.isArray)).filter((u) => u.lessons.some((l) => l.items));
const items = UNITS.flatMap((u) => u.lessons.flatMap((l) => (l.items || []).map((i) => ({ ...i, u: u.order, l: l.lesson }))));

// --- FREE list, parsed from the unit files exactly as check-lang-scope does ---
const FREE = new Set();
for (const n of UNITS.map((u) => u.order)) {
  let src = "";
  try { src = readFileSync(join(root, `src/data/no/unit${n}.js`), "utf8"); } catch { continue; }
  const m = src.match(/^\/\/\s*FREE:\s*(.+)$/m);
  if (m) m[1].split(/[|,]/).map((s) => s.trim()).filter(Boolean).forEach((w) => {
    const lw = w.toLowerCase(); FREE.add(lw);
    // a FREE word inflects too: kafé -> kafeen, kafeer. Accent drops before the ending.
    const stem = lw.normalize("NFD").replace(/[̀-ͯ]/g, "");
    for (const suf of ["en", "et", "a", "er", "ene", "n"]) { FREE.add(lw + suf); FREE.add(stem + suf); }
  });
}

// --- every surface form a taught front can produce, -> earliest unit ---
// The generator lived here and is now scripts/morph/no.mjs, shared with
// check-examples.mjs. Its header documents the six resolver gaps that took the
// example gate from 43 flagged sentences to 20 real ones. Two copies of this
// table drifting apart is how the German fork grew a bug that read kann, darf,
// muss and will as untaught.
const { surfaces } = await import("file:///" + join(root, "scripts/morph/no.mjs").replace(/\\/g, "/"));
const born = new Map();
const add = (w, u) => { if (!w) return; const p = born.get(w); if (p === undefined || u < p) born.set(w, u); };
// lesson granularity, not unit — the blind spot unit7.js warns about
for (const i of items) surfaces(i.front, i.u * 100 + i.l, add);

// --- the real router rules ---
const isLetter = (c) => !!c && /\p{L}/u.test(c);
function findWholeWord(hay, needle) {
  const H = hay.toLowerCase(), N = needle.toLowerCase();
  if (!N) return null;
  for (let from = 0; ; from = H.indexOf(N, from) + 1) {
    const i = H.indexOf(N, from);
    if (i < 0) return null;
    if (!isLetter(hay[i - 1]) && !isLetter(hay[i + N.length])) return { index: i, length: needle.length };
  }
}
// Vocabulary scope, shared by drills and (under --examples) examples. lint runs a
// weaker matcher of its own and reports every inflection as untaught; this uses the
// same surface-form table the drill checker does, so an example warning that
// survives HERE is a real scope violation rather than the A2 noise floor.
function scope(text, item, bad, notes) {
  for (const w of text.toLowerCase().match(/[a-zæøåéá]+/g) || []) {
    if (FREE.has(w) || w.length < 2) continue;
    const at = born.get(w);
    if (at === undefined) bad.push(`"${w}" is taught NOWHERE`);
    else if (at > (item.u + 1) * 100) bad.push(`"${w}" first taught u${Math.floor(at / 100)}, used at u${item.u}`);
    // LESSON-granular hit: legal under the documented rule (RUNBOOK §4 and
    // unit1.js §6 both say "at or before that UNIT"), but the learner meets
    // lessons in order, so it is worth surfacing. A signal, not a defect —
    // inventing a stricter rule mid-flight would force ~58 rewrites the
    // convention permits. Raised by the block-3 seat.
    else if (at > item.u * 100 + item.l) notes.push(`"${w}" is from a later lesson (u${Math.floor(at / 100)}l${at % 100})`);
  }
}

const NOTES = [];
function check(item) {
  const d = item.drill;
  const bad = []; const notes = [];
  if (!d) return ["MISSING"];
  if (typeof d !== "object" || !d.jp || !d.en) return ["shape: needs { jp, en } both non-empty"];
  const jp = String(d.jp).replace(/\s*[。！？.!?]+\s*$/u, "");
  if (!findWholeWord(jp, item.front)) bad.push(`front "${item.front}" not present as a whole word`);
  if (/[.!?…—–]/u.test(jp)) bad.push("interior sentence punctuation");
  const toks = jp.split(/\s+/).filter(Boolean);
  if (toks.length < 3 || toks.length > 8) bad.push(`${toks.length} tokens (must be 3-8)`);
  if (toks.some((t) => !/\p{L}/u.test(t))) bad.push("punctuation-only tile");
  // A 1-char front is below canCloze's >=2 floor and can never cloze, drill or not.
  // The drill still serves sentence:build, so this is a NOTE, not a defect.
  if ([...(item.front ?? "")].length < 2) notes.push("1-char front: sentence:build only, never cloze");
  scope(jp, item, bad, notes);
  // Adjective agreement: an adjective front is the BASE (common-gender) form, so a
  // neuter subject would need -t — but the front must appear verbatim, so the drill
  // must not put a neuter subject in front of it. Cheap structural catch for the one
  // agreement error a verbatim-front rule makes easy to write.
  // Only adjectives that REGULARLY take -t in the neuter can produce the agreement
  // error. Norwegian adds none to -ig, -sk, -t, -dd, -e or -a endings, so "Et barn
  // er redd" and "et viktig hus" are correct — excluding them stops a false positive.
  const isAdj = !/^(en |ei |et |å )/.test(item.front) && !/^[A-ZÆØÅ]/.test(item.front)
    && !/(ig|sk|tt|dd|[td]|e|a)$/.test(item.front);
  const neuter = jp.match(/^\s*et\s+\S+\s+er\s+(\S+?)[.,!?]?\s*$/i);
  if (isAdj && neuter && neuter[1].toLowerCase() === item.front.toLowerCase())
    bad.push(`neuter subject + base adjective "${item.front}" — Norwegian needs -t here, which would break the verbatim front`);
  // Compare NORMALISED, not raw — the drill has no trailing period and the
  // example does, so a raw compare can never match. This guard never fired.
  // Compare on WORDS ONLY. Trailing-punctuation stripping was not enough: an
  // example with an internal comma ("Ha det, Erling!") still slipped past.
  const flat = (x) => String(x ?? "").toLowerCase().replace(/[^\p{L}\s]/gu, "").replace(/\s+/g, " ").trim();
  const fd = flat(d.jp), fe = flat(item.example?.jp);
  if (fd === fe) bad.push("drill IS the example (no second context — the whole point of the field)");
  else if (fe && fd && (fe.startsWith(fd + " ") || fd.startsWith(fe + " ")))
    bad.push("drill is a TRUNCATION of the example (still no second context)");
  // A bare å-frame ("Det er lett å prøve") reads as machine output. Norwegian
  // wants a complement after the infinitive, exactly as English does.
  // Verbs that read absolutely after an å-frame and need no complement.
  const ABSOLUTE = ["gå", "beklage", "spise", "betale", "gi", "le", "smile", "sove", "hvile", "drikke"];
  const bareFrame = jp.match(/^det er \S+ å (\S+)$/i);
  if (bareFrame && !ABSOLUTE.includes(bareFrame[1].toLowerCase()))
    bad.push("bare å-frame — this infinitive needs an object or complement");
  if (notes.length) NOTES.push(`  · ${item.id.padEnd(24)} ${notes.join(" | ")}`);
  return bad;
}

const NOTESHOLD=0;
const verbose = process.argv.includes("-v");

// --taught w1,w2,...: where each surface form enters the course. An AUTHORING
// query — asking the same table the checker uses beats guessing, which is how
// untaught words reached examples in the first place.
if (process.argv.includes("--taught")) {
  const ws = (process.argv[process.argv.indexOf("--taught") + 1] || "").split(/[ ,]+/).filter(Boolean);
  for (const w of ws) {
    const lw = w.toLowerCase(); const at = born.get(lw);
    console.log(lw.padEnd(16), FREE.has(lw) ? "FREE" : at === undefined ? "— untaught" : `u${Math.floor(at / 100)}l${at % 100}`);
  }
  process.exit(0);
}

// --examples: scope only, over example.jp. Same table, different haystack.
if (process.argv.includes("--examples")) {
  const NL = String.fromCharCode(10);
  const bad2 = [];
  for (const i of items) {
    const errs = [], notes = [];
    scope(String(i.example?.jp ?? ""), i, errs, notes);
    if (errs.length) bad2.push(`  ✗ ${i.id.padEnd(24)} ${errs.join(" | ")}   «${i.example?.jp ?? ""}»`);
  }
  if (bad2.length) console.log(bad2.join(NL));
  console.log(`${NL}examples: ${items.length - bad2.length} in scope · ${bad2.length} out of scope`);
  process.exit(bad2.length ? 1 : 0);
}

let ok = 0; const problems = [];
for (const i of items) {
  const bad = check(i);
  if (!bad.length) { ok++; if (verbose) console.log(`  ok  ${i.id.padEnd(24)} ${i.drill.jp}`); }
  else if (bad[0] !== "MISSING") problems.push(`  ✗ ${i.id.padEnd(24)} ${bad.join(" | ")}   «${i.drill?.jp ?? ""}»`);
}
const missing = items.filter((i) => !i.drill).length;
if (problems.length) console.log(problems.join("\n"));
console.log(`\ndrills: ${ok} valid · ${problems.length} broken · ${missing} not yet written · ${items.length} items total`);
process.exit(problems.length ? 1 : 0);
