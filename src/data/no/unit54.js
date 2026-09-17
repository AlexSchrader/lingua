// NO Unit 54 — Tvil og forbehold ("Doubt and hedging") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Hedging and uncertainty"; retitled per CLAUDE.md → "No front
// language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ A2 ALREADY TAUGHT THE MODALS — kunne, ville, skulle, måtte, burde, få — and
// kanskje, sikker, usikker and mulig. So u54 does NOT re-teach "maybe". It
// teaches the layer B1 actually needs: EVIDENTIALITY, which is Norwegian's way
// of marking how you came to know a thing. visstnok (someone told me),
// angivelig (it is claimed but unproved), tilsynelatende (it looks that way),
// ifølge (attributed to a named source) are four different strengths of the same
// move, and an English speaker reaches for "apparently" for all four.
//
// ⚠ THE FALSE FRIEND IN l3 IS THE MOST EXPENSIVE WORD IN THIS UNIT.
// `eventuelt` does NOT mean "eventually" — it means "possibly / if it comes to
// that". A learner who assumes otherwise misreads every Norwegian email that
// ends "ta eventuelt kontakt". Its hint says so in capitals, and `aktuell`
// (u55l2, not "actual") is the sibling trap.
//
// FIRST FEMININE of the unit is `ei opplysning` (l4) — the unit's only feminine
// noun — and it carries the en-/ei- recognition note unit51.js B4 requires.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): å nøle → "anole",
// ifølge → "ifolge".
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT54 = {
  id: "no-u54",
  lang: "no",
  title: "Tvil og det vi ikke vet",
  order: 54,
  stage: "b1",
  lessons: [
    // Lesson 1: the seeming layer. å virke first because every other item in the
    // lesson is a way of saying it more precisely, and because its second sense —
    // a machine that works — is one the learner meets daily.
    {
      id: "no-u54l1",
      unit: 54,
      lesson: 1,
      title: "Hvordan det virker",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report something you did not see for yourself — say it seems so, you assume so, it is probably so, so they say, or so it appears on the face of it.",
      items: [
        { id: "no-u54l1-avirke", type: "vocab", front: "å virke", reading: "avirke", meaning: "to seem", example: { jp: "Han virker trøtt etter en lang dag.", en: "He seems tired after a long day." }, drill: { jp: "Det pleier å virke lett", en: "It usually seems easy" }, accept: ["seem", "to appear", "appear", "to come across as"], hint: "VIR-ke. Present virker, past virket. Two senses one word: to seem (han virker snill) and to work, of a machine or a medicine (den virker ikke). Norwegian hears them as one idea — showing an effect." },
        { id: "no-u54l1-antakelig", type: "vocab", front: "antakelig", reading: "antakelig", meaning: "presumably", example: { jp: "Han kommer antakelig med toget.", en: "He is presumably coming by train." }, drill: { jp: "Hun er antakelig ferdig nå", en: "She is presumably finished now" }, accept: ["probably", "most likely", "I would guess", "presumably"], hint: "an-TA-ke-li — silent g. Straight from å anta: what one may assume. It sits in the middle of the sentence right after the verb, in exactly the slot ikke takes: Han kommer antakelig." },
        { id: "no-u54l1-visstnok", type: "vocab", front: "visstnok", reading: "visstnok", meaning: "apparently", example: { jp: "Han er visstnok syk i dag.", en: "He is apparently ill today." }, drill: { jp: "Butikken er visstnok stengt nå", en: "The shop is apparently closed now" }, accept: ["reportedly", "by all accounts", "so they say", "supposedly"], hint: "VIST-nok. ⚠ This is the word that says WHERE you got it: visstnok means someone told you and you are passing it on without vouching for it. Viss, certain, plus nok, enough — \"certain enough\", said with a shrug." },
        { id: "no-u54l1-tilsynelatende", type: "vocab", front: "tilsynelatende", reading: "tilsynelatende", meaning: "seemingly", example: { jp: "Alt er tilsynelatende bra i dag.", en: "Everything is seemingly fine today." }, drill: { jp: "Han er tilsynelatende rolig nå", en: "He is seemingly calm now" }, accept: ["apparently", "on the face of it", "ostensibly", "to all appearances"], hint: "til-SUE-ne-la-ten-de. Til syne, into view, plus latende, letting — letting itself be seen. The long formal cousin of visstnok, and it quietly hints that the appearance may be wrong." },
        { id: "no-u54l1-atydepa", type: "vocab", front: "å tyde på", reading: "atydepa", meaning: "to indicate", example: { jp: "Alt tyder på at det blir kaldt i morgen.", en: "Everything indicates that it will be cold tomorrow." }, accept: ["to suggest", "to point to", "to indicate that"], drill: { jp: "Alt begynner å tyde på det", en: "Everything is starting to indicate that" }, hint: "å tyde på → tyder på, tydet på. Brukes om tegn og tall, ikke om personer: DU sier noe, men tallene tyder på noe." },
      ],
    },
    // Lesson 2: actual doubt, from the mild (å lure på) to the flat (usannsynlig).
    // The two på-verbs sit together on purpose: å tvile PÅ and å lure PÅ are the
    // pattern, and å stole PÅ in l4 closes the set.
    {
      id: "no-u54l2",
      unit: 54,
      lesson: 2,
      title: "Tvil",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Admit you are not sure — doubt something outright, wonder about it, hesitate, take a guess anyway, and say it is hardly or really not likely.",
      items: [
        { id: "no-u54l2-alure", type: "vocab", front: "å lure på", reading: "alurepa", meaning: "to wonder", example: { jp: "Jeg lurer på hva han mener om saka.", en: "I wonder what he thinks about the matter." }, drill: { jp: "Jeg begynner å lure på noe", en: "I am starting to wonder about something" }, accept: ["wonder", "to wonder about", "to be curious", "to trick"], hint: "LU-re. Present lurer, past lurte. ⚠ Two meanings in one word, and the preposition tells you which: å lure PÅ noe is to wonder about it, å lure NOEN is to trick them." },
        { id: "no-u54l2-anole", type: "vocab", front: "å nøle", reading: "anole", meaning: "to hesitate", example: { jp: "Hun nølte litt før hun svarte.", en: "She hesitated a little before she answered." }, drill: { jp: "Det er lett å nøle her", en: "It is easy to hesitate here" }, accept: ["hesitate", "to pause", "to waver", "to think twice"], hint: "NUR-le. Present nøler, past nølte. Ikke nøl med å ringe — \"don't hesitate to call\" — is how a Norwegian email signs off." },
        { id: "no-u54l2-agjette", type: "vocab", front: "å gjette", reading: "agjette", meaning: "to guess", example: { jp: "Kan du gjette hvor gammel han er?", en: "Can you guess how old he is?" }, drill: { jp: "Det er lett å gjette et tall", en: "It is easy to guess a number" }, accept: ["guess", "to take a guess", "take a guess", "to reckon"], hint: "YET-te — the gj is a plain y. Present gjetter, past gjettet. Gjett hvem! is \"guess who!\", and gjett om jeg var glad is the Norwegian \"you bet I was happy\"." },
        { id: "no-u54l2-neppe", type: "vocab", front: "neppe", reading: "neppe", meaning: "hardly", example: { jp: "Han kommer neppe før klokka ni.", en: "He is hardly going to come before nine o'clock." }, drill: { jp: "Det skjer neppe i dag", en: "That is hardly going to happen today" }, accept: ["unlikely", "scarcely", "I doubt it", "hardly likely"], hint: "NEP-pe. A cousin of knapt, barely, and used where English says \"probably not\": det blir neppe regn. It sits after the verb, in the same slot as ikke." },
        { id: "no-u54l2-usannsynlig", type: "vocab", front: "usannsynlig", reading: "usannsynlig", meaning: "unlikely", example: { jp: "Det er usannsynlig at vi rekker toget.", en: "It is unlikely that we will catch the train." }, drill: { jp: "Det er usannsynlig at han kommer", en: "It is unlikely that he is coming" }, accept: ["improbable", "implausible", "not likely", "far-fetched"], hint: "u-sann-SUEN-li. The u- flips sannsynlig over, the same way it flips enig and sikker. Neuter usannsynlig, plural usannsynlige." },
      ],
    },
    // Lesson 3: the softeners. Every one of these is a word a Norwegian drops into
    // a sentence to avoid sounding categorical, which is a cultural habit as much
    // as a grammatical one. eventuelt is last and carries the false-friend warning.
    {
      id: "no-u54l3",
      unit: 54,
      lesson: 3,
      title: "Nesten og kanskje",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Soften what you are claiming — say more or less, mostly, rather, by the way, sort of, and possibly — so you are not on the hook for the strong version.",
      items: [
        { id: "no-u54l3-noenlunde", type: "vocab", front: "noenlunde", reading: "noenlunde", meaning: "more or less", example: { jp: "Jeg forstår noenlunde hva han sier.", en: "I more or less understand what he is saying." }, drill: { jp: "Hun snakker noenlunde godt norsk", en: "She speaks reasonably good Norwegian" }, accept: ["reasonably", "fairly well", "tolerably", "passably"], hint: "NO-en-lun-ne. Noen plus lunde, an old word for way or manner — \"in some manner\". It is the honest Norwegian \"good enough\": noenlunde bra." },
        { id: "no-u54l3-stortsett", type: "vocab", front: "stort sett", reading: "stortsett", meaning: "mostly", example: { jp: "Stort sett er været bra om sommeren.", en: "Mostly the weather is good in the summer." }, drill: { jp: "Stort sett går alt bra her", en: "Mostly everything goes well here" }, accept: ["for the most part", "generally", "by and large", "on the whole"], hint: "STORT set. Two words, one adverb — literally \"largely seen\". It fronts the clause and drags V2 along with it: Stort sett ER det greit." },
        { id: "no-u54l3-forresten", type: "vocab", front: "forresten", reading: "forresten", meaning: "by the way", example: { jp: "Forresten, har du sett Erling i dag?", en: "By the way, have you seen Erling today?" }, drill: { jp: "Forresten er butikken stengt i dag", en: "By the way the shop is closed today" }, accept: ["incidentally", "anyway", "come to think of it", "by the by"], hint: "for-RES-ten. For plus resten, for the rest — what was left over from what you meant to say. Drop it in anywhere; when it opens the clause, V2 still applies." },
        { id: "no-u54l3-eventuelt", type: "vocab", front: "eventuelt", reading: "eventuelt", meaning: "possibly", example: { jp: "Vi kan eventuelt ta bussen i stedet for.", en: "We could possibly take the bus instead." }, drill: { jp: "Vi kan eventuelt vente litt", en: "We could possibly wait a little" }, accept: ["if need be", "alternatively", "or else", "should it come to that"], hint: "e-ven-tu-ELT. ⚠⚠ FALSE FRIEND, and an expensive one. It does NOT mean \"eventually\". It means possibly, or if it comes to that. English \"eventually\" is etter hvert or til slutt. Ta eventuelt kontakt means get in touch if you need to — not \"get in touch eventually\"." },
        { id: "no-u54l3-savidtjegvet", type: "vocab", front: "så vidt jeg vet", reading: "savidtjegvet", meaning: "as far as I know", example: { jp: "Så vidt jeg vet, er butikken åpen til klokka seks.", en: "As far as I know, the shop is open until six o'clock." }, accept: ["as far as I'm aware", "to my knowledge"], drill: { jp: "Så vidt jeg vet er han hjemme", en: "As far as I know, he is at home" }, hint: "Fast uttrykk som tar forbehold: du sier det du tror, og sier samtidig at du kan ta feil. Merk ordstillingen — setningen etter får verbet først: så vidt jeg vet ER han hjemme." },
      ],
    },
    // Lesson 4: naming the source, which is the half of hedging that is about
    // honesty rather than politeness. å stole and pålitelig close the unit by
    // asking the question the other four raise: do you believe it?
    {
      id: "no-u54l4",
      unit: 54,
      lesson: 4,
      title: "Kilder",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where a claim came from — according to whom, out of what source, on what piece of information, allegedly — and whether the source is one you trust.",
      items: [
        { id: "no-u54l4-enkilde", type: "vocab", front: "en kilde", reading: "enkilde", meaning: "source", example: { jp: "Journalisten har en god kilde i kommunen.", en: "The journalist has a good source in the municipality." }, drill: { jp: "Avisa har en kilde her", en: "The newspaper has a source here" }, accept: ["a source", "a spring", "an origin", "a well"], hint: "KIL-de. Masculine: definite kilden, plural kilder. Literally a spring of water, and Norwegian uses one word for both — en kilde i fjellet and en kilde i regjeringen." },
        { id: "no-u54l4-eiopplysning", type: "vocab", front: "ei opplysning", reading: "eiopplysning", meaning: "piece of information", example: { jp: "Ei opplysning i avisa var viktig for saka.", en: "One piece of information in the newspaper was important for the case." }, drill: { jp: "Vi fikk ei opplysning fra banken", en: "We got a piece of information from the bank" }, accept: ["information", "a detail", "a fact given", "a particular"], hint: "OPP-luess-ning. Feminine: definite opplysninga, plural opplysninger. You will also meet it as ei opplysning / opplysningen in print — Bokmål allows both, and this course writes ei because ei is what tells you the definite ends in -a. Opp plus lys, light: what has been brought to light. The plural opplysninger is what a form asks you to fill in." },
        { id: "no-u54l4-angivelig", type: "vocab", front: "angivelig", reading: "angivelig", meaning: "allegedly", example: { jp: "Han skal angivelig ha sagt det i går.", en: "He allegedly said it yesterday." }, drill: { jp: "Han er angivelig syk i dag", en: "He is allegedly ill today" }, accept: ["supposedly", "reportedly", "purportedly", "so it is claimed"], hint: "an-YI-ve-li — the g at the start is a y, the g at the end is silent. Å angi is to state, or to report someone. Angivelig is what has been stated but not proved: the word a careful journalist uses before a court has decided." },
        { id: "no-u54l4-astole", type: "vocab", front: "å stole på", reading: "astolepa", meaning: "to trust", example: { jp: "Du kan stole på Erling i denne saka.", en: "You can trust Erling in this matter." }, drill: { jp: "Det er lett å stole på henne", en: "It is easy to trust her" }, accept: ["trust", "to rely on", "rely on", "to count on"], hint: "STO-le. Present stoler, past stolte. ⚠ Always with på: jeg stoler PÅ deg. Nothing whatever to do with en stol, a chair — the words only meet by accident." },
        { id: "no-u54l4-palitelig", type: "vocab", front: "pålitelig", reading: "palitelig", meaning: "reliable", example: { jp: "Bussen er ikke pålitelig om vinteren.", en: "The bus is not reliable in the winter." }, drill: { jp: "Han er en pålitelig venn", en: "He is a reliable friend" }, accept: ["dependable", "trustworthy", "sound", "one you can count on"], hint: "paw-LI-te-li — silent g. På plus lite, an old verb meaning to rely, plus -lig: able to be relied on. Neuter pålitelig, plural pålitelige. Norwegian uses it for people, buses and information alike." },
      ],
    },
  ],
};
