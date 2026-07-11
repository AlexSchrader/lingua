#!/usr/bin/env node
/**
 * Pre-activation gate for the A2 DRAFT units (ja-u22 … ja-u30).
 *
 * They live in src/data/a2-draft.js, OUTSIDE UNITS (preview-only, invisible to the
 * live app), so the normal `validate:content` / `lint:curriculum` skip them. This
 * runs the SAME validators against UNITS (A1) + A2_DRAFT_UNITS TOGETHER — so A2
 * examples that reuse A1 vocab resolve their prerequisites correctly — and exits
 * non-zero on any error.
 *
 * Run it while refining the drafts, and as the go/no-go check right before the
 * activation step (importing the A2 units into src/data/index.js). It does NOT
 * activate anything.
 */
import { validateContent } from "../src/data/contract.js";
import { lintCurriculum } from "../src/data/lint.js";
import { UNITS, LANGUAGES } from "../src/data/index.js";
import { A2_DRAFT_UNITS } from "../src/data/a2-draft.js";

const all = [...UNITS, ...A2_DRAFT_UNITS];
const contract = validateContent(all, LANGUAGES);
const lint = lintCurriculum(all);
const errors = [...contract.errors, ...lint.errors];
const warnings = [...contract.warnings, ...lint.warnings];

const a2Items = A2_DRAFT_UNITS.reduce(
  (n, u) => n + u.lessons.reduce((m, l) => m + (l.items?.length ?? 0), 0),
  0
);

if (warnings.length) {
  console.warn(`\nWarnings (${warnings.length}):`);
  warnings.forEach((w) => console.warn(`  ⚠  ${w}`));
}

if (errors.length) {
  console.error(`\nErrors (${errors.length}):`);
  errors.forEach((e) => console.error(`  ✗  ${e}`));
  console.error(
    `\nA2 draft gate FAILED — ${errors.length} error(s) in the combined A1+A2 corpus. Fix before activating A2.`
  );
  process.exit(1);
}

console.log(
  `A2 draft gate OK — ${UNITS.length} A1 + ${A2_DRAFT_UNITS.length} A2 draft units ` +
    `(${a2Items} A2 items), 0 errors, ${warnings.length} warning(s).`
);
