// TWO LANGUAGES AT ONCE, BUT NOT TWO THAT BLUR TOGETHER.
//
// Alex, 2026-10-06: "we allow two languages but cant be of same root like spanish
// and french cant be learned together cuz theyre too similar and users may get
// messed up but like say hindi and french or japanese and spanish etc."
//
// The effect is real and well documented — cross-linguistic interference — and it
// is strongest between languages that share vocabulary or a writing system. A
// learner carrying Spanish and French concurrently mixes the two; a learner
// carrying Japanese and Spanish does not, because there is nothing to mix.
//
// WHAT THIS DOES NOT DO: it does not rank languages, gate on progress, or decide
// how many you may carry. It answers one question — do these two interfere? — and
// `canAddLanguage` in useStore.js composes it with the A1 rule.
//
// The tags live on the catalog entries in src/data/languages.js, where the
// reasoning for each one is written down. See that header before changing a tag:
// the groups are judgements about what a LEARNER confuses, not about descent, and
// two of them are deliberately not genealogical.

// Every language a candidate would interfere with, among those already started.
// Returns ids, so the caller can name the actual blocker rather than say "no".
export function conflictsWith(candidateId, startedIds, catalog) {
  const byId = new Map((catalog ?? []).map((l) => [l.id, l]));
  const mine = new Set(byId.get(candidateId)?.similar ?? []);
  if (!mine.size) return []; // untagged language blurs with nothing
  return (startedIds ?? []).filter((id) => {
    if (id === candidateId) return false;
    return (byId.get(id)?.similar ?? []).some((tag) => mine.has(tag));
  });
}

// Convenience for the UI: the FIRST blocker, or null when the pair is fine.
export function blockedBy(candidateId, startedIds, catalog) {
  return conflictsWith(candidateId, startedIds, catalog)[0] ?? null;
}

// Why, in the learner's words. Deliberately names the language they already study
// rather than the tag — "romance" means nothing to anyone, and a gate that will not
// say what it wants reads as a bug.
//
// Does NOT explain the linguistics. A learner who wanted to start Portuguese
// alongside Spanish needs to know it is unavailable and why in one line, not a
// lecture about lexical similarity — see the ND-friction note in CLAUDE.md.
export function conflictReason(candidateId, blockerId, catalog) {
  const name = (id) => (catalog ?? []).find((l) => l.id === id)?.name ?? id;
  return `Too close to ${name(blockerId)} — they'd blur together. Finish one first.`;
}
