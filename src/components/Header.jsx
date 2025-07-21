import React from 'react'
import { Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { supabase } from '../context/PollContext';

import '../App.css'

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get current user on mount
    setUser(supabase.auth.getUser().then(({ data }) => data.user));
    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <>
      <div className='header'>
        <div className='pollify'>
          <Link className='homeLink' to={"/"}>Pollify</Link>
          <div className='navbar'>
            <Link to={"/"}>Home</Link>
            {!user && <Link to={"/login"}>Login</Link>}
            {user && (<button onClick={handleLogout} className="nav-link-button">Logout</button>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
