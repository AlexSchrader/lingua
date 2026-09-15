// NO Unit 38 — Verb-drill 1: fortid ("Conjugation drill 1") — A2 · THE PAST (preteritum)
// Conventions per no/unit1.js §1-§8. A1 taught the present (add -r) and a handful of
// past forms as whole words (var, hadde, gikk, kom, kjøpte, spiste). This unit drills
// the SYSTEM behind them: the two regular past classes and the strong verbs.
//
// AUTHORING NOTE — no group/conjForm tags. ja's drill units tag each verb so it routes
// to a conjugate card; those fields (godan/ichidan/irregular) are Japanese and
// contract.js accepts nothing else. A Norwegian verb has no honest value to put there,
// so each past form is taught as its own vocab chunk, exactly as A1 taught kjøpte. The
// front is the preterite; the hint names the å-infinitive it comes from. All the
// infinitives are A1; only these finite forms are new.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT38 = {
  id: "no-u38",
  lang: "no",
  title: "Verb-drill 1: fortid",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "no-u38l1",
      unit: 38,
      lesson: 1,
      title: "The -et past",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put the biggest verb group in the past — vasket, laget, hoppet, ventet, husket, kastet — the class that adds -et.",
      items: [
        { id: "no-u38l1-vasket", type: "vocab", front: "vasket", reading: "vasket", meaning: "washed", example: { jp: "Jeg vasket huset i går fordi det var skittent.", en: "I washed the house yesterday because it was dirty." }, accept: ["cleaned"], drill: { jp: "Jeg vasket bilen", en: "I washed the car" }, hint: "å vaske → vasket. The biggest past class just adds -et to the stem, no vowel change. Present is vasker." },
        { id: "no-u38l1-laget", type: "vocab", front: "laget", reading: "laget", meaning: "made", example: { jp: "Hun laget middag mens vi ryddet stua.", en: "She made dinner while we tidied the living room." }, accept: ["cooked", "prepared"], drill: { jp: "Vi laget middag sammen", en: "We made dinner together" }, hint: "å lage → laget. Same -et ending. Careful: et lag is a team, but the verb is unrelated." },
        { id: "no-u38l1-hoppet", type: "vocab", front: "hoppet", reading: "hoppet", meaning: "jumped", example: { jp: "Barna hoppet i vannet da det ble varmt nok.", en: "The children jumped into the water when it got warm enough." }, accept: ["leaped"], drill: { jp: "Hunden hoppet opp", en: "The dog jumped up" }, hint: "å hoppe → hoppet. The double p stays before -et." },
        { id: "no-u38l1-ventet", type: "vocab", front: "ventet", reading: "ventet", meaning: "waited", example: { jp: "Vi ventet på bussen i ti minutter i regnet.", en: "We waited for the bus for ten minutes in the rain." }, accept: ["expected"], drill: { jp: "Jeg ventet på deg", en: "I waited for you" }, hint: "å vente → ventet. vente på = to wait for. Also 'expected': jeg ventet det ikke." },
        { id: "no-u38l1-husket", type: "vocab", front: "husket", reading: "husket", meaning: "remembered", example: { jp: "Han husket ikke navnet til læreren.", en: "He didn't remember the teacher's name." }, accept: ["recalled"], drill: { jp: "Jeg husket navnet", en: "I remembered the name" }, hint: "å huske → husket. Nothing to do with et hus, a house, despite the look." },
        { id: "no-u38l1-kastet", type: "vocab", front: "kastet", reading: "kastet", meaning: "threw", example: { jp: "Hun kastet ballen så langt hun kunne.", en: "She threw the ball as far as she could." }, accept: ["tossed", "thrown"], drill: { jp: "Han kastet maten", en: "He threw the food away" }, hint: "å kaste → kastet. kaste opp also means to throw up / be sick." },
      ],
    },
    {
      id: "no-u38l2",
      unit: 38,
      lesson: 2,
      title: "The -te past",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the second past class — leste, reiste, kjørte, hørte, spurte, brukte — the one that adds -te.",
      items: [
        { id: "no-u38l2-leste", type: "vocab", front: "leste", reading: "leste", meaning: "read (past)", example: { jp: "Jeg leste hele boka mens jeg var syk.", en: "I read the whole book while I was ill." }, accept: ["was reading"], drill: { jp: "Hun leste avisa", en: "She read the newspaper" }, hint: "å lese → leste. The second class adds -te (not -et) to a stem ending in a single consonant. Present leser." },
        { id: "no-u38l2-reiste", type: "vocab", front: "reiste", reading: "reiste", meaning: "travelled", example: { jp: "De reiste til Norge da de var unge.", en: "They travelled to Norway when they were young." }, accept: ["left", "went"], drill: { jp: "Vi reiste til byen", en: "We travelled to the city" }, hint: "å reise → reiste. Also 'stood up': han reiste seg. Same -te ending." },
        { id: "no-u38l2-kjorte", type: "vocab", front: "kjørte", reading: "kjorte", meaning: "drove", example: { jp: "Faren min kjørte oss til flyplassen tidlig i dag.", en: "My father drove us to the airport early today." }, accept: ["was driving"], drill: { jp: "Jeg kjørte til jobb", en: "I drove to work" }, hint: "å kjøre → kjørte. ø becomes o in the reading: kjorte." },
        { id: "no-u38l2-horte", type: "vocab", front: "hørte", reading: "horte", meaning: "heard", example: { jp: "Vi hørte at naboen spilte musikk hele natten.", en: "We heard that the neighbour played music all night." }, accept: ["listened"], drill: { jp: "Jeg hørte ikke telefonen", en: "I did not hear the phone" }, hint: "å høre → hørte. høre på = to listen to. ø → o in the reading." },
        { id: "no-u38l2-spurte", type: "vocab", front: "spurte", reading: "spurte", meaning: "asked", example: { jp: "Læreren spurte om vi hadde gjort leksene.", en: "The teacher asked whether we had done the homework." }, accept: ["enquired"], drill: { jp: "Jeg spurte om veien", en: "I asked for directions" }, hint: "å spørre → spurte — irregular: the rr drops. Its present is spør (drill 2)." },
        { id: "no-u38l2-brukte", type: "vocab", front: "brukte", reading: "brukte", meaning: "used", example: { jp: "Vi brukte hele dagen på å rydde huset.", en: "We spent the whole day tidying the house." }, accept: ["spent (time)"], drill: { jp: "Jeg brukte en penn", en: "I used a pen" }, hint: "å bruke → brukte. bruke tid på = to spend time on. Present bruker." },
      ],
    },
    {
      id: "no-u38l3",
      unit: 38,
      lesson: 3,
      title: "Strong verbs change their vowel",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use strong past forms that change the vowel — drakk, skrev, tok, fikk, fant, satt.",
      items: [
        { id: "no-u38l3-drakk", type: "vocab", front: "drakk", reading: "drakk", meaning: "drank", example: { jp: "Vi drakk kaffe og snakket til langt på natt.", en: "We drank coffee and talked until late at night." }, accept: ["was drinking"], drill: { jp: "Han drakk vann", en: "He drank water" }, hint: "å drikke → drakk. No ending at all — a strong verb changes the vowel instead: i → a. Perfect har drukket (drill 2)." },
        { id: "no-u38l3-skrev", type: "vocab", front: "skrev", reading: "skrev", meaning: "wrote", example: { jp: "Hun skrev et langt brev til bestemoren.", en: "She wrote a long letter to her grandmother." }, accept: ["was writing"], drill: { jp: "Jeg skrev en melding", en: "I wrote a message" }, hint: "å skrive → skrev. Vowel change i → e, no ending. Perfect har skrevet." },
        { id: "no-u38l3-tok", type: "vocab", front: "tok", reading: "tok", meaning: "took", example: { jp: "Vi tok toget hjem fordi det regnet så mye.", en: "We took the train home because it was raining so much." }, accept: ["grabbed"], drill: { jp: "Jeg tok bussen", en: "I took the bus" }, hint: "å ta → tok. a → o. One of the commonest strong verbs. Perfect har tatt." },
        { id: "no-u38l3-fikk", type: "vocab", front: "fikk", reading: "fikk", meaning: "got", example: { jp: "Jeg fikk en fin gave da jeg var barn.", en: "I got a nice present when I was a child." }, accept: ["received"], drill: { jp: "Hun fikk et brev", en: "She got a letter" }, hint: "å få → fikk. å få is tiny but strong: få → fikk → har fått." },
        { id: "no-u38l3-fant", type: "vocab", front: "fant", reading: "fant", meaning: "found", example: { jp: "Endelig fant vi nøklene under senga.", en: "Finally we found the keys under the bed." }, accept: ["discovered"], drill: { jp: "Jeg fant boka", en: "I found the book" }, hint: "å finne → fant. i → a, and the -nn- becomes -nt. Perfect har funnet." },
        { id: "no-u38l3-satt", type: "vocab", front: "satt", reading: "satt", meaning: "sat", example: { jp: "Vi satt ute i hagen helt til det ble mørkt.", en: "We sat out in the garden until it got dark." }, accept: ["was sitting"], drill: { jp: "Han satt på stolen", en: "He sat on the chair" }, hint: "å sitte → satt. Do not confuse it with satte, the past of å sette, to put. Perfect har sittet." },
      ],
    },
    {
      id: "no-u38l4",
      unit: 38,
      lesson: 4,
      title: "More strong and short verbs",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle the shortest irregular pasts — ga, lå, sov, bodde, trodde, forsto.",
      items: [
        { id: "no-u38l4-ga", type: "vocab", front: "ga", reading: "ga", meaning: "gave", example: { jp: "Hun ga meg boka si, for hun hadde lest den.", en: "She gave me her book, because she had read it." }, accept: ["handed"], drill: { jp: "Jeg ga ham en gave", en: "I gave him a present" }, hint: "å gi → ga (also spelled gav). i → a. Perfect har gitt." },
        { id: "no-u38l4-la", type: "vocab", front: "lå", reading: "la", meaning: "lay", example: { jp: "Katten lå i sola hele dagen.", en: "The cat lay in the sun all day." }, accept: ["was lying"], drill: { jp: "Boka lå på bordet", en: "The book lay on the table" }, hint: "å ligge → lå. Careful: lå (lay) is not la, the past of å legge, to put down. Perfect har ligget." },
        { id: "no-u38l4-sov", type: "vocab", front: "sov", reading: "sov", meaning: "slept", example: { jp: "Barna sov godt etter en lang dag ute.", en: "The children slept well after a long day outside." }, accept: ["was sleeping"], drill: { jp: "Jeg sov til klokka ni", en: "I slept until nine" }, hint: "å sove → sov, no ending. Perfect har sovet." },
        { id: "no-u38l4-bodde", type: "vocab", front: "bodde", reading: "bodde", meaning: "lived", example: { jp: "Vi bodde i en liten leilighet da barna var små.", en: "We lived in a small flat when the children were little." }, accept: ["resided"], drill: { jp: "Han bodde i Bergen", en: "He lived in Bergen" }, hint: "å bo → bodde. Short verbs ending in a stressed vowel double the d: bo → bodde, tro → trodde." },
        { id: "no-u38l4-trodde", type: "vocab", front: "trodde", reading: "trodde", meaning: "thought", example: { jp: "Jeg trodde at toget gikk klokka ti, men det gikk klokka ni.", en: "I thought the train left at ten, but it left at nine." }, accept: ["believed"], drill: { jp: "Jeg trodde på deg", en: "I believed you" }, hint: "å tro → trodde, same -dde as bodde. This is 'thought' as in believed; å tenke → tenkte is 'thought' as in used one's head." },
        { id: "no-u38l4-forsto", type: "vocab", front: "forsto", reading: "forsto", meaning: "understood", example: { jp: "Hun forsto ikke hva læreren mente.", en: "She did not understand what the teacher meant." }, accept: ["got it"], drill: { jp: "Jeg forsto alt", en: "I understood everything" }, hint: "å forstå → forsto (also forstod). Built on stå → sto, to stand. Perfect har forstått." },
      ],
    },
  ],
};
