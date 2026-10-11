// WORDS A LEARNER CANNOT TELL APART BY EAR.
//
// A listening card plays a clip of `front` and offers MEANINGS. If two taught words
// sound the same, both meanings answer "what did you hear" — the learner picks one,
// is marked wrong, and a wrong pick drops a rung (mastery.js). They are punished for
// a question nobody could answer.
//
// WHY THIS IS HAND-MAINTAINED DATA AND NOT DERIVED. It was going to be derived, from
// `reading`. That cannot work: `reading` is an ORTHOGRAPHIC FOLD, not a
// pronunciation, and it is wrong in BOTH directions.
//
//   says SAME, is audibly different   de schön/schon, würde/wurde, hätte/hatte
//                                     no måle/male, humør/humor
//                                     es hablo/habló, trabajo/trabajó
//   says DIFFERENT, is identical      de das/dass, man/der Mann, die Stadt/statt,
//                                     das Meer/mehr, wahr/war
//
// The second row is the one that settled it. Those five German pairs are TRUE
// homophones with both halves taught, and no fold-based probe can ever propose them
// — their spellings share nothing. A list generated from the probe would have
// shipped with all five still live, `das`/`dass` among them: two function words a
// beginner meets constantly. The German crew lead found them by reading the corpus,
// which is the only way they could have been found.
//
// So: `scripts/qa/homophone-candidates.mjs` FEEDS this file; it does not define it.
// Re-run it when units land, add what it proposes if a Curriculum seat confirms, and
// add by hand what it cannot see.
//
// JAPANESE IS NOT HERE, DELIBERATELY. Its reading IS its pronunciation, so
// same-reading items (はい/杯/灰 — yes/cupful/ash) are found in code. 871 items, far
// too many to list, and no judgement needed.
//
// ─────────────────────────────────────────────────────────────────────────────
// HOW THE VERDICTS WERE REACHED, because "someone said so" rots fastest.
//
// THREE Curriculum seats reviewed all 33 probe candidates independently, which was
// an accident worth keeping: the request went to every live seat because nobody knew
// which one was Curriculum, and three answered. 29 of 33 came back unanimous.
//
// The four splits were all the same question — "is this fine vowel or stress
// difference audible to a learner?" — and all in languages where no seat claimed
// authority (German came from the German lead, Norwegian from the Norwegian lead;
// both unanimous). Every split is resolved here as INDISTINGUISHABLE, because the
// costs are not symmetric: excluding a pair loses one distractor, while failing to
// exclude marks a learner wrong on an impossible card and drops a rung. The four are
// marked `split` below.
//
// NORWEGIAN HAS NO ENTRIES AND THAT IS A RESULT, NOT AN OMISSION. All three seats
// agreed its four candidates (måle/male, rømme/romme, humør/humor, sann/sånn) are
// audibly distinct — å/a and ø/o are contrastive vowels. Excluding them would delete
// the contrast Norwegian most needs drilled. Same for the eight German
// indicative/Konjunktiv pairs (hatte/hätte, wurde/würde …): hard cards on purpose.
//
// ─────────────────────────────────────────────────────────────────────────────
// SHAPE: lang -> array of groups. A group is the `front` strings of items that are
// mutually indistinguishable BY EAR. Fronts must match the item exactly, article and
// all ("der Mann", not "Mann") — a front that matches nothing is a silent no-op, so
// tests/unit/sound-alikes.test.mjs asserts every one of them is a real taught word.
//
// BY EAR specifically. A separate question is whether two words are indistinguishable
// when TYPED, which is a different set: Norwegian måle/male fold to the same string
// and the typed grader accepts either, while being plainly different out loud. Same
// pair, opposite answers, so the two must never share one list.
export const SOUND_ALIKES = {
  fr: [
    ["la", "là"],       // both /la/ — the grave is orthographic only. Both u3.
    ["ou", "où"],       // both /u/ — the classic French homophone
    ["sur", "sûr"],     // both /syʁ/ — the circumflex marks no modern contrast
  ],
  es: [
    // Spanish stress IS phonemic, but the tilde diacrítica on monosyllables and
    // interrogatives marks GRAMMAR, not sound. Where the accent moves the stress
    // (esta/está, hablo/habló, trabajo/trabajó) the pair is audible and kept.
    ["el", "él"],
    ["tu", "tú"],
    ["si", "sí"],
    ["que", "qué"],
    ["cuando", "cuándo"],
    ["adonde", "adónde"],
    ["porque", "por qué"], // split 2-1: audible in running speech, but a listening
                           // card plays ONE word with no sentence around it
  ],
  de: [
    ["Sie", "sie"],          // both [ziː]; only the capital differs. Both u3.
    // The five the probe cannot see — found by reading the corpus, not by tooling.
    ["das", "dass"],         // [das] — the worst of them: two constant function words
    ["man", "der Mann"],     // [man]
    ["die Stadt", "statt"],  // [ʃtat]
    ["das Meer", "mehr"],    // [meːɐ̯]
    ["wahr", "war"],         // [vaːɐ̯]
  ],
  pt: [
    // European Portuguese throughout, per the pt constitution — Brazilian would
    // answer differently on porquê and às.
    ["a manhã", "amanhã"], // the only cue is a word boundary, and boundaries are
                           // not audible. All three seats agreed.
    ["porque", "porquê"],  // split 2-1
    ["por", "pôr"],        // split 2-1
    ["às", "as"],          // split 2-1
  ],
};

// Every front that appears in any group for a language, as a flat Set — the shape
// the option builder actually wants.
export function soundAlikeGroups(lang) {
  return SOUND_ALIKES[lang] ?? [];
}
