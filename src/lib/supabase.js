import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://okymyglodjqrflwgvekl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9reW15Z2xvZGpxcmZsd2d2ZWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwODYzODQsImV4cCI6MjA3MzY2MjM4NH0.mqBsyHD6le1Hl4UI3fvwFlgSLSSv3bmKuA1eVaMyt6A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Auth helper functions
export const auth = {
  // Sign in with Google
  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
    return { data, error };
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Get current user
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  // Get session
  async getSession() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  },

  // Listen to auth changes
  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
  }
};

// Database helper functions
export const db = {
  // Creator applications
  async submitCreatorApplication(data) {
    const { data: result, error } = await supabase
      .from('creator_applications')
      .insert([data])
      .select()
      .single();
    return { data: result, error };
  },

  // Get creator application by email
  async getApplicationByEmail(email) {
    const { data, error } = await supabase
      .from('creator_applications')
      .select('*')
      .eq('email', email)
      .single();
    return { data, error };
  },

  // Job applications
  async submitJobApplication(data) {
    const { data: result, error } = await supabase
      .from('job_applications')
      .insert([data])
      .select()
      .single();
    return { data: result, error };
  },

  // Listings
  async getListings(filters = {}) {
    let query = supabase.from('listings').select('*');

    if (filters.category) {
      query = query.eq('category', filters.category);
    }
    if (filters.location) {
      query = query.ilike('location', `%${filters.location}%`);
    }
    if (filters.featured) {
      query = query.eq('featured', true);
    }

    const { data, error } = await query.order('created_at', { ascending: false });
    return { data, error };
  },

  // Add a listing
  async addListing(data) {
    const { data: result, error } = await supabase
      .from('listings')
      .insert([data])
      .select()
      .single();
    return { data: result, error };
  }
};

// Storage helper functions
export const storage = {
  // Upload file to bucket
  async uploadFile(bucket, path, file) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);
    return { data, error };
  },

  // Get public URL for file
  getPublicUrl(bucket, path) {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  },

  // Delete file
  async deleteFile(bucket, path) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .remove([path]);
    return { data, error };
  }
};