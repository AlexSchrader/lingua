import { createClient } from "@supabase/supabase-js";
import { STUDYBOT } from "../studybot/flag.js";

// Single Supabase client for the app. NULL when the env vars are absent — in
// that case the whole accounts/sync feature stays dormant and the app runs
// local-only, exactly as before (CI and any un-provisioned deploy hit this
// path). The anon key is public-by-design; Row-Level Security protects the data.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

//
// A StudyBot build (Doodle's study window) has NO accounts, ever: vite.config.js
// blanks both keys in that mode, and this guard holds even if they leak through.
export const supabase =
  url && anonKey && !STUDYBOT
    ? createClient(url, anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true, // handle the OAuth redirect callback
          flowType: "pkce",
        },
      })
    : null;

export const isCloudConfigured = !!supabase;
