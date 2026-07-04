import { useState, useMemo, useEffect } from "react";
import { Volume2 } from "lucide-react";
import { C, F } from "../../theme.js";
import { buildOptions } from "../../store/distractors.js";
import { deriveGrade } from "../../store/grading.js";
import { sfxCorrect, sfxWrong } from "../../store/sfx.js";
import { useItemAudio } from "../../store/itemAudio.js";

// Multiple choice (rung RECOGNIZED). Normally the glyph is shown and you pick the
// reading (kana) / meaning (vocab). In `audioFirst` mode — the listening card —
// the glyph is HIDDEN and you hear the clip instead: same recognition skill,
// ear-in not eye-in. A "Show it" escape reveals the glyph (deaf / muted / noisy
// contexts) and turns it back into a normal choice. correct → `good`, wrong →
// `again`, no retry. No self-grade buttons.
export default function ChoiceCard({ item, allItems, onGraded, audioFirst = false }) {
  const isKana = item.type === "kana";
  const [picked, setPicked] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const listening = audioFirst && !revealed;

  // Listening kana offers GLYPH options (the hidden answer is the glyph); every
  // other case uses the normal field. Rebuild when the mode flips ("Show it").
  const options = useMemo(
    () => buildOptions(item, allItems, 4, listening && isKana ? "front" : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item.id, listening]
  );

  useEffect(() => {
    setPicked(null);
    setRevealed(false);
  }, [item.id]);

  const answered = picked !== null;
  const grade = answered ? deriveGrade({ kind: "mc", correct: options[picked].correct }) : null;
  const optionFont = listening && isKana ? F.jp : isKana ? F.mono : F.body;

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 16 }}>
      <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600 }}>
        {listening ? "Which one did you hear?" : isKana ? "Which sound is this?" : "What does this mean?"}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          background: C.surface,
          border: `1px solid ${C.line}`,
          borderRadius: 20,
          padding: "28px 20px",
        }}
      >
        {listening ? (
          <ListenPrompt item={item} onShowIt={() => { setRevealed(true); setPicked(null); }} />
        ) : (
          <span style={{ fontFamily: F.jp, fontSize: 64, fontWeight: 500 }}>{item.front}</span>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {options.map((o, i) => {
          let bg = C.surface;
          let border = C.line;
          let color = C.ink;
          if (answered) {
            if (o.correct) {
              bg = C.matcha; border = C.matcha; color = "#fff";
            } else if (i === picked) {
              bg = C.shu; border = C.shu; color = "#fff";
            } else {
              color = C.locked;
            }
          }
          return (
            <button
              key={i}
              data-testid="option"
              data-correct={String(o.correct)}
              disabled={answered}
              onClick={() => { if (answered) return; options[i].correct ? sfxCorrect() : sfxWrong(); setPicked(i); }}
              style={{
                padding: "16px 12px",
                borderRadius: 12,
                border: `1.5px solid ${border}`,
                background: bg,
                color,
                fontSize: 16,
                fontWeight: 600,
                fontFamily: optionFont,
                cursor: answered ? "default" : "pointer",
                minHeight: 56,
              }}
            >
              {o.text}
            </button>
          );
        })}
      </div>

      {answered && (
        <button
          onClick={() => onGraded(grade)}
          style={{ padding: 16, borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
        >
          Continue
        </button>
      )}
    </div>
  );
}

// Kept as its own component so `useItemAudio` (which autoplays on mount) is only
// active in listening mode — a plain choice never auto-speaks and gives itself away.
function ListenPrompt({ item, onShowIt }) {
  const { play, active } = useItemAudio(item);
  return (
    <>
      <button
        onClick={play}
        aria-label="Play the sound"
        style={{ width: 72, height: 72, borderRadius: "50%", border: `2px solid ${C.ai}`, background: active ? C.ai : C.aiSoft, color: active ? "#fff" : C.aiDeep, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 150ms" }}
      >
        <Volume2 size={30} />
      </button>
      <button
        onClick={onShowIt}
        style={{ border: "none", background: "transparent", color: C.inkSoft, fontSize: 12, fontWeight: 700, fontFamily: F.body, cursor: "pointer", textDecoration: "underline" }}
      >
        Can't hear it? Show it
      </button>
    </>
  );
}
