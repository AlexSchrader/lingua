import { useStore } from "../store/useStore.js";
import { F } from "../theme.js";
import { parseFurigana, hasKanji, hasInlineFurigana } from "../store/furigana.js";

function Rt({ children }) {
  return <rt style={{ fontSize: "0.5em", fontWeight: 500, fontFamily: F.jp }}>{children}</rt>;
}

// Reading scaffolding you can switch off as you grow (parallels Show-romaji).
// Two modes:
//  - headword:  <Furigana text="車" reading="kuruma" />  → ruby the reading over the
//    whole word when it contains kanji.
//  - sentence:  <Furigana text="電車(でんしゃ)で行(い)きます" /> → renders the inline
//    漢字(かな) annotations as ruby; plain where unannotated.
// Off (setting off, or no kanji) → plain text with any (readings) stripped.
export default function Furigana({ text = "", reading, style }) {
  const on = useStore((s) => s.settings?.furigana ?? true);
  const inline = hasInlineFurigana(text);

  // Headword mode: a reading is supplied and there's no inline annotation.
  if (reading != null && !inline) {
    if (!on || !hasKanji(text)) return <span style={style}>{text}</span>;
    return <ruby style={style}>{text}<Rt>{reading}</Rt></ruby>;
  }

  // Sentence mode: render inline 漢字(かな) annotations.
  const segs = parseFurigana(text);
  return (
    <span style={style}>
      {segs.map((seg, i) =>
        on && seg.rt ? (
          <ruby key={i}>{seg.base}<Rt>{seg.rt}</Rt></ruby>
        ) : (
          <span key={i}>{seg.base}</span>
        )
      )}
    </span>
  );
}
