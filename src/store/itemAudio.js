import { useEffect, useRef, useState } from "react";
import { useStore } from "./useStore.js";
import { hasAudioId } from "./cardRouting.js";

// Skip audio under Playwright/WebDriver so CI smoke tests stay fast and quiet.
const IS_WEBDRIVER = typeof navigator !== "undefined" && !!navigator.webdriver;

// Reinforcement lands just AFTER the answer settles (~1s), not on top of it — so the
// learner registers "correct", THEN hears the word. Cancelled if they advance first.
export const REINFORCE_DELAY_MS = 1000;

// Hard ceiling on how long Continue may stay disabled waiting for a clip.
// `settled` otherwise reopens only on `ended` / `error` / a rejected play(), and a
// media element that stalls mid-buffer fires `stalled`/`waiting` and then nothing
// at all — which strands Continue forever, leaving "abandon the session" as the
// learner's only exit. This gate must fail OPEN: a learner who hears nothing has
// lost a pronunciation, while a learner who cannot advance has lost the session.
// Generous enough not to clip a real clip (the longest are ~3s) but bounded.
export const GATE_MAX_WAIT_MS = 6000;

const clipUrl = (lang, id) => `/audio/${lang}/${id}.mp3`;

// Clip URLs for the ids that ACTUALLY have a clip, in order. A missing id is dropped
// here rather than left to 404 at playback: `a.onerror` still covers a clip that is
// in the manifest but broken on disk, but a silent item must be known to be silent
// before the Continue gate closes on it.
export const clipUrls = (lang, ids) =>
  ids.filter(hasAudioId).map((id) => clipUrl(lang, id));

// The post-answer reinforcement decision, extracted as a PURE function so it can be
// unit-tested. It has to be: useItemAudio short-circuits on IS_WEBDRIVER, so under
// Playwright the gate never engages and the smoke suite is structurally incapable of
// covering this — green there says nothing about whether the gate is right.
//
// gate=false means "Continue stays enabled": either nothing will play (urls empty),
// or the clip plays without holding the card (wait=false). gate=true means a real clip
// is coming and Continue waits for it.
//
// wait=false is for a learner who tapped "Can't hear it? Show it": they have just told
// the app they cannot hear, so making them sit out a clip (REINFORCE_DELAY_MS, then the
// clip or GATE_MAX_WAIT_MS) before Continue works is dead time for nothing. The clip
// still plays, in case the sound comes back; it just does not hold the button.
export function reinforcePlan({ lang, id, then = [], enabled, wait = true, isWebdriver = IS_WEBDRIVER }) {
  if (!enabled || isWebdriver) return { urls: [], gate: false };
  const urls = clipUrls(lang, [id, ...then]);
  return { urls, gate: wait && urls.length > 0 };
}

