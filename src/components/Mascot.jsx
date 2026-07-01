import { useState } from "react";

// Lingua the mascot — a still image, or an animated clip for specific app
// moments. Clips live in public/mascot/ (plain URL paths, no import). If a clip
// is missing/fails or the user prefers reduced motion, it falls back to the still.
const STILLS = {
  base: "/mascot/lingua-base.png",
  celebrate: "/mascot/lingua-celebrate.png",
  cheer: "/mascot/lingua-cheer.png",
  proud: "/mascot/lingua-proud.png",
  sleepy: "/mascot/lingua-sleepy.png",
  think: "/mascot/lingua-think.png",
  wave: "/mascot/lingua-wave.png",
  wistful: "/mascot/lingua-wistful.png",
};

// context → { still (fallback pose), clip (actual file in public/mascot), loop }.
//   loop: true  → ambient states, play continuously (loading, streak)
//   loop: false → one-shot reactions, play once and hold the last frame
const CONTEXTS = {
  loading: { still: "think", clip: "/mascot/lingua-loading.mp4", loop: true },
  lessonComplete: { still: "celebrate", clip: "/mascot/lingua-lesson-complete.mp4", loop: false },
  achievement: { still: "proud", clip: "/mascot/lingua-achievement.mp4", loop: false },
  streakReminder: { still: "sleepy", clip: "/mascot/lingua-streak.mp4", loop: true },
  greeting: { still: "wave", clip: "/mascot/lingua-greeting.mp4", loop: false },
  correctAnswer: { still: "cheer", clip: "/mascot/lingua-correct-choice.mp4", loop: false },
  wrongAnswer: { still: "wistful", clip: "/mascot/lingua-wrong-choice.mp4", loop: false },
  unitUnlock: { still: "proud", clip: "/mascot/lingua-unit-unlock.mp4", loop: false },
  error: { still: "wistful", clip: "/mascot/lingua-error.mp4", loop: false },
  idle: { still: "base", clip: null, loop: false },
};

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

/**
 * <Mascot context="lessonComplete" />
 * <Mascot context="wrongAnswer" onEnded={() => advanceCard()} />
 * <Mascot pose="wistful" />              // static still, no clip
 *
 * `videoKey` (any changing value) forces the clip to replay from frame 0.
 * `onEnded` fires once when a one-shot clip finishes.
 */
export default function Mascot({ context, pose, videoKey, size = 130, className = "", style = {}, onEnded }) {
  const [failed, setFailed] = useState(false);
  const preset = context ? CONTEXTS[context] : null;
  const resolvedStill = pose || preset?.still || "base";
  const stillSrc = STILLS[resolvedStill] ?? STILLS.base;
  const reduceMotion = prefersReducedMotion();

  if (!preset?.clip || reduceMotion || failed) {
    return (
      <img src={stillSrc} alt="" aria-hidden className={className} style={{ width: size, height: "auto", display: "block", ...style }} />
    );
  }

  return (
    <video
      key={videoKey}
      src={preset.clip}
      poster={stillSrc}
      autoPlay
      muted
      playsInline
      loop={preset.loop}
      onEnded={onEnded}
      onError={() => setFailed(true)}
      aria-hidden
      className={className}
      style={{ width: size, height: "auto", display: "block", ...style }}
    />
  );
}
