import { validateContent } from "../src/data/contract.js";
import { UNITS, LANGUAGES } from "../src/data/index.js";

const { errors, warnings } = validateContent(UNITS, LANGUAGES);

if (warnings.length) {
  console.warn(`\nContent warnings (${warnings.length}):`);
  warnings.forEach((w) => console.warn(`  ⚠  ${w}`));
}

if (errors.length) {
  console.error(`\nContent errors (${errors.length}):`);
  errors.forEach((er) => console.error(`  ✗  ${er}`));
  console.error("\nContent validation FAILED.");
  process.exit(1);
}

console.log(`Content OK — ${UNITS.length} unit(s), 0 errors, ${warnings.length} warning(s).`);
