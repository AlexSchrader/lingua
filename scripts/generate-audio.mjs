#!/usr/bin/env node
/**
 * Generate MP3 pronunciation clips for every item across all units.
 *
 * Usage:
 *   npm run generate:audio               # generate any missing clips, every language
 *   npm run generate:audio -- --lang=fr  # ONE language only
 *   npm run generate:audio -- --force    # regenerate everything (COSTS MONEY)
 *
 * --lang exists because this is a PAID API and the corpus is now multi-language:
 * a bare run walks all 3662 items, and "it only generates what's missing" is a
 * property of what happens to be on disk, not a guarantee you can state before
 * spending. Scope the run and the scope is a fact.
 *
 * Reads ELEVENLABS_API_KEY from .env.local or the environment.
 * Writes to: public/audio/{lang}/{item.id}.mp3
 *
 * Voice: Haruki (server/companions.js). Model: eleven_v3.
 *
 * IMPORTANT — bare call only. Send the RAW character/word as text with just the
 * model. Do NOT add language_code, do NOT convert kana→katakana, do NOT pass
 * custom voice_settings. Those extras wreck isolated-kana pronunciation (rounds
 * #15–#18 chased that dead end). eleven_v3 + a plain call pronounces single kana
 * and words correctly with the voice's own defaults.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, "..");
const FORCE = process.argv.includes("--force");

// Load .env.local into process.env (Vite reads it automatically; Node scripts don't)
try {
  const lines = readFileSync(join(ROOT, ".env.local"), "utf8").split("\n");
  for (const line of lines) {
    const eq = line.indexOf("=");
    if (eq < 1) continue;
    const k = line.slice(0, eq).trim();
    const v = line.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (k && !process.env[k]) process.env[k] = v;
  }
} catch {}

const API_KEY = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) {
  console.error("Missing ELEVENLABS_API_KEY — add it to .env.local");
  process.exit(1);
}

const { COMPANIONS } = await import("../server/companions.js");
const { UNITS } = await import("../src/data/index.js");

// This used to also pull in src/data/a2-draft.js, so Dev-Mode preview cards for the
// then-unauthored A2 units had pronunciation. That import was written to fail
// silently "once A2 activates and a2-draft.js is removed — no edit needed at
// activation time". A2 has activated (55 ja units at stage a2, all in UNITS) and the
// draft file is gone, so the try/catch was permanently catching a file that will
// never exist again. UNITS is now the whole story.

const MODEL_ID = "eleven_v3";

// Flatten every playable item across the live units, stamping lang.
const LANG = (process.argv.find((a) => a.startsWith("--lang=")) || "").split("=")[1] || null;

const items = UNITS.flatMap((unit) =>
  unit.lessons
    .filter((l) => Array.isArray(l.items))
    .flatMap((l) => l.items.map((it) => ({ ...it, lang: unit.lang })))
).filter((it) => !LANG || it.lang === LANG);

if (LANG && !items.length) {
  console.error(`--lang=${LANG} matched no items. Nothing to do.`);
  process.exit(1);
}

// Say what this run will actually cost BEFORE making a single paid call.
const missing = items.filter(
  (it) => FORCE || !existsSync(join(ROOT, "public", "audio", it.lang, `${it.id}.mp3`))
);
console.log(
  `Scope: ${LANG ? `lang=${LANG}` : "ALL languages"}  model: ${MODEL_ID}\n` +
    `  ${items.length} item(s) in scope\n` +
    `  ${missing.length} to generate${FORCE ? " (--force: regenerating everything in scope)" : ""}\n` +
    `  ${items.length - missing.length} already on disk, skipped\n`
);

let done = 0, skipped = 0, errors = 0;

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const voiceId = COMPANIONS[item.lang]?.voiceId;
  if (!voiceId) {
    console.error(`  ERROR  ${item.id}: no companion voice for lang "${item.lang}"`);
    errors++;
    continue;
  }

  const outDir = join(ROOT, "public", "audio", item.lang);
  mkdirSync(outDir, { recursive: true });
  const out = join(outDir, `${item.id}.mp3`);
  const tag = `[${String(i + 1).padStart(3)}/${items.length}] ${item.id}`;

  if (existsSync(out) && !FORCE) {
    skipped++;
    continue;
  }

  // Bare call: raw text + model only. No language_code, no katakana, no voice_settings.
  //
  // Exception — particle-homograph KANA: sent alone, は and へ are read by the voice
  // as the PARTICLE (は→"wa", へ→"e"), not the kana's own sound. For the kana item
  // ONLY, voice the katakana twin (ハ/ヘ), which has no particle meaning, so the
  // character's true sound ("ha"/"he") comes out. The particle VOCAB items (は=wa in
  // U19, へ=e in U20) are type "vocab" and keep their front → correct particle sound.
  // (This is a surgical 2-item fix, not the global kana→katakana conversion the
  // header warns against — that broke other kana; these two are already wrong.)
  const KANA_SOUND_FIX = { "は": "ハ", "へ": "ヘ" };

  // THE VOICE REFUSES A FEW CHARACTERS OUTRIGHT, forever, not transiently. ス
  // (katakana su) returned the 3805-byte silent payload on every attempt across
  // several runs, and the capitalisation retry below does nothing for Japanese —
  // there is no capital ス.
  //
  // Voice its KANA TWIN instead. ス and す are the same syllable in two scripts, so
  // the audio is identical BY DEFINITION — this is not an approximation, and it is
  // the same move KANA_SOUND_FIX makes above in the other direction (は voiced as
  // ハ to get "ha" rather than the particle "wa"). す generates cleanly.
  //
  // A listening card then cannot distinguish ス from す by ear, which is correct:
  // they ARE homophones. Only the written form differs, and the sighted cards test
  // that.
  const KANA_TWIN_FALLBACK = { "ス": "す" };

  const text =
    item.type === "kana" && KANA_SOUND_FIX[item.front] ? KANA_SOUND_FIX[item.front]
    : item.type === "kana" && KANA_TWIN_FALLBACK[item.front] ? KANA_TWIN_FALLBACK[item.front]
    : item.front;

  try {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: "POST",
      headers: {
        "xi-api-key": API_KEY,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({ text, model_id: MODEL_ID }),
    });

    if (!res.ok) {
      const msg = await res.text();
      console.error(`  ERROR  ${tag}: ${res.status} ${msg.slice(0, 140)}`);
      errors++;
      continue;
    }

    // A 200 is NOT proof of audio. ElevenLabs can answer 200 with an EMPTY body
    // (reproduced deliberately: the text "a." returns 200 and 0 bytes). The old
    // code wrote that straight to disk and counted it in `done`, so a paid run
    // reported "0 errors" while leaving a silent card in prod - which is exactly
    // how fr-u6l2-a.mp3 (the French "a" with accent) shipped as 0 bytes uncaught.
    // Empty bodies are usually transient, so retry once, then fail LOUDLY rather
    // than write a file that merely looks generated.
    // The retry CAPITALISES the first character, and that is the point of it: for
    // some glyph fronts the empty body is not transient at all and the identical
    // text fails forever. Measured 2026-09-14 on the pt voice: "ao-tilde" returned
    // 0 bytes on three separate calls while its capitalised twin returned 12582,
    // and "o-acute" alternated between 0 and 3805 on the same text. Capitalising a
    // letter does not change the sound it names, so the clip stays correct - and
    // without this, pt-u1l2/l3 glyph cards were unvoiceable and a paid run just
    // kept reporting errors.
    // A NON-EMPTY BODY IS ALSO NOT PROOF OF AUDIO. The API answers 200 with a
    // valid-but-SILENT mp3 of exactly 3805 bytes — a real container, no voice in it.
    // The 0-byte guard below never saw these, so they were written, counted as
    // generated, and shipped.
    //
    // Measured 2026-09-15 by sweeping every clip on disk: 25 files at EXACTLY 3805
    // bytes, across six languages and three different voices. A byte-identical size
    // across unrelated voices is not a short sound, it is a fixed silent payload.
    // Alex confirmed by ear on five of them: "those 5 have no voice."
    //
    // Sixteen were JAPANESE, including す ま ど ス ナ ノ — kana from units 1–4, the
    // first characters anyone meets. The listening cards routed for them and played
    // silence, and nothing anywhere said so.
    //
    // Treat it exactly like an empty body: retry capitalised, then fail loudly.
    const SILENT_BYTES = 3805;
    let buf = Buffer.from(await res.arrayBuffer());
    // SEVERAL attempts, not one. The silent payload is per-call flaky rather than
    // deterministic - the pt notes above record "o-acute alternated between 0 and
    // 3805 on the same text" - so a single retry loses a coin flip and reports a
    // permanent failure. Katakana su spent two runs looking unfixable for exactly
    // this reason, including one where its own hiragana twin came back silent too.
    //
    // Alternate the text between attempts: plain, capitalised (which rescued the pt
    // letters and is a no-op for Japanese), then plain again. Cheap - it only runs
    // on a clip that would otherwise be thrown away.
    for (let attempt = 1; attempt <= 4 && buf.length <= SILENT_BYTES; attempt++) {
      await new Promise((r) => setTimeout(r, 400 * attempt));
      const retryText = attempt % 2 === 0
        ? text.charAt(0).toUpperCase() + text.slice(1)
        : text;
      const retry = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: "POST",
        headers: { "xi-api-key": API_KEY, "Content-Type": "application/json", Accept: "audio/mpeg" },
        body: JSON.stringify({ text: retryText, model_id: MODEL_ID }),
      });
      if (retry.ok) buf = Buffer.from(await retry.arrayBuffer());
    }
    if (buf.length <= SILENT_BYTES) {
      console.error(`  ERROR  ${tag}: ${buf.length === 0 ? "empty audio body (200 but 0 bytes)" : `silent audio (${buf.length}b <= ${SILENT_BYTES}b, the known silent payload)`} - NOT written`);
      errors++;
      continue;
    }
    writeFileSync(out, buf);
    console.log(`  gen    ${tag}  "${text}"  ${buf.length}b`);
    done++;
  } catch (err) {
    console.error(`  ERROR  ${tag}: ${err.message}`);
    errors++;
  }

  // Brief pause — polite to the API, avoids rate-limit 429s
  if (i < items.length - 1) await new Promise((r) => setTimeout(r, 500));
}

console.log(`\n${done} generated   ${skipped} skipped   ${errors} errors`);
if (errors > 0) process.exit(1);
