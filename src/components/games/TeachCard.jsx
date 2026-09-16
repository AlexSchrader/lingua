import { Volume2 } from "lucide-react";
import { C, F } from "../../theme.js";
import { sfxClick } from "../../store/sfx.js";
import { useItemAudio } from "../../store/itemAudio.js";
import { useStore } from "../../store/useStore.js";
import Furigana from "../Furigana.jsx";
import { readingIsInformative } from "../../store/cardRouting.js";

const HAS_KANJI = /[一-龯々]/;

export default function TeachCard({ item, onAdvance }) {
  const { play, active } = useItemAudio(item);
  const showRomaji = useStore((s) => s.settings?.showRomaji ?? true);
  const furigana = useStore((s) => s.settings?.furigana ?? true);
  // Orient a brand-new learner: the very first thing they ever see is a big glyph
  // + "Got it" with no explanation of the loop. Show a one-time framing line while
  // nothing is learned yet; it self-hides the moment the first item graduates.
  const isFirstEver = useStore((s) => !Object.values(s.items).some((it) => (it.rung ?? 0) >= 1));
  // "New word" over a bare é is wrong - it is a LETTER, and the lesson that
  // teaches it never shows a word. `glyph` is the Latin-script letter type.
  const label =
    item.type === "kana" ? "character"
    : item.type === "kanji" ? "kanji"
    : item.type === "glyph" ? "letter"
    : "word";
  // A hint may be written as several lines: the first is the hook, and each line
  // after it is one short bullet. Keyboard instructions are the reason - "hold E
  // on a phone, Option+e then e on a Mac, Alt+0233 on Windows" is three devices
  // run together in one sentence, which is exactly the wall of text this app is
  // supposed to design out. One device per line reads cleanly and scans. Purely a
  // rendering rule: the engine never looks at WHAT the lines say.
  const [hookLine, ...hintBullets] = String(item.hint ?? "").split(/\r?\n/).map((t) => t.trim()).filter(Boolean);
  // When furigana rubies the reading over a kanji headword, the romaji line below
  // is redundant — drop it so the reading shows once (all-kana words are unaffected).
  const rubied = furigana && HAS_KANJI.test(item.front ?? "");
  // …and for a Latin-script front the `reading` is the ASCII typing key, not a
  // pronunciation guide — showing it printed "silvousplait" under "s'il vous plaît".
  const showsReading = showRomaji && !rubied && readingIsInformative(item);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 16 }}>
      <div style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600, textAlign: "center" }}>
        New {label}
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          background: C.surface,
          border: `1px solid ${C.line}`,
          borderRadius: 20,
          padding: "32px 20px",
          textAlign: "center",
        }}
      >
        <Furigana
          text={item.front}
          reading={item.reading}
          style={{ fontFamily: F.jp, fontSize: 72, fontWeight: 500, lineHeight: 1 }}
        />
        {showsReading && (
          <div style={{ fontFamily: F.mono, fontSize: 20, color: C.ai, fontWeight: 600 }}>
            {item.reading}
          </div>
        )}
        {item.meaning && <div style={{ fontSize: 18 }}>{item.meaning}</div>}
        {item.example && (
          <div style={{ fontSize: 14, color: C.inkSoft }}>
            <Furigana text={item.example.jp} style={{ fontFamily: F.jp }} /> — {item.example.en}
          </div>
        )}

        {item.hint && (
          <div
            style={{
              fontSize: 12,
              color: C.inkSoft,
              fontStyle: "italic",
              textAlign: "center",
              maxWidth: 280,
              padding: "8px 14px",
              background: C.washi,
              borderRadius: 10,
            }}
          >
            <div>Memory hook: {hookLine}</div>
            {hintBullets.length > 0 && (
              <ul style={{ margin: "8px 0 0", padding: 0, listStyle: "none", textAlign: "left", fontStyle: "normal" }}>
                {hintBullets.map((line) => (
                  <li key={line} style={{ display: "flex", gap: 6, lineHeight: 1.5 }}>
                    <span aria-hidden="true" style={{ color: C.ai }}>&bull;</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <button
          onClick={play}
          aria-label="Replay pronunciation"
          style={{
            marginTop: 4,
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: `1px solid ${active ? C.ai : C.line}`,
            background: active ? C.ai : C.washi,
            color: active ? "#fff" : C.ai,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 150ms, border-color 150ms",
          }}
        >
          <Volume2 size={20} />
        </button>
      </div>

      {isFirstEver && (
        <div style={{ fontSize: 12, color: C.inkSoft, textAlign: "center", lineHeight: 1.45, padding: "0 8px" }}>
          New here? Just get a feel for it — you'll see it again over the next few days.
          Forgetting one is part of how it sticks.
        </div>
      )}

      <button
        onClick={() => { sfxClick(); onAdvance(); }}
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
        Got it
      </button>
    </div>
  );
}
