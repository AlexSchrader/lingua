// Candidate-screening probe for hi. Written for A2 block 2 and KEPT.
//
// ⚠️ THIS HEADER SAID "TEMPORARY … Deleted before hand-back" UNTIL 2026-09-30, and it
// was already wrong — the file had been committed. It is kept deliberately now,
// because on 2026-09-30 its `screen` and `traps` modes caught THIRTEEN front
// collisions between block 2's planned u47–u50 fronts and block 3's already-authored
// u51–u59, on branches that cannot see each other and that `validate:content` passes
// separately. That is the one class of defect no gate in this repo catches.
//
//   node scripts/probe-hi-b2.mjs dump                      every hi card
//   node scripts/probe-hi-b2.mjs readings                  reading collisions
//   node scripts/probe-hi-b2.mjs screen  <cands.txt>       front/reading/gloss/free-pass
//   node scripts/probe-hi-b2.mjs traps   <cands.txt>       mark-boundary, candidate as needle
//   node scripts/probe-hi-b2.mjs matra                     self-test of the boundary finder
// where <cands.txt> is one `front|reading|gloss` per line.
//
// ⚠️ IT SCREENS AGAINST THE CORPUS IN **THIS** TREE, WHICH IS NOT ENOUGH ON ITS OWN.
// A sibling block's fronts do not exist here, so a candidate can come back FREE and
// still be a duplicate on the merged tree. Screen against the other blocks' front
// lists as well — and note that `screen` alone would have passed जोड़ी, whose twin
// जोड़ा (u19l4) differs in gender: it took `selfcheck-hi-a2-block2.mjs`'s
// variantCollision check, which compares through `meaningVariants` and across
// accept[], to catch that one. Run BOTH.
import { seedItems } from "../src/data/index.js";
import { normalizeReading, checkMeaning, checkProduce } from "../src/store/answer.js";

const all = Object.values(seedItems()).filter((i) => i.lang === "hi");
const mode = process.argv[2] ?? "dump";

