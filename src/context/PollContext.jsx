import React, { createContext, useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js';

export const PollContext = createContext()

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const PollContextProvider = ({children}) => {
    const [allPoll, setAllPoll] = useState([]);
    // Fetch polls from Supabase on mount
    useEffect(() => {
      async function fetchPolls() {
        const { data, error } = await supabase.from('polls').select();
        if (!error && data) setAllPoll(data);
      }
      fetchPolls();
    }, []);
    
  return (
    <PollContext.Provider value = {{allPoll,setAllPoll}}>
      {children}
    </PollContext.Provider>
  )
}

export default PollContextProvider
