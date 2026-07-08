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
import CardBreath from "../components/CardBreath.jsx";
import Celebration from "../components/Celebration.jsx";
import { useStore } from "../store/useStore.js";
import { isReviewable } from "../store/mastery.js";
import { isTraceable, shouldListen, shouldListenType, shouldTypeReading, shouldTypeProduce, shouldSpeak, shouldCloze, shouldParticleCloze, shouldSentence } from "../store/cardRouting.js";
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

  // Extra-practice run: /review?practice=<n>. A no-stakes drill over the n
  // least-practiced learned items — reuses the exact same review cards, but its
  // writers are no-op'd (see runnerWriters below), so it never reschedules FSRS,
  // moves a rung, awards XP, or ticks the streak. Pure retrieval practice.
  const practiceN = parseInt(searchParams.get("practice") || "", 10);
  const practice = Number.isFinite(practiceN) && practiceN > 0;

  const storeItems = useStore((s) => s.items);
  const dueItems = useStore((s) => s.dueItems);
  const practiceItems = useStore((s) => s.practiceItems);
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
  // Practice is no-stakes: swap every writer for a no-op, exactly like sandbox.
  const { gradeItem, completeReviews, rollDailyGoal } = runnerWriters(sandbox || practice, realWriters);

  // Snapshot the queue on mount — grading mutates items but shouldn't reshuffle.
  // In sandbox only the previewed lesson's items are reviewable (everything else
  // is rung 0), so filtering by isReviewable yields exactly that lesson.
  const reviewQueue = useMemo(
    () => {
      const source = practice
        ? practiceItems(practiceN)
        : sandbox
        ? Object.values(items).filter(isReviewable)
        : dueItems();
      return source.map((it) => ({ ...reviewStepFor(it), id: it.id }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [idx, setIdx] = useState(0);
  const [finished, setFinished] = useState(false);

  const done = idx >= reviewQueue.length;

  useEffect(() => {
    // Only mark reviews complete when there was real work to do. With an empty
    // queue `done` is true on first render, so without this guard merely opening
    // /review with nothing due would fire completeReviews + rollDailyGoal and bump
    // the streak for zero work. The "Nothing due" screen below stays informational.
    if (done && !finished && reviewQueue.length > 0) {
      // Practice never completes the daily reviews or rolls the streak — it's
      // extra, off to the side. (Writers are already no-op'd, but keep the daily
      // bookkeeping out of the practice path explicitly.)
      if (!practice) {
        completeReviews();
        rollDailyGoal();
      }
      setFinished(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  if (reviewQueue.length === 0) {
    return (
      <PhaseShell title={practice ? "Practice" : "Reviews"} progress={1} onClose={() => navigate(home)}>
        <div style={{ margin: "auto", textAlign: "center", color: C.inkSoft }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
          {practice ? "Nothing to practice yet — learn a few items first." : "Nothing due right now."}
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
      <PhaseShell title={practice ? "Practice" : "Reviews"} progress={1}>
        {/* Reviews are the mandatory daily habit (the streak trigger) — they earn
            the same fanfare + confetti as a lesson. Practice is extra and no-stakes,
            so it gets a calm completion instead (no confetti, no streak language). */}
        {!practice && <Celebration />}
        <div style={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
          <div style={{ fontSize: 56 }}>✓</div>
          <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>{practice ? "Nice practice" : "Reviews cleared"}</div>
          <div style={{ color: C.inkSoft, maxWidth: 300 }}>
            {reviewQueue.length} item{reviewQueue.length === 1 ? "" : "s"} {practice ? "practiced — this didn't change your progress or streak." : "reviewed."}
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
  } else {
    card = <BuildCard item={item} onGraded={onGraded} />;
  }

  return (
    <PhaseShell title={`${sandbox ? "🧪 Dev · " : ""}${practice ? "Practice" : "Review"} · ${idx + 1}/${reviewQueue.length}`} progress={progress} onClose={() => navigate(home)}>
      {/* Keyed remount per card drives the entrance "breath" (fade + brief
          input guard) so carried taps don't bleed into the next card. */}
      <CardBreath key={`r${idx}`}>{card}</CardBreath>
    </PhaseShell>
  );
}
