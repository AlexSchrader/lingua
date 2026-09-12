// PT Unit 78 — A perceção e os sentidos (slot: coverage-b1-5) — B1
// WHAT THE SENSES DO, AND WHAT YOU DO WITH THEM. A1 u19 gives the corpus ver and
// ouvir — the involuntary half — and nothing else. This unit owns the deliberate
// half (olhar, escutar, observar), the verbs for noticing and mistaking, the
// nouns for what the senses receive, and the attention that decides where they
// point.
//
// SLOT BOUNDARIES:
//   u75 Os adjetivos (block 2) owns the general evaluative adjectives, so this
//   unit deliberately cards NO adjectives — macio, suave and intenso were on the
//   first slate and were dropped to keep the word class whole for that slot.
//   A2 u42 owns áspero, u8 escuro, u10 forte, u30 a luz, u23 a vista — all used
//   in examples here, none re-taught.
//   u57 Emotion (block 1) owns how something FEELS to you; this unit stops at the
//   sense that delivers it.
//
// reparar is carded here as "to notice" (reparar EM), which is its everyday use.
// It is the same verb as to repair, and u87 A manutenção e o conserto therefore
// does NOT card it — that unit takes avariar, estragar and substituir instead.
// The double life is taught in the hint, where it belongs, rather than split
// across two units as if it were two words.
//
// All 24 fronts checked against the regenerated TAUGHT-WORDS.md with the crew
// checker (exact / fold / headword / lexeme). Conventions: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT78 = {
  id: "pt-u78",
  lang: "pt",
  title: "A perceção e os sentidos",
  order: 78,
  stage: "b1",
  lessons: [
    {
      id: "pt-u78l1",
      unit: 78,
      lesson: 1,
      title: "Reparar e notar",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that you noticed something — spotted it, realised it, told two things apart, or mixed them up.",
      items: [
        { id: "pt-u78l1-reparar", type: "vocab", front: "reparar", reading: "reparar", meaning: "to notice", example: { jp: "Reparei na luz da cozinha e vi que ninguém estava em casa.", en: "I noticed the kitchen light and saw that nobody was home." }, drill: { jp: "Vou reparar na luz da cozinha", en: "I'm going to notice the kitchen light" }, accept: ["notice", "to notice", "to spot", "spot", "to note"], hint: "rre-pa-RAR. With em it means to notice: reparaste no carro novo? Without em it means to repair — the same verb fixes a window and spots one, and that little em is what keeps them apart." },
        { id: "pt-u78l1-aperceberse", type: "vocab", front: "aperceber-se", reading: "aperceberse", meaning: "to realise", example: { jp: "Agora apercebi-me da diferença nos dois nomes do livro.", en: "Now I've realised the difference in the two names in the book." }, drill: { jp: "Aperceber-se da diferença é difícil", en: "Realising the difference is hard" }, accept: ["realise", "to realise", "realize", "to realize", "to become aware"], hint: "a-per-se-BER-se, always reflexive and always with de: apercebi-me DO erro. It is the moment the thing arrives in your head, not the looking that got it there." },
        { id: "pt-u78l1-distinguir", type: "vocab", front: "distinguir", reading: "distinguir", meaning: "to tell apart", example: { jp: "É difícil distinguir o som do comboio do som do carro à noite.", en: "It's hard to tell the sound of the train from the sound of the car at night." }, drill: { jp: "Distinguir os dois sons é difícil", en: "Telling the two sounds apart is hard" }, accept: ["distinguish", "to distinguish", "tell apart", "to tell apart", "to make out"], hint: "dish-tin-GEER, the u silent as in guerra. Distinguir A de B is to tell A from B. It also means to single somebody out for praise — foi distinguido com um prémio." },
        { id: "pt-u78l1-confundir", type: "vocab", front: "confundir", reading: "confundir", meaning: "to mix up", example: { jp: "A turma confundiu o nome do professor com o nome do livro.", en: "The class mixed the teacher's name up with the name of the book." }, drill: { jp: "Não quero confundir os dois nomes", en: "I don't want to mix the two names up" }, accept: ["confuse", "to confuse", "mix up", "to mix up", "to muddle"], hint: "kon-fun-DEER. Confundir A com B — with com, where distinguir takes de. Reflexively, confundi-me is the everyday I got it wrong, and it is the politest way to admit it." },
        { id: "pt-u78l1-detetar", type: "vocab", front: "detetar", reading: "detetar", meaning: "to detect", example: { jp: "O técnico detetou o problema do motor logo no primeiro dia.", en: "The technician detected the engine problem on the very first day." }, drill: { jp: "Vou detetar o problema do motor", en: "I'm going to detect the engine problem" }, accept: ["detect", "to detect", "to spot", "to pick up", "to find"], hint: "de-te-TAR. Portugal writes detetar without the c that Brazil keeps in detectar — the 1990 spelling agreement, which dropped silent consonants here. Um detetor is the device." },
        { id: "pt-u78l1-identificar", type: "vocab", front: "identificar", reading: "identificar", meaning: "to identify", example: { jp: "A mãe identificou o cheiro do bolo logo à entrada da casa.", en: "My mother identified the smell of the cake right at the entrance of the house." }, drill: { jp: "A mãe vai identificar o cheiro", en: "My mother is going to identify the smell" }, accept: ["identify", "to identify", "to recognise", "to pick out", "to name"], hint: "i-den-ti-fi-KAR. Putting a name to what you perceived — where reconhecer is knowing you have met it before. Identificar-se is to show your ID." },
      ],
    },
    {
      id: "pt-u78l2",
      unit: 78,
      lesson: 2,
      title: "A vista e o ouvido",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Point your eyes and ears on purpose in Portuguese, and name what reaches them — a sound, a noise, a racket.",
      items: [
        { id: "pt-u78l2-olhar", type: "vocab", front: "olhar", reading: "olhar", meaning: "to look", example: { jp: "Olhei para a janela e vi a chuva na rua.", en: "I looked at the window and saw the rain in the street." }, drill: { jp: "Vou olhar para a janela agora", en: "I'm going to look at the window now" }, accept: ["look", "to look", "to look at", "to gaze"], hint: "u-LYAR, with lh. Olhar PARA is to look at — ver is what the eyes do anyway, olhar is the decision to point them. Olha lá! is how a Portuguese sentence grabs you by the sleeve." },
        { id: "pt-u78l2-escutar", type: "vocab", front: "escutar", reading: "escutar", meaning: "to listen", example: { jp: "A turma escutou a música na aula e ninguém falou.", en: "The class listened to the music in the lesson and nobody spoke." }, drill: { jp: "Vou escutar a música na aula", en: "I'm going to listen to the music in the lesson" }, accept: ["listen", "to listen", "to listen to", "to hear out"], hint: "esh-ku-TAR. The ear's version of olhar: ouvir is hearing, escutar is listening on purpose. A Portuguese doctor escuta o coração; a neighbour who escuta à porta is doing something else entirely." },
        { id: "pt-u78l2-brilhar", type: "vocab", front: "brilhar", reading: "brilhar", meaning: "to shine", example: { jp: "A luz do jardim brilha muito à noite e o cão acorda.", en: "The garden light shines a lot at night and the dog wakes up." }, drill: { jp: "A luz do jardim vai brilhar", en: "The garden light is going to shine" }, accept: ["shine", "to shine", "to glow", "to sparkle"], hint: "bri-LYAR, lh again. Light shines and so does a person who is outstanding — ela brilhou na aula. O brilho is the shine itself, on a shoe or on a career." },
        { id: "pt-u78l2-osom", type: "vocab", front: "o som", reading: "osom", meaning: "sound", example: { jp: "O som do comboio acorda a cidade todas as manhãs.", en: "The sound of the train wakes the city every morning." }, drill: { jp: "O som do comboio é forte", en: "The sound of the train is strong" }, accept: ["the sound", "sound", "noise"], hint: "SOWN, nasal — one syllable. The neutral word: any sound at all, and also the volume knob. Sistema de som is a sound system, and sem som is muted." },
        { id: "pt-u78l2-oruido", type: "vocab", front: "o ruído", reading: "oruido", meaning: "noise", example: { jp: "O ruído da rua é difícil para quem quer dormir.", en: "The noise from the street is hard on anyone trying to sleep." }, drill: { jp: "O ruído da rua é difícil", en: "The noise from the street is hard going" }, accept: ["the noise", "noise", "unwanted sound", "din"], hint: "rru-EE-du, three syllables, the i carrying its own stress. Sound you did not ask for — the technical and legal word, the one on a noise-complaint form. Poluição sonora is its formal cousin." },
        { id: "pt-u78l2-obarulho", type: "vocab", front: "o barulho", reading: "obarulho", meaning: "racket", example: { jp: "O barulho dos carros na rua começa logo de manhã.", en: "The racket of the cars in the street starts first thing in the morning." }, drill: { jp: "O barulho dos carros é forte", en: "The racket of the cars is loud" }, accept: ["the noise", "noise", "racket", "the racket", "din"], hint: "ba-ROO-lyu, lh. The everyday, spoken word where ruído is the official one: que barulho é este? Fazer barulho is to make a noise, and also to cause a stir." },
      ],
    },
    {
      id: "pt-u78l3",
      unit: 78,
      lesson: 3,
      title: "O cheiro e o sabor",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say what something smells and tastes of in Portuguese, and name the sense that got there by hand.",
      items: [
        { id: "pt-u78l3-cheirar", type: "vocab", front: "cheirar", reading: "cheirar", meaning: "to smell", example: { jp: "A cozinha cheira a pão e a família acorda logo.", en: "The kitchen smells of bread and the family wakes up straight away." }, drill: { jp: "A cozinha vai cheirar a pão", en: "The kitchen is going to smell of bread" }, accept: ["smell", "to smell", "to smell of", "to sniff"], hint: "shay-RAR. Cheirar A X is to smell OF X — with a, never de: isto cheira a peixe. On its own, cheira bem and cheira mal do the rest of the work." },
        { id: "pt-u78l3-operfume", type: "vocab", front: "o perfume", reading: "operfume", meaning: "scent", example: { jp: "O perfume das flores do jardim é muito bom.", en: "The scent of the garden flowers is very good." }, drill: { jp: "O perfume das flores é bom", en: "The scent of the flowers is good" }, accept: ["the perfume", "perfume", "scent", "the scent", "fragrance"], hint: "per-FOO-me. The bottle on the shelf and the smell of a flower alike, where cheiro is any smell at all. A perfumaria sells the first and a jardim gives you the second." },
        { id: "pt-u78l3-osabor", type: "vocab", front: "o sabor", reading: "osabor", meaning: "flavour", example: { jp: "O sabor da sopa da minha mãe é sempre melhor.", en: "The flavour of my mother's soup is always better." }, drill: { jp: "O sabor da sopa é melhor", en: "The flavour of the soup is better" }, accept: ["the flavour", "flavour", "the flavor", "flavor", "taste"], hint: "sa-BOR. What the food has, where o gosto is closer to what you make of it. Saber, to know, is the same Latin root — a language where tasting and knowing come from one word." },
        { id: "pt-u78l3-ogosto", type: "vocab", front: "o gosto", reading: "ogosto", meaning: "taste", example: { jp: "O gosto do vinho novo é forte e a família gosta.", en: "The taste of the new wine is strong and the family likes it." }, drill: { jp: "O gosto do vinho é forte", en: "The taste of the wine is strong" }, accept: ["the taste", "taste", "liking", "flavour"], hint: "GOSH-tu. The sense on your tongue and your taste in music at once — tem bom gosto is said of a person, not a soup. Muito gosto is also how you say pleased to meet you." },
        { id: "pt-u78l3-otoque", type: "vocab", front: "o toque", reading: "otoque", meaning: "touch", example: { jp: "O toque do telemóvel acorda a casa toda de manhã.", en: "The ring of the mobile wakes the whole house in the morning." }, drill: { jp: "O toque do telemóvel é forte", en: "The ring of the mobile is loud" }, accept: ["the touch", "touch", "ringtone", "the ring", "ring"], hint: "TO-ke, from tocar. Touch, the ringtone on a phone, and a knock at a door — one noun for all three, because tocar does all three jobs too." },
        { id: "pt-u78l3-opaladar", type: "vocab", front: "o paladar", reading: "opaladar", meaning: "sense of taste", example: { jp: "O paladar da criança muda com a idade e o sabor forte fica bom.", en: "A child's sense of taste changes with age and strong flavour becomes good." }, drill: { jp: "O paladar da criança muda muito", en: "A child's sense of taste changes a lot" }, accept: ["the taste", "taste", "sense of taste", "palate", "the palate"], hint: "pa-la-DAR. The SENSE itself, where o sabor is what the food has and o gosto is what you make of it — three words where English stretches one." },
      ],
    },
    {
      id: "pt-u78l4",
      unit: 78,
      lesson: 4,
      title: "A atenção e a distração",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where your attention is going in Portuguese — watching, concentrating, drifting off, or deliberately not listening.",
      items: [
        { id: "pt-u78l4-observar", type: "vocab", front: "observar", reading: "observar", meaning: "to observe", example: { jp: "O professor observou a turma na aula e escreveu tudo.", en: "The teacher observed the class in the lesson and wrote everything down." }, drill: { jp: "Vou observar a turma na aula", en: "I'm going to observe the class in the lesson" }, accept: ["observe", "to observe", "to watch", "watch", "to study"], hint: "ob-ser-VAR. Longer and more patient than olhar: you observe to learn something. It carries the second English sense too — observar uma regra is to keep to it." },
        { id: "pt-u78l4-concentrarse", type: "vocab", front: "concentrar-se", reading: "concentrarse", meaning: "to concentrate", example: { jp: "É difícil concentrar-se com o barulho dos carros na rua.", en: "It's hard to concentrate with the racket of the cars in the street." }, drill: { jp: "Concentrar-se com barulho é difícil", en: "Concentrating with noise is hard" }, accept: ["concentrate", "to concentrate", "to focus", "focus"], hint: "kon-sen-TRAR-se. Reflexive, and it takes em for what you focus on: concentrar-se NO trabalho. Without the pronoun it is what a factory does to juice." },
        { id: "pt-u78l4-distrairse", type: "vocab", front: "distrair-se", reading: "distrairse", meaning: "to get distracted", example: { jp: "A turma distraiu-se com o telemóvel e ninguém ouviu o professor.", en: "The class got distracted by the mobile and nobody heard the teacher." }, drill: { jp: "Distrair-se na aula é fácil", en: "Getting distracted in the lesson is easy" }, accept: ["get distracted", "to get distracted", "to be distracted", "to take your mind off"], hint: "dish-tra-EER-se, with com for whatever pulled you away. Its other face is kinder: distrair-se is also to take your mind off things on purpose, which is what a walk is for." },
        { id: "pt-u78l4-ignorar", type: "vocab", front: "ignorar", reading: "ignorar", meaning: "to ignore", example: { jp: "O vizinho ignorou o barulho da rua e foi dormir.", en: "The neighbour ignored the racket from the street and went to sleep." }, drill: { jp: "Vou ignorar o barulho da rua", en: "I'm going to ignore the racket from the street" }, accept: ["ignore", "to ignore", "to disregard", "to not know"], hint: "ig-nu-RAR. Careful — it has a second sense English has lost: ignoro a resposta means I do not know the answer, with no rudeness in it at all." },
        { id: "pt-u78l4-osilencio", type: "vocab", front: "o silêncio", reading: "osilencio", meaning: "silence", example: { jp: "O silêncio da noite no jardim é bom para quem quer dormir.", en: "The silence of the night in the garden is good for anyone who wants to sleep." }, drill: { jp: "O silêncio da noite é bom", en: "The silence of the night is good" }, accept: ["the silence", "silence", "quiet", "the quiet"], hint: "si-LEN-si-u. Em silêncio is in silence, and silêncio! on its own is the teacher's word. Portuguese also keeps the polite formula um minuto de silêncio for what a country does together." },
        { id: "pt-u78l4-vigiar", type: "vocab", front: "vigiar", reading: "vigiar", meaning: "to keep watch on", example: { jp: "O vizinho vigiou a casa toda a noite porque o cão não ficou calmo.", en: "The neighbour kept watch on the house all night because the dog wouldn't settle." }, drill: { jp: "O vizinho vai vigiar a casa", en: "The neighbour is going to keep watch on the house" }, accept: ["watch", "to watch", "to keep watch on", "to guard", "to keep an eye on"], hint: "vi-zhi-AR. Watching to keep something safe, or to catch someone out — a guard, a parent, a camera. Um vigia is the night watchman." },
      ],
    },
  ],
};
