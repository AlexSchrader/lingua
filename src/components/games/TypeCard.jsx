import { useState, useRef, useEffect } from "react";
import { Volume2 } from "lucide-react";
import { C, F } from "../../theme.js";
import { deriveGrade } from "../../store/grading.js";
import { checkMeaning, checkReading, checkProduce, charDiff, looksRomaji, produceAllowsRomaji } from "../../store/answer.js";
import { sfxCorrect, sfxWrong, sfxAlmost } from "../../store/sfx.js";
import { useItemAudio } from "../../store/itemAudio.js";
import { useStore } from "../../store/useStore.js";

// Dictation prompt (listen:type): a Play button in place of the glyph, autoplaying
// on mount, so the ear — not the eye — drives the answer. Mirrors ChoiceCard's
// listening prompt. Own component so useItemAudio only autoplays in listen mode.
function ListenPrompt({ item }) {
  const { play, active } = useItemAudio(item);
  return (
    <button
      onClick={play}
      aria-label="Play the sound"
      style={{ width: 72, height: 72, borderRadius: "50%", border: `2px solid ${C.ai}`, background: active ? C.ai : C.aiSoft, color: active ? "#fff" : C.aiDeep, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 150ms" }}
    >
      <Volume2 size={30} />
    </button>
  );
}

// Typed answer (rung RECALLED → type the meaning; rung PRODUCED → produce the
// Japanese). The app judges: one free retry on a miss (caps the grade at
// `hard`); a second miss → `again` and reveal. First-try correct is graded by
// speed. No self-grade buttons.
//
// mode: "meaning" (JP→English) | "reading" (JP→rōmaji) | "produce" (English→JP)
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

export default function TypeCard({ item, mode, onGraded, listen = false }) {
  const isKana = item.type === "kana";
  const noSpeed = useStore((s) => s.settings?.noSpeedPressure ?? false);

  // Resolve prompt + checker + the canonical answer for this mode/type.
  const spec = (() => {
    if (listen) {
      // Dictation: hear the word (glyph hidden), type its reading. Accepts rōmaji
      // or kana via checkReading — the ear-path twin of type:reading.
      return { prompt: null, jp: false, ask: "Type what you hear (rōmaji or kana)",
               check: (v) => checkReading(v, item), answer: item.reading };
    }
    if (mode === "produce") {
      return isKana
        ? { prompt: item.reading, jp: false, ask: "Type the kana",
            check: (v) => v.trim() === item.front, answer: item.front }
        : { prompt: item.meaning, jp: false,
            ask: produceAllowsRomaji(item) ? "Type it in Japanese — rōmaji or kana" : "Type it in Japanese ⌨️ (kana — not rōmaji)",
            check: (v) => checkProduce(v, item), answer: item.front };
    }
    if (mode === "reading") {
      // Japanese → rōmaji: type the reading of the word shown.
      return { prompt: item.front, jp: true, ask: "Type the rōmaji",
               check: (v) => checkReading(v, item), answer: item.reading };
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
  const [revealed, setRevealed] = useState(false); // "Show answer" escape used
  // Reinforce the word's pronunciation once the answer settles (feedback), whether
  // right or wrong — so the learner always hears the target. Respects the setting;
  // autoplay:false so a recall prompt never speaks the answer before they type.
  const { playIfEnabled } = useItemAudio(item, { autoplay: false });

  useEffect(() => {
    shownAt.current = performance.now();
    setValue("");
    setRetried(false);
    setPhase("input");
    setOutcome(null);
    setGrade(null);
    setRevealed(false);
  }, [item.id, mode]);

  // "Show answer" escape: a stuck learner shouldn't have to submit-wrong twice
  // (two stings + an `again`) just for not knowing. Reveal the answer and grade
  // `again` once — same SRS outcome as a genuine miss, none of the shame. ND
  // learners freeze on recall; this respects the freeze instead of punishing it.
  const showAnswer = () => {
    if (phase === "feedback") return;
    sfxWrong();
    setRevealed(true);
    setGrade("again");
    setOutcome("wrong");
    setPhase("feedback");
    playIfEnabled();
  };

  const submit = () => {
    if (phase === "feedback") return;
    if (spec.check(value)) {
      sfxCorrect();
      const elapsed = performance.now() - shownAt.current;
      setGrade(deriveGrade({ kind: "typed", correct: true, retried, elapsedMs: elapsed, target: spec.answer, noSpeed }));
      setOutcome("correct");
      setPhase("feedback");
      playIfEnabled();
    } else if (!retried) {
      sfxAlmost(); // first slip → "almost, try once more" (distinct from a real miss)
      setRetried(true); // one free retry
    } else {
      sfxWrong();
      setGrade("again");
      setOutcome("wrong");
      setPhase("feedback");
      playIfEnabled();
    }
  };

  const feedback = phase === "feedback";
  // On a kana-only produce card (A2+), a Latin-letter answer isn't "wrong" so much
  // as the wrong keyboard — nudge to switch rather than diff romaji against kana.
  // Where rōmaji is accepted (≤A1 on-ramp) it's a normal answer, so no nudge.
  const romajiOnProduce = mode === "produce" && !produceAllowsRomaji(item) && looksRomaji(value);
  // When rōmaji IS accepted and the learner typed rōmaji, a miss is diffed against
  // the rōmaji reading (not the kana front) so the near-miss reads sensibly.
  const romajiProduceMiss = mode === "produce" && produceAllowsRomaji(item) && looksRomaji(value);

  return (
    <div
      data-testid="type-card"
      data-card-kind={listen ? "listen:type" : `type:${mode}`}
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
        {listen ? (
          <ListenPrompt item={item} />
        ) : (
          <span style={{ fontFamily: spec.jp ? F.jp : F.body, fontSize: spec.jp ? 56 : 28, fontWeight: 500 }}>
            {spec.prompt}
          </span>
        )}
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
          fontFamily: spec.jp ? F.jp : F.body,
          fontSize: 18,
          outline: "none",
          textAlign: "center",
        }}
      />

      {retried && !feedback && (
        <div style={{ fontSize: 13, color: C.shu, fontWeight: 600, textAlign: "center" }}>
          {romajiOnProduce ? "Switch to your Japanese keyboard — type the kana, not rōmaji." : "Not quite — try once more"}
        </div>
      )}

      {feedback && (
        revealed ? (
          // Escaped via "Show answer" — no diff/shame, just the answer to learn.
          <div style={{ textAlign: "center", fontSize: 15 }}>
            <span style={{ color: C.inkSoft, fontWeight: 700 }}>Answer:</span>{" "}
            <span style={{ fontFamily: spec.jp ? F.body : F.jp }}>{spec.answer}</span>
          </div>
        ) : outcome === "correct" ? (
          <div style={{ textAlign: "center", fontSize: 15 }}>
            <span style={{ color: C.matcha, fontWeight: 700 }}>Correct</span>
          </div>
        ) : romajiOnProduce ? (
          // Romaji on Type-JP: don't diff Latin vs kana — show the kana answer
          // and point back to the keyboard.
          <div style={{ textAlign: "center", fontSize: 15, lineHeight: 1.5 }}>
            <div style={{ color: C.shu, fontWeight: 700, marginBottom: 6 }}>Japanese keyboard needed</div>
            <div style={{ color: C.inkSoft, fontSize: 14 }}>
              answer <span style={{ fontFamily: F.jp }}>{spec.answer}</span>
            </div>
          </div>
        ) : value.trim() ? (
          // Softer miss: show what you wrote vs the answer with the differing
          // characters highlighted, so a one-kana slip reads as "so close".
          <NearMiss
            typed={value}
            answer={romajiProduceMiss ? item.reading : spec.answer}
            tokenFont={romajiProduceMiss ? F.body : spec.jp || listen ? F.body : F.jp}
          />
        ) : (
          <div style={{ textAlign: "center", fontSize: 15 }}>
            <span style={{ color: C.shu, fontWeight: 700 }}>Answer:</span>{" "}
            <span style={{ fontFamily: spec.jp ? F.body : F.jp }}>{spec.answer}</span>
          </div>
        )
      )}

      {!feedback ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
          <button
            onClick={showAnswer}
            style={{
              padding: "6px 12px",
              border: "none",
              background: "transparent",
              color: C.inkSoft,
              fontSize: 13,
              fontWeight: 600,
              fontFamily: F.body,
              cursor: "pointer",
            }}
          >
            Show answer
          </button>
        </div>
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
