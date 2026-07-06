import { useEffect, useRef, useState } from "react";
import { useStore } from "./useStore.js";

// Skip audio under Playwright/WebDriver so CI smoke tests stay fast and quiet.
const IS_WEBDRIVER = typeof navigator !== "undefined" && !!navigator.webdriver;

// Plays the pre-generated pronunciation clip /audio/{lang}/{id}.mp3 (the real
// ElevenLabs voice). If the clip is missing or fails, it stays SILENT — there is
// deliberately no Web Speech fallback (that synthesized "robot" voice was scrapped
// 2026-06-28; better silence than a robot). Items without a generated clip just
// don't speak until one is generated.
// opts.autoplay (default true): play on mount / item change. Pass { autoplay: false }
// for cards that must NOT reveal the sound up front (recognition/recall) but still
// want to play the pronunciation on demand — e.g. as reinforcement once the answer
// is in (via playIfEnabled).
export function useItemAudio(item, { autoplay = true } = {}) {
  const [active, setActive] = useState(false);
  const audioRef = useRef(null);
  // The "auto-play pronunciation" preference. play() (manual, e.g. the speaker
  // button) always plays regardless; playIfEnabled() and mount-autoplay respect it.
  const enabled = useStore((s) => s.settings?.autoplayAudio ?? true);

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

  // Play only when the auto-pronounce preference is on — for automatic moments
  // like answer reinforcement, so a user who turned pronunciation off stays quiet.
  function playIfEnabled() { if (enabled) play(); }

  // Autoplay on mount / when the item changes — only if the caller opted in AND
  // the user's preference is on.
  useEffect(() => { if (autoplay && enabled) play(); }, [item.id]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => stop(), []); // cleanup on unmount

  return { play, playIfEnabled, active };
}
