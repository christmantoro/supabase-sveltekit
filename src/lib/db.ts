import { createClient } from '@supabase/auth-helpers-sveltekit';
import { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } from '$env/static/public'; // Importing environment variables

export const supabaseClient = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);
