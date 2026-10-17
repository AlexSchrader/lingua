// FR Unit 1 — Salutations ("Greetings") — A1
// First contact with French: hello/goodbye, the politeness set, and the ça-va
// exchange. AUTHORING CONVENTIONS FOR FRENCH (all fr units):
//   - `front` is real orthography (accents, apostrophes, spaces); `reading` is
//     its ASCII fold (contract requires [a-z]+) — the answer checker folds typed
//     accents back to it, so learners may type either form.
//   - `example.jp` holds the FRENCH sentence (the field name is historical —
//     "jp" = target language); `example.en` the English gloss.
//   - Examples stay inside taught vocab + proper names + transparent cognates
//     (café, pizza, taxi, Paris); the en gloss always carries the meaning.
//   - Nouns are taught WITH their article (le/la/l'/les) so gender is learned
//     as part of the word, never as an afterthought.
//   - DELIBERATE A1 SIMPLIFICATIONS (known tradeoffs, revisit at A2):
//     (a) the partitive (du/de la) is out of scope — examples use the definite
//     article ("Je mange le pain") under the specific-item reading; (b) a few
//     high-frequency function words (au, ce, ans, peut-être) may appear in an
//     example glossed by a hint at first use, before any formal teaching.
// lang/unit/lesson are stamped in index.js.
export const FR_UNIT2 = {
  id: "fr-u2",
  lang: "fr",
  title: "Salutations",
  order: 2,
  stage: "a1",
  lessons: [
    {
      id: "fr-u2l1",
      unit: 2,
      lesson: 1,
      title: "Hello and goodbye",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Greet people and part ways: bonjour, salut, bonsoir, au revoir — plus oui, non and merci.",
      items: [
        { id: "fr-u2l1-bonjour", type: "vocab", front: "bonjour", reading: "bonjour", meaning: "hello", example: { jp: "Bonjour, Marie !", en: "Hello, Marie!" }, drill: { jp: "Bonjour madame ça va bien", en: "Hello madam it's going well" }, accept: ["good morning", "good day", "hi"], hint: "Literally \"good day\" — the all-purpose daytime hello." },
        { id: "fr-u2l1-salut", type: "vocab", front: "salut", reading: "salut", meaning: "hi", example: { jp: "Salut, Paul !", en: "Hi, Paul!" }, drill: { jp: "Salut Paul ça va", en: "Hi Paul how's it going" }, accept: ["hey", "hi there", "bye"], hint: "Casual — friends only. It works for both \"hi\" and \"bye\"." },
        { id: "fr-u2l1-bonsoir", type: "vocab", front: "bonsoir", reading: "bonsoir", meaning: "good evening", example: { jp: "Bonsoir, Marie.", en: "Good evening, Marie." }, drill: { jp: "Bonsoir madame et merci", en: "Good evening madam and thank you" }, accept: ["evening", "good evening!", "good evening", "the greeting used after dark"], hint: "Said \"bon-SWAHR\" — oi is always \"wah\". It is bon + soir, good + evening, and it takes over from bonjour from late afternoon on." },
        { id: "fr-u2l1-aurevoir", type: "vocab", front: "au revoir", reading: "aurevoir", meaning: "goodbye", example: { jp: "Au revoir, Paul !", en: "Goodbye, Paul!" }, drill: { jp: "Au revoir monsieur et merci", en: "Goodbye sir and thank you" }, accept: ["bye", "see you", "goodbye!", "see you later"], hint: "\"oh ruh-VWAHR\" — au is simply \"oh\", and the final r is sounded. Literally \"until the re-seeing\": you are saying see you again, not farewell." },
        { id: "fr-u2l1-merci", type: "vocab", front: "merci", reading: "merci", meaning: "thank you", example: { jp: "Merci, Marie !", en: "Thank you, Marie!" }, drill: { jp: "Oui merci et toi", en: "Yes thanks and you" }, accept: ["thanks", "thank you very much", "thanks a lot", "thank you!"], hint: "\"mair-SEE\", with the stress on the end — French stresses last syllables. Merci beaucoup is thank you very much; a bare merci can also politely decline an offer." },
        { id: "fr-u2l1-oui", type: "vocab", front: "oui", reading: "oui", meaning: "yes", example: { jp: "Oui, merci.", en: "Yes, thank you." }, drill: { jp: "Oui merci ça va bien", en: "Yes thanks it's going well" }, accept: ["yeah", "yep", "yes!", "yup"], hint: "One syllable, \"wee\" — the ou glides straight into the i, never \"oo-ee\". In casual speech you will hear ouais far more often, exactly like English \"yeah\"." },
        { id: "fr-u2l1-non", type: "vocab", front: "non", reading: "non", meaning: "no", example: { jp: "Non, merci.", en: "No, thank you." }, drill: { jp: "Non merci monsieur", en: "No thank you sir" }, accept: ["nope", "no!", "nah"], hint: "\"noh\" — a nasal vowel: the air goes through your nose and your tongue never touches the n. Pair it with merci and you have the polite refusal, non merci." },
      ],
    },
    {
      id: "fr-u2l2",
      unit: 2,
      lesson: 2,
      title: "Being polite",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask politely and apologize: s'il vous plaît, pardon, excusez-moi — and address monsieur / madame.",
      items: [
        { id: "fr-u2l2-silvousplait", type: "vocab", front: "s'il vous plaît", reading: "silvousplait", meaning: "please", example: { jp: "Oui, s'il vous plaît !", en: "Yes, please!" }, drill: { jp: "Oui s'il vous plaît madame", en: "Yes please madam" }, accept: ["please (polite)", "if you please", "please!", "the polite way to ask for something"], hint: "Literally \"if it pleases you\" — the polite please. Typing silvousplait works; accents and apostrophes are optional." },
        { id: "fr-u2l2-pardon", type: "vocab", front: "pardon", reading: "pardon", meaning: "sorry", example: { jp: "Pardon, madame !", en: "Sorry, ma'am!" }, drill: { jp: "Pardon madame et merci", en: "Sorry madam and thank you" }, accept: ["excuse me", "pardon me", "pardon"], hint: "\"par-DOHN\", nasal at the end, no break before the d. Use it when you bump into someone or did not catch what they said; excusez-moi is the one for stopping a stranger." },
        { id: "fr-u2l2-excusezmoi", type: "vocab", front: "excusez-moi", reading: "excusezmoi", meaning: "excuse me", example: { jp: "Excusez-moi, monsieur !", en: "Excuse me, sir!" }, drill: { jp: "Excusez-moi monsieur s'il vous plaît", en: "Excuse me sir please" }, accept: ["sorry", "excuse me (polite)", "pardon me", "excuse me please"], hint: "\"ex-kew-zay MWAH\" — the u is the tight French u and oi is \"wah\". The -ez ending is the polite vous form, so this is the version you use with strangers." },
        { id: "fr-u2l2-monsieur", type: "vocab", front: "monsieur", reading: "monsieur", meaning: "sir", example: { jp: "Bonjour, monsieur.", en: "Hello, sir." }, drill: { jp: "Bonjour monsieur ça va bien", en: "Hello sir it's going well" }, accept: ["mister", "mr", "gentleman"], hint: "Spelled nothing like it sounds: \"muh-SYUH\" — the n and the final r are both silent. The plural messieurs is \"may-SYUH\"; written short it is M." },
        { id: "fr-u2l2-madame", type: "vocab", front: "madame", reading: "madame", meaning: "ma'am", example: { jp: "Bonsoir, madame.", en: "Good evening, ma'am." }, drill: { jp: "Merci madame et au revoir", en: "Thank you madam and goodbye" }, accept: ["madam", "mrs", "lady"], hint: "\"ma-DAM\" — two open a's and a silent final e. It is used for any adult woman now, married or not; mademoiselle has largely dropped out of use. Written short it is Mme." },
        { id: "fr-u2l2-derien", type: "vocab", front: "de rien", reading: "derien", meaning: "you're welcome", example: { jp: "Merci ! — De rien.", en: "Thank you! — You're welcome." }, drill: { jp: "De rien madame", en: "You're welcome madam" }, accept: ["it's nothing", "no problem", "not at all", "don't mention it"], hint: "Literally \"of nothing\" — the everyday reply to merci." },
      ],
    },
    {
      id: "fr-u2l3",
      unit: 2,
      lesson: 3,
      title: "How's it going?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Run the ça-va exchange: ça va ? — ça va bien, merci. Et toi… moi aussi.",
      items: [
        { id: "fr-u2l3-cava", type: "vocab", front: "ça va", reading: "cava", meaning: "how's it going / it's going fine", example: { jp: "Salut, Marie ! Ça va ?", en: "Hi, Marie! How's it going?" }, drill: { jp: "Salut Marie ça va bien", en: "Hi Marie it's going well" }, accept: ["how are you", "i'm fine", "it's going well", "are you ok"], hint: "Question AND answer: \"Ça va ?\" — \"Ça va !\" Same two words both ways." },
        { id: "fr-u2l3-bien", type: "vocab", front: "bien", reading: "bien", meaning: "well", example: { jp: "Ça va bien, merci.", en: "It's going well, thanks." }, drill: { jp: "Ça va très bien merci", en: "It's going very well thanks" }, accept: ["good", "fine", "alright", "okay"], hint: "\"byan\" — one syllable, nasal, finishing in your nose rather than on your tongue. It is the adverb well, so ça va bien; good as an adjective is bon." },
        { id: "fr-u2l3-tres", type: "vocab", front: "très", reading: "tres", meaning: "very", example: { jp: "Très bien, merci !", en: "Very well, thank you!" }, drill: { jp: "Ça va très bien", en: "It's going very well" }, accept: ["really", "very much", "so", "quite"], hint: "\"treh\" — è is the open e of English \"bed\", and the final s stays silent. It stacks in front of anything: très bien, très petit." },
        { id: "fr-u2l3-et", type: "vocab", front: "et", reading: "et", meaning: "and", example: { jp: "Paul et Marie.", en: "Paul and Marie." }, drill: { jp: "Merci et au revoir", en: "Thank you and goodbye" }, accept: ["plus", "and also", "as well as"], hint: "Just \"ay\" — the t is silent and, unusually, never links to a following vowel. Keep it apart from est (is), which sounds like the open \"eh\" of très." },
        { id: "fr-u2l3-aussi", type: "vocab", front: "aussi", reading: "aussi", meaning: "also", example: { jp: "Moi aussi !", en: "Me too!" }, drill: { jp: "Moi aussi ça va bien", en: "Me too I'm doing well" }, accept: ["too", "as well", "likewise"], hint: "\"oh-SEE\" — au is the same \"oh\" as in au revoir, and the ss stays hard. It follows what it adds to, so me too is moi aussi, never \"aussi moi\"." },
        { id: "fr-u2l3-moi", type: "vocab", front: "moi", reading: "moi", meaning: "me", example: { jp: "Et moi ? Moi aussi !", en: "And me? Me too!" }, drill: { jp: "Et moi ça va bien", en: "And me I'm doing well" }, accept: ["i", "myself", "as for me"], hint: "\"mwah\" — oi is always \"wah\". This is the stand-alone me, used alone or after a word like et: et moi ? Its partner for you is toi." },
        { id: "fr-u2l3-toi", type: "vocab", front: "toi", reading: "toi", meaning: "you", example: { jp: "Ça va bien, merci — et toi ?", en: "I'm fine, thanks — and you?" }, drill: { jp: "Ça va bien et toi", en: "It's going well and you" }, accept: ["you (casual)", "you", "yourself", "you after a preposition"], hint: "The stand-alone you, partner of moi: et toi ? = and you? (The you inside sentences, tu, comes as chunks in Unit 2.)" },
      ],
    },
  ],
};
