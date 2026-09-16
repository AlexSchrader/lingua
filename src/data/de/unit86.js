// DE Unit 86 — Wahrnehmung und Aufmerksamkeit (slot: coverage-b1-13) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. The corpus teaches sehen and hören at A1 and nothing between
// them and B2. A B1 speaker has to distinguish looking from watching from
// missing something, hearing from listening, and has to say that they noticed,
// suspected, or were distracted. u34 "Messen und beweisen" is measurement, not
// perception; u43 "Erkennen" is recognising a FACE. This is the sensory and
// attention layer neither covers.
//
// FRONTS DROPPED as already taught or as lexeme duplicates:
//   erkennen (u43) · sehen, hoeren (u1-u11) · schmecken (u41) ·
//   die Ablenkung (lexeme of ablenken, carded here) ·
//   starren (lexeme of starr u49) · auffassen (dropped as too close to verstehen).
// GLOSS SPLIT: das Geraeusch is "the noise", die Stille is "the silence" —
// neither takes a gloss already owned by laut (u1) or ruhig (u10).
export const DE_UNIT86 = {
  id: "de-u86",
  lang: "de",
  title: "Wahrnehmung und Aufmerksamkeit",
  order: 86,
  stage: "b1",
  lessons: [
    {
      id: "de-u86l1",
      unit: 86,
      lesson: 1,
      title: "Sehen und übersehen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you noticed, what you watched closely, and what you missed.",
      items: [
        { id: "de-u86l1-derblick", type: "vocab", front: "der Blick", reading: "derblick", meaning: "the glance", example: { jp: "Ein Blick auf die Uhr sagt genug.", en: "A glance at the clock says enough." }, drill: { jp: "Der Blick aus dem Fenster ist schön", en: "The view out of the window is lovely" }, accept: ["glance", "the glance", "the look", "the view", "the gaze"], hint: "Both the look you give and the view you get: ein Zimmer mit Blick." },
        { id: "de-u86l1-auffallen", type: "vocab", front: "auffallen", reading: "auffallen", meaning: "to stand out", example: { jp: "Der rote Mantel fällt sehr auf.", en: "The red coat really stands out." }, drill: { jp: "Das muss doch auffallen", en: "That must surely stand out" }, accept: ["to stand out", "stand out", "to be noticeable", "to catch the eye", "to strike someone"], hint: "Separable, and often dative: das fällt mir auf = I notice that." },
        { id: "de-u86l1-bemerken", type: "vocab", front: "bemerken", reading: "bemerken", meaning: "to notice", example: { jp: "Er bemerkt den Mangel zu spät.", en: "He notices the fault too late." }, drill: { jp: "Man kann das leicht bemerken", en: "You can notice that easily" }, accept: ["to notice", "notice", "to spot", "spot", "to remark"], hint: "Also to remark out loud: er bemerkte dazu nichts. die Bemerkung = the remark." },
        { id: "de-u86l1-beobachten", type: "vocab", front: "beobachten", reading: "beobachten", meaning: "to observe", example: { jp: "Sie beobachtet die Kinder im Garten.", en: "She watches the children in the garden." }, drill: { jp: "Wir wollen die Kinder beobachten", en: "We want to watch the children" }, accept: ["to observe", "observe", "to watch", "watch", "to keep an eye on"], hint: "Watching over time — a scientist, a nurse, or a nosy neighbour." },
        { id: "de-u86l1-betrachten", type: "vocab", front: "betrachten", reading: "betrachten", meaning: "to look at closely", example: { jp: "Er betrachtet das Bild lange.", en: "He looks at the picture for a long time." }, drill: { jp: "Man kann das Bild betrachten", en: "You can study the picture" }, accept: ["to look at closely", "look at closely", "to contemplate", "to study", "to regard"], hint: "Still, careful looking — in a museum. beobachten follows movement." },
        { id: "de-u86l1-ubersehen", type: "vocab", front: "übersehen", reading: "ubersehen", meaning: "to overlook", example: { jp: "Ich habe den Fußgänger übersehen.", en: "I overlooked the pedestrian." }, drill: { jp: "Man kann den Fußgänger übersehen", en: "You can overlook the pedestrian" }, accept: ["to overlook", "overlook", "to miss", "miss", "to fail to see"], hint: "über + sehen: to look OVER it and miss it. NOT separable." },
      ],
    },
    {
      id: "de-u86l2",
      unit: 86,
      lesson: 2,
      title: "Hören und Stille",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe sounds from a whisper to a shout, and the silence between them.",
      items: [
        { id: "de-u86l2-zuhoren", type: "vocab", front: "zuhören", reading: "zuhoren", meaning: "to listen", example: { jp: "Bitte hören Sie gut zu.", en: "Please listen carefully." }, drill: { jp: "Du musst mir gut zuhören", en: "You have to listen to me carefully" }, accept: ["to listen", "listen", "to pay attention to", "to listen to"], hint: "hören is to hear; zuhören is to listen. Dative: ich höre dir zu." },
        { id: "de-u86l2-flustern", type: "vocab", front: "flüstern", reading: "flustern", meaning: "to whisper", example: { jp: "Sie flüstert etwas in mein Ohr.", en: "She whispers something in my ear." }, drill: { jp: "Man muss im Museum flüstern", en: "You have to whisper in the museum" }, accept: ["to whisper", "whisper", "to murmur", "to speak under your breath"], hint: "Said 'FLÜS-tern'. The noise of leaves too: das Flüstern." },
        { id: "de-u86l2-brullen", type: "vocab", front: "brüllen", reading: "brullen", meaning: "to roar", example: { jp: "Der Mann brüllt über die Straße.", en: "The man roars across the road." }, drill: { jp: "Er kann sehr laut brüllen", en: "He can roar very loudly" }, accept: ["to roar", "roar", "to bellow", "to shout", "to yell"], hint: "Louder and angrier than rufen. Lions and furious people brüllen." },
        { id: "de-u86l2-dasgerausch", type: "vocab", front: "das Geräusch", reading: "dasgerausch", meaning: "the noise", example: { jp: "Das Geräusch kommt aus der Küche.", en: "The noise is coming from the kitchen." }, drill: { jp: "Das Geräusch ist sehr laut", en: "The noise is very loud" }, accept: ["noise", "the noise", "the sound", "the racket"], hint: "A noise you cannot place. A musical sound is der Klang or der Ton." },
        { id: "de-u86l2-diestille", type: "vocab", front: "die Stille", reading: "diestille", meaning: "the silence", example: { jp: "Nach dem Alarm kommt die Stille.", en: "After the alarm comes the silence." }, drill: { jp: "Die Stille im Haus ist schön", en: "The silence in the house is lovely" }, accept: ["silence", "the silence", "the quiet", "the stillness"], hint: "still = quiet, silent. in aller Stille = quietly, without fuss." },
        { id: "de-u86l2-aufmerksam", type: "vocab", front: "aufmerksam", reading: "aufmerksam", meaning: "attentive", example: { jp: "Die Schüler sind heute sehr aufmerksam.", en: "The pupils are very attentive today." }, drill: { jp: "Die Kinder sind sehr aufmerksam", en: "The children are very attentive" }, accept: ["attentive", "alert", "paying attention", "observant"], hint: "die Aufmerksamkeit = attention. Also thoughtful: eine aufmerksame Geste." },
      ],
    },
    {
      id: "de-u86l3",
      unit: 86,
      lesson: 3,
      title: "Riechen und fühlen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about smell and touch, and the impression something leaves on you.",
      items: [
        { id: "de-u86l3-riechen", type: "vocab", front: "riechen", reading: "riechen", meaning: "to smell", example: { jp: "Hier riecht es nach Kaffee.", en: "It smells of coffee here." }, drill: { jp: "Man kann das Essen riechen", en: "You can smell the food" }, accept: ["to smell", "smell", "to have a smell", "to sniff"], hint: "Both directions: ich rieche es, and es riecht gut. riechen nach = smell of." },
        { id: "de-u86l3-derduft", type: "vocab", front: "der Duft", reading: "derduft", meaning: "the scent", example: { jp: "Der Duft von Brot kommt aus der Küche.", en: "The smell of bread comes from the kitchen." }, drill: { jp: "Der Duft kommt aus dem Garten", en: "The scent comes from the garden" }, accept: ["scent", "the scent", "the fragrance", "the aroma", "the pleasant smell"], hint: "Always a GOOD smell. A bad one is der Gestank." },
        { id: "de-u86l3-beruhren", type: "vocab", front: "berühren", reading: "beruhren", meaning: "to touch", example: { jp: "Bitte nicht die Bilder berühren.", en: "Please don't touch the pictures." }, drill: { jp: "Man darf das nicht berühren", en: "You must not touch that" }, accept: ["to touch", "touch", "to make contact with", "to move emotionally"], hint: "Also emotionally: die Geschichte hat mich berührt." },
        { id: "de-u86l3-spuren", type: "vocab", front: "spüren", reading: "spuren", meaning: "to sense", example: { jp: "Ich spüre den Wind im Gesicht.", en: "I feel the wind on my face." }, drill: { jp: "Man kann die Kälte spüren", en: "You can feel the cold" }, accept: ["to sense", "sense", "to feel", "feel", "to be aware of"], hint: "Feeling something happen TO you. fühlen is more about emotion." },
        { id: "de-u86l3-wahrnehmen", type: "vocab", front: "wahrnehmen", reading: "wahrnehmen", meaning: "to perceive", example: { jp: "Sie will das Problem nicht wahrnehmen.", en: "She doesn't want to perceive the problem." }, drill: { jp: "Wir können den Duft wahrnehmen", en: "We can perceive the scent" }, accept: ["to perceive", "perceive", "to become aware of", "to take in"], hint: "wahr + nehmen: to take as true. Separable: ich nehme es wahr." },
        { id: "de-u86l3-dereindruck", type: "vocab", front: "der Eindruck", reading: "dereindruck", meaning: "the impression", example: { jp: "Mein Eindruck von der Wohnung ist gut.", en: "My impression of the flat is good." }, drill: { jp: "Der Eindruck ist sehr gut", en: "The impression is very good" }, accept: ["impression", "the impression", "the feeling you get", "the sense of it"], hint: "ein + drücken: pressed in. Eindruck machen = to make an impression." },
      ],
    },
    {
      id: "de-u86l4",
      unit: 86,
      lesson: 4,
      title: "Aufmerksam bleiben",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say you are concentrating, distracted, or that you suspect something.",
      items: [
        { id: "de-u86l4-sichkonzentrieren", type: "vocab", front: "sich konzentrieren", reading: "sichkonzentrieren", meaning: "to concentrate", example: { jp: "Ich kann mich hier nicht konzentrieren.", en: "I can't concentrate here." }, drill: { jp: "Man muss sich konzentrieren", en: "You have to concentrate" }, accept: ["to concentrate", "concentrate", "to focus", "focus"], hint: "Reflexive, with auf: ich konzentriere mich auf die Arbeit." },
        { id: "de-u86l4-ablenken", type: "vocab", front: "ablenken", reading: "ablenken", meaning: "to distract", example: { jp: "Das Telefon lenkt mich immer ab.", en: "The phone always distracts me." }, drill: { jp: "Das kann uns leicht ablenken", en: "That can distract us easily" }, accept: ["to distract", "distract", "to divert", "to take your mind off"], hint: "ab + lenken, to steer away. die Ablenkung = the distraction." },
        { id: "de-u86l4-beachten", type: "vocab", front: "beachten", reading: "beachten", meaning: "to pay heed to", example: { jp: "Sie müssen die Hausordnung beachten.", en: "You have to observe the house rules." }, drill: { jp: "Wir müssen die Regeln beachten", en: "We have to observe the rules" }, accept: ["to pay heed to", "pay heed to", "to observe a rule", "to heed", "to take note of"], hint: "Bitte beachten Sie… is the standard sign wording. From die Acht, heed." },
        { id: "de-u86l4-sichmerken", type: "vocab", front: "sich merken", reading: "sichmerken", meaning: "to memorise", example: { jp: "Ich kann mir die Nummer nicht merken.", en: "I can't remember the number." }, drill: { jp: "Das muss man sich merken", en: "You have to memorise that" }, accept: ["to memorise", "memorise", "to remember", "to commit to memory", "to keep in mind"], hint: "Reflexive and dative: ich merke MIR das. Storing it, not recalling it." },
        { id: "de-u86l4-derverdacht", type: "vocab", front: "der Verdacht", reading: "derverdacht", meaning: "the suspicion", example: { jp: "Gegen den Mann gibt es einen Verdacht.", en: "There is a suspicion against the man." }, drill: { jp: "Der Verdacht ist nicht neu", en: "The suspicion is not new" }, accept: ["suspicion", "the suspicion", "the hunch", "the misgiving"], hint: "verdächtig = suspicious. Verdacht schöpfen = to grow suspicious." },
        { id: "de-u86l4-ahnen", type: "vocab", front: "ahnen", reading: "ahnen", meaning: "to have an inkling", example: { jp: "Ich ahne schon, was jetzt kommt.", en: "I already have an inkling what's coming now." }, drill: { jp: "Man kann das schon ahnen", en: "You can already sense that" }, accept: ["to have an inkling", "to sense", "to suspect", "to have a feeling", "to guess"], hint: "die Ahnung = the idea. keine Ahnung! = no idea!" },
      ],
    },
  ],
};
