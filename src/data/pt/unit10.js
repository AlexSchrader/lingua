// PT Unit 10 — Descrever as coisas ("Describing things") — A1
// The adjectives. Every headword here is the MASCULINE singular and every hint
// names the feminine, because u14 turns that pattern into a rule and this unit
// is where the learner should already have felt it coming.
//
// THREE SPANISH TRAPS LIVE IN THIS UNIT, all of them sited here rather than in a
// later block because their theme is describing (see the unit1.js header and the
// block-2 brief):
//   · largo — u10l1. PT largo = WIDE. ES largo = long. Portuguese for long is
//     comprido, taught on the card immediately before it, so the two sit
//     side by side and the contrast is the lesson.
//   · esquisito — u10l4. PT esquisito = WEIRD, odd. ES exquisito = delicious.
//     Note the spelling: Portuguese writes it with an s, not an x.
//   · embaraçado — u10l4. PT embaraçado = tangled, awkward, ill at ease.
//     ES embarazada = pregnant. Portuguese for pregnant is grávida.
// The block-2 brief offered embaraçado to u10 or u11; taken here under the
// lower-slot-wins rule, so block 3's feelings unit does not need to hold it.
//
// `pequeno` and `bom` are new fronts beside the taught `o pequeno-almoço` and
// `bom dia` — the same deliberate compound/simplex pairing as u1's `a casa` and
// u7's `a casa de banho`. They are not duplicates and must survive merge day.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT10 = {
  id: "pt-u10",
  lang: "pt",
  title: "Descrever as coisas",
  order: 10,
  stage: "a1",
  lessons: [
    // Lesson 1: size and dimension — and the Spanish trap that lives inside it.
    {
      id: "pt-u10l1",
      unit: 10,
      lesson: 1,
      title: "O tamanho",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how big, tall, long or wide something is — and keep comprido and largo apart, which Spanish will try to stop you doing.",
      items: [
        { id: "pt-u10l1-grande", type: "vocab", front: "grande", reading: "grande", meaning: "big", example: { jp: "Lisboa é uma cidade grande.", en: "Lisbon is a big city." }, accept: ["large", "great", "tall"], hint: "GRAN-de. Same for masculine and feminine, like verde. Position changes it: uma cidade grande is a big city, but uma grande cidade is a GREAT one — before the noun it turns into praise." },
        { id: "pt-u10l1-pequeno", type: "vocab", front: "pequeno", reading: "pequeno", meaning: "small", example: { jp: "O museu não é pequeno.", en: "The museum isn't small." }, accept: ["little", "tiny", "short"], hint: "pe-KE-nu; feminine pequena. You already know it hiding inside o pequeno-almoço from Unit 6 — the \"small lunch\" Portugal eats in the morning. Here it stands on its own." },
        { id: "pt-u10l1-alto", type: "vocab", front: "alto", reading: "alto", meaning: "tall", example: { jp: "O homem alto é o pai de Ana.", en: "The tall man is Ana's father." }, accept: ["high", "loud", "the high"], hint: "AL-tu; feminine alta. It does tall, high AND loud — a música está muito alta means the music is too loud. Em voz alta is out loud." },
        { id: "pt-u10l1-baixo", type: "vocab", front: "baixo", reading: "baixo", meaning: "low", example: { jp: "O preço é muito baixo.", en: "The price is very low." }, accept: ["short", "quiet", "the low"], hint: "BY-shu — that x is a \"sh\". The exact mirror of alto: low, short in height, and quiet. Em baixo also means downstairs, and the Baixa is Lisbon's flat downtown." },
        { id: "pt-u10l1-comprido", type: "vocab", front: "comprido", reading: "comprido", meaning: "long", example: { jp: "O comboio é comprido.", en: "The train is long." }, accept: ["lengthy", "the long"], hint: "kom-PREE-du; feminine comprida. This is LONG in space — a long street, long hair. For a long TIME Portuguese uses longo: um longo dia. Its opposite is curto, short." },
        { id: "pt-u10l1-largo", type: "vocab", front: "largo", reading: "largo", meaning: "wide", example: { jp: "O carro é largo, não é comprido.", en: "The car is wide, it isn't long." }, accept: ["broad", "the wide", "square"], hint: "FALSE FRIEND — the big one. Spanish largo is LONG; Portuguese largo is WIDE. Long is comprido, the card before. As a noun um largo is a small town square, smaller than uma praça — you will see it on every street sign in Lisbon." },
      ],
    },
    // Lesson 2: the judgement adjectives. bom/mau are irregular in a way the
    // learner has already been using since bom dia without noticing.
    {
      id: "pt-u10l2",
      unit: 10,
      lesson: 2,
      title: "Bom, mau, bonito, feio",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say whether you think something is good or bad, beautiful or ugly, new or old.",
      items: [
        { id: "pt-u10l2-bom", type: "vocab", front: "bom", reading: "bom", meaning: "good", example: { jp: "O vinho português é muito bom.", en: "Portuguese wine is very good." }, accept: ["fine", "nice", "the good"], hint: "BONG, nasal — the same -m ending as sim and um in Unit 1. Irregular feminine: BOA, not \"boma\", which is why Unit 2 taught boa tarde and boa noite next to bom dia. Plural bons / boas." },
        { id: "pt-u10l2-mau", type: "vocab", front: "mau", reading: "mau", meaning: "bad", example: { jp: "Não é um mau preço.", en: "It isn't a bad price." }, accept: ["evil", "poor", "the bad"], hint: "MAU, one syllable, rhymes with English \"how\". Feminine MÁ, which is as irregular as boa. Do not confuse it with mais, \"more\", or with mão, \"hand\" — three short words, three different sounds." },
        { id: "pt-u10l2-bonito", type: "vocab", front: "bonito", reading: "bonito", meaning: "beautiful", example: { jp: "O elétrico é bonito.", en: "The tram is beautiful." }, accept: ["pretty", "handsome", "lovely", "nice"], hint: "bu-NEE-tu; feminine bonita. Portugal's everyday word for good-looking, of people and things alike. Lindo is stronger, and giro is the slangy one you will hear all day in Lisbon." },
        { id: "pt-u10l2-feio", type: "vocab", front: "feio", reading: "feio", meaning: "ugly", example: { jp: "O hotel não é feio.", en: "The hotel isn't ugly." }, accept: ["unpleasant", "nasty"], hint: "FAY-u, two syllables; feminine feia. It stretches past looks: ficar feio is for behaviour that looks bad, roughly \"that's a bad look\"." },
        { id: "pt-u10l2-novo", type: "vocab", front: "novo", reading: "novo", meaning: "new", example: { jp: "O comboio é novo e rápido.", en: "The train is new and rapid." }, accept: ["young", "brand new", "fresh"], hint: "NO-vu with a closed o, but the feminine opens it right up: NO-va. It also means young of people — ele é novo, he's young. De novo means again." },
        { id: "pt-u10l2-velho", type: "vocab", front: "velho", reading: "velho", meaning: "old", example: { jp: "O museu é velho e famoso.", en: "The museum is old and famous." }, accept: ["ancient", "aged", "the old"], hint: "VE-lyu, lh again; feminine velha. Careful with people: calling someone velho is blunt, and Portuguese prefers idoso, or simply saying the age with ter — tem oitenta anos." },
      ],
    },
    // Lesson 3: the state adjectives — the ones that normally travel with estar
    // rather than ser. u12 makes that split a rule; here it is just a habit.
    {
      id: "pt-u10l3",
      unit: 10,
      lesson: 3,
      title: "Fácil ou difícil?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whether something is easy or hard, clean or dirty, full or empty.",
      items: [
        { id: "pt-u10l3-facil", type: "vocab", front: "fácil", reading: "facil", meaning: "easy", example: { jp: "O português não é fácil!", en: "Portuguese isn't easy!" }, accept: ["simple", "straightforward"], hint: "FA-sil, stress on the first syllable — the accent tells you so. No separate feminine: um livro fácil, uma rua fácil. Plural fáceis, with that -l to -eis swap azul also makes." },
        { id: "pt-u10l3-dificil", type: "vocab", front: "difícil", reading: "dificil", meaning: "difficult", example: { jp: "O trabalho é difícil.", en: "The work is difficult." }, accept: ["hard", "tough", "tricky"], hint: "di-FEE-sil. Same shape as fácil and the same plural, difíceis. Both keep an accent because Portuguese would otherwise stress the last syllable, which is where -l words normally take it." },
        { id: "pt-u10l3-limpo", type: "vocab", front: "limpo", reading: "limpo", meaning: "clean", example: { jp: "O hotel é limpo e moderno.", en: "The hotel is clean and modern." }, accept: ["tidy", "the clean"], hint: "LEEM-pu, nasal; feminine limpa. The verb is limpar, to clean. A limpeza is the cleaning — you will see it on signs in every casa de banho." },
        { id: "pt-u10l3-sujo", type: "vocab", front: "sujo", reading: "sujo", meaning: "dirty", example: { jp: "O carro sujo é de Pedro.", en: "The dirty car is Pedro's." }, accept: ["filthy", "unclean", "messy"], hint: "SOO-zhu — that j is the \"zh\" of measure; feminine suja. Note it is nothing to do with a sopa, and nothing to do with the Spanish sucio, which took a different route from the same Latin word." },
        { id: "pt-u10l3-cheio", type: "vocab", front: "cheio", reading: "cheio", meaning: "full", example: { jp: "O museu é pequeno e é sempre cheio.", en: "The museum is small and it's always full." }, accept: ["crowded", "packed", "filled"], hint: "SHAY-u — ch is always \"sh\", as in a chuva; feminine cheia. Cheio DE something is full of it: cheio de gente, packed with people. Estou cheio after a meal means you could not eat another bite." },
        { id: "pt-u10l3-vazio", type: "vocab", front: "vazio", reading: "vazio", meaning: "empty", example: { jp: "Hoje o mercado está vazio.", en: "Today the market is empty." }, accept: ["vacant", "blank", "the empty"], hint: "va-ZEE-u, stress on the i; feminine vazia. The z is a plain z here, and the whole word is three syllables. Its opposite is cheio, the card before." },
      ],
    },
    // Lesson 4: describing people — and the two Spanish traps that bite hardest
    // exactly when you are describing one.
    {
      id: "pt-u10l4",
      unit: 10,
      lesson: 4,
      title: "Descrever pessoas",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Describe what someone is like — and use esquisito and embaraçado the way Portugal uses them, not the way Spanish would lead you to.",
      items: [
        { id: "pt-u10l4-simpatico", type: "vocab", front: "simpático", reading: "simpatico", meaning: "nice", example: { jp: "O professor é muito simpático.", en: "The teacher is very nice." }, accept: ["friendly", "kind", "likeable", "pleasant"], hint: "seem-PA-ti-ku; feminine simpática. The default compliment for a person in Portugal. It does NOT mean sympathetic — that is compreensivo. Its opposite, antipático, is a genuinely harsh thing to say." },
        { id: "pt-u10l4-esquisito", type: "vocab", front: "esquisito", reading: "esquisito", meaning: "weird", example: { jp: "O queijo é esquisito!", en: "The cheese is weird!" }, accept: ["strange", "odd", "peculiar", "fussy"], hint: "FALSE FRIEND. Spanish exquisito means DELICIOUS; Portuguese esquisito means WEIRD. Say it about the food and you have insulted the cook. Note the spelling — es-, with an s, not ex-. Of a person it means fussy or hard to please." },
        { id: "pt-u10l4-embaracado", type: "vocab", front: "embaraçado", reading: "embaracado", meaning: "tangled", example: { jp: "É um problema embaraçado.", en: "It's a tangled problem." }, accept: ["awkward", "entangled", "ill at ease", "embarrassed"], hint: "FALSE FRIEND, and the one that causes real trouble. Spanish embarazada means PREGNANT; Portuguese embaraçado means tangled, or ill at ease. Pregnant in Portuguese is grávida. Feminine embaraçada — em-ba-ra-SA-da, with the cedilla." },
        { id: "pt-u10l4-forte", type: "vocab", front: "forte", reading: "forte", meaning: "strong", example: { jp: "O café português é muito forte.", en: "Portuguese coffee is very strong." }, accept: ["powerful", "loud", "intense"], hint: "FOR-te, no separate feminine. It covers strong coffee, a strong wind and a loud noise alike. Um forte is also a fort — the ones along the Atlantic coast." },
        { id: "pt-u10l4-fraco", type: "vocab", front: "fraco", reading: "fraco", meaning: "weak", example: { jp: "O chá é fraco.", en: "The tea is weak." }, accept: ["feeble", "poor", "faint"], hint: "FRA-ku; feminine fraca. Weak coffee, a weak signal, a poor performance — um filme fraco is a bad film. Not related to franco, which means frank." },
        { id: "pt-u10l4-jovem", type: "vocab", front: "jovem", reading: "jovem", meaning: "young", example: { jp: "A mulher jovem é a irmã de Ana.", en: "The young woman is Ana's sister." }, accept: ["youthful", "youngster", "young person"], hint: "ZHO-veng — zh, then the nasal -m ending. Same for both genders, and the plural is irregular: jovens. It doubles as a noun, um jovem, a young person. In everyday speech novo often does this job instead." },
      ],
    },
  ],
};
