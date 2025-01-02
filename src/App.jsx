import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Auth from './components/Auth';
import Gallery from './components/Gallery';

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      const { data: listener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          setSession(session);
        }
      );

      return () => {
        listener?.subscription.unsubscribe();
      };
    };

    getSession();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 font-sans">
      {!session ? (
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-primary mb-4 text-center">
            Welcome to the App
          </h1>
          <p className="text-base font-medium text-neutral-700 mb-4 text-center">
            Your seamless experience starts here.
          </p>
          <p className="text-base font-medium text-neutral-700 mb-4 text-center">
            Sign in with ZAPT
          </p>
          <Auth />
          <div className="mt-8 text-center">
            <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary">
              Made on ZAPT
            </a>
          </div>
        </div>
      ) : (
        <Gallery key={session.user.id} session={session} />
      )}
    </div>
  );
}