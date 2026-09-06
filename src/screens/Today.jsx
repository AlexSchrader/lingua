import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, RotateCcw, Lock, Check, Star, Award, ChevronRight, Dumbbell } from "lucide-react";
import { useStore, REVIEW_CAP, activeLangId } from "../store/useStore.js";
import { LANGUAGES, orderedUnits } from "../data/index.js";
import { isReviewable, isMastered } from "../store/mastery.js";
import { nextMilestone } from "../data/milestones.js";
import { C, F } from "../theme.js";
import Mascot from "../components/Mascot.jsx";
import { VERSION } from "../version.js";

// Friendly relative time for the next scheduled review.
function fmtWhen(ts) {
  if (!ts) return null;
  const ms = ts - Date.now();
  if (ms <= 0) return "now";
  const hours = ms / 3_600_000;
  if (hours < 24) return hours <= 1 ? "within an hour" : `in ~${Math.round(hours)} h`;
  const days = Math.round(hours / 24);
  return days <= 1 ? "tomorrow" : `in ~${days} days`;
}

// Time-of-day greeting (name folds in later, once onboarding gives us one).
function greeting(name) {
  const h = new Date().getHours();
  const base = h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
  // Onboarding collects a display name — actually use it (it was captured and read
  // nowhere, so the greeting stayed generic forever). Falls back cleanly when absent.
  return name ? `${base}, ${name}` : base;
}

function StatusPill({ icon: Icon, label, value, state }) {
  // state: "active" | "done" | "locked"
  const done = state === "done";
  const locked = state === "locked";
  const color = done ? C.matcha : locked ? C.locked : C.ai;
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 14,
        background: C.surface,
        border: `1px solid ${C.line}`,
        opacity: locked ? 0.7 : 1,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 9,
          background: done ? C.matcha : locked ? C.locked : C.aiSoft,
          color: done || locked ? "#fff" : C.aiDeep,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {done ? <Check size={16} /> : locked ? <Lock size={15} /> : <Icon size={16} />}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 11, color: C.inkSoft, fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 700, color, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{value}</div>
      </div>
    </div>
  );
}

// CEFR stage → display band. "pre-a1" → "Pre-A1", "a1" → "A1", "b1" → "B1".
function formatStage(stage) {
  if (!stage) return null;
  return String(stage)
    .split("-")
    .map((seg) => (/\d/.test(seg) ? seg.toUpperCase() : seg.charAt(0).toUpperCase() + seg.slice(1)))
    .join("-");
}

// Where a lesson sits, in human terms: its CEFR section, unit number, and its
// position WITHIN that unit (n/total) — not a global "2/93" that only ever grows
// scarier. Numbers reset each unit, so the denominator stays small and legible.
function lessonLocation(lesson, langUnits) {
  const unit = langUnits.find((u) => u.lessons.some((l) => l.id === lesson.id));
  if (!unit) return null;
  const playable = unit.lessons.filter((l) => Array.isArray(l.items));
  return {
    section: formatStage(unit.stage),
    unitNum: unit.order ?? lesson.unit ?? null,
    lessonInUnit: playable.findIndex((l) => l.id === lesson.id) + 1,
    unitTotal: playable.length,
  };
}

