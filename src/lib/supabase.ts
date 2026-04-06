import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('¡Faltan las variables de entorno de Supabase! Asegúrate de poner tus llaves en tu archivo .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
