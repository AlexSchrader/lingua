import ChoiceCard from "./ChoiceCard.jsx";
import ClozeCard from "./ClozeCard.jsx";
import TypeCard from "./TypeCard.jsx";
import BuildCard from "./BuildCard.jsx";
import TraceCard from "./TraceCard.jsx";
import SpeakCard from "./SpeakCard.jsx";
import SentenceCard from "./SentenceCard.jsx";
import ConjugateCard from "./ConjugateCard.jsx";
import { LIVE_CARD_KINDS } from "../../data/contract.js";
import { kindKeyOf } from "../../store/reviewStep.js";

export { kindKeyOf };

// THE CARD SWITCH, in one place. A review step and an exam step are the same
// shape — { kind, mode? } — and both runners have to turn it into a card. It used
// to live inline in Review.jsx; the exam runner reusing it (rather than copying
// it) is what keeps the two from drifting, and it is why adding a band exam
// needed NO new card kind and NO new runner.
//
// Note what is NOT here: nothing about rungs, SRS, mastery or persistence. The
// caller owns all of that, which is exactly why the exam runner can hand this the
// same steps while every one of its store writers is a no-op.

// The forcing function (CLAUDE.md): a card kind ships only when it is in
// LIVE_CARD_KINDS. Routing one that isn't listed is a bug, loudly.
export function assertLiveKind(kindKey) {
  if (!LIVE_CARD_KINDS.includes(kindKey)) {
    throw new Error(`Runner routed unlisted card kind "${kindKey}". Add it to LIVE_CARD_KINDS first.`);
  }
}

export default function CardStage({ step, item, items, onGraded, onCantHear }) {
  assertLiveKind(kindKeyOf(step));

  if (step.kind === "choice") return <ChoiceCard item={item} allItems={items} onGraded={onGraded} />;
  if (step.kind === "choice:reverse") return <ChoiceCard item={item} allItems={items} onGraded={onGraded} reverse />;
  if (step.kind === "listen:choice")
    return <ChoiceCard item={item} allItems={items} onGraded={onGraded} onCantHear={onCantHear} audioFirst />;
  if (step.kind === "cloze:choice") return <ClozeCard item={item} allItems={items} onGraded={onGraded} />;
  if (step.kind === "particle:choice") return <ClozeCard item={item} allItems={items} onGraded={onGraded} particle />;
  if (step.kind === "listen:type") return <TypeCard item={item} listen onGraded={onGraded} onCantHear={onCantHear} />;
  if (step.kind === "type") return <TypeCard item={item} mode={step.mode} onGraded={onGraded} />;
  if (step.kind === "trace") return <TraceCard item={item} mode="free" onGraded={onGraded} />;
  if (step.kind === "speak") return <SpeakCard item={item} onGraded={onGraded} />;
  if (step.kind === "sentence:build") return <SentenceCard item={item} onGraded={onGraded} />;
  if (step.kind === "conjugate") return <ConjugateCard item={item} onGraded={onGraded} />;
  return <BuildCard item={item} onGraded={onGraded} />;
}
