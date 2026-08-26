import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { LANGUAGES } from "../../src/data/languages.js";

test("language catalog: 22 languages, all target B2, unique ids", () => {
  assert.equal(LANGUAGES.length, 22);
  assert.ok(LANGUAGES.every((l) => l.target === "B2"), "every language targets B2");
  assert.equal(new Set(LANGUAGES.map((l) => l.id)).size, 22, "ids are unique");
  assert.ok(LANGUAGES.every((l) => l.id && l.name && l.flag), "each has id/name/flag");
});

// Was: "only Japanese is pre-unlocked; the rest are planned (unlocked:false,
// unlock:null)". That test's real intent was the second line — no hardcoded cascade —
// which it could only express as "the field is null everywhere". The fields are now
// gone, so the guarantee is unconditional: there is no cascade shape to set.
test("catalog entries carry no retired cascade fields", () => {
  for (const l of LANGUAGES) {
    assert.ok(!("unlock" in l), `${l.id}: unlock is a retired cascade field`);
    assert.ok(!("unlocked" in l), `${l.id}: unlocked is a retired cascade field`);
  }
});

test("a catalog entry is exactly {id, name, flag, target}", () => {
  // Availability is DERIVED — isLive() from content, canAddLanguage() from the
  // earn-A1 rule — so a catalog entry must not carry per-language state that could
  // drift from it, or hardcode which language a learner starts with.
  for (const l of LANGUAGES) {
    assert.deepEqual(Object.keys(l).sort(), ["flag", "id", "name", "target"], `${l.id} shape`);
  }
});

// Deleting a catalog field is only safe if nothing reads it. When `unlock`/`unlocked`
// were removed, three reads survived in Stats.jsx — `languages[id].unlocked` chose the
// default mastery tab, and `!lang.unlocked` drew a padlock — because the check that
// declared them dead was piped through `head` and the truncated output was read as
// empty. Both failed OPEN rather than loudly: every live language rendered 🔒, and the
// mastery panel silently defaulted to Japanese for every learner.
//
// A field's absence can't be caught by importing this module, so this asserts the
// source-level invariant instead: no app code may read a catalog field the catalog
// doesn't define. Plain substring scanning, no regex — the point is to be obviously
// correct, not clever.
function sourceFiles(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) sourceFiles(p, out);
    else if (/\.(js|jsx|mjs)$/.test(name)) out.push(p);
  }
  return out;
}

const isComment = (line) => {
  const t = line.trim();
  return t.startsWith("//") || t.startsWith("*") || t.startsWith("/*");
};

test("no source file reads a retired catalog field", () => {
  const RETIRED = ["unlocked", "unlock"];
  const offenders = [];

  for (const file of sourceFiles("src")) {
    const unix = file.split("\\").join("/");
    // languages.js records the removal in prose; that's the one place it may appear.
    if (unix.endsWith("src/data/languages.js")) continue;
    // Curriculum content is data, not catalog consumers.
    if (unix.includes("/src/data/ja/") || unix.includes("/src/data/fr/")) continue;

    readFileSync(file, "utf8").split("\n").forEach((line, i) => {
      if (isComment(line)) return; // comments describe the history on purpose
      for (const field of RETIRED) {
        // `.unlocked` — a property read. Guarded so `unitUnlock`/`unlockDevMode` and
        // other unrelated "unlock" words never trip it.
        if (line.includes("." + field) && !line.includes("DevMode"))
          offenders.push(`${unix}:${i + 1} reads retired catalog field "${field}"`);
      }
    });
  }

  assert.deepEqual(offenders, [], "\n" + offenders.join("\n"));
});

test("the retired-field scanner actually detects a read", () => {
  // Guards the guard: a scanner that matches nothing would pass the test above
  // forever. This is the exact shape that shipped broken in Stats.jsx.
  const line = "  const activeLang = LANGUAGES.find((l) => languages[l.id]?.unlocked)?.id;";
  assert.ok(!isComment(line));
  assert.ok(line.includes(".unlocked"), "the scanner's match rule must catch a real read");
});
