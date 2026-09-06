// PT Unit 31 — A personalidade e o feitio ("Personality and character") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Character, not mood. Block 1's u22 owns the FEELINGS (feliz, triste, zangado,
// nervoso, calmo, a alegria, o medo) — the things you are today. This unit owns
// what you are permanently, which in Portuguese is also a grammatical split: a
// trait takes ser (ele É teimoso), a mood takes estar (ele ESTÁ zangado). Every
// card here is a ser adjective, and the hints say so.
//
// `o feitio` is the pt-PT word this unit exists for. Portugal talks about
// somebody's feitio far more than about their "personalidade" — ter bom feitio,
// ter mau feitio — and it has no clean English or Brazilian equivalent.
//
// SPANISH TRAP, carded: `esperto` (u31l2) is CLEVER. Spanish has no "esperto";
// what it has is "experto" (expert) and "despierto" (awake), and an English
// speaker coming through Spanish reads the wrong one. Portuguese for expert is
// um perito.
//
// WORD FAMILIES are a deliberate A2 device across this block: confiar/a confiança
// here, poluir/a poluição in u34, respeitar/o respeito in u32, descobrir/a
// descoberta in u34, casar/o casamento in u39. A stem probe flags every pair; they
// are noun-and-verb taught together on purpose, which is how A2 vocabulary grows.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT31 = {
  id: "pt-u31",
  lang: "pt",
  title: "A personalidade e o feitio",
  order: 31,
  stage: "a2",
  lessons: [
    {
      id: "pt-u31l1",
      unit: 31,
      lesson: 1,
      title: "Como é a pessoa",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe what someone is like as a person rather than how they feel today, and use the Portuguese word Portugal actually reaches for.",
      items: [
        { id: "pt-u31l1-apersonalidade", type: "vocab", front: "a personalidade", reading: "apersonalidade", meaning: "personality", example: { jp: "A personalidade de Ana é muito forte, mas ela é sempre educada.", en: "Ana's personality is very strong, but she is always polite." }, drill: { jp: "A personalidade de Ana é forte", en: "Ana's personality is strong" }, accept: ["the personality", "character"], hint: "per-su-na-li-DA-de, five syllables, stress right at the end like every -dade word — a cidade, a idade, a qualidade. It is the formal word; the everyday one is the next card." },
        { id: "pt-u31l1-ofeitio", type: "vocab", front: "o feitio", reading: "ofeitio", meaning: "nature", example: { jp: "O Tiago tem muito bom feitio e nunca fica zangado com a família.", en: "Tiago has a very good nature and never gets angry with his family." }, drill: { jp: "O feitio de Tiago é bom", en: "Tiago's nature is good" }, accept: ["temperament", "disposition", "character", "the nature"], hint: "fay-TEE-u. THE word this unit exists for — Portugal says ter bom feitio and ter mau feitio far more often than it says personalidade, and neither English nor Brazil has a clean match. Literally it is the \"make\" of a person, from feito." },
        { id: "pt-u31l1-apessoa", type: "vocab", front: "a pessoa", reading: "apessoa", meaning: "person", example: { jp: "A pessoa que trabalha na loja é muito amável.", en: "The person who works in the shop is very kind." }, drill: { jp: "A pessoa da loja é simpática", en: "The person from the shop is nice" }, accept: ["the person", "individual", "someone"], hint: "pe-SO-a. ALWAYS feminine, whoever it describes — o Tiago é uma pessoa simpática, with uma and simpática, never \"um pessoa\". Portuguese gender follows the noun, not the human. Plural as pessoas is the ordinary word for \"people\"." },
        { id: "pt-u31l1-timido", type: "vocab", front: "tímido", reading: "timido", meaning: "shy", example: { jp: "O irmão de Ana é tímido e quase não fala com os outros.", en: "Ana's brother is shy and hardly speaks with others." }, drill: { jp: "O irmão de Ana é tímido", en: "Ana's brother is shy" }, accept: ["timid", "bashful", "reserved"], hint: "TEE-mi-du, stress on the first syllable — the accent tells you. Feminine tímida. It goes with SER, because it is what someone is; estar tímido would mean they have gone shy just for now." },
        { id: "pt-u31l1-amavel", type: "vocab", front: "amável", reading: "amavel", meaning: "kind", example: { jp: "A senhora do banco foi muito amável e explicou o problema outra vez.", en: "The lady at the bank was very kind and explained the problem again." }, drill: { jp: "A senhora do banco é amável", en: "The lady at the bank is kind" }, accept: ["nice", "friendly", "lovely", "gracious"], hint: "a-MA-vel. No separate feminine — like fácil and difícil, the -vel ending serves both; plural amáveis, with the -l to -eis swap. É muito amável da sua parte is the set phrase for \"that's very kind of you\"." },
        { id: "pt-u31l1-educado", type: "vocab", front: "educado", reading: "educado", meaning: "polite", example: { jp: "O meu filho é muito educado e cumprimenta sempre os colegas.", en: "My son is very polite and always greets his colleagues." }, drill: { jp: "O meu filho é muito educado", en: "My son is very polite" }, accept: ["well-mannered", "well brought up", "courteous"], hint: "e-du-KA-du. NOT \"educated\" — that is instruído or formado. Educado is about manners, and Portugal takes it seriously: bem-educado and mal-educado are how people are actually sorted. Feminine educada." },
      ],
    },
    {
      id: "pt-u31l2",
      unit: 31,
      lesson: 2,
      title: "As qualidades",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what is good about someone — generous, honest, hard-working — and avoid the Spanish trap sitting inside the word for clever.",
      items: [
        { id: "pt-u31l2-aqualidade", type: "vocab", front: "a qualidade", reading: "aqualidade", meaning: "quality", example: { jp: "Ser honesto é uma qualidade mais importante do que ser esperto.", en: "Being honest is a more important quality than being clever." }, drill: { jp: "Ele tem a qualidade de ser honesto", en: "He has the quality of being honest" }, accept: ["the quality", "virtue", "good point"], hint: "kwa-li-DA-de — here the qu really is \"kw\", as in quatro. Two jobs, same as English: a good trait in a person, and how well something is made. Its opposite as a trait is o defeito, next lesson." },
        { id: "pt-u31l2-generoso", type: "vocab", front: "generoso", reading: "generoso", meaning: "generous", example: { jp: "O meu avô é muito generoso e ajuda sempre a família.", en: "My grandfather is very generous and always helps the family." }, drill: { jp: "O meu avô é muito generoso", en: "My grandfather is very generous" }, accept: ["giving", "openhanded"], hint: "zhe-ne-RO-zu — that g before e is the \"zh\" of measure, and the single s between vowels says z. Feminine generosa." },
        { id: "pt-u31l2-honesto", type: "vocab", front: "honesto", reading: "honesto", meaning: "honest", example: { jp: "Um médico honesto explica sempre o problema ao doente.", en: "An honest doctor always explains the problem to the patient." }, drill: { jp: "Um médico honesto é importante", en: "An honest doctor is important" }, accept: ["truthful", "upright", "straight"], hint: "u-NESH-tu — the h is silent, as it always is in Portuguese, so the word starts on the o. Feminine honesta; the noun is a honestidade." },
        { id: "pt-u31l2-trabalhador", type: "vocab", front: "trabalhador", reading: "trabalhador", meaning: "hard-working", example: { jp: "O meu pai é muito trabalhador e nunca ficou em casa quando estava doente.", en: "My father is very hard-working and never stayed home when he was ill." }, drill: { jp: "O meu pai é muito trabalhador", en: "My father is very hard-working" }, accept: ["industrious", "diligent", "worker", "hardworking"], hint: "tra-ba-lya-DOR, built on trabalhar from Unit 13. Feminine trabalhadora. It doubles as a noun meaning a worker — os trabalhadores — which is the word you will see on strike posters." },
        { id: "pt-u31l2-corajoso", type: "vocab", front: "corajoso", reading: "corajoso", meaning: "brave", example: { jp: "Ela foi muito corajosa quando teve de falar para a turma.", en: "She was very brave when she had to speak to the class." }, drill: { jp: "Ele é corajoso e trabalhador", en: "He is brave and hard-working" }, accept: ["courageous", "bold", "gutsy"], hint: "ku-ra-ZHO-zu; feminine corajosa. From a coragem, courage — and note the spelling swap that -oso adjectives make: the g of coragem becomes a j here, because Portuguese only writes g for that sound before e and i." },
        { id: "pt-u31l2-esperto", type: "vocab", front: "esperto", reading: "esperto", meaning: "clever", example: { jp: "O gato é muito esperto e consegue abrir a porta da cozinha.", en: "The cat is very clever and manages to open the kitchen door." }, drill: { jp: "O gato é muito esperto", en: "The cat is very clever" }, accept: ["smart", "sharp", "bright", "quick-witted"], hint: "SPANISH TRAP. Spanish has no esperto — it has EXPERTO, an expert, and DESPIERTO, awake, and an English speaker arriving through Spanish grabs the wrong one. Portuguese esperto is street-smart clever, and an expert is um perito. esh-PER-tu; feminine esperta." },
      ],
    },
    {
      id: "pt-u31l3",
      unit: 31,
      lesson: 3,
      title: "Os defeitos",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what is difficult about someone — lazy, stubborn, demanding — without reaching for a word that is ruder than you meant.",
      items: [
        { id: "pt-u31l3-odefeito", type: "vocab", front: "o defeito", reading: "odefeito", meaning: "flaw", example: { jp: "Ser teimoso é um defeito, mas às vezes também ajuda.", en: "Being stubborn is a flaw, but sometimes it helps too." }, drill: { jp: "O defeito é ser muito teimoso", en: "The flaw is being very stubborn" }, accept: ["defect", "fault", "shortcoming", "the flaw"], hint: "de-FAY-tu. A fault in a person AND a fault in an object — um casaco com defeito is one you can take back to the shop. The exact opposite of a qualidade, the first card of the last lesson." },
        { id: "pt-u31l3-preguicoso", type: "vocab", front: "preguiçoso", reading: "preguicoso", meaning: "lazy", example: { jp: "O gato preguiçoso dorme todo o dia no sofá e acorda apenas para comer.", en: "The lazy cat sleeps all day on the sofa and wakes up only to eat." }, drill: { jp: "O gato preguiçoso dorme todo o dia", en: "The lazy cat sleeps all day" }, accept: ["idle", "slothful", "workshy"], hint: "pre-gi-SO-zu — the u after g is silent, and the cedilla keeps the ç soft. Feminine preguiçosa; the noun is a preguiça, which is also the animal, the sloth. It is the exact opposite of trabalhador." },
        { id: "pt-u31l3-teimoso", type: "vocab", front: "teimoso", reading: "teimoso", meaning: "stubborn", example: { jp: "O meu irmão é tão teimoso que nunca muda de opinião, e por isso trabalha melhor em casa.", en: "My brother is so stubborn that he never changes his mind, and so he works better at home." }, drill: { jp: "O meu irmão é muito teimoso", en: "My brother is very stubborn" }, accept: ["obstinate", "pigheaded", "headstrong"], hint: "tay-MO-zu; feminine teimosa. From teimar, to insist. Portugal says it about children and donkeys with equal affection — teimoso como uma mula." },
        { id: "pt-u31l3-egoista", type: "vocab", front: "egoísta", reading: "egoista", meaning: "selfish", example: { jp: "Ele é egoísta e mal-educado, por isso os colegas não gostam de trabalhar com ele.", en: "He is selfish and rude, so his colleagues don't like working with him." }, drill: { jp: "Ele é egoísta e mal-educado", en: "He is selfish and rude" }, accept: ["self-centred", "self-centered", "self-serving"], hint: "e-gu-EESH-ta — the accent on the í splits it from the o, so it is four syllables, not three. Same form for a man and a woman, like every -ista word: um egoísta, uma egoísta." },
        { id: "pt-u31l3-orgulhoso", type: "vocab", front: "orgulhoso", reading: "orgulhoso", meaning: "proud", example: { jp: "O pai está orgulhoso da filha, mas ela acha que ele é orgulhoso de mais para o dizer.", en: "The father is proud of his daughter, but she thinks he is too proud to say it." }, drill: { jp: "O pai está orgulhoso da filha", en: "The father is proud of his daughter" }, accept: ["arrogant", "haughty", "boastful"], hint: "or-gu-LYO-zu, with the lh. It swings both ways, and the verb decides: estar orgulhoso DE something is the warm kind, ser orgulhoso is the cold kind. The noun o orgulho does the same double duty." },
        { id: "pt-u31l3-exigente", type: "vocab", front: "exigente", reading: "exigente", meaning: "demanding", example: { jp: "O professor é muito exigente, mas os estudantes aprendem bastante com ele.", en: "The teacher is very demanding, but the students learn a great deal from him." }, drill: { jp: "O professor é muito exigente", en: "The teacher is very demanding" }, accept: ["strict", "fussy", "hard to please", "particular"], hint: "e-zi-ZHEN-te — that x says a plain z, as it does in exame. No separate feminine. Not automatically an insult: um cliente exigente is just one who knows what he wants." },
      ],
    },
    {
      id: "pt-u31l4",
      unit: 31,
      lesson: 4,
      title: "O comportamento",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about how people behave and whether you can rely on them, using the noun and the verb of the same idea together.",
      items: [
        { id: "pt-u31l4-ocomportamento", type: "vocab", front: "o comportamento", reading: "ocomportamento", meaning: "behaviour", example: { jp: "O comportamento na escola é tão importante como as notas.", en: "Behaviour at school is as important as the marks." }, drill: { jp: "O comportamento na escola é importante", en: "Behaviour at school is important" }, accept: ["behavior", "conduct", "the behaviour"], hint: "kom-por-ta-MEN-tu. Built on portar-se, two cards down — Portuguese makes the noun from the verb by adding -mento, the same way trabalhar could give trabalhamento if it needed to. Brazil spells it identically; this is one that does not diverge." },
        { id: "pt-u31l4-portarse", type: "vocab", front: "portar-se", reading: "portarse", meaning: "to behave", example: { jp: "As crianças portaram-se muito bem no restaurante, o que não acontece sempre.", en: "The children behaved very well in the restaurant, which doesn't always happen." }, drill: { jp: "Portar-se bem é importante", en: "Behaving well is important" }, accept: ["behave", "to conduct oneself", "act"], hint: "Always reflexive — you cannot portar somebody else. Note the enclisis from Unit 13 living in the dictionary form itself: portar-SE, with the hyphen, and it moves in front after não: ele NÃO SE portou bem. Portar alone means to carry, and nobody uses it." },
        { id: "pt-u31l4-confiar", type: "vocab", front: "confiar", reading: "confiar", meaning: "to trust", example: { jp: "Confiar nas pessoas é difícil quando já fomos enganados uma vez.", en: "Trusting people is difficult once we have been deceived." }, drill: { jp: "Confiar nas pessoas é difícil", en: "Trusting people is difficult" }, accept: ["trust", "to rely on", "to confide"], hint: "kon-fi-AR. It takes EM, not \"a\" — confio EM ti, confiar NAS pessoas, so it fuses into no/na/nos/nas the way Unit 12 taught. Confiar algo a alguém, with a, is the other sense: to entrust." },
        { id: "pt-u31l4-aconfianca", type: "vocab", front: "a confiança", reading: "aconfianca", meaning: "trust", example: { jp: "A confiança demora anos a ganhar e um momento a perder.", en: "Trust takes years to earn and a moment to lose." }, drill: { jp: "A confiança é muito importante", en: "Trust is very important" }, accept: ["confidence", "faith", "the trust"], hint: "kon-fi-AN-sa, cedilla. The noun of confiar — this pairing of verb and noun is how most A2 vocabulary actually grows, so learn them as one item. Ter confiança em alguém is to trust them; ter confiança em si is self-confidence." },
        { id: "pt-u31l4-parecer", type: "vocab", front: "parecer", reading: "parecer", meaning: "to seem", example: { jp: "Ele parece calmo, mas quem o conhece sabe que está nervoso.", en: "He seems calm, but anyone who knows him knows he is nervous." }, drill: { jp: "Parecer calmo não é ser calmo", en: "Seeming calm isn't being calm" }, accept: ["seem", "to appear", "to look like"], hint: "pa-re-SER. Parece que… is how Portuguese opens half its opinions — parece que vai chover. Reflexive it changes job entirely: parecer-SE COM alguém is to look like them. As a noun, o parecer is a formal opinion." },
        { id: "pt-u31l4-maleducado", type: "vocab", front: "mal-educado", reading: "maleducado", meaning: "rude", example: { jp: "Foi mal-educado não falar com o empregado do restaurante.", en: "It was rude not to speak to the restaurant waiter." }, drill: { jp: "Ele é mal-educado e egoísta", en: "He is rude and selfish" }, accept: ["impolite", "ill-mannered", "bad-mannered", "uncouth"], hint: "The negative of educado from Lesson 1, and Portugal keeps the hyphen where Brazil often drops it. It is a real accusation here, much stronger than English \"rude\" — it says someone was raised badly, which is exactly what mal-educado means." },
      ],
    },
  ],
};
