// DE Unit 39 — Das Präteritum: starke Verben (slot: conjugation-2) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// ⚠️ SLOT REPURPOSED — the second half of the pair u38 opened. A1 teaches the Perfekt
// at u14 and never the Präteritum, so a learner finishing German A1 cannot read a
// narrative text of any kind. u38 took the WEAK verbs, where -te is a rule you can
// apply; this unit takes the STRONG verbs, where the vowel changes and there is no
// rule at all — the forms are stored, not built. Approved by Curriculum Claude via
// the crew lead; Norwegian is closing the same template gap the same way.
//
// ⚠️ WHY NOT "Conjugation drill 2": the conjugate card cannot render for German.
// conjugate-latin.js:307 is ENGINES = { es, fr, no }, and conjugate.js:139 falls
// through to JA_VERB_GROUPS for any language it does not know — so a German item
// tagged group/conjForm validates GREEN against Japanese values and renders nothing.
// The contract's error message names godan/ichidan "for de", which reads as an
// instruction to do exactly the wrong thing. No `group` or `conjForm` is authored
// anywhere in this block and the engine was not touched. Logged for Feature CC.
//
// ⚠️ DELIBERATE LEXEME CALL, flagged for the merge seat: these are past forms of
// verbs mostly taught at A1, the same call u14 made for its participles and u38 makes
// for its -te forms. Here the case is at its strongest — no rule takes a learner from
// gehen to ging or from nehmen to nahm, so each form is genuinely new knowledge.
// NOTE for whoever regenerates TAUGHT-WORDS: wurde and stand are the past forms of
// werden and stehen, and NEITHER infinitive is taught anywhere in German A1. That is
// an A1 coverage gap this unit only papers over — worth a look when A1 is next opened.
// Three ß fronts — aß, saß, hieß — with readings hand-written as "ass", "sass" and
// "hiess" per the unit1.js rule.
export const DE_UNIT39 = {
  id: "de-u39",
  lang: "de",
  title: "Das Präteritum: starke Verben",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "de-u39l1",
      unit: 39,
      lesson: 1,
      title: "war, hatte, wurde",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the six past forms that carry most German narrative — was, had, became, there was, went, came.",
      items: [
        { id: "de-u39l1-war", type: "vocab", front: "war", reading: "war", meaning: "was — past of sein", example: { jp: "Das Wetter war schlecht, deshalb blieben wir zu Hause.", en: "The weather was bad, therefore we stayed at home." }, drill: { jp: "Das Wetter war sehr schlecht", en: "The weather was very bad" }, accept: ["was", "were"], hint: "The commonest past form in the language. sein is used in the Präteritum even in speech — nobody says ist gewesen in conversation." },
        { id: "de-u39l1-hatte", type: "vocab", front: "hatte", reading: "hatte", meaning: "had — past of haben", example: { jp: "Er hatte kein Geld, obwohl er lang arbeitete.", en: "He had no money, although he worked for a long time." }, drill: { jp: "Er hatte kein Geld", en: "He had no money" }, accept: ["had"], hint: "Like war, normal in speech where other verbs take the Perfekt. Careful: hätte with an umlaut (u37) means would have." },
        { id: "de-u39l1-wurde", type: "vocab", front: "wurde", reading: "wurde", meaning: "became — past of werden", example: { jp: "Es wurde dunkel, bevor wir nach Hause kamen.", en: "It became dark before we came home." }, drill: { jp: "Es wurde plötzlich sehr dunkel", en: "It suddenly became very dark" }, accept: ["became", "got", "turned"], hint: "werden is to become. Watch the umlaut once more: wurde is a plain past, würde (u37) is would." },
        { id: "de-u39l1-gab", type: "vocab", front: "gab", reading: "gab", meaning: "gave / there was — past of geben", example: { jp: "Es gab damals nur eine Schule in der Stadt.", en: "Back then there was only one school in the town." }, drill: { jp: "Es gab damals keine Schule", en: "Back then there was no school" }, accept: ["gave", "there was", "there were"], hint: "es gibt (u13) becomes es gab. That impersonal there was is far commoner than the plain gave." },
        { id: "de-u39l1-ging", type: "vocab", front: "ging", reading: "ging", meaning: "went — past of gehen", example: { jp: "Sie ging nach Hause, weil sie müde war.", en: "She went home because she was tired." }, drill: { jp: "Sie ging schnell nach Hause", en: "She went home quickly" }, accept: ["went"], hint: "gehen to ging. Nothing in the infinitive warns you the vowel will change — which is the whole reason this unit exists." },
        { id: "de-u39l1-kam", type: "vocab", front: "kam", reading: "kam", meaning: "came — past of kommen", example: { jp: "Der Zug kam spät, obwohl das Wetter gut war.", en: "The train came late, although the weather was good." }, drill: { jp: "Der Zug kam sehr spät", en: "The train came very late" }, accept: ["came"], hint: "kommen to kam, with a long a. Compare English come to came — the two languages happen to change the same way here." },
      ],
    },
    {
      id: "de-u39l2",
      unit: 39,
      lesson: 2,
      title: "e wird a",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use six past forms that all change e to a — the largest single group of strong verbs.",
      items: [
        { id: "de-u39l2-sah", type: "vocab", front: "sah", reading: "sah", meaning: "saw — past of sehen", example: { jp: "Er sah das Kind, bevor es über die Straße ging.", en: "He saw the child before it went across the street." }, drill: { jp: "Er sah das Kind dort", en: "He saw the child there" }, accept: ["saw"], hint: "sehen to sah. Every card in this lesson turns an e into an a — once you hear the pattern, six verbs come at once." },
        { id: "de-u39l2-sprach", type: "vocab", front: "sprach", reading: "sprach", meaning: "spoke — past of sprechen", example: { jp: "Sie sprach lang mit dem Arzt, weil sie krank war.", en: "She spoke with the doctor for a long time because she was ill." }, drill: { jp: "Sie sprach lang mit ihm", en: "She spoke with him a long time" }, accept: ["spoke", "talked"], hint: "sprechen to sprach. The participle changes again — gesprochen — so this one verb gives you three stems to hold." },
        { id: "de-u39l2-nahm", type: "vocab", front: "nahm", reading: "nahm", meaning: "took — past of nehmen", example: { jp: "Er nahm den Bus, obwohl der Weg kurz war.", en: "He took the bus, although the way was short." }, drill: { jp: "Er nahm den Bus nach Hause", en: "He took the bus home" }, accept: ["took"], hint: "nehmen to nahm — the h moves and the vowel lengthens. One of the least predictable forms in the language." },
        { id: "de-u39l2-ass", type: "vocab", front: "aß", reading: "ass", meaning: "ate — past of essen", example: { jp: "Wir aßen zusammen, nachdem die Arbeit fertig war.", en: "We ate together after the work was finished." }, drill: { jp: "Wir aßen zusammen zu Hause", en: "We ate together at home" }, accept: ["ate"], hint: "essen to aß. Type aß or ass — the ß folds to ss, and the stored reading is written with ss." },
        { id: "de-u39l2-las", type: "vocab", front: "las", reading: "las", meaning: "read — past of lesen", example: { jp: "Sie las das Buch, während der Zug fuhr.", en: "She read the book while the train travelled." }, drill: { jp: "Sie las das Buch zweimal", en: "She read the book twice" }, accept: ["read"], hint: "lesen to las. English read is spelled the same in both tenses and German is kinder here — the form is unmistakable." },
        { id: "de-u39l2-half", type: "vocab", front: "half", reading: "half", meaning: "helped — past of helfen", example: { jp: "Der Nachbar half uns, als wir das Auto suchten.", en: "The neighbour helped us when we were looking for the car." }, drill: { jp: "Der Nachbar half uns sehr", en: "The neighbour helped us a lot" }, accept: ["helped"], hint: "helfen to half. It keeps its dative object in the past too: er half UNS, never uns not in the accusative." },
      ],
    },
    {
      id: "de-u39l3",
      unit: 39,
      lesson: 3,
      title: "i wird a, ei wird ie",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use two more strong groups — i turning into a, and ei turning into ie.",
      items: [
        { id: "de-u39l3-fand", type: "vocab", front: "fand", reading: "fand", meaning: "found — past of finden", example: { jp: "Ich fand das Buch, nachdem ich lang gesucht hatte.", en: "I found the book after I had looked for a long time." }, drill: { jp: "Ich fand das Buch dort", en: "I found the book there" }, accept: ["found", "thought"], hint: "finden to fand, i becoming a. Ich fand es gut also means I thought it was good — the same verb carries opinions." },
        { id: "de-u39l3-stand", type: "vocab", front: "stand", reading: "stand", meaning: "stood — past of stehen", example: { jp: "Das Kind stand vor dem Haus und wartete.", en: "The child stood in front of the house and waited." }, drill: { jp: "Das Kind stand vor dem Haus", en: "The child stood in front of the house" }, accept: ["stood"], hint: "stehen to stand — and it lands on exactly the English word, which makes it the easiest card here. aufstehen (u21 group) splits but changes the same way." },
        { id: "de-u39l3-trank", type: "vocab", front: "trank", reading: "trank", meaning: "drank — past of trinken", example: { jp: "Er trank nur Wasser, weil der Kaffee zu heiß war.", en: "He drank only water because the coffee was too hot." }, drill: { jp: "Er trank nur kaltes Wasser", en: "He drank only cold water" }, accept: ["drank"], hint: "trinken to trank, i becoming a like finden. English drink, drank runs in step with it." },
        { id: "de-u39l3-blieb", type: "vocab", front: "blieb", reading: "blieb", meaning: "stayed — past of bleiben", example: { jp: "Wir blieben zu Hause, weil es regnete.", en: "We stayed at home because it was raining." }, drill: { jp: "Wir blieben lang zu Hause", en: "We stayed at home a long time" }, accept: ["stayed", "remained"], hint: "bleiben to blieb, ei becoming ie — the sound goes from EYE to EE. Both cards left in this lesson do the same." },
        { id: "de-u39l3-schrieb", type: "vocab", front: "schrieb", reading: "schrieb", meaning: "wrote — past of schreiben", example: { jp: "Sie schrieb einen Brief, bevor sie ging.", en: "She wrote a letter before she left." }, drill: { jp: "Sie schrieb sehr lang", en: "She wrote for a very long time" }, accept: ["wrote"], hint: "schreiben to schrieb, the same ei to ie as blieb. Learn the pair together and you have the whole group." },
        { id: "de-u39l3-sass", type: "vocab", front: "saß", reading: "sass", meaning: "sat — past of sitzen", example: { jp: "Der Mann saß im Park und las die Zeitung.", en: "The man sat in the park and read the newspaper." }, drill: { jp: "Der Mann saß im Park", en: "The man sat in the park" }, accept: ["sat"], hint: "sitzen to saß — the tz becomes ß, which no other verb in this unit does. Type saß or sass." },
      ],
    },
    {
      id: "de-u39l4",
      unit: 39,
      lesson: 4,
      title: "Weitere starke Verben",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use six more strong past forms, each with its own vowel change to memorise.",
      items: [
        { id: "de-u39l4-fuhr", type: "vocab", front: "fuhr", reading: "fuhr", meaning: "travelled / drove — past of fahren", example: { jp: "Wir fuhren nach Berlin, obwohl das Wetter schlecht war.", en: "We travelled to Berlin, although the weather was bad." }, drill: { jp: "Wir fuhren nach Berlin", en: "We travelled to Berlin" }, accept: ["drove", "travelled", "traveled", "went"], hint: "fahren to fuhr, a becoming u. It takes sein in the Perfekt — ist gefahren — because it is movement." },
        { id: "de-u39l4-lief", type: "vocab", front: "lief", reading: "lief", meaning: "ran / walked — past of laufen", example: { jp: "Das Kind lief schnell, weil der Bus kam.", en: "The child ran quickly because the bus was coming." }, drill: { jp: "Das Kind lief sehr schnell", en: "The child ran very quickly" }, accept: ["ran", "walked", "went"], hint: "laufen to lief, au becoming ie. In southern Germany laufen often just means to walk rather than to run." },
        { id: "de-u39l4-schlief", type: "vocab", front: "schlief", reading: "schlief", meaning: "slept — past of schlafen", example: { jp: "Er schlief lang, weil er sehr müde war.", en: "He slept a long time because he was very tired." }, drill: { jp: "Er schlief sehr lang", en: "He slept a very long time" }, accept: ["slept"], hint: "schlafen to schlief, the same a to ie as laufen to lief. The two rhyme in the past and it is worth hearing that." },
        { id: "de-u39l4-trug", type: "vocab", front: "trug", reading: "trug", meaning: "wore / carried — past of tragen", example: { jp: "Sie trug eine Jacke, obwohl es warm war.", en: "She wore a jacket, although it was warm." }, drill: { jp: "Sie trug eine warme Jacke", en: "She wore a warm jacket" }, accept: ["wore", "carried"], hint: "tragen to trug, a becoming u like fahren to fuhr. Both senses of the verb — wearing and carrying — take the same form." },
        { id: "de-u39l4-hiess", type: "vocab", front: "hieß", reading: "hiess", meaning: "was called — past of heißen", example: { jp: "Der Lehrer hieß Herr Meier, bevor er ging.", en: "The teacher was called Mr Meier before he left." }, drill: { jp: "Der Lehrer hieß Herr Meier", en: "The teacher was called Mr Meier" }, accept: ["was called", "was named"], hint: "heißen to hieß, ei to ie again. Wie hieß er? — what was he called? Type hieß or hiess." },
        { id: "de-u39l4-sang", type: "vocab", front: "sang", reading: "sang", meaning: "sang — past of singen", example: { jp: "Der Chor sang gut, obwohl er wenig übte.", en: "The choir sang well, although it practised little." }, drill: { jp: "Der Chor sang sehr gut", en: "The choir sang very well" }, accept: ["sang"], hint: "singen to sang, i to a like trinken to trank. English sing, sang matches it exactly — a rare free gift." },
      ],
    },
  ],
};
