// Test DB connection in `src/services/supabase-client.ts`.

/**
 * Supabase Client Setup
 *
 * This file initializes the Supabase client for use throughout the Vyntra Care project.
 *
 * Usage:
 *   import { supabase, testSupabaseConnection } from '@/services/supabase-client';
 *
 * Environment Variables Required:
 *   - NEXT_PUBLIC_SUPABASE_URL
 *   - NEXT_PUBLIC_SUPABASE_ANON_KEY
 *
 * For authentication and database queries, use the exported `supabase` object.
 * To verify DB connectivity, use the `testSupabaseConnection` function.
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error('Supabase environment variables are missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Test Supabase DB connection by fetching one product.
 * Usage: await testSupabaseConnection();
 */
export async function testSupabaseConnection() {
	const { data, error } = await supabase
		.from('products')
		.select('*')
		.limit(1);
	if (error) {
		throw new Error(`Supabase connection failed: ${error.message}`);
	}
	return data;
}