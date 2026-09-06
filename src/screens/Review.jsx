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
import { useStore, REVIEW_CAP, activeLangId } from "../store/useStore.js";
import { isReviewable, nextRung, MAX_RUNG, isMastered, masteryPct } from "../store/mastery.js";
import { sfxRungUp, sfxMastered } from "../store/sfx.js";
import { reviewStepFor } from "../store/reviewStep.js";
import { buildSandboxItems, buildCardPreviewItems, runnerWriters } from "../store/dev.js";
import { LIVE_CARD_KINDS } from "../data/contract.js";
import { C, F } from "../theme.js";

// A practice run is deliberately short — it is meant to be repeatable three times a
// day without becoming a slog, and the 4/day per-item cap means a longer run would
// just hit the ceiling on the same words.
const PRACTICE_SIZE = 12;

function assertLiveKind(kindKey) {
  if (!LIVE_CARD_KINDS.includes(kindKey)) {
    throw new Error(`Review routed unlisted card kind "${kindKey}". Add it to LIVE_CARD_KINDS first.`);
  }
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
  // Practice: counts toward mastery, never toward the schedule. See practiceItem.
  const practice = searchParams.get("practice") === "1";

  const storeItems = useStore((s) => s.items);
  const dueItems = useStore((s) => s.dueItems);
  const mistakeIds = useStore((s) => s.mistakes);
  const profile = useStore((s) => s.profile);
  // The mistake list is profile-wide; the mistake REVIEW is not. Without this a
  // Japanese learner's "fix these" served French cards — the same defect the daily
  // queue had, one screen over. dueItems() scopes itself in the store.
  const activeId = activeLangId(profile);
  // `?card=<kind>` → the Quick-card launcher (one item seeded to yield that kind);
  // otherwise `?lesson=&state=` → the per-lesson depth preview.
  const cardParam = searchParams.get("card");
  const sandboxItems = useMemo(
    () =>
      sandbox
        ? cardParam
          ? buildCardPreviewItems(cardParam, searchParams.get("lang"))
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
  const practiceItem = useStore((s) => s.practiceItem);
  const { gradeItem, completeReviews, rollDailyGoal } = runnerWriters(sandbox, realWriters);

  // Snapshot the queue on mount — grading mutates items but shouldn't reshuffle.
  // In sandbox only the previewed lesson's items are reviewable (everything else
  // is rung 0), so filtering by isReviewable yields exactly that lesson.
  const { reviewQueue, totalDue } = useMemo(
    () => {
      let source, total = 0;
      if (sandbox) source = Object.values(items).filter(isReviewable);
      else if (practice) {
        // Everything this learner has started in this language that is not finished,
        // ordered by how far from mastery it is — so a run fills the widest gaps first.
        // NOT filtered by SRS due-ness: that is the whole point. Practice is the only
        // way to get the passes the schedule will not offer for months.
        source = Object.values(items)
          .filter((it) => it.lang === activeId && isReviewable(it) && !isMastered(it))
          .sort((a, b) => masteryPct(a) - masteryPct(b))
          .slice(0, PRACTICE_SIZE);
      } else if (fix)
        source = (mistakeIds ?? [])
          .map((mid) => items[mid])
          .filter((it) => it && it.lang === activeId && isReviewable(it));
      else {
        // Daily review: cap to REVIEW_CAP, OLDEST-due first, so a backlog doesn't
        // wall up. `total` is the true due count (for the honest "N of M" message);
        // the rest stay due and return next session.
        const all = dueItems();
        total = all.length;
        source = all
          .slice()
          .sort((a, b) => new Date(a.srs?.due ?? 0) - new Date(b.srs?.due ?? 0))
          .slice(0, REVIEW_CAP);
      }
      const queue = source.map((it) => ({ ...reviewStepFor(it), id: it.id }));
      return { reviewQueue: queue, totalDue: total || queue.length };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const capped = !sandbox && !fix && totalDue > reviewQueue.length;

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
          <div style={{ color: C.inkSoft, maxWidth: 320 }}>
            {capped ? (
              <>You reviewed {reviewQueue.length} of {totalDue} due — the rest come back next time. No need to clear them all at once.</>
            ) : (
              <>{reviewQueue.length} item{reviewQueue.length === 1 ? "" : "s"} {fix ? "revisited." : "reviewed."}</>
            )}
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
    // A rung climb is real progress up the ladder — chime for it (the ladder was
    // silent between the answer sound and the finish fanfare). Reaching the TOP rung
    // (MASTERED) gets its own warmer sound. nextRung is pure, so this reads the
    // would-be rung without depending on gradeItem's async write.
    const after = nextRung(item, grade);
    if (after > (item.rung ?? 1)) (after >= MAX_RUNG ? sfxMastered : sfxRungUp)();
    // Tell the store WHICH card this was, so mastery credits the right skill.
    // kindKey is computed below in the same body and is assigned by the time this
    // closure runs (it fires on an answer, after render).
    if (practice) {
      // The load-bearing line of this whole mode: a practice answer records a pass and
      // touches nothing else. No srs, no rung, no daily goal. Drilling a word four
      // times a day would otherwise collapse its FSRS interval and destroy the
      // retention model that sits beside mastery.
      practiceItem(item.id, kindKey, grade);
    } else {
      gradeItem(item.id, grade, kindKey);
    }
    setIdx((i) => i + 1);
  };
  const kindKey = step.kind === "type" ? `type:${step.mode}` : step.kind;
  assertLiveKind(kindKey);

  let card;
  if (step.kind === "choice") {
    card = <ChoiceCard item={item} allItems={items} onGraded={onGraded} />;
  } else if (step.kind === "choice:reverse") {
    card = <ChoiceCard item={item} allItems={items} onGraded={onGraded} reverse />;
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
