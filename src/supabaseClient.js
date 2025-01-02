import { initializeZapt } from '@zapt/zapt-js';
import { createClient } from '@supabase/supabase-js';

export const { createEvent, supabase: zaptSupabase } = initializeZapt(import.meta.env.VITE_PUBLIC_APP_ID);

export const supabase = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
);