import { useEffect, useRef, useState } from "react";
import { useStore } from "./useStore.js";

// Skip audio under Playwright/WebDriver so CI smoke tests stay fast and quiet.
const IS_WEBDRIVER = typeof navigator !== "undefined" && !!navigator.webdriver;

// Reinforcement lands just AFTER the answer settles (~1s), not on top of it — so the
// learner registers "correct", THEN hears the word. Cancelled if they advance first.
export const REINFORCE_DELAY_MS = 1000;

const clipUrl = (lang, id) => `/audio/${lang}/${id}.mp3`;

// Plays the pre-generated pronunciation clip /audio/{lang}/{id}.mp3 (the real
// ElevenLabs voice). If a clip is missing or fails, it stays SILENT — there is
// deliberately no Web Speech fallback (that synthesized "robot" voice was scrapped
// 2026-06-28; better silence than a robot).
// opts.autoplay (default true): play on mount / item change. Pass { autoplay: false }
// for cards that must NOT reveal the sound up front (recognition/recall) but still
// want to play on demand — via play() (manual) or reinforce() (delayed, post-answer).
export function useItemAudio(item, { autoplay = true } = {}) {
  const [active, setActive] = useState(false);
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  // The "auto-play pronunciation" preference. play() (manual, e.g. the speaker
  // button) always plays regardless; reinforce()/mount-autoplay respect it.
  const enabled = useStore((s) => s.settings?.autoplayAudio ?? true);

  function stop() {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    setActive(false);
  }

  // Play a sequence of clip URLs back-to-back (each starts when the prior ends) — so
  // a particle card can chain the word then the particle (かさ → を = "kasa wo"). A
  // missing clip in the chain is skipped, not fatal.
  function playUrls(urls) {
    if (IS_WEBDRIVER || !urls.length) return;
    stop();
    let i = 0;
    const next = () => {
      if (i >= urls.length) { setActive(false); audioRef.current = null; return; }
      const a = new Audio(urls[i++]);
      audioRef.current = a;
      a.onplay = () => setActive(true);
      a.onended = next;
      a.onerror = next; // no clip → move on, no robot fallback
      a.play().catch(() => next());
    };
    next();
  }

  function play() { playUrls([clipUrl(item.lang, item.id)]); }
  function playIfEnabled() { if (enabled) play(); }

  // Reinforce AFTER the answer: waits `delay` ms, then plays the word — optionally
  // followed by extra clips (`then` = item ids in the same language, e.g. the particle
  // whose sound to append). Respects the setting; the pending play is cancelled by
  // stop() on unmount / next item, so it never bleeds onto the next card.
  function reinforce({ delay = REINFORCE_DELAY_MS, then = [] } = {}) {
    if (!enabled || IS_WEBDRIVER) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    const urls = [clipUrl(item.lang, item.id), ...then.map((id) => clipUrl(item.lang, id))];
    timerRef.current = setTimeout(() => { timerRef.current = null; playUrls(urls); }, delay);
  }

  // Autoplay on mount / when the item changes — only if the caller opted in AND the
  // user's preference is on.
  useEffect(() => { if (autoplay && enabled) play(); }, [item.id]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => stop(), []); // cleanup on unmount

  return { play, playIfEnabled, reinforce, active };
}
