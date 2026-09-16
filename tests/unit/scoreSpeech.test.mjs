import test from "node:test";
import assert from "node:assert/strict";
import { sttLanguage } from "../../api/score-speech.js";
import { LANGUAGES } from "../../src/data/languages.js";

// The speech endpoint tags each clip with a language before sending it to Scribe.
// It used to do that from an allowlist of ["ja","es","fr"] with EVERYTHING else
// falling through to "ja" — so Portuguese, German and Norwegian speech was
// transcribed as Japanese, silently, and the catalog had grown to 23 languages
// against a list of 3. Alex found the symptom by ear on the French é card.
test("no language in the catalogue is coerced to Japanese", () => {
  for (const l of LANGUAGES) {
    const code = l.code ?? l.id;
    assert.equal(
      sttLanguage(code), code.toLowerCase(),
      `"${code}" is not forwarded as itself — it would be transcribed as another language`
    );
  }
  assert.ok(LANGUAGES.length > 5, "expected the real catalogue");
});

test("a missing or junk language means auto-detect, never a guess", () => {
  for (const junk of [undefined, null, "", "  ", "javascript:", "../ja", 42, ["fr"]]) {
    assert.equal(sttLanguage(junk), null, `${JSON.stringify(junk)} must not become a language tag`);
  }
  assert.equal(sttLanguage("pt-BR"), "pt-br", "a regional tag is still a language");
});
