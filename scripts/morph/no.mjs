// Norwegian morphology: every surface form a taught front can produce.
//
// SHARED. check-drills.mjs and check-examples.mjs both import this, so the two
// gates cannot disagree about what "taught" means. The German seat's fork of the
// drill checker drifted from ours and grew a real bug — its irregular table was
// keyed by the authored infinitive but looked up folded, so kann, darf, muss and
// will all read as untaught. One resolver, imported twice, cannot do that.
//
// SIX GAPS were closed here after the example gate first ran. They took the
// Norwegian corpus from 43 flagged examples to 20, and the 23 that disappeared
// were the resolver's own false alarms, not content fixes. A seat porting this
// to another language should expect to find its own equivalents of all six, and
// should not trust the output until it has:
//
//   1. STRONG PASTS. IRREG held present forms only, so sa, tok, ga, forsto and
//      bestod — inflections of fronts the table had itself indexed — read as
//      taught nowhere. The single largest source of noise.
//   2. e-FINAL NEUTER DEFINITES. The e-replacement loop produced hjerta, hjerten,
//      hjerter, hjertene and never hjertet, so a unit's own front came back
//      untaught inside that unit's own example. Neuters in -e take a bare -t.
//   3. CONSONANT DOUBLING ON COMPOUNDS. The doubling rule required the whole word
//      match C*VC, which no compound does, so sykehjem never produced
//      sykehjemmet. Test the final syllable, not the whole word.
//   4. MULTIWORD VERB FRONTS. "å skynde seg" was inflected as a whole string,
//      yielding "skynde ser"; the real form skynder was never generated. Inflect
//      the head and keep the reflexive or particle out of it.
//   5. -er ADJECTIVES. usikker -> usikre needs the double consonant to simplify.
//      A plain /er$/ -> "re" gives "usikkre", which is not a word.
//   6. POSSESSIVES. min was taught and indexed; mi, mitt and mine were not, and
//      they share no regular ending with the base.
//
// FOUR MORE turned up the moment the gate was pointed at the sibling branches
// rather than at this one, which is the argument for --merge on its own:
//
//   7. IMPERATIVES. The bare stem was never generated, so husk, slett, besøk,
//      slutt and lag all read as untaught across both other blocks.
//   8. -en ADJECTIVES. sulten -> sultne, same e-drop and consonant simplification
//      as the -er rule.
//   9. DETERMINERS. hvilken -> hvilket/hvilke and friends are irregular.
//  10. IRREGULAR PLURALS. ei rot -> røtter/røttene was absent from IRR_PL, so a
//      unit's own front came back untaught inside its own example again.
//
// An eleventh, not a morphology gap but worth the warning: the -er adjective rule
// was written with a \1 backreference through a shell heredoc and the backslash
// was eaten, leaving a 0x01 control byte. The rule matched nothing and reported
// clean. A regex that cannot fail is worse than no regex — the same shape as the
// \b-in-a-template-literal bug from A1.

const IRREG = {
  være: ["er", "var", "vært"], ha: ["har", "hadde", "hatt"], gå: ["går", "gikk", "gått"],
  gi: ["gir", "ga", "gitt"], se: ["ser", "så", "sett"], bo: ["bor", "bodde", "bodd"],
  forstå: ["forstår", "forsto", "forstått"], stå: ["står", "sto", "stått"],
  vite: ["vet", "visste", "visst"], få: ["får", "fikk", "fått"], si: ["sier", "sa", "sagt"],
  ta: ["tar", "tok", "tatt"], kunne: ["kan", "kunne", "kunnet"], ville: ["vil", "ville"],
  skulle: ["skal", "skulle"], måtte: ["må", "måtte"], burde: ["bør", "burde"],
  bli: ["blir", "ble", "blitt"], gjøre: ["gjør", "gjorde", "gjort"],
  bestå: ["består", "bestod", "besto", "bestått"], spørre: ["spør", "spurte", "spurt"],
  bry: ["bryr", "brydde"], komme: ["kommer", "kom", "kommet"], drikke: ["drikker", "drakk", "drukket"],
  sove: ["sover", "sov", "sovet"], sitte: ["sitter", "satt"], ligge: ["ligger", "lå", "ligget"],
  legge: ["legger", "la", "lagt"], selge: ["selger", "solgte", "solgt"],
  velge: ["velger", "valgte", "valgt"], finne: ["finner", "fant", "funnet"],
  hjelpe: ["hjelper", "hjalp", "hjulpet"], løpe: ["løper", "løp", "løpt"],
  slå: ["slår", "slo", "slått"], skrive: ["skriver", "skrev", "skrevet"],
  lese: ["leser", "leste", "lest"], gjøre_: [], drikk_: [],
};

