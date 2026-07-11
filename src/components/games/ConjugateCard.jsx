import { useState, useRef, useEffect } from "react";
import { deriveGrade } from "../../store/grading.js";
import { useStore } from "../../store/useStore.js";
import { conjugate, CONJ_FORM_LABEL } from "../../store/conjugate.js";
import { sfxCorrect, sfxWrong } from "../../store/sfx.js";
import { C, F } from "../../theme.js";

// Conjugation production card. The item carries a verb (`front` = ～ます form), its
// `group` (godan/ichidan/irregular), and `conjForm` (the target form to produce).
// The engine computes the correct answer, so this generalizes to any tagged verb.
//   item: { front: "のみます", group: "godan", conjForm: "te" }  → expects "のんで"
const strip = (s) => String(s ?? "").trim().replace(/\s+/g, "");

export default function ConjugateCard({ item, onGraded }) {
  const noSpeed = useStore((s) => s.settings?.noSpeedPressure ?? false);
  const answer = conjugate(item.front, item.group, item.conjForm);
  const [value, setValue] = useState("");
  const [retried, setRetried] = useState(false);
  const [phase, setPhase] = useState("input"); // "input" | "feedback"
  const [outcome, setOutcome] = useState(null);
  const [grade, setGrade] = useState(null);
  const shownAt = useRef(performance.now());
  const inputRef = useRef(null);

  useEffect(() => {
    shownAt.current = performance.now();
    setValue(""); setRetried(false); setPhase("input"); setOutcome(null); setGrade(null);
    inputRef.current?.focus();
  }, [item.id]);

  // Smoke/dev test hook: fill the correct form (no keyboard automation needed).
  // Mirrors window.__sentence / window.__speak used by the other production cards.
  useEffect(() => {
    window.__conjugate = { solve: () => setValue(answer ?? "") };
    return () => { delete window.__conjugate; };
  }, [answer]);

  const submit = () => {
    if (phase === "feedback" || !answer) return;
    if (strip(value) === strip(answer)) {
      sfxCorrect();
      setGrade(deriveGrade({ kind: "typed", correct: true, retried, elapsedMs: performance.now() - shownAt.current, target: answer, noSpeed }));
      setOutcome("correct"); setPhase("feedback");
    } else if (!retried) {
      sfxWrong(); setRetried(true); setValue("");
    } else {
      sfxWrong(); setGrade("again"); setOutcome("wrong"); setPhase("feedback");
    }
  };

  const feedback = phase === "feedback";
  const label = CONJ_FORM_LABEL[item.conjForm] ?? item.conjForm;

  return (
    <div data-testid="conjugate-card" data-card-kind="conjugate" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, padding: "8px 4px" }}>
      <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 700 }}>Conjugate — {label}</div>
      <div style={{ fontFamily: F.disp, fontSize: 40, fontWeight: 700 }}>{item.front}</div>
      <div style={{ fontSize: 15, color: C.ai, fontWeight: 800 }}>→ {label}?</div>

      {!feedback ? (
        <>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
            placeholder="type the form (kana)"
            autoCapitalize="off" autoCorrect="off" spellCheck={false}
            style={{ width: "100%", maxWidth: 320, fontSize: 22, textAlign: "center", padding: "12px 14px", borderRadius: 12, border: `2px solid ${retried ? C.err ?? "#c0392b" : C.line}`, background: C.surface, color: C.ink, fontFamily: F.body, outline: "none" }}
          />
          {retried && <div style={{ fontSize: 13, color: C.err ?? "#c0392b", fontWeight: 700 }}>Not quite — one more try.</div>}
          <button onClick={submit} style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: F.body, cursor: "pointer" }}>
            Check
          </button>
        </>
      ) : (
        <>
          <div style={{ fontSize: 15, fontWeight: 800, color: outcome === "correct" ? (C.matcha ?? "#2e7d32") : (C.err ?? "#c0392b") }}>
            {outcome === "correct" ? "Correct!" : "The answer:"}
          </div>
          <div style={{ fontFamily: F.disp, fontSize: 30, fontWeight: 700 }}>{answer}</div>
          <button onClick={() => onGraded(grade)} style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 800, fontFamily: F.body, cursor: "pointer" }}>
            Continue
          </button>
        </>
      )}
    </div>
  );
}
