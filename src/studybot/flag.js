// THE STUDYBOT BUILD FLAG. vite.config.js defines both values in EVERY build:
// "1" and the tutor's api base in `--mode studybot`, "" otherwise. Vite replaces
// them with string literals, so in a normal (production) build STUDYBOT folds to
// `false`, every `if (!STUDYBOT) return` body is dropped, and the hook module
// (./hook.js) is never emitted. scripts/check-no-studybot.mjs proves it on dist/.
//
// Never read this from node: import.meta.env does not exist there. Pure logic
// lives in ./core.js for that reason.
export const STUDYBOT = import.meta.env.VITE_STUDYBOT === "1";

// Where the text tutor's server lives (a Vercel PREVIEW deployment's origin,
// e.g. https://lingua-git-branch-alex.vercel.app). "" means no tutor in this build.
export const STUDYBOT_API = STUDYBOT ? import.meta.env.VITE_STUDYBOT_API : "";

// The tutor server's shared secret (TUTOR_TEXT_TOKEN on the deployment), sent as
// `x-tutor-token`. Baked into Doodle's LOCAL build only — dist-studybot/ is
// gitignored and vercelignored, so it never reaches the repo or a deployment.
export const STUDYBOT_TUTOR_TOKEN = STUDYBOT ? import.meta.env.VITE_STUDYBOT_TUTOR_TOKEN : "";

// Optional: Vercel's "Protection Bypass for Automation" secret, if preview
// deployments are protected. Sent as a query parameter so CORS preflights pass.
export const STUDYBOT_API_BYPASS = STUDYBOT ? import.meta.env.VITE_STUDYBOT_API_BYPASS : "";