const normText = (s) => String(s).normalize("NFKC").toLowerCase().replace(/[’']/g, "'").trim();
const normalizeMeaning = (s = "") =>
  normText(s).replace(/\(.*?\)/g, " ").replace(/\s+/g, " ").trim().replace(/^(?:a|an|the)\s+/, "").replace(/^to\s+/, "");

if (mode === "dump") {
  for (const i of all.sort((a, b) => a.unit - b.unit || a.lesson - b.lesson))
    console.log(`u${i.unit}l${i.lesson}\t${i.type}\t${i.front}\t${i.reading}\t${i.meaning ?? ""}`);
}

if (mode === "readings") {
  const m = new Map();
  for (const i of all) {
    const k = `${i.type === "glyph" ? "glyph:" : "word:"}${i.reading}`;
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(`${i.front}(u${i.unit})`);
  }
  console.log(`total cards ${all.length}, distinct reading keys ${m.size}`);
  for (const [k, v] of m) if (v.length > 1) console.log("COLLIDE", k, v.join(" "));
}

// screen CANDIDATES: node scripts/probe-hi-b2.mjs screen "front|reading|gloss" ...
if (mode === "screen") {
  const fronts = new Map();      // exact front -> ids
  const readings = new Map();    // word:reading -> fronts
  const glosses = new Map();     // normalized gloss -> fronts
  for (const i of all) {
    if (!fronts.has(i.front)) fronts.set(i.front, []);
    fronts.get(i.front).push(`u${i.unit}l${i.lesson}${i.type === "glyph" ? " GLYPH" : ""}`);
    const rk = `${i.type === "glyph" ? "glyph:" : "word:"}${i.reading}`;
    if (!readings.has(rk)) readings.set(rk, []);
    readings.get(rk).push(`${i.front} u${i.unit}`);
    if (i.meaning) {
      const g = normalizeMeaning(i.meaning);
      if (!glosses.has(g)) glosses.set(g, []);
      glosses.get(g).push(`${i.front} u${i.unit}`);
    }
    for (const a of i.accept ?? []) {
      const g = normalizeMeaning(a);
      if (!glosses.has(g)) glosses.set(g, []);
      glosses.get(g).push(`${i.front} u${i.unit} (accept)`);
    }
  }
  const { readFileSync } = await import("node:fs");
  const cands = readFileSync(process.argv[3], "utf8").trim().split(/\r?\n/).filter(Boolean);
  // intra-block collisions too
  for (const c of cands) {
    const [front, reading, gloss] = c.split("|");
    const rk = `word:${reading}`;
    if (!readings.has(rk)) readings.set(rk, []);
    readings.get(rk).push(`${front} MINE`);
    const g = normalizeMeaning(gloss);
    if (!glosses.has(g)) glosses.set(g, []);
    glosses.get(g).push(`${front} MINE`);
    if (!fronts.has(front)) fronts.set(front, []);
    fronts.get(front).push("MINE");
  }
  for (const arg of cands) {
    const [front, reading, gloss] = arg.split("|");
    const out = [];
    const notSelf = (list, self) => list.filter((x) => x !== self);
    const fr = notSelf(fronts.get(front) ?? [], "MINE");
    if (fr.length) out.push(`TAKEN front <- ${fr.join(",")}`);
    const rl = notSelf(readings.get(`word:${reading}`) ?? [], `${front} MINE`);
    if (reading && rl.length) out.push(`READING-COLLIDE word:${reading} <- ${rl.join(",")}`);
    if (reading && normalizeReading(reading, "hi") !== reading) out.push(`NORMREADING ${reading} -> ${normalizeReading(reading, "hi")}`);
    if (reading && !/^[a-z]+$/.test(reading)) out.push(`CHARSET ${reading}`);
    if (gloss) {
      const g = normalizeMeaning(gloss);
      if (!g) out.push(`EMPTY GLOSS`);
      const gl = notSelf(glosses.get(g) ?? [], `${front} MINE`);
      if (gl.length) out.push(`GLOSS-COLLIDE "${g}" <- ${gl.join(",")}`);
      if (reading && checkProduce(gloss, { lang: "hi", front, reading, meaning: gloss })) out.push(`PRODUCE-FREE-PASS gloss "${gloss}" accepted as answer`);
    }
    // substring-of / contains-taught-front (lexeme smell) — report any taught front that is
    // a prefix/suffix/substring of the candidate and vice versa
    const rel = [];
    for (const f of fronts.keys()) {
      if (f === front) continue;
      if (f.length >= 2 && front.includes(f)) rel.push(`contains ${f}`);
      else if (front.length >= 2 && f.includes(front)) rel.push(`inside ${f}`);
    }
    console.log(`${front.padEnd(14)} ${reading ?? ""}`.padEnd(30) + (out.length ? out.join(" | ") : "FREE") + (rel.length ? `   [${rel.slice(0, 6).join("; ")}]` : ""));
  }
}

// traps: for each candidate front F, list every OTHER word W (corpus front or candidate)
// in which F whole-word-matches as a substring per the real router's boundary test.
// The boundary test uses \p{L}, and Devanagari matra/anusvara/halant/nukta are \p{M},
// so F=कान matches inside कानून and F=ताज inside ताज़ा.
if (mode === "traps") {
  const { readFileSync } = await import("node:fs");
  const isLetter = (ch) => !!ch && /\p{L}/u.test(ch);
  const find = (hay, needle) => {
    const H = hay.toLowerCase(), N = needle.toLowerCase();
    for (let from = 0; ; from = H.indexOf(N, from) + 1) {
      const i = H.indexOf(N, from);
      if (i < 0) return -1;
      if (!isLetter(hay[i - 1]) && !isLetter(hay[i + N.length])) return i;
    }
  };
  const cands = readFileSync(process.argv[3], "utf8").trim().split(/\r?\n/).filter(Boolean)
    .map((l) => l.split("|")[0]);
  const words = new Set([...all.map((i) => i.front), ...cands]);
  for (const f of cands) {
    const hits = [...words].filter((w) => w !== f && w.length > f.length && find(w, f) >= 0);
    if (hits.length) console.log(`${f}  matches inside: ${hits.join(" ")}`);
  }
}

// matra-prefix trap: does needle whole-word-match inside hay per findWholeWord?
if (mode === "matra") {
  const isLetter = (ch) => !!ch && /\p{L}/u.test(ch);
  const find = (hay, needle) => {
    const H = hay.toLowerCase(), N = needle.toLowerCase();
    for (let from = 0; ; from = H.indexOf(N, from) + 1) {
      const i = H.indexOf(N, from);
      if (i < 0) return null;
      if (!isLetter(hay[i - 1]) && !isLetter(hay[i + N.length])) return i;
    }
  };
  console.log(find("मुझे खुशी है", "खुश"), find("दूरी कम है", "दूर"));
}