// Suffixes a FREE (proper-noun / loanword) entry can take.
export const FREE_SUFFIXES = ["en", "et", "a", "er", "ene", "n"];

// front: the authored headword ("en smerte", "å slite", "sunn").
// slot:  an opaque ordering key, passed straight back to add().
// add:   (surfaceForm, slot) => void
export function surfaces(front, slot, add) {
  const i = { front };
  // slot is supplied by the caller: lesson granularity, not unit — the blind
  // spot unit7.js warns about.
  const bare = i.front.replace(/^(en |ei |et |å )/, "").toLowerCase();
  i.front.toLowerCase().split(" ").forEach((w) => add(w, slot));
  add(bare, slot);
  if (/^å /.test(i.front)) {
    // A multiword verb front carries a reflexive or a particle ("å skynde seg"),
    // so inflect the HEAD, not the whole string — otherwise "skynder" reads as
    // untaught because the generator produced "skynde ser".
    const head = bare.split(" ")[0];
    for (const b of new Set([bare, head])) {
      (IRREG[b] || []).forEach((f) => add(f, slot));
      add(b + "r", slot); add(b.replace(/e$/, "er"), slot);
      add(b.replace(/e$/, "te"), slot); add(b.replace(/e$/, "et"), slot); // past
      // kjenne -> kjente, glemme -> glemte: the double consonant collapses.
      add(b.replace(/(nn|mm|ll|tt)e$/, (m) => m[0] + "te"), slot);
      // s-form, both passive and the deponent (finnes, leveres, synes).
      add(b + "s", slot); add(b.replace(/e$/, "es"), slot);
      // IMPERATIVE = the bare stem: husk, slett, besøk, slutt, lag. Missing
      // entirely, so four blocks' worth of ordinary commands read as untaught.
      // It costs a known false NEGATIVE — "et lag" (a team) is homographic with
      // the imperative of "å lage", so an untaught lag now passes. That trade is
      // deliberate: a checker that cries wolf gets switched off, one that misses
      // a homograph gets a second reader.
      add(b.replace(/e$/, ""), slot);
    }
  } else if (/^(en|ei|et) /.test(i.front)) {
    for (const s of ["en", "et", "a", "er", "ene", "ne", "e"]) add(bare + s, slot);
    for (const s of ["a", "en", "er", "ene"]) add(bare.replace(/e$/, s), slot);
    add(bare.replace(/el$/, "ler"), slot);
    // An e-final noun takes a BARE -t in the neuter definite: hjerte -> hjertet,
    // emne -> emnet, belte -> beltet. The e$-replacement loop above produces
    // hjerta/hjerten/hjerter/hjertene and never hjertet, so a unit's own front
    // came back untaught in its own example.
    add(bare + "t", slot);
    // en kollega -> kollegaer/kollegaene, and the -ene variant on the bare stem.
    add(bare.replace(/a$/, "ene"), slot); add(bare + "er", slot); add(bare + "ene", slot);
    // Short nouns double a final single consonant before an ending: rom -> rommet.
    // A COMPOUND does too — sykehjem -> sykehjemmet — so test the last syllable
    // rather than requiring the whole word to be C*VC.
    if (/[aeiouyæøå][bdfglmnprtk]$/.test(bare) && !/[aeiouyæøå]{2}[bdfglmnprtk]$/.test(bare)) {
      const d = bare + bare.slice(-1);
      for (const suf of ["et", "en", "er", "a", "ene"]) add(d + suf, slot);
    }
    const IRR_PL = { tann: ["tenner", "tennene"], bok: ["bøker", "bøkene"], hånd: ["hender", "hendene"],
      fot: ["føtter", "føttene"], bror: ["brødre", "brødrene"], søster: ["søstre", "søstrene"],
      datter: ["døtre", "døtrene"], mann: ["menn", "mennene"], natt: ["netter", "nettene"],
      bonde: ["bønder"], and: ["ender"], far: ["fedre"], mor: ["mødre"], øye: ["øyne", "øynene"],
      rot: ["røtter", "røttene"], bok: ["bøker", "bøkene"], fugl: ["fugler", "fuglene"],
      ku: ["kyr", "kyrne"], barn: ["barn", "barna"], ting: ["ting", "tingene"],
      sko: ["sko", "skoene"], mus: ["mus", "musene"], gås: ["gjess", "gjessene"] };
    (IRR_PL[bare] || []).forEach((f) => add(f, slot));
  } else {
    // adjective/adverb: neuter -t, plural/definite -e, and the COMPARATIVE and
    // SUPERLATIVE, which are inflections of a taught word exactly as the present
    // tense is. Without these, "dyrere" (from dyr) reads as untaught.
    add(bare + "t", slot); add(bare + "e", slot);
    // A BARE front may be a mass/plural-only NOUN (vann, melk, vær, hår, ull,
    // såpe, arbeid, musikk, helse, feber), not only an adjective. Bare fronts
    // went through the adjective branch alone, so no bare noun ever got a
    // definite — "såpa" read as untaught. Found by the block-3 seat.
    // ...but ONLY when the bare front is plausibly a noun. Appending noun endings
    // to a particle invents words: ut (u13) + "en" = "uten", untaught, and it was
    // passing. The particles and adverbs are a closed set, so excluding them is
    // free. Found by the block-3 seat; its scope checker flagged uten while this
    // one waved it through.
    const PARTICLE = new Set(["ut", "inn", "opp", "ned", "bort", "tilbake", "med", "av",
      "etter", "før", "over", "under", "her", "der", "nå", "så", "da", "hjem", "fram"]);
    if (!PARTICLE.has(bare)) {
      for (const suf of ["a", "en", "et", "ene", "ne"]) add(bare + suf, slot);
      add(bare.replace(/e$/, "a"), slot);
    }
    // Neuter -t collapses a final double consonant: grønn -> grønt, tynn -> tynt.
    add(bare.replace(/(nn|mm|ll|tt)$/, (mm) => mm[0] + "t"), slot);
    // -er adjectives drop the e AND simplify the double consonant before a vowel
    // ending: usikker -> usikre, vakker -> vakre. Plain /er$/ -> "re" would have
    // produced "usikkre", which is not a word, so the real form stayed unindexed.
    add(bare.replace(/([bdfglmnprtks])\1?er$/, "$1re"), slot);
    add(bare.replace(/([bdfglmnprtks])\1?er$/, "$1ert"), slot);
    // -en adjectives drop the e and simplify the doubled consonant the same way:
    // sulten -> sultne, and the neuter sultent. Without this, "barna er sultne"
    // reported the taught front sulten as a word taught nowhere, three times
    // across two blocks.
    add(bare.replace(/([bdfglmnprtks])\1?en$/, "$1ne"), slot);
    add(bare.replace(/en$/, "ne"), slot); add(bare.replace(/en$/, "ent"), slot);
    // Determiners inflect like adjectives but irregularly.
    const IRR_DET = { hvilken: ["hvilket", "hvilke"], denne: ["dette", "disse"],
      noen: ["noe", "noen"], ingen: ["ingenting", "intet"], all: ["alt", "alle"] };
    (IRR_DET[bare] || []).forEach((f) => add(f, slot));
    // A taught possessive inflects for gender and number and the forms share no
    // regular ending with the base: min -> mi/mitt/mine.
    const IRR_POSS = { min: ["mi", "mitt", "mine"], din: ["di", "ditt", "dine"],
      sin: ["si", "sitt", "sine"], vår: ["vårt", "våre"], deres: ["deres"] };
    (IRR_POSS[bare] || []).forEach((f) => add(f, slot));
    add(bare + "ere", slot); add(bare + "est", slot); add(bare + "este", slot);
    add(bare + "er", slot); add(bare + "ene", slot); // bare-front nouns pluralise too
    add(bare.replace(/e$/, "ere"), slot); add(bare.replace(/e$/, "est"), slot);
    const IRR_ADJ = { liten: ["lita", "lite", "små", "lille"], gammel: ["gammelt", "gamle"], egen: ["eget", "egne", "egne"], annen: ["annet", "andre"], vakker: ["vakkert", "vakre"], sikker: ["sikkert", "sikre"], ny: ["nytt", "nye"], bra: ["bra"], fri: ["fritt", "frie"], blå: ["blått", "blå"], grå: ["grått", "grå"] };
    (IRR_ADJ[bare] || []).forEach((f) => add(f, slot));
    const IRR_CMP = { stor: ["større", "størst"], liten: ["mindre", "minst"], god: ["bedre", "best"], gammel: ["eldre", "eldst"], ung: ["yngre", "yngst"], lang: ["lengre", "lengst"], mange: ["flere", "flest"], mye: ["mer", "mest"], vond: ["verre", "verst"] };
    (IRR_CMP[bare] || []).forEach((f) => add(f, slot));
  }
}
