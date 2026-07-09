import { useMemo, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PhaseShell from "../components/PhaseShell.jsx";
import ChoiceCard from "../components/games/ChoiceCard.jsx";
import ClozeCard from "../components/games/ClozeCard.jsx";
import TypeCard from "../components/games/TypeCard.jsx";
import BuildCard from "../components/games/BuildCard.jsx";
import TraceCard from "../components/games/TraceCard.jsx";
import SpeakCard from "../components/games/SpeakCard.jsx";
import SentenceCard from "../components/games/SentenceCard.jsx";
import ConjugateCard from "../components/games/ConjugateCard.jsx";
import CardBreath from "../components/CardBreath.jsx";
import Celebration from "../components/Celebration.jsx";
import { useStore } from "../store/useStore.js";
import { isReviewable } from "../store/mastery.js";
import { isTraceable, shouldListen, shouldListenType, shouldTypeReading, shouldTypeProduce, shouldSpeak, shouldCloze, shouldParticleCloze, shouldSentence, shouldConjugate } from "../store/cardRouting.js";
import { buildSandboxItems, buildCardPreviewItems, runnerWriters } from "../store/dev.js";
import { LIVE_CARD_KINDS } from "../data/contract.js";
import { C, F } from "../theme.js";

function assertLiveKind(kindKey) {
  if (!LIVE_CARD_KINDS.includes(kindKey)) {
    throw new Error(`Review routed unlisted card kind "${kindKey}". Add it to LIVE_CARD_KINDS first.`);
  }
}

function reviewStepFor(item) {
  const rung = item.rung ?? 1;
  // Recognition (rung ≤ 1): interleave the eye path (choice) with the ear path
  // (listen:choice) for items that have a clip — same skill, sound-in vs glyph-in.
  if (rung <= 1) return shouldListen(item) ? { kind: "listen:choice" } : { kind: "choice" };
  // Recall (rung 2): three interleaved recall paths on distinct hash bands — fill
  // the word into its own sentence (cloze), recall by ear (dictation), or the
  // visual recall (type the reading, else the meaning).
  if (rung === 2) {
    // In the cloze band, a sentence with a clear particle drills the PARTICLE
    // (the grammar pain point); otherwise fill the WORD into its sentence.
    if (shouldParticleCloze(item)) return { kind: "particle:choice" };
    if (shouldCloze(item)) return { kind: "cloze:choice" };
    if (shouldListenType(item)) return { kind: "listen:type" };
    return shouldTypeReading(item) ? { kind: "type", mode: "reading" } : { kind: "type", mode: "meaning" };
  }
  // Produce (rung 3): single-glyph kana + kanji are produced by stroke tracing;
  // words are produced by TYPING the Japanese from the English — rōmaji is accepted
  // through A1 so no JP keyboard is needed, kana required from A2 (see checkProduce)
  // — interleaved with building the word from tiles.
  if (rung === 3) {
    // A tagged verb with a target form is a conjugation drill — always conjugate.
    if (shouldConjugate(item)) return { kind: "conjugate" };
    if (isTraceable(item)) return { kind: "trace" };
    // Reassemble the whole example sentence (production in context) for a share of
    // eligible vocab; else type the Japanese, else build the word from tiles.
    if (shouldSentence(item)) return { kind: "sentence:build" };
    return shouldTypeProduce(item) ? { kind: "type", mode: "produce" } : { kind: "build" };
  }
  // Speak (rung ≥ 4, SPOKEN→MASTERED): vocab words are reviewed by saying them
  // aloud — a graded spoken pass is what carries a produced word to MASTERED.
  // Kana/kanji have no reliable isolated-sound grading, so they keep trace/build.
  if (shouldSpeak(item)) return { kind: "speak" };
  return isTraceable(item) ? { kind: "trace" } : { kind: "build" };
}

export default function Review() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Sandbox (Dev Mode) run: review a single lesson's items at a preview depth,
  // against a throwaway in-memory map, with every store writer no-op'd. Used by
  // the dev panel's mid-progress / mastered previews. Fully isolated from real state.
  const sandbox = searchParams.get("sandbox") === "1";
  const home = sandbox ? "/dev" : "/";
  // ?fix=1 → the mistake-review: a targeted pass over recently-missed items
  // (not the FSRS-due queue), so it doesn't touch the daily-review bookkeeping.
  const fix = searchParams.get("fix") === "1";

  const storeItems = useStore((s) => s.items);
  const dueItems = useStore((s) => s.dueItems);
  const mistakeIds = useStore((s) => s.mistakes);
  // `?card=<kind>` → the Quick-card launcher (one item seeded to yield that kind);
  // otherwise `?lesson=&state=` → the per-lesson depth preview.
  const cardParam = searchParams.get("card");
  const sandboxItems = useMemo(
    () =>
      sandbox
        ? cardParam
          ? buildCardPreviewItems(cardParam)
          : buildSandboxItems(searchParams.get("lesson"), searchParams.get("state") ?? "mid")
        : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sandbox]
  );
  const items = sandbox ? sandboxItems : storeItems;

  const realWriters = {
    gradeItem: useStore((s) => s.gradeItem),
    completeReviews: useStore((s) => s.completeReviews),
    rollDailyGoal: useStore((s) => s.rollDailyGoal),
  };
  const { gradeItem, completeReviews, rollDailyGoal } = runnerWriters(sandbox, realWriters);

  // Snapshot the queue on mount — grading mutates items but shouldn't reshuffle.
  // In sandbox only the previewed lesson's items are reviewable (everything else
  // is rung 0), so filtering by isReviewable yields exactly that lesson.
  const reviewQueue = useMemo(
    () => {
      let source;
      if (sandbox) source = Object.values(items).filter(isReviewable);
      else if (fix) source = (mistakeIds ?? []).map((mid) => items[mid]).filter((it) => it && isReviewable(it));
      else source = dueItems();
      return source.map((it) => ({ ...reviewStepFor(it), id: it.id }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [idx, setIdx] = useState(0);
  const [finished, setFinished] = useState(false);

  const done = idx >= reviewQueue.length;

  useEffect(() => {
    if (done && !finished) {
      // Mark the daily review complete only when there was REAL work AND this is
      // the daily review: an empty queue (opening /review with nothing due) mustn't
      // bump the streak for zero work, and the mistake-review (fix mode) is a bonus
      // session that never satisfies the daily goal.
      if (reviewQueue.length > 0 && !fix) {
        completeReviews();
        rollDailyGoal();
      }
      setFinished(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  if (reviewQueue.length === 0) {
    return (
      <PhaseShell title={fix ? "Fix-up" : "Reviews"} progress={1} onClose={() => navigate(home)}>
        <div style={{ margin: "auto", textAlign: "center", color: C.inkSoft }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
          {fix ? "No mistakes to fix — nice." : "Nothing due right now."}
          <br />
          <button
            onClick={() => navigate(home)}
            style={{ marginTop: 16, padding: "12px 24px", borderRadius: 12, border: "none", background: C.ai, color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
          >
            {sandbox ? "Back to Dev panel" : "Back to Today"}
          </button>
        </div>
      </PhaseShell>
    );
  }

  const progress = Math.min(idx, reviewQueue.length) / reviewQueue.length;

  if (finished || done) {
    return (
      <PhaseShell title="Reviews" progress={1}>
        {/* Reviews are the mandatory daily habit (the streak trigger) — they earn
            the same fanfare + confetti as a lesson. Fires once on mount; the sound
            respects the SFX toggle and confetti is skipped under reduced-motion. */}
        <Celebration />
        <div style={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
          <div style={{ fontSize: 56 }}>✓</div>
          <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>{fix ? "Mistakes cleared" : "Reviews cleared"}</div>
          <div style={{ color: C.inkSoft, maxWidth: 300 }}>
            {reviewQueue.length} item{reviewQueue.length === 1 ? "" : "s"} {fix ? "revisited." : "reviewed."}
          </div>
          <button
            data-testid="back-to-today"
            onClick={() => navigate(home)}
            style={{ marginTop: 8, padding: "14px 28px", borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
          >
            {sandbox ? "Back to Dev panel" : "Back to Today"}
          </button>
        </div>
      </PhaseShell>
    );
  }

  const step = reviewQueue[idx];
  const item = items[step.id];
  const onGraded = (grade) => {
    gradeItem(item.id, grade);
    setIdx((i) => i + 1);
  };
  const kindKey = step.kind === "type" ? `type:${step.mode}` : step.kind;
  assertLiveKind(kindKey);

  let card;
  if (step.kind === "choice") {
    card = <ChoiceCard item={item} allItems={items} onGraded={onGraded} />;
  } else if (step.kind === "listen:choice") {
    card = <ChoiceCard item={item} allItems={items} onGraded={onGraded} audioFirst />;
  } else if (step.kind === "cloze:choice") {
    card = <ClozeCard item={item} allItems={items} onGraded={onGraded} />;
  } else if (step.kind === "particle:choice") {
    card = <ClozeCard item={item} allItems={items} onGraded={onGraded} particle />;
  } else if (step.kind === "listen:type") {
    card = <TypeCard item={item} listen onGraded={onGraded} />;
  } else if (step.kind === "type") {
    card = <TypeCard item={item} mode={step.mode} onGraded={onGraded} />;
  } else if (step.kind === "trace") {
    card = <TraceCard item={item} mode="free" onGraded={onGraded} />;
  } else if (step.kind === "speak") {
    card = <SpeakCard item={item} onGraded={onGraded} />;
  } else if (step.kind === "sentence:build") {
    card = <SentenceCard item={item} onGraded={onGraded} />;
  } else if (step.kind === "conjugate") {
    card = <ConjugateCard item={item} onGraded={onGraded} />;
  } else {
    card = <BuildCard item={item} onGraded={onGraded} />;
  }

  return (
    <PhaseShell title={`${sandbox ? "🧪 Dev · " : ""}${fix ? "Fix-up" : "Review"} · ${idx + 1}/${reviewQueue.length}`} progress={progress} onClose={() => navigate(home)}>
      {/* Keyed remount per card drives the entrance "breath" (fade + brief
          input guard) so carried taps don't bleed into the next card. */}
      <CardBreath key={`r${idx}`}>{card}</CardBreath>
    </PhaseShell>
  );
}
