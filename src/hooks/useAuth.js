import { useState, useEffect } from 'react';
import { supabase, auth } from '@/lib/supabase';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    auth.getSession().then(session => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const { error } = await auth.signInWithGoogle();
    if (error) console.error('Error signing in:', error);
  };

  const signOut = async () => {
    const { error } = await auth.signOut();
    if (error) console.error('Error signing out:', error);
    setUser(null);
  };

  return {
    user,
    loading,
    signInWithGoogle,
    signOut
  };
}