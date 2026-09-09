// Fallback morphology for a language with no module of its own.
//
// It indexes the front, its words, and the front minus a leading article or
// infinitive marker — and NOTHING else. That is honest but very weak: every
// inflection of every taught word will read as untaught, which is precisely the
// noise floor that made lint:curriculum's example warnings unusable.
//
// So check-examples.mjs refuses to print a verdict on a language routed here
// unless --generic is passed, and labels the run PARTIAL when it is. Do not
// "fix" a language's findings against this module. Write scripts/morph/<lang>.mjs
// first — start from no.mjs, whose header lists the six gaps every resolver has.

export const FREE_SUFFIXES = [];
export const PARTIAL = true;

// Leading articles and infinitive markers across the languages in the course.
// A conservative union: stripping one that a language does not use costs nothing,
// because the unstripped form is indexed too.
const LEAD = /^(en |ei |et |å |der |die |das |le |la |les |un |une |el |los |las |o |a |os |as |to |il |lo |gli )/i;

export function surfaces(front, slot, add) {
  const f = String(front).toLowerCase();
  add(f, slot);
  f.split(/\s+/).forEach((w) => add(w, slot));
  add(f.replace(LEAD, ""), slot);
}
