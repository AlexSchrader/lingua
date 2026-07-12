#!/usr/bin/env node
// TEMP consolidated B1 gate — proves A1 + A2(U22-44) + B1(U45-48) green against the
// FIXED contract+lint (from content/a2-conjugation, which teaches them about conjForm
// drills). Pulls A2 vocab/kanji from lingua-a2, A2 conjugation from lingua-a2c, B1 local.
// Mirrors validate-a2-draft.mjs. Delete after B1 reconciles. Requires the caller to have
// synced N4 kanjivg into lingua-a2c first (that data rides in with the A2 merge).
import { pathToFileURL } from "node:url";
const A2C = "C:/Users/Owner/lingua-a2c/src/data/";   // fixed contract + lint + A2 conjugation
const A2 = "C:/Users/Owner/lingua-a2/src/data/ja/";   // A2 vocab + N4 kanji

const { validateContent } = await import(pathToFileURL(`${A2C}contract.js`).href);
const { lintCurriculum } = await import(pathToFileURL(`${A2C}lint.js`).href);
const { UNITS, LANGUAGES } = await import(pathToFileURL(`${A2C}index.js`).href);

const a2units = [];
for (let n = 22; n <= 39; n++) { const m = await import(pathToFileURL(`${A2}unit${n}.js`).href); a2units.push(m[`UNIT${n}`]); }
for (let n = 40; n <= 44; n++) { const m = await import(pathToFileURL(`${A2C}ja/unit${n}.js`).href); a2units.push(m[`UNIT${n}`]); }

const { B1_DRAFT_UNITS } = await import("../src/data/b1-draft.js");

const all = [...UNITS, ...a2units, ...B1_DRAFT_UNITS];
const c = validateContent(all, LANGUAGES);
const l = lintCurriculum(all);
const errors = [...c.errors, ...l.errors];
const warnings = [...c.warnings, ...l.warnings];

const b1Items = B1_DRAFT_UNITS.reduce((n, u) => n + u.lessons.reduce((m, ls) => m + (ls.items?.length ?? 0), 0), 0);

if (errors.length) { console.error(`\nErrors (${errors.length}):`); errors.forEach((e) => console.error(`  ✗  ${e}`)); }
const b1Warn = warnings.filter((w) => /ja-u(4[5-9]|5[0-9])/.test(w));
if (b1Warn.length) { console.warn(`\nB1 warnings (${b1Warn.length}):`); b1Warn.forEach((w) => console.warn(`  ⚠  ${w}`)); }

if (errors.length) { console.error(`\nB1 CONSOLIDATED GATE FAILED.`); process.exit(1); }
console.log(`\nB1 CONSOLIDATED GATE OK — ${UNITS.length} A1 + ${a2units.length} A2 + ${B1_DRAFT_UNITS.length} B1 units (${b1Items} B1 items), 0 errors, ${warnings.length} total warning(s).`);