export default function Today() {
  const navigate = useNavigate();
  // Select STABLE refs (raw state + action fns) and derive in useMemo. Zustand
  // v5 dropped selector memoization, so returning a fresh array straight from a
  // selector (e.g. `s.dueItems()`) makes useSyncExternalStore loop and crash the
  // mount. Computing here keeps the snapshot stable.
  const items = useStore((s) => s.items);
  const daily = useStore((s) => s.daily);
  const milestonesEarned = useStore((s) => s.milestonesEarned);
  const languages = useStore((s) => s.languages);
  const profile = useStore((s) => s.profile);
  // Same helper the store scopes dueItems/reviewsLocked with — this used to be an
  // inline copy of the identical fallback, which is exactly the drift the shared
  // export exists to prevent (the screen and the store must never disagree about
  // which language the learner is in).
  const activeId = activeLangId(profile);
  const active = { ...LANGUAGES.find((l) => l.id === activeId), ...(languages[activeId] ?? {}) };
  const dueItemsFn = useStore((s) => s.dueItems);
  const reviewsLockedFn = useStore((s) => s.reviewsLocked);
  const mistakes = useStore((s) => s.mistakes);
  const devSeedReviews = useStore((s) => s.devSeedReviews);

  // Both are scoped to the active language inside the store, so `activeId` is a real
  // dependency — without it, switching language would keep showing the previous
  // language's due count and lock state until some other input happened to change.
  const due = useMemo(() => dueItemsFn(activeId), [items, activeId, dueItemsFn]);
  const reviewsLocked = useMemo(
    () => reviewsLockedFn(activeId),
    [items, daily, activeId, reviewsLockedFn]
  );
  // Was THIS language reviewed today? Not the same question as `daily.reviewsCleared`
  // (was the day's duty met anywhere) — the closure signals below need to tell a
  // language capped today apart from one another language's session merely unlocked.
  const langCleared = (daily.clearedLangs ?? []).includes(activeId);
  // Show the SESSION size, not the full backlog — a capped, non-scary number (the
  // Review runner serves at most REVIEW_CAP, oldest-due first; the rest return next
  // session). Prevents the "47 due" wall on the home screen.
  const sessionDue = Math.min(due.length, REVIEW_CAP);

  // Units for the active language (source for both the flat lesson list and the
  // per-lesson "section / unit / lesson-in-unit" location shown on the cards).
  // CLIMB order, not barrel order — see orderedUnits() in src/data/index.js. Reading
  // UNITS directly here served French from file position, so "Les sons" (order 1) sat
  // 26 units down the queue while unit 1's lessons were labelled "Unit 2".
  const langUnits = useMemo(() => orderedUnits(activeId), [activeId]);
  // All lessons across all units that have item content (ordered).
  const allPlayableLessons = useMemo(
    () => langUnits.flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items))),
    [langUnits]
  );
  // Advance to the first lesson that still has rung-0 items — natural progression
  // without a separate unlock system. null when all lessons are complete.
  const currentLesson = useMemo(
    () =>
      allPlayableLessons.find((l) => l.items.some((def) => (items[def.id]?.rung ?? 0) < 1)) ??
      null,
    [allPlayableLessons, items]
  );

  // How many rung-0 items remain in the current lesson (for the time estimate).
  const newItemCount = useMemo(
    () => (currentLesson?.items ?? []).filter((def) => (items[def.id]?.rung ?? 0) < 1).length,
    [currentLesson, items]
  );
  // Rough estimate: ~45 s per item × 3 cards each ≈ 0.75 min/item.
  const estMinutes = Math.max(1, Math.ceil(newItemCount * 0.75));

  // Dev affordance is shown in dev builds, or on any build when the URL carries
  // ?dev — so it can be triggered on the deployed Vercel preview for playtesting
  // while staying hidden in normal use.
  const devMode = import.meta.env.DEV || new URLSearchParams(location.search).has("dev");

  // No reviews to clear when the queue is empty — treat as already done.
  // "done" means this language is settled for today — either nothing is due, or its
  // own session was completed and the cap is holding the rest back on purpose. The
  // GLOBAL flag alone was wrong in both directions: it painted the pill green over a
  // language with real untouched debt, and (once the pill was scoped) it painted a
  // capped Japanese backlog red, which is the "47 due" wall REVIEW_CAP exists to
  // hide. It takes both facts to tell those two apart.
  const reviewState = due.length === 0 || langCleared ? "done" : "active";
  const lessonState = daily.lessonDone ? "done" : reviewsLocked ? "locked" : "active";

  // Is there still new material to learn? (any lesson has rung-0 items.)
  const hasNew = currentLesson !== null;
  // Daily goal is a FLOOR, not a ceiling: meeting it ticks the streak and shows
  // a marker, but never ends the session or caps how much you can do.
  const goalMet = daily.reviewsCleared && daily.lessonDone;

  // Capability signals for the active language — what you can now DO. These replace
  // the retired streak/XP/freezes scoreboard (honest structural progress).
  const learnedCount = useMemo(
    () => Object.values(items).filter((it) => it.lang === activeId && isReviewable(it)).length,
    [items, activeId]
  );
  const masteredCount = useMemo(
    () => Object.values(items).filter((it) => it.lang === activeId && isMastered(it)).length,
    [items, activeId]
  );
  // Scoped to the language THIS SCREEN is showing. Today is an active-language
  // screen — learned, mastered and the kana strip are all activeId-scoped — so the
  // gentle next goal must be too. It used to read profile.languages with a hardcoded
  // ["ja"] fallback, so a French learner whose profile carried ja (or carried no
  // language list at all) was offered "You learned your first kanji · 1 to go" under
  // a French header. Cross-language milestones (lang: null, e.g. "100 words mastered")
  // still come through — milestonesForLangs keeps those. Stats keeps the wider
  // started-languages scope for the full earned list.
  const nextMs = useMemo(() => nextMilestone(items, [activeId]), [items, activeId]);

  // Progress glance + next-review timing (from the data we already track).
  const masteredKana = useMemo(
    () => Object.values(items).filter((it) => it.lang === activeId && it.type === "kana" && isMastered(it)).length,
    [items, activeId]
  );
  const nextReviewAt = useMemo(() => {
    const times = Object.values(items)
      .filter((it) => it.lang === activeId && isReviewable(it) && it.srs?.due)
      .map((it) => new Date(it.srs.due).getTime())
      .filter((t) => t > Date.now());
    return times.length ? Math.min(...times) : null;
  }, [items, activeId]);

  // Mascot pose + a calm, non-nagging line for the current state.
  const mascot = goalMet
    ? { pose: "celebrate", msg: "Nice work today. Come back tomorrow — or keep going if you're in the zone." }
    : reviewsLocked
    ? { pose: "think", msg: "A few reviews are waiting — no rush. Learn a little or clear them, whichever feels right." }
    : hasNew
    ? { pose: "cheer", msg: "Ready when you are. One lesson at a time — no rush." }
    : { pose: "sleepy", msg: "All caught up. Rest up — your reviews will come back around." };

  // The lesson AFTER the current one — a genuine forward look (Step 2 already
  // shows the current lesson, so "Up next" should be the one beyond it).
  const nextLesson = useMemo(() => {
    if (!currentLesson) return null;
    const idx = allPlayableLessons.indexOf(currentLesson);
    return allPlayableLessons[idx + 1] ?? null;
  }, [currentLesson, allPlayableLessons]);
  // Human-readable location (section / unit / lesson-in-unit) for both cards.
  const curLoc = useMemo(() => (currentLesson ? lessonLocation(currentLesson, langUnits) : null), [currentLesson, langUnits]);
  const nextLoc = useMemo(() => (nextLesson ? lessonLocation(nextLesson, langUnits) : null), [nextLesson, langUnits]);

  // Hiragana progress for the fullness strip.
  const kanaTotal = useMemo(() => Object.values(items).filter((it) => it.lang === activeId && it.type === "kana").length, [items, activeId]);
  const kanaLearned = useMemo(
    () => Object.values(items).filter((it) => it.lang === activeId && it.type === "kana" && (it.rung ?? 0) >= 1).length,
    [items, activeId]
  );
  const kanaPct = kanaTotal ? Math.round((kanaLearned / kanaTotal) * 100) : 0;

  const startReview = () => navigate("/review");
  const practiceLeft = useStore((s) => s.practiceRunsLeft)();
  const startPracticeRun = useStore((s) => s.startPracticeRun);
  const startPractice = () => {
    startPracticeRun();
    navigate("/review?practice=1");
  };
  const startFix = () => navigate("/review?fix=1");
  // Scoped like everything else on this screen: the mistake list is stored for the
  // whole profile, but "Fix your mistakes (N)" sits under one language's card and
  // must count only that language's misses. `isReviewable` matches the filter the
  // mistake runner itself applies (Review.jsx) — without it the button could offer
  // "Fix your mistakes (3)" and then open straight onto "No mistakes to fix".
  const mistakeCount = (mistakes ?? []).filter(
    (id) => items[id]?.lang === activeId && isReviewable(items[id])
  ).length;
  const startLesson = () => {
    const target = currentLesson ?? allPlayableLessons[0] ?? null;
    if (target) navigate(`/lesson/${target.id}`);
  };
  // "Just a few": start the current lesson capped to a handful of new items — a
  // low-activation-energy on-ramp for a tired day. The lesson runner reads ?few.
  const MICRO_SIZE = 3;
  const startFew = () => {
    const target = currentLesson ?? allPlayableLessons[0] ?? null;
    if (target) navigate(`/lesson/${target.id}?few=${MICRO_SIZE}`);
  };

  // Primary CTA: reviews first if due; lesson once reviews are clear.
  let ctaLabel;
  let ctaDisabled = false;
  let ctaAction;
  if (due.length > 0 && !daily.reviewsCleared) {
    ctaLabel = "Clear reviews";
    ctaAction = startReview;
  } else if (hasNew) {
    ctaLabel = daily.lessonDone ? "Keep learning" : "Start lesson";
    ctaAction = startLesson;
  } else if (due.length > 0) {
    // No new lessons left in this language and the day's duty is already met, but
    // cards are still due here. "All caught up" would be a flat lie printed directly
    // above a live "Review … anyway" button, so offer the review as the primary
    // action instead. Only reachable once a learner exhausts a language's authored
    // content, which French and Spanish learners will do long before Japanese does.
    ctaLabel = "Review anyway";
    ctaAction = startReview;
  } else {
    ctaLabel = "All caught up";
    ctaDisabled = true;
    ctaAction = undefined;
  }

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16, minHeight: "100%" }}>
      {/* Greeting + mascot in one banner — a single hello, not two. Adaptive size. */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: 14,
          borderRadius: 16,
          background: C.surface,
          border: `1px solid ${C.line}`,
        }}
      >
        <Mascot context="greeting" pose={mascot.pose} style={{ width: "clamp(72px, 18vw, 132px)", flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: F.disp, fontSize: 19, fontWeight: 700, marginBottom: 2 }}>{greeting(profile.displayName)}</div>
          <div style={{ fontSize: 14, color: C.ink, lineHeight: 1.35, fontWeight: 600 }}>{mascot.msg}</div>
          <div style={{ fontSize: 12, color: C.inkSoft, fontWeight: 600, marginTop: 6 }}>
            {active.flag} {active.name} · {active.level === "pre-A1" ? `${learnedCount} item${learnedCount === 1 ? "" : "s"}` : active.level} → {active.target} goal
            {nextReviewAt ? ` · next review ${fmtWhen(nextReviewAt)}` : ""}
          </div>
        </div>
      </div>

      {/* Capability signals — what you can now DO. Replaces the streak/XP/freezes
          scoreboard: honest structural progress, never activity. */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <Stat icon={Check} color={C.ai} label="Learned" value={learnedCount} />
        <Stat icon={Star} color={C.matcha} label="Mastered" value={masteredCount} />
        <Stat icon={Award} color={C.matcha} label="Milestones" value={milestonesEarned?.length ?? 0} />
      </div>

      {/* The single nearest milestone as a gentle goal (taps through to Stats). */}
      {nextMs && (
        <button
          onClick={() => navigate("/stats")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            width: "100%",
            textAlign: "left",
            background: C.surface,
            border: `1px solid ${C.line}`,
            borderRadius: 14,
            padding: "12px 14px",
            cursor: "pointer",
            fontFamily: F.body,
          }}
        >
          <Award size={18} color={C.matcha} style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, color: C.inkSoft, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.4 }}>Next milestone</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.ink }}>{nextMs.label}</div>
          </div>
          <span style={{ fontSize: 12, color: C.inkSoft, fontWeight: 700, flexShrink: 0 }}>{nextMs.remaining} to go</span>
          <ChevronRight size={16} color={C.inkSoft} style={{ flexShrink: 0 }} />
        </button>
      )}

      {/* Review-debt nudge — a calm reminder, not an alarm. Reviews come first,
          but they never fully block learning: a few new items stay open (below). */}
      {reviewsLocked && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: 12,
            borderRadius: 12,
            background: C.aiSoft,
            border: `1px solid ${C.ai}`,
            color: C.aiDeep,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <RotateCcw size={18} />
          {sessionDue} review{sessionDue === 1 ? "" : "s"} waiting — clear them whenever you're ready. You can still learn a few new things first.
        </div>
      )}

      {/* Compact status — reviews + lesson at a glance. The button below is the
          single action, so these stay slim indicators, not a second set of CTAs. */}
      <div style={{ display: "flex", gap: 10 }}>
        <StatusPill
          icon={RotateCcw}
          label="Reviews"
          // "Cleared" means THIS language was reviewed today — not that some other
          // language's session met the daily duty. A capped backlog still reads
          // "Cleared" (you did today's work; the rest is deliberately held back),
          // while a language you haven't touched shows its real count however many
          // other languages you cleared.
          value={langCleared ? "Cleared" : due.length > 0 ? `${sessionDue} due` : "All clear"}
          state={reviewState}
        />
        <StatusPill
          icon={BookOpen}
          label={curLoc ? `${curLoc.section} · Unit ${curLoc.unitNum}` : "Lesson"}
          value={daily.lessonDone ? "Done" : lessonState === "locked" ? "Reviews first" : curLoc ? `Lesson ${curLoc.lessonInUnit}/${curLoc.unitTotal}` : "—"}
          state={lessonState}
        />
      </div>

      {/* Goal-met marker — a floor, not a terminator. */}
      {goalMet && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 12px",
            borderRadius: 12,
            background: C.matchaSoft,
            border: `1px solid ${C.matcha}`,
            color: C.matcha,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <Check size={16} /> Daily goal met — keep going as long as you like.
        </div>
      )}

      {/* Primary CTA — continuous, no daily wall. */}
      <button
        data-testid="start-session"
        onClick={ctaAction}
        disabled={ctaDisabled}
        style={{
          padding: 18,
          borderRadius: 16,
          border: "none",
          background: ctaDisabled ? C.lockedBg : C.ai,
          color: ctaDisabled ? C.locked : "#fff",
          fontSize: 17,
          fontWeight: 700,
          fontFamily: F.body,
          cursor: ctaDisabled ? "default" : "pointer",
          boxShadow: ctaDisabled ? "none" : "0 4px 14px rgba(42,74,123,0.25)",
        }}
      >
        {ctaLabel}
      </button>
      {ctaDisabled ? (
        <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center", marginTop: -6 }}>
          Nothing due right now — your reviews are scheduled for later.
        </div>
      ) : ctaLabel !== "Clear reviews" && currentLesson ? (
        <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center", marginTop: -6 }}>
          {currentLesson.title} · {currentLesson.canDo ?? "Learn new items"} · ~{estMinutes} min
        </div>
      ) : null}

      {/* Low-energy on-ramp: a handful of new items instead of the full lesson.
          Also the soft escape from review-debt — even with reviews waiting you can
          still learn a few new things (never a hard wall). Only worth offering when
          the lesson has more than a few new items. */}
      {(ctaLabel === "Start lesson" || ctaLabel === "Keep learning" || reviewsLocked) && currentLesson && newItemCount > MICRO_SIZE && (
        <button
          data-testid="start-few"
          onClick={startFew}
          style={{ padding: "12px 18px", borderRadius: 14, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 14, fontWeight: 700, fontFamily: F.body, cursor: "pointer", marginTop: 2 }}
        >
          {reviewsLocked ? `Learn a few first (${MICRO_SIZE})` : `Low on energy? Just a few (${MICRO_SIZE})`}
        </button>
      )}

      {/* Optional review, once the day's duty is already met elsewhere. The daily
          obligation is global (clear reviews in ANY language and lessons unlock in
          all of them), which means a second language can sit on real debt with the
          primary CTA showing "Start lesson". Today is the only non-dev route to
          /review, so without this button that queue would be genuinely unreachable
          until tomorrow — the per-language cap would starve exactly the language it
          was meant to protect. Offered, never demanded: it is a quiet secondary
          action, and nothing is locked behind it. */}
      {daily.reviewsCleared && !langCleared && due.length > 0 && (
        <button
          data-testid="start-review-optional"
          onClick={startReview}
          style={{ padding: "12px 18px", borderRadius: 14, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 14, fontWeight: 700, fontFamily: F.body, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          <RotateCcw size={16} /> Review {active.name} anyway ({sessionDue})
        </button>
      )}

      {/* PRACTICE. The only source of mastery passes other than the scheduled review,
          and the reason mastery is reachable at all: spaced repetition deliberately
          MINIMISES repetitions, so the queue alone would take years to supply 15 passes
          on every card kind. Capped at three runs a day, and each item still caps at
          four counted passes daily, so this cannot become a grind or a shortcut.
          Offered, never demanded — it touches no streak, no daily goal, no schedule. */}
      {practiceLeft > 0 && (
        <button
          data-testid="start-practice"
          onClick={startPractice}
          style={{ padding: "12px 18px", borderRadius: 14, border: `1.5px solid ${C.line}`, background: C.surface, color: C.ink, fontSize: 14, fontWeight: 700, fontFamily: F.body, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          <Dumbbell size={16} /> Practice ({practiceLeft} left today)
        </button>
      )}

      {/* Mistake-review: turn diffuse failure into a bounded "fix these N". */}
      {mistakeCount > 0 && (
        <button
          data-testid="start-fix"
          onClick={startFix}
          style={{ padding: "12px 18px", borderRadius: 14, border: `1.5px solid ${C.shu}`, background: C.surface, color: C.shu, fontSize: 14, fontWeight: 700, fontFamily: F.body, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          <RotateCcw size={16} /> Fix your mistakes ({mistakeCount})
        </button>
      )}

      {/* Up next — the lesson AFTER the current one (Step 2 already shows the
          current lesson, so this is a genuine peek ahead). */}
      <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5, color: C.ai, marginBottom: 4 }}>
          {nextLesson ? (nextLoc ? `UP NEXT · ${nextLoc.section}` : "UP NEXT") : "AFTER THIS"}
        </div>
        {nextLesson ? (
          <>
            <div style={{ fontFamily: F.jp, fontSize: 15, fontWeight: 700 }}>
              {nextLoc ? `Unit ${nextLoc.unitNum} · Lesson ${nextLoc.lessonInUnit}/${nextLoc.unitTotal}` : "Lesson"} · {nextLesson.title}
            </div>
            <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 2 }}>
              {nextLesson.canDo ?? "Learn new items"}
            </div>
          </>
        ) : (
          <div style={{ fontSize: 13, color: C.inkSoft }}>
            {hasNew
              ? "Last lesson available — more units coming soon."
              : `You've learned every lesson available.${nextReviewAt ? ` Next review ${fmtWhen(nextReviewAt)}.` : ""}`}
          </div>
        )}
      </div>

      {/* Hiragana progress — fills the screen + ties Today to the Ladder. */}
      {kanaTotal > 0 && (
        <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 16, padding: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, marginBottom: 8 }}>
            <span style={{ fontWeight: 700 }}>Hiragana</span>
            <span style={{ color: C.inkSoft }}>
              {kanaLearned}/{kanaTotal} learned{masteredKana > 0 ? ` · ${masteredKana} mastered` : ""}
            </span>
          </div>
          <div style={{ height: 8, borderRadius: 999, background: C.lockedBg, overflow: "hidden" }}>
            <div style={{ width: `${kanaPct}%`, height: "100%", background: C.ai, transition: "width 250ms ease" }} />
          </div>
        </div>
      )}

      {/* Playtest shortcut — shown in dev builds, or on any build via ?dev. */}
      {devMode && (
        <button
          onClick={() => {
            devSeedReviews();
            navigate("/review");
          }}
          style={{
            padding: "8px 12px",
            borderRadius: 10,
            border: `1px dashed ${C.locked}`,
            background: "transparent",
            color: C.inkSoft,
            fontSize: 12,
            fontFamily: F.mono,
            cursor: "pointer",
          }}
        >
          DEV: force reviews due → play
        </button>
      )}

      {/* Version watermark. There are TWO of these — this one and Settings' — and
          only Settings' was flagged correctly and pinned by a test, so this one went
          on stamping 🇯🇵 on a French learner's home screen. Both carry the testid now
          so neither can drift alone. */}
      <div
        data-testid="version-watermark"
        style={{
          marginTop: "auto",
          textAlign: "right",
          fontFamily: F.mono,
          fontSize: 11,
          color: C.locked,
          opacity: 0.6,
        }}
      >
        {LANGUAGES.find((l) => l.id === activeId)?.flag ?? "🇯🇵"} {VERSION}
      </div>
    </div>
  );
}

function Stat({ label, value, icon: Icon, color }) {
  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.line}`,
        borderRadius: 14,
        padding: "12px 8px",
        textAlign: "center",
      }}
    >
      {Icon && <Icon size={18} color={color ?? C.ai} style={{ marginBottom: 2 }} />}
      <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700, color: C.ai }}>{value}</div>
      <div style={{ fontSize: 11, color: C.inkSoft, fontWeight: 600 }}>{label}</div>
    </div>
  );
}
