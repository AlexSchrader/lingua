// Generate the taught-words list a crew authors against.
//
//   node scripts/generate-taught-words.mjs fr        (or: npm run taught:words -- fr)
//
// Writes src/data/<lang>/TAUGHT-WORDS.md — every word the language already teaches,
// with the unit that owns it, plus the slots still sitting as stubs.
//
// WHY THIS EXISTS, AND WHY IT RUNS AT SCAFFOLD TIME
// ─────────────────────────────────────────────────────────────────────────────
// RUNBOOK §4's load-bearing rule is "every example sentence uses only vocab
// introduced at or before that unit", and its companion "word ownership: lower
// slot number wins." Both need one thing to be checkable: a list of what is
// already taught, and where.
//
// `check-lang-scope.mjs` can only answer that AFTER a merge — it skips every unit
// behind an unauthored stub, so on a crew's own branch (where the sibling blocks
// ARE stubs) it goes quiet by design. That is exactly backwards from when the
// author needs the answer: the rule is cheap to honour while writing an example
// and expensive to repair afterwards, once a whole lesson leans on the wrong word.
//
// So this list is generated ON THE SCAFFOLD BRANCH, BEFORE the crews start, and
// every worktree inherits it. It cannot see a sibling block's in-flight words —
// nothing can, they aren't written yet — but it does carry the entire authored
// corpus the new band sits on top of, which is where most of the ownership and
// teach-before-use questions actually land.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const OUT = "TAUGHT-WORDS.md";

// Accent-insensitive sort key, so é files under e and a French author finds
// "élève" where they look for it.
const fold = (s) =>
  String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const esc = (s) => String(s).replace(/\|/g, "\\|");

export async function collect(lang, root = process.cwd()) {
  const barrel = path.join(root, "src", "data", lang, "index.js");
  if (!fs.existsSync(barrel)) throw new Error(`no barrel at ${barrel}`);
  const mod = await import(pathToFileURL(barrel).href);
  const units = mod[`${lang.toUpperCase()}_UNITS`];
  if (!Array.isArray(units)) throw new Error(`no ${lang.toUpperCase()}_UNITS export in ${barrel}`);

  const authored = [];
  const stubs = [];
  const words = [];
  for (const u of [...units].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))) {
    const playable = (u.lessons ?? []).filter((l) => Array.isArray(l.items));
    const items = playable.flatMap((l) => l.items);
    if (!items.length) {
      stubs.push(u);
      continue;
    }
    authored.push({ unit: u, items });
    for (const it of items) {
      words.push({
        front: it.front,
        meaning: it.meaning ?? "",
        type: it.type,
        order: u.order ?? 0,
        unitId: u.id,
        title: u.title ?? "",
      });
    }
  }
  return { units, authored, stubs, words };
}

export function render(lang, { authored, stubs, words, blocks = [] }) {
  const L = [];
  const stamp = new Date().toISOString().slice(0, 10);

  L.push(`# ${lang.toUpperCase()} — words already taught`);
  L.push("");
  L.push(
    `**Generated file — do not hand-edit.** Regenerate with \`npm run taught:words -- ${lang}\`.`
  );
  L.push(
    `Snapshot ${stamp}: **${words.length} words** across **${authored.length} authored unit(s)**, ` +
      `**${stubs.length} slot(s) still stubs**.`
  );
  L.push("");
  L.push("## How to use this (RUNBOOK §4)");
  L.push("");
  L.push(
    "- **Before you write an example**, check the words in it against the index below. " +
      "A word that is here is free to use; a word that is not is either yours to teach or " +
      "someone else's — see the ownership rule."
  );
  L.push(
    "- **Before you commit to a `front`**, check it here. If it is already taught, " +
      "**the lower slot number owns it** — you use it in examples, you do not re-teach it. " +
      "Check inflectional relatives too, not just the exact string (infinitive vs conjugated " +
      "form, noun vs noun+verb): front-uniqueness passes on exact strings and will happily " +
      "let you teach the same lexeme twice."
  );
  L.push(
    "- **Grep it, don't read it.** It is long on purpose — one line per word is what makes " +
      "the lookup exact."
  );
  L.push("");
  L.push("### What this list cannot tell you");
  L.push("");
  L.push(
    "- **It does not contain the words your sibling blocks are writing right now.** They do " +
      "not exist yet, in this tree or any other. If you need a word a *later* slot will " +
      "plainly own (a grammar unit's tense, a themed unit's domain), assume it is theirs and " +
      "teach around it."
  );
  L.push(
    "- **It is a snapshot.** Regenerate after any merge; the merge seat should regenerate as " +
      "the last step so the next band starts from the truth."
  );
  L.push(
    "- **A word being listed is not a licence to use it in *any* unit** — the rule is taught " +
      "*at or before* your unit. Check the slot number in the index, not just the presence."
  );
  L.push("");

  if (blocks.length) {
    L.push("## Who owns which slots this band");
    L.push("");
    L.push(
      "The block split the scaffold assigned. A word a **later** block will obviously own " +
      "(its grammar tense, its themed domain) is theirs — use it in an example if you must, " +
      "do not teach it. A word an **earlier** block owns is already decided: lower slot wins."
    );
    L.push("");
    L.push("| block | slots |");
    L.push("|---|---|");
    for (const b of blocks) L.push(`| ${b.block} | u${b.from}–u${b.to} |`);
    L.push("");
  }

  if (stubs.length) {
    L.push("## Slots still stubs — not yours unless you were assigned them");
    L.push("");
    L.push("| slot | unit | title |");
    L.push("|---|---|---|");
    for (const u of stubs) L.push(`| ${u.order ?? "?"} | \`${u.id}\` | ${esc(u.title ?? "")} |`);
    L.push("");
  }

  L.push("## Index — every taught word, alphabetical");
  L.push("");
  L.push("`word` — slot · meaning");
  L.push("");
  const sorted = [...words].sort(
    (a, b) => fold(a.front).localeCompare(fold(b.front)) || a.order - b.order
  );
  for (const w of sorted) {
    const m = w.meaning ? ` · ${w.meaning}` : "";
    L.push(`- \`${w.front}\` — u${w.order}${m}`);
  }
  L.push("");

  L.push("## By unit — what each slot teaches");
  L.push("");
  for (const { unit, items } of authored) {
    L.push(
      `**u${unit.order ?? "?"} · ${esc(unit.title ?? unit.id)}** (${items.length}) — ` +
        items.map((it) => `\`${it.front}\``).join(", ")
    );
    L.push("");
  }

  return L.join("\n") + "\n";
}

export async function writeTaughtWords(lang, root = process.cwd(), { blocks = [] } = {}) {
  const data = await collect(lang, root);
  const file = path.join(root, "src", "data", lang, OUT);
  fs.writeFileSync(file, render(lang, { ...data, blocks }));
  return { file, ...data };
}

// --- CLI ---------------------------------------------------------------------
const invokedDirectly =
  process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url;

if (invokedDirectly) {
  const lang = (process.argv[2] || "").toLowerCase();
  if (!/^[a-z]{2}$/.test(lang)) {
    console.error("usage: node scripts/generate-taught-words.mjs <2-letter lang code>");
    process.exit(2);
  }
  try {
    const { file, words, authored, stubs } = await writeTaughtWords(lang);
    console.log(
      `${path.relative(process.cwd(), file)} — ${words.length} words · ` +
        `${authored.length} authored unit(s) · ${stubs.length} stub slot(s)`
    );
  } catch (err) {
    console.error(String(err.message ?? err));
    process.exit(2);
  }
}
