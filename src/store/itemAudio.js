import { useEffect, useRef, useState } from "react";
import { useStore } from "./useStore.js";

// Skip audio under Playwright/WebDriver so CI smoke tests stay fast and quiet.
const IS_WEBDRIVER = typeof navigator !== "undefined" && !!navigator.webdriver;

// Plays the pre-generated pronunciation clip /audio/{lang}/{id}.mp3 (the real
// ElevenLabs voice). If the clip is missing or fails, it stays SILENT — there is
// deliberately no Web Speech fallback (that synthesized "robot" voice was scrapped
// 2026-06-28; better silence than a robot). Items without a generated clip just
// don't speak until one is generated.
export function useItemAudio(item) {
  const [active, setActive] = useState(false);
  const audioRef = useRef(null);
  // Auto-play on a new card respects the user's preference; the speaker button
  // (manual play) always plays regardless.
  const autoplay = useStore((s) => s.settings?.autoplayAudio ?? true);

  function stop() {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    setActive(false);
  }

  function play() {
    if (IS_WEBDRIVER) return;
    stop();
    const a = new Audio(`/audio/${item.lang}/${item.id}.mp3`);
    audioRef.current = a;
    a.onplay = () => setActive(true);
    a.onended = () => { setActive(false); audioRef.current = null; };
    a.onerror = () => { setActive(false); audioRef.current = null; }; // no clip → silent
    a.play().catch(() => { setActive(false); }); // no robot fallback
  }

  // Autoplay on mount / when the item changes — unless the user turned it off.
  useEffect(() => { if (autoplay) play(); }, [item.id]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => stop(), []); // cleanup on unmount

  return { play, active };
}
