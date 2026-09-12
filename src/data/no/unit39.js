// NO Unit 39 — Verb-drill 2: perfektum og framtid ("Conjugation drill 2") — A2
// THE PERFECT (har + participle), THE FUTURE (skal / vil / kommer til å), and the
// handful of PRESENT forms that do not simply add -r. See no/unit38.js for why there
// are no group/conjForm tags: each finite form is its own vocab chunk, and the hint
// names the å-infinitive. The infinitives and the simple pasts are already known
// (u38); these are the forms that build on them.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT39 = {
  id: "no-u39",
  lang: "no",
  title: "Verb-drill 2: perfektum og framtid",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "no-u39l1",
      unit: 39,
      lesson: 1,
      title: "Have done — weak verbs",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what has happened with har + participle — har spist, har lest, har kjøpt, har bodd, har reist, har brukt.",
      items: [
        { id: "no-u39l1-harspist", type: "vocab", front: "har spist", reading: "harspist", meaning: "have eaten", example: { jp: "Jeg har spist allerede, så jeg er ikke sulten.", en: "I've already eaten, so I'm not hungry." }, accept: ["has eaten"], drill: { jp: "Vi har spist middag", en: "We have eaten dinner" }, hint: "The perfect is har + participle: har spist. For -te verbs the participle ends in -t. Same form for jeg, du, vi — Norwegian never changes the verb for the person." },
        { id: "no-u39l1-harlest", type: "vocab", front: "har lest", reading: "harlest", meaning: "have read", example: { jp: "Har du lest boka jeg ga deg for en måned siden?", en: "Have you read the book I gave you a month ago?" }, accept: ["has read"], drill: { jp: "Jeg har lest avisa", en: "I have read the newspaper" }, hint: "å lese → har lest. In a question the har comes first: Har du lest...?" },
        { id: "no-u39l1-harkjopt", type: "vocab", front: "har kjøpt", reading: "harkjopt", meaning: "have bought", example: { jp: "De har kjøpt et nytt hus fordi familien har blitt større.", en: "They've bought a new house because the family has grown bigger." }, accept: ["has bought"], drill: { jp: "Jeg har kjøpt melk", en: "I have bought milk" }, hint: "å kjøpe → har kjøpt. The p stays, the participle takes -t. ø → o in the reading." },
        { id: "no-u39l1-harbodd", type: "vocab", front: "har bodd", reading: "harbodd", meaning: "have lived", example: { jp: "Vi har bodd her i ti år, og vi vil ikke flytte.", en: "We've lived here for ten years, and we don't want to move." }, accept: ["has lived", "have stayed"], drill: { jp: "Jeg har bodd i Oslo", en: "I have lived in Oslo" }, hint: "å bo → har bodd. The -dd verbs keep it in the participle too: bo → bodde → har bodd." },
        { id: "no-u39l1-harreist", type: "vocab", front: "har reist", reading: "harreist", meaning: "have travelled", example: { jp: "Hun har reist mye, så hun snakker flere språk.", en: "She has travelled a lot, so she speaks several languages." }, accept: ["has travelled", "has left"], drill: { jp: "Vi har reist langt", en: "We have travelled far" }, hint: "å reise → har reist. flere is the comparative of mange (u37) — 'several / more'." },
        { id: "no-u39l1-harbrukt", type: "vocab", front: "har brukt", reading: "harbrukt", meaning: "have used", example: { jp: "Jeg har brukt hele dagen på å lese, og nå er jeg trøtt.", en: "I've spent the whole day reading, and now I'm tired." }, accept: ["has used", "have spent"], drill: { jp: "Han har brukt bilen", en: "He has used the car" }, hint: "å bruke → har brukt. har brukt tid på = have spent time on." },
      ],
    },
    {
      id: "no-u39l2",
      unit: 39,
      lesson: 2,
      title: "Have done — strong verbs",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the irregular participles — har skrevet, har drukket, har tatt, har fått, har sett, har gjort.",
      items: [
        { id: "no-u39l2-harskrevet", type: "vocab", front: "har skrevet", reading: "harskrevet", meaning: "have written", example: { jp: "Hun har skrevet mange bøker, men denne er den beste.", en: "She has written many books, but this one is the best." }, accept: ["has written"], drill: { jp: "Jeg har skrevet et brev", en: "I have written a letter" }, hint: "å skrive → skrev → har skrevet. Strong participles often end in -et but change the vowel from the infinitive." },
        { id: "no-u39l2-hardrukket", type: "vocab", front: "har drukket", reading: "hardrukket", meaning: "have drunk", example: { jp: "Har du drukket kaffe i dag, eller vil du ha en kopp?", en: "Have you drunk coffee today, or would you like a cup?" }, accept: ["has drunk"], drill: { jp: "Vi har drukket melk", en: "We have drunk milk" }, hint: "å drikke → drakk → har drukket. Three different vowels across the three forms: i, a, u." },
        { id: "no-u39l2-hartatt", type: "vocab", front: "har tatt", reading: "hartatt", meaning: "have taken", example: { jp: "Vi har tatt toget hver dag denne uka.", en: "We've taken the train every day this week." }, accept: ["has taken"], drill: { jp: "Jeg har tatt bussen", en: "I have taken the bus" }, hint: "å ta → tok → har tatt. Short verb, short participle: tatt." },
        { id: "no-u39l2-harfatt", type: "vocab", front: "har fått", reading: "harfatt", meaning: "have got", example: { jp: "Jeg har fått en ny jobb, så jeg må flytte til byen.", en: "I've got a new job, so I have to move to the city." }, accept: ["has got", "have received"], drill: { jp: "Hun har fått et brev", en: "She has got a letter" }, hint: "å få → fikk → har fått. The å of få becomes å in fått. Very common in everyday speech." },
        { id: "no-u39l2-harsett", type: "vocab", front: "har sett", reading: "harsett", meaning: "have seen", example: { jp: "Har du sett filmen alle snakker om?", en: "Have you seen the film everyone is talking about?" }, accept: ["has seen"], drill: { jp: "Jeg har sett henne før", en: "I have seen her before" }, hint: "å se → så → har sett. The past så is A1; the participle sett is new." },
        { id: "no-u39l2-hargjort", type: "vocab", front: "har gjort", reading: "hargjort", meaning: "have done", example: { jp: "Har du gjort leksene, eller vil du ha hjelp?", en: "Have you done the homework, or would you like help?" }, accept: ["has done", "have made"], drill: { jp: "Jeg har gjort alt", en: "I have done everything" }, hint: "å gjøre → gjorde → har gjort. gj is a y sound: yort. One of the most-used verbs there is." },
      ],
    },
    {
      id: "no-u39l3",
      unit: 39,
      lesson: 3,
      title: "What will happen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the future — skal, vil, kommer til å, skal til å, tenker å, planlegger å.",
      items: [
        { id: "no-u39l3-skal", type: "vocab", front: "skal", reading: "skal", meaning: "will (plan)", example: { jp: "Jeg skal reise til Norge til sommeren.", en: "I'm going to travel to Norway this summer." }, accept: ["shall", "am going to", "intend to"], drill: { jp: "Vi skal spise nå", en: "We're going to eat now" }, hint: "The present of å skulle. skal = a decided plan: jeg skal reise. It is the commonest way to say the future." },
        { id: "no-u39l3-vil", type: "vocab", front: "vil", reading: "vil", meaning: "will (want)", example: { jp: "Han vil bli lege når han blir stor.", en: "He wants to be a doctor when he grows up." }, accept: ["want to", "will"], drill: { jp: "Jeg vil hjelpe deg", en: "I want to help you" }, hint: "The present of å ville. vil leans on wanting or predicting; skal on a firm plan. jeg vil = I want / I will." },
        { id: "no-u39l3-kommertila", type: "vocab", front: "kommer til å", reading: "kommertila", meaning: "is going to", example: { jp: "Det kommer til å regne i morgen, sier de på nyhetene.", en: "It's going to rain tomorrow, they say on the news." }, accept: ["will", "is bound to"], drill: { jp: "Det kommer til å gå bra", en: "It's going to be fine" }, hint: "kommer til å + infinitive — the future for things that just happen, not plans: det kommer til å regne." },
        { id: "no-u39l3-skaltila", type: "vocab", front: "skal til å", reading: "skaltila", meaning: "about to", example: { jp: "Jeg skal til å gå, men telefonen ringer.", en: "I am about to leave, but the phone is ringing." }, accept: ["is about to", "on the point of"], drill: { jp: "Vi skal til å dra", en: "We're about to leave" }, hint: "skal til å = on the point of. Add akkurat for 'just about to': skal akkurat til å gå." },
        { id: "no-u39l3-tenkera", type: "vocab", front: "tenker å", reading: "tenkera", meaning: "am thinking of", example: { jp: "Jeg tenker å begynne på et nytt kurs til høsten.", en: "I'm thinking of starting a new course in the autumn." }, accept: ["plan to", "intend to"], drill: { jp: "Jeg tenker å reise", en: "I'm thinking of travelling" }, hint: "tenke å + infinitive = to be thinking of doing. From å tenke, to think (A1)." },
        { id: "no-u39l3-planleggera", type: "vocab", front: "planlegger å", reading: "planleggera", meaning: "am planning to", example: { jp: "De planlegger å kjøpe hus når de har spart nok.", en: "They're planning to buy a house once they've saved enough." }, accept: ["plan to", "intend to"], drill: { jp: "Vi planlegger å flytte", en: "We're planning to move" }, hint: "å planlegge → planlegger. The firmest of the intention verbs. legge (to lay) hides inside it." },
      ],
    },
    {
      id: "no-u39l4",
      unit: 39,
      lesson: 4,
      title: "Present forms that break the rule",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the present forms that don't just add -r — gjør, vet, sier, spør, får, ser.",
      items: [
        { id: "no-u39l4-gjor", type: "vocab", front: "gjør", reading: "gjor", meaning: "do", example: { jp: "Hva gjør du på jobb når det er stille?", en: "What do you do at work when it's quiet?" }, accept: ["does", "am doing"], drill: { jp: "Jeg gjør leksene nå", en: "I do the homework now" }, hint: "å gjøre → gjør, not 'gjører'. gj is a y sound: yeur. Hva gjør du? is how you ask what someone is doing." },
        { id: "no-u39l4-vet", type: "vocab", front: "vet", reading: "vet", meaning: "know", example: { jp: "Jeg vet ikke hvor hun bor, men jeg kan spørre.", en: "I don't know where she lives, but I can ask." }, accept: ["knows"], drill: { jp: "Jeg vet svaret", en: "I know the answer" }, hint: "å vite → vet, not 'viter'. This is knowing a fact; å kjenne (A1) is knowing a person. jeg vet ikke, I don't know." },
        { id: "no-u39l4-sier", type: "vocab", front: "sier", reading: "sier", meaning: "say", example: { jp: "Hun sier at hun kommer, men jeg tror det ikke.", en: "She says she's coming, but I don't believe it." }, accept: ["says", "am saying"], drill: { jp: "Jeg sier det nå", en: "I say it now" }, hint: "å si → sier — the i comes back in the present. Said 'SEE-er'. Past sa (A1)." },
        { id: "no-u39l4-spor", type: "vocab", front: "spør", reading: "spor", meaning: "ask", example: { jp: "Hvis du er usikker, så spør du bare læreren.", en: "If you are unsure, just ask the teacher." }, accept: ["asks", "am asking"], drill: { jp: "Jeg spør om veien", en: "I ask for directions" }, hint: "å spørre → spør, not 'spørrer'. Past spurte (u38). ø → o in the reading." },
        { id: "no-u39l4-far", type: "vocab", front: "får", reading: "far", meaning: "get", example: { jp: "Hvis vi skynder oss, får vi toget.", en: "If we hurry, we will catch the train." }, accept: ["gets", "am getting", "may"], drill: { jp: "Jeg får lønn i dag", en: "I get paid today" }, hint: "å få → får, not 'fåer'. Also 'may / is allowed to': du får gå, you may go. Careful with far, father — same reading, different word." },
        { id: "no-u39l4-ser", type: "vocab", front: "ser", reading: "ser", meaning: "see", example: { jp: "Jeg ser at du er trøtt, så vi kan ta en pause.", en: "I see that you are tired, so we can take a break." }, accept: ["sees", "am looking"], drill: { jp: "Jeg ser en fugl", en: "I see a bird" }, hint: "å se → ser. ser ut = looks (appears): du ser sliten ut, you look tired. Past så (A1)." },
      ],
    },
  ],
};
