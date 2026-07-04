import { useState, useRef, useEffect } from "react";
import { C, F } from "../../theme.js";
import { deriveGrade } from "../../store/grading.js";
import { checkMeaning, checkReading, checkProduce, charDiff } from "../../store/answer.js";
import { sfxCorrect, sfxWrong } from "../../store/sfx.js";

// Typed answer (rung RECALLED → type the meaning; rung PRODUCED → produce the
// Japanese). The app judges: one free retry on a miss (caps the grade at
// `hard`); a second miss → `again` and reveal. First-try correct is graded by
// speed. No self-grade buttons.
//
// mode: "meaning" | "produce"
// Near-miss feedback: "so close!" + what you wrote vs the answer, differing
// characters highlighted. Warm, and it makes a one-character slip a teaching
// moment instead of a flat wrong.
function NearMiss({ typed, answer, tokenFont }) {
  const d = charDiff(typed, answer);
  const render = (chars, base, hi) =>
    chars.map((c, i) => (
      <span key={i} style={{ fontFamily: tokenFont, color: c.diff ? hi : base, fontWeight: c.diff ? 700 : 500 }}>
        {c.ch}
      </span>
    ));
  return (
    <div style={{ textAlign: "center", fontSize: 15, lineHeight: 1.5 }}>
      <div style={{ color: C.shu, fontWeight: 700, marginBottom: 6 }}>{d.close ? "So close!" : "Not quite —"}</div>
      <div style={{ color: C.inkSoft, fontSize: 14 }}>you wrote {render(d.typed, C.inkSoft, C.shu)}</div>
      <div style={{ color: C.inkSoft, fontSize: 14, marginTop: 2 }}>answer {render(d.answer, C.ink, C.matcha)}</div>
    </div>
  );
}

export default function TypeCard({ item, mode, onGraded }) {
  const isKana = item.type === "kana";

  // Resolve prompt + checker + the canonical answer for this mode/type.
  const spec = (() => {
    if (mode === "produce") {
      return isKana
        ? { prompt: item.reading, jp: false, ask: "Type the kana",
            check: (v) => v.trim() === item.front, answer: item.front }
        : { prompt: item.meaning, jp: false, ask: "Write it in Japanese",
            check: (v) => checkProduce(v, item), answer: item.front };
    }
    // meaning (recall)
    return isKana
      ? { prompt: item.front, jp: true, ask: "Type the rōmaji",
          check: (v) => checkReading(v, item), answer: item.reading }
      : { prompt: item.front, jp: true, ask: "Type the meaning",
          check: (v) => checkMeaning(v, item), answer: item.meaning };
  })();

  const shownAt = useRef(performance.now());
  const [value, setValue] = useState("");
  const [retried, setRetried] = useState(false);
  const [phase, setPhase] = useState("input"); // "input" | "feedback"
  const [outcome, setOutcome] = useState(null); // "correct" | "wrong"
  const [grade, setGrade] = useState(null);

  useEffect(() => {
    shownAt.current = performance.now();
    setValue("");
    setRetried(false);
    setPhase("input");
    setOutcome(null);
    setGrade(null);
  }, [item.id, mode]);

  const submit = () => {
    if (phase === "feedback") return;
    if (spec.check(value)) {
      sfxCorrect();
      const elapsed = performance.now() - shownAt.current;
      setGrade(deriveGrade({ kind: "typed", correct: true, retried, elapsedMs: elapsed, target: spec.answer }));
      setOutcome("correct");
      setPhase("feedback");
    } else if (!retried) {
      sfxWrong();
      setRetried(true); // one free retry
    } else {
      sfxWrong();
      setGrade("again");
      setOutcome("wrong");
      setPhase("feedback");
    }
  };

  const feedback = phase === "feedback";

  return (
    <div
      data-testid="type-card"
      data-card-kind={mode === "produce" ? "type:produce" : "type:meaning"}
      data-answer={spec.answer}
      style={{ display: "flex", flexDirection: "column", flex: 1, gap: 16 }}
    >
      <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600 }}>{spec.ask}</div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: C.surface,
          border: `1px solid ${C.line}`,
          borderRadius: 20,
          padding: "28px 20px",
          textAlign: "center",
        }}
      >
        <span style={{ fontFamily: spec.jp ? F.jp : F.body, fontSize: spec.jp ? 56 : 28, fontWeight: 500 }}>
          {spec.prompt}
        </span>
      </div>

      <input
        data-testid="type-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          if (feedback) onGraded(grade);
          else submit();
        }}
        disabled={feedback}
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        placeholder="Type your answer…"
        style={{
          padding: "14px 16px",
          borderRadius: 12,
          border: `1.5px solid ${
            feedback ? (outcome === "correct" ? C.matcha : C.shu) : retried ? C.shu : C.line
          }`,
          background: C.surface,
          fontFamily: spec.jp || mode === "produce" ? F.jp : F.body,
          fontSize: 18,
          outline: "none",
          textAlign: "center",
        }}
      />

      {retried && !feedback && (
        <div style={{ fontSize: 13, color: C.shu, fontWeight: 600, textAlign: "center" }}>
          Not quite — try once more
        </div>
      )}

      {feedback && (
        outcome === "correct" ? (
          <div style={{ textAlign: "center", fontSize: 15 }}>
            <span style={{ color: C.matcha, fontWeight: 700 }}>Correct</span>
          </div>
        ) : value.trim() ? (
          // Softer miss: show what you wrote vs the answer with the differing
          // characters highlighted, so a one-kana slip reads as "so close".
          <NearMiss typed={value} answer={spec.answer} tokenFont={spec.jp ? F.body : F.jp} />
        ) : (
          <div style={{ textAlign: "center", fontSize: 15 }}>
            <span style={{ color: C.shu, fontWeight: 700 }}>Answer:</span>{" "}
            <span style={{ fontFamily: spec.jp ? F.body : F.jp }}>{spec.answer}</span>
          </div>
        )
      )}

      {!feedback ? (
        <button
          onClick={submit}
          style={{
            padding: 16,
            borderRadius: 14,
            border: "none",
            background: C.ai,
            color: "#fff",
            fontSize: 16,
            fontWeight: 700,
            fontFamily: F.body,
            cursor: "pointer",
          }}
        >
          Check
        </button>
      ) : (
        <button
          onClick={() => onGraded(grade)}
          style={{
            padding: 16,
            borderRadius: 14,
            border: "none",
            background: C.ai,
            color: "#fff",
            fontSize: 16,
            fontWeight: 700,
            fontFamily: F.body,
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      )}
    </div>
  );
}
