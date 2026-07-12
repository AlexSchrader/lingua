// Best-effort LOCAL daily reminder via the Notification Triggers API — the only
// client-side way to fire a scheduled notification while the app is CLOSED. It's
// Chromium-only (Chrome/Edge, best on an installed PWA); iOS Safari / Firefox don't
// support scheduled triggers, so reliable cross-device reminders will need server
// web-push (a backend follow-up). Everything here degrades to a safe no-op when
// unsupported, unpermitted, or under test — never throws.

const IS_WEBDRIVER = typeof navigator !== "undefined" && !!navigator.webdriver;
const TAG = "daily-reminder";

export function notificationsSupported() {
  return typeof window !== "undefined" && "Notification" in window && "serviceWorker" in navigator;
}

// Scheduled (fires while closed) requires the Notification Triggers API.
export function triggersSupported() {
  return notificationsSupported() && typeof window.TimestampTrigger === "function";
}

export function notificationPermission() {
  return notificationsSupported() ? Notification.permission : "denied";
}

export async function requestReminderPermission() {
  if (!notificationsSupported() || IS_WEBDRIVER) return "denied";
  try {
    return await Notification.requestPermission();
  } catch {
    return "denied";
  }
}

// Next occurrence of "HH:MM" at/after `now` — today if it's still ahead, else
// tomorrow. `now` is injectable so it's deterministically unit-testable.
export function nextOccurrence(hhmm, now = new Date()) {
  const [h, m] = String(hhmm).split(":").map((n) => parseInt(n, 10));
  const t = new Date(now);
  t.setHours(Number.isFinite(h) ? h : 0, Number.isFinite(m) ? m : 0, 0, 0);
  if (t.getTime() <= now.getTime()) t.setDate(t.getDate() + 1);
  return t;
}

async function swReg() {
  try {
    return await navigator.serviceWorker.ready;
  } catch {
    return null;
  }
}

export async function cancelReminders() {
  if (!notificationsSupported()) return;
  const r = await swReg();
  if (!r) return;
  try {
    const ns = await r.getNotifications({ tag: TAG, includeTriggered: true });
    ns.forEach((n) => n.close());
  } catch {
    /* getNotifications options vary by engine — best-effort */
  }
}

// Schedule (or reschedule) the daily reminder for the next occurrence of `hhmm`.
// Returns true iff a trigger was actually scheduled. Cancels any prior one first
// so re-calling on every app open just rolls it forward a day.
export async function scheduleDailyReminder(hhmm) {
  if (IS_WEBDRIVER || !triggersSupported() || notificationPermission() !== "granted" || !hhmm) return false;
  const r = await swReg();
  if (!r) return false;
  await cancelReminders();
  try {
    await r.showNotification("Time to practice 🌱", {
      tag: TAG,
      body: "A few minutes keeps it growing — your reviews are waiting when you're ready.",
      showTrigger: new window.TimestampTrigger(nextOccurrence(hhmm).getTime()),
      requireInteraction: false,
    });
    return true;
  } catch {
    return false;
  }
}