// Plays the pre-generated pronunciation clip /audio/{lang}/{id}.mp3 (the real
// ElevenLabs voice). If a clip is missing or fails, it stays SILENT — there is
// deliberately no Web Speech fallback (that synthesized "robot" voice was scrapped
// 2026-06-28; better silence than a robot).
// opts.autoplay (default true): play on mount / item change. Pass { autoplay: false }
// for cards that must NOT reveal the sound up front (recognition/recall) but still
// want to play on demand — via play() (manual) or reinforce() (delayed, post-answer).
export function useItemAudio(item, { autoplay = true } = {}) {
  const [active, setActive] = useState(false);
  // Has the post-answer reinforcement finished? Cards gate their Continue button on
  // this, so the learner HEARS the word before the card can be dismissed — answering
  // and moving on used to outrun the audio entirely.
  //
  // Defaults TRUE and only ever goes false while a real clip is actually pending.
  // Every path that plays nothing — audio off, WebDriver, a card that never
  // reinforces, or an item with no clip in the manifest — leaves Continue enabled.
  //
  // That last one is the case this gate got WRONG at first: it disabled Continue and
  // only discovered the missing clip when the fetch 404'd a second later, so a silent
  // item cost a full REINFORCE_DELAY_MS of dead button for no audio at all. Whole
  // languages are silent (de and no have no clips at all) and pt is 60% silent — 1,791
  // of the corpus' items. The manifest is consulted BEFORE the gate closes now.
  const [settled, setSettled] = useState(true);
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const watchdogRef = useRef(null);
  // The "auto-play pronunciation" preference. play() (manual, e.g. the speaker
  // button) always plays regardless; reinforce()/mount-autoplay respect it.
  const enabled = useStore((s) => s.settings?.autoplayAudio ?? true);

  function stop() {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    if (watchdogRef.current) { clearTimeout(watchdogRef.current); watchdogRef.current = null; }
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    setActive(false);
    // Never strand the gate closed: a stopped clip is a finished clip as far as
    // Continue is concerned (unmount, item change, or a second reinforce).
    setSettled(true);
  }

  // Play a sequence of clip URLs back-to-back (each starts when the prior ends) — so
  // a particle card can chain the word then the particle (かさ → を = "kasa wo"). A
  // missing clip in the chain is skipped, not fatal.
  // gate=false plays without closing Continue (see reinforcePlan's `wait`).
  function playUrls(urls, { gate = true } = {}) {
    if (IS_WEBDRIVER || !urls.length) return;
    stop();
    // stop() reopens the gate; we are about to play, so close it again. Ordering
    // matters: without this the gate opened the instant playback STARTED, which
    // is the opposite of waiting for it to finish.
    if (gate) {
      setSettled(false);
      // Fail-open watchdog — see GATE_MAX_WAIT_MS. Nothing below is guaranteed to fire.
      watchdogRef.current = setTimeout(() => {
        watchdogRef.current = null;
        setSettled(true);
      }, GATE_MAX_WAIT_MS);
    }
    let i = 0;
    const next = () => {
      if (i >= urls.length) {
        if (watchdogRef.current) { clearTimeout(watchdogRef.current); watchdogRef.current = null; }
        setActive(false); setSettled(true); audioRef.current = null; return;
      }
      const a = new Audio(urls[i++]);
      audioRef.current = a;
      // A failed load fires BOTH onerror and the play() rejection, which stepped the
      // chain twice — on a particle cloze that skipped the particle's clip entirely
      // and nulled audioRef while it was still playing. One advance per element.
      let advanced = false;
      const advance = () => { if (advanced) return; advanced = true; next(); };
      a.onplay = () => setActive(true);
      a.onended = advance;
      a.onerror = advance; // no clip → move on, no robot fallback
      a.play().catch(advance);
    };
    next();
  }

  function play() { playUrls(clipUrls(item.lang, [item.id])); }
  function playIfEnabled() { if (enabled) play(); }

  // Reinforce AFTER the answer: waits `delay` ms, then plays the word — optionally
  // followed by extra clips (`then` = item ids in the same language, e.g. the particle
  // whose sound to append). Respects the setting; the pending play is cancelled by
  // stop() on unmount / next item, so it never bleeds onto the next card.
  // wait=false: the clip still plays, but Continue never waits for it (the learner
  // said they cannot hear it — see reinforcePlan).
  function reinforce({ delay = REINFORCE_DELAY_MS, then = [], wait = true } = {}) {
    const { urls, gate } = reinforcePlan({ lang: item.lang, id: item.id, then, enabled, wait });
    // Nothing will play — leave the gate open.
    if (!urls.length) return;
    if (gate) setSettled(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { timerRef.current = null; playUrls(urls, { gate }); }, delay);
  }

  // Autoplay on mount / when the item changes — only if the caller opted in AND the
  // user's preference is on.
  useEffect(() => { if (autoplay && enabled) play(); }, [item.id]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => stop(), []); // cleanup on unmount

  return { play, playIfEnabled, reinforce, active, settled };
}
