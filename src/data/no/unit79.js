// NO Unit 79 — Regninger og gjeld (slot: coverage-b1-6) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 6 (B1)".
//
// u27 "Handel og penger" teaches the SHOP counter — ei regning, et beløp, en
// konto, ei rente, å skylde, ei kvittering, et budsjett, å spare. What it never
// teaches is the paper that arrives afterwards: en faktura, et forfall, ei
// purring, et gebyr, et avdrag, ei gjeld, et depositum, ei forsikring. A learner
// can buy a coffee and cannot read a bill, which is the wrong way round for
// somebody living here.
//
// NOT the economy — inflation, markets and unemployment belong to the B1
// thematic money slot (u66), owned by another block. This unit is the household's
// own paperwork only, and the two do not overlap in vocabulary.
//
// Conventions per no/unit1.js. -ing/-ning nouns take ei (ei purring, ei
// innbetaling, ei forsikring, ei utbetaling); -het/-else take en.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT79 = {
  id: "no-u79",
  lang: "no",
  title: "Regninger og gjeld",
  order: 79,
  stage: "b1",
  lessons: [
    {
      id: "no-u79l1",
      unit: 79,
      lesson: 1,
      title: "Regninga kommer",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read a bill — what it is called, when it is due, what happens if you are late.",
      items: [
        { id: "no-u79l1-enfaktura", type: "vocab", front: "en faktura", reading: "enfaktura", meaning: "invoice", example: { jp: "Vi fikk en faktura vi ikke hadde ventet på.", en: "We got an invoice we had not been expecting." }, accept: ["a bill"], drill: { jp: "Vi fikk en faktura i dag", en: "We got an invoice today" }, hint: "en faktura → fakturaen, flertall fakturaer. Ei regning (u27) er det samme i tale; faktura står på papiret." },
        { id: "no-u79l1-etforfall", type: "vocab", front: "et forfall", reading: "etforfall", meaning: "due date", example: { jp: "Forfallet er neste uke, så du har noen dager igjen.", en: "The due date is next week, so you have a few days left." }, accept: ["maturity", "a deadline (payment)"], drill: { jp: "Hver regning har et forfall", en: "Every bill has a due date" }, hint: "et forfall → forfallet. Forfallsdato er hele ordet på regninga. En frist (u24) er det samme for søknader." },
        { id: "no-u79l1-eipurring", type: "vocab", front: "ei purring", reading: "eipurring", meaning: "payment reminder", example: { jp: "Jeg glemte å betale, og da kom det ei purring med gebyr.", en: "I forgot to pay, and then a reminder came with a fee." }, accept: ["a reminder", "a dunning letter"], drill: { jp: "Det kom ei purring i postkassa", en: "A payment reminder came in the postbox" }, hint: "ei purring → purringa. Fra å purre, to chase somebody up. Den koster alltid et gebyr." },
        { id: "no-u79l1-etgebyr", type: "vocab", front: "et gebyr", reading: "etgebyr", meaning: "fee (charge)", example: { jp: "Banken tar et lite gebyr hver gang du bruker kortet ute.", en: "The bank takes a small fee every time you use the card abroad." }, accept: ["a charge", "a surcharge"], drill: { jp: "Banken tar et gebyr her", en: "The bank takes a fee here" }, hint: "et gebyr → gebyret, flertall gebyrer. Alltid et ekstra beløp oppå prisen, aldri selve prisen." },
        { id: "no-u79l1-eiinnbetaling", type: "vocab", front: "ei innbetaling", reading: "eiinnbetaling", meaning: "payment in", example: { jp: "Ei innbetaling kan bruke to dager før den er på konto.", en: "A payment can take two days before it is in the account." }, accept: ["a deposit (into an account)", "a remittance"], drill: { jp: "Ei innbetaling tar to dager", en: "A payment takes two days" }, hint: "ei innbetaling → innbetalinga. Inn = penger til dem; ut = ei utbetaling, penger til deg." },
        { id: "no-u79l1-abetaleinn", type: "vocab", front: "å betale inn", reading: "abetaleinn", meaning: "to pay in", example: { jp: "Du må betale inn hele beløpet før helga.", en: "You have to pay in the whole amount before the weekend." }, accept: ["to deposit", "to remit"], drill: { jp: "Det er lurt å betale inn tidlig", en: "It is wise to pay in early" }, hint: "å betale (u7) + inn. Partikkelen sier retningen: betale inn til noen, betale ut til deg." },
      ],
    },
    {
      id: "no-u79l2",
      unit: 79,
      lesson: 2,
      title: "Inntekt og utgift",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about money coming in and going out, and say whether you can afford something.",
      items: [
        { id: "no-u79l2-eiinntekt", type: "vocab", front: "ei inntekt", reading: "eiinntekt", meaning: "income", example: { jp: "Vi har bare ei inntekt nå som han ikke jobber.", en: "We only have one income now that he is not working." }, accept: ["earnings", "revenue"], drill: { jp: "Vi har bare ei inntekt", en: "We only have one income" }, hint: "ei inntekt → inntekta. Inn + å ta. Ei lønn (u18) er det du får fra jobben; inntekt er alt som kommer inn." },
        { id: "no-u79l2-eiutgift", type: "vocab", front: "ei utgift", reading: "eiutgift", meaning: "expense", example: { jp: "Den største utgifta vår er husleia hver måned.", en: "Our biggest expense is the rent every month." }, accept: ["a cost", "an outgoing"], drill: { jp: "Dette er ei utgift vi glemte", en: "This is an expense we forgot" }, hint: "ei utgift → utgifta. Ut + å gi. Paret til ei inntekt, og begge to står i budsjettet (u27)." },
        { id: "no-u79l2-aharad", type: "vocab", front: "å ha råd", reading: "aharad", meaning: "to afford", example: { jp: "Vi har ikke råd til en ny bil i år heller.", en: "We can't afford a new car this year either." }, accept: ["to be able to afford", "can afford"], drill: { jp: "Det er godt å ha råd til alt", en: "It is good to afford everything" }, hint: "Alltid å ha råd TIL noe. Et råd alene (u25) betyr advice — samme ord, to liv." },
        { id: "no-u79l2-enkostnad", type: "vocab", front: "en kostnad", reading: "enkostnad", meaning: "cost", example: { jp: "Kostnaden ble mye høyere enn vi hadde regnet med.", en: "The cost turned out much higher than we had reckoned with." }, accept: ["an expense", "a charge"], drill: { jp: "Dette er en kostnad vi glemte", en: "This is a cost we forgot" }, hint: "en kostnad → kostnaden. Fra å koste (u7). Mer formelt enn en pris — kostnaden er hva noe koster deg totalt." },
        { id: "no-u79l2-forbruk", type: "vocab", front: "forbruk", reading: "forbruk", meaning: "consumption", example: { jp: "Forbruket av vann går alltid opp om sommeren.", en: "The consumption of water always goes up in the summer." }, accept: ["usage", "use"], drill: { jp: "Forbruk av vann går opp", en: "Consumption of water goes up" }, hint: "forbruk → forbruket. For + å bruke (u17). Massesubstantiv, derfor bart oppslag (regel 1b). En forbruker er a consumer." },
        { id: "no-u79l2-lur", type: "vocab", front: "lur", reading: "lur", meaning: "smart (sensible)", example: { jp: "Det er lurt å sjekke prisen før du kjøper noe stort.", en: "It's sensible to check the price before you buy something big." }, accept: ["clever", "wise", "cunning"], drill: { jp: "Dette er en lur plan", en: "This is a smart plan" }, hint: "lur → lurt, lure. Om en handling: sensible. Om en person: sly. Å lure noen = to trick somebody." },
      ],
    },
    {
      id: "no-u79l3",
      unit: 79,
      lesson: 3,
      title: "Lån og gjeld",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about borrowed money — the loan, the instalments, the debt and the deposit.",
      items: [
        { id: "no-u79l3-etlan", type: "vocab", front: "et lån", reading: "etlan", meaning: "loan", example: { jp: "De tok opp et stort lån for å kjøpe leiligheten.", en: "They took out a big loan to buy the flat." }, accept: ["a credit", "borrowing"], drill: { jp: "De tok opp et lån i banken", en: "They took out a loan at the bank" }, hint: "et lån → lånet, flertall lån. Fra å låne (u20). Å ta opp et lån er det faste uttrykket." },
        { id: "no-u79l3-etavdrag", type: "vocab", front: "et avdrag", reading: "etavdrag", meaning: "instalment", example: { jp: "Vi betaler et avdrag hver måned i mange år.", en: "We pay an instalment every month for many years." }, accept: ["a repayment", "a part payment"], drill: { jp: "Vi betaler et avdrag hver måned", en: "We pay an instalment every month" }, hint: "et avdrag → avdraget, flertall avdrag. Renta (u27) er prisen på lånet; avdraget er selve lånet som går ned." },
        { id: "no-u79l3-gjeld", type: "vocab", front: "gjeld", reading: "gjeld", meaning: "debt", example: { jp: "Han har mye gjeld etter alle årene uten jobb.", en: "He has a lot of debt after all the years without a job." }, accept: ["debts", "liability"], drill: { jp: "Han har mye gjeld", en: "He has a lot of debt" }, hint: "gjeld → gjelda. Massesubstantiv og bart oppslag (regel 1b) — du sier han har gjeld, ikke ei gjeld. Fra å skylde (u27): gjeld er det du skylder." },
        { id: "no-u79l3-etdepositum", type: "vocab", front: "et depositum", reading: "etdepositum", meaning: "deposit (rental)", example: { jp: "Vi måtte betale et depositum på tre måneder.", en: "We had to pay a deposit of three months." }, accept: ["a security deposit", "a bond"], drill: { jp: "Vi betalte et depositum først", en: "We paid a deposit first" }, hint: "et depositum → depositumet, flertall deposita. Pengene står på en egen konto og skal tilbake når du flytter ut." },
        { id: "no-u79l3-aspareopp", type: "vocab", front: "å spare opp", reading: "aspareopp", meaning: "to save up", example: { jp: "Hun sparte opp i fem år før hun kjøpte noe.", en: "She saved up for five years before she bought anything." }, accept: ["to build up savings", "save up"], drill: { jp: "Det tar tid å spare opp nok", en: "It takes time to save up enough" }, hint: "å spare (u27) + opp. Uten partikkelen betyr det bare 'to save'; med opp er det mot et mål." },
        { id: "no-u79l3-abetaletilbake", type: "vocab", front: "å betale tilbake", reading: "abetaletilbake", meaning: "to pay back", example: { jp: "Jeg skal betale tilbake alt sammen før jul.", en: "I'm going to pay it all back before Christmas." }, accept: ["to repay", "to refund"], drill: { jp: "Jeg lovte å betale tilbake alt", en: "I promised to pay back everything" }, hint: "å betale (u7) + tilbake (u13). Paret til å låne: du låner, så betaler du tilbake." },
      ],
    },
    {
      id: "no-u79l4",
      unit: 79,
      lesson: 4,
      title: "Faste utgifter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deal with the things that take money every month whether you use them or not.",
      items: [
        { id: "no-u79l4-eiforsikring", type: "vocab", front: "ei forsikring", reading: "eiforsikring", meaning: "insurance", example: { jp: "Uten ei forsikring må du betale hele skaden selv.", en: "Without insurance you have to pay for the whole damage yourself." }, accept: ["a policy", "cover"], drill: { jp: "Vi har ei forsikring på huset", en: "We have insurance on the house" }, hint: "ei forsikring → forsikringa. -ing-ord er hunkjønn. Fra sikker (u22): det som gjør deg sikker igjen." },
        { id: "no-u79l4-etabonnement", type: "vocab", front: "et abonnement", reading: "etabonnement", meaning: "subscription", example: { jp: "Jeg har et abonnement på avisa som jeg aldri leser.", en: "I have a subscription to the paper that I never read." }, accept: ["a membership", "a plan"], drill: { jp: "Jeg har et abonnement på avisa", en: "I have a subscription to the paper" }, hint: "et abonnement → abonnementet. Uttales med stum t til slutt, som i fransk. Alltid abonnement PÅ noe." },
        { id: "no-u79l4-asiopp", type: "vocab", front: "å si opp", reading: "asiopp", meaning: "to cancel (give notice)", example: { jp: "Du må si opp abonnementet en måned før.", en: "You have to cancel the subscription a month in advance." }, accept: ["to terminate", "to quit", "to give notice"], drill: { jp: "Vi må huske å si opp avtalen", en: "We must remember to cancel the agreement" }, hint: "å si (u12) + opp. Om en avtale: to cancel. Om en jobb: to resign — eller, fra sjefen, to fire somebody." },
        { id: "no-u79l4-etkontantkort", type: "vocab", front: "et kontantkort", reading: "etkontantkort", meaning: "prepaid card", example: { jp: "Barna har et kontantkort så de ikke kan bruke for mye.", en: "The children have a prepaid card so they can't spend too much." }, accept: ["a pay-as-you-go card", "a top-up card"], drill: { jp: "Barna har et kontantkort", en: "The children have a prepaid card" }, hint: "et kontantkort → kontantkortet. Kontanter er cash; kortet har bare pengene du har lagt inn." },
        { id: "no-u79l4-eiutbetaling", type: "vocab", front: "ei utbetaling", reading: "eiutbetaling", meaning: "payout", example: { jp: "Utbetalinga kommer én gang hver måned.", en: "The payout comes once every month." }, accept: ["a disbursement", "a payment out"], drill: { jp: "Vi venter på ei utbetaling", en: "We are waiting for a payout" }, hint: "ei utbetaling → utbetalinga. Motsatt av ei innbetaling (l1) — samme ord, andre partikkel." },
        { id: "no-u79l4-ensparekonto", type: "vocab", front: "en sparekonto", reading: "ensparekonto", meaning: "savings account", example: { jp: "Vi har en sparekonto til barna med bedre rente.", en: "We have a savings account for the children with a better interest rate." }, accept: ["a deposit account"], drill: { jp: "Vi har en sparekonto til barna", en: "We have a savings account for the children" }, hint: "en sparekonto → sparekontoen. Å spare (u27) + en konto (u27). Brukskontoen er den du betaler fra." },
      ],
    },
  ],
};
