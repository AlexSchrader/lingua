// Curriculum lint CLI — the single mechanical gate for authored content.
// Runs the hard content contract (validateContent) AND the authoring lint
// (lintCurriculum) so every Part 1 rule from BUILD-BRIEF-curriculum-lint.md is
// enforced in one place. Green here = mechanically sound; language naturalness is
// the separate batched native-speaker gate (brief Part 2).
import { validateContent } from "../src/data/contract.js";
import { lintCurriculum } from "../src/data/lint.js";
import { UNITS, LANGUAGES } from "../src/data/index.js";

const contract = validateContent(UNITS, LANGUAGES);
const lint = lintCurriculum(UNITS);

const errors = [...contract.errors, ...lint.errors];
const warnings = [...contract.warnings, ...lint.warnings];

// WARNINGS GO TO STDOUT, AND THAT IS A FIX, NOT A STYLE CHOICE.
//
// They were `console.warn`, which is STDERR. So `npm run lint:curriculum > file`
// captured the summary line and NONE of the 6,488 warning lines, while that summary
// still read "0 errors, 6488 warning(s)" — healthy-looking output with the entire
// payload missing. A seat then greps the file for a defect class, finds nothing, and
// reports the class clean.
//
// Not hypothetical: the id B2 block-3 seat wrote "lint:curriculum 0 warnings in
// u1NN" into all 13 of its per-unit commit messages. The real number was 48. It had
// redirected with `2>&1 > file`, which is the wrong order and drops stderr, and
// nothing in the output looked wrong.
//
// Warnings are diagnostic output meant to be read and grepped, so stdout is where
// they belong. ERRORS stay on stderr, which is what stderr is for. Nothing parses
// the split — CI runs this for its exit code only (.github/workflows/ci.yml).
if (warnings.length) {
  console.log(`\nCurriculum warnings (${warnings.length}):`);
  warnings.forEach((w) => console.log(`  ⚠  ${w}`));
}

if (errors.length) {
  console.error(`\nCurriculum errors (${errors.length}):`);
  errors.forEach((er) => console.error(`  ✗  ${er}`));
  console.error("\nCurriculum lint FAILED.");
  process.exit(1);
}

console.log(`Curriculum OK — ${UNITS.length} unit(s), 0 errors, ${warnings.length} warning(s).`);
if (warnings.length > 200)
  console.log(
    `⚠  ${warnings.length} warnings is too many to read, so grep it: ` +
      `npm run lint:curriculum | grep "<class>"  — ` +
      `a buried warning is a check nobody runs. The shared-prompt class matters most — grep the phrase that warning starts with.`,
  );
