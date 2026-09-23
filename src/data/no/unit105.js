// NO Unit 105 — Sammensatte følelser (slot: emotion-subtle) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot "Emotion, subtle and mixed", retitled. Conventions: unit1.js §1–§9,
// unit51.js B1–B9, unit88.js C1–C7.
//
// ⚠ TWO BANDS ALREADY TOOK MOST OF THE FEELING LAYER. u17 and u22 own the plain
// ones (glad, redd, sint, lettet, sjalu, stolt); u57 owns B1's finer shades
// (skamfull, oppgitt, rørt, misunnelig, rastløs); u97 owns en anger; u98 owns
// en uvisshet. AND unit88.js C6 says it straight: u91 took the DEGREE-AND-
// HEDGING layer (subtil, påfallende, merkbar, å dempe, å tone ned, markant,
// utpreget, ytterst) — TAKE THE FEELING WORDS, LEAVE THE MEASURING WORDS.
// So this unit is only the feelings B2 adds: the ones made of TWO feelings at
// once (l1), the ones aimed at yourself (l2), the ones aimed at somebody else
// (l3), and the quiet register nobody raises their voice in (l4).
//
// ⚠ "LEXEME" MEANS INFLECTION, NOT DERIVATION (CLAUDE.md / RUNBOOK §4, corrected
// on main 2026-09-23, commit 5928ca20). A word DERIVED from a taught one is a
// DIFFERENT lexeme and MAY be carded; only the SAME word in another form is
// blocked. `SAME` (article variant) and `TAKEN` from check-front.mjs are still
// hard blocks; `LEXEME` is advisory. The fronts below were left out on MERIT —
// twenty-four slots, and these lost — or because the learner genuinely already
// owns them; they are NOT blocked by the lexeme rule and a later block may card
// any of them:
// `ei misunnelse`, `ei likegyldighet`, `ei sjalusi`, `ei glede`. `vemodig` and
// `trassig` are a different case and stay out: they are the adjective of a noun
// THIS unit teaches in the SAME lesson (et vemod, en trass), which is two cards
// for one piece of learning inside one sitting.
//
// GENDER: -het is MASCULINE (en bitterhet, en ømhet), -else is MASCULINE
// (en fortvilelse, en krenkelse, en medfølelse — this is the rule crews get
// wrong most often), -sel is MASCULINE (en lengsel, like en trussel u52), -ing
// is FEMININE (ei undring).
// FIRST FEMININE is `ei undring` (l4) and carries the en-/ei- note.
//
// ⚠ ADJECTIVE DRILLS: an adjective front is the COMMON-GENDER form, so a drill
// must not put a neuter subject in front of it ("et svar er anspent" would need
// anspent → anspent, and the checker rejects the pattern). Every adjective drill
// here uses a person or a common-gender subject.
//
// SCOPE: the frozen base u1–u104 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT105 = {
  id: "no-u105",
  lang: "no",
  title: "Sammensatte følelser",
  order: 105,
  stage: "b2",
  lessons: [
    {
      id: "no-u105l1",
      unit: 105,
      lesson: 1,
      title: "Når to følelser møtes",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that you feel two things at once — and name the mixture rather than picking one half of it.",
      items: [
        { id: "no-u105l1-ambivalent", type: "vocab", front: "ambivalent", reading: "ambivalent", meaning: "ambivalent", example: { jp: "Hun er ambivalent til hele planen, og det er ikke det samme som at hun er imot den.", en: "She is ambivalent about the whole plan, and that is not the same as her being against it." }, accept: ["torn", "of two minds"], drill: { jp: "Han er ambivalent til jobben", en: "He is ambivalent about the job" }, hint: "ambivalent → ambivalent, ambivalente. To følelser SAMTIDIG, begge ekte. Usikker (u22) er å ikke vite; ambivalent er å vite for mye." },
        { id: "no-u105l1-etvemod", type: "vocab", front: "et vemod", reading: "etvemod", meaning: "wistfulness (gentle sadness)", example: { jp: "Det ligger et vemod i bildet, men ingen ville kalle det trist.", en: "There is a wistfulness in the picture, but nobody would call it sad." }, accept: ["melancholy", "wistfulness"], drill: { jp: "Det er et vemod i musikken hans", en: "There is a wistfulness in his music" }, hint: "et vemod → vemodet. Står oftest uten artikkel: med vemod. Adjektivet er vemodig. Trist (u17) gjør vondt; vemod er nesten godt." },
        { id: "no-u105l1-enlengsel", type: "vocab", front: "en lengsel", reading: "enlengsel", meaning: "longing", example: { jp: "Lengselen etter å reise hjem er sterk, og likevel ble hun her i mange år.", en: "The longing to travel home is strong, and still she stayed here for many years." }, accept: ["a yearning", "longing"], drill: { jp: "Hun kjente en lengsel etter noe annet", en: "She felt a longing for something else" }, hint: "en lengsel → lengselen, flertall lengsler. ⚠ -sel er hankjønn, som en trussel (u52). Merk at -el mister e-en i flertall. Alltid etter noe: lengsel ETTER." },
        { id: "no-u105l1-etsavn", type: "vocab", front: "et savn", reading: "etsavn", meaning: "sense of missing something", example: { jp: "Savnet blir ikke mindre med årene, men det tar mindre plass enn før.", en: "The sense of missing him does not get smaller with the years, but it takes up less room than before." }, accept: ["a loss (felt)", "missing something"], drill: { jp: "Det ble et savn som varte lenge", en: "It became a sense of missing that lasted long" }, hint: "et savn → savnet, flertall savn (ubøyd). Fra å savne. En lengsel er mot noe du vil ha; et savn er etter noe du HADDE." },
        { id: "no-u105l1-oppstemt", type: "vocab", front: "oppstemt", reading: "oppstemt", meaning: "elated (lifted)", example: { jp: "Alle var oppstemte etter møtet, og dagen etter husket ingen hvorfor.", en: "Everybody was elated after the meeting, and the day after nobody remembered why." }, accept: ["elated", "in high spirits", "buoyant"], drill: { jp: "Hun var oppstemt etter turen", en: "She was elated after the trip" }, hint: "oppstemt → oppstemt, oppstemte. Opp + å stemme: stemninga er løftet. Sterkere og kortere enn glad (u17) — det går over." },
        { id: "no-u105l1-nedstemt", type: "vocab", front: "nedstemt", reading: "nedstemt", meaning: "downcast", example: { jp: "Han er nedstemt om vinteren hvert år, og han vet godt at det går over om våren.", en: "He is downcast every winter, and he knows perfectly well that it passes in the spring." }, accept: ["low", "dejected", "down"], drill: { jp: "Hun var nedstemt hele uka", en: "She was downcast the whole week" }, hint: "nedstemt → nedstemt, nedstemte. Motsatsen til oppstemt. ⚠ Ordet betyr ALTSÅ også at et forslag tapte en avstemning — konteksten avgjør." },
      ],
    },
    {
      id: "no-u105l2",
      unit: 105,
      lesson: 2,
      title: "Vendt innover",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a feeling you have about yourself — and say what separates it from the one it is usually confused with.",
      items: [
        { id: "no-u105l2-enskam", type: "vocab", front: "en skam", reading: "enskam", meaning: "shame", example: { jp: "Skammen sitter lengre enn skyld, for du kan gjøre opp for noe du gjorde, men ikke for noe du er.", en: "Shame sits longer than guilt, because you can make up for something you did, but not for something you are." }, accept: ["shame"], drill: { jp: "Det ligger en skam i det", en: "There is a shame in it" }, hint: "en skam → skammen. Står oftest uten artikkel: å kjenne skam. Skyld handler om det du GJORDE; skam om den du ER. Skamfull (u57) er adjektivet." },
        { id: "no-u105l2-forlegen", type: "vocab", front: "forlegen", reading: "forlegen", meaning: "embarrassed (ill at ease)", example: { jp: "Han ble forlegen da de takket ham, og det var tydelig at han hadde ventet det.", en: "He got embarrassed when they thanked him, and it was clear that he had expected it." }, accept: ["self-conscious", "awkward"], drill: { jp: "Hun ble forlegen med en gang", en: "She got embarrassed at once" }, hint: "forlegen → forlegent, forlegne. Liten og kortvarig; skam er stor og varig. Brukes også om ordforråd: å være forlegen for ord." },
        { id: "no-u105l2-ydmyk", type: "vocab", front: "ydmyk", reading: "ydmyk", meaning: "humble", example: { jp: "Han er ydmyk når han vinner, og det er nettopp da det er lettest å være det.", en: "He is humble when he wins, and that is exactly when it is easiest to be." }, accept: ["modest", "humble"], drill: { jp: "Hun er ydmyk om arbeidet sitt", en: "She is humble about her work" }, hint: "ydmyk → ydmykt, ydmyke. ⚠ Ikke det samme som å bli ydmyket, som er å bli gjort liten av andre. Ydmyk er noe du VELGER." },
        { id: "no-u105l2-enbitterhet", type: "vocab", front: "en bitterhet", reading: "enbitterhet", meaning: "bitterness", example: { jp: "Bitterheten kom først mange år etterpå, da det var for sent å si noe om det.", en: "The bitterness only came many years afterwards, when it was too late to say anything about it." }, accept: ["bitterness", "rancour"], drill: { jp: "Det er en bitterhet i alt han sier", en: "There is a bitterness in everything he says" }, hint: "en bitterhet → bitterheten. ⚠ -het er ALLTID hankjønn. Fra bitter (u41), som om mat betyr besk. Sinne (u17) er varmt og raskt; bitterhet er kaldt og langt." },
        { id: "no-u105l2-enfortvilelse", type: "vocab", front: "en fortvilelse", reading: "enfortvilelse", meaning: "despair", example: { jp: "Fortvilelsen er ikke det samme som å være trist, for den handler om at ingenting kan gjøres.", en: "Despair is not the same as being sad, because it is about nothing being possible to do." }, accept: ["despair", "desperation"], drill: { jp: "Det ble en fortvilelse ingen kunne dempe", en: "It became a despair nobody could soften" }, hint: "en fortvilelse → fortvilelsen. -else er hankjønn. Adjektivet er fortvilet. Fra tvil (u54): å være HELT i tvil om at noe nytter." },
        { id: "no-u105l2-radvill", type: "vocab", front: "rådvill", reading: "radvill", meaning: "at a loss (not knowing what to do)", example: { jp: "Legen var rådvill, og det var første gang hun sa det høyt til noen.", en: "The doctor was at a loss, and it was the first time she said it out loud to anybody." }, accept: ["at a loss", "perplexed"], drill: { jp: "Han sto rådvill i døra", en: "He stood at a loss in the doorway" }, hint: "rådvill → rådvilt, rådville. Merk å-folden: lesinga er radvill. Et råd (u60) + vill: du finner ikke rådet. Usikker (u22) er om FAKTA, rådvill er om HANDLING." },
      ],
    },
    {
      id: "no-u105l3",
      unit: 105,
      lesson: 3,
      title: "Vendt utover",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a feeling aimed at somebody else — and be precise about how strong it is, because Norwegian is not.",
      items: [
        { id: "no-u105l3-enavsky", type: "vocab", front: "en avsky", reading: "enavsky", meaning: "disgust (revulsion)", example: { jp: "Hun snakker om saka med avsky, mens han bare mener den var dum.", en: "She talks about the case with disgust, while he just thinks it was stupid." }, accept: ["revulsion", "loathing"], drill: { jp: "Han kjente en avsky han ikke ventet", en: "He felt a disgust he did not expect" }, hint: "en avsky → avskyen. Står oftest uten artikkel: med avsky. Verbet er å avsky. Det STERKESTE ordet i denne leksjonen." },
        { id: "no-u105l3-enforakt", type: "vocab", front: "en forakt", reading: "enforakt", meaning: "contempt", example: { jp: "Forakten er verre enn sinne, for den sier at du ikke betyr nok til å bli sint på.", en: "Contempt is worse than anger, because it says you do not matter enough to get angry about." }, accept: ["contempt", "scorn"], drill: { jp: "Det lå en forakt i svaret hans", en: "There was a contempt in his answer" }, hint: "en forakt → forakten. Står oftest uten artikkel: med forakt. Verbet er å forakte. Du ser NED på noen; avsky er å ville vekk fra dem." },
        { id: "no-u105l3-enuvilje", type: "vocab", front: "en uvilje", reading: "enuvilje", meaning: "reluctance (ill will)", example: { jp: "Det er en uvilje mot hele ordningen her, og ingen av dem klarer å si helt hvorfor.", en: "There is a reluctance towards the whole arrangement here, and none of them manage to say exactly why." }, accept: ["unwillingness", "resistance (feeling)"], drill: { jp: "Hun møtte en uvilje hun ikke forsto", en: "She met a reluctance she did not understand" }, hint: "en uvilje → uviljen. U- + en vilje (u62). En motstand (u88) er noe folk GJØR; en uvilje er noe de føler." },
        { id: "no-u105l3-enkrenkelse", type: "vocab", front: "en krenkelse", reading: "enkrenkelse", meaning: "violation (of somebody)", example: { jp: "Det var en krenkelse for henne, og det er nettopp derfor det ikke hjelper at han ikke mente det.", en: "It was a violation to her, and that is exactly why it does not help that he did not mean it." }, accept: ["an offence", "a violation"], drill: { jp: "De kalte det en krenkelse av retten hans", en: "They called it a violation of his right" }, hint: "en krenkelse → krenkelsen, flertall krenkelser. -else er hankjønn. Fra å krenke. Både juridisk (en krenkelse av loven) og personlig — og det er derfor ordet er så omstridt i norsk debatt." },
        { id: "no-u105l3-entrass", type: "vocab", front: "en trass", reading: "entrass", meaning: "defiance", example: { jp: "Han gjør det av ren trass, og han vet godt at det koster ham mer enn det koster dem.", en: "He does it out of pure defiance, and he knows perfectly well that it costs him more than it costs them." }, accept: ["defiance", "stubbornness"], drill: { jp: "Det var en trass i hele svaret", en: "There was a defiance in the whole answer" }, hint: "en trass → trassen. Skrives også tross. Står oftest uten artikkel: av trass. Sta (u31) er hvordan du ER; trass er noe du gjør MOT noen." },
        { id: "no-u105l3-motvillig", type: "vocab", front: "motvillig", reading: "motvillig", meaning: "reluctant", example: { jp: "Hun sa ja motvillig, og det er den delen av historien han alltid glemmer.", en: "She said yes reluctantly, and that is the part of the story he always forgets." }, accept: ["unwilling", "grudging"], drill: { jp: "Han ble med motvillig i går", en: "He came along reluctantly yesterday" }, hint: "motvillig → motvillig, motvillige. -ig-ord får ikke -t i intetkjønn. Mot + vilje. Som adverb betyr det motvillig; som adjektiv beskriver det personen." },
      ],
    },
    {
      id: "no-u105l4",
      unit: 105,
      lesson: 4,
      title: "Det stille registeret",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a quiet state — one nobody raises their voice about, and which you would miss if you only had the loud words.",
      items: [
        { id: "no-u105l4-enomhet", type: "vocab", front: "en ømhet", reading: "enomhet", meaning: "tenderness", example: { jp: "Det er en ømhet i måten han snakker om henne på, selv om de ikke har sett hverandre på år.", en: "There is a tenderness in the way he talks about her, even though they have not seen each other in years." }, accept: ["tenderness", "affection"], drill: { jp: "Det ligger en ømhet i ordene hans", en: "There is a tenderness in his words" }, hint: "en ømhet → ømheten. -het er hankjønn. Merk ø-folden: lesinga er enomhet. Fra øm, som også betyr vond å ta på — og de to tydningene henger sammen." },
        { id: "no-u105l4-enmedfolelse", type: "vocab", front: "en medfølelse", reading: "enmedfolelse", meaning: "compassion", example: { jp: "Medfølelsen er ærlig nok, men den gjør ingenting med det som faktisk er problemet hennes.", en: "The compassion is honest enough, but it does nothing about what is actually her problem." }, accept: ["compassion", "sympathy"], drill: { jp: "Hun møtte en medfølelse hun ikke ventet", en: "She met a compassion she did not expect" }, hint: "en medfølelse → medfølelsen. ⚠ -else er hankjønn, aldri ei. Med + en følelse (u22). Merk ø-folden: lesinga er enmedfolelse. Du føler MED noen; du synes ikke synd på dem." },
        { id: "no-u105l4-eiundring", type: "vocab", front: "ei undring", reading: "eiundring", meaning: "wonder (puzzlement)", example: { jp: "Det er ei undring i måten han spør på, og det er derfor ingen blir sinte når han spør.", en: "There is a wonder in the way he asks, and that is why nobody gets angry when he asks." }, accept: ["wonder", "puzzlement"], drill: { jp: "Det kom ei undring over ansiktet hans", en: "A wonder came over his face" }, hint: "ei undring → undringa. Hunkjønnsord kan du også skrive en undring / undringen; -ing er alltid hunkjønn i denne kursen (regel 1). Fra å undre seg. Både forundring og nysgjerrighet — den norske skolen bruker ordet mye." },
        { id: "no-u105l4-anspent", type: "vocab", front: "anspent", reading: "anspent", meaning: "tense (strained)", example: { jp: "Stemningen var anspent hele dagen, og ingen av dem sa hva det egentlig handlet om.", en: "The mood was tense the whole day, and neither of them said what it was really about." }, accept: ["strained", "on edge"], drill: { jp: "Hun var anspent før møtet", en: "She was tense before the meeting" }, hint: "anspent → anspent, anspente. An + å spenne. Om mennesker OG om stemninger. Stresset (u67) er om arbeidsmengde; anspent er om forholdet mellom folk." },
        { id: "no-u105l4-tafatt", type: "vocab", front: "tafatt", reading: "tafatt", meaning: "helpless (at a loss to act)", example: { jp: "Han sto tafatt og så på, og han sier selv at det er det verste han vet om seg selv.", en: "He stood there helpless and watched, and he says himself that it is the worst thing he knows about himself." }, accept: ["helpless", "ineffectual"], drill: { jp: "Hun ble tafatt da han kom", en: "She was left helpless when he came" }, hint: "tafatt → tafatt, tafatte. Å ta + fatt: du får ikke tak. Rådvill er å ikke VITE hva du skal gjøre; tafatt er å ikke klare å gjøre det." },
        { id: "no-u105l4-henrykt", type: "vocab", front: "henrykt", reading: "henrykt", meaning: "delighted (carried away)", example: { jp: "Hun var henrykt over boka, og hun er ikke et menneske som blir det ofte.", en: "She was delighted with the book, and she is not a person who often is." }, accept: ["enchanted", "thrilled"], drill: { jp: "Han var henrykt over svaret", en: "He was delighted with the answer" }, hint: "henrykt → henrykt, henrykte. Hen + å rykke: noe river deg med seg. Sterkere enn glad (u17) og mer sjeldent — bruk det når du mener det." },
      ],
    },
  ],
};
